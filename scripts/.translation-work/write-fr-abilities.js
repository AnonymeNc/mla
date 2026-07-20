const fs = require('fs');
const path = require('path');
const wd = __dirname;
const merged = JSON.parse(fs.readFileSync(path.join(wd, 'merged-final.json'), 'utf8'));

const header = `// Manually translated (not machine word-substitution) French text for hero ability
// descriptions and level upgrade text, keyed by hero id then original ability name.
// Generated once via a translation pass over src/data/heroes.js — regenerate by
// re-running the same batch translation workflow if hero data changes.
export const abilityTranslations = `;

const body = JSON.stringify(merged, null, 2);
const out = header + body + ';\n';

const target = path.join(wd, '..', '..', 'src', 'data', 'translations', 'fr-abilities.js');
fs.writeFileSync(target, out, 'utf8');
console.log('wrote', target, out.length, 'bytes');
