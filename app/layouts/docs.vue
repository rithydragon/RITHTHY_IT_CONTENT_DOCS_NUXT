<template>
  <div class="docs-layout">
    <DocsSidebar />

    <main class="docs-layout__main">
      <AppActionNavbar />
      <slot />
    </main>

    <aside class="docs-layout__toc">
      <slot name="toc" />
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.docs-layout {
  display: flex;
  min-height: 100vh;
  background: var(--c-bg);

  &__main {
    flex: 1;
    padding-inline: var(--sp-10);
    min-width: 0;
  }

  &__toc {
    width: 256px;
    flex-shrink: 0;
  }
}
</style>