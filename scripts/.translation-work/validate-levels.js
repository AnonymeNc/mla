const fs = require('fs');
const path = require('path');
const wd = __dirname;

global.window = {};
require(path.join(wd, '..', '..', 'src', 'data', 'heroes.js'));
const heroes = window.heroCatalogData;
const merged = JSON.parse(fs.readFileSync(path.join(wd, 'merged-final.json'), 'utf8'));

let totalLevels = 0, covered = 0;
const missing = [];
for (const hero of heroes) {
  for (const ability of hero.abilities || []) {
    const entry = merged[hero.id]?.[ability.name];
    for (const lvl of ability.levelDescriptions || []) {
      if (!lvl.text) continue;
      totalLevels++;
      const translated = entry?.levels?.[lvl.level];
      if (translated) covered++;
      else missing.push(`${hero.id} :: ${ability.name} :: level ${lvl.level}`);
    }
  }
}
console.log('total level texts:', totalLevels);
console.log('covered:', covered);
console.log('missing:', missing.length);
missing.slice(0, 50).forEach((m) => console.log('  MISSING', m));
