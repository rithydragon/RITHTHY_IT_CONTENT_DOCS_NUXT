<template>
  <div class="r-table-header" :class="{ 'r-table-header--loading': loading }">
    <div class="r-table-header__top">
      <!-- Left Slot -->
      <div class="r-table-header__left">
        <slot name="headerLeft" />
      </div>

      <!-- Center Slot - Search -->
      <div class="r-table-header__center">
        <slot name="headerCenter">
          <div class="r-table-header__search">
            <UIcon name="i-ri-search-line" class="r-table-header__search-icon" />
            <input
              v-model="searchModel"
              type="text"
              :placeholder="t('search')"
              class="r-table-header__search-input"
              @input="onSearchInput"
            />
            <button
              v-if="searchModel"
              class="r-table-header__search-clear"
              @click="clearSearch"
            >
              <UIcon name="i-ri-close-line" />
            </button>
          </div>
        </slot>
      </div>

      <!-- Right Slot -->
      <div class="r-table-header__right">
        <slot name="headerRight">
          <!-- Export Button -->
          <UTooltip :text="t('export')">
            <UButton
              v-if="exportColumns?.length"
              color="primary"
              variant="ghost"
              size="sm"
              @click="handleExport"
            >
              <UIcon name="i-ri-download-line" />
            </UButton>
          </UTooltip>

          <!-- Reload Button -->
          <UTooltip :text="t('reload')">
            <UButton
              color="primary"
              variant="ghost"
              size="sm"
              :loading="loading"
              @click="handleReload"
            >
              <UIcon name="i-ri-refresh-line" />
            </UButton>
          </UTooltip>

          <!-- Filter Button -->
          <slot name="headerApplyFilter">
            <UButton
              color="primary"
              variant="ghost"
              size="sm"
              @click="showFilters = !showFilters"
            >
              <UIcon name="i-ri-filter-3-line" />
              <span v-if="activeFilterCount" class="r-table-header__filter-badge">
                {{ activeFilterCount }}
              </span>
            </UButton>
          </slot>
        </slot>
      </div>
    </div>

    <!-- Filter Panel -->
    <div v-if="showFilters" class="r-table-header__filters">
      <div class="r-table-header__filters-grid">
        <div
          v-for="col in filterableColumns"
          :key="col.key"
          class="r-table-header__filter-item"
        >
          <label :for="`filter-${col.key}`" class="r-table-header__filter-label">
            {{ col.label || col.key }}
          </label>
          <input
            :id="`filter-${col.key}`"
            v-model="filterValues[col.key]"
            type="text"
            :placeholder="t('filter_by', { field: col.label || col.key })"
            class="r-table-header__filter-input"
            @input="applyFilters"
          />
        </div>
      </div>
      <div class="r-table-header__filters-actions">
        <UButton size="sm" @click="clearFilters">
          {{ t('clear_filters') }}
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  loading: Boolean,
  options: Object,
  exportColumns: Array,
  exportRows: Array,
  exportFilename: String,
  columns: Array,
  columnFilters: Array,
  modelValue: String
})

const emit = defineEmits([
  'update:modelValue',
  'searchTable',
  'clearSearch',
  'reload',
  'filter'
])

const { t } = useI18n()
const searchModel = ref(props.modelValue || '')
const showFilters = ref(false)
const filterValues = ref({})

const filterableColumns = computed(() => 
  (props.columns || []).filter(col => col.filterable !== false)
)

const activeFilterCount = computed(() => {
  return Object.values(filterValues.value).filter(v => v && v.trim()).length
})

const onSearchInput = () => {
  emit('update:modelValue', searchModel.value)
  emit('searchTable', searchModel.value)
}

const clearSearch = () => {
  searchModel.value = ''
  emit('update:modelValue', '')
  emit('clearSearch')
}

const handleReload = () => {
  emit('reload')
}

const applyFilters = () => {
  const filters = Object.entries(filterValues.value)
    .filter(([_, value]) => value && value.trim())
    .map(([key, value]) => ({ key, value }))
  
  emit('filter', filters)
}

const clearFilters = () => {
  filterValues.value = {}
  applyFilters()
}

const handleExport = () => {
  if (!props.exportColumns?.length || !props.exportRows?.length) return
  
  const headers = props.exportColumns.map(col => col.label || col.key)
  const rows = props.exportRows.map(row => 
    props.exportColumns.map(col => row[col.key] || '')
  )
  
  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n')
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${props.exportFilename || 'data'}.csv`
  a.click()
  URL.revokeObjectURL(url)
}

// Watch external model changes
watch(() => props.modelValue, (val) => {
  if (val !== searchModel.value) {
    searchModel.value = val || ''
  }
})

// Watch column filters from parent
watch(() => props.columnFilters, (filters) => {
  if (filters) {
    const newValues = {}
    filters.forEach(f => { newValues[f.key] = f.value })
    filterValues.value = newValues
  }
}, { deep: true, immediate: true })
</script>

<style lang="scss" scoped>
.r-table-header {
  background: var(--c-surface, #fff);
  border-bottom: 1px solid var(--c-border, #e5e7eb);
  padding: 12px 16px;
  flex-shrink: 0;

  &--loading {
    opacity: 0.7;
    pointer-events: none;
  }

  &__top {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  &__left {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  &__center {
    flex: 1;
    min-width: 200px;
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
  }

  &__search {
    position: relative;
    display: flex;
    align-items: center;
    max-width: 400px;
    width: 100%;

    &-icon {
      position: absolute;
      left: 10px;
      color: var(--ui-text-muted, #6b7280);
      pointer-events: none;
    }

    &-input {
      width: 100%;
      padding: 6px 10px 6px 32px;
      border: 1px solid var(--c-border, #e5e7eb);
      border-radius: 6px;
      background: var(--c-bg, #f9fafb);
      color: var(--c-text, #374151);
      font-size: 0.875rem;
      transition: border-color 0.2s, box-shadow 0.2s;

      &:focus {
        outline: none;
        border-color: var(--ui-primary, #3b82f6);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--ui-primary, #3b82f6) 20%, transparent);
      }

      &::placeholder {
        color: var(--ui-text-muted, #6b7280);
      }
    }

    &-clear {
      position: absolute;
      right: 8px;
      background: none;
      border: none;
      color: var(--ui-text-muted, #6b7280);
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      
      &:hover {
        background: var(--ui-bg-elevated, #f3f4f6);
        color: var(--c-text, #374151);
      }
    }
  }

  &__filter-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    font-size: 11px;
    font-weight: 600;
    color: #fff;
    background: var(--ui-primary, #3b82f6);
    border-radius: 10px;
    margin-left: 2px;
  }

  &__filters {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid var(--c-border, #e5e7eb);

    &-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 12px;
    }

    &-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    &-label {
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--ui-text-muted, #6b7280);
    }

    &-input {
      padding: 6px 10px;
      border: 1px solid var(--c-border, #e5e7eb);
      border-radius: 4px;
      background: var(--c-bg, #f9fafb);
      color: var(--c-text, #374151);
      font-size: 0.875rem;
      transition: border-color 0.2s;

      &:focus {
        outline: none;
        border-color: var(--ui-primary, #3b82f6);
      }
    }

    &-actions {
      margin-top: 12px;
      display: flex;
      justify-content: flex-end;
    }
  }

  @media (max-width: 768px) {
    padding: 8px 12px;

    &__top {
      flex-wrap: wrap;
    }

    &__center {
      order: 3;
      flex-basis: 100%;
    }

    &__search {
      max-width: 100%;
    }

    &__filters-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>