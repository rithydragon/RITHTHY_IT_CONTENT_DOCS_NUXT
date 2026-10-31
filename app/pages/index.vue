<template>
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
  <RWrapperPage>
    <section class="section">
      <StatsWidget
        :stats="liveStats"
        :loading="!liveStats"
        :active-event="activeEvent"
      />
    </section>
=======
>>>>>>> ef0d75b (Update error)

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
<<<<<<< HEAD

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
>>>>>>> d84b676 (New)
=======
</style>
>>>>>>> ef0d75b (Update error)
