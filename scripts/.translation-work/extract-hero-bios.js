const fs = require('fs');
const path = require('path');
global.window = {};
require(path.join(__dirname, '..', '..', 'src', 'data', 'heroes.js'));
const heroes = global.window.heroCatalogData;

const out = {};
let sameCount = 0;
for (const h of heroes) {
  out[h.id] = {
    name: h.name,
    description: h.description || '',
    story: h.story || '',
    capabilities: h.capabilities || ''
  };
  if ((h.description || '') === (h.story || '')) sameCount++;
}

fs.writeFileSync(path.join(__dirname, 'hero-bios-source.json'), JSON.stringify(out, null, 2));
console.log('total heroes:', heroes.length);
console.log('description === story count:', sameCount);
