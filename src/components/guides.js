import { t } from '../i18n.js?v=20260721-1';

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
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

export function renderGuides({ guides, lang = 'en' }) {
  const root = document.getElementById('guides-root');
  if (!root) return;

  if (!Array.isArray(guides) || !guides.length) {
    root.innerHTML = `<div class="empty-state">${t('guidesEmpty', lang)}</div>`;
    return;
  }

  const toc = guides.map((guide) => `
    <a class="guide-toc__link" href="#${guide.id}">
      <span class="guide-toc__icon" aria-hidden="true">${guide.icon || '📘'}</span>
      ${escapeHtml(localize(guide.title, lang))}
    </a>
  `).join('');

  const articles = guides.map((guide) => `
    <article class="guide-article detail-card" id="${guide.id}">
      <header class="guide-article__header">
        <p class="eyebrow">${guide.icon || '📘'} ${t('guidesLabel', lang)}</p>
        <h2>${escapeHtml(localize(guide.title, lang))}</h2>
        ${guide.summary ? `<p class="guide-article__summary">${escapeHtml(localize(guide.summary, lang))}</p>` : ''}
      </header>
      ${guide.sections.map((section) => `
        <section class="detail-section guide-section">
          ${section.heading ? `<h3>${escapeHtml(localize(section.heading, lang))}</h3>` : ''}
          ${section.blocks.map((block) => renderBlock(block, lang)).join('')}
        </section>
      `).join('')}
    </article>
  `).join('');

  root.innerHTML = `
    <nav class="guide-toc" aria-label="${t('guidesLabel', lang)}">${toc}</nav>
    <div class="guide-articles">${articles}</div>
  `;
}
