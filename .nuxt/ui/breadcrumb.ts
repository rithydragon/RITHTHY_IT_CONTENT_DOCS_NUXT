const color = [
  "primary",
  "error",
  "neutral"
] as const

export default {
  "slots": {
    "root": "relative min-w-0",
    "list": "flex items-center gap-1.5",
    "item": "flex min-w-0",
    "link": "group relative flex items-center gap-1.5 text-sm min-w-0 rounded-md",
    "linkLeadingIcon": "shrink-0 size-5",
    "linkLeadingAvatar": "shrink-0",
    "linkLeadingAvatarSize": "2xs",
    "linkLabel": "truncate",
    "separator": "flex",
    "separatorIcon": "shrink-0 size-5 text-muted"
  },
  "variants": {
    "active": {
      "true": {
        "link": "font-semibold"
      },
      "false": {
        "link": "text-muted font-medium"
      }
    },
    "disabled": {
      "true": {
        "link": "cursor-not-allowed opacity-75"
      }
    },
    "to": {
      "true": ""
    },
    "color": {
      "primary": {
        "link": "outline-primary/25 focus-visible:outline-3"
      },
      "error": {
        "link": "outline-error/25 focus-visible:outline-3"
      },
      "neutral": {
        "link": "outline-inverted/25 focus-visible:outline-3"
      }
    }
  },
  "compoundVariants": [
    {
      "disabled": false,
      "active": false,
      "to": true,
      "class": {
        "link": [
          "hover:text-default",
          "transition-colors"
        ]
      }
    },
    {
      "color": "primary" as typeof color[number],
      "active": true,
      "class": {
        "link": "text-primary"
      }
    },
    {
      "color": "error" as typeof color[number],
      "active": true,
      "class": {
        "link": "text-error"
      }
    },
    {
      "color": "neutral" as typeof color[number],
      "active": true,
      "class": {
        "link": "text-highlighted"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary" as typeof color[number]
  }
}