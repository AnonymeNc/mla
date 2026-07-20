---
name: auto-site-builder
description: This skill should be used when the user asks to "build the MLA heroes site", "generate the full static site", "create the hero catalog website", "create a gaming-themed static website", or "automatically develop the entire site".
when_to_use: Use for end-to-end generation, refactoring, maintenance, or deployment preparation of the Mobile Legends: Adventure hero catalog site.
disable-model-invocation: false
allowed-tools:
  - Read
  - Write
  - Edit
  - MultiEdit
  - Grep
  - Glob
  - Bash
  - LS
  - Task
---

# Purpose
Create, maintain, and regenerate a static gaming-themed site that catalogs every Mobile Legends: Adventure hero and makes browsing, filtering, and comparison fast and intuitive.

## Core outcome
Generate a complete static website with data, UI, navigation, filters, search, hero pages, local favorites, and a deployable free-hosting setup.

## Operating rules
- Start by auditing the repository and identifying the stack.
- Preserve existing useful code before replacing anything.
- Keep the project static unless a hard blocker requires otherwise.
- Separate data, logic, styles, and presentation.
- Prefer small reusable components and data-driven rendering.
- Avoid unnecessary dependencies.
- Keep the site free to run and free to deploy.

## Target architecture
- `src/data/` for hero data and reference tables.
- `src/components/` for cards, filters, search, layout, and navigation.
- `src/pages/` or framework equivalent for route-level views.
- `src/styles/` for the gaming theme, tokens, and responsive layout.
- `public/` for icons, images, and static assets.
- `scripts/` for generation, validation, and export helpers.
- `docs/` for conventions, data rules, and maintenance notes.

## Data contract
Every hero record must contain at least:
- `id`
- `name`
- `type`
- `rarity`
- `class`
- `advancedClass`
- `equipmentSize`
- `description`
- `image`
- `wikiUrl`
- `tags`

## Build workflow
1. Inspect the existing repository structure.
2. Infer or define the project stack.
3. Create or normalize hero data.
4. Build the core layout and theme tokens.
5. Build the catalog, filters, and search.
6. Build hero detail pages and navigation.
7. Add local favorites and shareable URLs.
8. Add basic tests or validation scripts.
9. Prepare the project for static export.
10. Verify that deployment requires no paid service.

## UI requirements
- Use a dark gaming theme.
- Prioritize contrast, spacing, and readability.
- Make filters visible and easy to use.
- Make search immediate and prominent.
- Support keyboard navigation and mobile use.
- Use hover, focus, and active states clearly.
- Keep list cards compact and hero detail pages richer.

## Functional requirements
- Home page with catalog summary and quick entry.
- Full hero catalog with search, sort, and filters.
- Dedicated hero detail pages.
- Previous/next hero navigation.
- Local favorites stored in the browser.
- Shareable URLs with filter state when useful.
- Category chips for type, rarity, and class.
- Empty states and loading states that feel polished.

## Content and consistency rules
- Use a single source of truth for hero data.
- Keep naming consistent across filters, tags, and pages.
- Match labels to the game vocabulary.
- Never introduce fields that are not part of the agreed schema.
- Keep display content concise in lists and detailed in hero pages.

## Static deployment rules
- Prefer GitHub Pages or another free static host.
- Avoid backend services, paid APIs, or paid databases.
- Ensure the build output is pure static HTML/CSS/JS when possible.
- Document the deploy command and publish path.
- Verify the site works from a clean clone.

## Validation checklist
- The site builds without errors.
- All heroes in the data source render correctly.
- Search returns expected matches.
- Filters combine correctly.
- Detail pages resolve correctly.
- Mobile layout remains usable.
- Favorites persist locally.
- Deployment is possible without cost.

## Supporting files
- `references/data-schema.md` for the exact hero model and category rules.
- `references/ui-system.md` for the visual direction and component behavior.
- `references/workflow.md` for the end-to-end generation sequence.
- `scripts/validate-heroes.*` for data integrity checks.
- `examples/` for sample page structures and component patterns.
