import { t } from '../i18n.js?v=20260723-2';

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function reportIssueUrl(subject) {
  const title = encodeURIComponent(`[Content] ${subject}`);
  return `https://github.com/AnonymeNc/mla/issues/new?template=content-error.yml&title=${title}`;
}

function localize(entry, lang) {
  if (entry == null) return '';
  if (typeof entry === 'string') return entry;
  return entry[lang] || entry.en || '';
}

function renderBlock(block, lang) {
  switch (block.type) {
    case 'p':
      return `<p>${escapeHtml(localize(block, lang))}</p>`;
    case 'note':
      return `<div class="guide-note">${escapeHtml(localize(block, lang))}</div>`;
    case 'ul':
      return `<ul class="guide-list">${block.items.map((item) => `<li>${escapeHtml(localize(item, lang))}</li>`).join('')}</ul>`;
    case 'glossary':
      return `<dl class="guide-glossary">${block.items.map((item) => `
        <div class="guide-glossary__row">
          <dt>${escapeHtml(item.term)}</dt>
          <dd>${escapeHtml(localize(item, lang))}</dd>
        </div>
      `).join('')}</dl>`;
    case 'table':
      return `
        <div class="guide-table-wrap">
          <table class="guide-table">
            <thead><tr>${block.headers.map((h) => `<th>${escapeHtml(localize(h, lang))}</th>`).join('')}</tr></thead>
            <tbody>${block.rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(localize(cell, lang))}</td>`).join('')}</tr>`).join('')}</tbody>
          </table>
        </div>
      `;
    default:
      return '';
  }
}

function flattenGuideText(guide, lang) {
  const parts = [localize(guide.title, lang), localize(guide.summary, lang)];
  guide.sections.forEach((section) => {
    parts.push(localize(section.heading, lang));
    section.blocks.forEach((block) => {
      if (block.type === 'p' || block.type === 'note') parts.push(localize(block, lang));
      if (block.type === 'ul') block.items.forEach((item) => parts.push(localize(item, lang)));
      if (block.type === 'glossary') block.items.forEach((item) => { parts.push(item.term); parts.push(localize(item, lang)); });
      if (block.type === 'table') {
        block.headers.forEach((h) => parts.push(localize(h, lang)));
        block.rows.forEach((row) => row.forEach((cell) => parts.push(localize(cell, lang))));
      }
    });
  });
  return parts.join(' \n ').toLowerCase();
}

export function guideMatchesQuery(guide, lang, query) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return true;
  return flattenGuideText(guide, lang).includes(normalizedQuery);
}

function guideCard(guide, lang) {
  return `
    <article class="guide-card">
      <p class="eyebrow">${guide.icon || '📘'} ${t('guidesLabel', lang)}</p>
      <h3>${escapeHtml(localize(guide.title, lang))}</h3>
      ${guide.summary ? `<p class="card-description">${escapeHtml(localize(guide.summary, lang))}</p>` : ''}
      <div class="card-actions">
        <a class="btn btn--primary" href="./guide.html?g=${guide.id}">${t('viewGuide', lang)}</a>
      </div>
    </article>
  `;
}

export function renderGuideIndex({ guides, categories = {}, lang = 'en', query = '' }) {
  const root = document.getElementById('guides-root');
  if (!root) return;

  if (!Array.isArray(guides) || !guides.length) {
    root.innerHTML = `<div class="empty-state">${t(query ? 'guidesNoResults' : 'guidesEmpty', lang)}</div>`;
    return;
  }

  const groups = new Map();
  guides.forEach((guide) => {
    const key = guide.category && categories[guide.category] ? guide.category : '_other';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(guide);
  });

  const orderedKeys = [...groups.keys()].sort((a, b) => {
    const orderA = a === '_other' ? Infinity : (categories[a]?.order ?? Infinity);
    const orderB = b === '_other' ? Infinity : (categories[b]?.order ?? Infinity);
    return orderA - orderB;
  });

  root.innerHTML = orderedKeys.map((key) => {
    const label = key === '_other' ? t('guidesLabel', lang) : localize(categories[key], lang);
    return `
      <section class="guide-category">
        <h3 class="guide-category__title">${escapeHtml(label)}</h3>
        <div class="guide-card-grid">${groups.get(key).map((guide) => guideCard(guide, lang)).join('')}</div>
      </section>
    `;
  }).join('');
}

export function renderGuideDetail({ guide, guides, lang = 'en' }) {
  const root = document.getElementById('guide-detail-root');
  if (!root) return;

  if (!guide) {
    root.innerHTML = `<div class="empty-state">${t('guideNotFound', lang)}</div>`;
    return;
  }

  const index = guides.findIndex((entry) => entry.id === guide.id);
  const previousGuide = guides[(index - 1 + guides.length) % guides.length];
  const nextGuide = guides[(index + 1) % guides.length];

  root.innerHTML = `
    <article class="guide-article detail-card">
      <header class="guide-article__header">
        <p class="eyebrow">${guide.icon || '📘'} ${t('guidesLabel', lang)}</p>
        <h2>${escapeHtml(localize(guide.title, lang))}</h2>
        ${guide.summary ? `<p class="guide-article__summary">${escapeHtml(localize(guide.summary, lang))}</p>` : ''}
        <a class="report-issue-link" href="${reportIssueUrl(localize(guide.title, 'en'))}" target="_blank" rel="noreferrer">${t('reportIssue', lang)}</a>
      </header>
      ${guide.sections.map((section) => `
        <section class="detail-section guide-section">
          ${section.heading ? `<h3>${escapeHtml(localize(section.heading, lang))}</h3>` : ''}
          ${section.blocks.map((block) => renderBlock(block, lang)).join('')}
        </section>
      `).join('')}
      <div class="card-actions">
        <a class="btn" href="./guides.html">${t('backToGuides', lang)}</a>
      </div>
    </article>
    <div class="detail-nav">
      <a class="nav-link" href="./guide.html?g=${previousGuide.id}">← ${escapeHtml(localize(previousGuide.title, lang))}</a>
      <a class="nav-link" href="./guide.html?g=${nextGuide.id}">${escapeHtml(localize(nextGuide.title, lang))} →</a>
    </div>
  `;
}
