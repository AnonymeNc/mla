const fs = require('fs');
const path = require('path');
const wd = __dirname;

const sourceFile = path.join(wd, 'hero-bios-source.json');
const source = JSON.parse(fs.readFileSync(sourceFile, 'utf8'));
const sourceIds = Object.keys(source);

let merged = {};
let total = 0;
for (let i = 1; i <= 9; i++) {
  const f = path.join(wd, 'hero-bio-batch-' + String(i).padStart(2, '0') + '.json');
  const data = JSON.parse(fs.readFileSync(f, 'utf8'));
  for (const [heroId, entry] of Object.entries(data)) {
    if (merged[heroId]) {
      console.error('DUPLICATE hero id across batches:', heroId);
    }
    merged[heroId] = entry;
    total++;
  }
}

console.log('total entries merged:', total);
console.log('unique hero ids:', Object.keys(merged).length);
console.log('source hero ids:', sourceIds.length);

const missing = sourceIds.filter((id) => !merged[id]);
console.log('missing from merged:', missing);

const emptyFields = [];
for (const id of sourceIds) {
  const entry = merged[id];
  if (!entry) continue;
  for (const field of ['description', 'story', 'capabilities']) {
    if (entry[field] === undefined) {
      emptyFields.push(id + '.' + field + ' (undefined)');
    }
  }
}
console.log('undefined fields:', emptyFields);

fs.writeFileSync(path.join(wd, 'merged-hero-bios-final.json'), JSON.stringify(merged, null, 2));
console.log('wrote merged-hero-bios-final.json');
