const fs = require('fs');
const https = require('https');
const path = require('path');

const url = 'https://r.jina.ai/http://https://mla.fandom.com/wiki/Heroes';
const outFile = path.join(__dirname, '..', 'src', 'data', 'heroes.js');
const defaultImage = './public/hero-placeholder.svg';

function fetchText(targetUrl) {
  return new Promise((resolve, reject) => {
    https.get(targetUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function fetchJson(targetUrl) {
  return fetchText(targetUrl).then((data) => JSON.parse(data));
}

function slugify(value) {
  return value.toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function cleanWikiText(value = '') {
  return String(value)
    .replace(/'''/g, '')
    .replace(/''/g, '')
    .replace(/\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/g, (_match, p1, p2) => p2 || p1)
    .replace(/<ref[^>]*>.*?<\/ref>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\{\{Highlight\|([^}]+)\}\}/g, (_match, capture) => capture)
    .replace(/\{\{Warning\|([^}]+)\}\}/g, (_match, capture) => capture)
    .replace(/\{\{[^{}]+\}\}/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeRegExp(value = '') {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function extractSection(content, heading) {
  const escapedHeading = escapeRegExp(heading);
  const lines = String(content).split(/\r?\n/);
  const headingPattern = new RegExp(`^={2,}\\s*${escapedHeading}\\s*={2,}$`, 'i');
  const result = [];
  let capturing = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (headingPattern.test(trimmed)) {
      capturing = true;
      continue;
    }
    if (capturing) {
      if (/^={2,}/.test(trimmed)) break;
      result.push(trimmed);
    }
  }

  return cleanWikiText(result.join('\n').trim());
}

function parseAbilityTemplates(content) {
  const abilities = [];
  const pattern = /\{\{Ability\b/gi;
  let match;

  while ((match = pattern.exec(content)) !== null) {
    let start = match.index;
    let end = -1;
    let depth = 0;
    let index = start;

    while (index < content.length) {
      if (content.startsWith('{{', index)) {
        depth += 2;
        index += 2;
        continue;
      }
      if (content.startsWith('}}', index)) {
        depth -= 2;
        if (depth <= 0) {
          end = index + 2;
          break;
        }
        index += 2;
        continue;
      }
      index += 1;
    }

    if (end === -1) continue;

    const body = content.slice(start + 2 + 'Ability'.length, end - 2);
    // Wiki pages are inconsistent: some put one "|key=value" per line, others cram
    // several onto a single line ("|skill-name=X|skill-tier=Y|skill-type-1=Z"). A
    // line-anchored regex breaks on one style or the other, so instead find every
    // "|key=" boundary anywhere in the body and slice the value up to the next one.
    const fields = {};
    const fieldBoundaries = [...body.matchAll(/\|([a-zA-Z0-9_-]+)[ \t]*=/g)];
    fieldBoundaries.forEach((fieldMatch, i) => {
      const key = fieldMatch[1];
      const valueStart = fieldMatch.index + fieldMatch[0].length;
      const valueEnd = i + 1 < fieldBoundaries.length ? fieldBoundaries[i + 1].index : body.length;
      fields[key] = cleanWikiText(body.slice(valueStart, valueEnd).trim());
    });

    const levelDescriptions = Object.entries(fields)
      .filter(([key]) => /^description-lv\d+$/.test(key))
      .map(([key, value]) => ({ level: key.replace('description-lv', ''), text: value }))
      .sort((a, b) => Number(a.level) - Number(b.level));

    abilities.push({
      name: fields['skill-name'] || '',
      tier: fields['skill-tier'] || '',
      types: [fields['skill-type-1'], fields['skill-type-2'], fields['skill-type-3']].filter(Boolean),
      description: fields.description || '',
      levelDescriptions
    });
  }

  return abilities;
}

function extractHeroPageData(content = '', heroName = '') {
  const infobox = {};
  for (const match of content.matchAll(/^\|([a-zA-Z0-9_]+)\s*=\s*(.+)$/gm)) {
    const [, key, value] = match;
    infobox[key] = cleanWikiText(value.trim());
  }

  const description = extractSection(content, 'Description') || extractSection(content, 'Overview');
  const capabilities = extractSection(content, 'Capabilities');
  const story = extractSection(content, 'Story') || extractSection(content, 'In-game Info') || extractSection(content, 'In-Game Info');
  const abilities = parseAbilityTemplates(content);
  const normalizedName = heroName || infobox.name || '';
  const subFactions = [infobox.type1, infobox.type2, infobox.type3].filter(Boolean);

  return {
    title: infobox.title || '',
    description: description || `${normalizedName} is a hero from the wiki roster.`,
    story: story || description || '',
    faction: infobox.type || infobox.faction || '',
    subFactions,
    capabilities,
    abilities,
    releaseDate: infobox.release_date || infobox.release_date_1 || '',
    releaseYear: infobox.release_year || infobox.release_year_1 || '',
    infobox
  };
}

async function resolveHeroPageData(heroName) {
  const pageName = encodeURIComponent(heroName.replace(/\s+/g, '_').replace(/'/g, '%27'));
  const pageUrl = `https://mla.fandom.com/api.php?action=query&format=json&prop=revisions&rvprop=content&titles=${pageName}`;
  try {
    const pageResponse = await fetchJson(pageUrl);
    const page = Object.values(pageResponse?.query?.pages || {}).find(Boolean);
    const content = page?.revisions?.[0]?.['*'] || '';
    return extractHeroPageData(content, heroName);
  } catch (error) {
    return { description: `${heroName} is a hero from the wiki roster.`, capabilities: '', abilities: [] };
  }
}

async function resolveHeroImage(heroName) {
  const pageName = encodeURIComponent(heroName.replace(/\s+/g, '_').replace(/'/g, '%27'));
  const pageUrl = `https://mla.fandom.com/api.php?action=query&format=json&prop=revisions&rvprop=content&titles=${pageName}`;
  try {
    const pageResponse = await fetchJson(pageUrl);
    const page = Object.values(pageResponse?.query?.pages || {}).find(Boolean);
    const content = page?.revisions?.[0]?.['*'] || '';
    const imageMatch = content.match(/\|image\s*=\s*([^\n|]+)/i) || content.match(/image\s*=\s*([^\n|]+)/i);
    const fileName = imageMatch?.[1]?.trim();
    if (!fileName) return defaultImage;
    const normalizedFileName = fileName.replace(/^File:/i, '').trim().replace(/ /g, '_');
    const imageUrl = `https://mla.fandom.com/api.php?action=query&format=json&titles=File:${encodeURIComponent(normalizedFileName)}&prop=imageinfo&iiprop=url`;
    const imageResponse = await fetchJson(imageUrl);
    const imagePage = Object.values(imageResponse?.query?.pages || {}).find(Boolean);
    const imageInfo = imagePage?.imageinfo?.[0];
    return imageInfo?.url || defaultImage;
  } catch (error) {
    return defaultImage;
  }
}

async function createHero(entry) {
  const name = entry.name;
  const type = entry.type || 'Hybrid';
  const equipmentSize = entry.equipmentSize || 'Light';
  const heroClass = entry.class || 'Fighter';
  const advancedClass = entry.advancedClass || '';
  const rarity = entry.rarity || 'SR';
  const [image, wikiDetails] = await Promise.all([resolveHeroImage(name), resolveHeroPageData(name)]);
  const wikiUrl = `https://mla.fandom.com/wiki/${encodeURIComponent(name.replace(/\s+/g, '_'))}`;

  return {
    id: slugify(name),
    name,
    type,
    rarity,
    class: heroClass,
    advancedClass,
    equipmentSize,
    description: wikiDetails.description || `${name} is a ${rarity} ${heroClass.toLowerCase()} hero from the ${type.toLowerCase()} faction, built for fast skirmishes and polished team play.`,
    story: wikiDetails.story || '',
    faction: wikiDetails.faction || type,
    subFactions: wikiDetails.subFactions || [],
    capabilities: wikiDetails.capabilities || '',
    abilities: wikiDetails.abilities || [],
    title: wikiDetails.title || '',
    releaseDate: wikiDetails.releaseDate || '',
    releaseYear: wikiDetails.releaseYear || '',
    image,
    wikiUrl,
    tags: [type, heroClass, equipmentSize, rarity].filter(Boolean).concat(advancedClass ? [advancedClass] : [])
  };
}

async function main() {
  const raw = await fetchText(url);
  const lines = raw.split(/\r?\n/);
  const heroes = [];
  const heroRowPattern = /^\s*([A-Za-z0-9'’.-]+(?:\s+[A-Za-z0-9'’.-]+)*)\s+(Hybrid|Astral|Chaos|Martial|Light|Dark|Order|Tech|Elemental)\s+(Light|Medium|Heavy)\s+(Support|Marksman|Mage|Fighter|Tank)(?:\s+([A-Za-z]+(?:\s+[A-Za-z]+)*))?\s+(SR|SSR|UR|R)\s*$/i;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (/^(Title:|URL Source:|Markdown Content:|Contents|Overview|Heroes are|There are currently|Icon|Name|Type|Equipment|Class|Advanced Class|Rarity|Heroes by Release Year|Hero Descriptions by Faction|Categories|Community content|EXPLORE PROPERTIES|Fandom|Fanatical|GameSpot|Metacritic|TV Guide|Honest Entertainment|FOLLOW US|OVERVIEW|What is Fandom\?|Essentials|About|Careers|Press|Contact|Terms of Use|Privacy Policy|Digital Services Act|Global Sitemap|Local Sitemap|COMMUNITY|Community Central|Support|Help|ADVERTISE|Media Kit|FANDOM APPS|Mobile Legends: Adventure Wiki|VIEW MOBILE SITE|SIGN IN|CREATE A FREE ACCOUNT)/i.test(trimmed)) {
      continue;
    }

    const match = trimmed.match(heroRowPattern);
    if (!match) continue;

    const [, name, type, equipmentSize, heroClass, advancedClass = '', rarity] = match;
    const normalizedAdvancedClass = advancedClass.trim();

    if (/^(Light|Medium|Heavy|Hybrid|Astral|Elemental|Tech|Martial|Dark|Order|Chaos)$/i.test(type)) {
      heroes.push(await createHero({ name: name.trim(), type, equipmentSize, class: heroClass, advancedClass: normalizedAdvancedClass, rarity }));
    }
  }

  const uniqueHeroes = Array.from(new Map(heroes.map((hero) => [hero.id, hero])).values());
  fs.writeFileSync(outFile, `window.heroCatalogData = ${JSON.stringify(uniqueHeroes, null, 2)};\n`);
  console.log(`Generated ${uniqueHeroes.length} heroes in ${outFile}`);
}

module.exports = {
  extractHeroPageData,
  parseAbilityTemplates,
  extractSection,
  cleanWikiText,
  createHero,
  resolveHeroPageData
};

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
