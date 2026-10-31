<template>
  <div ref="wrapperEl" class="rt-tooltip-wrapper" @mouseenter="show" @mouseleave="onTriggerLeave">
    <div
      ref="wrapperEl"
      class="rt-tooltip-wrapper"
      @mouseenter="onTriggerEnter"
      @mouseleave="onTriggerLeave"
      > <slot />
    </div>
    <Teleport to="body">
      <Transition name="tooltip">
        <div
          v-if="visible && text"
          ref="tooltipEl"
          class="rt-tooltip"
          :style="tooltipStyle"
          role="tooltip"
          @mouseenter="onTooltipEnter"
          @mouseleave="onTooltipLeave"
        >
          <!-- Simple label tooltip -->
          <template v-if="!children || children.length === 0">
            <span class="rt-tooltip__label">{{ text }}</span>
          </template>

          <!-- Children menu tooltip -->
          <template v-else>
            <div class="rt-tooltip__menu">
              <p class="rt-tooltip__menu-title">{{ text }}</p>
              <RLink
                v-for="child in children"
                :key="child.key"
                :to="child.to"
                class="rt-tooltip__menu-item"
                @click="hide"
              >
                {{ child.label }}
              </RLink>
            </div>
          </template>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
<script setup lang="ts">
import type { MenuItem } from '~/types/navigation'

const props = defineProps<{
  text: string
  children?: MenuItem[]
}>()

const visible = ref(false)

const tooltipEl = ref<HTMLElement | null>(null)
const wrapperEl = ref<HTMLElement | null>(null)

const tooltipStyle = ref({})

const isHoveringTrigger = ref(false)
const isHoveringTooltip = ref(false)

let hideTimer: ReturnType<typeof setTimeout> | null = null

const hasChildren = computed(() => {
  return props.children && props.children.length > 0
})

const clearHideTimer = () => {
  if (hideTimer) {
    clearTimeout(hideTimer)
    hideTimer = null
  }
}

const updatePosition = () => {
  if (!wrapperEl.value) return

  const rect = wrapperEl.value.getBoundingClientRect()

  tooltipStyle.value = {
    top: `${rect.top + rect.height / 2}px`,
    left: `${rect.right + 10}px`,
    transform: 'translateY(-50%)'
  }
}

const show = async () => {
  clearHideTimer()

  visible.value = true

  await nextTick()

  updatePosition()
}

const hide = () => {
  clearHideTimer()

  hideTimer = setTimeout(() => {
    if (!isHoveringTrigger.value && !isHoveringTooltip.value) {
      visible.value = false
    }
  }, 120)
}

const onTriggerEnter = () => {
  isHoveringTrigger.value = true
  show()
}

const onTriggerLeave = () => {
  isHoveringTrigger.value = false

  if (!hasChildren.value) {
    hide()
    return
  }

  hide()
}

const onTooltipEnter = () => {
  isHoveringTooltip.value = true
  clearHideTimer()
}

const onTooltipLeave = () => {
  isHoveringTooltip.value = false
  hide()
}
</script>

<style lang="scss">
.rt-tooltip-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.rt-tooltip {
  position: fixed;
  z-index: 9999;
  pointer-events: auto;

  &__label {
    display: block;
    background: var(--color-tooltip-bg);
    color: var(--color-tooltip-text);
    font-size: 0.75rem;
    font-weight: 500;
    padding: 6px 12px;
    border-radius: 8px;
    white-space: nowrap;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
    letter-spacing: 0.01em;
    border: 1px solid var(--color-tooltip-border);
  }

  &__menu {
    background: var(--color-tooltip-bg);
    border: 1px solid var(--color-tooltip-border);
    border-radius: 12px;
    padding: 8px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
    min-width: 140px;

    &-title {
      font-size: 0.65rem;
      font-weight: 600;
      color: var(--color-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 2px 8px 6px;
      margin: 0;
      border-bottom: 1px solid var(--color-border);
      margin-bottom: 4px;
    }

    &-item {
      display: block;
      padding: 7px 10px;
      font-size: 0.8125rem;
      font-weight: 450;
      color: var(--color-text-primary);
      border-radius: 8px;
      text-decoration: none;
      transition: background 0.15s ease, color 0.15s ease;
      cursor: pointer;

      &:hover {
        background: var(--color-tooltip-item-hover);
        color: var(--color-accent);
      }
    }
  }
}

.tooltip-enter-active,
.tooltip-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.tooltip-enter-from {
  opacity: 0;
  transform: translateY(-50%) translateX(-6px) !important;
}

.tooltip-leave-to {
  opacity: 0;
  transform: translateY(-50%) translateX(-6px) !important;
}
</style>
