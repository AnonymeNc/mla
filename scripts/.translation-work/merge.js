const fs = require('fs');
const path = require('path');
const wd = __dirname;
const baseFiles = Array.from({length:9},(_,i)=>'translated-0'+(i+1)+'.json');
const fixFiles = ['fix-translated-1.json','fix-translated-2.json','fix-translated-3.json'];

let merged = {};
let baseAbilityCount = 0;
for (const f of baseFiles) {
  const data = JSON.parse(fs.readFileSync(path.join(wd, f), 'utf8'));
  for (const [heroId, abilities] of Object.entries(data)) {
    merged[heroId] = merged[heroId] || {};
    for (const [abilityName, entry] of Object.entries(abilities)) {
      merged[heroId][abilityName] = entry;
      baseAbilityCount++;
    }
  }
}
console.log('base abilities:', baseAbilityCount);
console.log('unique heroes after base merge:', Object.keys(merged).length);

let fixAbilityCount = 0, fixOverwrites = 0, fixNew = 0;
for (const f of fixFiles) {
  const data = JSON.parse(fs.readFileSync(path.join(wd, f), 'utf8'));
  for (const [heroId, abilities] of Object.entries(data)) {
    merged[heroId] = merged[heroId] || {};
    for (const [abilityName, entry] of Object.entries(abilities)) {
      if (merged[heroId][abilityName]) fixOverwrites++; else fixNew++;
      merged[heroId][abilityName] = entry;
      fixAbilityCount++;
    }
  }
}
console.log('fix abilities applied:', fixAbilityCount, 'overwrites:', fixOverwrites, 'new:', fixNew);
console.log('final unique heroes:', Object.keys(merged).length);
let totalAbilities = 0;
for (const h of Object.values(merged)) totalAbilities += Object.keys(h).length;
console.log('final total ability entries:', totalAbilities);

fs.writeFileSync(path.join(wd, 'merged-final.json'), JSON.stringify(merged, null, 2));
console.log('wrote merged-final.json');
