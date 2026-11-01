<template>
  <!--
    Public preview for the "Heirloom" invite template (Phase 1).
    Renders the real <Heirloom> component with a mock QrActionResponse payload
    so the envelope / opening / cover can be reviewed without backend setup.
    All names, dates and venue below are clearly-marked PLACEHOLDERS.
  -->
  <div class="preview">
    <div class="preview__badge">
      PREVIEW · Heirloom · placeholder content
    </div>

    <Heirloom :key="key" :inv="mockInv" token="" />

    <button class="preview__replay" type="button" @click="replay">
      ↺ Replay opening
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Heirloom from '~/components/InviteTemplate/Heirloom.vue'

definePageMeta({ layout: false })

const key = ref(0)

const mockInv = {
  // ── couple ──────────────────────────────────────────────────────────────
  groomName: 'សុខ វិសាល',
  brideName: 'ចាន់ ស្រីនី',
  groomNameEn: 'Visal Sok',
  brideNameEn: 'Sreyny Chan',
  // ── date / venue ────────────────────────────────────────────────────────
  weddingDate: '2026-11-28T06:30:00',
  venue: 'មជ្ឈមណ្ឌលសន្និបាត ផ្ការ៉ូស · Rose Garden Convention Center',
  weddingLocation: 'Phnom Penh, Cambodia',
  // ── media (stock placeholder — swap for the real couple photo) ───────────
  coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80',
  musicUrl: '',
  // ── misc used by shared composables ─────────────────────────────────────
  activeTemplateKey: 'heirloom',
  currentStatus: 'INVITED',
  showCountdown: true,
}

function replay() {
  key.value += 1 // remounts <Heirloom> to replay the opening sequence
}
</script>

<style scoped>
.preview { position: relative; min-height: 100svh; background: #0b0b07; }
.preview__badge {
  position: fixed;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  z-index: 9999;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(212, 175, 55, 0.16);
  border: 1px solid rgba(212, 175, 55, 0.5);
  color: #f2e4b8;
  font-family: ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.06em;
  pointer-events: none;
}
.preview__replay {
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 9999;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(20, 20, 13, 0.7);
  border: 1px solid rgba(212, 175, 55, 0.5);
  color: #f2e4b8;
  font-size: 12px;
  cursor: pointer;
}
</style>
