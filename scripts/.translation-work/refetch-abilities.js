// Re-fetch every hero's abilities straight from the wiki using the now-fixed
// parser, and replace the `abilities` array in heroes.js with ground-truth data.
// This replaces the earlier guess-based recovery entirely.
const fs = require('fs');
const { resolveHeroPageData } = require('../build-hero-data.js');

const HEROES_PATH = require('path').join(__dirname, '..', '..', 'src', 'data', 'heroes.js');

function readHeroes() {
  const src = fs.readFileSync(HEROES_PATH, 'utf8');
  const jsonStart = src.indexOf('[');
  const jsonEnd = src.lastIndexOf(']') + 1;
  return { data: JSON.parse(src.slice(jsonStart, jsonEnd)) };
}

function writeHeroes(data) {
  fs.writeFileSync(HEROES_PATH, `window.heroCatalogData = ${JSON.stringify(data, null, 2)};\n`);
}

async function withConcurrency(items, limit, worker) {
  const results = new Array(items.length);
  let next = 0;
  async function run() {
    while (next < items.length) {
      const i = next++;
      results[i] = await worker(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: limit }, run));
  return results;
}

async function main() {
  const { data } = readHeroes();
  const log = { updated: [], unchanged: [], failed: [], countChanged: [] };

  await withConcurrency(data, 6, async (hero) => {
    try {
      const wikiDetails = await resolveHeroPageData(hero.name);
      const freshAbilities = wikiDetails.abilities || [];
      if (!freshAbilities.length) {
        log.failed.push(`${hero.id}: fetched 0 abilities (kept existing ${hero.abilities.length})`);
        return;
      }
      const oldCount = hero.abilities.length;
      const oldJson = JSON.stringify(hero.abilities);
      hero.abilities = freshAbilities;
      const newJson = JSON.stringify(freshAbilities);
      if (oldJson !== newJson) {
        log.updated.push(hero.id);
        if (oldCount !== freshAbilities.length) log.countChanged.push(`${hero.id}: ${oldCount} -> ${freshAbilities.length}`);
      } else {
        log.unchanged.push(hero.id);
      }
    } catch (err) {
      log.failed.push(`${hero.id}: ${err.message}`);
    }
  });

  writeHeroes(data);
  fs.writeFileSync('scripts/.translation-work/refetch-log.json', JSON.stringify(log, null, 2));
  console.log('Updated:', log.updated.length, 'Unchanged:', log.unchanged.length, 'Failed:', log.failed.length);
  console.log('Count changes:', log.countChanged.length);
  if (log.failed.length) console.log('FAILED:', log.failed);
  if (log.countChanged.length) console.log('COUNT CHANGES:', log.countChanged.slice(0, 20));
}

main().catch((err) => { console.error(err); process.exit(1); });
