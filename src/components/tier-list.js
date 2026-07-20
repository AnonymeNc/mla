import { t } from '../i18n.js?v=20260720-2';

export function getHeroTier(hero) {
  if (hero.rarity === 'UR') return 'S';
  if (hero.rarity === 'SSR') return 'A';
  if (hero.rarity === 'SR') return 'B';
  return 'C';
}

export function renderTierList({ heroes, lang = 'en' }) {
  const root = document.getElementById('tier-list-root');
  if (!root) return;

  const tiers = { S: [], A: [], B: [], C: [] };
  heroes.forEach((hero) => {
    const tier = getHeroTier(hero);
    if (tiers[tier]) tiers[tier].push(hero);
  });

  const tierOrder = ['S', 'A', 'B', 'C'];
  const tierLabels = {
    S: t('tierS', lang),
    A: t('tierA', lang),
    B: t('tierB', lang),
    C: t('tierC', lang)
  };

  root.innerHTML = `
    <section class="tier-list-section">
      <div class="tier-list__header">
        <div>
          <p class="eyebrow">${t('tierList', lang)}</p>
          <h3>${t('tierListTitle', lang)}</h3>
        </div>
        <p class="tier-list__hint">${t('tierListHint', lang)}</p>
      </div>
      <div class="tier-list-grid">
        ${tierOrder.map((tier) => `
          <article class="tier-card tier-card--${tier.toLowerCase()}">
            <div class="tier-card__header">
              <h4>${tierLabels[tier]}</h4>
              <span>${tiers[tier].length}</span>
            </div>
            <ul>
              ${tiers[tier].slice(0, 8).map((hero) => `<li><a href="./hero.html?hero=${hero.id}">${hero.name}</a></li>`).join('')}
            </ul>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}
