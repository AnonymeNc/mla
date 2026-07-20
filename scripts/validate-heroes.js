const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dataPath = path.join(__dirname, '..', 'src', 'data', 'heroes.js');
const source = fs.readFileSync(dataPath, 'utf8');
const heroCatalogData = vm.runInNewContext(source.replace('window.heroCatalogData = ', ''), { window: {}, console });

function validate() {
  if (!Array.isArray(heroCatalogData) || heroCatalogData.length < 100) {
    throw new Error('Expected at least 100 heroes.');
  }
  for (const hero of heroCatalogData) {
    const required = ['id', 'name', 'type', 'rarity', 'class', 'advancedClass', 'equipmentSize', 'description', 'image', 'wikiUrl', 'tags'];
    for (const field of required) {
      if (!(field in hero)) {
        throw new Error(`Missing field ${field} in ${hero.name || hero.id}`);
      }
    }
  }
  console.log(`Validated ${heroCatalogData.length} heroes.`);
}

try {
  validate();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
