<!--
  dashboard_solo_v2.vue
  Same dashboard as index_eb9aec.vue (same widget components, same props, same live data),
  but every widget is now an item of <RGridLayout>:
    · "Edit layout" → drag & resize the widgets
    · layout is saved per browser and can be reset
    · mobile / tablet adaptation is done by RGridLayout itself (1 column / 2 per row)
-->
<template>
  <div class="dashboard-solo-v2">
    <!-- Slim toolbar: live status + layout editing -->
    <div class="dash-toolbar">
      <span v-if="lastUpdated" class="live-chip">
        <span class="live-dot-sm" />
        Live · {{ lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) }}
      </span>

      <div class="action-group hide-mobile">
        <button v-if="editMode" class="btn-ghost btn-xs" type="button" @click="resetLayout">
          <i class="ri-refresh-line" /> Reset layout
        </button>
        <button class="btn-ghost btn-xs" :class="{ 'is-active': editMode }" type="button" @click="editMode = !editMode">
          <i :class="editMode ? 'ri-check-line' : 'ri-layout-grid-line'" /> {{ editMode ? 'Done' : 'Edit layout' }}
        </button>
      </div>
    </div>

    <RGridLayout
      v-model:layout="layout"
      variant="bare"
      flush
      :col-num="12"
      :row-height="ROW_HEIGHT"
      :margin="[GAP, GAP]"
      :responsive="false"
      :is-draggable="editMode"
      :is-resizable="editMode"
      vertical-compact
      use-css-transforms
      drag-ignore-from="a, button, input, select, textarea, .no-drag"
      :class="{ 'is-editing': editMode }"
    >
      <template #item-stats>
        <div class="widget-cell">
          <StatsWidget :stats="liveStats" :loading="!liveStats" :active-event="activeEvent" />
        </div>
      </template>

      <template #item-ceremony>
        <div class="widget-cell">
          <CeremonyProgress :active-event="activeEvent" />
        </div>
      </template>

      <template #item-budget>
        <div class="widget-cell">
          <BudgetSummary :stats="liveStats" :active-event="activeEvent" />
        </div>
      </template>

      <template #item-invitation>
        <div class="widget-cell">
          <InvitationStats :stats="liveStats" />
        </div>
      </template>

      <template #item-attendance>
        <div class="widget-cell">
          <AttendanceOverview :stats="liveStats" :active-event="activeEvent" />
        </div>
      </template>

      <template #item-activities>
        <div class="widget-cell">
          <RecentActivities />
        </div>
      </template>

      <template #item-actions>
        <div class="widget-cell">
          <QuickActions />
        </div>
      </template>
    </RGridLayout>
  </div>
</template>

<script setup>
const { tr } = useTr()
useHead({ title: tr('common.app_name') })
definePageMeta({
  layout: 'navbar',
  middleware: ['auth', 'permission'],
  title: 'Dashboard',
  description: '',
  icon: 'ri-dashboard-line',
  iconBg: 'bg-[var(--c-surface)]',
})

const eventStore = useEventStore()
const { liveStats, lastUpdated, start } = useLiveData()
const activeEvent = computed(() => eventStore.activeEvent)
const { init: eventInit } = useEventPage(() => {})

// ─────────────────────────────────────────────────────────────────────────────
// Grid layout (12 columns · rowHeight 30px · margin 16px)
// ─────────────────────────────────────────────────────────────────────────────
const ROW_HEIGHT = 30
const GAP = 16
const LAYOUT_STORAGE_KEY = 'dashboard_solo_v2_layout_v1'

const createDefaultLayout = () => [
  // row 1 — stats (full width)
  { i: 'stats', x: 0, y: 0, w: 12, h: 6, minW: 4, minH: 4 },
  // row 2 — ceremony + budget
  { i: 'ceremony', x: 0, y: 6, w: 6, h: 10, minW: 3, minH: 5 },
  { i: 'budget', x: 6, y: 6, w: 6, h: 10, minW: 3, minH: 5 },
  // row 3 — invitations + attendance
  { i: 'invitation', x: 0, y: 16, w: 6, h: 10, minW: 3, minH: 5 },
  { i: 'attendance', x: 6, y: 16, w: 6, h: 10, minW: 3, minH: 5 },
  // row 4 — activity + quick actions
  { i: 'activities', x: 0, y: 26, w: 6, h: 10, minW: 3, minH: 5 },
  { i: 'actions', x: 6, y: 26, w: 6, h: 10, minW: 3, minH: 4 },
]

const layout = ref(createDefaultLayout())
const editMode = ref(false)

// Only trust a saved layout if it still contains exactly the widgets we render.
function loadSavedLayout() {
  try {
    const raw = localStorage.getItem(LAYOUT_STORAGE_KEY)
    if (!raw) return
    const saved = JSON.parse(raw)
    const known = createDefaultLayout()
    const sameIds = Array.isArray(saved)
      && saved.length === known.length
      && known.every((d) => saved.some((s) => s?.i === d.i))
    if (sameIds) layout.value = saved
  } catch {
    /* storage unavailable or corrupted → keep default layout */
  }
}

// Persist only user changes made in edit mode (mobile / tablet views never write back)
watch(layout, (value) => {
  if (!editMode.value) return
  try { localStorage.setItem(LAYOUT_STORAGE_KEY, JSON.stringify(value)) } catch { /* ignore */ }
}, { deep: true })

function resetLayout() {
  layout.value = createDefaultLayout()
  try { localStorage.removeItem(LAYOUT_STORAGE_KEY) } catch { /* ignore */ }
}

onMounted(async () => {
  loadSavedLayout()
  await nextTick()
  await eventInit()
  start()
})
</script>

<style lang="scss">
.dashboard-solo-v2 {
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);

  .dash-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sp-3);
    min-height: 28px;
  }

  .action-group {
    display: flex;
    align-items: center;
    gap: var(--sp-3);
    flex-wrap: wrap;
    margin-left: auto;
    .is-active { border-color: var(--c-accent); color: var(--c-accent); }
  }

  .btn-xs { padding: 5px 12px !important; font-size: 0.75rem !important; border-radius: var(--r-sm) !important; }

  .live-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.7rem;
    font-weight: 600;
    color: var(--c-success);
  }
  .live-dot-sm {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--c-success);
    animation: pulse-live-solo-v2 1.5s infinite;
  }

  /* Each widget fills its grid cell; if its content is taller it scrolls inside the cell */
  .widget-cell {
    height: 100%;
    width: 100%;
    min-height: 0;
    overflow: auto;
    box-sizing: border-box;

    > * { min-height: 100%; box-sizing: border-box; }
  }

  /* Edit mode affordance */
  .is-editing .vue-grid-item:not(.vue-grid-placeholder) > .r-layout-grid__item > .widget-cell {
    outline: 1px dashed var(--c-accent);
    outline-offset: -1px;
    border-radius: var(--r-md);
    cursor: move;
  }
}

@keyframes pulse-live-solo-v2 {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.8); }
}
</style>
