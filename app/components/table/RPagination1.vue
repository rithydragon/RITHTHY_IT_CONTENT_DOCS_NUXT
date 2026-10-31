// ─── RTableHeader.vue ─────────────────────────────────────────────────────────

<template>
  <div class="rty-pagination">
        <!-- Zone 1: Row range -->
    <!-- <span class="r-table-footer__info" aria-live="polite" aria-atomic="true">
      <template v-if="total > 0">
        {{ from }}–{{ to }} {{ tr('of') }} {{ total }}
      </template>
      <template v-else>0 {{ tr('results') }}</template>
    </span> -->

      <!-- Left -->
      <div class="pagination-left">
        <div class="flex gap-1.5 whitespace-nowrap">
          <span>{{ tr('total_records') }}</span>
          <span>{{ total }}</span>
        </div>
        <!-- :items="[{ label: '10', value: 10 }, { label: '25', value: 25 }, { label: '50', value: 50 }, { label: '100', value: 100 }]" -->
          <!-- <USelect
            v-if="options.paging"
            v-model="selected"
            :items="sizeItems"
            size="sm"
            value-key="value"
            :disabled="loading"
            :aria-label="tr('rows_per_page')"
            :ui="uiSelection"
            >
            :items="sizeItems"
          <template # trailing>
            <i class="ri-arrow-down-s-line" />
          </template>
        </USelect> -->
        <!-- <div class="record">
          <RSelectRecord v-if="options.paging" v-model="selected" @select="selectRecords(selected)" />
        </div> -->
        <!-- <span class="r-table-footer__size-label">/ {{ tr('entries') }}</span> -->
      </div>

      <!-- Center -->
      <div class="pagination-center">
        {{ tr('showing') }}
        <strong>{{ startIndex ?? typeof startIndex}}</strong>
        {{ tr('to') }}
        <strong>{{ endIndex ?? typeof endIndex}}</strong>
        {{ tr('of') }}
        <strong>{{ total ?? typeof total}}</strong>
        {{ tr('entries') }}
      </div>
 
      <div class="flex gap-2">
        <div class="record">
          <RSelectRecord v-if="options.paging" v-model="selected" :loading="loading" @select="selectRecords(selected)" />
        </div>
        <div class="pagination-goto">
          <span>{{ tr('go_to_page') }}</span>
          <UInput
            v-model="gotoPage"
            min="1"
            :max="totalPages"
            size="lg"
            :ui="uiInput"
            :disabled="isDisabled"
            @keyup.enter="commitGoto"
            @blur="commitGoto"
            @update:model-value="onGotoPage"
            inputmode="numeric"
            pattern="[0-9]*"
            @input="onGotoInput($event.target.value)"
            @keydown.enter.prevent="commitGoto"
          />
        </div>
        
        <UPagination
          v-model:page="pageModel"
          :total="total ?? 100"
          :items-per-page="pageSize"
          :disabled="loading"
          :show-edges="true"
          :sibling-count="1"
          :page-count="pageCount"
          show-edges
          size="xs" :max="5"  
          color="primary"
          active-color="primary"
          :ui="uiPagination"
          class="pagination-right"
        >
          <template #first="{ disabled ,onClick, canGoFirst }">
            <slot name="first">
              <RTooltip :text="tr('first')">
                <UButton icon="ri-arrow-left-double-fill"  
                class="rtl:[&_span:first-child]:rotate-180 pagination justify-center"
                :class="[!canGoFirst ? 'opacity-low' : '']" :disabled="pageModel === 1 || loading" @click="onClick" :ui="{ rounded: 'rounded-[10px]'}"/>
                <!-- class="rtl:[&_span:first-child]:rotate-180 pagination bg-default dark:text-white text-gray-900 justify-center" -->
              </RTooltip>
            </slot>
          </template>

          <template #prev="{ disabled, onClick, canGoPrevious }">
            <slot name="prev">
              <RTooltip :text="tr('previous')">
                <UButton icon="ri-arrow-left-s-line" 
                class="rtl:[&_span:first-child]:rotate-180 pagination justify-center"
                :class="[!canGoPrevious ? 'opacity-low' : '']" :disabled="pageModel <= 1 || loading" @click="onClick"  :ui="{ rounded: 'rounded-[10px]'}"/>
              </RTooltip>
            </slot>
          </template>

          <template #next="{ disabled, onClick, canGoNext }">
            <slot name="next">
              <RTooltip :text="tr('next')">
                <UButton icon="ri-arrow-right-s-line" 
                class="rtl:[&_span:last-child]:rotate-180 pagination justify-center"
                :class="[!canGoNext ? 'opacity-low' : '']" :disabled="pageModel >= totalPages || loading" @click="onClick"  :ui="{ rounded: 'rounded-[10px]'}"/>
              </RTooltip>
            </slot>
          </template>

          <template #last="{ disabled ,onClick, canGoLast}">
            <slot name="last">
              <RTooltip :text="tr('last')">
                <UButton icon="ri-arrow-right-double-line"
                class="rtl:[&_span:last-child]:rotate-180 pagination justify-center"
                :class="[!canGoLast ? 'opacity-low' : '']" :disabled="pageModel === pageCount || loading" @click="onClick"  :ui="{ rounded: 'rounded-[10px]'}" />
              </RTooltip>
            </slot>
          </template>


          <!-- <template #ellipsis>
            <slot name="ellipsis">
              <RTooltip :text="String(index) ?? 'OK'">
                <UButton :label="String(item)"  :variant="active ? 'solid' : 'ghost'" class="pagination-page-btn" />
              </RTooltip>
            </slot>
          </template> -->
          
          <template #item="{ item, active,pageCount, disabled,index }">
            <slot name="item" :item="item" :active="active">  
    
              <RTooltip :text="`${tr('page')} ${String(item.value)}`">
                <UButton :label="String(item.value)"  :variant="active ? 'solid' : 'ghost'" class="pagination-page-btn" />
              </RTooltip>
              
              <!-- <RTooltip
              v-for="p in pageCount"
              :key="p"
              :text="`${tr('page')} ${String(p)}`"
            >
              <UButton
                :label="String(p)"
                :variant="p === pageModel ? 'solid' : 'ghost'"
                @click="pageModel = p"
              />
            </RTooltip> -->
            </slot>
          </template>
        </UPagination>
      </div>
    </div>
</template>

<script setup>
// UPagination slots: first, prev, item, next, last. ellipsis
// item :  { page: number; pageCount: number; item: { type: "ellipsis"; } | { type: "page"; value: number; }; index: number; }
// ellipsis	: { ui: object; }
import { computed } from 'vue'
const { tr } = useTr()
const selected = defineModel('selected')
console.log("Selected in pagination ------------> ", selected.value)
const props = defineProps([
  'options',
  'pageModel',
  'perPageModel',
  'maxVisiblePages',
  'storageKey',
  'currentPage',
  'sizeModel',
  'from',
  'to',

  'page',
  'pageSize',
  'pageCount',
  'total',
  'pageSizes',
  'disabled',
  'loading',
])

const emits = defineEmits([
  'changePagination',
  'selectRecords',
  'update:currentPage',
  'update:perPage',
  'page-changed',
  'per-page-changed',
  'update:page',
  'update:pageSize',
  'change'
])

const isDisabled = computed(() => props.disabled || props.loading)
// const totalPage = computed(() => props.totalItems)
const sizeModel = computed(() => props.sizeModel)
// ── Page-size items for USelect ───────────────────────────────────────────────
// const sizeItems = computed(() =>
//   (props.pageSizes ?? [10, 25, 50, 100]).map(v => v)
// )
const items = [10,20,50,100]
const gotoPage = ref('')
// const gotoPage = ref(String(props.page))
// hasn't yet acked the new value.
const localPage     = ref(props.page)
const pageSize = ref(props.pageSize)
const page = ref(props.page)
const from = computed(() => props.from)
const to = computed(() => props.to)
const total = computed(() => props.total)
console.log("Total records pagination --------------> ", total.value)
const options = computed(() => props.options ?? {})

const pageCount = computed(() => props.pageCount)
const loading = computed(() => props.loading)

const pageModel = computed({
  get: () => props.page,
  set: (v) => {
    emits('update:page', v)
    emits('change', { page: v, pageSize: pageSize.value })
  }
})
const perPageModel = computed({
  get: () => pageSize.value,
  set: (v) => {
    pageSize.value = Number(v)
    page.value = 1
    emits('update:pageSize', v)
    emits('update:page', 1)
    emits('change', { page: 1, pageSize: v })
  }
})

const isFirstPage = computed(() => pageModel.value <= 1)
const isLastPage = computed(() => pageModel.value >= totalPages.value)

const startIndex = computed(() =>
  pageSize.value === 0
    ? 0
    : (props.currentPage - 1) * props.perPage + 1
)

const endIndex = computed(() =>
  Math.min(props.currentPage * props.perPage, pageSize.value)
)

const totalPages1 = computed(() =>
  Math.ceil(total.value / pageSize.value)
)

const totalPages = computed(() => {
  if (!total.value || !pageSize.value) return 1
  return Math.max(1, Math.ceil(total.value / pageSize.value))
  // Math.max(1, Math.ceil(total.value / pageSize.value))
})

function commitGoto1() {
  const pageNum = Number(gotoPage.value)

  // if (!Number.isInteger(page)) return
    if (!Number.isInteger(pageNum) || pageNum < 1 || pageNum > totalPages.value) {
    gotoPage.value = String(props.page)
    return
  }
  pageModel.value = pageNum
  gotoPage.value = String(pageNum)
}

// Commit: on Enter or blur, clamp and navigate
function commitGoto() {
  const num = parseInt(gotoPage.value, 10)
  if (!Number.isFinite(num) || num < 1) {
    gotoPage.value = String(page.value)
    return
  }
  const clamped = Math.min(num, totalPages.value)
  gotoPage.value = String(clamped)
  if (clamped !== page.value) {
    pageModel.value = clamped
  }
}
 

function goToPage1() {  /// no wait enter
  const page = Number(gotoPage.value)

  if (Number.isInteger(page) && page >= 1 && page <= totalPages.value) {
    pageModel.value = page
  }
}
// ── Go-to-page ────────────────────────────────────────────────────────────────
// Live: only strip non-digits, do NOT navigate on every keystroke
function onGotoInput(raw) {
  // Strip anything that isn't a digit
  const clean = String(raw).replace(/\D/g, '')
  gotoPage.value = clean
}

// Watch for page changes
watch(() => props.page, (newPage) => {
  gotoPage.value = String(newPage)
}, { immediate: true })


// Already correct but ensure reload behavior:
watch(pageSize, () => {
  page.value = 1
})

watch(total, () => {
  const maxPage = Math.ceil(total.value / pageSize.value)

  if (page.value > maxPage) {
    page.value = maxPage || 1
  }
})

watch(page, (n) => {
  if (isNotEmpty(n)) {
    emits('changePagination',n)
  }
})

function onGotoPage(value) {
  gotoPage.value = value

  const page = Number(value)

  if (!Number.isInteger(page)) return
  if (page < 1 || page > totalPages.value) return

  pageModel.value = page
}

function onGotoPage1(value) {
  const clean = value.replace(/\D/g, '')
  gotoPage.value = clean

  const num = parseInt(clean, 10)
  if (!isNaN(num) && Number.isInteger(num)) {
    const max = totalPages.value
    if (num > max) gotoPage.value = String(max)
    else emits('update:page', num)
  }
}

watch(
  () => props.page,
  (page) => {
    gotoPage.value = String(page)
  },
  { immediate: true }
)
function selectRecords(selected) {
  emits("selectRecords",selected)
}
const uiPagination = {
  root: 'ui-rpagination-root',
  list: 'ui-rpagination-list flex items-center gap-1',
  label: 'ui-rpagination-label min-w-5 text-center',
  ellipsis: 'ui-rpagination-ellipsis h-[30px] w-[30px] flex justify-center items-center !pointer-events-none',
  item: 'ui-rpagination-item',
  prev: 'ui-rpagination-prev',
  next: 'ui-rpagination-next',
  first: 'ui-rpagination-first',
  last: 'ui-rpagination-last',
}

const uiInput = {
  root:    'rpag-input-root',
  base:    'rpag-input-base',
}
</script>

<style lang="scss">
// ── UInput override (goto field) ──────────────────────────────────────────
.rpag-input-root {
  width: 52px !important;
}
 
.rpag-input-base {
  height:       32px !important;
  padding:      0 8px !important;
  font-size:    13px !important;
  text-align:   center !important;
  font-family:  var(--font-fallback, 'Inter', system-ui, sans-serif) !important;
  color:        var(--c-text, #1a1510) !important;
  background:   var(--c-surface, #fff) !important;
  border:       1px solid var(--c-border, rgba(0,0,0,0.12)) !important;
  border-radius: 8px !important;
  box-shadow:   none !important;
  outline:      none !important;
  transition:   border-color 0.15s ease !important;
 
  &:focus {
    border-color: var(--c-accent, #ff8c42) !important;
    box-shadow:   0 0 0 2px rgba(255, 140, 66, 0.15) !important;
  }
 
  // Hide browser number spinners
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button { display: none; }
  -moz-appearance: textfield;
}

.rty-pagination {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  flex-shrink: 0;

  position: sticky;
  bottom: 0;
  z-index: 20;

  background: var(--c-surface);
  border-top: 1px solid var(--c-border);

  padding: 12px 16px;

  .pagination-center {
    display: flex;
    align-items: center;
    gap: 5px;
    white-space: nowrap;
  }

  .pagination-right {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 5px;
  }

  .pagination-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .pagination-left ::deep(button) {
    min-width: 50px !important;
  }

  .page-numbers {
    display: flex;
    flex-wrap: wrap;
    // gap: 0.25rem;
  }

  // Mobile
  @media (max-width: 768px) {
    > .flex {
      flex-direction: column;
      align-items: stretch;
    }

    .pagination-left {
      justify-content: center;
      margin-right: 0;
      order: 1;
    }

    .pagination-center {
      justify-content: center;
      text-align: center;
      order: 3;
      font-size: 0.875rem;
    }

    .pagination-right {
      justify-content: center;
      flex-wrap: wrap;
      margin-left: 0;
      order: 2;
    }

    .page-numbers {
      justify-content: center;
      flex-wrap: wrap;
      max-width: 100%;
    }

    .nav-btn,
    .page-btn {
      min-width: 36px;
      height: 36px;
    }
  }


  // Extra small phones
  @media (max-width: 480px) {
    .pagination-center {
      font-size: 12px;
      line-height: 1.4;
    }

    .label {
      font-size: 12px;
    }

    .page-numbers {
      gap: 2px;
    }

    .nav-btn,
    .page-btn {
      min-width: 32px;
      height: 32px;
    }
  }
}

.ui-rpagination-root {
  display: flex;
  justify-content: center;
  color: var(--c-text);

  // flow: wrap onto multiple rows instead of overflowing/scrolling
  ul {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    row-gap: var(--sp-2, 8px);
    column-gap: var(--sp-2, 8px);
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Every pagination button (page numbers, prev/next/first/last) is a circle */
  button {
    width: 36px !important;
    height: 36px !important;
    min-width: 36px !important;
    aspect-ratio: 1 / 1;
    border-radius: var(--r-full, 9999px) !important;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 !important;

    background: var(--c-surface);
    color: var(--c-text);
    border: 1px solid var(--c-border);
    box-shadow: 0 1px 2px rgb(0 0 0 / .04);

    transition: all var(--t-fast, .2s) var(--ease-in-out, cubic-bezier(.4, 0, .2, 1));

    &:hover:not(:disabled) {
      background: var(--bg-tertiary, var(--c-muted));
      transform: translateY(-1px);
    }

    &:active:not(:disabled) {
      transform: scale(.94);
    }

    /* Active page — soft filled circle, no border */
    &[aria-current="page"] {
      background: var(--bg-tertiary, #f1f3f6);
      border-color: transparent;
      color: var(--c-text);
      font-weight: 600;

      animation: page-active .25s ease;
      transform: scale(1.05);
      box-shadow: none;
    }
  }

  .pagination-item {
    transition: 0.2s;
    gap: 0 !important;
  }

  /* Prev/next/first/last chevrons — same circle, no border by default */
  .pagination-prev,
  .pagination-next,
  .pagination-first,
  .pagination-last {
    button {
      border-color: transparent;
      background: transparent;
      box-shadow: none;

      &:hover:not(:disabled) {
        background: var(--c-surface);
        border-color: var(--c-border);
      }
    }
  }

  /* Disabled buttons (prev/next/first/last) */
  button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* Ellipsis (...) — flat, no circle background */
  .ellipsis {
    pointer-events: none;
    height: inherit;
    width: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    letter-spacing: 1px;
  }
}

@keyframes page-active {
  0% {
    transform: scale(.8);
    opacity: .7;
  }
  60% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1.08);
    opacity: 1;
  }
}


// select

.r-select-field-base {
  display: flex;
  align-items: center;
  justify-content: space-between !important;
  gap: 5px;
  width: 100%;
  padding: 4px 8px;
  border-radius: 8px;
  min-width: 40px !important; 
  width: 60px !important; 
}

.r-select-trailing{
  padding: 0 !important;
  margin: 0 !important;
  gap: 0 !important;
}


// [data-slot="base"] {
//   justify-content: space-between !important;
//   gap: 60px;
// }

.r-select-field-content {
  display: flex;
  flex-direction: column;
  padding: 5px !important;
  min-width: fit-content !important;
}

.pagination-goto {
  display: flex;
  align-items: center;
  gap: 8px;

  .u-input {
    width: 70px;
    height: 70px;
    text-align: center;
  }
}
</style>