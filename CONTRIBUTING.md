# Contributing

Thanks for helping improve the site! This is a plain static site — no build
step, no framework, no dependencies. Any text editor and a browser are enough
to work on it.

## Reporting an error (no coding needed)

If you spotted a wrong translation, an outdated hero, or a mistake in a
guide, [open an issue](https://github.com/AnonymeNc/mla/issues/new/choose)
and pick the relevant template. That's enough — no need to touch any code.

## Fixing something yourself (Pull Request)

1. Fork the repo and clone your fork.
2. Find the right file:
   - **Hero data** (`src/data/heroes.js`) is auto-generated daily from the
     community wiki by `scripts/build-hero-data.js` — don't hand-edit it,
     your fix would be overwritten within a day. Fix the source on the wiki
     instead, or open an issue if the scraper itself is misreading it.
   - **French ability translations**: `src/data/translations/fr-abilities.js`
     — keyed by hero id, then ability name.
   - **French hero bio translations**: `src/data/translations/fr-heroes.js`
     — keyed by hero id (`description` / `story` / `capabilities`).
   - **Guides & FAQ content**: `src/data/guides.js` — one object per guide,
     `sections` → `blocks`. Every piece of text is `{ en: '...', fr: '...' }`.
     Add a new guide by appending a new object to the array; keep the same
     shape as existing ones.
   - **UI strings** (buttons, labels, page titles): `src/i18n.js`, in the
     `translations` object, one block per language.
3. Test locally: serve the folder with any static server (e.g.
   `npx http-server -p 8000 -c-1 .`) and open `http://localhost:8000`.
4. Run `node scripts/validate-heroes.js` if you touched hero data.
5. Open a Pull Request with a short description of what changed and why.

## Adding a new guide

Guides only need English + French for now (other languages fall back to
English automatically). Follow the existing block types in
`src/data/guides.js`: `p` (paragraph), `ul` (bullet list), `table`,
`glossary`, `note`. Keep entries factual and cite where the information comes
from in your PR description if it's not obvious.

## Style

- No build tools, no npm dependencies — keep it vanilla JS/HTML/CSS.
- Match the existing dark theme (see CSS variables at the top of
  `src/styles/main.css`).
- Small, focused PRs are easier to review than one giant PR touching
  everything.
