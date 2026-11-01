<!--
  dashboard_chart.vue
  RChartSplendor widgets rendered inside RGridLayout.

    · every block is a grid item (drag & resize in "Edit layout" mode, saved per browser, resettable)
    · every data widget is an <RChartSplendor> (local mode): chart ⇄ table, sort, export
    · chart height follows the grid cell: resize a widget and its chart is redrawn at the new height
    · mobile / tablet adaptation is done by RGridLayout itself

    RSVP statistics   → doughnut ⇄ table
    Budget by category→ bar (budget vs spent) ⇄ table
    Ceremony timeline → table
    Tasks             → paginated table
    Recent activity   → table
-->
<template>
  <div class="dashboard-chart-page">
    <!-- Greeting -->
    <div class="dash-greeting animate-fade-up">
      <div>
        <h1 class="greeting-title">{{ greeting }}, {{ authStore.user?.firstName }} 👋</h1>
        <p class="greeting-sub">{{ tBy({ en: `Managing: ${activeEvent?.title}`, km: `កំពុងគ្រប់គ្រង: ${activeEvent?.titleKm}` }) }}</p>
        <p v-if="lastUpdated" class="live-indicator">
          <span class="live-dot" /> Live · Updated {{ lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) }}
        </p>
      </div>
      <div class="greeting-actions hide-mobile">
        <button v-if="editMode" class="btn-ghost" @click="resetLayout">
          <i class="ri-refresh-line" /> Reset layout
        </button>
        <button class="btn-ghost" :class="{ 'is-active': editMode }" @click="editMode = !editMode">
          <i :class="editMode ? 'ri-check-line' : 'ri-layout-grid-line'" /> {{ editMode ? 'Done' : 'Edit layout' }}
        </button>
        <button class="btn-ghost" @click="showAddEvent = true">
          <i class="ri-add-line" /> {{ tr('add_event') }}
        </button>
        <button class="btn-primary" @click="showAddGuest = true">
          <i class="ri-user-add-line" /> {{ tr('add_guest') }}
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
      drag-ignore-from="a, button, input, select, textarea, .r-splendor__toolbar, .r-splendor__body, .r-splendor__footer, .no-drag"
      :class="{ 'is-editing': editMode }"
    >
      <!-- ── Stat: events ─────────────────────────────────────────── -->
      <template #item-stat-events>
        <div class="stat-card solo-fill">
          <div class="sc-top">
            <div class="sc-icon" style="background:rgba(255,140,66,0.12);color:var(--c-accent)">
              <i class="ri-calendar-event-fill" />
            </div>
            <span class="badge badge-accent">{{ tr('upcoming') }}</span>
          </div>
          <div class="stat-value">{{ eventStore.events.length }}</div>
          <div class="stat-label">{{ tr('total_events') }}</div>
          <div class="stat-change positive"><i class="ri-arrow-up-line" /> +1 {{ tr('this_month') }}</div>
        </div>
      </template>

      <!-- ── Stat: guests ─────────────────────────────────────────── -->
      <template #item-stat-guests>
        <div class="stat-card solo-fill">
          <div class="sc-top">
            <div class="sc-icon" style="background:rgba(96,165,250,0.12);color:var(--c-info)">
              <i class="ri-group-fill" />
            </div>
            <span class="badge badge-info">Total</span>
          </div>
          <div class="stat-value">{{ liveStats?.totalGuests ?? guestStore.stats.total }}</div>
          <div class="stat-label">{{ tr('total_guests') }}</div>
          <div class="stat-change positive">
            <i class="ri-arrow-up-line" /> {{ liveStats?.confirmedGuests ?? guestStore.stats.confirmed }}
            <span style="font-size:1rem;opacity:0.5">{{ tr('confirmed') }}</span>
          </div>
        </div>
      </template>

      <!-- ── Stat: tasks ──────────────────────────────────────────── -->
      <template #item-stat-tasks>
        <div class="stat-card solo-fill">
          <div class="sc-top">
            <div class="sc-icon" style="background:rgba(74,222,128,0.12);color:var(--c-success)">
              <i class="ri-task-fill" />
            </div>
            <span class="badge badge-success">{{ taskStore.completionRate }}%</span>
          </div>
          <div class="stat-value">
            {{ liveStats?.completedTasks ?? taskStore.completedCount }}<span style="font-size:1rem;opacity:0.5">/{{ liveStats?.totalTasks ?? taskStore.tasks.length }}</span>
          </div>
          <div class="stat-label">{{ tr('tasks_completed') }}</div>
          <div class="progress-bar" style="margin-top:10px">
            <div class="progress-fill" :style="{ width: taskStore.completionRate + '%' }" />
          </div>
        </div>
      </template>

      <!-- ── Stat: budget ─────────────────────────────────────────── -->
      <template #item-stat-budget>
        <div class="stat-card solo-fill">
          <div class="sc-top">
            <div class="sc-icon" style="background:rgba(167,139,250,0.12);color:#a78bfa">
              <i class="ri-money-dollar-circle-fill" />
            </div>
            <span class="badge badge-muted">{{ budgetStore.usagePercent }}%</span>
          </div>
          <div class="stat-value">${{ (budgetStore.totalSpent / 1000).toFixed(1) }}K</div>
          <div class="stat-label">{{ tr('budget_used') }}</div>
          <div class="stat-change" :class="budgetStore.usagePercent > 80 ? 'negative' : 'positive'">
            <i :class="budgetStore.usagePercent > 80 ? 'ri-arrow-up-line' : 'ri-arrow-down-line'" />
            ${{ ((budgetStore.totalBudget - budgetStore.totalSpent) / 1000).toFixed(1) }}K {{ tr('remaining') }}
          </div>
        </div>
      </template>

      <!-- ── RSVP statistics (doughnut ⇄ table) ───────────────────── -->
      <template #item-rsvp>
        <div class="glass-card chart-widget solo-fill">
          <RChartSplendor
            v-model:view="rsvpView"
            :title="tr('rsvp_stats')"
            :data="rsvpRows"
            :columns="rsvpColumns"
            :options="rsvpOptions"
          >
            <template #toolbar-end>
              <NuxtLink :to="localePath('/guest_management')" class="btn-ghost btn-xs">{{ tr('view_all') }}</NuxtLink>
            </template>
            <template #cell-label="{ row }">
              <span class="dot" :style="{ background: row.color }" /> {{ row.label }}
            </template>
            <template #cell-pct="{ row }">{{ row.pct }}%</template>
          </RChartSplendor>
        </div>
      </template>

      <!-- ── Budget by category (bar ⇄ table) ─────────────────────── -->
      <template #item-budget>
        <div class="glass-card chart-widget solo-fill">
          <RChartSplendor
            v-model:view="budgetView"
            :title="tr('budget_overview')"
            :data="budgetRows"
            :columns="budgetColumns"
            :options="budgetOptions"
          >
            <template #toolbar-end>
              <NuxtLink :to="localePath('/budget')" class="btn-ghost btn-xs">{{ tr('view_all') }}</NuxtLink>
            </template>
            <template #cell-budget="{ row }">${{ Number(row.budget).toLocaleString() }}</template>
            <template #cell-spent="{ row }">${{ Number(row.spent).toLocaleString() }}</template>
            <template #cell-remaining="{ row }">
              <span :style="{ color: row.remaining < 0 ? 'var(--c-danger)' : 'var(--c-success)' }">${{ Number(row.remaining).toLocaleString() }}</span>
            </template>
            <template #cell-usage="{ row }">
              <div class="usage-cell">
                <div class="progress-bar"><div class="progress-fill" :style="{ width: Math.min(row.usage, 100) + '%' }" /></div>
                <span>{{ row.usage }}%</span>
              </div>
            </template>
            <template #footer>
              <div class="budget-totals">
                <span>{{ tr('total_budget') }} <b>${{ budgetStore.totalBudget.toLocaleString() }}</b></span>
                <span>{{ tr('total_spent') }} <b style="color:var(--c-accent)">${{ budgetStore.totalSpent.toLocaleString() }}</b></span>
                <span>{{ tr('remaining') }} <b style="color:var(--c-success)">${{ budgetStore.remaining.toLocaleString() }}</b></span>
              </div>
            </template>
          </RChartSplendor>
        </div>
      </template>

      <!-- ── Ceremony timeline (table) ────────────────────────────── -->
      <template #item-timeline>
        <div class="glass-card chart-widget solo-fill">
          <RChartSplendor
            :title="tr('ceremony_timeline')"
            :data="ceremonyPhases"
            :columns="timelineColumns"
            :options="timelineOptions"
            :row-class="timelineRowClass"
          >
            <template #toolbar-end>
              <NuxtLink :to="localePath('/ceremony')" class="btn-ghost btn-xs">{{ tr('view_all') }}</NuxtLink>
            </template>
            <template #cell-name="{ row }">
              <div class="cell-main">{{ row.name }}</div>
              <div v-if="row.location" class="cell-sub"><i class="ri-map-pin-line" /> {{ row.location }}</div>
            </template>
            <template #cell-state="{ row }">
              <span class="badge" :class="row.current ? 'badge-accent' : row.past ? 'badge-muted' : 'badge-info'">
                {{ row.current ? lbl('now', 'Now') : row.past ? lbl('done', 'Done') : lbl('upcoming', 'Upcoming') }}
              </span>
            </template>
            <template #empty>
              <div class="chart-empty">
                <template v-if="ceremonyStore.loading"><i class="ri-loader-4-line animate-spin" /> {{ tr('common.loading') }}</template>
                <template v-else>{{ lbl('no_data', 'No data') }}</template>
              </div>
            </template>
          </RChartSplendor>
        </div>
      </template>

      <!-- ── Tasks (paginated table) ──────────────────────────────── -->
      <template #item-tasks>
        <div class="glass-card chart-widget solo-fill">
          <RChartSplendor
            :title="tr('tasks')"
            :data="taskStore.tasks"
            :columns="taskColumns"
            :options="taskOptions"
          >
            <template #toolbar-end>
              <NuxtLink to="/tasks" class="btn-ghost btn-xs">{{ tr('view_all') }}</NuxtLink>
            </template>
            <template #cell-status="{ row }">
              <button class="task-check" :class="{ done: row.status === 'completed' }" @click="taskStore.completeTask(row.id)">
                <i :class="row.status === 'completed' ? 'ri-checkbox-circle-fill' : 'ri-circle-line'" />
              </button>
            </template>
            <template #cell-title="{ row }">
              <span :class="{ 'is-done': row.status === 'completed' }">{{ tBy({ en: row.title, km: row.titleKm }) }}</span>
            </template>
            <template #cell-priority="{ row }">
              <span class="badge" :class="`badge-${row.priority === 'high' ? 'danger' : row.priority === 'medium' ? 'accent' : 'muted'}`">
                {{ tr(`${row.priority}`) }}
              </span>
            </template>
          </RChartSplendor>
        </div>
      </template>

      <!-- ── Recent activity (table) ──────────────────────────────── -->
      <template #item-activity>
        <div class="glass-card chart-widget solo-fill">
          <RChartSplendor
            :title="tr('recent_activity')"
            :data="activityRows"
            :columns="activityColumns"
            :options="activityOptions"
          >
            <template #cell-title="{ row }">
              <span class="cell-main"><span v-if="!row.read" class="dot" style="background:var(--c-accent)" /> {{ row.title }}</span>
            </template>
            <template #cell-message="{ row }"><span class="cell-sub">{{ row.message }}</span></template>
            <template #cell-time="{ row }">{{ timeAgo(row.time) }}</template>
          </RChartSplendor>
        </div>
      </template>
    </RGridLayout>

    <!-- Quick actions (mobile) -->
    <div class="quick-actions-mobile show-mobile">
      <button class="btn-ghost qa-btn" @click="navigateTo(localePath('/guest_management'))">
        <i class="ri-user-add-line" />
        <span>{{ tr('add_guest') }}</span>
      </button>
      <button class="btn-ghost qa-btn" @click="navigateTo(localePath('/tasks'))">
        <i class="ri-task-line" />
        <span>{{ tr('tasks') }}</span>
      </button>
      <button class="btn-ghost qa-btn" @click="navigateTo(localePath('/invitation'))">
        <i class="ri-mail-send-line" />
        <span>{{ tr('send_invite') }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { pct, timeAgo } from '~/helpers/str'

definePageMeta({ layout: 'navbar', middleware: ['auth', 'permission'], permission: 'VIEW_WEDDING' })

const { tr } = useTr()
const authStore = useAuthStore()
const eventStore = useEventStore()
const guestStore = useGuestStore()
const taskStore = useTaskStore()
const budgetStore = useBudgetStore()
const ceremonyStore = useCeremonyStore()
const notifStore = useNotificationStore()

const activeEvent = computed(() => eventStore.activeEvent)

const showAddEvent = ref(false)
const showAddGuest = ref(false)

// Translate with a readable fallback when a key is not in the dictionary yet
const lbl = (key, fallback) => {
  const text = tr(key)
  return text && text !== key ? text : fallback
}

// ─────────────────────────────────────────────────────────────────────────────
// Grid layout (12 columns)
// ─────────────────────────────────────────────────────────────────────────────
const ROW_HEIGHT = 30
const GAP = 16
const LAYOUT_STORAGE_KEY = 'dashboard_chart_layout_v1'

const createDefaultLayout = () => [
  // row 1 — stat cards
  { i: 'stat-events', x: 0, y: 0, w: 3, h: 5, minW: 2, minH: 4 },
  { i: 'stat-guests', x: 3, y: 0, w: 3, h: 5, minW: 2, minH: 4 },
  { i: 'stat-tasks', x: 6, y: 0, w: 3, h: 5, minW: 2, minH: 4 },
  { i: 'stat-budget', x: 9, y: 0, w: 3, h: 5, minW: 2, minH: 4 },
  // row 2 — RSVP chart + budget chart
  { i: 'rsvp', x: 0, y: 5, w: 6, h: 11, minW: 3, minH: 8 },
  { i: 'budget', x: 6, y: 5, w: 6, h: 11, minW: 4, minH: 8 },
  // row 3 — timeline + tasks
  { i: 'timeline', x: 0, y: 16, w: 6, h: 11, minW: 3, minH: 7 },
  { i: 'tasks', x: 6, y: 16, w: 6, h: 11, minW: 4, minH: 8 },
  // row 4 — activity
  { i: 'activity', x: 0, y: 27, w: 12, h: 9, minW: 4, minH: 6 },
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

function saveLayout(value) {
  try {
    localStorage.setItem(LAYOUT_STORAGE_KEY, JSON.stringify(value))
  } catch {
    /* ignore quota / private-mode errors */
  }
}

// Persist only user changes made in edit mode (mobile / tablet views never write back)
watch(layout, (value) => { if (editMode.value) saveLayout(value) }, { deep: true })

function resetLayout() {
  layout.value = createDefaultLayout()
  try { localStorage.removeItem(LAYOUT_STORAGE_KEY) } catch { /* ignore */ }
}

/**
 * Chart height that fits the grid cell of widget `id`.
 * cell px = h × rowHeight + (h − 1) × gap, minus card padding (32) and the Splendor
 * header + toolbar (~100) + footer (`footer` px) so the chart never overflows its cell.
 */
function chartHeightFor(id, footer = 0) {
  const h = layout.value.find((item) => item.i === id)?.h ?? 10
  const cell = h * ROW_HEIGHT + (h - 1) * GAP
  return Math.max(140, cell - 32 - 100 - footer)
}

// ─────────────────────────────────────────────────────────────────────────────
// Data loading (identical to index.vue)
// ─────────────────────────────────────────────────────────────────────────────
const { liveStats, lastUpdated, start: startPolling, stop: stopPolling } = useLiveData()
onUnmounted(stopPolling)

const { init } = useEventPage(async () => {
  await Promise.all([
    guestStore.fetchGuests(0),
    taskStore.fetchTasks(0),
    budgetStore.fetchBudgets(0),
    budgetStore.fetchSummary(),
    ceremonyStore.fetchCeremonies(),
  ])
  startPolling()
}, 30_000)

onMounted(async () => {
  loadSavedLayout()
  await init()
  notifStore.fetchNotifications()
})

const greeting = computed(() => {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 17) return 'Good afternoon'
  return 'Good evening'
})

// ─────────────────────────────────────────────────────────────────────────────
// Shared RChartSplendor option preset — compact widget:
// no search / filters / column picker / footer
// ─────────────────────────────────────────────────────────────────────────────
const compact = {
  rowKey: 'id',
  searchable: false,
  filterable: false,
  columnToggle: false,
  summary: false,
  paginated: false,
  dense: true,
}

// ─────────────────────────────────────────────────────────────────────────────
// 1) RSVP statistics — doughnut ⇄ table
// ─────────────────────────────────────────────────────────────────────────────
const rsvpView = ref('chart')

const rsvpRows = computed(() => {
  const s = guestStore.stats
  const total = s.total || 1
  return [
    { id: 'confirmed', label: tr('rsvp_confirmed'), value: s.confirmed, pct: pct(s.confirmed, total), color: 'var(--c-success)' },
    { id: 'pending', label: tr('rsvp_pending'), value: s.pending, pct: pct(s.pending, total), color: 'var(--c-accent)' },
    { id: 'declined', label: tr('rsvp_declined'), value: s.declined, pct: pct(s.declined, total), color: 'var(--c-danger)' },
  ]
})

const rsvpColumns = computed(() => [
  { key: 'label', label: lbl('status', 'Status') },
  { key: 'value', label: tr('total'), align: 'end' },
  { key: 'pct', label: '%', align: 'end' },
])

const rsvpOptions = computed(() => ({
  ...compact,
  chart: {
    type: 'doughnut',
    categoryKey: 'label',
    series: [{ key: 'value' }],
    height: chartHeightFor('rsvp'),
  },
}))

// ─────────────────────────────────────────────────────────────────────────────
// 2) Budget by category — bar (budget vs spent) ⇄ table
// ─────────────────────────────────────────────────────────────────────────────
const budgetView = ref('chart')

const budgetRows = computed(() =>
  budgetStore.categories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    budget: cat.budget,
    spent: cat.spent,
    remaining: (cat.budget ?? 0) - (cat.spent ?? 0),
    usage: pct(cat.spent, cat.budget),
  })),
)

const budgetColumns = computed(() => [
  { key: 'name', label: lbl('category', 'Category') },
  { key: 'budget', label: tr('total_budget'), align: 'end' },
  { key: 'spent', label: tr('total_spent'), align: 'end' },
  { key: 'remaining', label: tr('remaining'), align: 'end' },
  { key: 'usage', label: '%', width: '140px' },
])

const budgetOptions = computed(() => ({
  ...compact,
  sortable: true,
  chart: {
    type: 'bar',
    categoryKey: 'name',
    series: [
      { key: 'budget', label: 'Budget' },
      { key: 'spent', label: 'Spent' },
    ],
    height: chartHeightFor('budget', 32), // custom totals footer
  },
}))

// ─────────────────────────────────────────────────────────────────────────────
// 3) Ceremony timeline — table
// ─────────────────────────────────────────────────────────────────────────────
const ceremonyPhases = computed(() => {
  const now = new Date()
  return ceremonyStore.items.map((c, i, arr) => {
    const t = c.scheduleTime ? new Date(c.scheduleTime) : null
    const next = arr[i + 1]?.scheduleTime ? new Date(arr[i + 1].scheduleTime) : null
    const past = c.status === 'done' || (t && t < now && !(next && next > now))
    const current = c.status === 'in-progress' || (t && t <= now && next && next > now)
    return {
      id: c.id ?? i,
      time: t ? t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '',
      name: c.name,
      location: c.description || '',
      past: Boolean(past),
      current: Boolean(current),
    }
  })
})

const timelineColumns = computed(() => [
  { key: 'time', label: lbl('time', 'Time'), width: '90px' },
  { key: 'name', label: lbl('ceremony', 'Ceremony') },
  { key: 'state', label: lbl('status', 'Status'), align: 'end', sortable: false },
])

const timelineOptions = { ...compact, sortable: false }
const timelineRowClass = (row) => (row.current ? 'is-current' : row.past ? 'is-past' : undefined)

// ─────────────────────────────────────────────────────────────────────────────
// 4) Tasks — paginated table with a complete button
// ─────────────────────────────────────────────────────────────────────────────
const taskColumns = computed(() => [
  { key: 'status', label: '', width: '44px', sortable: false },
  { key: 'title', label: lbl('task', 'Task') },
  { key: 'priority', label: lbl('priority', 'Priority') },
  { key: 'dueDate', label: lbl('due', 'Due'), align: 'end' },
])

const taskOptions = {
  ...compact,
  sortable: true,
  paginated: true,
  defaultPageSize: 5,
  pageSizeOptions: [5, 10, 20],
  summary: true,
}

// ─────────────────────────────────────────────────────────────────────────────
// 5) Recent activity — table
// ─────────────────────────────────────────────────────────────────────────────
const activityRows = computed(() => notifStore.notifications.slice(0, 8))

const activityColumns = computed(() => [
  { key: 'title', label: lbl('title', 'Title') },
  { key: 'message', label: lbl('message', 'Message') },
  { key: 'time', label: lbl('time', 'Time'), align: 'end', width: '120px' },
])

const activityOptions = { ...compact, sortable: false }
</script>

<style lang="scss">
.dashboard-chart-page {
  display: flex;
  flex-direction: column;
  gap: var(--sp-5);

  /* Live indicator */
  .live-indicator {
    display: flex; align-items: center; gap: 6px;
    font-size: 0.75rem; color: var(--c-success); margin-top: 4px;
  }
  .live-dot {
    width: 7px; height: 7px; border-radius: 50%; background: var(--c-success);
    animation: pulse-live-chart 1.5s infinite;
  }

  /* Greeting */
  .dash-greeting {
    display: flex; align-items: center; justify-content: space-between; gap: var(--sp-4);
    .greeting-actions {
      display: flex; gap: var(--sp-3); flex-wrap: wrap; justify-content: flex-end;
      .is-active { border-color: var(--c-accent); color: var(--c-accent); }
    }
  }
  .greeting-title {
    font-family: var(--font-800); font-size: 1.5rem; font-weight: 800;
    letter-spacing: -0.03em; margin-bottom: 2px;
  }
  .greeting-sub { font-size: 0.875rem; color: var(--c-muted); }

  /* Every grid item fills its cell */
  .solo-fill { height: 100%; width: 100%; min-height: 0; overflow: auto; box-sizing: border-box; }

  /* Edit mode affordance */
  .is-editing .vue-grid-item:not(.vue-grid-placeholder) > .r-layout-grid__item > .solo-fill {
    outline: 1px dashed var(--c-accent);
    outline-offset: -1px;
    cursor: move;
  }

  /* Stat card top */
  .sc-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--sp-4); }
  .sc-icon {
    width: 40px; height: 40px; border-radius: var(--r-md);
    display: flex; align-items: center; justify-content: center; font-size: 1.25rem;
  }

  /* RChartSplendor card: Splendor fills the cell, only its body scrolls */
  .chart-widget {
    display: flex; flex-direction: column;
    padding: var(--sp-4);
    overflow: hidden;

    .r-splendor {
      flex: 1; min-height: 0;
      display: flex; flex-direction: column;
      background: transparent; border: 0; box-shadow: none; padding: 0;
    }
    .r-splendor__title { font-size: 1rem; font-weight: 700; }
    .r-splendor__body { flex: 1; min-height: 0; overflow: auto; }
  }

  /* Table cells */
  .dot { display: inline-block; width: 8px; height: 8px; border-radius: var(--r-full); margin-right: 6px; }
  .cell-main { font-size: 0.875rem; font-weight: 600; color: var(--c-text); }
  .cell-sub { font-size: 0.75rem; color: var(--c-muted); i { font-size: 0.7rem; } }
  .is-done { text-decoration: line-through; opacity: 0.5; }

  .r-splendor__table tr.is-past { opacity: 0.5; }
  .r-splendor__table tr.is-current td { background: rgba(255, 140, 66, 0.08); }

  .usage-cell {
    display: flex; align-items: center; gap: var(--sp-2);
    .progress-bar { flex: 1; }
    span { font-size: 0.75rem; color: var(--c-muted); font-weight: 600; min-width: 34px; text-align: right; }
  }

  .budget-totals {
    display: flex; flex-wrap: wrap; gap: var(--sp-4); font-size: 0.8125rem; color: var(--c-muted);
    b { margin-left: 4px; color: var(--c-text); }
  }

  .task-check {
    background: none; border: none; cursor: pointer; color: var(--c-muted);
    font-size: 1.125rem; padding: 2px; transition: color var(--t-fast);
    &:hover { color: var(--c-accent); }
    &.done { color: var(--c-success); }
  }

  .chart-empty {
    display: flex; align-items: center; justify-content: center; gap: 6px;
    padding: var(--sp-6); color: var(--c-muted); font-size: 0.875rem;
  }

  /* Quick actions mobile */
  .quick-actions-mobile {
    display: none; gap: var(--sp-3); padding: var(--sp-2) 0;
    @media (max-width: 768px) { display: flex; }
    .qa-btn {
      flex: 1; flex-direction: column; gap: 4px; padding: var(--sp-4);
      border-radius: var(--r-lg); font-size: 0.75rem; height: auto;
      i { font-size: 1.25rem; }
    }
  }

  .btn-xs { padding: 5px 12px !important; font-size: 0.75rem !important; border-radius: var(--r-sm) !important; }
}

@keyframes pulse-live-chart {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.8); }
}
</style>