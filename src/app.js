import { renderCatalog } from './components/catalog.js?v=20260721-1';
import { renderHeroDetail } from './components/detail.js?v=20260721-1';
import { getHeroTier, renderTierList } from './components/tier-list.js?v=20260721-1';
import { renderGuides } from './components/guides.js?v=20260721-1';
import { applyLanguageToStaticContent, getCurrentLanguage, setLanguage, t, translateValue } from './i18n.js?v=20260721-1';

const favoritesKey = 'mla-favorites';
const heroes = Array.isArray(window.heroCatalogData) ? window.heroCatalogData : [];
const guides = Array.isArray(window.guidesData) ? window.guidesData : [];

function readFavorites() {
  try {
    return JSON.parse(localStorage.getItem(favoritesKey) || '[]');
  } catch {
    return [];
  }
}

function writeFavorites(favorites) {
  localStorage.setItem(favoritesKey, JSON.stringify(favorites));
}

function populateFilterOptions(lang) {
  const typeFilter = document.getElementById('type-filter');
  const classFilter = document.getElementById('class-filter');
  const rarityFilter = document.getElementById('rarity-filter');
  const equipmentFilter = document.getElementById('equipment-filter');
  const tierFilter = document.getElementById('tier-filter');

  if (typeFilter) {
    typeFilter.innerHTML = ['','Hybrid','Elemental','Tech','Martial','Light','Dark','Order','Chaos','Astral'].map((value) => `<option value="${value}">${value ? translateValue(value, lang) : t('all', lang)}</option>`).join('');
  }

  if (classFilter) {
    classFilter.innerHTML = ['','Mage','Marksman','Support','Fighter','Tank'].map((value) => `<option value="${value}">${value ? translateValue(value, lang) : t('all', lang)}</option>`).join('');
  }

  if (rarityFilter) {
    rarityFilter.innerHTML = ['','UR','SSR','SR','R'].map((value) => `<option value="${value}">${value ? translateValue(value, lang) : t('all', lang)}</option>`).join('');
  }

  if (equipmentFilter) {
    equipmentFilter.innerHTML = ['','Light','Medium','Heavy'].map((value) => `<option value="${value}">${value ? translateValue(value, lang) : t('all', lang)}</option>`).join('');
  }

  if (tierFilter) {
    tierFilter.innerHTML = ['','S','A','B','C'].map((value) => `<option value="${value}">${value ? (value === 'S' ? t('tierS', lang) : value === 'A' ? t('tierA', lang) : value === 'B' ? t('tierB', lang) : t('tierC', lang)) : t('all', lang)}</option>`).join('');
  }
}

function applyCatalogPage() {
  const currentLang = setLanguage(getCurrentLanguage());
  applyLanguageToStaticContent(currentLang);
  populateFilterOptions(currentLang);

  const params = new URLSearchParams(window.location.search);
  const initialState = {
    query: params.get('q') || '',
    type: params.get('type') || '',
    class: params.get('class') || '',
    rarity: params.get('rarity') || '',
    equipment: params.get('equipment') || '',
    tier: params.get('tier') || ''
  };

  const searchInput = document.getElementById('search-input');
  const typeFilter = document.getElementById('type-filter');
  const classFilter = document.getElementById('class-filter');
  const rarityFilter = document.getElementById('rarity-filter');
  const equipmentFilter = document.getElementById('equipment-filter');
  const tierFilter = document.getElementById('tier-filter');
  const heroTotal = document.getElementById('hero-total');
  const favoriteCount = document.getElementById('favorite-count');
  const heroFavorites = document.getElementById('hero-favorites');
  const languageSwitcher = document.getElementById('language-switcher');

  if (searchInput) searchInput.value = initialState.query;
  if (typeFilter) typeFilter.value = initialState.type;
  if (classFilter) classFilter.value = initialState.class;
  if (rarityFilter) rarityFilter.value = initialState.rarity;
  if (equipmentFilter) equipmentFilter.value = initialState.equipment;
  if (tierFilter) tierFilter.value = initialState.tier;
  if (languageSwitcher) languageSwitcher.value = currentLang;

  function syncUrl(nextState) {
    const url = new URL(window.location.href);
    if (nextState.query) url.searchParams.set('q', nextState.query);
    else url.searchParams.delete('q');
    if (nextState.type) url.searchParams.set('type', nextState.type);
    else url.searchParams.delete('type');
    if (nextState.class) url.searchParams.set('class', nextState.class);
    else url.searchParams.delete('class');
    if (nextState.rarity) url.searchParams.set('rarity', nextState.rarity);
    else url.searchParams.delete('rarity');
    if (nextState.equipment) url.searchParams.set('equipment', nextState.equipment);
    else url.searchParams.delete('equipment');
    if (nextState.tier) url.searchParams.set('tier', nextState.tier);
    else url.searchParams.delete('tier');
    window.history.replaceState({}, '', `${url.pathname}${url.search}`);
  }

  function render() {
    const favorites = readFavorites();
    const lang = getCurrentLanguage();
    const nextState = {
      query: searchInput?.value?.trim().toLowerCase() || '',
      type: typeFilter?.value || '',
      class: classFilter?.value || '',
      rarity: rarityFilter?.value || '',
      equipment: equipmentFilter?.value || '',
      tier: tierFilter?.value || ''
    };

    syncUrl(nextState);
    const filteredHeroes = heroes.filter((hero) => {
      const haystack = [hero.name, hero.type, hero.class, hero.rarity, hero.equipmentSize, hero.advancedClass, ...(hero.tags || [])].join(' ').toLowerCase();
      const matchesSearch = !nextState.query || haystack.includes(nextState.query);
      const matchesType = !nextState.type || hero.type === nextState.type;
      const matchesClass = !nextState.class || hero.class === nextState.class;
      const matchesRarity = !nextState.rarity || hero.rarity === nextState.rarity;
      const matchesEquipment = !nextState.equipment || hero.equipmentSize === nextState.equipment;
      const matchesTier = !nextState.tier || getHeroTier(hero) === nextState.tier;
      return matchesSearch && matchesType && matchesClass && matchesRarity && matchesEquipment && matchesTier;
    });

    if (heroTotal) heroTotal.textContent = `${filteredHeroes.length}`;
    if (favoriteCount) favoriteCount.textContent = `${t('favorites', lang)} ${favorites.length}`;
    if (heroFavorites) heroFavorites.textContent = `${favorites.length}`;
    renderCatalog({
      heroes: filteredHeroes,
      favorites,
      lang,
      onToggleFavorite: (heroId) => {
        const nextFavorites = favorites.includes(heroId) ? favorites.filter((entry) => entry !== heroId) : [...favorites, heroId];
        writeFavorites(nextFavorites);
        render();
      }
    });
    renderTierList({
      heroes,
      lang
    });
  }

  [searchInput, typeFilter, classFilter, rarityFilter, equipmentFilter, tierFilter].filter(Boolean).forEach((element) => {
    element.addEventListener('input', render);
    element.addEventListener('change', render);
  });

  languageSwitcher?.addEventListener('change', (event) => {
    const lang = setLanguage(event.target.value);
    applyLanguageToStaticContent(lang);
    populateFilterOptions(lang);
    render();
  });

  render();
}

function applyDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('hero');
  const hero = heroes.find((entry) => entry.id === slug);
  const languageSwitcher = document.getElementById('language-switcher');

  function render() {
    const currentLang = setLanguage(getCurrentLanguage());
    applyLanguageToStaticContent(currentLang);
    if (languageSwitcher) languageSwitcher.value = currentLang;
    const favorites = readFavorites();
    renderHeroDetail({
      hero,
      heroes,
      favorites,
      lang: currentLang,
      onToggleFavorite: (heroId) => {
        const nextFavorites = favorites.includes(heroId) ? favorites.filter((entry) => entry !== heroId) : [...favorites, heroId];
        writeFavorites(nextFavorites);
        render();
      }
    });
  }

  languageSwitcher?.addEventListener('change', (event) => {
    setLanguage(event.target.value);
    render();
  });

  render();
}

function applyGuidesPage() {
  const languageSwitcher = document.getElementById('language-switcher');

  function render() {
    const currentLang = setLanguage(getCurrentLanguage());
    applyLanguageToStaticContent(currentLang);
    if (languageSwitcher) languageSwitcher.value = currentLang;
    renderGuides({ guides, lang: currentLang });
  }

  languageSwitcher?.addEventListener('change', (event) => {
    setLanguage(event.target.value);
    render();
  });

  render();
}

if (document.body.dataset.page === 'catalog') {
  applyCatalogPage();
} else if (document.body.dataset.page === 'detail') {
  applyDetailPage();
} else if (document.body.dataset.page === 'guides') {
  applyGuidesPage();
}
