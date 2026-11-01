<template>
  <RHead :title="$t('dashboard')" />
  <RWrapperPage>
    <RContent class="dashboard-page">
      <RTab :items="[{value: 0 , label: t('rtyCms.dashboard.dashboard')}, {value: 1 , label: t('analytics')}, {value: 2 , label: t('dashboard auto')}, {value: 3 , label: t('analytics auto')}, {value: 4 , label: t('dashboard template')}]" v-model="activeTab" @onChange="switchTab"/>
      <DashboardSolo v-if="activeTab === 0" />
      <DashboardChart v-if="activeTab === 1" />
    </RContent>
  </RWrapperPage>
</template>

<script setup>
definePageMeta({ layout: 'navbar', middleware: ['auth', 'permission'], permission: 'VIEW_WEDDING' })

const { t, te, locale } = useI18n()
const activeTab = ref(0)
</script>

<style lang="scss">
</style>