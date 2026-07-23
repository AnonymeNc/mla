import { getLocalizedAbility, t, translateValue } from '../i18n.js?v=20260723-2';

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const metaRows = [
  { key: 'rarityLabel', get: (hero, lang) => translateValue(hero.rarity, lang) },
  { key: 'factionLabel', get: (hero, lang) => translateValue(hero.type, lang) },
  { key: 'roleLabel', get: (hero, lang) => translateValue(hero.class, lang) },
  { key: 'equipmentLabel', get: (hero, lang) => translateValue(hero.equipmentSize, lang) },
  { key: 'releaseYear', get: (hero) => hero.releaseYear || '—' }
];

export function renderComparison({ heroes, lang = 'en' }) {
  const root = document.getElementById('compare-root');
  if (!root) return;

  const filled = heroes.filter(Boolean);
  if (!filled.length) {
    root.innerHTML = `<div class="empty-state">${t('compareEmptyState', lang)}</div>`;
    return;
  }

  const columns = heroes.map((hero) => hero ? `
    <div class="compare-column">
      <img src="${hero.image}" alt="${escapeHtml(hero.name)}" width="200" height="200" decoding="async" />
      <h3>${escapeHtml(hero.name)}</h3>
      <a class="btn" href="./hero.html?hero=${hero.id}">${t('viewProfile', lang)}</a>
    </div>
  ` : `<div class="compare-column compare-column--empty">${t('compareSelectHero', lang)}</div>`).join('');

  const metaTableRows = metaRows.map((row) => `
    <tr>
      <th>${t(row.key, lang)}</th>
      ${heroes.map((hero) => `<td>${hero ? escapeHtml(row.get(hero, lang)) : '—'}</td>`).join('')}
    </tr>
  `).join('');

  const abilityColumns = heroes.map((hero) => {
    if (!hero) return `<div class="compare-column compare-column--empty"></div>`;
    const abilities = Array.isArray(hero.abilities) ? hero.abilities : [];
    return `
      <div class="compare-column">
        <div class="ability-list">
          ${abilities.map((ability) => {
            const localizedAbility = getLocalizedAbility(ability, hero, lang);
            return `
              <article class="ability-card">
                <div class="ability-card__header">
                  <h4>${escapeHtml(localizedAbility.name)}</h4>
                  <div class="ability-card__meta">${escapeHtml(localizedAbility.tier)}</div>
                </div>
                <p>${escapeHtml(localizedAbility.description)}</p>
              </article>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');

  root.innerHTML = `
    <div class="compare-grid compare-grid--${heroes.length}">${columns}</div>
    <div class="detail-section">
      <h3>${t('overview', lang)}</h3>
      <div class="compare-table-wrap">
        <table class="comparison-table">
          <tbody>${metaTableRows}</tbody>
        </table>
      </div>
    </div>
    <div class="detail-section">
      <h3>${t('abilities', lang)}</h3>
      <div class="compare-grid compare-grid--${heroes.length}">${abilityColumns}</div>
    </div>
  `;
}
