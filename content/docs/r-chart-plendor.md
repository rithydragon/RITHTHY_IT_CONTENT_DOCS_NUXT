# RChartSplendor

Data explorer card: global search, filters, multi-sort, pagination, column toggle, selection, row actions, CSV / Excel / SVG export and an optional chart view — fed either by **your API through the existing `useHttp`** or by **local data from the parent**.

```
app/components/RChartSplendor.vue        UI
app/composables/useChartPaddle.ts        query engine shared by both modes (state, requests, stale-response guard, retries)
app/utils/chart/splendor.types.ts        public types, option defaults, English labels
app/utils/chart/splendor.api.ts          request params · response mapping · useHttp failure classification
app/utils/chart/splendor.local.ts        local search / filter / sort / paginate
app/utils/chart/xlsx.ts                  dependency-free .xlsx writer
app/pages/rchart-splendor-demo.vue       both modes, runnable
tests/*.test.ts                          50 tests (vitest) — see "Validation"
```

## Usage

```vue
<!-- API mode: nothing is filtered / sorted / paged in the browser -->
<RChartSplendor
  v-model:search="search" v-model:filters="filters" v-model:page="page" v-model:page-size="pageSize" v-model:sort="sort"
  :api="{ url: api.dashboard.users, method: 'GET', filter: { tenant: 1 }, where: { deleted: false } }"
  :columns="columns"
  :filter-defs="filterDefs"
  :options="{ searchable: true, paginated: true, multiSort: true, retry: 2, export: { csv: true, excel: true } }"
  @data:change="onData" @data:filterChange="onFilter" @error="onError"
/>

<!-- Local mode: never calls useHttp -->
<RChartSplendor mode="local" :data="users" :columns="columns" :filter-defs="filterDefs"
  :options="{ searchable: true, paginated: true, selectable: true }" @data:change="onData" @error="onError" />
```

`mode` is optional: `api` given → `'api'`, otherwise `'local'`. `mode="local"` ignores `api` (dev warning). API mode fetches on mount (`immediate`), so SSR never fires requests.

### Request (API mode)

| Sent | Default name | Notes |
|---|---|---|
| page / size | `page`, `page_size` | `api.pageBase: 0` for zero-based; omitted when `paginated: false` |
| search | `search` | trimmed; skipped below `options.minSearchLength` |
| sort | `sort=name:asc,age:desc` | `api.sortFormat`: `'colon'` · `'prefix'` (`name,-age`) · `'split'` (`sort_by`, `sort_dir`); column `sortKey` renames the field |
| filters | flat: `role=admin`, `age_from=20`, `age_to=30` | `paramMap.filters: 'f'` nests them; `filterDef.param` renames; `rangeFrom` / `rangeTo` change the suffixes |
| `api.filter` / `api.where` | `filter`, `where` | static; objects are JSON-stringified on GET, sent as-is in a body |
| `api.params` | as given | static extras |

Preset for the RTable payload names: `:api="{ url, ...SPLENDOR_PRESETS.rtable }"` → `Pages`, `Records`, `Search`, `OrderBy`, `OrderDir` (verify against your endpoint).

GET → `useHttp(url, { method, signal, params })`; other methods → `{ body }`. Override everything with `api.buildParams(state, defaults)`; extra `useHttp` options go in `api.options`.

### Response (API mode)

Auto-detected: root array, or `Items / items / data / results / rows / list / records` (also `data.items`); total from `Total / total / count / meta.total / pagination.total …`; pages from `TotalPages / total_pages / meta.last_page …`. Override with `api.responseMap` (dot paths or functions) or `api.transform(raw)`. No total in the response → prev / next paging (`totalKnown: false`). An unrecognised shape raises a `mapping` error with a hint instead of showing an empty table.

## API surface

**v-model** `search` `filters` `page` `pageSize` `sort` `selected` `visibleColumns` `view` — each optional; unbound state is managed internally.
**Events** `data:change` `data:filterChange` `data:sortChange` `data:pageChange` `status:change` `error` `selection:change` `row:click` `row:action` `export` `refresh` `view:change` (+ the `update:*` of the models).
**Slots** `header` `toolbar` `toolbar-start` `toolbar-end` `filters` `bulk-actions` `loading` `error` `empty` `chart` `summary` `footer` `actions` · per column: `cell-<key>`, `header-<key>`.
**Expose** `refresh()` `resetSearch()` `resetFilters()` `resetSort()` `resetAll()` `exportAs(format, scope?)` `setPage()` `setPageSize()` `clearSelection()` `getState()` + `rows` `status` `error`.
**Options** `searchable searchPlaceholder searchDebounce minSearchLength searchFields filterable paginated pageSizeOptions defaultPageSize sortable multiSort selectable rowKey columnToggle refreshable rowActions retry retryDelay dense striped stickyHeader summary export chart` — see `splendor.types.ts`.
**Labels** pass `:labels` for i18n (English defaults), `:locale` for number / date / sort formatting.

Behaviour guarantees: search / filter / sort / page-size changes reset to page 1 and produce **one** request; each new request aborts the previous one and late responses are ignored; an out-of-range page jumps to the last real page; retries (`options.retry`, exponential `retryDelay`) apply to network errors, 5xx, 408 and 429 only; in API mode a failure keeps the previous rows visible with a banner; all timers and in-flight requests are cleaned up on unmount.

## Validation (what was and was not run)

Run in a scratch project (Vue 3.5, TypeScript 5.8, vitest 5, happy-dom, `vue-tsc`, `sass-embedded`):
- `vue-tsc --noEmit` on the SFCs, composables, utils and both demo pages — clean (and confirmed it fails on a deliberate error).
- 50 vitest tests — pure helpers, the engine (stale responses, aborts, retries, coalescing, page clamping, missing totals, 401 / offline / mapping errors), and the mounted component in both modes (debounce, sort cycle, selection, export, error/retry, unmount abort, the `@data:filterChange` listener names).
- `.xlsx` output opened with openpyxl (zip CRC, Khmer text, numbers, booleans, escaping).

Not run: ESLint (no config was provided), the real Nuxt app, the real Nuxt UI components (stubbed in tests), your real `useHttp` / backend.

## Known limitations

- **Project files I could not inspect:** only `http.ts` was available. No `RInput` / `RSelect` / pagination component, `models/http`, `package.json` or test setup were visible, so the UI uses Nuxt UI primitives (`UInput`, `UButton`, `UPagination`, `UPopover`, `UDropdownMenu`, `UBadge`, `UIcon`) and native selects/inputs, and tests use vitest (Nuxt's default). Swap in your `R*` components where they fit.
- **`useHttp` assumptions** (from `http.ts` and the dashboard's usage): `params` carries GET query values, `body` the payload for other methods, and `options.signal` cancels. Confirm `useOptions` maps them that way.
- **Aborted requests** come back from `useHttp` with `error: undefined`; the engine detects staleness with its own request id and signal, so this is handled — but `useHttp` itself still sets the upload/toast side effects it always does.
- **Export:** CSV and Excel are built in (no dependency). `scope: 'all'` in API mode needs `export.fetchAll(state)`; otherwise it exports the current page. SVG export needs the `chart` option and the `svg` renderer registered in `nuxt.config`. There is no cell styling in Excel.
- **Chart view** plots the rows currently shown (the current page in API mode).
- **i18n:** no `useI18n` keys are invented — pass `labels`.
- **Page-size changes from the parent** that are not in `pageSizeOptions` are accepted and added to the dropdown.
- Server-reported `page` / `pageSize` in a response are parsed but not used to overwrite the requested values.
