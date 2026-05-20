# Advanced Percy + Storybook example — STUB

**Status:** Phase 1 stub. `matrix.yml` is populated based on `@percy/storybook` research. Story files in `advanced/stories/` are **not yet written**.

Storybook SDK is a CLI addon (`percy storybook <url|directory>`), not a per-snapshot function. Coverage is driven by `parameters.percy` on each story.

See the basic example at the repo root (`js/TodoApp.stories.js` already exercises `parameters.percy.additionalSnapshots`).

## What this example will cover

Stories in `advanced/stories/*.stories.js`, each demonstrating one matrix row:
- `additionalSnapshots` with args + suffix
- `args` / `globals` / `queryParams` overrides
- `skip` / name override
- per-story `widths` / `minHeight` / `percyCSS` / `enableJavaScript` / `responsiveSnapshotCapture`

CI runs `percy storybook ./storybook-static --include "Advanced/.*"` (uses `--include` filter to scope to advanced stories only, keeping the basic example untouched).

Note: `scope`, `regions`, `dom_transformation`, `discovery` are marked `N/A` in `matrix.yml` — stories run isolated in iframes and these options don't apply.

## Run locally (once stories are written)

```bash
cd advanced
npm install
export PERCY_TOKEN="<your project token>"      # do NOT commit
npm run build-storybook
npx percy storybook ./storybook-static --include "Advanced/.*"
```

## Coverage matrix

Source of truth: [`matrix.yml`](./matrix.yml). States: `Covered` / `N/A — <reason>` / `Planned` / `Deprecated`.
