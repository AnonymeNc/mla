# Workflow

## Purpose
Define the automatic generation and maintenance workflow for the Mobile Legends: Adventure hero catalog site.

## Operating model
The site must be buildable from a clean repository with minimal human intervention. The workflow should be deterministic, data-driven, and compatible with a fully static deployment.

## Phase 1: Audit
1. Detect the framework, if any.
2. List existing files and folders.
3. Identify current data sources.
4. Detect duplicated logic or stale assets.
5. Decide whether to extend or replace existing code.

## Phase 2: Data foundation
1. Create or normalize the hero dataset.
2. Validate required fields.
3. Generate derived indexes for search and filters.
4. Ensure slugs and ids are stable.
5. Rebuild any data exports from the canonical source.

## Phase 3: Design system
1. Apply the dark gaming palette.
2. Define typography tokens.
3. Build spacing and card rules.
4. Define button, chip, badge, and panel styles.
5. Verify mobile and desktop behavior.

## Phase 4: Core UI generation
1. Build the global layout.
2. Build the header and navigation.
3. Build the search bar.
4. Build the filter system.
5. Build the hero card grid.
6. Build the hero detail page.
7. Build favorite persistence in local storage.

## Phase 5: Interaction logic
1. Wire search to the canonical dataset.
2. Wire filters to the result engine.
3. Combine filters safely.
4. Keep URLs shareable when possible.
5. Add previous and next hero navigation.
6. Add empty state handling.

## Phase 6: Quality checks
1. Validate the dataset schema.
2. Check that all routes resolve.
3. Verify image paths.
4. Confirm that search returns expected matches.
5. Confirm that filters combine correctly.
6. Confirm keyboard accessibility.
7. Confirm mobile layout readability.

## Phase 7: Static export
1. Produce a static build.
2. Confirm that no backend is required.
3. Confirm that no paid API is required.
4. Confirm that the output can be hosted on a free static host.
5. Document the deployment steps.

## Phase 8: Maintenance loop
1. Add or update a hero in the dataset.
2. Regenerate indexes and UI output.
3. Re-run validation.
4. Rebuild the static site.
5. Publish the updated artifacts.

## Automation rules
- Never modify generated files by hand if they can be derived from the source data.
- Never bypass validation when adding new heroes.
- Never introduce a server dependency.
- Keep the build repeatable.
- Keep human edits confined to source data, design rules, and workflow files.

## Deployment target
Prefer a free static host such as GitHub Pages or an equivalent free static hosting platform. The final output must be usable without recurring costs.

## Definition of done
The workflow is complete when a clean build produces a usable, fast, responsive, static hero catalog site with searchable, filterable, and browsable hero pages.
