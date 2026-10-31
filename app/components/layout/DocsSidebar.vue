
<script setup lang="ts">
const { data: navigation } = await useAsyncData(
  "docs-navigation",
  () => queryCollectionNavigation("content"),
  { default: () => [] },
);
</script>

<template>
  <aside class="docs-sidebar">
    <div class="docs-sidebar__header">
      <NuxtLink to="/docs">Documentation</NuxtLink>
    </div>

    <nav aria-label="Documentation navigation">
      <ul class="docs-sidebar__list">
        <DocsSidebarItem
          v-for="item in navigation"
          :key="item.path"
          :item="item"
        />
      </ul>
    </nav>
  </aside>
</template>
<style lang="scss" scoped>
.docs-sidebar {
  width: 100%;
  min-width: 0;
  border-right: 1px solid var(--c-border);

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 1rem;
    margin-bottom: 0.75rem;
  }

  &__brand {
    font-size: 1rem;
    font-weight: 700;
    color: var(--c-text);
    text-decoration: none;
  }

  &__version {
    padding: 0.2rem 0.5rem;
    border-radius: 6px;
    background: var(--c-bg-soft);
    color: var(--c-text-muted);
    font-size: 0.7rem;
  }

  &__nav {
    padding: 0 0.75rem 1.5rem;
  }

  &__list,
  &__children {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  &__item {
    margin-bottom: 0.25rem;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    padding: 0.6rem 0.75rem;
    border-radius: 7px;
    color: var(--c-text-muted);
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    transition:
      color 150ms ease,
      background 150ms ease;

    &:hover {
      background: var(--c-bg-soft);
      color: var(--c-text);
    }

    &.is-active {
      background: var(--c-primary-soft);
      color: var(--c-primary);
      font-weight: 600;
    }

    &.has-active-child {
      color: var(--c-text);
    }
  }

  &__count {
    font-size: 0.7rem;
    color: var(--c-text-muted);
  }

  &__children {
    position: relative;
    margin: 0.35rem 0 0.65rem 0.85rem;
    padding-left: 0.75rem;
    border-left: 1px solid var(--c-border);
  }

  &__child {
    margin-bottom: 0.15rem;
  }

  &__child-link {
    display: block;
    padding: 0.45rem 0.65rem;
    border-radius: 6px;
    color: var(--c-text-muted);
    font-size: 0.825rem;
    text-decoration: none;
    transition: all 150ms ease;

    &:hover {
      color: var(--c-text);
      background: var(--c-bg-soft);
    }

    &.is-active {
      color: var(--c-primary);
      background: var(--c-primary-soft);
      font-weight: 600;
    }
  }
}
</style>