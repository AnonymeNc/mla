function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function renderChangelog({ entries, lang = 'en' }) {
  const root = document.getElementById('changelog-root');
  if (!root) return;

  root.innerHTML = `
    <div class="changelog-list">
      ${entries.map((entry) => `
        <article class="changelog-entry">
          <time datetime="${entry.date}">${entry.date}</time>
          <p>${escapeHtml(entry[lang] || entry.en)}</p>
        </article>
      `).join('')}
    </div>
  `;
}
