const color = [
  "primary",
  "error",
  "neutral"
] as const

export default {
  "slots": {
    "base": [
      "group relative block my-5 p-4 sm:p-6 border border-default rounded-md bg-default",
      "transition-colors"
    ],
    "icon": "size-6 mb-2 block",
    "title": "text-highlighted font-semibold",
    "description": "text-[15px] text-muted *:first:mt-0 *:last:mb-0 *:my-1",
    "externalIcon": [
      "size-4 align-top absolute end-2 top-2 text-dimmed pointer-events-none",
      "transition-colors"
    ]
  },
  "variants": {
    "color": {
      "primary": {
        "icon": "text-primary"
      },
      "error": {
        "icon": "text-error"
      },
      "neutral": {
        "icon": "text-highlighted"
      }
    },
    "to": {
      "true": ""
    },
    "title": {
      "true": {
        "description": "mt-1"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary" as typeof color[number],
      "to": true,
      "class": {
        "base": "hover:bg-primary/10 hover:border-primary outline-primary/25 has-[>a:focus-visible]:outline-3 has-[>a:focus-visible]:border-primary",
        "externalIcon": "group-hover:text-primary"
      }
    },
    {
      "color": "error" as typeof color[number],
      "to": true,
      "class": {
        "base": "hover:bg-error/10 hover:border-error outline-error/25 has-[>a:focus-visible]:outline-3 has-[>a:focus-visible]:border-error",
        "externalIcon": "group-hover:text-error"
      }
    },
    {
      "color": "neutral" as typeof color[number],
      "to": true,
      "class": {
        "base": "hover:bg-elevated/50 hover:border-inverted outline-inverted/25 has-[>a:focus-visible]:outline-3 has-[>a:focus-visible]:border-inverted",
        "externalIcon": "group-hover:text-highlighted"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary" as typeof color[number]
  }
}