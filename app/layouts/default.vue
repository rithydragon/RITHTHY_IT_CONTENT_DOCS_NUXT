
<template>
  <div class="docs-layout">
    <DocsSidebar class="docs-layout__sidebar" />

    <main class="docs-layout__main">
      <AppActionNavbar />

      <div class="docs-layout__content">
        <slot />
      </div>
    </main>

    <aside
      v-if="$slots.toc"
      class="docs-layout__toc"
      aria-label="On this page"
    >
      <div class="docs-layout__toc-inner">
        <slot name="toc" />
      </div>
    </aside>
  </div>
</template>

<script setup>
// Documentation layout
</script>

<style lang="scss" scoped>
.docs-layout {
  --sidebar-width: 260px;
  --toc-width: 240px;
  --content-max-width: 960px;
  --layout-gap: 32px;

  display: grid;
  grid-template-columns:
    var(--sidebar-width)
    minmax(0, 1fr)
    var(--toc-width);

  min-height: 100vh;
  background: var(--c-bg);

  &__sidebar {
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    align-self: start;
  }

  &__main {
    min-width: 0;
    min-height: 100vh;
    padding-inline: var(--sp-10);
  }

  &__content {
    width: 100%;
    max-width: var(--content-max-width);
    margin-inline: auto;
    padding-block: var(--sp-8) var(--sp-16);
  }

  &__toc {
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    align-self: start;
    padding: var(--sp-8) var(--sp-6);
  }

  &__toc-inner {
    position: relative;
  }
}

// Tablet
@media (max-width: 1200px) {
  .docs-layout {
    --toc-width: 200px;
    --layout-gap: 24px;

    grid-template-columns:
      var(--sidebar-width)
      minmax(0, 1fr);

    &__toc {
      display: none;
    }
  }
}

// Mobile
@media (max-width: 768px) {
  .docs-layout {
    display: block;

    &__sidebar {
      position: relative;
      width: 100%;
      height: auto;
    }

    &__main {
      width: 100%;
      padding-inline: var(--sp-4);
    }

    &__content {
      padding-block: var(--sp-6) var(--sp-10);
    }
  }
}
</style>
