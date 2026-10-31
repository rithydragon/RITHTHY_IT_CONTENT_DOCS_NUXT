<template>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ef0d75b (Update error)
  <div ref="wrapperEl" class="rt-tooltip-wrapper" @mouseenter="show" @mouseleave="onTriggerLeave">
    <div
      ref="wrapperEl"
      class="rt-tooltip-wrapper"
      @mouseenter="onTriggerEnter"
      @mouseleave="onTriggerLeave"
      > <slot />
    </div>
<<<<<<< HEAD
=======
  <div
    ref="wrapperEl"
    class="rt-tooltip-wrapper"
    @mouseenter="trigger === 'hover' ? onTriggerEnter() : null"
    @mouseleave="trigger === 'hover' ? onTriggerLeave() : null"
    @click="trigger === 'click' ? toggle() : null"
  >
    <slot name="trigger">
      <slot />
    </slot>
>>>>>>> d84b676 (New)
=======
>>>>>>> ef0d75b (Update error)
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
<<<<<<< HEAD
<<<<<<< HEAD
          <!-- Simple label tooltip -->
          <template v-if="!children || children.length === 0">
=======
          <!-- <slot>
            <span class="rt-tooltip__label">
              {{ text }}
            </span>
          </slot> -->
                    <!-- Custom slot content -->
          <template v-if="$slots.content">
            <slot name="content" />
          </template>

          <!-- Simple label tooltip -->
          <template v-if=" !children || children.length === 0">
>>>>>>> d84b676 (New)
=======
          <!-- Simple label tooltip -->
          <template v-if="!children || children.length === 0">
>>>>>>> ef0d75b (Update error)
            <span class="rt-tooltip__label">{{ text }}</span>
          </template>

          <!-- Children menu tooltip -->
          <template v-else>
            <div class="rt-tooltip__menu">
              <p class="rt-tooltip__menu-title">{{ text }}</p>
<<<<<<< HEAD
<<<<<<< HEAD
              <RLink
                v-for="child in children"
                :key="child.key"
                :to="child.to"
                class="rt-tooltip__menu-item"
                @click="hide"
              >
                {{ child.label }}
              </RLink>
=======
              <NuxtLink
=======
              <RLink
>>>>>>> ef0d75b (Update error)
                v-for="child in children"
                :key="child.key"
                :to="child.to"
                class="rt-tooltip__menu-item"
                @click="hide"
              >
<<<<<<< HEAD
                {{ tr(child.label) }}
              </NuxtLink>
>>>>>>> d84b676 (New)
=======
                {{ child.label }}
              </RLink>
>>>>>>> ef0d75b (Update error)
            </div>
          </template>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
<script setup lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD
import type { MenuItem } from '~/types/navigation'

const props = defineProps<{
  text: string
  children?: MenuItem[]
}>()

=======
const { tr } = useTr()
=======
>>>>>>> ef0d75b (Update error)
import type { MenuItem } from '~/types/navigation'

const props = defineProps<{
  text: string
  children?: MenuItem[]
}>()

<<<<<<< HEAD
const props = withDefaults(
  defineProps<{
    text?: string,
    children?: MenuItem[],
    width?: string
    trigger?: 'hover' | 'click'
    positions?: ('top' | 'bottom' | 'left' | 'right')[]
    isCollapsible?: boolean
  }>(),
  {
    trigger: 'hover',
    positions: () => ['right'],
    isCollapsible: true
  }
)
>>>>>>> d84b676 (New)
=======
>>>>>>> ef0d75b (Update error)
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ef0d75b (Update error)
  tooltipStyle.value = {
    top: `${rect.top + rect.height / 2}px`,
    left: `${rect.right + 10}px`,
    transform: 'translateY(-50%)'
<<<<<<< HEAD
  }
=======
  const position = props.positions[0]

  const style: Record<string, string> = {
    position: 'fixed'
  }

  switch (position) {
    case 'bottom':
      style.top = `${rect.bottom + 10}px`
      style.left = `${rect.left + rect.width / 2}px`
      style.transform = 'translateX(-50%)'
      break

    case 'left':
      style.top = `${rect.top + rect.height / 2}px`
      style.left = `${rect.left - 10}px`
      style.transform = 'translate(-100%, -50%)'
      break

    case 'top':
      style.top = `${rect.top - 10}px`
      style.left = `${rect.left + rect.width / 2}px`
      style.transform = 'translate(-50%, -100%)'
      break

    default:
      style.top = `${rect.top + rect.height / 2}px`
      style.left = `${rect.right + 10}px`
      style.transform = 'translateY(-50%)'
  }

  if (props.width) {
    style.width = props.width
  }

  tooltipStyle.value = style
>>>>>>> d84b676 (New)
=======
  }
>>>>>>> ef0d75b (Update error)
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
<<<<<<< HEAD
<<<<<<< HEAD
  show()
=======
  if(!props.isCollapsible) return show()
>>>>>>> d84b676 (New)
=======
  show()
>>>>>>> ef0d75b (Update error)
}

const onTriggerLeave = () => {
  isHoveringTrigger.value = false

  if (!hasChildren.value) {
    hide()
    return
  }

  hide()
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
const toggle = () => {
  visible.value ? hide() : show()
}

>>>>>>> d84b676 (New)
=======
>>>>>>> ef0d75b (Update error)

const onTooltipEnter = () => {
  isHoveringTooltip.value = true
  clearHideTimer()
}

const onTooltipLeave = () => {
  isHoveringTooltip.value = false
  hide()
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d84b676 (New)
=======
>>>>>>> ef0d75b (Update error)
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
<<<<<<< HEAD
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> d84b676 (New)
=======
</style>
>>>>>>> ef0d75b (Update error)
