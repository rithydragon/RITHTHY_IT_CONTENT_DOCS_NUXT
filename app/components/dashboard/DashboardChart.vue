<!--
  dashboard_chart_v2.vue
  Rebuilt from the seven dashboard templates (StatsWidget, AttendanceOverview, InvitationStats,
  BudgetSummary, CeremonyProgress, RecentActivities, QuickActions), rendered in <RGridLayout>.

  Same data as the templates (liveStats + budget / ceremony / notification stores), same GlassCard look,
  same translation keys. The hand-drawn SVG rings and bars are replaced by <RChartSplendor>:

    StatsWidget         → 4 StatCards, one grid item each
    AttendanceOverview  → RSVP doughnut ⇄ table
    InvitationStats     → bar ⇄ table  + response-rate bar
    BudgetSummary       → category bar (budget vs spent) ⇄ table, paginated (5 per page like the template)
    CeremonyProgress    → wedding date + countdown banner, phase progress bar ⇄ table
    (family side)       → bride / groom doughnut ⇄ table
    (task progress)     → completed / pending doughnut ⇄ table
    RecentActivities    → table
    QuickActions        → unchanged component

  Edit layout: drag & resize, saved per browser, resettable. Chart height follows the grid cell.
-->
<template>
  <div class="dashboard-chart-v2">
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
      drag-ignore-from="a, button, input, select, textarea, .r-splendor__toolbar, .r-splendor__body, .r-splendor__footer, .no-drag"
      :class="{ 'is-editing': editMode }"
    >
      <!-- ══ StatsWidget → four StatCards (generic #item slot: only the stat-* ids reach it,
           every other widget has its own #item-<id> slot, which takes priority) ══════════ -->
      <template #item="{ item }">
        <div v-if="statByItem[item.i]" class="widget-cell">
          <StatCard
            :icon="statByItem[item.i].icon"
            :label="statByItem[item.i].label"
            :value="statByItem[item.i].value"
            :icon-color="statByItem[item.i].iconColor"
            :icon-bg="statByItem[item.i].iconBg"
            :delay="statByItem[item.i].delay"
          />
        </div>
      </template>

      <!-- ══ AttendanceOverview → RSVP doughnut ═══════════════════════ -->
      <template #item-rsvp>
        <div class="widget-cell">
          <GlassCard :title="tr('dashboard.attendance_overview')" icon="i-heroicons-users" class="glass-fill animate-fade-in-up delay-300">
            <div v-if="!liveStats" class="loading-state" style="padding: var(--sp-6) 0">
              <i class="ri-loader-4-line animate-spin" style="color: var(--c-muted)" />
            </div>
            <RChartSplendor
              v-else
              v-model:view="rsvpView"
              :data="rsvpRows"
              :columns="statusColumns"
              :options="rsvpOptions"
            >
              <template #toolbar-start>
                <span class="chip">{{ totalGuests }} {{ tr('common.guests') }}</span>
              </template>
              <template #cell-label="{ row }">
                <span class="dot" :style="{ background: row.color }" /> {{ row.label }}
              </template>
              <template #cell-value="{ row }"><b :style="{ color: row.color }">{{ row.value }}</b></template>
              <template #cell-pct="{ row }">{{ row.pct }}%</template>
            </RChartSplendor>
          </GlassCard>
        </div>
      </template>

      <!-- ══ InvitationStats → bar + response rate ════════════════════ -->
      <template #item-invitation>
        <div class="widget-cell">
          <GlassCard :title="tr('dashboard.invitation_status')" icon="i-heroicons-paper-airplane" class="glass-fill animate-fade-in-up delay-200">
            <div v-if="!liveStats" class="loading-state" style="padding: var(--sp-6) 0">
              <i class="ri-loader-4-line animate-spin" style="color: var(--c-muted)" />
            </div>
            <template v-else>
              <RChartSplendor
                v-model:view="invitationView"
                :data="rsvpRows"
                :columns="statusColumns"
                :options="invitationOptions"
              >
                <template #cell-label="{ row }">
                  <span class="dot" :style="{ background: row.color }" /> {{ row.label }}
                </template>
                <template #cell-value="{ row }"><b :style="{ color: row.color }">{{ row.value }}</b></template>
                <template #cell-pct="{ row }">{{ row.pct }}%</template>
              </RChartSplendor>

              <div class="response-section">
                <div class="response-header">
                  <span class="response-label">{{ tr('dashboard.response_rate') }}</span>
                  <span class="response-value">{{ responseRate }}%</span>
                </div>
                <div class="response-bar">
                  <div class="seg" :style="{ width: rsvpRows[0].pct + '%', background: rsvpRows[0].color }" />
                  <div class="seg" :style="{ width: rsvpRows[1].pct + '%', background: rsvpRows[1].color }" />
                  <div class="seg" :style="{ width: rsvpRows[2].pct + '%', background: rsvpRows[2].color }" />
                </div>
              </div>
            </template>
          </GlassCard>
        </div>
      </template>

      <!-- ══ BudgetSummary → category bar ═════════════════════════════ -->
      <template #item-budget>
        <div class="widget-cell">
          <GlassCard :title="tr('dashboard.budget_summary')" icon="i-heroicons-banknotes" class="glass-fill animate-fade-in-up delay-100">
            <div v-if="!liveStats" class="loading-state" style="padding: var(--sp-6) 0">
              <i class="ri-loader-4-line animate-spin" style="color: var(--c-muted)" />
            </div>
            <RChartSplendor
              v-else
              v-model:view="budgetView"
              :data="budgetRows"
              :columns="budgetColumns"
              :options="budgetOptions"
            >
              <template #toolbar-start>
                <span class="chip"><i class="dot" style="background:#f97316" /> {{ tr('budget.spent') }} <b>{{ fmtMoney(totalActual) }}</b></span>
                <span class="chip"><i class="dot" style="background:#d4a843" /> {{ tr('budget.remaining') }} <b>{{ fmtMoney(remaining) }}</b></span>
                <span class="chip">{{ tr('budget.total') }} <b>{{ fmtMoney(totalPlanned) }}</b></span>
                <span class="chip chip-accent">{{ spentPercent }}% {{ tr('budget.used') }}</span>
              </template>
              <template #cell-name="{ row }">
                <span class="dot" :style="{ background: catColor(row.name) }" /> {{ row.name }}
              </template>
              <template #cell-budget="{ row }">{{ fmtMoney(row.budget) }}</template>
              <template #cell-spent="{ row }">{{ fmtMoney(row.spent) }}</template>
              <template #cell-usage="{ row }">
                <div class="usage-cell">
                  <div class="progress-bar"><div class="progress-fill" :style="{ width: row.usage + '%', background: catColor(row.name) }" /></div>
                  <span>{{ row.usage }}%</span>
                </div>
              </template>
              <template #empty>
                <div class="chart-empty">{{ tr('budget.no_items') }}</div>
              </template>
            </RChartSplendor>
          </GlassCard>
        </div>
      </template>

      <!-- ══ CeremonyProgress → banner + phase progress ═══════════════ -->
      <template #item-ceremony>
        <div class="widget-cell">
          <GlassCard :title="tr('dashboard.ceremony_progress')" icon="i-heroicons-sparkles" class="glass-fill animate-fade-in-up">
            <RChartSplendor
              v-model:view="ceremonyView"
              :data="ceremonyRows"
              :columns="ceremonyColumns"
              :options="ceremonyOptions"
            >
              <template #header>
                <div v-if="activeEvent" class="wedding-banner">
                  <div>
                    <p class="banner-label">{{ tr('ceremony.wedding_date') }}</p>
                    <p class="banner-date">{{ weddingDateLabel }}</p>
                  </div>
                  <div v-if="countdown" class="banner-countdown">
                    <div class="countdown-item"><span class="countdown-num">{{ countdown.days }}</span><span class="countdown-unit">{{ tr('ceremony.countdown_days') }}</span></div>
                    <div class="countdown-item"><span class="countdown-num">{{ countdown.hours }}</span><span class="countdown-unit">{{ tr('ceremony.countdown_hrs') }}</span></div>
                    <div class="countdown-item"><span class="countdown-num">{{ countdown.minutes }}</span><span class="countdown-unit">{{ tr('ceremony.countdown_min') }}</span></div>
                  </div>
                </div>
              </template>
              <template #cell-name="{ row }">
                <div class="cell-main">{{ row.name }}</div>
                <div v-if="row.address" class="cell-sub">{{ row.address }}</div>
              </template>
              <template #cell-status="{ row }">
                <UBadge :color="row.status === 'done' ? 'success' : row.status === 'in-progress' ? 'warning' : 'neutral'" variant="soft" size="xs">
                  {{ row.status === 'done' ? tr('status.done') : row.status === 'in-progress' ? tr('status.active') : tr('status.upcoming') }}
                </UBadge>
              </template>
              <template #cell-progress="{ row }">
                <div class="usage-cell">
                  <div class="progress-bar"><div class="progress-fill" :style="{ width: row.progress + '%' }" /></div>
                  <span>{{ row.progress }}%</span>
                </div>
              </template>
              <template #empty>
                <div class="chart-empty">
                  <template v-if="ceremonyStore.loading"><i class="ri-loader-4-line animate-spin" /> Loading...</template>
                </div>
              </template>
            </RChartSplendor>
          </GlassCard>
        </div>
      </template>

      <!-- ══ Family side → doughnut ═══════════════════════════════════ -->
      <template #item-family>
        <div class="widget-cell">
          <GlassCard :title="tr('dashboard.by_family_side')" icon="i-heroicons-heart" class="glass-fill animate-fade-in-up delay-300">
            <RChartSplendor
              v-model:view="familyView"
              :data="familyRows"
              :columns="statusColumns"
              :options="familyOptions"
            >
              <template #cell-label="{ row }">
                <span class="dot" :style="{ background: row.color }" /> {{ row.label }}
              </template>
              <template #cell-pct="{ row }">{{ row.pct }}%</template>
            </RChartSplendor>
          </GlassCard>
        </div>
      </template>

      <!-- ══ Task progress → doughnut ═════════════════════════════════ -->
      <template #item-tasks>
        <div class="widget-cell">
          <GlassCard :title="tr('dashboard.task_progress')" icon="i-heroicons-check-circle" class="glass-fill animate-fade-in-up delay-300">
            <RChartSplendor
              v-model:view="taskView"
              :data="taskRows"
              :columns="statusColumns"
              :options="taskOptions"
            >
              <template #toolbar-start>
                <span class="chip">{{ liveStats?.completedTasks ?? 0 }} / {{ liveStats?.totalTasks ?? 0 }}</span>
              </template>
              <template #cell-label="{ row }">
                <span class="dot" :style="{ background: row.color }" /> {{ row.label }}
              </template>
              <template #cell-pct="{ row }">{{ row.pct }}%</template>
            </RChartSplendor>
          </GlassCard>
        </div>
      </template>

      <!-- ══ QuickActions (unchanged component) ═══════════════════════ -->
      <template #item-actions>
        <div class="widget-cell">
          <QuickActions />
        </div>
      </template>

      <!-- ══ RecentActivities → table ═════════════════════════════════ -->
      <template #item-activities>
        <div class="widget-cell">
          <GlassCard :title="tr('dashboard.recent_activities')" icon="i-heroicons-clock" class="glass-fill animate-fade-in-up delay-100">
            <RChartSplendor
              :data="activityRows"
              :columns="activityColumns"
              :options="activityOptions"
            >
              <template #cell-title="{ row }">
                <div class="activity-cell">
                  <UIcon :name="typeIcon(row.type)" class="activity-icon" />
                  <div>
                    <div class="cell-main"><span v-if="!row.read" class="dot" style="background:var(--c-accent)" /> {{ row.title }}</div>
                    <div v-if="row.message" class="cell-sub">{{ row.message }}</div>
                  </div>
                </div>
              </template>
              <template #cell-time="{ row }">{{ timeAgo(row.time) }}</template>
              <template #empty>
                <div class="chart-empty">
                  <template v-if="notifStore.loading"><i class="ri-loader-4-line animate-spin" /></template>
                  <template v-else>
                    <i class="ri-notification-off-line" style="font-size:2rem" />
                    <span>{{ tr('dashboard.no_recent_activity') }}</span>
                  </template>
                </div>
              </template>
            </RChartSplendor>
          </GlassCard>
        </div>
      </template>
    </RGridLayout>
  </div>
</template>

<script setup>
const { tr } = useTr()
const { tBy } = useSarikaLocale()
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
const budgetStore = useBudgetStore()
const ceremonyStore = useCeremonyStore()
const notifStore = useNotificationStore()
const { liveStats, lastUpdated, start } = useLiveData()
const activeEvent = computed(() => eventStore.activeEvent)
const { init: eventInit } = useEventPage(() => {})

// Translate with a readable fallback when a key is not in the dictionary yet
const lbl = (key, fallback) => {
  const text = tr(key)
  return text && text !== key ? text : fallback
}

// ─────────────────────────────────────────────────────────────────────────────
// Grid layout (12 columns · rowHeight 30px · margin 16px)
// ─────────────────────────────────────────────────────────────────────────────
const ROW_HEIGHT = 30
const GAP = 16
const LAYOUT_STORAGE_KEY = 'dashboard_chart_v2_layout_v2'

const createDefaultLayout = () => [
  // row 1 — StatsWidget (4 cards)
  { i: 'stat-guests', x: 0, y: 0, w: 3, h: 4, minW: 2, minH: 3 },
  { i: 'stat-confirmed', x: 3, y: 0, w: 3, h: 4, minW: 2, minH: 3 },
  { i: 'stat-checkin', x: 6, y: 0, w: 3, h: 4, minW: 2, minH: 3 },
  { i: 'stat-budget', x: 9, y: 0, w: 3, h: 4, minW: 2, minH: 3 },
  // row 2 — attendance + invitations
  { i: 'rsvp', x: 0, y: 4, w: 6, h: 11, minW: 3, minH: 8 },
  { i: 'invitation', x: 6, y: 4, w: 6, h: 11, minW: 3, minH: 8 },
  // row 3 — budget + ceremony
  { i: 'budget', x: 0, y: 15, w: 6, h: 13, minW: 4, minH: 9 },
  { i: 'ceremony', x: 6, y: 15, w: 6, h: 13, minW: 4, minH: 9 },
  // row 4 — family side + tasks + quick actions
  { i: 'family', x: 0, y: 28, w: 4, h: 10, minW: 3, minH: 8 },
  { i: 'tasks', x: 4, y: 28, w: 4, h: 10, minW: 3, minH: 8 },
  { i: 'actions', x: 8, y: 28, w: 4, h: 10, minW: 3, minH: 5 },
  // row 5 — activities
  { i: 'activities', x: 0, y: 38, w: 12, h: 10, minW: 4, minH: 6 },
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

/**
 * Chart height that fits the grid cell of widget `id`:
 * cell px = h × rowHeight + (h − 1) × gap, minus GlassCard header + padding (~96),
 * the Splendor toolbar (~52) and `extra` px for anything else shown in the cell.
 */
function chartHeightFor(id, extra = 0) {
  const h = layout.value.find((item) => item.i === id)?.h ?? 10
  return Math.max(140, h * ROW_HEIGHT + (h - 1) * GAP - 148 - extra)
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers (from the templates)
// ─────────────────────────────────────────────────────────────────────────────
const fmt = (n) => (n != null ? Number(n).toLocaleString() : '—')
const fmtMoneyFull = (n) => (n != null ? `$${Number(n).toLocaleString()}` : '—')
const fmtMoney = (n) => {
  if (n == null) return '—'
  const value = Number(n)
  return value >= 1000 ? `$${(value / 1000).toFixed(1)}k` : `$${value.toLocaleString()}`
}
const num = (value) => Number(value ?? 0) || 0
const share = (value, total) => (total > 0 ? Math.round((value / total) * 100) : 0)

const COLORS = ['#f97316', '#3b82f6', '#22c55e', '#d4a843', '#8b5cf6', '#ef4444', '#06b6d4', '#ec4899']
const catColor = (name = '') => COLORS[Math.abs([...name].reduce((a, c) => a + c.charCodeAt(0), 0)) % COLORS.length]

// Shared RChartSplendor preset: compact widget (no search / filters / column picker / footer)
const compact = {
  rowKey: 'id',
  searchable: false,
  filterable: false,
  columnToggle: false,
  summary: false,
  paginated: false,
  dense: true,
}

const statusColumns = computed(() => [
  { key: 'label', label: lbl('common.status', 'Status') },
  { key: 'value', label: lbl('common.total', 'Total'), align: 'end' },
  { key: 'pct', label: '%', align: 'end' },
])

// ─────────────────────────────────────────────────────────────────────────────
// StatsWidget → 4 stat cards
// ─────────────────────────────────────────────────────────────────────────────
const statsLoading = computed(() => !liveStats.value)
const totalPlanned = computed(() => num(liveStats.value?.totalBudgetPlanned ?? activeEvent.value?.budget))
const totalActual = computed(() => num(liveStats.value?.totalBudgetActual))
const remaining = computed(() => Math.max(0, totalPlanned.value - totalActual.value))
const spentPercent = computed(() => share(totalActual.value, totalPlanned.value))

const statCards = computed(() => [
  { key: 'guests', icon: 'i-heroicons-users', label: tr('dashboard.total_guests'), value: statsLoading.value ? '…' : fmt(liveStats.value?.totalGuests), iconColor: '#3b82f6', iconBg: 'rgba(59,130,246,0.15)' },
  { key: 'confirmed', icon: 'i-heroicons-check-circle', label: tr('status.confirmed'), value: statsLoading.value ? '…' : fmt(liveStats.value?.confirmedGuests), iconColor: '#22c55e', iconBg: 'rgba(34,197,94,0.15)' },
  { key: 'checkin', icon: 'i-heroicons-clipboard-document-check', label: tr('dashboard.checked_in'), value: statsLoading.value ? '…' : fmt(liveStats.value?.checkedInCount), iconColor: '#f97316', iconBg: 'rgba(249,115,22,0.15)' },
  { key: 'budget', icon: 'i-heroicons-banknotes', label: tr('budget.total'), value: statsLoading.value ? '…' : fmtMoneyFull(liveStats.value?.totalBudgetPlanned ?? activeEvent.value?.budget), iconColor: '#d4a843', iconBg: 'rgba(212,168,67,0.15)' },
])

// grid item id ('stat-guests', …) → card props
const statByItem = computed(() =>
  Object.fromEntries(statCards.value.map((stat, i) => [`stat-${stat.key}`, { ...stat, delay: i * 100 }])),
)

// ─────────────────────────────────────────────────────────────────────────────
// AttendanceOverview + InvitationStats (same numbers as the templates)
// ─────────────────────────────────────────────────────────────────────────────
const totalGuests = computed(() => num(liveStats.value?.totalGuests))
const confirmedAll = computed(() => num(liveStats.value?.confirmedGuests) + num(liveStats.value?.attendedGuests))
const pendingGuests = computed(() => num(liveStats.value?.invitedGuests))
const declinedGuests = computed(() => num(liveStats.value?.declinedGuests))

const rsvpRows = computed(() => [
  { id: 'confirmed', label: tBy({ en: 'Confirmed', km: 'បានបញ្ជាក់' }), value: confirmedAll.value, pct: share(confirmedAll.value, totalGuests.value), color: '#22c55e' },
  { id: 'pending', label: tBy({ en: 'Pending', km: 'កំពុងរង់ចាំ' }), value: pendingGuests.value, pct: share(pendingGuests.value, totalGuests.value), color: '#f59e0b' },
  { id: 'declined', label: tBy({ en: 'Declined', km: 'បានបដិសេធ' }), value: declinedGuests.value, pct: share(declinedGuests.value, totalGuests.value), color: '#ef4444' },
])

const responseRate = computed(() => Math.min(100, rsvpRows.value[0].pct + rsvpRows.value[2].pct))

const rsvpView = ref('chart')
const rsvpOptions = computed(() => ({
  ...compact,
  chart: { type: 'doughnut', categoryKey: 'label', series: [{ key: 'value' }], height: chartHeightFor('rsvp') },
}))

const invitationView = ref('chart')
const invitationOptions = computed(() => ({
  ...compact,
  chart: { type: 'bar', categoryKey: 'label', series: [{ key: 'value' }], height: chartHeightFor('invitation', 64) }, // response-rate bar
}))

// ─────────────────────────────────────────────────────────────────────────────
// Family side + task progress
// ─────────────────────────────────────────────────────────────────────────────
const familyView = ref('chart')
const familyRows = computed(() => {
  const bride = num(liveStats.value?.brideSideCount)
  const groom = num(liveStats.value?.groomSideCount)
  const sum = bride + groom
  return [
    { id: 'bride', label: tr('dashboard.bride_side'), value: bride, pct: share(bride, sum), color: '#f97316' },
    { id: 'groom', label: tr('dashboard.groom_side'), value: groom, pct: share(groom, sum), color: '#3b82f6' },
  ]
})
const familyOptions = computed(() => ({
  ...compact,
  chart: { type: 'doughnut', categoryKey: 'label', series: [{ key: 'value' }], height: chartHeightFor('family') },
}))

const taskView = ref('chart')
const taskRows = computed(() => {
  const total = num(liveStats.value?.totalTasks)
  const done = Math.min(num(liveStats.value?.completedTasks), total)
  const pending = liveStats.value?.pendingTasks != null ? num(liveStats.value.pendingTasks) : total - done
  return [
    { id: 'done', label: tr('status.done'), value: done, pct: share(done, total), color: '#22c55e' },
    { id: 'pending', label: tr('status.pending'), value: pending, pct: share(pending, total), color: '#f59e0b' },
  ]
})
const taskOptions = computed(() => ({
  ...compact,
  chart: { type: 'doughnut', categoryKey: 'label', series: [{ key: 'value' }], height: chartHeightFor('tasks') },
}))

// ─────────────────────────────────────────────────────────────────────────────
// BudgetSummary → category bar (budget vs spent), 5 per page like the template
// ─────────────────────────────────────────────────────────────────────────────
const budgetView = ref('chart')
const budgetRows = computed(() =>
  budgetStore.categories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    budget: num(cat.budget),
    spent: num(cat.spent),
    usage: Math.min(100, share(num(cat.spent), num(cat.budget))),
  })),
)
const budgetColumns = computed(() => [
  { key: 'name', label: lbl('budget.category', 'Category') },
  { key: 'budget', label: tr('budget.total'), align: 'end' },
  { key: 'spent', label: tr('budget.spent'), align: 'end' },
  { key: 'usage', label: '%', width: '150px', sortable: false },
])
const budgetOptions = computed(() => ({
  ...compact,
  sortable: true,
  summary: true,
  paginated: true,
  defaultPageSize: 5,
  pageSizeOptions: [5, 10, 20],
  chart: {
    type: 'bar',
    categoryKey: 'name',
    series: [
      { key: 'budget', label: tr('budget.total') },
      { key: 'spent', label: tr('budget.spent') },
    ],
    height: chartHeightFor('budget', 56), // pagination footer
  },
}))

// ─────────────────────────────────────────────────────────────────────────────
// CeremonyProgress → banner + phase progress
// ─────────────────────────────────────────────────────────────────────────────
const now = ref(Date.now())
let tick = null

const weddingDateLabel = computed(() => {
  if (!activeEvent.value?.date) return '—'
  return new Date(activeEvent.value.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
})

const countdown = computed(() => {
  if (!activeEvent.value?.date) return null
  const diff = new Date(activeEvent.value.date).getTime() - now.value
  if (diff <= 0) return null
  const days = Math.floor(diff / 86_400_000)
  const hours = Math.floor((diff % 86_400_000) / 3_600_000)
  const minutes = Math.floor((diff % 3_600_000) / 60_000)
  return { days: String(days).padStart(2, '0'), hours: String(hours).padStart(2, '0'), minutes: String(minutes).padStart(2, '0') }
})

const formatTime = (dt) => (dt ? new Date(dt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '')
const phaseProgress = (phase) => (phase.status === 'done' ? 100 : phase.status === 'in-progress' ? 50 : 0)

const ceremonyView = ref('table')
const ceremonyRows = computed(() =>
  ceremonyStore.items.map((phase, i) => ({
    id: phase.id ?? i,
    time: formatTime(phase.scheduleTime),
    name: phase.name,
    address: phase.address || '',
    status: phase.status,
    progress: phaseProgress(phase),
  })),
)
const ceremonyColumns = computed(() => [
  { key: 'time', label: lbl('common.time', 'Time'), width: '90px' },
  { key: 'name', label: lbl('ceremony.name', 'Ceremony') },
  { key: 'status', label: lbl('common.status', 'Status'), sortable: false },
  { key: 'progress', label: '%', width: '150px' },
])
const ceremonyOptions = computed(() => ({
  ...compact,
  sortable: false,
  chart: {
    type: 'bar',
    categoryKey: 'name',
    series: [{ key: 'progress', label: '%' }],
    height: chartHeightFor('ceremony', 70), // wedding banner
  },
}))

// ─────────────────────────────────────────────────────────────────────────────
// RecentActivities → table
// ─────────────────────────────────────────────────────────────────────────────
const typeIcon = (type) => ({
  wish: 'i-heroicons-heart',
  gift: 'i-heroicons-gift',
  email: 'i-heroicons-envelope',
  telegram: 'i-heroicons-paper-airplane',
  sms: 'i-heroicons-chat-bubble-left',
  success: 'i-heroicons-check-circle',
  warning: 'i-heroicons-exclamation-triangle',
  error: 'i-heroicons-x-circle',
  info: 'i-heroicons-information-circle',
})[type] ?? 'i-heroicons-bell'

const timeAgo = (iso) => {
  if (!iso) return ''
  const m = Math.floor((Date.now() - new Date(iso).getTime()) / 60000)
  if (m < 1) return 'Just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  return `${Math.floor(h / 24)}d ago`
}

const activityRows = computed(() => notifStore.notifications.slice(0, 8))
const activityColumns = computed(() => [
  { key: 'title', label: lbl('common.activity', 'Activity') },
  { key: 'time', label: lbl('common.time', 'Time'), align: 'end', width: '110px' },
])
const activityOptions = { ...compact, sortable: false }

// ─────────────────────────────────────────────────────────────────────────────
// Data loading — what each template did in its own onMounted / watch, done once here
// ─────────────────────────────────────────────────────────────────────────────
async function loadEventData() {
  if (!eventStore.activeEvent?.id) return
  await Promise.all([
    budgetStore.fetchBudgets(0),
    budgetStore.fetchSummary(),
    ceremonyStore.fetchCeremonies(),
  ])
}

watch(() => eventStore.activeEvent?.id, (id) => { if (id) loadEventData() })

onMounted(async () => {
  loadSavedLayout()
  tick = setInterval(() => { now.value = Date.now() }, 30_000)
  await nextTick()
  await eventInit()
  if (!eventStore.initialized) await eventStore.fetchEvents()
  await loadEventData()
  notifStore.fetchNotifications()
  start()
})

onUnmounted(() => { if (tick) clearInterval(tick) })
</script>

<style lang="scss">
.dashboard-chart-v2 {
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

  .live-chip { display: inline-flex; align-items: center; gap: 4px; font-size: 0.7rem; font-weight: 600; color: var(--c-success); }
  .live-dot-sm {
    width: 6px; height: 6px; border-radius: 50%; background: var(--c-success);
    animation: pulse-live-chart-v2 1.5s infinite;
  }

  /* Every grid item fills its cell; taller content scrolls inside it */
  .widget-cell {
    height: 100%;
    width: 100%;
    min-height: 0;
    overflow: auto;
    box-sizing: border-box;

    > * { min-height: 100%; box-sizing: border-box; }
  }

  /* RChartSplendor sits flat inside the GlassCard */
  .glass-fill {
    .r-splendor { background: transparent; border: 0; box-shadow: none; padding: 0; }
  }

  /* Toolbar chips (budget figures, totals) */
  .chip {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 3px 10px; border-radius: var(--r-full);
    background: var(--c-hover, rgba(255, 255, 255, 0.05));
    font-size: 0.75rem; color: var(--c-muted);
    b { color: var(--c-text); }
    &.chip-accent { color: var(--c-accent); font-weight: 600; }
  }

  .dot { display: inline-block; width: 8px; height: 8px; border-radius: var(--r-full); margin-right: 6px; flex-shrink: 0; }
  .chip .dot { margin-right: 0; }

  .cell-main { font-size: 0.875rem; font-weight: 600; color: var(--c-text); }
  .cell-sub { font-size: 0.75rem; color: var(--c-muted); }

  .usage-cell {
    display: flex; align-items: center; gap: var(--sp-2);
    .progress-bar { flex: 1; }
    span { font-size: 0.75rem; color: var(--c-muted); font-weight: 600; min-width: 34px; text-align: right; }
  }

  .activity-cell {
    display: flex; align-items: flex-start; gap: var(--sp-3);
    .activity-icon { width: 18px; height: 18px; margin-top: 2px; color: var(--c-muted); flex-shrink: 0; }
  }

  /* InvitationStats: response rate */
  .response-section { margin-top: var(--sp-3); }
  .response-header { display: flex; justify-content: space-between; font-size: 0.8125rem; margin-bottom: 6px; }
  .response-label { color: var(--c-muted); }
  .response-value { font-weight: 700; color: var(--c-text); }
  .response-bar {
    display: flex; height: 8px; border-radius: var(--r-full); overflow: hidden; background: var(--c-border);
    .seg { height: 100%; transition: width 0.6s var(--ease-out, ease); }
  }

  /* CeremonyProgress: wedding banner */
  .wedding-banner {
    display: flex; align-items: center; justify-content: space-between; gap: var(--sp-3); flex-wrap: wrap;
    padding: var(--sp-3) var(--sp-4); margin-bottom: var(--sp-2);
    border-radius: var(--r-md);
    background: rgba(249, 115, 22, 0.08);
    border: 1px solid rgba(249, 115, 22, 0.2);
  }
  .banner-label { font-size: 0.6875rem; color: var(--c-muted); text-transform: uppercase; letter-spacing: 0.04em; }
  .banner-date { font-size: 0.9375rem; font-weight: 700; color: var(--c-text); }
  .banner-countdown { display: flex; gap: var(--sp-3); }
  .countdown-item { display: flex; flex-direction: column; align-items: center; min-width: 40px; }
  .countdown-num { font-size: 1.125rem; font-weight: 800; color: #f97316; line-height: 1.1; }
  .countdown-unit { font-size: 0.625rem; color: var(--c-muted); text-transform: uppercase; }

  .chart-empty {
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px;
    padding: var(--sp-6); color: var(--c-muted); font-size: 0.8125rem;
  }

  /* Edit mode affordance */
  .is-editing .vue-grid-item:not(.vue-grid-placeholder) > .r-layout-grid__item > .widget-cell {
    outline: 1px dashed var(--c-accent);
    outline-offset: -1px;
    border-radius: var(--r-md);
    cursor: move;
  }
}

@keyframes pulse-live-chart-v2 {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.8); }
}
</style>