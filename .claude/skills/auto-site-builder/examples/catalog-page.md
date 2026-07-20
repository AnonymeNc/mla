# Catalog page example

## Purpose
Provide a reference structure for the hero catalog page.

## Page structure
- Header
- Search area
- Filter panel
- Active filter chips
- Result count
- Hero grid
- Empty state
- Footer

## Layout sketch
```text
[Header]
[Hero title + intro]
[Search bar]
[Filter chips row]
[Sort selector]
[Result count]
[Hero cards grid]
[Pagination or load more]
[Footer]
```

## Content rules
- Show one concise card per hero.
- Show name, rarity, type, class, and a short summary.
- Keep hero images consistent in ratio.
- Prioritize scanability over long text.
- Keep filters visible without forcing extra clicks.

## Interaction rules
- Search updates the grid immediately.
- Filters can be combined.
- A clear-all action must always be available.
- Card clicks open the hero detail page.
- Favoriting must be possible from the catalog view.

## Responsive behavior
- Mobile: one column and stacked filters.
- Tablet: two or three columns.
- Desktop: four or more columns when space allows.

## Empty state
When no heroes match the current query:
- Show a friendly message.
- Show a clear filters button.
- Suggest broadening the search terms.
