const color = [
  "primary",
  "error",
  "neutral"
] as const

export default {
  "slots": {
    "base": [
      "group relative block px-4 py-3 rounded-md text-sm/6 my-5 last:mb-0 [&_code]:text-xs/5 [&_code]:bg-default [&_pre]:bg-default [&>div]:my-2.5 [&_ul]:my-2.5 [&_ol]:my-2.5 *:last:mb-0! [&_ul]:ps-4.5 [&_ol]:ps-4.5 [&_li]:my-0",
      "transition-colors"
    ],
    "icon": [
      "size-4 shrink-0 align-sub me-2 inline-block",
      "transition-colors"
    ],
    "externalIcon": [
      "size-4 align-top absolute end-2 top-2 pointer-events-none",
      "transition-colors"
    ]
  },
  "variants": {
    "color": {
      "primary": {
        "base": "border border-primary/25 bg-primary/10 text-primary-600 dark:text-primary-300 [&_a]:text-primary [&_a]:hover:border-primary [&_a]:focus-visible:border-transparent [&_a]:outline-primary/25 [&_a]:focus-visible:outline-3 [&_a]:focus-visible:has-[>code]:outline-0 [&_code]:text-primary-600 dark:[&_code]:text-primary-300 [&_code]:border-primary/25 [&_a]:[&>code]:outline-primary/25 [&_a]:hover:[&>code]:border-primary [&_a]:hover:[&>code]:text-primary [&_a]:focus-visible:[&>code]:border-primary [&_a]:focus-visible:[&>code]:text-primary [&>ul]:marker:text-primary/50",
        "icon": "text-primary",
        "externalIcon": "text-primary-600 dark:text-primary-300"
      },
      "error": {
        "base": "border border-error/25 bg-error/10 text-error-600 dark:text-error-300 [&_a]:text-error [&_a]:hover:border-error [&_a]:focus-visible:border-transparent [&_a]:outline-error/25 [&_a]:focus-visible:outline-3 [&_a]:focus-visible:has-[>code]:outline-0 [&_code]:text-error-600 dark:[&_code]:text-error-300 [&_code]:border-error/25 [&_a]:[&>code]:outline-error/25 [&_a]:hover:[&>code]:border-error [&_a]:hover:[&>code]:text-error [&_a]:focus-visible:[&>code]:border-error [&_a]:focus-visible:[&>code]:text-error [&>ul]:marker:text-error/50",
        "icon": "text-error",
        "externalIcon": "text-error-600 dark:text-error-300"
      },
      "neutral": {
        "base": "border border-muted bg-muted text-default",
        "icon": "text-highlighted",
        "externalIcon": "text-dimmed"
      }
    },
    "to": {
      "true": "border-dashed"
    }
  },
  "compoundVariants": [
    {
      "color": "primary" as typeof color[number],
      "to": true,
      "class": {
        "base": "hover:border-primary outline-primary/25 has-[>a:focus-visible]:outline-3 has-[>a:focus-visible]:border-primary",
        "externalIcon": "group-hover:text-primary"
      }
    },
    {
      "color": "error" as typeof color[number],
      "to": true,
      "class": {
        "base": "hover:border-error outline-error/25 has-[>a:focus-visible]:outline-3 has-[>a:focus-visible]:border-error",
        "externalIcon": "group-hover:text-error"
      }
    },
    {
      "color": "neutral" as typeof color[number],
      "to": true,
      "class": {
        "base": "hover:border-inverted outline-inverted/25 has-[>a:focus-visible]:outline-3 has-[>a:focus-visible]:border-inverted",
        "externalIcon": "group-hover:text-highlighted"
      }
    }
  ],
  "defaultVariants": {
    "color": "neutral" as typeof color[number]
  }
}