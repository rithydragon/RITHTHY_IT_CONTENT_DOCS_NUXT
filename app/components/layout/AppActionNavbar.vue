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
          class="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-lg"
        >
          <i class="ri-home-line text-xl text-[var(--c-text)]" />
        </div>

        <div class="flex gap-0.5 min-w-0 flex-col">
          <span class="countdown-badge">
            <i class="ri-calendar-event-line" />
            {{ $t("docs.name") }}
          </span>
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
    </div>
  </header>
</template>

<script setup>
const { toggleMobile } = useSidebar();
const themeStore = useThemeStore();
const route = useRoute();
const hour = new Date().getHours();

const greeting = computed(() => {
  return hour < 12
    ? "Good Morning"
    : hour < 18
      ? "Good Afternoon"
      : "Good Evening";
});

const goBack = () => {
  window.history.back();
};
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

.tb-profile {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 50%;
  cursor: pointer;
  transition: opacity 0.13s;
  &:hover {
    opacity: 0.85;
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
</style>

<style lang="scss">
/* Global — teleported dropdown lives in <body>, outside scoped styles */
.tb-profile-dropdown {
  min-width: 220px;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: 12px;
  padding: 6px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.22);

  .tb-dd__user-info {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 10px 10px;
  }

  .tb-dd__uname {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--c-text);
  }

  .tb-dd__uemail {
    font-size: 0.72rem;
    color: var(--c-muted);
    margin-top: 1px;
  }

  .tb-dd__divider {
    border: none;
    border-top: 1px solid var(--c-border);
    margin: 4px 0;
  }

  .tb-dd__link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    border-radius: 8px;
    font-size: 0.825rem;
    color: var(--c-text);
    text-decoration: none;
    cursor: pointer;
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    font-family: inherit;
    transition: background 0.12s;

    &:hover {
      background: rgba(255, 255, 255, 0.06);
    }

    &--danger {
      color: var(--c-danger);
      &:hover {
        background: rgba(248, 113, 113, 0.08) !important;
      }
    }

    i {
      font-size: 0.9rem;
    }
  }
}

.tb-dropdown-enter-active,
.tb-dropdown-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}
.tb-dropdown-enter-from,
.tb-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.97);
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
