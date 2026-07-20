const fs = require('fs');
const path = require('path');
const wd = __dirname;

global.window = {};
require(path.join(wd, '..', '..', 'src', 'data', 'heroes.js'));
const heroes = window.heroCatalogData;
const merged = JSON.parse(fs.readFileSync(path.join(wd, 'merged-final.json'), 'utf8'));

let totalAbilities = 0, covered = 0;
const missing = [];
for (const hero of heroes) {
  for (const ability of hero.abilities || []) {
    if (!ability.description) continue; // nothing to translate
    totalAbilities++;
    const entry = merged[hero.id]?.[ability.name];
    if (entry && entry.description) {
      covered++;
    } else {
      missing.push(`${hero.id} :: ${ability.name}`);
    }
  }
}
console.log('total abilities with EN description:', totalAbilities);
console.log('covered by merged translations:', covered);
console.log('missing:', missing.length);
missing.forEach((m) => console.log('  MISSING', m));

// also check for stray entries in merged that don't match any hero/ability (renamed/stale)
let stray = [];
for (const [heroId, abilities] of Object.entries(merged)) {
  const hero = heroes.find((h) => h.id === heroId);
  if (!hero) { stray.push(`hero not found: ${heroId}`); continue; }
  for (const abilityName of Object.keys(abilities)) {
    const ability = hero.abilities.find((a) => a.name === abilityName);
    if (!ability) stray.push(`${heroId} :: ${abilityName} (no matching ability)`);
  }
}
console.log('\\nstray entries:', stray.length);
stray.forEach((s) => console.log('  STRAY', s));
