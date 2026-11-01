<template>
  <!--
    HeirloomLogo — reusable name logo for the "Heirloom" invite template.
    Groom's short name (top-left) and bride's (bottom-right) in Moulpali gold foil,
    joined by a flourish line, a small heart and a butterfly, under a small crest.

    Khmer rules honoured here:
      - Khmer is never rendered inside SVG <text>; names are HTML layered over the SVG.
      - gold-foil background-clip:text gets extra padding (.3em top / .2em bottom).
      - line reveals use negative clip-path insets and clear the clip after.
  -->
  <div ref="root" class="hl" :class="[`hl--${size}`, { 'hl--animate': animate }]">
    <!-- small decorative crest (original artwork) -->
    <svg class="hl__crest" viewBox="0 0 120 54" fill="none" aria-hidden="true">
      <path
        d="M60 6c4.6 7.6 12.4 11.6 22 13.8M60 6c-4.6 7.6-12.4 11.6-22 13.8"
        stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
      <path
        d="M60 12c3.2 4.4 7.4 7 12.6 8.6M60 12c-3.2 4.4-7.4 7-12.6 8.6"
        stroke="currentColor" stroke-width="1.1" stroke-linecap="round" opacity=".7" />
      <path
        d="M60 3.4c1.9 2.2 3 4.4 3 6.7 0 2.3-1.1 4.5-3 6.6-1.9-2.1-3-4.3-3-6.6 0-2.3 1.1-4.5 3-6.7Z"
        stroke="currentColor" stroke-width="1.2" />
      <path d="M32 34h56" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity=".55" />
      <circle cx="60" cy="34" r="3.1" stroke="currentColor" stroke-width="1.1" />
      <circle cx="60" cy="34" r="0.9" fill="currentColor" />
      <path d="M40 40c6 4 14 6 20 6s14-2 20-6" stroke="currentColor" stroke-width="1"
        stroke-linecap="round" opacity=".45" />
    </svg>

    <div class="hl__body">
      <div class="hl__name hl__name--groom">
        <span ref="groomReveal" class="hl__reveal"><span class="hl__foil">{{ groomShort }}</span></span>
      </div>

      <!-- flourish + heart + butterfly -->
      <svg ref="flourishSvg" class="hl__flourish" viewBox="0 0 220 120" fill="none" aria-hidden="true">
        <path ref="flourishPath"
          d="M8 104c26 2 42-8 54-26 9-13 16-30 30-40 13-9 28-12 44-9"
          stroke="url(#hlFoil)" stroke-width="1.6" stroke-linecap="round" />
        <path
          d="M136 29c9-6 20-6 27 1-7 2-11 6-13 12-3-6-8-10-14-13Z"
          stroke="url(#hlFoil)" stroke-width="1.2" stroke-linejoin="round" />
        <defs>
          <linearGradient id="hlFoil" x1="0" y1="0" x2="220" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#8a6d1f" />
            <stop offset=".35" stop-color="#f2dd9a" />
            <stop offset=".5" stop-color="#fff7d6" />
            <stop offset=".7" stop-color="#d4af37" />
            <stop offset="1" stop-color="#9c7b22" />
          </linearGradient>
        </defs>
      </svg>

      <span ref="heart" class="hl__heart" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M12 21s-7.5-4.7-9.8-9.2C.8 9.1 2.3 5.6 5.6 4.7c2.1-.6 4.2.3 5.4 2 .4.5.6 1 .6 1s.2-.5.6-1c1.2-1.7 3.3-2.6 5.4-2 3.3.9 4.8 4.4 3.4 7.1C19.5 16.3 12 21 12 21Z"
            fill="url(#hlHeartFoil)" />
          <defs>
            <linearGradient id="hlHeartFoil" x1="2" y1="4" x2="22" y2="21" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#f7e7a2" />
              <stop offset=".5" stop-color="#d4af37" />
              <stop offset="1" stop-color="#8a6d1f" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      <span ref="butterfly" class="hl__butterfly" aria-hidden="true">
        <svg viewBox="0 0 40 32" fill="none">
          <path d="M20 16c-2-6-7-10-12-8-4 1.6-4 8 1 10 3.4 1.4 8 .5 11-2Z" fill="url(#hlWing)" opacity=".95" />
          <path d="M20 16c2-6 7-10 12-8 4 1.6 4 8-1 10-3.4 1.4-8 .5-11-2Z" fill="url(#hlWing)" opacity=".95" />
          <path d="M20 17c-1.4 3-4 4.6-6.2 4-2-.5-2-3.2.3-3.8 2-.5 4.1-.4 5.9-.2Z" fill="url(#hlWing)" opacity=".8" />
          <path d="M20 17c1.4 3 4 4.6 6.2 4 2-.5 2-3.2-.3-3.8-2-.5-4.1-.4-5.9-.2Z" fill="url(#hlWing)" opacity=".8" />
          <path d="M20 9.5v13" stroke="#6b5318" stroke-width="1.2" stroke-linecap="round" />
          <path d="M20 9.5c-.8-1.6-2-2.6-3.4-3M20 9.5c.8-1.6 2-2.6 3.4-3" stroke="#6b5318" stroke-width="1"
            stroke-linecap="round" />
          <defs>
            <linearGradient id="hlWing" x1="3" y1="6" x2="37" y2="26" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#f7e7a2" />
              <stop offset=".55" stop-color="#d4af37" />
              <stop offset="1" stop-color="#a97f1c" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      <div class="hl__name hl__name--bride">
        <span ref="brideReveal" class="hl__reveal"><span class="hl__foil">{{ brideShort }}</span></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  groomName: { type: String, default: '' },
  brideName: { type: String, default: '' },
  size: { type: String, default: 'md' }, // sm | md | lg | xl
  animate: { type: Boolean, default: false },
})

const root = ref(null)
const groomReveal = ref(null)
const brideReveal = ref(null)
const flourishPath = ref(null)
const heart = ref(null)
const butterfly = ref(null)

// Short name = first whitespace-separated token (works for Khmer and Latin).
function shortName(value, fallback) {
  const v = (value || '').trim()
  if (!v) return fallback
  return v.split(/\s+/)[0]
}

const groomShort = computed(() => shortName(props.groomName, 'កូនកំលោះ'))
const brideShort = computed(() => shortName(props.brideName, 'កូនក្រមុំ'))

onMounted(async () => {
  if (!props.animate) return
  if (typeof window === 'undefined') return
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
  if (reduce) return

  let gsap
  try {
    const mod = await import('gsap')
    gsap = mod.gsap || mod.default
  } catch {
    return
  }
  if (!gsap) return

  const HIDDEN = 'inset(-40% 110% -40% -10%)'
  const SHOWN = 'inset(-40% -10% -40% -10%)'

  gsap.set([groomReveal.value, brideReveal.value], { clipPath: HIDDEN, willChange: 'clip-path' })
  gsap.set(heart.value, { scale: 0, transformOrigin: '50% 60%', opacity: 0 })
  gsap.set(butterfly.value, { x: -46, y: 26, rotation: -22, opacity: 0, scale: 0.6 })

  let pathLen = 240
  const p = flourishPath.value
  if (p && typeof p.getTotalLength === 'function') pathLen = p.getTotalLength()
  gsap.set(p, { strokeDasharray: pathLen, strokeDashoffset: pathLen })

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.to(groomReveal.value, { clipPath: SHOWN, duration: 0.9 })
    .to(p, { strokeDashoffset: 0, duration: 1.0, ease: 'power2.inOut' }, '-=0.35')
    .to(butterfly.value, { x: 0, y: 0, rotation: 0, opacity: 1, scale: 1, duration: 1.1, ease: 'power2.out' }, '-=0.85')
    .to(heart.value, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2.4)' }, '-=0.5')
    .to(brideReveal.value, { clipPath: SHOWN, duration: 0.9 }, '-=0.35')
    .set([groomReveal.value, brideReveal.value], { clearProps: 'clipPath,willChange' })
})
</script>

<style scoped>
.hl {
  --hl-foil: linear-gradient(120deg, #8a6d1f 0%, #d4af37 18%, #f8e9ad 36%, #fff7d6 50%, #d4af37 64%, #9c7b22 82%, #e8c96a 100%);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  color: #d4af37;
  user-select: none;
}
.hl--sm { font-size: 13px; }
.hl--md { font-size: 20px; }
.hl--lg { font-size: 32px; }
.hl--xl { font-size: 46px; }

.hl__crest {
  width: 6.2em;
  height: auto;
  color: #d4af37;
  opacity: 0.95;
  margin-bottom: 0.15em;
}

.hl__body {
  position: relative;
  width: 13em;
  height: 6.6em;
}

.hl__name {
  position: absolute;
  font-family: 'Moulpali', 'Moul', serif;
  line-height: 1.6;
  white-space: nowrap;
}
.hl__name--groom { top: 0; left: 0; }
.hl__name--bride { bottom: 0; right: 0; }

.hl__reveal { display: inline-block; }

.hl__foil {
  display: inline-block;
  font-family: 'Moulpali', 'Moul', serif;
  background: var(--hl-foil);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  /* Khmer foil needs breathing room so the tops of ឹ/់ and subscripts are not cut */
  padding: 0.3em 0.2em 0.2em;
  line-height: 1.7;
  filter: drop-shadow(0 1px 1px rgba(60, 40, 6, 0.35));
}

.hl__flourish {
  position: absolute;
  left: 50%;
  top: 46%;
  width: 11.5em;
  height: 6.3em;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.hl__heart {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1.15em;
  height: 1.15em;
  transform: translate(-50%, -50%);
  filter: drop-shadow(0 1px 1px rgba(60, 40, 6, 0.35));
}
.hl__heart svg { width: 100%; height: 100%; display: block; }

.hl__butterfly {
  position: absolute;
  right: 8%;
  top: 4%;
  width: 1.5em;
  height: 1.2em;
  filter: drop-shadow(0 1px 2px rgba(60, 40, 6, 0.3));
}
.hl__butterfly svg { width: 100%; height: 100%; display: block; }

/* gentle idle sheen on the foil (kept to the one big gold element) */
.hl--animate .hl__foil { animation: hlSheen 6s ease-in-out infinite; }
@keyframes hlSheen {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
@media (prefers-reduced-motion: reduce) {
  .hl--animate .hl__foil { animation: none; }
}
</style>
