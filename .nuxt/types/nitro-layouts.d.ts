export type LayoutKey = "auth" | "default" | "docs" | "filemanager" | "navbar"
declare module '@nuxt/schema' {
  interface AppRouteRulesExtensions {
    appLayout?: LayoutKey | false
  }
  interface RouteRuleConfigExtensions {
    appLayout?: LayoutKey | false
  }
}
declare module 'nuxt/schema' {
  interface AppRouteRulesExtensions {
    appLayout?: LayoutKey | false
  }
  interface RouteRuleConfigExtensions {
    appLayout?: LayoutKey | false
  }
}