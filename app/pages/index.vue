<template>

</template>
<script setup>

</script>
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