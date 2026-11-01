import type { ComputedRef, MaybeRef } from "vue";
import type { ComponentProps } from "../../node_modules/vue-component-type-helpers/index.js";

declare module 'nuxt/app' {
  interface NuxtLayouts {
    auth: ComponentProps<typeof import("D:/1_RITHY/1_PROJECT PROGRAMMING/PROJECTS/OFFICIAL PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/app/layouts/auth.vue").default>
    default: ComponentProps<typeof import("D:/1_RITHY/1_PROJECT PROGRAMMING/PROJECTS/OFFICIAL PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/app/layouts/default.vue").default>
    docs: ComponentProps<typeof import("D:/1_RITHY/1_PROJECT PROGRAMMING/PROJECTS/OFFICIAL PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/app/layouts/docs.vue").default>
    filemanager: ComponentProps<typeof import("D:/1_RITHY/1_PROJECT PROGRAMMING/PROJECTS/OFFICIAL PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/app/layouts/filemanager.vue").default>
    navbar: ComponentProps<typeof import("D:/1_RITHY/1_PROJECT PROGRAMMING/PROJECTS/OFFICIAL PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/app/layouts/navbar.vue").default>
  }
  export type LayoutKey = keyof NuxtLayouts extends never ? string : keyof NuxtLayouts
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false> | {
      [K in LayoutKey]: {
        name?: MaybeRef<K | false> | ComputedRef<K | false>
        props?: NuxtLayouts[K]
      }
    }[LayoutKey]
  }
}