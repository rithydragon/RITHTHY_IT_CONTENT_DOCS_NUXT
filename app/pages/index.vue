<template>
  <RWrapperPage>
    <!-- <RContent class="dashboard-page"> -->
      <RTab :items="[{value: 0 , label: tr('dashboard_solo')}, {value: 1 , label: tr('dashboard_chart')}]" v-model="activeTab" @onChange="switchTab"/>
      <DashboardSolo v-if="activeTab === 0" />
      <DashboardChart v-if="activeTab === 1" />
    <!-- </RContent> -->
  </RWrapperPage>
</template>

<script setup>
const { tr } = useTr();
useHead({ title: tr("common.app_name") });
definePageMeta({
  layout: "navbar",
  middleware: ["auth", "permission"],
  title: "Dashboard",
  description: "",
  icon: "ri-dashboard-line",
  iconBg: "bg-[var(--c-surface)]",
});
const eventStore = useEventStore();
const { liveStats, start } = useLiveData();
const activeEvent = computed(() => eventStore.activeEvent);
const { init: eventInit } = useEventPage(() => {});
const activeTab = ref(0)

function switchTab(index) {
  switch (index) {
    case 0:
      activeTab.value = 0
      break;
    case 1:
      activeTab.value = 1
      break;
    case 2:
      activeTab.value = 2
      break;
    case 3:
      activeTab.value = 3
      break;
    case 4:
      activeTab.value = 4
      break;
  }
}
onMounted(async () => {
  await nextTick();
  await eventInit();
  start();
});
</script>

<style lang="scss" scoped>
.dashboard-page {
  display: flex;
  flex-direction: column;
  padding: 0;
  max-width: 100%;
  gap: var(--sp-1);
  @include lg {
    gap: var(--sp-3);
  }
}
</style>
