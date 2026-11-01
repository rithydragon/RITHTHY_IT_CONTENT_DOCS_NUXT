const color = [
  "primary",
  "error",
  "neutral"
] as const

const variant = [
  "list",
  "card",
  "table"
] as const

const orientation = [
  "horizontal",
  "vertical"
] as const

const indicator = [
  "start",
  "end",
  "hidden"
] as const

const size = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl"
] as const

export default {
  "slots": {
    "root": "relative",
    "fieldset": "flex gap-x-2",
    "legend": "mb-1 block font-medium text-default",
    "item": "flex items-start",
    "container": "flex items-center",
    "base": "rounded-full ring ring-inset ring-accented overflow-hidden focus-visible:outline-none",
    "indicator": "flex items-center justify-center size-full after:bg-default after:rounded-full" as typeof indicator[number],
    "wrapper": "w-full",
    "label": "block font-medium text-default",
    "icon": "shrink-0",
    "description": "text-muted"
  },
  "variants": {
    "color": {
      "primary": {
        "indicator": "bg-primary" as typeof indicator[number]
      },
      "error": {
        "indicator": "bg-error" as typeof indicator[number]
      },
      "neutral": {
        "indicator": "bg-inverted" as typeof indicator[number]
      }
    },
    "variant": {
      "list": {
        "fieldset": "flex-wrap",
        "item": ""
      },
      "card": {
        "fieldset": "flex-wrap",
        "item": [
          "border border-default rounded-lg hover:not-has-disabled:not-has-aria-disabled:not-has-focus-visible:not-has-data-[state=checked]:bg-elevated/50",
          "transition-colors"
        ]
      },
      "table": {
        "item": [
          "border border-default hover:not-has-disabled:not-has-aria-disabled:not-has-focus-visible:not-has-data-[state=checked]:bg-elevated/50",
          "transition-colors"
        ]
      }
    },
    "orientation": {
      "horizontal": {
        "fieldset": "flex-row"
      },
      "vertical": {
        "fieldset": "flex-col"
      }
    },
    "indicator": {
      "start": {
        "item": "flex-row",
        "wrapper": "ms-2"
      },
      "end": {
        "item": "flex-row-reverse",
        "wrapper": "me-2"
      },
      "hidden": {
        "base": "sr-only",
        "wrapper": "flex flex-col items-center gap-1 text-center"
      }
    },
    "size": {
      "xs": {
        "fieldset": "gap-y-0.5",
        "legend": "text-xs",
        "base": "size-3",
        "item": "text-xs",
        "container": "h-4",
        "indicator": "after:size-1" as typeof indicator[number]
      },
      "sm": {
        "fieldset": "gap-y-0.5",
        "legend": "text-xs",
        "base": "size-3.5",
        "item": "text-xs",
        "container": "h-4",
        "indicator": "after:size-1" as typeof indicator[number]
      },
      "md": {
        "fieldset": "gap-y-1",
        "legend": "text-sm",
        "base": "size-4",
        "item": "text-sm",
        "container": "h-5",
        "indicator": "after:size-1.5" as typeof indicator[number]
      },
      "lg": {
        "fieldset": "gap-y-1",
        "legend": "text-sm",
        "base": "size-4.5",
        "item": "text-sm",
        "container": "h-5",
        "indicator": "after:size-1.5" as typeof indicator[number]
      },
      "xl": {
        "fieldset": "gap-y-1.5",
        "legend": "text-base",
        "base": "size-5",
        "item": "text-base",
        "container": "h-6",
        "indicator": "after:size-2" as typeof indicator[number]
      }
    },
    "highlight": {
      "true": "",
      "false": ""
    },
    "disabled": {
      "true": {
        "item": "opacity-75",
        "base": "cursor-not-allowed",
        "label": "cursor-not-allowed",
        "description": "cursor-not-allowed"
      }
    },
    "required": {
      "true": {
        "legend": "after:content-['*'] after:ms-0.5 after:text-error"
      }
    }
  },
  "compoundVariants": [
    {
      "indicator": "hidden" as typeof indicator[number],
      "class": {
        "container": "h-auto"
      }
    },
    {
      "variant": [
        "card" as typeof variant[number],
        "table" as typeof variant[number]
      ],
      "highlight": false,
      "class": {
        "item": "hover:not-has-disabled:not-has-aria-disabled:not-has-focus-visible:not-has-data-[state=checked]:border-accented hover:not-has-disabled:not-has-aria-disabled:not-has-focus-visible:not-has-data-[state=checked]:z-[1]"
      }
    },
    {
      "size": "xs" as typeof size[number],
      "indicator": "hidden" as typeof indicator[number],
      "class": {
        "icon": "size-3"
      }
    },
    {
      "size": "sm" as typeof size[number],
      "indicator": "hidden" as typeof indicator[number],
      "class": {
        "icon": "size-3.5"
      }
    },
    {
      "size": "md" as typeof size[number],
      "indicator": "hidden" as typeof indicator[number],
      "class": {
        "icon": "size-4"
      }
    },
    {
      "size": "lg" as typeof size[number],
      "indicator": "hidden" as typeof indicator[number],
      "class": {
        "icon": "size-4.5"
      }
    },
    {
      "size": "xl" as typeof size[number],
      "indicator": "hidden" as typeof indicator[number],
      "class": {
        "icon": "size-5"
      }
    },
    {
      "size": "xs" as typeof size[number],
      "variant": [
        "card" as typeof variant[number],
        "table" as typeof variant[number]
      ],
      "class": {
        "item": "p-2.5"
      }
    },
    {
      "size": "sm" as typeof size[number],
      "variant": [
        "card" as typeof variant[number],
        "table" as typeof variant[number]
      ],
      "class": {
        "item": "p-3"
      }
    },
    {
      "size": "md" as typeof size[number],
      "variant": [
        "card" as typeof variant[number],
        "table" as typeof variant[number]
      ],
      "class": {
        "item": "p-3.5"
      }
    },
    {
      "size": "lg" as typeof size[number],
      "variant": [
        "card" as typeof variant[number],
        "table" as typeof variant[number]
      ],
      "class": {
        "item": "p-4"
      }
    },
    {
      "size": "xl" as typeof size[number],
      "variant": [
        "card" as typeof variant[number],
        "table" as typeof variant[number]
      ],
      "class": {
        "item": "p-4.5"
      }
    },
    {
      "orientation": "horizontal" as typeof orientation[number],
      "variant": "table" as typeof variant[number],
      "class": {
        "item": "first-of-type:rounded-s-lg last-of-type:rounded-e-lg",
        "fieldset": "gap-0 -space-x-px"
      }
    },
    {
      "orientation": "vertical" as typeof orientation[number],
      "variant": "table" as typeof variant[number],
      "class": {
        "item": "first-of-type:rounded-t-lg last-of-type:rounded-b-lg",
        "fieldset": "gap-0 -space-y-px"
      }
    },
    {
      "color": "primary" as typeof color[number],
      "variant": "list" as typeof variant[number],
      "indicator": [
        "start" as typeof indicator[number],
        "end" as typeof indicator[number]
      ],
      "class": {
        "base": "outline-primary/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-primary"
      }
    },
    {
      "color": "error" as typeof color[number],
      "variant": "list" as typeof variant[number],
      "indicator": [
        "start" as typeof indicator[number],
        "end" as typeof indicator[number]
      ],
      "class": {
        "base": "outline-error/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-error"
      }
    },
    {
      "color": "neutral" as typeof color[number],
      "variant": "list" as typeof variant[number],
      "indicator": [
        "start" as typeof indicator[number],
        "end" as typeof indicator[number]
      ],
      "class": {
        "base": "outline-inverted/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-inverted"
      }
    },
    {
      "color": "primary" as typeof color[number],
      "variant": [
        "card" as typeof variant[number],
        "table" as typeof variant[number]
      ],
      "class": {
        "item": "outline-primary/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-primary has-focus-visible:z-[1]"
      }
    },
    {
      "color": "error" as typeof color[number],
      "variant": [
        "card" as typeof variant[number],
        "table" as typeof variant[number]
      ],
      "class": {
        "item": "outline-error/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-error has-focus-visible:z-[1]"
      }
    },
    {
      "color": "neutral" as typeof color[number],
      "variant": [
        "card" as typeof variant[number],
        "table" as typeof variant[number]
      ],
      "class": {
        "item": "outline-inverted/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-inverted has-focus-visible:z-[1]"
      }
    },
    {
      "color": "primary" as typeof color[number],
      "variant": "list" as typeof variant[number],
      "indicator": "hidden" as typeof indicator[number],
      "class": {
        "item": "outline-primary/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-primary has-focus-visible:z-[1]"
      }
    },
    {
      "color": "error" as typeof color[number],
      "variant": "list" as typeof variant[number],
      "indicator": "hidden" as typeof indicator[number],
      "class": {
        "item": "outline-error/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-error has-focus-visible:z-[1]"
      }
    },
    {
      "color": "neutral" as typeof color[number],
      "variant": "list" as typeof variant[number],
      "indicator": "hidden" as typeof indicator[number],
      "class": {
        "item": "outline-inverted/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-inverted has-focus-visible:z-[1]"
      }
    },
    {
      "color": "primary" as typeof color[number],
      "variant": "card" as typeof variant[number],
      "class": {
        "item": "has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-primary/10"
      }
    },
    {
      "color": "error" as typeof color[number],
      "variant": "card" as typeof variant[number],
      "class": {
        "item": "has-data-[state=checked]:border-error/50 has-data-[state=checked]:bg-error/10"
      }
    },
    {
      "color": "neutral" as typeof color[number],
      "variant": "card" as typeof variant[number],
      "class": {
        "item": "has-data-[state=checked]:border-inverted/50 has-data-[state=checked]:bg-elevated"
      }
    },
    {
      "color": "primary" as typeof color[number],
      "variant": "table" as typeof variant[number],
      "class": {
        "item": "has-data-[state=checked]:bg-primary/10 has-data-[state=checked]:border-primary/50 has-data-[state=checked]:z-[2]"
      }
    },
    {
      "color": "error" as typeof color[number],
      "variant": "table" as typeof variant[number],
      "class": {
        "item": "has-data-[state=checked]:bg-error/10 has-data-[state=checked]:border-error/50 has-data-[state=checked]:z-[2]"
      }
    },
    {
      "color": "neutral" as typeof color[number],
      "variant": "table" as typeof variant[number],
      "class": {
        "item": "has-data-[state=checked]:bg-elevated has-data-[state=checked]:border-inverted/50 has-data-[state=checked]:z-[2]"
      }
    },
    {
      "variant": [
        "card" as typeof variant[number],
        "table" as typeof variant[number]
      ],
      "disabled": true,
      "class": {
        "item": "cursor-not-allowed"
      }
    },
    {
      "color": "primary" as typeof color[number],
      "indicator": "hidden" as typeof indicator[number],
      "highlight": true,
      "class": {
        "item": "not-has-disabled:border-primary not-has-disabled:has-data-[state=checked]:border-primary"
      }
    },
    {
      "color": "error" as typeof color[number],
      "indicator": "hidden" as typeof indicator[number],
      "highlight": true,
      "class": {
        "item": "not-has-disabled:border-error not-has-disabled:has-data-[state=checked]:border-error"
      }
    },
    {
      "color": "neutral" as typeof color[number],
      "indicator": "hidden" as typeof indicator[number],
      "highlight": true,
      "class": {
        "item": "not-has-disabled:border-inverted not-has-disabled:has-data-[state=checked]:border-inverted"
      }
    },
    {
      "color": "primary" as typeof color[number],
      "highlight": true,
      "class": {
        "base": "ring-primary"
      }
    },
    {
      "color": "error" as typeof color[number],
      "highlight": true,
      "class": {
        "base": "ring-error"
      }
    },
    {
      "color": "neutral" as typeof color[number],
      "highlight": true,
      "class": {
        "base": "ring-inverted"
      }
    }
  ],
  "defaultVariants": {
    "highlight": false,
    "size": "md" as typeof size[number],
    "color": "primary" as typeof color[number],
    "variant": "list" as typeof variant[number],
    "indicator": "start" as typeof indicator[number]
  }
}