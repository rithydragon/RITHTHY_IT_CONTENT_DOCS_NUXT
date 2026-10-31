<template>
  <div class="app-toast" :class="`toast-${color}`">
    <div class="toast-inner">
      <!-- Icon -->
      <div class="toast-icon" :class="`text-${color}-400`">
        <i :class="icon"></i>
      </div>

      <!-- Content -->
      <div class="toast-content">
        <span class="toast-title">{{ title }}</span>
        <span v-if="description" class="toast-description">{{ description }}</span>
      </div>

      <!-- Close Button -->
      <button class="toast-close" @click="closeToast">
        <i class="ri-close-line"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  icon: { type: String, default: 'ri-information-line' },
  color: {
    type: String,
    default: 'blue',
    validator: (v: string) => ['blue', 'green', 'red', 'amber', 'gray', 'purple'].includes(v)
  },
  timeout: { type: Number, default: 4500 }
})

const emit = defineEmits(['close'])

let timer: NodeJS.Timeout | null = null

const closeToast = () => {
  if (timer) clearTimeout(timer)
  emit('close')
}

onMounted(() => {
  if (props.timeout > 0) {
    timer = setTimeout(closeToast, props.timeout)
  }
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})
</script>

<style lang="scss" scoped>
.app-toast {
  background: #1f2937;
  color: white;
  border-radius: 9999px;
  padding: 12px 16px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.3);
  border: 1px solid #374151;
  max-width: 380px;
  width: 100%;
  margin: 8px auto;
}

.toast-inner {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toast-icon {
  font-size: 22px;
  flex-shrink: 0;
}

.toast-content {
  flex: 1;
  min-width: 0;
}

.toast-title {
  font-size: 14px;
  font-weight: 500;
  display: block;
}

.toast-description {
  font-size: 13px;
  opacity: 0.85;
  margin-top: 2px;
  display: block;
}

.toast-close {
  background: none;
  border: none;
  color: #9ca3af;
  font-size: 20px;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  margin-left: auto;

  &:hover {
    color: white;
  }
}

/* Color Variants */
.toast-blue  { border-color: #3b82f6; }
.toast-green { border-color: #22c55e; }
.toast-red   { border-color: #ef4444; }
.toast-amber { border-color: #f59e0b; }
.toast-gray  { border-color: #6b7280; }
.toast-purple{ border-color: #8b5cf6; }
</style>

<!-- 
Usage
<script setup>
const { success, error, info, warning } = useAppToast()

// Simple usage
info('Chat deleted')

// With description
error('Failed to delete chat', {
  description: 'Please try again later'
})

// Full control
success('Payment successful', {
  description: 'Your order has been processed',
  timeout: 6000
})
</script> -->
