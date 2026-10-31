
<script setup lang="ts">
interface NavigationItem {
  title?: string;
  path: string;
  children?: NavigationItem[];
}

const props = defineProps<{
  item: NavigationItem;
  depth?: number;
}>();

const route = useRoute();

const href = computed(() =>
  `/docs${props.item.path}`.replace(/\/+/g, "/"),
);

const active = computed(
  () => route.path.replace(/\/+$/, "") === href.value.replace(/\/+$/, ""),
);

const activeChild = computed(() =>
  props.item.children?.some((child) => {
    const childPath = `/docs${child.path}`.replace(/\/+/g, "/");
    return (
      route.path.replace(/\/+$/, "") === childPath.replace(/\/+$/, "")
    );
  }) ?? false,
);

const expanded = ref(active.value || activeChild.value);
</script>

<template>
  <li class="docs-item" :style="{ '--depth': depth ?? 0 }">
    <div class="docs-item__row">
      <NuxtLink
        :to="href"
        class="docs-item__link"
        :class="{ 'is-active': active }"
        :aria-current="active ? 'page' : undefined"
      >
        {{ item.title }}
      </NuxtLink>

      <button
        v-if="item.children?.length"
        type="button"
        class="docs-item__toggle"
        :aria-expanded="expanded"
        :aria-label="`Toggle ${item.title}`"
        @click="expanded = !expanded"
      >
        <span>{{ expanded ? "−" : "+" }}</span>
      </button>
    </div>

    <ul
      v-if="item.children?.length && expanded"
      class="docs-item__children"
    >
      <DocsSidebarItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :depth="(depth ?? 0) + 1"
      />
    </ul>
  </li>
</template>

<style lang="scss" scoped>
.docs-item {
  list-style: none;

  &__row {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  &__link {
    flex: 1;
    min-width: 0;
    padding: 0.55rem 0.75rem;
    border-radius: 6px;
    color: var(--c-text-muted);
    font-size: 0.875rem;
    text-decoration: none;

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

  &__toggle {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--c-text-muted);
    cursor: pointer;

    &:hover {
      background: var(--c-bg-soft);
    }
  }

  &__children {
    margin: 0.25rem 0 0.25rem 0.75rem;
    padding-left: 0.5rem;
    border-left: 1px solid var(--c-border);
  }
}
</style>
