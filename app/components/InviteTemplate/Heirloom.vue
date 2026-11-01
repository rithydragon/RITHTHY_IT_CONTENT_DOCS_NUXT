<template>
  <!--
    Heirloom — cinematic Khmer wedding e-invitation (ធៀបការឌីជីថល).
    PHASE 1: Envelope screen → sealed opening animation → merged cover/hero.

    Data comes from the public invite payload (`inv` = QrActionResponse).
    Khmer is never rendered inside SVG <text> — all Khmer is HTML layered over SVG.
    Palette: warm cream paper, olive accents, metallic gold foil, near-black photo sections.
  -->
  <div ref="root" class="hi-root" :class="{ 'is-en': lang === 'en' }" :style="rootVars">
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Moul&family=Moulpali&family=Kantumruy+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Pinyon+Script&display=swap"
        rel="stylesheet" />
    </Head>

    <!-- shared SVG defs: flap clip (scalloped), foil gradients -->
    <svg class="hi-defs" width="0" height="0" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="hiFlapClip" clipPathUnits="objectBoundingBox">
          <path
            d="M0 0 H1 V0.54 q-0.0715 0.14 -0.1428 0 q-0.0715 0.14 -0.1428 0 q-0.0715 0.14 -0.1428 0 q-0.0715 0.14 -0.1428 0 q-0.0715 0.14 -0.1428 0 q-0.0715 0.14 -0.1428 0 q-0.0715 0.14 -0.1430 0 Z" />
        </clipPath>
        <linearGradient id="hiFoil" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#8a6d1f" />
          <stop offset="0.22" stop-color="#f2dd9a" />
          <stop offset="0.5" stop-color="#fff7d6" />
          <stop offset="0.7" stop-color="#d4af37" />
          <stop offset="1" stop-color="#9c7b22" />
        </linearGradient>
      </defs>
    </svg>

    <audio ref="audio" loop preload="none" :src="musicSrc || undefined" style="display: none" />

    <!-- ══════════════════════ ENVELOPE SCREEN ══════════════════════ -->
    <section v-if="!opened" ref="envScreen" class="hi-env-screen">
      <div class="hi-env-bg" :style="envBgStyle"></div>
      <div class="hi-env-veil"></div>

      <header class="hi-env-head">
        <p class="hi-env-head__km">{{ lang === 'en' ? 'Wedding Invitation' : 'សិរីសួស្តីអាពាហ៍ពិពាហ៍' }}</p>
        <p class="hi-env-head__en">{{ lang === 'en' ? 'The Wedding Invitation' : 'The Wedding Invitation' }}</p>
      </header>

      <div ref="stage" class="hi-stage">
        <div ref="envelope" class="hi-env">
          <!-- back panel -->
          <div class="hi-env__back hi-paper"></div>

          <!-- card inside the pocket -->
          <div ref="card" class="hi-card hi-paper">
            <svg class="hi-card__crest" viewBox="0 0 120 54" fill="none" aria-hidden="true">
              <path d="M60 6c4.6 7.6 12.4 11.6 22 13.8M60 6c-4.6 7.6-12.4 11.6-22 13.8"
                stroke="url(#hiFoil)" stroke-width="1.4" stroke-linecap="round" />
              <path d="M60 3.4c1.9 2.2 3 4.4 3 6.7 0 2.3-1.1 4.5-3 6.6-1.9-2.1-3-4.3-3-6.6 0-2.3 1.1-4.5 3-6.7Z"
                stroke="url(#hiFoil)" stroke-width="1.2" />
            </svg>
            <div class="hi-card__names">
              <span class="hi-foil">{{ groomShort }}</span>
              <span class="hi-card__amp">&amp;</span>
              <span class="hi-foil">{{ brideShort }}</span>
            </div>
            <div class="hi-card__rule"></div>
            <p class="hi-card__date">{{ dateShortKh }}</p>
          </div>

          <!-- front pocket: left / right / bottom folded panels -->
          <div class="hi-env__pocket">
            <div ref="flapShadow" class="hi-flap-shadow"></div>
            <div class="hi-panel hi-panel--left hi-paper"></div>
            <div class="hi-panel hi-panel--right hi-paper"></div>
            <div class="hi-panel hi-panel--bottom hi-paper"></div>
          </div>

          <!-- scalloped flap with name logo + gold line -->
          <div ref="flap" class="hi-env__flap">
            <div class="hi-flap-outer hi-paper">
              <HeirloomLogo :groom-name="groomName" :bride-name="brideName" size="sm" />
              <svg class="hi-flap-line" viewBox="0 0 200 16" fill="none" aria-hidden="true">
                <path
                  d="M4 10c10 0 12-6 24-6s14 6 26 6 14-6 26-6 14 6 26 6 14-6 26-6 14 6 26 6 14-6 22-6"
                  stroke="url(#hiFoil)" stroke-width="1.4" stroke-linecap="round" />
                <circle cx="100" cy="10" r="2.4" fill="url(#hiFoil)" />
              </svg>
            </div>
            <div class="hi-flap-lining"></div>
          </div>
        </div>

        <!-- wax seal (button) -->
        <button ref="seal" class="hi-seal" type="button" @click="openEnvelope"
          :aria-label="lang === 'en' ? 'Open the invitation' : 'បើកសំបុត្រអញ្ជើញ'">
          <span class="hi-seal__wax">
            <svg class="hi-seal__crest" viewBox="0 0 100 100" fill="none" aria-hidden="true">
              <circle cx="50" cy="50" r="30" stroke="rgba(255,244,214,.75)" stroke-width="2" />
              <path d="M50 24c5 8 13 12 22 14M50 24c-5 8-13 12-22 14" stroke="rgba(255,244,214,.75)"
                stroke-width="2" stroke-linecap="round" />
              <path d="M50 40c2.6 3 4 5.6 4 8.4S52.6 54 50 56.4c-2.6-2.4-4-5.2-4-8 0-2.8 1.4-5.4 4-8.4Z"
                stroke="rgba(255,244,214,.8)" stroke-width="1.6" />
              <path d="M34 62h32M38 70h24" stroke="rgba(255,244,214,.6)" stroke-width="2"
                stroke-linecap="round" />
            </svg>
          </span>
        </button>
      </div>

      <p ref="tapHint" class="hi-tap-hint">
        {{ lang === 'en' ? 'Tap the seal to open' : 'ចុចត្រាបិទភ្ជាប់ ដើម្បីបើក' }}
      </p>
    </section>

    <!-- ══════════════════════ COVER / HERO ══════════════════════ -->
    <section v-else ref="cover" class="hi-cover">
      <div class="hi-cover__bg" :style="coverBgStyle"></div>
      <div class="hi-cover__grad"></div>

      <!-- corner decorative elements (original artwork; mirrored inside the SVG via <g>) -->
      <svg class="hi-corner hi-corner--tl" viewBox="0 0 170 170" fill="none" aria-hidden="true">
        <g stroke="url(#hiFoil)" stroke-width="1.3" stroke-linecap="round" fill="none">
          <path d="M6 6c30 2 56 14 74 36 8 10 12 22 13 36" />
          <path d="M6 6c2 26 12 48 30 64" />
          <path d="M22 20c14 2 26 10 34 22 5 8 7 16 8 26" opacity=".8" />
          <path d="M18 46c-8-2-14-8-16-16 10-2 18 2 22 10" />
          <path d="M44 18c-2-8-8-14-16-16-2 10 2 18 10 22" opacity=".85" />
          <circle cx="60" cy="60" r="3.2" fill="url(#hiFoil)" stroke="none" />
        </g>
      </svg>
      <svg class="hi-corner hi-corner--tr" viewBox="0 0 170 170" fill="none" aria-hidden="true">
        <g transform="translate(170 0) scale(-1 1)" stroke="url(#hiFoil)" stroke-width="1.3"
          stroke-linecap="round" fill="none">
          <path d="M6 6c30 2 56 14 74 36 8 10 12 22 13 36" />
          <path d="M6 6c2 26 12 48 30 64" />
          <path d="M22 20c14 2 26 10 34 22 5 8 7 16 8 26" opacity=".8" />
          <path d="M18 46c-8-2-14-8-16-16 10-2 18 2 22 10" />
          <circle cx="60" cy="60" r="3.2" fill="url(#hiFoil)" stroke="none" />
        </g>
      </svg>
      <svg class="hi-corner hi-corner--bl" viewBox="0 0 170 170" fill="none" aria-hidden="true">
        <g transform="translate(0 170) scale(1 -1)" stroke="url(#hiFoil)" stroke-width="1.3"
          stroke-linecap="round" fill="none">
          <path d="M6 6c30 2 56 14 74 36 8 10 12 22 13 36" />
          <path d="M6 6c2 26 12 48 30 64" />
          <path d="M22 20c14 2 26 10 34 22 5 8 7 16 8 26" opacity=".8" />
          <circle cx="60" cy="60" r="3.2" fill="url(#hiFoil)" stroke="none" />
        </g>
      </svg>
      <svg class="hi-corner hi-corner--br" viewBox="0 0 170 170" fill="none" aria-hidden="true">
        <g transform="translate(170 170) scale(-1 -1)" stroke="url(#hiFoil)" stroke-width="1.3"
          stroke-linecap="round" fill="none">
          <path d="M6 6c30 2 56 14 74 36 8 10 12 22 13 36" />
          <path d="M6 6c2 26 12 48 30 64" />
          <path d="M22 20c14 2 26 10 34 22 5 8 7 16 8 26" opacity=".8" />
          <circle cx="60" cy="60" r="3.2" fill="url(#hiFoil)" stroke="none" />
        </g>
      </svg>

      <!-- top bar -->
      <header class="hi-topbar" :class="{ 'is-scrolled': scrolled }">
        <div class="hi-topbar__logo">
          <HeirloomLogo :groom-name="groomName" :bride-name="brideName" size="sm" />
        </div>
        <div class="hi-topbar__actions">
          <button class="hi-chip" type="button" @click="toggleLang">
            {{ lang === 'en' ? 'ខ្មែរ' : 'EN' }}
          </button>
          <button class="hi-chip hi-chip--icon" type="button" @click="toggleMusic"
            :aria-pressed="musicOn" :aria-label="lang === 'en' ? 'Music' : 'តន្ត្រី'">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path d="M9 18V6l10-2v12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                stroke-linejoin="round" />
              <circle cx="6.5" cy="18" r="2.6" stroke="currentColor" stroke-width="1.6" />
              <circle cx="16.5" cy="16" r="2.6" stroke="currentColor" stroke-width="1.6" />
              <path v-if="!musicOn" d="M3 3l18 18" stroke="currentColor" stroke-width="1.6"
                stroke-linecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <div class="hi-hero">
        <svg class="hi-hero__crest" viewBox="0 0 140 60" fill="none" aria-hidden="true">
          <path d="M70 8c6 9 15 14 27 17M70 8c-6 9-15 14-27 17" stroke="url(#hiFoil)" stroke-width="1.4"
            stroke-linecap="round" />
          <path d="M70 4c2.2 2.6 3.4 5.2 3.4 7.8S72.2 17 70 19.6c-2.2-2.6-3.4-5.2-3.4-7.8S67.8 6.6 70 4Z"
            stroke="url(#hiFoil)" stroke-width="1.2" />
          <path d="M48 40h44" stroke="url(#hiFoil)" stroke-width="1" stroke-linecap="round" opacity=".7" />
        </svg>

        <p class="hi-hero__kicker">{{ lang === 'en' ? 'The Wedding Invitation' : 'សិរីសួស្តីអាពាហ៍ពិពាហ៍' }}</p>

        <HeirloomLogo :groom-name="groomName" :bride-name="brideName" size="lg" :animate="logoAnimate" />

        <p class="hi-hero__en-names">
          <span>{{ groomEn }}</span>
          <span class="hi-hero__amp">&amp;</span>
          <span>{{ brideEn }}</span>
        </p>

        <p class="hi-hero__invite">{{ lang === 'en' ? 'Request the pleasure of your company' : 'សូមគោរពអញ្ជើញ' }}</p>

        <!-- date row: ថ្ងៃ | ទី | ខែ | ឆ្នាំ -->
        <div class="hi-daterow" v-if="hasDate">
          <template v-if="lang === 'en'">
            <span>{{ dateEn }}</span>
          </template>
          <template v-else>
            <span class="hi-daterow__cell">{{ dParts.dayName }}</span>
            <span class="hi-daterow__sep"></span>
            <span class="hi-daterow__cell">{{ dParts.day }}</span>
            <span class="hi-daterow__sep"></span>
            <span class="hi-daterow__cell">{{ dParts.month }}</span>
            <span class="hi-daterow__sep"></span>
            <span class="hi-daterow__cell">{{ dParts.year }}</span>
          </template>
        </div>

        <p class="hi-hero__lunar" v-if="lunarDate">{{ lunarDate }}</p>

        <div class="hi-hero__venue" v-if="venueText">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
            <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" stroke="currentColor"
              stroke-width="1.5" />
            <circle cx="12" cy="10" r="2.4" stroke="currentColor" stroke-width="1.5" />
          </svg>
          <span>{{ venueText }}</span>
        </div>
      </div>

      <div class="hi-scrollcue" aria-hidden="true">
        <span>{{ lang === 'en' ? 'Scroll' : 'រំកិលចុះក្រោម' }}</span>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import HeirloomLogo from '~/components/InviteTemplate/HeirloomLogo.vue'
import { useInviteActions } from '~/composables/useInviteActions'
import { useKhmerLunarDate } from '~/composables/useKhmerLunarDate'

const props = defineProps({
  inv: { type: Object, required: true },
  token: { type: String, default: '' },
  theme: { type: Object, default: () => null },
})

const a = useInviteActions(computed(() => props.inv), props.token)
const { toKhmerLunar } = useKhmerLunarDate()

const root = ref(null)
const stage = ref(null)
const envelope = ref(null)
const flap = ref(null)
const card = ref(null)
const seal = ref(null)
const flapShadow = ref(null)
const tapHint = ref(null)
const envScreen = ref(null)
const cover = ref(null)
const audio = ref(null)

const opened = ref(false)
const opening = ref(false)
const musicOn = ref(false)
const logoAnimate = ref(false)
const scrolled = ref(false)
const lang = ref('km')

let media = null
let lenis = null
let rafId = null
let reduceMotion = false
let gsapLib = null

// ── Data helpers ────────────────────────────────────────────────────────────
const groomName = computed(() => props.inv?.groomName || props.inv?.host2Name || 'កូនកំលោះ')
const brideName = computed(() => props.inv?.brideName || props.inv?.host1Name || 'កូនក្រមុំ')

function shortOf(v, fb) {
  const s = String(v || '').trim()
  return s ? s.split(/\s+/)[0] : fb
}
const groomShort = computed(() => shortOf(groomName.value, 'កូនកំលោះ'))
const brideShort = computed(() => shortOf(brideName.value, 'កូនក្រមុំ'))

// English display names: use explicit *En fields if the backend provides them.
const groomEn = computed(() => props.inv?.groomNameEn || groomName.value)
const brideEn = computed(() => props.inv?.brideNameEn || brideName.value)

const weddingDateStr = computed(
  () => props.inv?.weddingDate || props.inv?.eventDate || props.inv?.ceremonyDate || ''
)
const hasDate = computed(() => !!weddingDateStr.value && !Number.isNaN(new Date(weddingDateStr.value).getTime()))

const KH_MONTHS = ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ']
const KH_DAYS = ['អាទិត្យ', 'ចន្ទ', 'អង្គារ', 'ពុធ', 'ព្រហស្បតិ៍', 'សុក្រ', 'សៅរ៍']

function toKhmerDigits(input) {
  return String(input).replace(/[0-9]/g, (d) => '០១២៣៤៥៦៧៨៩'[Number(d)])
}

const dParts = computed(() => {
  if (!hasDate.value) return { dayName: '', day: '', month: '', year: '' }
  const d = new Date(weddingDateStr.value)
  const raw = {
    dayName: `ថ្ងៃ${KH_DAYS[d.getDay()]}`,
    day: `ទី ${toKhmerDigits(d.getDate())}`,
    month: `ខែ ${KH_MONTHS[d.getMonth()]}`,
    year: `ឆ្នាំ ${toKhmerDigits(d.getFullYear())}`,
  }
  return raw
})

const dateShortKh = computed(() => {
  if (!hasDate.value) return 'ថ្ងៃ ... ខែ ... ឆ្នាំ ...'
  const d = new Date(weddingDateStr.value)
  return `${toKhmerDigits(d.getDate())} ${KH_MONTHS[d.getMonth()]} ${toKhmerDigits(d.getFullYear())}`
})

const dateEn = computed(() => {
  if (!hasDate.value) return 'Date to be announced'
  return new Date(weddingDateStr.value).toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
})

const lunarDate = computed(() => {
  if (!hasDate.value) return ''
  return toKhmerLunar(weddingDateStr.value) || ''
})

const venueText = computed(
  () => props.inv?.venue || props.inv?.venueName || props.inv?.weddingLocation || props.inv?.ceremonyVenue || ''
)

const musicSrc = computed(() => {
  const u = props.inv?.musicUrl || ''
  return /\.(mp3|m4a|ogg|wav)(\?|$)/i.test(u) ? u : ''
})

// ── Styles / theme ──────────────────────────────────────────────────────────
const rootVars = computed(() => ({
  '--hi-gold': props.theme?.primary || '#d4af37',
  '--hi-olive': '#55632f',
}))

const envBgStyle = computed(() => {
  const img = props.inv?.coverImage || props.inv?.heroImage
  if (img) {
    return { backgroundImage: `url('${a.imgUrl(img)}')` }
  }
  return {
    backgroundImage:
      'radial-gradient(120% 90% at 50% 20%, #2a2a1c 0%, #14140d 60%, #0b0b07 100%)',
  }
})

const coverBgStyle = computed(() => {
  const img = props.inv?.coverImage || props.inv?.heroImage || props.inv?.shareImage
  if (img) {
    return { backgroundImage: `url('${a.imgUrl(img)}')` }
  }
  return {
    backgroundImage:
      'radial-gradient(120% 90% at 50% 25%, #33321f 0%, #1a1a10 55%, #0b0b07 100%)',
  }
})

// ── Locale + music ──────────────────────────────────────────────────────────
function toggleLang() {
  lang.value = lang.value === 'km' ? 'en' : 'km'
}
function toggleMusic() {
  musicOn.value = !musicOn.value
  const el = audio.value
  if (el) {
    if (musicOn.value) el.play?.().catch(() => {})
    else el.pause?.()
  }
}
function tryStartMusic() {
  const el = audio.value
  if (el && musicSrc.value) {
    el.play?.().then(() => { musicOn.value = true }).catch(() => {})
  }
}

// ── Opening sequence ────────────────────────────────────────────────────────
async function openEnvelope() {
  if (opening.value || opened.value) return
  opening.value = true
  tryStartMusic()

  if (reduceMotion || !gsapLib) {
    await nextTick()
    finishOpening()
    return
  }

  const gsap = gsapLib
  // seed the 3D state
  gsap.set(flap.value, { transformPerspective: 1400, transformOrigin: '50% 0%' })

  const tl = gsap.timeline({ onComplete: finishOpening })

  // 1 — the seal is pressed, then lifted away with a growing shadow
  tl.to(seal.value, { scale: 0.94, duration: 0.3, ease: 'power2.inOut' })
    .to(tapHint.value, { opacity: 0, duration: 0.3 }, '<')
    .to(seal.value, {
      y: -14, scale: 1.04, filter: 'drop-shadow(0 18px 16px rgba(0,0,0,.55))',
      duration: 0.6, ease: 'power2.out',
    })
    .to(seal.value, { x: '135vw', rotation: 48, opacity: 0, duration: 0.85, ease: 'power2.in' })

  // 2 — flap folds back 180°; its shadow lifts; once past 90° it drops behind the card
  tl.to(flapShadow.value, { opacity: 0, duration: 1.2, ease: 'power2.in' }, '-=0.5')
    .to(flap.value, {
      rotationX: -180, duration: 1.7, ease: 'power2.inOut',
      onUpdate() {
        const deg = Math.abs(this.progress() * 180)
        flap.value.style.zIndex = deg > 90 ? '-1' : '3'
      },
    }, '-=1.0')

  // 3 — card is drawn out of the pocket at a slight angle
  tl.to(card.value, { yPercent: -58, rotation: -3.5, duration: 1.5, ease: 'power2.out' }, '-=0.7')

  // 4 — the envelope drops down and out of frame
  tl.to(envelope.value, { yPercent: 78, opacity: 0, duration: 0.9, ease: 'power2.in' }, '-=0.75')

  // 5 — the card comes to the camera
  tl.to(card.value, { scale: 1.7, yPercent: -6, rotation: 0, duration: 1.0, ease: 'power2.inOut' }, '-=0.7')

  // 6 — fade through dark into the cover
  tl.to([root.value], { backgroundColor: '#000', duration: 0.5 }, '-=0.35')
}

function finishOpening() {
  opened.value = true
  opening.value = false
  nextTick(() => {
    logoAnimate.value = true
    initLenis()
    window.addEventListener('scroll', onScroll, { passive: true })
  })
}

// ── Scroll state (top-bar gradient) ─────────────────────────────────────────
function onScroll() {
  scrolled.value = window.scrollY > 24
}

// ── Lenis (desktop only) ────────────────────────────────────────────────────
async function initLenis() {
  if (reduceMotion) return
  if (typeof window === 'undefined') return
  if (window.innerWidth < 1024) return
  try {
    const mod = await import('lenis')
    const Lenis = mod.default || mod.Lenis
    if (!Lenis) return
    lenis = new Lenis({ smoothWheel: true, lerp: 0.1 })
    const raf = (t) => {
      lenis.raf(t)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)
  } catch {
    /* Lenis is a progressive enhancement — ignore failures */
  }
}

// ── Lifecycle ───────────────────────────────────────────────────────────────
onMounted(async () => {
  media = window.matchMedia?.('(prefers-reduced-motion: reduce)')
  reduceMotion = !!media?.matches
  try {
    const mod = await import('gsap')
    gsapLib = mod.gsap || mod.default
  } catch {
    gsapLib = null
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  if (rafId) cancelAnimationFrame(rafId)
  lenis?.destroy?.()
})
</script>

<style scoped>
/* ══════════════════════════ base ══════════════════════════ */
.hi-root {
  --hi-paper: #efe6cf;
  --hi-paper-2: #e5dabb;
  --hi-cream: #f7f0dd;
  --hi-olive: #55632f;
  --hi-olive-deep: #3c4720;
  --hi-ink: #2a2a20;
  --hi-night: #12110d;
  position: relative;
  width: 100%;
  background: var(--hi-night);
  color: #f3ecd9;
  font-family: 'Kantumruy Pro', 'Hanuman', sans-serif;
  overflow-x: clip;
}

.hi-defs { position: absolute; width: 0; height: 0; }

/* real-looking paper: fine grain + faint fibres, very low contrast */
.hi-paper {
  background-color: var(--hi-paper);
  background-image:
    repeating-linear-gradient(0deg, rgba(90, 70, 30, 0.035) 0 1px, transparent 1px 3px),
    repeating-linear-gradient(90deg, rgba(90, 70, 30, 0.03) 0 1px, transparent 1px 4px),
    linear-gradient(105deg, rgba(255, 255, 255, 0.28) 0%, transparent 35%, transparent 65%, rgba(120, 95, 40, 0.08) 100%),
    radial-gradient(140% 120% at 20% 0%, #fbf5e6 0%, var(--hi-paper) 45%, var(--hi-paper-2) 100%);
  background-blend-mode: multiply, multiply, normal, normal;
}

/* Khmer gold foil (HTML text only) */
.hi-foil {
  font-family: 'Moulpali', 'Moul', serif;
  background: linear-gradient(120deg, #8a6d1f 0%, #d4af37 20%, #f8e9ad 38%, #fff7d6 50%, #d4af37 64%, #9c7b22 82%, #e8c96a 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  padding: 0.3em 0.16em 0.2em;
  line-height: 1.7;
  display: inline-block;
}

/* ══════════════════════ envelope screen ══════════════════════ */
.hi-env-screen {
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(14px, 3.5vh, 30px);
  padding: max(env(safe-area-inset-top), 18px) 16px max(env(safe-area-inset-bottom), 18px);
  overflow: hidden;
  background: #0b0b07;
}
.hi-env-bg {
  position: absolute;
  inset: -6%;
  background-size: cover;
  background-position: center;
  filter: blur(18px) saturate(0.7) brightness(0.6);
  transform: scale(1.08);
}
.hi-env-veil {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(80% 60% at 50% 45%, rgba(11, 11, 7, 0.25) 0%, rgba(11, 11, 7, 0.82) 75%),
    linear-gradient(to bottom, rgba(11, 11, 7, 0.85), rgba(11, 11, 7, 0.55) 45%, rgba(11, 11, 7, 0.92));
}
.hi-env-head {
  position: relative;
  text-align: center;
  z-index: 2;
}
.hi-env-head__km {
  font-family: 'Moul', 'Moulpali', serif;
  font-size: clamp(19px, 5.4vw, 30px);
  line-height: 1.85;
  color: #efe4c6;
  margin: 0;
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.6);
}
.hi-env-head__en {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: clamp(10px, 2.8vw, 13px);
  color: rgba(212, 175, 55, 0.85);
  margin: 6px 0 0;
}

.hi-stage {
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1500px;
  transform-style: preserve-3d;
}

.hi-env {
  position: relative;
  width: 88%;
  max-width: 380px;
  aspect-ratio: 1.52 / 1;
  transform-style: preserve-3d;
  will-change: transform, opacity;
}

.hi-env__back {
  position: absolute;
  inset: 0;
  border-radius: 12px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.55), inset 0 0 0 1px rgba(90, 70, 30, 0.18);
}

/* card inside the pocket */
.hi-card {
  position: absolute;
  left: 4.5%;
  top: 4%;
  width: 91%;
  height: 96%;
  border-radius: 8px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.35), inset 0 0 0 1px rgba(90, 70, 30, 0.2);
  will-change: transform;
  overflow: hidden;
}
.hi-card__crest { width: 74px; height: auto; }
.hi-card__names {
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: clamp(15px, 4.6vw, 22px);
}
.hi-card__amp { color: #9c7b22; font-size: 0.7em; }
.hi-card__rule {
  width: 54%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #c9a84c, transparent);
}
.hi-card__date {
  font-family: 'Kantumruy Pro', sans-serif;
  color: #6b6236;
  font-size: 11px;
  margin: 0;
}

/* front pocket */
.hi-env__pocket {
  position: absolute;
  inset: 0;
  z-index: 2;
  border-radius: 12px;
  overflow: hidden;
  pointer-events: none;
}
.hi-panel { position: absolute; }
.hi-panel--bottom {
  left: 0; right: 0; bottom: 0;
  height: 62%;
  clip-path: polygon(0 22%, 50% 0, 100% 22%, 100% 100%, 0 100%);
  box-shadow: 0 -6px 14px rgba(60, 45, 15, 0.22);
}
.hi-panel--left {
  left: 0; top: 0; bottom: 0;
  width: 52%;
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 46%);
  box-shadow: 6px 0 14px rgba(60, 45, 15, 0.16);
}
.hi-panel--right {
  right: 0; top: 0; bottom: 0;
  width: 52%;
  clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 46%);
  box-shadow: -6px 0 14px rgba(60, 45, 15, 0.16);
}
.hi-flap-shadow {
  position: absolute;
  left: 0; right: 0; top: 0;
  height: 46%;
  background: linear-gradient(to bottom, rgba(40, 30, 10, 0.4), rgba(40, 30, 10, 0));
  z-index: 3;
}

/* flap */
.hi-env__flap {
  position: absolute;
  left: 0; right: 0; top: 0;
  height: 62%;
  z-index: 3;
  transform-style: preserve-3d;
  transform-origin: 50% 0%;
  will-change: transform;
}
.hi-flap-outer,
.hi-flap-lining {
  position: absolute;
  inset: 0;
  clip-path: url(#hiFlapClip);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 6%;
  box-shadow: 0 10px 22px rgba(50, 38, 12, 0.28);
}
.hi-flap-outer { transform: rotateX(0deg); }
.hi-flap-lining {
  transform: rotateX(180deg);
  background-color: var(--hi-cream);
  background-image:
    repeating-linear-gradient(0deg, rgba(90, 70, 30, 0.03) 0 1px, transparent 1px 3px),
    repeating-linear-gradient(90deg, rgba(90, 70, 30, 0.025) 0 1px, transparent 1px 4px),
    radial-gradient(120% 100% at 50% 0%, #fdf8ea 0%, #efe6cf 100%);
  justify-content: flex-end;
  padding-bottom: 6%;
}
.hi-flap-lining::after {
  content: '';
  width: 72%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #c9a84c, transparent);
  margin-bottom: 4%;
}
.hi-flap-line { width: 62%; height: auto; margin-top: 8px; }

/* wax seal */
.hi-seal {
  position: absolute;
  left: 50%;
  top: 58%;
  z-index: 4;
  width: clamp(74px, 22vw, 104px);
  height: clamp(74px, 22vw, 104px);
  transform: translate(-50%, -50%);
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
  filter: drop-shadow(0 10px 12px rgba(0, 0, 0, 0.5));
  animation: hiSealFloat 6s ease-in-out infinite;
}
@keyframes hiSealFloat {
  0%, 100% { transform: translate(-50%, -50%) translateY(0) rotate(0deg); }
  50% { transform: translate(-50%, -50%) translateY(-5px) rotate(-1.2deg); }
}
.hi-seal__wax {
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(60% 55% at 38% 32%, #b23a2c 0%, #8e2b20 42%, #6f1f17 100%);
  border-radius: 46% 54% 49% 51% / 53% 47% 55% 45%;
  box-shadow:
    inset 0 3px 6px rgba(255, 200, 160, 0.35),
    inset 0 -6px 10px rgba(40, 5, 0, 0.55),
    0 0 0 2px rgba(70, 15, 8, 0.35);
}
/* specular light */
.hi-seal__wax::after {
  content: '';
  position: absolute;
  inset: 8%;
  border-radius: 50%;
  background: radial-gradient(38% 32% at 34% 28%, rgba(255, 235, 210, 0.55), transparent 70%);
  pointer-events: none;
}
.hi-seal__crest { width: 62%; height: 62%; position: relative; z-index: 1; }

.hi-tap-hint {
  position: relative;
  z-index: 2;
  font-family: 'Kantumruy Pro', sans-serif;
  font-size: clamp(11px, 3vw, 13px);
  letter-spacing: 0.05em;
  color: rgba(239, 228, 198, 0.72);
  margin: 0;
  text-align: center;
}

/* ══════════════════════ cover ══════════════════════ */
.hi-cover {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--hi-night);
}
.hi-cover__bg {
  position: absolute;
  inset: -4%;
  background-size: cover;
  background-position: center;
  filter: saturate(0.72) brightness(0.72);
  transform: scale(1.06);
}
.hi-cover__grad {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(90% 70% at 50% 30%, rgba(10, 10, 6, 0.18) 0%, rgba(10, 10, 6, 0.8) 78%),
    linear-gradient(to bottom, rgba(10, 10, 6, 0.72), rgba(10, 10, 6, 0.42) 40%, rgba(10, 10, 6, 0.95));
}

.hi-corner {
  position: absolute;
  width: clamp(80px, 20vw, 150px);
  height: auto;
  opacity: 0.85;
  pointer-events: none;
}
.hi-corner--tl { top: max(env(safe-area-inset-top), 8px); left: 8px; }
.hi-corner--tr { top: max(env(safe-area-inset-top), 8px); right: 8px; }
.hi-corner--bl { bottom: max(env(safe-area-inset-bottom), 8px); left: 8px; }
.hi-corner--br { bottom: max(env(safe-area-inset-bottom), 8px); right: 8px; }

.hi-topbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: max(env(safe-area-inset-top), 10px) 14px 10px;
  transition: background 0.35s ease, backdrop-filter 0.35s ease;
}
.hi-topbar.is-scrolled {
  background: linear-gradient(to bottom, rgba(10, 10, 6, 0.85), rgba(10, 10, 6, 0));
  backdrop-filter: blur(6px);
}
.hi-topbar__logo { transform: scale(0.82); transform-origin: left center; }
.hi-topbar__actions { display: flex; gap: 8px; }
.hi-chip {
  min-width: 40px;
  height: 34px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid rgba(212, 175, 55, 0.5);
  background: rgba(20, 20, 13, 0.42);
  color: #efe4c6;
  font-family: 'Kantumruy Pro', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(6px);
}
.hi-chip--icon { padding: 0 9px; }
.hi-chip:active { transform: scale(0.96); }

.hi-hero {
  position: relative;
  z-index: 5;
  width: 100%;
  max-width: 760px;
  padding: clamp(56px, 10vh, 92px) 20px clamp(64px, 12vh, 96px);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: clamp(8px, 1.8vh, 18px);
}
.hi-hero__crest { width: clamp(96px, 26vw, 150px); height: auto; color: #d4af37; }
.hi-hero__kicker {
  font-family: 'Moul', 'Moulpali', serif;
  font-size: clamp(18px, 5vw, 30px);
  line-height: 1.85;
  color: #f2e8cd;
  margin: 0;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.7);
}
.hi-hero__en-names {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(20px, 5.6vw, 34px);
  letter-spacing: 0.04em;
  color: #ece0c2;
  margin: 2px 0 0;
  display: flex;
  align-items: center;
  gap: 0.5em;
  flex-wrap: wrap;
  justify-content: center;
}
.hi-hero__amp { color: #d4af37; font-family: 'Pinyon Script', cursive; font-size: 1.15em; }
.hi-hero__invite {
  font-family: 'Kantumruy Pro', serif;
  font-size: clamp(13px, 3.6vw, 17px);
  letter-spacing: 0.08em;
  color: rgba(243, 236, 217, 0.9);
  margin: 6px 0 0;
}
.hi-daterow {
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(6px, 2vw, 14px);
  font-family: 'Kantumruy Pro', sans-serif;
  font-size: clamp(12px, 3.4vw, 16px);
  color: #efe4c6;
  line-height: 1.9;
}
.hi-daterow__sep {
  width: 4px; height: 4px; border-radius: 50%;
  background: #d4af37; opacity: 0.8;
}
.hi-hero__lunar {
  font-family: 'Kantumruy Pro', sans-serif;
  font-size: clamp(11px, 3vw, 14px);
  line-height: 1.9;
  color: rgba(212, 175, 55, 0.92);
  margin: 2px 0 0;
}
.hi-hero__venue {
  margin-top: 6px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: 'Kantumruy Pro', sans-serif;
  font-size: clamp(12px, 3.3vw, 15px);
  color: rgba(243, 236, 217, 0.9);
  max-width: 90%;
}
.hi-hero__venue svg { color: #d4af37; flex-shrink: 0; }

.hi-scrollcue {
  position: absolute;
  bottom: max(env(safe-area-inset-bottom), 14px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  color: rgba(243, 236, 217, 0.72);
  font-family: 'Kantumruy Pro', sans-serif;
  font-size: 11px;
  letter-spacing: 0.14em;
  animation: hiCue 2.4s ease-in-out infinite;
}
@keyframes hiCue {
  0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.65; }
  50% { transform: translateX(-50%) translateY(6px); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .hi-seal { animation: none; }
  .hi-scrollcue { animation: none; }
}
</style>
