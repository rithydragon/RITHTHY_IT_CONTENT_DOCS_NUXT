# RChart — complete usage reference

Reusable ECharts card for Nuxt 4 + NuxtUI 4, built on `nuxt-echarts` (vue-echarts `<VChart>`).

```
app/components/RChart.vue
app/utils/chart/{types,build,format,export}.ts
app/pages/rchart-demo.vue          ← runnable examples
nuxt.config.ts                     ← echarts block
```

---

## 1. Install & Nuxt config

```bash
npx nuxi module add echarts        # nuxt-echarts (+ echarts)
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui', 'nuxt-echarts'],
  echarts: {
    renderer: ['canvas', 'svg'],   // 'svg' only needed for toolbar.exportSvg / initOptions.renderer = 'svg'
    charts: [
      'LineChart', 'BarChart', 'PieChart', 'ScatterChart', 'RadarChart',
      'GaugeChart', 'FunnelChart', 'HeatmapChart', 'CandlestickChart',
    ],
    components: [
      // required by RChart
      'GridComponent', 'TooltipComponent', 'LegendComponent', 'AriaComponent',
      // needed per feature (see tables below)
      'DataZoomComponent', 'VisualMapComponent', 'RadarComponent',
      // optional, for `options`, slots and events
      'GraphicComponent', 'ToolboxComponent', 'TitleComponent', 'DatasetComponent',
      'TransformComponent', 'MarkLineComponent', 'MarkPointComponent', 'MarkAreaComponent', 'BrushComponent',
    ],
    features: ['LabelLayout', 'UniversalTransition'],
  },
})
```

> Your pasted block repeats a second "Add more when you use them…" comment at the bottom. It lists the same components as the
> `── for options … ──` group, so you can delete it.

### 1.1 What each registration enables

| Registration | Needed for | If missing |
|---|---|---|
| `LineChart` | `line`, `area`, `mixed` (line series) | those types render nothing / ECharts logs "series.type is not exists" |
| `BarChart` | `bar`, `stacked`, `mixed` (bar series) | same |
| `PieChart` | `pie`, `doughnut` | same |
| `ScatterChart` | `scatter` | same |
| `RadarChart` + `RadarComponent` | `radar` | same |
| `GaugeChart` | `gauge` | same |
| `FunnelChart` | `funnel` | same |
| `HeatmapChart` + `VisualMapComponent` | `heatmap` (colour scale) | no colouring / no chart |
| `CandlestickChart` | `candlestick` | same |
| `GridComponent` | every cartesian type + heatmap | axes and series missing |
| `TooltipComponent` | tooltips, `#tooltip*` slots | no tooltip |
| `LegendComponent` | legend, `@legend-change`, `#legend` slot toggling | no legend, toggle does nothing |
| `AriaComponent` | screen-reader description (`aria.enabled`) | no generated aria-label |
| `DataZoomComponent` | `toolbar.zoom`, `display.zoomSlider`, `@zoom` | zoom buttons do nothing |
| `GraphicComponent` | `#graphic` slot, `options.graphic`, `vue-echarts/graphic` (`GGroup`, `GRect`…) | overlay not drawn |
| `ToolboxComponent` | `options.toolbox`, `#dataView` slot, `@restore`, `@dataview-changed`, `@magictypechanged` | toolbox/data view absent |
| `TitleComponent` | `options.title` (RChart's own header is HTML, so this is optional) | `options.title` ignored |
| `DatasetComponent` / `TransformComponent` | `options.dataset`, filter / sort transforms | dataset ignored |
| `MarkLineComponent` / `MarkPointComponent` / `MarkAreaComponent` | `series[n].options.markLine` / `markPoint` / `markArea` | marks ignored |
| `BrushComponent` | `@chart-event` → `brush`, `brushEnd`, `brushselected`, `@brush-selected` | no brush events |
| `TimelineComponent` *(add if used)* | `timelinechanged`, `timelineplaychanged` | — |
| `GeoComponent` *(add if used)* | `geoselectchanged`, `geoselected`, `geounselected` (opt-in events) | — |
| `AxisPointerComponent`, `PolarComponent`, `ParallelComponent` *(add if used)* | advanced `options` | — |
| renderer `'svg'` | `toolbar.exportSvg`, `initOptions: { renderer: 'svg' }` | "Renderer 'svg' is not imported" → `@export` with `success: false` |
| feature `LabelLayout` | pie / doughnut label overlap avoidance (`display.dataLabels`) | labels may overlap |
| feature `UniversalTransition` | smooth morph when the type switcher changes type | instant swap |

### 1.2 Minimum per chart type

| `type` | Chart module | Components |
|---|---|---|
| `line`, `area` | `LineChart` | Grid, Tooltip, Legend (+DataZoom if `toolbar.zoom`) |
| `bar`, `stacked` | `BarChart` | Grid, Tooltip, Legend (+DataZoom) |
| `mixed` | `LineChart` + `BarChart` | Grid, Tooltip, Legend (+DataZoom) |
| `scatter` | `ScatterChart` | Grid, Tooltip, Legend (+DataZoom) |
| `candlestick` | `CandlestickChart` | Grid, Tooltip (+DataZoom) |
| `pie`, `doughnut` | `PieChart` | Tooltip, Legend |
| `funnel` | `FunnelChart` | Tooltip, Legend |
| `radar` | `RadarChart` | Radar, Tooltip, Legend |
| `gauge` | `GaugeChart` | — |
| `heatmap` | `HeatmapChart` | Grid, Tooltip, VisualMap |

The type switcher can change `type` at runtime, so register the modules for **every** type you let users switch to.

---

## 2. Props

All props are optional. Booleans, objects and arrays are reactive; changes re-run the option builder.

### 2.1 Data

| Prop | Type | Default | Notes |
|---|---|---|---|
| `type` | `RChartType` | `'line'` | `line` `area` `bar` `stacked` `pie` `doughnut` `scatter` `radar` `gauge` `funnel` `heatmap` `candlestick` `mixed`. Follows the type switcher with `v-model:type`, or works locally without it. |
| `data` | `number \| RChartPoint[]` | — | pie / doughnut / funnel items, gauge value, candlestick & heatmap points, or one unnamed series of numbers (cartesian). |
| `series` | `RChartSeries[]` | — | Multi-series data (cartesian, scatter, radar, mixed). Also feeds pie / gauge / heatmap / candlestick via `series[0]`. |
| `categories` | `string[]` | — | x-axis labels (cartesian, candlestick, heatmap). Radar: indicator names when `indicators` is omitted. |
| `yCategories` | `string[]` | — | heatmap y-axis labels. |
| `indicators` | `RChartIndicator[]` | — | radar axes `{ name, max?, min? }`. |

### 2.2 Header

| Prop | Type | Default | Notes |
|---|---|---|---|
| `title` | `string` | — | also the default export file name and `aria-label` |
| `subtitle` | `string` | — | |
| `description` | `string` | — | longer text under the subtitle |
| `icon` | `string \| false` | — | Iconify name, e.g. `i-lucide-chart-line`. `false` hides it even if `#icon` exists |
| `header` | `RChartHeaderConfig` | `{}` | see 3.2 |

### 2.3 Size, state, look

| Prop | Type | Default | Notes |
|---|---|---|---|
| `height` | `number \| string` | `320` | plot height; numbers are px |
| `width` | `number \| string` | `'100%'` | |
| `loading` | `boolean` | `false` | skeleton on first load, translucent veil on later reloads |
| `error` | `string \| boolean \| null` | `null` | `true` or message → error state (message shown) |
| `theme` | `'auto' \| 'light' \| 'dark'` | `'auto'` | `auto` follows `useColorMode()` / the `.dark` class |
| `colors` | `string[]` | SARIKA palette | overrides the series palette |
| `variant` | `'card' \| 'outline' \| 'flat' \| 'glass'` | `'card'` | |
| `display` | `RChartDisplay` | `{}` | see 3.1 |
| `toolbar` | `RChartToolbarConfig \| boolean` | `{}` | `false` hides every built-in control, including reload. See 3.3 |
| `periods` | `RChartPeriod[]` | — | segmented date filter in the header |
| `period` | `string` | first period | selected value; use `v-model:period` |
| `labels` | `Partial<RChartLabels>` | English | i18n for built-in text. See 3.5 |
| `ariaLabel` | `string` | `title` | `role="figure"` label |
| `autoresize` | `boolean \| { throttle?, onResize? }` | `true` | |
| `exportName` | `string` | `title` | base file name for exports |

### 2.4 Formatting

| Prop | Type | Notes |
|---|---|---|
| `unit` | `string` | appended to values, e.g. `'%'`, `' kg'` (ignored when `currency` is set) |
| `currency` | `string` | ISO 4217, e.g. `'USD'`, `'KHR'` — uses `Intl.NumberFormat` |
| `locale` | `string` | BCP 47, e.g. `'km'`, `'en-US'` (default: browser) |
| `decimals` | `number` | fixed decimals for tooltips / labels (axes use compact notation) |
| `valueFormatter` | `(value, ctx) => string` | full control; `ctx = { seriesName?, name?, axis? }`, `axis: true` for tick labels |

### 2.5 Advanced

| Prop | Type | Notes |
|---|---|---|
| `options` | `Record<string, any>` | native ECharts option merged over the defaults — see section 6 |
| `echartsTheme` | `string \| object` | a theme from `echarts.registerTheme`, or a theme object |
| `initOptions` | `object` | `echarts.init` options: `{ renderer: 'svg', locale: 'EN', devicePixelRatio: 2 }` |
| `updateOptions` | `object` | passed to `setOption` as-is; turns off vue-echarts' smart update planner |
| `manualUpdate` | `boolean` | only the first option is applied; update with `setOption()` from the ref |
| `group` | `string` | `echarts.connect` group — charts with the same group link tooltips / zoom |
| `events` | `string[]` | extra raw ECharts / ZRender events to forward via `@chart-event` |

---

## 3. Config objects

### 3.1 `display`

| Key | Default | Effect |
|---|---|---|
| `legend` | `true` | `true`/`'bottom'`, `'top'`, or `false`. Hidden automatically when `#legend` is used |
| `tooltip` | `true` | |
| `grid` | `true` | dashed horizontal split lines |
| `axisLabels` | `true` | |
| `dataLabels` | `false` | value labels on bars / points / pie slices / heatmap cells |
| `animation` | `true` | also forced off when the OS prefers reduced motion |
| `gradient` | area: on, bar: off | vertical gradient fill (per series override: `series[n].gradient`) |
| `smooth` | `true` (lines) | per series: `series[n].smooth` |
| `zoomSlider` | `false` | slider under cartesian charts (needs `toolbar.zoom`) |
| `min`, `max` | auto | gauge range (default 0–100); y-axis bounds on cartesian; heatmap colour range |
| `xAxisName`, `yAxisName`, `y2AxisName` | — | axis titles (`y2` = secondary axis) |
| `barRadius` | `6` | px; ignored for stacked bars |

### 3.2 `header`

| Key | Default | Values |
|---|---|---|
| `visible` | `true` | hides the whole header (including the reload button) |
| `align` | `'start'` | `'start'` `'center'` `'end'` |
| `layout` | `'inline'` | `'inline'` icon beside text · `'stacked'` icon above |
| `bordered` | `false` | divider under the header |
| `spacing` | `'md'` | `'sm'` `'md'` `'lg'` — padding for the whole card |
| `iconStyle` | `'soft'` | `'soft'` `'solid'` `'plain'` |
| `titleTag` | `'h3'` | `'h1'`–`'h4'`, `'p'` |
| `class`, `style` | — | extra class / inline style for the `<header>` |

### 3.3 `toolbar`

| Key | Default | Effect |
|---|---|---|
| `visible` | `true` | hides the toolbar row and the default reload button |
| `refresh` | `true` | default reload button in `#header-actions` → `@refresh` |
| `exportPng` / `exportSvg` / `exportData` | `false` | entries in the export menu (PNG 2×, SVG, CSV) |
| `fullscreen` | `false` | native Fullscreen API, fixed-position fallback (iOS) |
| `zoom` | `false` | zoom in / out / reset + adds a `dataZoom` (cartesian types only) |
| `typeSwitch` | `false` | `true` → the type's family (`line/area/bar/stacked` or `pie/doughnut/funnel`), or an explicit `RChartType[]` |
| `actions` | `[]` | custom buttons `{ key, label, icon?, disabled?, loading? }` → `@action` |

### 3.4 `periods` item

```ts
{ value: '30d', label: '30D', range?: { from: '2026-09-21', to: '2026-10-21' } }
```

### 3.5 `labels` (all built-in strings)

`refresh`, `export`, `exportPng`, `exportSvg`, `exportData`, `fullscreen`, `exitFullscreen`, `zoomIn`, `zoomOut`, `zoomReset`,
`chartType`, `noData`, `noDataHint`, `errorTitle`, `retry`, `loading`, `period`.

```vue
<RChart :labels="{ refresh: t('common.refresh'), noData: t('chart.noData') }" />
```

---

## 4. Data shapes per chart type

```ts
type RChartTuple = Array<number | string | null>
interface RChartDatum  { name?: string; value: number | null | RChartTuple; color?: string }
interface RChartSeries {
  name: string
  data: Array<number | null | RChartDatum | RChartTuple> | number
  type?: 'line' | 'area' | 'bar' | 'scatter'   // per series (mixed)
  color?: string; stack?: string; smooth?: boolean
  yAxisIndex?: 0 | 1                            // 1 = secondary y axis
  gradient?: boolean
  options?: Record<string, unknown>             // raw ECharts series options, merged last
}
```

```vue
<!-- line / area / bar / stacked -->
<RChart type="area" :categories="['Jan','Feb','Mar']" :series="[{ name: 'Sales', data: [10, 20, 15] }]" />
<RChart type="bar"  :categories="cats" :data="[10, 20, 15]" title="One series via data" />
<RChart type="stacked" :categories="cats" :series="[{ name: 'A', data: a }, { name: 'B', data: b }]" />

<!-- mixed: bar + line on a secondary axis -->
<RChart type="mixed" :categories="cats" :display="{ yAxisName: 'Signups', y2AxisName: 'Conv. %' }"
  :series="[{ name: 'Signups', type: 'bar', data: a }, { name: 'Conv.', type: 'line', yAxisIndex: 1, data: b }]" />

<!-- pie / doughnut / funnel -->
<RChart type="doughnut" :data="[{ name: 'Search', value: 46 }, { name: 'Direct', value: 24, color: '#60a5fa' }]" />

<!-- scatter: [x, y] or [x, y, size] -->
<RChart type="scatter" :series="[{ name: 'Customers', data: [[100, 4], [250, 9, 40]] }]" />

<!-- radar -->
<RChart type="radar" :indicators="[{ name: 'Speed', max: 100 }, { name: 'Quality', max: 100 }]"
  :series="[{ name: 'Us', data: [82, 90] }, { name: 'Market', data: [70, 72] }]" />

<!-- gauge: number, or { name, value }; range via display.min / display.max -->
<RChart type="gauge" unit="%" :data="68" />
<RChart type="gauge" :data="[{ name: 'Used', value: 68 }]" :display="{ min: 0, max: 100 }" />

<!-- heatmap: points are [xIndex, yIndex, value] -->
<RChart type="heatmap" :categories="hours" :y-categories="days" :series="[{ name: 'Visits', data: points }]" />

<!-- candlestick: points are [open, close, low, high] -->
<RChart type="candlestick" :categories="dates" :series="[{ name: 'ACME', data: ohlc }]" :toolbar="{ zoom: true }" />
```

---

## 5. Events

### 5.1 Typed emits

| Event | Payload | Fires when |
|---|---|---|
| `chart-click` | `RChartPointEvent` | a series element is clicked |
| `chart-dblclick` | `RChartPointEvent` | double-click |
| `chart-contextmenu` | `RChartPointEvent` | right-click (the browser menu is not suppressed) |
| `chart-hover` | `RChartPointEvent \| null` | `mouseover` on an element / `null` on `globalout` |
| `legend-change` | `{ name, selected }` | a legend item is toggled (also via `#legend` slot `toggle`) |
| `zoom` | `{ start, end }` (percent) | dataZoom changes — wheel (Ctrl+wheel / pinch), slider, toolbar buttons |
| `ready` | `RChartInstance` | once, after the first render finishes |
| `finished` | — | after every render + animation finishes |
| `refresh` | — | reload button, error "Try again", or `ref.refresh()` |
| `export` | `{ format, fileName, success, error? }` | after PNG / SVG / CSV export |
| `fullscreen` | `boolean` | entered / left fullscreen |
| `period-change` | `{ value, period }` | period selected |
| `type-change` | `RChartType` | type switcher used or `ref.setType()` |
| `action` | `{ key, action }` | custom toolbar action clicked |
| `update:type` / `update:period` | `RChartType` / `string` | `v-model:type` / `v-model:period` |
| `highlight` / `downplay` | raw params | element highlighted / un-highlighted |
| `select-change` | raw params | `selectchanged` |
| `restore` | — | toolbox restore (needs `ToolboxComponent`) |
| `dataview-changed` | raw params | toolbox data view edited |
| `brush-selected` | raw params | brush selection (needs `BrushComponent`) |
| `chart-event` | `{ name, params }` | **every** forwarded ECharts / ZRender event (5.3) |

```ts
interface RChartPointEvent {
  componentType: string; seriesType?: string; seriesName?: string; seriesIndex?: number
  name?: string; dataIndex?: number; value?: unknown; color?: string
  raw: unknown                                    // untouched ECharts params
}
```

### 5.2 `@chart-event` — raw passthrough

Forwarded by default: `click` `dblclick` `contextmenu` `mouseover` `mouseout` `globalout` `highlight` `downplay` `selectchanged`
`legendselectchanged` `legendselected` `legendunselected` `legendselectall` `legendinverseselect` `legendscroll` `datazoom`
`datarangeselected` `timelinechanged` `timelineplaychanged` `restore` `dataviewchanged` `magictypechanged` `brush` `brushEnd`
`brushselected` `axisareaselected` `globalcursortaken` `finished`.

Opt in with `:events` (high-frequency or niche): `rendered` `mousemove` `mousedown` `mouseup` `geoselectchanged` `geoselected`
`geounselected` `zr:click` `zr:mousedown` `zr:mouseup` `zr:mousewheel` `zr:dblclick` `zr:contextmenu`.

```vue
<RChart :events="['mousemove', 'zr:click']" @chart-event="({ name, params }) => console.log(name, params)" />
```

---

## 6. `options` — native ECharts, merged over the defaults

Your object wins. Rules:

| Value | Behaviour |
|---|---|
| plain object | merged recursively |
| `series` array | merged **by index** — `series: [{ smooth: false }]` tweaks series 0 and keeps the rest |
| any other array (`color`, `data`, `dataZoom`, `indicator`…) | replaced |
| function / primitive / `null` | replaces (`null` removes a default) |
| `__proto__`, `constructor`, `prototype` keys | ignored |

```vue
<RChart
  type="line" :categories="months" :series="series"
  :options="{
    grid: { left: 24 },
    xAxis: { axisLabel: { rotate: 35 } },
    tooltip: { axisPointer: { type: 'cross' } },
    series: [{ lineStyle: { width: 3 } }, { lineStyle: { type: 'dashed' } }],
    toolbox: { feature: { saveAsImage: {}, dataView: { readOnly: true } } },   // needs ToolboxComponent
  }"
/>
```

Per-series raw options: `series: [{ name: 'Sales', data, options: { markLine: { data: [{ type: 'average' }] } } }]` (needs `MarkLineComponent`).

---

## 7. Slots

Slot props common to all RChart slots (`ctx`): `{ type, state, loading, period, chart, option, refresh }`
where `state` is `'loading' | 'error' | 'empty' | 'ready'`, `chart` is the vue-echarts instance, `option` the final option.

### 7.1 Layout slots

| Slot | Replaces / adds | Extra props |
|---|---|---|
| `header` | the entire header | — |
| `header-start` | content before the icon | — |
| `icon` | the icon (`UIcon`) | — |
| `title` | title element | — |
| `subtitle` | subtitle element | — |
| `header-filter` | the default period selector | — |
| `header-end` | content before the actions | — |
| `header-actions` | **default reload button** | — |
| `filters` | left side of the toolbar row | — |
| `toolbar` | the default toolbar controls (type switch, zoom, custom actions, export, fullscreen) | — |
| `chart` | the whole body — chart **and** loading / error / empty overlays | — |
| `loading` | skeleton | — |
| `error` | error state | `message`, `retry` |
| `empty` | empty state | — |
| `legend` | custom legend; hides the ECharts legend | `items: { name, color, visible }[]`, `toggle(name)` |
| `footer` | below the chart | — |

```vue
<RChart type="doughnut" :data="traffic">
  <template #legend="{ items, toggle }">
    <button v-for="it in items" :key="it.name" :class="{ off: !it.visible }" @click="toggle(it.name)">
      <i :style="{ background: it.color }" /> {{ it.name }}
    </button>
  </template>
  <template #header-end><UBadge label="Beta" /></template>
  <template #error="{ message, retry }">{{ message }} <UButton @click="retry">Retry</UButton></template>
</RChart>
```

### 7.2 Forwarded slots (vue-echarts)

Passed unchanged to `<VChart>`; a slot **overrides** the matching callback in `options`. The slot argument is the callback's first
parameter (an axis tooltip receives an **array**).

| Slot name | Overrides |
|---|---|
| `tooltip` | `option.tooltip.formatter` |
| `tooltip-0` | `option.tooltip[0].formatter` |
| `tooltip-baseOption` | `option.baseOption.tooltip.formatter` |
| `tooltip-xAxis-1` | `option.xAxis[1].tooltip.formatter` |
| `tooltip-series-2-data-4` | `option.series[2].data[4].tooltip.formatter` |
| `dataView` | `option.toolbox.feature.dataView.optionToContent` |
| `dataView-1` | `option.toolbox[1].feature.dataView.optionToContent` |
| `dataView-media-1-option` | `option.media[1].option.toolbox.feature.dataView.optionToContent` |
| `graphic` | `option.graphic` (declarative `G*` elements) |

Rule: `tooltip` / `dataView` + `-` + each path segment (property name or array index). `tooltip` slots apply only while tooltips are
on; `dataView` needs `options.toolbox.feature.dataView`.

```vue
<script setup lang="ts">
import { GGroup, GRect, GText } from 'vue-echarts/graphic'   // GCircle GLine GPolyline GPolygon GImage GSector GRing GArc GBezierCurve GCompoundPath
</script>

<RChart type="bar" :categories="days" :series="series">
  <template #tooltip="params">
    <strong>{{ params[0].axisValueLabel }}</strong>
    <div v-for="p in params" :key="p.seriesName"><span v-html="p.marker" /> {{ p.seriesName }}: {{ p.value }}</div>
  </template>

  <template #graphic>
    <GGroup :x="80" :y="20"><GRect :width="96" :height="26" :r="13" fill="#ff8c42" /><GText :x="14" :y="6" text="Peak" text-fill="#fff" /></GGroup>
  </template>
</RChart>

<RChart type="bar" :categories="days" :series="series" :options="{ toolbox: { feature: { dataView: { readOnly: true } } } }">
  <template #dataView="option"><table>…render option.series / option.xAxis[0].data…</table></template>
</RChart>
```

---

## 8. Exposed methods (`ref`)

```vue
<RChart ref="chart" … />
<script setup lang="ts">const chart = ref<InstanceType<typeof RChart> | null>(null)</script>
```

| Group | Methods |
|---|---|
| vue-echarts instance | `setOption(option, opts?)` · `getOption()` · `getWidth()` · `getHeight()` · `getDom()` · `resize(opts?)` · `dispatchAction(payload)` · `convertToPixel(finder, value)` · `convertFromPixel(finder, value)` · `containPixel(finder, value)` · `getDataURL(opts?)` · `getConnectedDataURL(opts?)` · `clear()` · `dispose()` |
| action shortcuts | `highlight(payload?)` · `downplay(payload?)` · `showTip({ seriesIndex, dataIndex })` · `hideTip()` · `toggleLegend(name)` · `selectLegend(name)` · `unselectLegend(name)` |
| RChart | `refresh()` · `exportAs('png' \| 'svg' \| 'csv')` · `toggleFullscreen()` · `zoomIn()` · `zoomOut()` · `resetZoom()` · `setType(type)` · `setPeriod(value)` · `getBuiltOption()` (the merged option) |
| raw | `chart` — the vue-echarts instance itself (`chart.value?.…`, also `setOption` for `manualUpdate`) |

`showLoading`, `hideLoading` and `setTheme` are intentionally not exposed (vue-echarts replaces them with props). All wrappers are
safe to call before the chart has mounted.

---

## 9. Recipes

```vue
<!-- Loading + refresh + period (typical dashboard card) -->
<RChart v-model:period="period" :periods="periods" :loading="pending" :error="error?.message"
  :categories="data?.labels" :series="data?.series" @refresh="refresh" @period-change="refresh" />

<!-- Full toolbar -->
<RChart type="area" title="Revenue" icon="i-lucide-trending-up" currency="USD" export-name="revenue"
  :toolbar="{ typeSwitch: true, zoom: true, exportPng: true, exportSvg: true, exportData: true, fullscreen: true }"
  :display="{ zoomSlider: true }" />

<!-- Custom actions + filters -->
<RChart :toolbar="{ actions: [{ key: 'share', label: 'Share', icon: 'i-lucide-share-2' }] }" @action="({ key }) => onAction(key)">
  <template #filters><select v-model="segment">…</select></template>
</RChart>

<!-- Header styles -->
<RChart variant="glass" :header="{ align: 'center', layout: 'stacked', iconStyle: 'solid', bordered: true, spacing: 'lg' }" />

<!-- Linked charts (shared tooltip / zoom) -->
<RChart group="sales" … /><RChart group="sales" … />

<!-- SVG renderer + custom echarts theme -->
<RChart :init-options="{ renderer: 'svg' }" echarts-theme="my-theme" />

<!-- Large / streaming data: drive updates yourself -->
<RChart ref="live" manual-update :categories="c" :series="s" />   <!-- later: live.setOption({ series: [...] }) -->

<!-- Khmer / locale-aware numbers -->
<RChart locale="km" currency="KHR" :labels="{ refresh: 'ផ្ទុកឡើងវិញ', noData: 'គ្មានទិន្នន័យ' }" />

<!-- Forced theme, custom palette, custom formatter -->
<RChart theme="dark" :colors="['#ff8c42', '#60a5fa']" :value-formatter="(v, { axis }) => axis ? `${v / 1000}k` : `${v.toLocaleString()} pcs`" />
```

---

## 10. Behaviour notes

- **States:** `loading` → skeleton (veil if already rendered) · `error` → message + retry · no data → empty · otherwise chart. The
  chart stays mounted across reloads, so zoom and legend state survive. Empty = no series points / items / value.
- **Theming:** ECharts cannot read CSS variables, so RChart reads `--c-text`, `--c-muted`, `--c-border`, `--c-surface`, `--c-accent`,
  `--c-info`, `--c-success`, `--c-accent-2`, `--c-danger`, `--color-w-b-3`, `--font-fallback` from the DOM and re-reads them when
  `<html>` changes class/style. Forced `theme="dark"` adds `.dark` on the card only; forced `"light"` re-declares the light tokens
  on the card (NuxtUI buttons inside keep the page theme).
- **Exports:** PNG = canvas at 2× with the surface colour; SVG = the final option rendered in a detached SVG instance (needs the `svg`
  renderer registered); CSV = the plotted data, UTF-8 with BOM (Khmer-safe), formula-injection guarded.
- **Zoom:** Ctrl + wheel or pinch zooms (plain wheel keeps scrolling the page); buttons use `dispatchAction`.
- **Fullscreen:** native API, falls back to a fixed overlay (Esc closes it).
- **SSR:** the chart mounts client-side only; the server renders the skeleton, so there is no hydration mismatch.
- **Accessibility:** `role="figure"` + `aria-label`, ECharts `aria` description, labelled icon buttons, `aria-pressed` on toggles,
  `role="status"` / `"alert"` on states, visible focus rings, reduced-motion respected.
- **Responsive:** header and toolbar wrap, tool labels collapse to icons under 640px, the period selector scrolls horizontally.
- **Events cost:** each forwarded event binds one ECharts listener; keep `events` short for high-frequency ones.

## 11. Types & utilities

```ts
import type {
  RChartType, RChartSeries, RChartDatum, RChartPoint, RChartTuple, RChartIndicator,
  RChartDisplay, RChartHeaderConfig, RChartToolbarConfig, RChartAction, RChartPeriod, RChartLabels,
  RChartVariant, RChartTheme, RChartValueFormatter, RChartInstance,
  RChartPointEvent, RChartLegendEvent, RChartZoomEvent, RChartExportEvent, RChartPeriodEvent, RChartActionEvent, RChartChartEvent,
} from '~/utils/chart/types'

import { buildChart } from '~/utils/chart/build'          // props → { option, table, legend, hasData } — pure, testable
import { createFormatter, mergeOptions, withAlpha, verticalGradient } from '~/utils/chart/format'
import { tableToCsv, optionToSvg, downloadBlob, downloadUrl, safeFileName } from '~/utils/chart/export'
import { DEFAULT_ECHARTS_EVENTS, OPT_IN_ECHARTS_EVENTS, DEFAULT_LABELS } from '~/utils/chart/types'
```
