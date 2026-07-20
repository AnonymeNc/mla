#!/usr/bin/env bash
set -euo pipefail

DATA_FILE="${1:-src/data/heroes.json}"

if [ ! -f "$DATA_FILE" ]; then
  echo "Error: data file not found: $DATA_FILE" >&2
  exit 1
fi

node <<'NODE' "$DATA_FILE"
const fs = require('fs');
const path = process.argv[1];
const raw = fs.readFileSync(path, 'utf8');
const data = JSON.parse(raw);

const allowedRarities = new Set(['R','SR','SSR','UR']);
const allowedTypes = new Set(['Elemental','Tech','Martial','Light','Dark','Order','Chaos','Astral','Hybrid']);
const allowedSizes = new Set(['Light','Medium','Heavy']);
const allowedClasses = new Set(['Support','Mage','Fighter','Tank','Marksman']);

const errors = [];
const ids = new Set();
const slugs = new Set();

if (!Array.isArray(data)) {
  errors.push('Dataset must be an array.');
} else {
  data.forEach((hero, index) => {
    const prefix = `Hero[${index}]`;

    if (!hero || typeof hero !== 'object') {
      errors.push(`${prefix} must be an object.`);
      return;
    }

    if (!hero.id || typeof hero.id !== 'string') errors.push(`${prefix}.id is required.`);
    if (!hero.name || typeof hero.name !== 'string') errors.push(`${prefix}.name is required.`);
    if (!hero.slug || typeof hero.slug !== 'string') errors.push(`${prefix}.slug is required.`);
    if (!hero.wikiUrl || typeof hero.wikiUrl !== 'string') errors.push(`${prefix}.wikiUrl is required.`);
    if (!hero.description || typeof hero.description !== 'string') errors.push(`${prefix}.description is required.`);
    if (!Array.isArray(hero.tags)) errors.push(`${prefix}.tags must be an array.`);
    if (!hero.image || typeof hero.image !== 'string') errors.push(`${prefix}.image is required.`);

    if (hero.id && ids.has(hero.id)) errors.push(`${prefix}.id is duplicated: ${hero.id}`);
    if (hero.slug && slugs.has(hero.slug)) errors.push(`${prefix}.slug is duplicated: ${hero.slug}`);

    if (hero.id) ids.add(hero.id);
    if (hero.slug) slugs.add(hero.slug);

    if (hero.rarity && !allowedRarities.has(hero.rarity)) errors.push(`${prefix}.rarity invalid: ${hero.rarity}`);
    if (hero.type && !allowedTypes.has(hero.type)) errors.push(`${prefix}.type invalid: ${hero.type}`);
    if (hero.equipmentSize && !allowedSizes.has(hero.equipmentSize)) errors.push(`${prefix}.equipmentSize invalid: ${hero.equipmentSize}`);
    if (hero.class && !allowedClasses.has(hero.class)) errors.push(`${prefix}.class invalid: ${hero.class}`);

    if (hero.isHybrid) {
      if (!Array.isArray(hero.types) || hero.types.length < 2) {
        errors.push(`${prefix}.types must contain at least 2 values for hybrid heroes.`);
      }
    }
  });
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Validated ${data.length} heroes successfully.`);
NODE
