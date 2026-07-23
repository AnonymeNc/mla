// Regenerates sitemap.xml from the current hero and guide data.
// Run manually after data changes, or via CI (see .github/workflows/update-heroes.yml).
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://anonymenc.github.io/mla';

global.window = {};
require(path.join(__dirname, '..', 'src', 'data', 'heroes.js'));
require(path.join(__dirname, '..', 'src', 'data', 'guides.js'));
const heroes = window.heroCatalogData;
const guides = window.guidesData;

const today = new Date().toISOString().slice(0, 10);

const staticUrls = [
  { loc: `${baseUrl}/index.html`, priority: '1.0' },
  { loc: `${baseUrl}/guides.html`, priority: '0.8' },
  { loc: `${baseUrl}/about.html`, priority: '0.3' },
  { loc: `${baseUrl}/changelog.html`, priority: '0.3' }
];

const heroUrls = heroes.map((hero) => ({
  loc: `${baseUrl}/hero.html?hero=${hero.id}`,
  priority: '0.6'
}));

const guideUrls = guides.map((guide) => ({
  loc: `${baseUrl}/guide.html?g=${guide.id}`,
  priority: '0.5'
}));

const urls = [...staticUrls, ...heroUrls, ...guideUrls];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${today}</lastmod>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, '..', 'sitemap.xml'), xml, 'utf8');
console.log(`Wrote sitemap.xml with ${urls.length} URLs.`);
