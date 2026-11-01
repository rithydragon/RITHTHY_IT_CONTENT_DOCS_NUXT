<template>
  <header class="top-bar">
    <div class="flex items-center gap-3">
      <!-- Back -->
      <button
        v-if="showBack"
        type="button"
        class="top-bar__back cursor-pointer"
        @click="goBack"
        aria-label="Go back"
      >
        <i class="ri-arrow-left-s-line text-2xl"></i>
      </button>

      <!-- Dynamic Page Header -->
      <div class="flex items-center gap-3">
        <div
          v-if="pageIcon"
          class="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-lg"
          :class="pageIconBg"
        >
          <i :class="pageIcon" class="text-xl text-[var(--c-text)]" />
        </div>

        <div class="flex gap-0.5 min-w-0 flex-col">
          <h5 class="text-[10px] font-bold leading-5">
            {{ tr(pageTitle) }} {{ tr(pageDescription) }}
          </h5>
          <div v-if="isDashboard" class="action-group">
            <span
              v-if="daysLeft !== null"
              class="countdown-badge"
              :class="daysLeft <= 7 ? 'urgent' : ''"
            >
              <i class="ri-calendar-event-line" />
              {{
                daysLeft > 0
                  ? tBy({
                      en: `${daysLeft} days to wedding`,
                      km: `${daysLeft} ថ្ងៃទៀតដល់ពិធី`,
                    })
                  : daysLeft === 0
                    ? tBy({
                        en: "Wedding day! 🎉",
                        km: "ថ្ងៃពិធីមហាមង្គល! 🎉",
                      })
                    : tBy({
                        en: `${Math.abs(daysLeft)} days ago`,
                        km: `កន្លងទៅ ${Math.abs(daysLeft)} ថ្ងៃ`,
                      })
              }}
            </span>
            <span v-if="liveStats" class="live-chip">
              <span class="live-dot-sm" />
              Live · {{ lastUpdatedLabel }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile menu toggle -->
    <div
      class="mobile-bar__menu-btn cursor-pointer"
      @click="toggleMobile"
      aria-label="Open menu"
    >
      <i class="ri-menu-line" />
    </div>

    <div class="top-bar__right">
      <!-- Dark mode -->
      <div
        class="top-bar__mode flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-slate-700 transition-all duration-200 hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-700"
        @click="themeStore.toggleTheme()"
      >
        <i
          :class="themeStore.isDark ? 'ri-sun-line' : 'ri-moon-line'"
          class="text-[20px] transition-transform duration-200"
        />
      </div>

      <!-- Language -->
      <LanguageSwitcher />
      <AccountProfile />
    </div>
  </header>
</template>

<script setup>
const { tr } = useTr();
const { toggleMobile } = useSidebar();
const authStore = useAuthStore();
const themeStore = useThemeStore();
const route = useRoute();
const profileOpen = ref(false);
const dropdownStyle = ref({});
const { tBy } = useSarikaLocale();
const eventStore = useEventStore();
const { liveStats, lastUpdated, start } = useLiveData();

const hour = new Date().getHours();

const greeting = computed(() => {
  return hour < 12
    ? "Good Morning"
    : hour < 18
      ? "Good Afternoon"
      : "Good Evening";
});

const greetingKm = computed(() => {
  return hour < 12 ? "អរុណសួស្តី" : hour < 18 ? "ទិវាសួស្តី" : "សាយណ្ហសួស្តី";
});

const activeEvent = computed(() => {
  return eventStore.activeEvent;
});

const daysLeft = computed(() => {
  if (!activeEvent.value?.date) return null;
  const diff = new Date(activeEvent.value.date) - new Date();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
});

const isDashboard = computed(() => {
  return route.path === "/dashboard" || route.meta.title === "Dashboard";
});

const pageTitle = computed(() => {
  if (isDashboard.value) {
    return tBy({
      en: greeting.value,
      km: greetingKm.value,
    });
  }

  return String(route.meta.title || "");
});

const pageDescription = computed(() => {
  if (isDashboard.value) {
    return activeEvent.value?.title || tr("events.no_event_selected");
  }

  return String(route.meta.description || "");
});

const lastUpdatedLabel = computed(() => {
  if (!lastUpdated.value) return "";
  return lastUpdated.value.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
});

const pageIcon = computed(() => {
  return String(route.meta.icon || "");
});

const pageIconBg = computed(() => {
  return String(route.meta.iconBg || "bg-gray-500");
});

const showBack = computed(() => {
  return route.meta.showBack === true;
});

const goBack = () => {
  window.history.back();
};


onMounted(() => {
  start();
});
</script>

<style lang="scss" scoped>
.top-bar__title {
  display: flex;
  align-items: center;
  gap: 6px;
  h4 {
    font-size: large;
    font-weight: 600;
  }
}

.top-bar__back {
  width: 30px;
  height: 30px;
  padding: 0;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--c-muted);

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--c-border);
    color: var(--c-text);
  }

  i {
    font-size: 1.5rem;
  }
}
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-height: var(--header-height);
  padding: 16px 16px;
  background: var(--c-bg);
}

.top-bar__right {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
}

.top-bar__mode {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  padding: 3px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--c-text);
  transition:
    background 0.13s,
    color 0.13s;
  &:hover {
    background: var(--c-border);
    color: var(--c-text);
  }
  &-icon {
    font-size: 0.95rem;
  }
}

.mobile-bar__menu-btn {
  display: none;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  color: var(--c-text);
  font-size: 1.1rem;
  &:hover {
    background: var(--c-border);
  }
  @media (max-width: 768px) {
    display: flex;
  }
}

.action-group {
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  flex-wrap: wrap;
}

.countdown-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: var(--r-full);
  color: var(--c-danger);
  font-size: 0.8125rem;
  font-weight: 600;
  &.urgent {
    color: var(--c-danger);
  }
}

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
  animation: pulse-live 1.5s infinite;
}
@keyframes pulse-live {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.8);
  }
}
</style>
