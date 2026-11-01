<template>
  <div class="invite-page">
    <!-- Loading -->
    <div v-if="loading" class="w-state" :style="{ background: inviteTheme?.bg || '#0c0a06' }">
      <div
        class="w-spinner"
        :style="{ borderColor: (inviteTheme?.primary || '#c9a84c') + '33', borderTopColor: inviteTheme?.primary || '#c9a84c' }" />
      <p
        class="w-state-text"
        :style="{ color: (inviteTheme?.primary || '#c9a84c') + '99' }">
        {{ tr('common.loading') }}
      </p>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="w-state" :style="{ background: inviteTheme?.bg || '#0c0a06' }">
      <div class="w-state-emoji">💔</div>
      <p class="w-state-msg">{{ tr('invite.not_found') }}</p>
      <p class="w-state-detail">{{ error }}</p>
    </div>

    <!-- Dynamic template -->
    <component
      :is="templateComponent"
      v-else-if="inv"
      :inv="inv"
      :token="token"
      :theme="inviteTheme"
    />
  </div>
</template>

<script setup>
import Classic   from '~/components/InviteTemplate/Classic.vue'
import Garden    from '~/components/InviteTemplate/Garden.vue'
import Modern    from '~/components/InviteTemplate/Modern.vue'
import Royal     from '~/components/InviteTemplate/Royal.vue'
import Rustic    from '~/components/InviteTemplate/Rustic.vue'
import Sakura    from '~/components/InviteTemplate/Sakura.vue'
import Midnight  from '~/components/InviteTemplate/Midnight.vue'
import Boho      from '~/components/InviteTemplate/Boho.vue'
import Celestial from '~/components/InviteTemplate/Celestial.vue'
import Tropical  from '~/components/InviteTemplate/Tropical.vue'
import Heirloom  from '~/components/InviteTemplate/Heirloom.vue'

import { parseInviteColors, INVITE_SCHEMES } from '~/composables/useInviteTheme'
import { BUILTIN_TEMPLATES } from '~/composables/useLetterData'

definePageMeta({ layout: false })

const { tr } = useTr()
const route = useRoute()
const token = route.params.token

function getBase() {
  const tmpServer = useCookie('tmp_server').value
  const { config } = helper()
  return (tmpServer || config.apiUrl || '').replace(/\/$/, '')
}

const loading = ref(true)
const error = ref('')
const inv = ref(null)

const TEMPLATE_MAP = {
  classic:  Classic,
  royal:    Royal,
  modern:   Modern,
  blossom:  Sakura,
  forest:   Garden,
  midnight: Midnight,
  vintage:  Rustic,
  garden:   Garden,
  rustic:   Rustic,
  sakura:   Sakura,
  boho:     Boho,
  celestial: Celestial,
  tropical: Tropical,
  heirloom: Heirloom,
}

const templateComponent = computed(() => {
  const key = (inv.value?.activeTemplateKey || 'classic').toLowerCase()
  return TEMPLATE_MAP[key] || Classic
})

const inviteTheme = computed(() => {
  if (inv.value?.inviteColors) {
    const parsed = parseInviteColors(inv.value.inviteColors)
    if (parsed) return parsed
  }
  const key = (inv.value?.activeTemplateKey || 'classic').toLowerCase()
  const builtin = BUILTIN_TEMPLATES.find(t => t.id === key)
  if (builtin?.vars) {
    return {
      primary:   builtin.vars['--lt-primary']   || builtin.vars['--inv-primary']   || INVITE_SCHEMES[0].primary,
      secondary: builtin.vars['--lt-secondary'] || builtin.vars['--inv-secondary'] || INVITE_SCHEMES[0].secondary,
      bg:        builtin.vars['--lt-bg']        || builtin.vars['--inv-bg']        || INVITE_SCHEMES[0].bg,
      text:      builtin.vars['--lt-text']      || builtin.vars['--inv-text']      || INVITE_SCHEMES[0].text,
    }
  }
  return INVITE_SCHEMES[0]
})

onMounted(async () => {
  try {
    const BASE = getBase()
    const res = await fetch(`${BASE}/api/v1/invite/${token}`)
    const json = await res.json()
    if (!res.ok) throw new Error(json.message || 'Invitation not found')
    inv.value = json.data
    fetch(`${BASE}/api/v1/invite/${token}/track`, { method: 'POST' }).catch(() => {})
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
})
</script>

<style lang="scss" scoped>
.invite-page {
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

.w-state {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
  padding: 2rem;
}

.w-spinner {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 9999px;
  border: 2px solid transparent;
  animation: w-spin 0.9s linear infinite;
}

.w-state-text {
  font-size: 14px;
  letter-spacing: 0.2em;
  font-family: Hanuman, sans-serif;
}

.w-state-emoji {
  font-size: 3.75rem;
}

.w-state-msg {
  color: #ffffff99;
  font-size: 16px;
  margin-bottom: 8px;
}

.w-state-detail {
  color: #ffffff40;
  font-size: 13px;
}

@keyframes w-spin {
  to { transform: rotate(360deg); }
}
</style>
