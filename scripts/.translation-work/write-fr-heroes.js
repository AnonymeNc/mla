const fs = require('fs');
const path = require('path');
const wd = __dirname;
const merged = JSON.parse(fs.readFileSync(path.join(wd, 'merged-hero-bios-final.json'), 'utf8'));

const header = `// Manually translated (not machine word-substitution) French text for hero
// description/story/capabilities lore fields, keyed by hero id. Companion to
// fr-abilities.js — same rationale, same regeneration process if hero data changes.
export const heroTranslations = `;

const body = JSON.stringify(merged, null, 2);
const out = header + body + ';\n';

const target = path.join(wd, '..', '..', 'src', 'data', 'translations', 'fr-heroes.js');
fs.writeFileSync(target, out, 'utf8');
console.log('wrote', target, out.length, 'bytes');
