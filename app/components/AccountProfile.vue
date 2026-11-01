<template>
      <!-- Profile avatar trigger -->
    <div
      ref="profileBtnRef"
      class="tb-profile cursor-pointer"
      @click.stop="toggleProfile"
    >
      <RAvatar
        :src="authStore.currentUser?.avatar || undefined"
        :online="authStore.currentUser?.status === 'ACTIVE' ? true : false"
        size="xs"
        class="pointer-events-none"
      />
    </div>

    <!-- Dropdown — teleported to body to escape overflow:hidden on layout -->
    <Teleport to="body">
      <Transition name="tb-dropdown">
        <div
          v-if="profileOpen"
          ref="dropdownRef"
          class="tb-profile-dropdown"
          :style="dropdownStyle"
        >
          <RLink to="/profile" @click.stop="profileOpen = false">
            <div class="tb-dd__user-info">
              <RAvatar
                :src="authStore.currentUser?.avatar || undefined"
                size="sm"
                shape="circle"
              />
              <div>
                <div class="tb-dd__uname">{{ authStore.currentUser?.firstName + " " + authStore.currentUser?.lastName }}</div>
                <div class="tb-dd__uemail">{{ authStore.currentUser?.email }}</div>
              </div>
              <button
                class="tb-dd__link tb-dd__link--danger"
                @click.self="handleLogout"
              >
                <i class="ri-logout-box-r-line" /> {{ tr("sign_out") }}
              </button>
            </div>
          </RLink>
        </div>
      </Transition>
    </Teleport>
</template>

<script setup>
import { useAuthStore } from "~/stores/auth";
const { tr } = useTr();
const authStore = useAuthStore();
const profileOpen = ref(false);
const profileBtnRef = ref(null);
const dropdownRef = ref(null);
const dropdownStyle = ref({});

const toggleProfile = () => {
  if (!profileOpen.value) {
    const rect = profileBtnRef.value?.getBoundingClientRect();
    if (rect) {
      dropdownStyle.value = {
        position: "fixed",
        top: `${rect.bottom + 8}px`,
        right: `${window.innerWidth - rect.right}px`,
        zIndex: "9999",
      };
    }
  }

  profileOpen.value = !profileOpen.value;
};

const handleClickOutside = (e) => {
  if (!profileOpen.value) return;

  const target = e.target;

  if (profileBtnRef.value?.contains(target)) return;
  if (dropdownRef.value?.contains(target)) return;

  profileOpen.value = false;
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside, true);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside, true);
});

/**
 * ----------------------------------------
 * Logout
 * ----------------------------------------
 */

const handleLogout = async () => {
  profileOpen.value = false;
  authStore.clearAuth();

  await navigateTo("/auth/login", {
    replace: true,
  });
};
</script>

<style lang="scss" scoped>
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
</style>
