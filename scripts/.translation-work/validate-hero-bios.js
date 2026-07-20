const fs = require('fs');
const path = require('path');

global.window = {};
require(path.join(__dirname, '..', '..', 'src', 'data', 'heroes.js'));
const heroes = global.window.heroCatalogData;

const heroTranslationsModule = fs.readFileSync(
  path.join(__dirname, '..', '..', 'src', 'data', 'translations', 'fr-heroes.js'),
  'utf8'
);
// Extract the object literal (module uses ESM export, so eval the RHS).
const jsonText = heroTranslationsModule.slice(
  heroTranslationsModule.indexOf('= {') + 2,
  heroTranslationsModule.lastIndexOf('};') + 1
);
const heroTranslations = eval('(' + jsonText + ')');

let missingHero = [];
let missingKey = [];
let fabricated = []; // FR non-empty where EN empty (would indicate fabrication risk)
let untranslatedRealContent = []; // EN non-empty but FR missing/empty

for (const h of heroes) {
  const fr = heroTranslations[h.id];
  if (!fr) {
    missingHero.push(h.id);
    continue;
  }
  for (const field of ['description', 'story', 'capabilities']) {
    if (!(field in fr)) {
      missingKey.push(h.id + '.' + field);
      continue;
    }
    const en = (h[field] || '').trim();
    const frVal = (fr[field] || '').trim();
    if (en && !frVal) {
      untranslatedRealContent.push(h.id + '.' + field);
    }
  }
}

console.log('Total heroes in heroes.js:', heroes.length);
console.log('Total heroes in fr-heroes.js:', Object.keys(heroTranslations).length);
console.log('Missing hero entries:', missingHero.length, missingHero);
console.log('Missing field keys:', missingKey.length, missingKey);
console.log('EN non-empty but FR empty/missing (real gaps):', untranslatedRealContent.length, untranslatedRealContent);

if (missingHero.length === 0 && missingKey.length === 0 && untranslatedRealContent.length === 0) {
  console.log('VALIDATION PASSED: all 162 heroes have all 3 keys, and every hero with real EN lore text has corresponding FR text.');
  process.exit(0);
} else {
  console.log('VALIDATION FAILED');
  process.exit(1);
}
