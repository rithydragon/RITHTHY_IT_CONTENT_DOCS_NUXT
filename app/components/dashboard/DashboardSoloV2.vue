<!--
  dashboard_solo.vue
  Same widgets / data as the old dashboard (index.vue), but every block is now an item of <RGridLayout>:
    · drag & resize in "Edit layout" mode
    · layout is saved per browser (localStorage) and can be reset
    · mobile / tablet are handled by RGridLayout itself (1 column on mobile, max 2 per row on tablet)
-->
<template>
  <div class="dashboard-solo-page">
    <!-- Greeting (kept outside the grid, same as index.vue) -->
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

    <!-- Whole dashboard = one RGridLayout -->
    <RGridLayout
      v-model:layout="layout"
      variant="bare"
      flush
      :col-num="12"
      :row-height="30"
      :margin="[16, 16]"
      :responsive="false"
      :is-draggable="editMode"
      :is-resizable="editMode"
      vertical-compact
      use-css-transforms
      drag-ignore-from="a, button, input, .no-drag"
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

      <!-- ── RSVP statistics ──────────────────────────────────────── -->
      <template #item-rsvp>
        <div class="glass-card dash-widget solo-fill">
          <div class="section-header">
            <span class="section-title">{{ tr('rsvp_stats') }}</span>
            <NuxtLink :to="localePath('/guest_management')" class="btn-ghost btn-xs">{{ tr('view_all') }}</NuxtLink>
          </div>

          <div class="rsvp-chart">
            <div class="rsvp-donut">
              <svg viewBox="0 0 120 120" class="donut-svg">
                <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="12" />
                <circle
                  cx="60" cy="60" r="50" fill="none" stroke="var(--c-success)" stroke-width="12"
                  stroke-dasharray="314" :stroke-dashoffset="314 - confirmedRatio * 314"
                  stroke-linecap="round" transform="rotate(-90 60 60)"
                />
                <circle
                  cx="60" cy="60" r="50" fill="none" stroke="var(--c-accent)" stroke-width="12"
                  stroke-dasharray="314" :stroke-dashoffset="314 - pendingRatio * 314 - confirmedRatio * 314"
                  stroke-linecap="round" transform="rotate(-90 60 60)"
                />
              </svg>
              <div class="donut-center">
                <div class="dc-value">{{ guestStore.stats.total }}</div>
                <div class="dc-label">{{ tr('total') }}</div>
              </div>
            </div>

            <div class="rsvp-legend">
              <div v-for="item in rsvpLegend" :key="item.key" class="rsvp-legend-item">
                <div class="rli-dot" :style="{ background: item.color }" />
                <div class="rli-info">
                  <span class="rli-label">{{ item.label }}</span>
                  <span class="rli-value" :style="{ color: item.color }">{{ item.value }}</span>
                </div>
                <div class="progress-bar rli-bar">
                  <div class="progress-fill" :style="{ width: item.pct + '%', background: item.color }" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- ── Ceremony timeline ────────────────────────────────────── -->
      <template #item-timeline>
        <div class="glass-card dash-widget solo-fill">
          <div class="section-header">
            <span class="section-title">{{ tr('ceremony_timeline') }}</span>
            <NuxtLink :to="localePath('/ceremony')" class="btn-ghost btn-xs">{{ tr('view_all') }}</NuxtLink>
          </div>

          <div v-if="ceremonyStore.loading" class="timeline-empty">
            <i class="ri-loader-4-line animate-spin" /> {{ tr('common.loading') }}
          </div>
          <div v-else class="timeline-list">
            <div
              v-for="(phase, i) in ceremonyPhases" :key="i"
              class="timeline-item" :class="{ past: phase.past, current: phase.current }"
            >
              <div class="ti-line">
                <div class="ti-dot" :class="{ current: phase.current }" />
                <div v-if="i < ceremonyPhases.length - 1" class="ti-connector" />
              </div>
              <div class="ti-content">
                <div class="ti-time">{{ phase.time }}</div>
                <div class="ti-title">{{ phase.name }}</div>
                <div v-if="phase.location" class="ti-location">
                  <i class="ri-map-pin-line" /> {{ phase.location }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- ── Budget overview ──────────────────────────────────────── -->
      <template #item-budget>
        <div class="glass-card dash-widget solo-fill">
          <div class="section-header">
            <span class="section-title">{{ tr('budget_overview') }}</span>
            <NuxtLink :to="localePath('/budget')" class="btn-ghost btn-xs">{{ tr('view_all') }}</NuxtLink>
          </div>

          <div class="budget-summary">
            <div class="bs-row">
              <span class="bs-label">{{ tr('total_budget') }}</span>
              <span class="bs-value">${{ budgetStore.totalBudget.toLocaleString() }}</span>
            </div>
            <div class="bs-row">
              <span class="bs-label">{{ tr('total_spent') }}</span>
              <span class="bs-value" style="color:var(--c-accent)">${{ budgetStore.totalSpent.toLocaleString() }}</span>
            </div>
            <div class="bs-row">
              <span class="bs-label">{{ tr('remaining') }}</span>
              <span class="bs-value" style="color:var(--c-success)">${{ budgetStore.remaining.toLocaleString() }}</span>
            </div>
          </div>

          <div class="budget-bars">
            <div v-for="cat in budgetStore.categories.slice(0, 5)" :key="cat.id" class="bb-item">
              <div class="bb-header">
                <div class="bb-name">
                  <i class="ri-money-dollar-circle-line" style="color:var(--c-accent)" />
                  {{ cat.name }}
                </div>
                <span class="bb-pct">{{ pct(cat.spent, cat.budget) }}%</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: pct(cat.spent, cat.budget) + '%' }" />
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- ── Tasks ────────────────────────────────────────────────── -->
      <template #item-tasks>
        <div class="glass-card dash-widget solo-fill">
          <div class="section-header">
            <span class="section-title">{{ tr('tasks') }}</span>
            <NuxtLink to="/tasks" class="btn-ghost btn-xs">{{ tr('view_all') }}</NuxtLink>
          </div>

          <div class="task-list">
            <div v-for="task in recentTasks" :key="task.id" class="task-item" :class="{ completed: task.status === 'completed' }">
              <button class="task-check" @click="taskStore.completeTask(task.id)">
                <i :class="task.status === 'completed' ? 'ri-checkbox-circle-fill' : 'ri-circle-line'" />
              </button>
              <div class="task-info">
                <div class="task-name">{{ tBy({ en: task.title, km: task.titleKm }) }}</div>
                <div class="task-meta">
                  <span class="badge" :class="`badge-${task.priority === 'high' ? 'danger' : task.priority === 'medium' ? 'accent' : 'muted'}`">
                    {{ tr(`${task.priority}`) }}
                  </span>
                  <span class="task-due">{{ task.dueDate }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- ── Recent activity ──────────────────────────────────────── -->
      <template #item-activity>
        <div class="glass-card dash-widget solo-fill">
          <div class="section-header">
            <span class="section-title">{{ tr('recent_activity') }}</span>
          </div>
          <div class="activity-list">
            <div v-for="notif in notifStore.notifications.slice(0, 4)" :key="notif.id" class="activity-item">
              <div class="ai-icon" :class="`ai-${notif.type ?? 'info'}`">
                <i class="ri-notification-3-line" />
              </div>
              <div class="ai-content">
                <div class="ai-title">{{ notif.title }}</div>
                <div class="ai-msg">{{ notif.message }}</div>
                <div class="ai-time">{{ timeAgo(notif.time) }}</div>
              </div>
              <div v-if="!notif.read" class="ai-unread" />
            </div>
          </div>
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

// ─────────────────────────────────────────────────────────────────────────────
// Grid layout (12 columns · rowHeight 30px · margin 16px)
// ─────────────────────────────────────────────────────────────────────────────
const LAYOUT_STORAGE_KEY = 'dashboard_solo_layout_v1'

const createDefaultLayout = () => [
  // row 1 — four stat cards
  { i: 'stat-events', x: 0, y: 0, w: 3, h: 5, minW: 2, minH: 4 },
  { i: 'stat-guests', x: 3, y: 0, w: 3, h: 5, minW: 2, minH: 4 },
  { i: 'stat-tasks', x: 6, y: 0, w: 3, h: 5, minW: 2, minH: 4 },
  { i: 'stat-budget', x: 9, y: 0, w: 3, h: 5, minW: 2, minH: 4 },
  // row 2 — RSVP + timeline
  { i: 'rsvp', x: 0, y: 5, w: 6, h: 8, minW: 3, minH: 6 },
  { i: 'timeline', x: 6, y: 5, w: 6, h: 8, minW: 3, minH: 5 },
  // row 3 — budget + tasks + activity
  { i: 'budget', x: 0, y: 13, w: 6, h: 9, minW: 3, minH: 6 },
  { i: 'tasks', x: 6, y: 13, w: 3, h: 9, minW: 2, minH: 5 },
  { i: 'activity', x: 9, y: 13, w: 3, h: 9, minW: 2, minH: 5 },
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

// ─────────────────────────────────────────────────────────────────────────────
// Data (identical to index.vue)
// ─────────────────────────────────────────────────────────────────────────────
// Live polling — dashboard stats every 30s
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

const guestTotal = computed(() => Math.max(guestStore.stats.total, 1))
const confirmedRatio = computed(() => guestStore.stats.confirmed / guestTotal.value)
const pendingRatio = computed(() => guestStore.stats.pending / guestTotal.value)

const rsvpLegend = computed(() => {
  const total = guestStore.stats.total || 1
  return [
    { key: 'confirmed', label: tr('rsvp_confirmed'), value: guestStore.stats.confirmed, color: 'var(--c-success)', pct: pct(guestStore.stats.confirmed, total) },
    { key: 'pending', label: tr('rsvp_pending'), value: guestStore.stats.pending, color: 'var(--c-accent)', pct: pct(guestStore.stats.pending, total) },
    { key: 'declined', label: tr('rsvp_declined'), value: guestStore.stats.declined, color: 'var(--c-danger)', pct: pct(guestStore.stats.declined, total) },
  ]
})

const ceremonyPhases = computed(() => {
  const now = new Date()
  return ceremonyStore.items.map((c, i, arr) => {
    const t = c.scheduleTime ? new Date(c.scheduleTime) : null
    const next = arr[i + 1]?.scheduleTime ? new Date(arr[i + 1].scheduleTime) : null
    const past = c.status === 'done' || (t && t < now && !(next && next > now))
    const current = c.status === 'in-progress' || (t && t <= now && next && next > now)
    return {
      time: t ? t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '',
      name: c.name,
      location: c.description || '',
      past,
      current,
    }
  })
})

const recentTasks = computed(() => taskStore.tasks.slice(0, 5))
</script>

<style lang="scss">
.dashboard-solo-page {
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
    animation: pulse-live-solo 1.5s infinite;
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

  /* Every grid item fills its cell and scrolls inside it when resized small */
  .solo-fill { height: 100%; width: 100%; min-height: 0; overflow: auto; box-sizing: border-box; }
  .dash-widget { min-height: 0; }

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

  /* RSVP */
  .rsvp-chart {
    display: flex; gap: var(--sp-6); align-items: center;
    @media (max-width: 640px) { flex-direction: column; }
  }
  .rsvp-donut {
    position: relative; flex-shrink: 0;
    .donut-svg { width: 140px; height: 140px; circle { transition: stroke-dashoffset 1s var(--ease-out); } }
    .donut-center {
      position: absolute; inset: 0;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      .dc-value { font-family: var(--font-700); font-size: 1.5rem; font-weight: 700; }
      .dc-label { font-size: 0.6875rem; color: var(--c-muted); }
    }
  }
  .rsvp-legend { flex: 1; display: flex; flex-direction: column; gap: var(--sp-4); min-width: 0; }
  .rsvp-legend-item {
    display: flex; align-items: center; gap: var(--sp-3); flex-wrap: wrap;
    .rli-dot { width: 8px; height: 8px; border-radius: var(--r-full); flex-shrink: 0; }
    .rli-info { display: flex; justify-content: space-between; flex: 1; min-width: 0; }
    .rli-label { font-size: 0.8125rem; color: var(--c-muted); }
    .rli-value { font-size: 0.8125rem; font-weight: 700; }
    .rli-bar { flex-basis: 100%; }
  }

  /* Timeline */
  .timeline-list { display: flex; flex-direction: column; }
  .timeline-item {
    display: flex; gap: var(--sp-4); padding-bottom: var(--sp-4);
    &.past { opacity: 0.5; }
    &.current .ti-dot { background: var(--c-accent); box-shadow: var(--glow-accent-sm); }
  }
  .ti-line { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; width: 20px; }
  .ti-dot {
    width: 12px; height: 12px; border-radius: var(--r-full);
    background: var(--c-border); border: 2px solid var(--c-surface); flex-shrink: 0; z-index: 1;
  }
  .ti-connector { flex: 1; width: 1px; background: var(--c-border); margin: 3px 0; min-height: 20px; }
  .ti-content { flex: 1; min-width: 0; padding-bottom: var(--sp-1); }
  .ti-time { font-size: 0.6875rem; color: var(--c-accent); font-weight: 600; margin-bottom: 2px; }
  .ti-title { font-size: 0.875rem; font-weight: 600; color: var(--c-text); margin-bottom: 2px; }
  .ti-location { font-size: 0.75rem; color: var(--c-muted); display: flex; align-items: center; gap: 3px; i { font-size: 0.7rem; } }

  /* Budget */
  .budget-summary { margin-bottom: var(--sp-4); display: flex; flex-direction: column; gap: var(--sp-2); }
  .bs-row {
    display: flex; align-items: center; justify-content: space-between;
    .bs-label { font-size: 0.8125rem; color: var(--c-muted); }
    .bs-value { font-size: 0.9375rem; font-weight: 700; }
  }
  .budget-bars { display: flex; flex-direction: column; gap: var(--sp-3); }
  .bb-item {
    .bb-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; }
    .bb-name { display: flex; align-items: center; gap: 6px; font-size: 0.8125rem; color: var(--c-text); i { font-size: 0.875rem; } }
    .bb-pct { font-size: 0.75rem; color: var(--c-muted); font-weight: 600; }
  }

  /* Tasks */
  .task-list { display: flex; flex-direction: column; gap: var(--sp-3); }
  .task-item {
    display: flex; align-items: flex-start; gap: var(--sp-3); padding: var(--sp-3);
    border-radius: var(--r-md); transition: background var(--t-fast);
    &:hover { background: rgba(255,255,255,0.03); }
    &.completed { opacity: 0.5; .task-name { text-decoration: line-through; } }
  }
  .task-check {
    background: none; border: none; cursor: pointer; color: var(--c-muted);
    font-size: 1.125rem; padding: 2px; flex-shrink: 0; transition: color var(--t-fast);
    &:hover { color: var(--c-accent); }
    .ri-checkbox-circle-fill { color: var(--c-success); }
  }
  .task-name { font-size: 0.875rem; color: var(--c-text); margin-bottom: 4px; }
  .task-meta { display: flex; align-items: center; gap: var(--sp-2); }
  .task-due { font-size: 0.6875rem; color: var(--c-muted); }

  /* Activity */
  .activity-list { display: flex; flex-direction: column; gap: var(--sp-3); }
  .activity-item {
    display: flex; align-items: flex-start; gap: var(--sp-3); padding: var(--sp-3);
    border-radius: var(--r-md); position: relative; transition: background var(--t-fast);
    &:hover { background: rgba(255,255,255,0.03); }
  }
  .ai-icon {
    width: 36px; height: 36px; border-radius: var(--r-md);
    display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0;
    &.ai-success { background: rgba(74,222,128,0.12); color: var(--c-success); }
    &.ai-accent  { background: rgba(255,140,66,0.12); color: var(--c-accent); }
    &.ai-info    { background: rgba(96,165,250,0.12); color: var(--c-info); }
    &.ai-warning { background: rgba(255,140,66,0.12); color: var(--c-accent-2); }
  }
  .ai-content { flex: 1; min-width: 0; }
  .ai-title { font-size: 0.8125rem; font-weight: 600; color: var(--c-text); margin-bottom: 2px; }
  .ai-msg { font-size: 0.75rem; color: var(--c-muted); margin-bottom: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .ai-time { font-size: 0.6875rem; color: var(--c-muted); opacity: 0.7; }
  .ai-unread { width: 7px; height: 7px; border-radius: var(--r-full); background: var(--c-accent); flex-shrink: 0; margin-top: 6px; }

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

@keyframes pulse-live-solo {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.8); }
}
</style>
