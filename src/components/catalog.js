import { getLocalizedDescription, t, translateValue } from '../i18n.js?v=20260723-1';

function readFavorites() {
  try {
    return JSON.parse(localStorage.getItem('mla-favorites') || '[]');
  } catch {
    return [];
  }
}

export function renderCatalog({ heroes, favorites = readFavorites(), onToggleFavorite, lang = 'en' }) {
  const root = document.getElementById('catalog-root');
  if (!root) return;

  if (!heroes.length) {
    root.innerHTML = `<div class="empty-state">${t('noResults', lang)}</div>`;
    return;
  }

  root.innerHTML = heroes.map((hero) => {
    const isFavorite = favorites.includes(hero.id);
    const description = getLocalizedDescription(hero, lang) || hero.description || '';
    const translatedType = translateValue(hero.type, lang);
    const translatedClass = translateValue(hero.class, lang);
    const translatedEquipment = translateValue(hero.equipmentSize, lang);
    const translatedRarity = translateValue(hero.rarity, lang);
    return `
      <article class="hero-card">
        <div class="hero-card__media">
          <img src="${hero.image}" alt="${hero.name}" />
        </div>
        <div class="hero-card__body">
          <div class="hero-card__top">
            <div>
              <p class="eyebrow">${translatedType}</p>
              <h3>${hero.name}</h3>
            </div>
            <button class="favorite-toggle ${isFavorite ? 'is-active' : ''}" type="button" data-hero-id="${hero.id}" aria-label="${t('favoriteToggle', lang).replace('{name}', hero.name)}">${isFavorite ? '★' : '☆'}</button>
          </div>
          <div class="pill-row">
            <span class="pill">${translatedClass}</span>
            <span class="pill">${translatedEquipment}</span>
            <span class="pill">${translatedRarity}</span>
          </div>
          <p class="card-description">${description}</p>
          <div class="card-actions">
            <a class="btn" href="./hero.html?hero=${hero.id}">${t('viewProfile', lang)}</a>
            <a class="btn btn--primary" href="${hero.wikiUrl}" target="_blank" rel="noreferrer">${t('wiki', lang)}</a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  root.querySelectorAll('.favorite-toggle').forEach((button) => {
    button.addEventListener('click', () => onToggleFavorite(button.dataset.heroId));
  });
}
