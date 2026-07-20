# Data schema

## Purpose
Define the canonical data model for the Mobile Legends: Adventure hero catalog site.

## Source of truth
All hero data must come from a single structured dataset, preferably JSON or TypeScript data. The data layer must be the only place where hero facts are stored.

## Hero object
Each hero record must contain the following fields:

- `id`: Stable unique identifier, lowercase kebab-case.
- `name`: Display name of the hero.
- `slug`: URL-safe slug for routing.
- `type`: Hero type or faction group.
- `rarity`: Hero rarity.
- `class`: Main class.
- `advancedClass`: Advanced class, if applicable.
- `equipmentSize`: Light, Medium, or Heavy.
- `description`: Short summary for catalog and detail pages.
- `image`: Relative path or remote image URL.
- `wikiUrl`: Canonical wiki link.
- `tags`: Array of strings used for filtering and discovery.
- `isHybrid`: Boolean indicating whether the hero has multiple types.
- `types`: Array of types when `isHybrid` is true.
- `releaseDate`: Optional ISO date string.
- `role`: Optional gameplay role label.
- `faction`: Optional lore or universe grouping.
- `featured`: Optional boolean for homepage highlighting.

## Canonical enums
Use controlled values whenever possible.

### Rarity
- `R`
- `SR`
- `SSR`
- `UR`

### Type
- `Elemental`
- `Tech`
- `Martial`
- `Light`
- `Dark`
- `Order`
- `Chaos`
- `Astral`
- `Hybrid`

### Equipment size
- `Light`
- `Medium`
- `Heavy`

### Main class
- `Support`
- `Mage`
- `Fighter`
- `Tank`
- `Marksman`

### Advanced class
Store the advanced class when available. Examples include specialized branches from the main class tree such as:
- `Spirit`
- `Oracle`
- `Warlock`
- `Arcanist`
- `Dragon Knight`
- `Inquisitor`
- `Strategist`
- `Iron Guard`
- `Ranger`
- `Sniper`

## Normalization rules
- Use consistent capitalization in the dataset.
- Keep displayed labels human-friendly, but preserve stable enum values internally.
- Use an empty string or null for unavailable optional fields.
- Never duplicate hero facts in multiple sources.
- If a hero has multiple types, set `isHybrid` to true and store the list in `types`.
- If a field is unknown, do not invent it.

## Filter dimensions
The site must support filtering by:
- name
- rarity
- type
- class
- advancedClass
- equipmentSize
- hybrid status
- featured status

## Sorting rules
The data layer must support at least:
- alphabetical by name
- rarity grouping
- type grouping
- release date, if available

## Validation rules
- `id` must be unique.
- `slug` must be unique.
- `name` must not be empty.
- `rarity`, `type`, `class`, and `equipmentSize` must use controlled values.
- `wikiUrl` must be a valid URL string.
- `tags` must be an array of non-empty strings.
- `image` must resolve correctly in production.
- Hybrid heroes must have `types.length >= 2`.

## Accessibility and display requirements
- Every hero card must have an accessible label.
- Every image must have meaningful alt text.
- Every filter must map to a visible label.
- Empty states must be handled gracefully.

## Output formats
The dataset must be exportable as:
- JSON
- TypeScript module
- Static HTML generation source

## Maintenance rule
When a new hero is added, update the dataset first, then regenerate the UI and indexes from that data.
