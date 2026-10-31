<<<<<<< HEAD
<<<<<<< HEAD

<template>
  <UApp :toaster="toaster">
    <NuxtLoadingIndicator color="gold" />

    <InternetNetworkStatus />
    <RToast />

    <div
      id="app"
      class="app-root bg-default"
=======
=======

>>>>>>> ef0d75b (Update error)
<template>
  <UApp :toaster="toaster">
    <NuxtLoadingIndicator color="gold" />

    <InternetNetworkStatus />
    <RToast />

    <div
      id="app"
<<<<<<< HEAD
      class="bg-default"
>>>>>>> d84b676 (New)
=======
      class="app-root bg-default"
>>>>>>> ef0d75b (Update error)
      vaul-drawer-wrapper
      data-vaul-drawer-wrapper
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>

<script setup lang="ts">
const { locale } = useI18n();
<<<<<<< HEAD
<<<<<<< HEAD
const colorMode = useColorMode();

// ----------------------------------------
// App configuration
// ----------------------------------------

const toaster = {
  component: "UToaster",
  options: {
    timeout: 3000,
    max: 3,
  },
};

// ----------------------------------------
// Theme
// ----------------------------------------

const themeColor = computed(() =>
  colorMode.value === "dark" ? "#09090b" : "#ffffff",
);

// ----------------------------------------
// Text direction
// ----------------------------------------

const textDirection = useTextDirection({
  initialValue: "ltr",
});

const direction = computed(() => textDirection.value);

// ----------------------------------------
// Keyboard shortcuts
// ----------------------------------------

=======
=======
const colorMode = useColorMode();
>>>>>>> ef0d75b (Update error)

// ----------------------------------------
// App configuration
// ----------------------------------------

const toaster = {
  component: "UToaster",
  options: {
    timeout: 3000,
    max: 3,
  },
};

// ----------------------------------------
// Theme
// ----------------------------------------

const themeColor = computed(() =>
  colorMode.value === "dark" ? "#09090b" : "#ffffff",
);

// ----------------------------------------
// Text direction
// ----------------------------------------

const textDirection = useTextDirection({
  initialValue: "ltr",
});

const direction = computed(() => textDirection.value);

// ----------------------------------------
// Keyboard shortcuts
// ----------------------------------------

<<<<<<< HEAD
// Global keyboard shortcuts using nuxt app shortcuts
>>>>>>> d84b676 (New)
=======
>>>>>>> ef0d75b (Update error)
defineShortcuts({
  "G-H": () => navigateTo("/"),
  "G-E": () => navigateTo("/email"),
});

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ef0d75b (Update error)
// ----------------------------------------
// SEO & document metadata
// ----------------------------------------

<<<<<<< HEAD
useHead({
  htmlAttrs: {
    lang: locale,
    dir: direction,
  },

  meta: [
    { charset: "utf-8" },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: themeColor,
    },
  ],

  link: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],

  bodyAttrs: {
    class: "color-default theme-default",
  },
});
</script>

<style lang="scss">
.app-root {
  min-height: 100vh;
}

// ----------------------------------------
// Reka UI Toast
// ----------------------------------------

.r-toast {
  li[role="alert"] {
    background: var(--toast-bg);
=======
// Text direction for Reka UI
const textDirection = useTextDirection({ initialValue: "ltr" });
const dir = computed(() => (textDirection.value === "rtl" ? "rtl" : "ltr"));
const colorMode = useColorMode();
const color = computed(() =>
  colorMode.value === "dark" ? "#09090b" : "#ffffff",
);
const { theme } = useAppSettings();
// Set HTML language attribute from i18n locale
=======
>>>>>>> ef0d75b (Update error)
useHead({
  htmlAttrs: {
    lang: locale,
    dir: direction,
  },

  meta: [
    { charset: "utf-8" },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: themeColor,
    },
  ],

  link: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],

  bodyAttrs: {
    class: "color-default theme-default",
  },
});
</script>

<style lang="scss">
.app-root {
  min-height: 100vh;
}

// ----------------------------------------
// Reka UI Toast
// ----------------------------------------

.r-toast {
<<<<<<< HEAD
  li[role='alert'] {
    background: red !important;
>>>>>>> d84b676 (New)
=======
  li[role="alert"] {
    background: var(--toast-bg);
>>>>>>> ef0d75b (Update error)
  }
}

.r-toast-title {
  font-weight: 700;
}

.r-toast-description {
<<<<<<< HEAD
<<<<<<< HEAD
  color: var(--toast-description);
}

.r-toast-close {
  color: var(--toast-text);
}

// ----------------------------------------
// Global toast styling
// ----------------------------------------

:root {
  --toast-bg: #1f2937;
  --toast-text: #fff;
  --toast-description: #d1d5db;
  --toast-border: #374151;
}

[data-slot="toast"] {
  border: 1px solid var(--toast-border);
  border-radius: 16px;
  background: var(--toast-bg);
  color: var(--toast-text);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 20%);

  [data-slot="toast-title"] {
    color: var(--toast-text);
    font-weight: 700;
  }

  [data-slot="toast-description"] {
    color: var(--toast-description);
  }

  button {
    color: var(--toast-text);

    &:hover {
      background: rgb(255 255 255 / 8%);
=======
  color: #d1d5db;
=======
  color: var(--toast-description);
>>>>>>> ef0d75b (Update error)
}

.r-toast-close {
  color: var(--toast-text);
}

// ----------------------------------------
// Global toast styling
// ----------------------------------------

:root {
  --toast-bg: #1f2937;
  --toast-text: #fff;
  --toast-description: #d1d5db;
  --toast-border: #374151;
}

[data-slot="toast"] {
  border: 1px solid var(--toast-border);
  border-radius: 16px;
  background: var(--toast-bg);
  color: var(--toast-text);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 20%);

  [data-slot="toast-title"] {
    color: var(--toast-text);
    font-weight: 700;
  }

  [data-slot="toast-description"] {
    color: var(--toast-description);
  }

  button {
    color: var(--toast-text);

    &:hover {
<<<<<<< HEAD
      background: rgba(255, 255, 255, 0.08);
>>>>>>> d84b676 (New)
=======
      background: rgb(255 255 255 / 8%);
>>>>>>> ef0d75b (Update error)
    }
  }
}
</style>
