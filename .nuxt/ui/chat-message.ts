const variant = [
  "solid",
  "outline",
  "soft",
  "subtle",
  "naked"
] as const

const color = [
  "primary",
  "error",
  "neutral"
] as const

const side = [
  "left",
  "right"
] as const

export default {
  "slots": {
    "root": "group/message relative w-full",
    "header": "flex mb-1.5",
    "container": "relative flex items-start",
    "body": "min-w-0",
    "leading": "inline-flex items-center justify-center min-h-6",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "files": "flex items-center gap-1.5",
    "content": "relative text-pretty wrap-break-word *:first:mt-0 *:last:mb-0",
    "actions": [
      "[@media(hover:hover)]:opacity-0 group-hover/message:opacity-100 absolute bottom-0 flex items-center",
      "transition-opacity ease-out"
    ]
  },
  "variants": {
    "variant": {
      "solid": "",
      "outline": "",
      "soft": "",
      "subtle": "",
      "naked": ""
    },
    "color": {
      "primary": "",
      "error": "",
      "neutral": ""
    },
    "side": {
      "left": {},
      "right": {
        "container": "justify-end ms-auto max-w-[75%]",
        "header": "justify-end",
        "actions": "right-0"
      }
    },
    "leading": {
      "true": ""
    },
    "actions": {
      "true": ""
    },
    "compact": {
      "true": {
        "root": "scroll-mt-3",
        "container": "gap-1.5 pb-3",
        "content": "space-y-2",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs"
      },
      "false": {
        "root": "scroll-mt-4 sm:scroll-mt-6",
        "container": "gap-3 pb-8",
        "content": "space-y-4",
        "leadingIcon": "size-8",
        "leadingAvatarSize": "md"
      }
    }
  },
  "compoundVariants": [
    {
      "compact": true,
      "actions": true,
      "class": {
        "container": "pb-8"
      }
    },
    {
      "variant": [
        "solid" as typeof variant[number],
        "outline" as typeof variant[number],
        "soft" as typeof variant[number],
        "subtle" as typeof variant[number]
      ],
      "compact": false,
      "class": {
        "content": "px-4 py-3 rounded-lg min-h-12",
        "leading": "mt-2"
      }
    },
    {
      "variant": [
        "solid" as typeof variant[number],
        "outline" as typeof variant[number],
        "soft" as typeof variant[number],
        "subtle" as typeof variant[number]
      ],
      "compact": true,
      "class": {
        "content": "px-2 py-1 rounded-lg min-h-8",
        "leading": "mt-1"
      }
    },
    {
      "variant": "naked" as typeof variant[number],
      "side": "left" as typeof side[number],
      "class": {
        "body": "w-full",
        "content": "w-full"
      }
    },
    {
      "color": "primary" as typeof color[number],
      "variant": "solid" as typeof variant[number],
      "class": {
        "content": "bg-primary text-inverted"
      }
    },
    {
      "color": "error" as typeof color[number],
      "variant": "solid" as typeof variant[number],
      "class": {
        "content": "bg-error text-inverted"
      }
    },
    {
      "color": "primary" as typeof color[number],
      "variant": "outline" as typeof variant[number],
      "class": {
        "content": "text-primary ring ring-primary/25"
      }
    },
    {
      "color": "error" as typeof color[number],
      "variant": "outline" as typeof variant[number],
      "class": {
        "content": "text-error ring ring-error/25"
      }
    },
    {
      "color": "primary" as typeof color[number],
      "variant": "soft" as typeof variant[number],
      "class": {
        "content": "bg-primary/10 text-primary"
      }
    },
    {
      "color": "error" as typeof color[number],
      "variant": "soft" as typeof variant[number],
      "class": {
        "content": "bg-error/10 text-error"
      }
    },
    {
      "color": "primary" as typeof color[number],
      "variant": "subtle" as typeof variant[number],
      "class": {
        "content": "bg-primary/10 text-primary ring ring-primary/25"
      }
    },
    {
      "color": "error" as typeof color[number],
      "variant": "subtle" as typeof variant[number],
      "class": {
        "content": "bg-error/10 text-error ring ring-error/25"
      }
    },
    {
      "color": "primary" as typeof color[number],
      "variant": "naked" as typeof variant[number],
      "class": {
        "content": "text-primary"
      }
    },
    {
      "color": "error" as typeof color[number],
      "variant": "naked" as typeof variant[number],
      "class": {
        "content": "text-error"
      }
    },
    {
      "color": "neutral" as typeof color[number],
      "variant": "solid" as typeof variant[number],
      "class": {
        "content": "bg-inverted text-inverted"
      }
    },
    {
      "color": "neutral" as typeof color[number],
      "variant": "outline" as typeof variant[number],
      "class": {
        "content": "bg-default ring ring-default"
      }
    },
    {
      "color": "neutral" as typeof color[number],
      "variant": "soft" as typeof variant[number],
      "class": {
        "content": "bg-elevated/50"
      }
    },
    {
      "color": "neutral" as typeof color[number],
      "variant": "subtle" as typeof variant[number],
      "class": {
        "content": "bg-elevated/50 ring ring-default"
      }
    }
  ],
  "defaultVariants": {
    "side": "left" as typeof side[number],
    "variant": "naked" as typeof variant[number],
    "color": "neutral" as typeof color[number]
  }
}