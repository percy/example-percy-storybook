# Advanced Percy + Storybook example

This directory exercises the full applicable Percy SDK feature surface for `@percy/storybook`. See the basic example at the repo root for the minimum integration.

Storybook SDK is a CLI addon (`percy storybook` / `percy storybook:start`), not a per-snapshot function. Coverage is driven by `parameters.percy` on each story plus CLI-level filters in `.percy.yml`.

## What this example covers

A single stories file (`stories/AdvancedExamples.stories.js`) where each named story sets `parameters.percy` for one row of the [Percy SDK Advanced Feature Matrix](../../../docs/advanced-example-feature-matrix.md). Global SDK config — widths, minHeight, percyCSS, devicePixelRatio, `storybook.include` — lives in `.percy.yml`.

Note: `scope`, `regions`, `domTransformation`, `discovery` are marked `N/A` in `matrix.yml` — stories run isolated in Storybook iframes and these options don't apply.

## Run locally

```bash
cd advanced
npm install
export PERCY_TOKEN="<your project token>"      # do NOT commit this
npm run test:advanced
```

To run without a real token (CI assertion mode):

```bash
npm run test:advanced:ci   # uses --testing + PERCY_TOKEN=fake_token
```

The CI variant asserts every matrix row appears in the captured POST bodies at the local `/test/requests` endpoint. No real Percy build is created.

## Coverage matrix

States: `Covered` / `N/A — <reason>` / `Planned` / `Deprecated`. Source of truth is [`matrix.yml`](./matrix.yml).

| Feature | State | Test |
|---|---|---|
| widths | Covered | `AdvancedExamples > Widths` |
| percyCSS | Covered | `AdvancedExamples > PercyCSS` |
| minHeight | Covered | `AdvancedExamples > MinHeight` |
| enableJavaScript | Covered | `AdvancedExamples > EnableJavaScript` |
| responsiveSnapshotCapture | Covered | `AdvancedExamples > ResponsiveCapture` |
| `parameters.percy` (story-level) | Covered | every story in `AdvancedExamples` |
| `additionalSnapshots` | Covered | `AdvancedExamples > Variants` (3 suffix/args variants) |
| `args` override | Covered | `AdvancedExamples > ArgsOverride` |
| `queryParams` | Covered | `AdvancedExamples > QueryParams` |
| `name` override | Covered | `AdvancedExamples > NameOverride` |
| `skip` | Covered | `AdvancedExamples > Skip` (no snapshot expected) |
| CLI `include` filter | Covered | `.percy.yml` `storybook.include` |
| devicePixelRatio | Covered | `.percy.yml` `snapshot.device-pixel-ratio` |
| `.percy.yml` global config | Covered | applied to every story |
| environment info reporting | Covered | automatic via `@percy/storybook` client info |
| PERCY_SERVER_ADDRESS via env | Covered | CI advanced job picks up `PERCY_SERVER_ADDRESS` |
| CLI `exclude` filter | Planned | — |
| `globals` override | Planned | — |
| browsers override | Planned | global via `.percy.yml` or `--browsers` |
| `scope` | N/A | Stories iframe-isolated |
| `regions` / `createRegion` | N/A | Stories iframe-isolated |
| `domTransformation` | N/A | Stories iframe-isolated |
| `discovery` per-story | N/A | CLI-managed only |
