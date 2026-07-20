# UI system

## Purpose
Define the visual language and interaction rules for a dark gaming-themed hero catalog site.

## Design principles
- Dark, high-contrast interface.
- Clear hierarchy.
- Fast scanning.
- Strong card-based browsing.
- Responsive first.
- Minimal clutter.
- Gaming atmosphere without hurting readability.

## Color system
Use a neon gaming palette based on dark surfaces.

### Suggested tokens
- `bg-0`: Deep black background.
- `bg-1`: Primary panel surface.
- `bg-2`: Secondary panel surface.
- `text-0`: Primary text.
- `text-1`: Secondary text.
- `accent-1`: Electric blue.
- `accent-2`: Neon purple.
- `accent-3`: Cyan.
- `success`: Green.
- `warning`: Amber.
- `danger`: Red.

## Typography
- Use a modern sans-serif for all UI text.
- Reserve display fonts only for hero headings or accents.
- Use strong size contrast between title, subtitle, and metadata.
- Keep line lengths readable on desktop and mobile.

## Layout system
### Global layout
- Sticky header.
- Main content centered in a wide container.
- Generous spacing between sections.
- Footer with minimal links and credits.

### Catalog layout
- Responsive grid of cards.
- Filters above the grid.
- Search bar prominent at the top.
- Result count visible and updated instantly.

### Hero detail layout
- Hero header with image, name, type, rarity, and class.
- Metadata blocks below the hero introduction.
- Related heroes shown in a side section or below the main content.

## Components
### Header
- Logo or site title.
- Navigation links.
- Search entry point.
- Mobile menu.

### Search bar
- Instant filtering.
- Placeholder text explaining the query format.
- Clear button.

### Filter chips
- Compact chips for type, rarity, class, and size.
- Active and inactive states must be visually distinct.
- Chips must wrap cleanly on mobile.

### Hero card
- Hero image.
- Name.
- Key tags.
- Rarity badge.
- Short description.
- Hover glow.
- Keyboard focus ring.

### Detail panels
- Description panel.
- Stats or metadata panel.
- Related heroes panel.
- Favorites panel.

### Empty state
- Friendly message.
- Suggestion to clear filters.
- Option to return to the full catalog.

## Interaction states
- Hover must create subtle elevation or glow.
- Focus must be clearly visible for keyboard users.
- Active states must be obvious on buttons and chips.
- Disabled states must remain readable.
- Loading states should use skeleton cards if needed.

## Motion rules
- Keep animations short and smooth.
- Prefer opacity, transform, and shadow transitions.
- Avoid excessive motion.
- Respect reduced-motion preferences.

## Responsive rules
### Mobile
- Single-column layout.
- Filters collapsible or stacked.
- Cards sized for touch.
- Header compact.
- Sticky search optional.

### Tablet
- Two-column or three-column grids.
- Filters visible without overwhelming the page.

### Desktop
- Wider hero grid.
- Persistent filters panel when practical.
- More detail visible above the fold.

## Accessibility rules
- All buttons and links must be keyboard reachable.
- All images need alt text.
- Contrast must remain sufficient.
- Focus indicators must never be removed.
- Interactive targets must be large enough on mobile.

## Visual identity
- Use neon borders, soft glows, and layered surfaces.
- Keep the catalog readable before decorative.
- Use badges and chips to reinforce game taxonomy.
- Do not overload the UI with visual effects.

## UI quality checklist
- Search is visible immediately.
- Filters are understandable in one glance.
- Cards are easy to scan.
- Hero pages are structured clearly.
- Mobile layout feels native.
- The page remains fast and light.
