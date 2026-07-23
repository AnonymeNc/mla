import { getLocalizedAbility, getLocalizedDescription, getLocalizedHeroField, t, translateValue } from '../i18n.js?v=20260723-2';

function reportIssueUrl(subject) {
  const title = encodeURIComponent(`[Content] ${subject}`);
  return `https://github.com/AnonymeNc/mla/issues/new?template=content-error.yml&title=${title}`;
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function renderHeroDetail({ hero, heroes, favorites, onToggleFavorite, lang = 'en' }) {
  const root = document.getElementById('detail-root');
  if (!root) return;

  if (!hero) {
    root.innerHTML = `<div class="empty-state">${t('heroNotFound', lang)}</div>`;
    return;
  }

  const index = heroes.findIndex((entry) => entry.id === hero.id);
  const previousHero = heroes[(index - 1 + heroes.length) % heroes.length];
  const nextHero = heroes[(index + 1) % heroes.length];
  const isFavorite = favorites.includes(hero.id);
  const description = getLocalizedDescription(hero, lang) || hero.description || '';
  const translatedType = translateValue(hero.type, lang);
  const translatedClass = translateValue(hero.class, lang);
  const translatedEquipment = translateValue(hero.equipmentSize, lang);
  const translatedRarity = translateValue(hero.rarity, lang);
  const translatedAdvancedClass = hero.advancedClass ? translateValue(hero.advancedClass, lang) : '';
  const overviewTitle = hero.title ? `<p class="detail-subtitle">${escapeHtml(hero.title)}</p>` : '';
  const factions = [hero.type, ...(hero.subFactions || [])].filter(Boolean).map((entry) => escapeHtml(translateValue(entry, lang))); 
  const storyText = getLocalizedHeroField(hero, 'story', lang) || hero.story || description || '';
  const capabilitiesText = getLocalizedHeroField(hero, 'capabilities', lang) || hero.capabilities || '';
  const releaseMeta = [hero.releaseYear ? `${t('releaseYear', lang)}: ${escapeHtml(hero.releaseYear)}` : '', hero.releaseDate ? `${t('releaseDate', lang)}: ${escapeHtml(hero.releaseDate)}` : ''].filter(Boolean).join(' • ');
  const abilityMarkup = Array.isArray(hero.abilities) && hero.abilities.length
    ? hero.abilities.map((ability) => {
        const localizedAbility = getLocalizedAbility(ability, hero, lang);
        return `
        <article class="ability-card">
          <div class="ability-card__header">
            <h4>${escapeHtml(localizedAbility.name)}</h4>
            <div class="ability-card__meta">${escapeHtml(localizedAbility.tier)}${localizedAbility.types.length ? ` • ${localizedAbility.types.map((type) => escapeHtml(type)).join(' • ')}` : ''}</div>
          </div>
          <p>${escapeHtml(localizedAbility.description)}</p>
          ${localizedAbility.levelDescriptions?.length ? `<ul class="ability-levels">${localizedAbility.levelDescriptions.slice(0, 3).map((level) => `<li><strong>Lv ${escapeHtml(level.level)}:</strong> ${escapeHtml(level.text)}</li>`).join('')}</ul>` : ''}
        </article>
      `;
      }).join('')
    : '';
  const comparisonRows = Array.isArray(hero.abilities) && hero.abilities.length ? hero.abilities.slice(0, 5).map((ability) => {
      const localizedAbility = getLocalizedAbility(ability, hero, lang);
      return `
      <tr>
        <td>${escapeHtml(localizedAbility.name)}</td>
        <td>${escapeHtml(localizedAbility.tier)}</td>
        <td>${escapeHtml(localizedAbility.types.join(' / '))}</td>
        <td>${escapeHtml(localizedAbility.description)}</td>
      </tr>
    `;
    }).join('') : '';

  root.innerHTML = `
    <article class="detail-card">
      <div class="detail-hero">
        <img class="detail-hero__image" src="${hero.image}" alt="${hero.name}" decoding="async" width="400" height="400" />
        <div class="detail-meta">
          <div class="hero-card__top">
            <div>
              <p class="eyebrow">${translatedType}</p>
              <h2>${hero.name}</h2>
              ${overviewTitle}
            </div>
            <button class="favorite-toggle ${isFavorite ? 'is-active' : ''}" type="button" data-hero-id="${hero.id}" aria-label="${t('favoriteToggle', lang).replace('{name}', hero.name)}">${isFavorite ? '★' : '☆'}</button>
          </div>
          <div class="pill-row">
            <span class="pill">${translatedClass}</span>
            <span class="pill">${translatedEquipment}</span>
            <span class="pill">${translatedRarity}</span>
            ${translatedAdvancedClass ? `<span class="pill">${translatedAdvancedClass}</span>` : ''}
          </div>
          ${releaseMeta ? `<p class="detail-meta__line">${releaseMeta}</p>` : ''}
          <section class="detail-section">
            <h3>${t('overview', lang)}</h3>
            <p>${escapeHtml(description)}</p>
          </section>
          ${storyText && storyText !== description ? `
            <section class="detail-section">
              <h3>${t('story', lang)}</h3>
              <p>${escapeHtml(storyText)}</p>
            </section>` : ''}
          ${factions.length ? `
            <section class="detail-section">
              <h3>${t('factions', lang)}</h3>
              <div class="detail-badges">${factions.map((entry) => `<span class="pill">${entry}</span>`).join('')}</div>
            </section>` : ''}
          ${releaseMeta ? `
            <section class="detail-section">
              <h3>${t('releaseInfo', lang)}</h3>
              <p class="detail-meta__line">${releaseMeta}</p>
            </section>` : ''}
          ${capabilitiesText ? `
            <section class="detail-section">
              <h3>${t('capabilities', lang)}</h3>
              <p>${escapeHtml(capabilitiesText)}</p>
            </section>` : ''}
          ${abilityMarkup ? `
            <section class="detail-section">
              <h3>${t('abilities', lang)}</h3>
              <div class="ability-list">${abilityMarkup}</div>
            </section>` : ''}
          ${comparisonRows ? `
            <section class="detail-section">
              <h3>${t('comparisonTable', lang)}</h3>
              <table class="comparison-table">
                <thead>
                  <tr><th>${t('abilityName', lang)}</th><th>${t('tier', lang)}</th><th>${t('types', lang)}</th><th>${t('effect', lang)}</th></tr>
                </thead>
                <tbody>${comparisonRows}</tbody>
              </table>
            </section>` : ''}
          <div class="card-actions">
            <a class="btn btn--primary" href="${hero.wikiUrl}" target="_blank" rel="noreferrer">${t('openWiki', lang)}</a>
            <a class="btn" href="./index.html">${t('backToCatalog', lang)}</a>
          </div>
          <a class="report-issue-link" href="${reportIssueUrl(hero.name)}" target="_blank" rel="noreferrer">${t('reportIssue', lang)}</a>
        </div>
      </div>
      <div class="detail-nav">
        <a class="nav-link" href="./hero.html?hero=${previousHero.id}">← ${previousHero.name}</a>
        <a class="nav-link" href="./hero.html?hero=${nextHero.id}">${nextHero.name} →</a>
      </div>
    </article>
  `;

  root.querySelector('.favorite-toggle')?.addEventListener('click', () => onToggleFavorite(hero.id));
}
