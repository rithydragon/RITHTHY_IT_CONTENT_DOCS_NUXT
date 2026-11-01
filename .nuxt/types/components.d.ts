
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  GroupImage: typeof import("../../app/components/btn/GroupImage.vue")['default']
  GlassCard: typeof import("../../app/components/card/GlassCard.vue")['default']
  StatCard: typeof import("../../app/components/card/StatCard.vue")['default']
  AppActionNavbar: typeof import("../../app/components/layout/AppActionNavbar.vue")['default']
  AppSidebar: typeof import("../../app/components/layout/AppSidebar.vue")['default']
  BottomNav: typeof import("../../app/components/layout/BottomNav.vue")['default']
  DocsSidebar: typeof import("../../app/components/layout/DocsSidebar.vue")['default']
  DocsSidebarItem: typeof import("../../app/components/layout/DocsSidebarItem.vue")['default']
  MobileBottomNav: typeof import("../../app/components/layout/MobileBottomNav.vue")['default']
  MobileDrawer: typeof import("../../app/components/layout/MobileDrawer.vue")['default']
  SidebarFooter: typeof import("../../app/components/layout/SidebarFooter.vue")['default']
  TopBar: typeof import("../../app/components/layout/TopBar.vue")['default']
  AppToast: typeof import("../../app/components/ui/AppToast.vue")['default']
  RTCustomTooltip: typeof import("../../app/components/ui/RTCustomTooltip.vue")['default']
  Version: typeof import("../../app/components/Version.vue")['default']
  ProseA: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/A.vue")['default']
  ProseAccordion: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Accordion.vue")['default']
  ProseAccordionItem: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/AccordionItem.vue")['default']
  ProseBadge: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Badge.vue")['default']
  ProseBlockquote: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Blockquote.vue")['default']
  ProseCallout: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Callout.vue")['default']
  ProseCard: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Card.vue")['default']
  ProseCardGroup: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/CardGroup.vue")['default']
  ProseCode: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Code.vue")['default']
  ProseCodeCollapse: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/CodeCollapse.vue")['default']
  ProseCodeGroup: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/CodeGroup.vue")['default']
  ProseCodeIcon: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/CodeIcon.vue")['default']
  ProseCodePreview: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/CodePreview.vue")['default']
  ProseCodeTree: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/CodeTree.vue")['default']
  ProseCollapsible: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Collapsible.vue")['default']
  ProseEm: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Em.vue")['default']
  ProseField: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Field.vue")['default']
  ProseFieldGroup: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/FieldGroup.vue")['default']
  ProseH1: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/H1.vue")['default']
  ProseH2: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/H2.vue")['default']
  ProseH3: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/H3.vue")['default']
  ProseH4: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/H4.vue")['default']
  ProseHr: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Hr.vue")['default']
  ProseIcon: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Icon.vue")['default']
  ProseImg: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Img.vue")['default']
  ProseKbd: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Kbd.vue")['default']
  ProseLi: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Li.vue")['default']
  ProseOl: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Ol.vue")['default']
  ProseP: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/P.vue")['default']
  ProsePre: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Pre.vue")['default']
  ProsePrompt: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Prompt.vue")['default']
  ProseScript: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Script.vue")['default']
  ProseSteps: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Steps.vue")['default']
  ProseStrong: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Strong.vue")['default']
  ProseTable: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Table.vue")['default']
  ProseTabs: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Tabs.vue")['default']
  ProseTabsItem: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/TabsItem.vue")['default']
  ProseTbody: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Tbody.vue")['default']
  ProseTd: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Td.vue")['default']
  ProseTh: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Th.vue")['default']
  ProseThead: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Thead.vue")['default']
  ProseTr: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Tr.vue")['default']
  ProseUl: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Ul.vue")['default']
  ProseCaution: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/callout/Caution.vue")['default']
  ProseNote: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/callout/Note.vue")['default']
  ProseTip: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/callout/Tip.vue")['default']
  ProseWarning: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/callout/Warning.vue")['default']
  UContentNavigation: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/content/ContentNavigation.vue")['default']
  UContentSearch: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/content/ContentSearch.vue")['default']
  UContentSearchButton: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/content/ContentSearchButton.vue")['default']
  UContentSurround: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/content/ContentSurround.vue")['default']
  UContentToc: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/content/ContentToc.vue")['default']
  UColorModeAvatar: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/color-mode/ColorModeAvatar.vue")['default']
  UColorModeButton: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/color-mode/ColorModeButton.vue")['default']
  UColorModeImage: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/color-mode/ColorModeImage.vue")['default']
  UColorModeSelect: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/color-mode/ColorModeSelect.vue")['default']
  UColorModeSwitch: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/color-mode/ColorModeSwitch.vue")['default']
  UAccordion: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue")['default']
  UAlert: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Alert.vue")['default']
  UApp: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/App.vue")['default']
  UAuthForm: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/AuthForm.vue")['default']
  UAvatar: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Avatar.vue")['default']
  UAvatarGroup: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/AvatarGroup.vue")['default']
  UBadge: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue")['default']
  UBanner: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Banner.vue")['default']
  UBlogPost: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/BlogPost.vue")['default']
  UBlogPosts: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/BlogPosts.vue")['default']
  UBreadcrumb: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue")['default']
  UButton: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Button.vue")['default']
  UCalendar: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Calendar.vue")['default']
  UCard: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Card.vue")['default']
  UCarousel: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue")['default']
  UChangelogVersion: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ChangelogVersion.vue")['default']
  UChangelogVersions: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ChangelogVersions.vue")['default']
  UChart: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Chart.vue")['default']
  UChatMessage: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ChatMessage.vue")['default']
  UChatMessages: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ChatMessages.vue")['default']
  UChatPalette: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ChatPalette.vue")['default']
  UChatPrompt: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ChatPrompt.vue")['default']
  UChatPromptSubmit: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ChatPromptSubmit.vue")['default']
  UChatReasoning: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ChatReasoning.vue")['default']
  UChatShimmer: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ChatShimmer.vue")['default']
  UChatTool: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ChatTool.vue")['default']
  UCheckbox: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue")['default']
  UCheckboxGroup: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/CheckboxGroup.vue")['default']
  UChip: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Chip.vue")['default']
  UCollapsible: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue")['default']
  UColorPicker: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ColorPicker.vue")['default']
  UCommandPalette: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/CommandPalette.vue")['default']
  UContainer: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Container.vue")['default']
  UContextMenu: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ContextMenu.vue")['default']
  UContextMenuContent: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ContextMenuContent.vue")['default']
  UDashboardGroup: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DashboardGroup.vue")['default']
  UDashboardNavbar: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DashboardNavbar.vue")['default']
  UDashboardPanel: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DashboardPanel.vue")['default']
  UDashboardResizeHandle: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DashboardResizeHandle.vue")['default']
  UDashboardSearch: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DashboardSearch.vue")['default']
  UDashboardSearchButton: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DashboardSearchButton.vue")['default']
  UDashboardSidebar: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DashboardSidebar.vue")['default']
  UDashboardSidebarCollapse: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DashboardSidebarCollapse.vue")['default']
  UDashboardSidebarToggle: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DashboardSidebarToggle.vue")['default']
  UDashboardToolbar: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DashboardToolbar.vue")['default']
  UDrawer: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue")['default']
  UDropdownMenu: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue")['default']
  UDropdownMenuContent: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue")['default']
  UEditor: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Editor.vue")['default']
  UEditorDragHandle: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/EditorDragHandle.vue")['default']
  UEditorEmojiMenu: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/EditorEmojiMenu.vue")['default']
  UEditorMentionMenu: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/EditorMentionMenu.vue")['default']
  UEditorSuggestionMenu: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/EditorSuggestionMenu.vue")['default']
  UEditorToolbar: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/EditorToolbar.vue")['default']
  UEmpty: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Empty.vue")['default']
  UError: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Error.vue")['default']
  UFieldGroup: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/FieldGroup.vue")['default']
  UFileUpload: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/FileUpload.vue")['default']
  UFooter: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Footer.vue")['default']
  UFooterColumns: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/FooterColumns.vue")['default']
  UForm: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Form.vue")['default']
  UFormField: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/FormField.vue")['default']
  UHeader: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Header.vue")['default']
  UIcon: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Icon.vue")['default']
  UInput: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Input.vue")['default']
  UInputDate: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/InputDate.vue")['default']
  UInputMenu: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/InputMenu.vue")['default']
  UInputNumber: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/InputNumber.vue")['default']
  UInputRating: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/InputRating.vue")['default']
  UInputTags: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/InputTags.vue")['default']
  UInputTime: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/InputTime.vue")['default']
  UKbd: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue")['default']
  ULink: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Link.vue")['default']
  ULinkBase: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/LinkBase.vue")['default']
  UListbox: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Listbox.vue")['default']
  UMain: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Main.vue")['default']
  UMarquee: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Marquee.vue")['default']
  UModal: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue")['default']
  UNavigationMenu: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue")['default']
  UOverlayProvider: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/OverlayProvider.vue")['default']
  UPage: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Page.vue")['default']
  UPageAnchors: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageAnchors.vue")['default']
  UPageAside: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageAside.vue")['default']
  UPageBody: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageBody.vue")['default']
  UPageCTA: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageCTA.vue")['default']
  UPageCard: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageCard.vue")['default']
  UPageColumns: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageColumns.vue")['default']
  UPageFeature: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageFeature.vue")['default']
  UPageGrid: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageGrid.vue")['default']
  UPageHeader: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageHeader.vue")['default']
  UPageHero: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageHero.vue")['default']
  UPageLinks: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageLinks.vue")['default']
  UPageList: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageList.vue")['default']
  UPageLogos: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageLogos.vue")['default']
  UPageSection: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageSection.vue")['default']
  UPagination: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue")['default']
  UPinInput: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PinInput.vue")['default']
  UPopover: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue")['default']
  UPricingPlan: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PricingPlan.vue")['default']
  UPricingPlans: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PricingPlans.vue")['default']
  UPricingTable: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PricingTable.vue")['default']
  UProgress: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue")['default']
  UProgressGroup: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ProgressGroup.vue")['default']
  URadioGroup: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/RadioGroup.vue")['default']
  UScrollArea: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ScrollArea.vue")['default']
  USelect: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Select.vue")['default']
  USelectMenu: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue")['default']
  USeparator: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Separator.vue")['default']
  USidebar: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Sidebar.vue")['default']
  USkeleton: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue")['default']
  USlideover: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue")['default']
  USlider: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Slider.vue")['default']
  USplitter: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Splitter.vue")['default']
  UStepper: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Stepper.vue")['default']
  USwitch: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Switch.vue")['default']
  UTable: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Table.vue")['default']
  UTabs: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue")['default']
  UTextarea: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue")['default']
  UTheme: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Theme.vue")['default']
  UTimeline: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Timeline.vue")['default']
  UToast: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Toast.vue")['default']
  UToaster: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue")['default']
  UTooltip: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue")['default']
  UTree: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Tree.vue")['default']
  UUser: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/User.vue")['default']
  ULocaleSelect: typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/locale/LocaleSelect.vue")['default']
  ProseH5: typeof import("../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']
  ProseH6: typeof import("../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']
  /**
   * Displays the welcome screen used by new Nuxt projects.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-welcome
   */
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  /**
   * Renders the selected layout around pages or error content.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-layout
   */
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  /**
   * Catches client-side errors from its default slot and renders an error slot.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-error-boundary
   */
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  /**
   * Renders its default slot only on the client, with an optional server fallback.
   *
   * @see https://nuxt.com/docs/4.x/api/components/client-only
   */
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  /**
   * Renders its content only during development.
   *
   * @see https://nuxt.com/docs/4.x/api/components/dev-only
   */
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  /**
   * A drop-in replacement for Vue Router's `<RouterLink>` and the HTML `<a>` element.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-link
   */
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  /**
   * Displays a progress bar during page navigation.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-loading-indicator
   */
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  /**
   * Formats dates and times consistently across server and client using the user's locale.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-time
   */
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  /**
   * Announces route changes to assistive technologies using the current page title.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-route-announcer
   */
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  /**
   * Announces dynamic content changes to assistive technologies.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-announcer
   */
  NuxtAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
  /**
   * Renders an optimized image through the Nuxt Image module.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-img
   */
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  /**
   * Renders responsive optimized images through the Nuxt Image module.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-picture
   */
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtLinkLocale: typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
  SwitchLocalePathLink: typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
  ContentRenderer: typeof import("../../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']
  /**
   * Renders the current page from the `pages/` directory.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-page
   */
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  Icon: typeof import("../../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
  ColorScheme: typeof import("../../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue")['default']
  MDC: typeof import("../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']
  MDCCached: typeof import("../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCCached.vue")['default']
  MDCRenderer: typeof import("../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']
  MDCSlot: typeof import("../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']
  /**
   * Renders a non-interactive server component without shipping client-side JavaScript.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-island
   */
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyGroupImage: LazyComponent<typeof import("../../app/components/btn/GroupImage.vue")['default']>
  LazyGlassCard: LazyComponent<typeof import("../../app/components/card/GlassCard.vue")['default']>
  LazyStatCard: LazyComponent<typeof import("../../app/components/card/StatCard.vue")['default']>
  LazyAppActionNavbar: LazyComponent<typeof import("../../app/components/layout/AppActionNavbar.vue")['default']>
  LazyAppSidebar: LazyComponent<typeof import("../../app/components/layout/AppSidebar.vue")['default']>
  LazyBottomNav: LazyComponent<typeof import("../../app/components/layout/BottomNav.vue")['default']>
  LazyDocsSidebar: LazyComponent<typeof import("../../app/components/layout/DocsSidebar.vue")['default']>
  LazyDocsSidebarItem: LazyComponent<typeof import("../../app/components/layout/DocsSidebarItem.vue")['default']>
  LazyMobileBottomNav: LazyComponent<typeof import("../../app/components/layout/MobileBottomNav.vue")['default']>
  LazyMobileDrawer: LazyComponent<typeof import("../../app/components/layout/MobileDrawer.vue")['default']>
  LazySidebarFooter: LazyComponent<typeof import("../../app/components/layout/SidebarFooter.vue")['default']>
  LazyTopBar: LazyComponent<typeof import("../../app/components/layout/TopBar.vue")['default']>
  LazyAppToast: LazyComponent<typeof import("../../app/components/ui/AppToast.vue")['default']>
  LazyRTCustomTooltip: LazyComponent<typeof import("../../app/components/ui/RTCustomTooltip.vue")['default']>
  LazyVersion: LazyComponent<typeof import("../../app/components/Version.vue")['default']>
  LazyProseA: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/A.vue")['default']>
  LazyProseAccordion: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Accordion.vue")['default']>
  LazyProseAccordionItem: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/AccordionItem.vue")['default']>
  LazyProseBadge: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Badge.vue")['default']>
  LazyProseBlockquote: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Blockquote.vue")['default']>
  LazyProseCallout: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Callout.vue")['default']>
  LazyProseCard: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Card.vue")['default']>
  LazyProseCardGroup: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/CardGroup.vue")['default']>
  LazyProseCode: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Code.vue")['default']>
  LazyProseCodeCollapse: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/CodeCollapse.vue")['default']>
  LazyProseCodeGroup: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/CodeGroup.vue")['default']>
  LazyProseCodeIcon: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/CodeIcon.vue")['default']>
  LazyProseCodePreview: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/CodePreview.vue")['default']>
  LazyProseCodeTree: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/CodeTree.vue")['default']>
  LazyProseCollapsible: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Collapsible.vue")['default']>
  LazyProseEm: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Em.vue")['default']>
  LazyProseField: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Field.vue")['default']>
  LazyProseFieldGroup: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/FieldGroup.vue")['default']>
  LazyProseH1: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/H1.vue")['default']>
  LazyProseH2: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/H2.vue")['default']>
  LazyProseH3: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/H3.vue")['default']>
  LazyProseH4: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/H4.vue")['default']>
  LazyProseHr: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Hr.vue")['default']>
  LazyProseIcon: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Icon.vue")['default']>
  LazyProseImg: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Img.vue")['default']>
  LazyProseKbd: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Kbd.vue")['default']>
  LazyProseLi: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Li.vue")['default']>
  LazyProseOl: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Ol.vue")['default']>
  LazyProseP: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/P.vue")['default']>
  LazyProsePre: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Pre.vue")['default']>
  LazyProsePrompt: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Prompt.vue")['default']>
  LazyProseScript: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Script.vue")['default']>
  LazyProseSteps: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Steps.vue")['default']>
  LazyProseStrong: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Strong.vue")['default']>
  LazyProseTable: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Table.vue")['default']>
  LazyProseTabs: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Tabs.vue")['default']>
  LazyProseTabsItem: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/TabsItem.vue")['default']>
  LazyProseTbody: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Tbody.vue")['default']>
  LazyProseTd: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Td.vue")['default']>
  LazyProseTh: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Th.vue")['default']>
  LazyProseThead: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Thead.vue")['default']>
  LazyProseTr: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Tr.vue")['default']>
  LazyProseUl: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/Ul.vue")['default']>
  LazyProseCaution: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/callout/Caution.vue")['default']>
  LazyProseNote: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/callout/Note.vue")['default']>
  LazyProseTip: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/callout/Tip.vue")['default']>
  LazyProseWarning: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/prose/callout/Warning.vue")['default']>
  LazyUContentNavigation: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/content/ContentNavigation.vue")['default']>
  LazyUContentSearch: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/content/ContentSearch.vue")['default']>
  LazyUContentSearchButton: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/content/ContentSearchButton.vue")['default']>
  LazyUContentSurround: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/content/ContentSurround.vue")['default']>
  LazyUContentToc: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/content/ContentToc.vue")['default']>
  LazyUColorModeAvatar: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/color-mode/ColorModeAvatar.vue")['default']>
  LazyUColorModeButton: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/color-mode/ColorModeButton.vue")['default']>
  LazyUColorModeImage: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/color-mode/ColorModeImage.vue")['default']>
  LazyUColorModeSelect: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/color-mode/ColorModeSelect.vue")['default']>
  LazyUColorModeSwitch: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/color-mode/ColorModeSwitch.vue")['default']>
  LazyUAccordion: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue")['default']>
  LazyUAlert: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Alert.vue")['default']>
  LazyUApp: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/App.vue")['default']>
  LazyUAuthForm: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/AuthForm.vue")['default']>
  LazyUAvatar: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Avatar.vue")['default']>
  LazyUAvatarGroup: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/AvatarGroup.vue")['default']>
  LazyUBadge: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue")['default']>
  LazyUBanner: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Banner.vue")['default']>
  LazyUBlogPost: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/BlogPost.vue")['default']>
  LazyUBlogPosts: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/BlogPosts.vue")['default']>
  LazyUBreadcrumb: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue")['default']>
  LazyUButton: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Button.vue")['default']>
  LazyUCalendar: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Calendar.vue")['default']>
  LazyUCard: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Card.vue")['default']>
  LazyUCarousel: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue")['default']>
  LazyUChangelogVersion: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ChangelogVersion.vue")['default']>
  LazyUChangelogVersions: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ChangelogVersions.vue")['default']>
  LazyUChart: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Chart.vue")['default']>
  LazyUChatMessage: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ChatMessage.vue")['default']>
  LazyUChatMessages: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ChatMessages.vue")['default']>
  LazyUChatPalette: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ChatPalette.vue")['default']>
  LazyUChatPrompt: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ChatPrompt.vue")['default']>
  LazyUChatPromptSubmit: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ChatPromptSubmit.vue")['default']>
  LazyUChatReasoning: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ChatReasoning.vue")['default']>
  LazyUChatShimmer: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ChatShimmer.vue")['default']>
  LazyUChatTool: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ChatTool.vue")['default']>
  LazyUCheckbox: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue")['default']>
  LazyUCheckboxGroup: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/CheckboxGroup.vue")['default']>
  LazyUChip: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Chip.vue")['default']>
  LazyUCollapsible: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue")['default']>
  LazyUColorPicker: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ColorPicker.vue")['default']>
  LazyUCommandPalette: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/CommandPalette.vue")['default']>
  LazyUContainer: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Container.vue")['default']>
  LazyUContextMenu: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ContextMenu.vue")['default']>
  LazyUContextMenuContent: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ContextMenuContent.vue")['default']>
  LazyUDashboardGroup: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DashboardGroup.vue")['default']>
  LazyUDashboardNavbar: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DashboardNavbar.vue")['default']>
  LazyUDashboardPanel: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DashboardPanel.vue")['default']>
  LazyUDashboardResizeHandle: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DashboardResizeHandle.vue")['default']>
  LazyUDashboardSearch: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DashboardSearch.vue")['default']>
  LazyUDashboardSearchButton: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DashboardSearchButton.vue")['default']>
  LazyUDashboardSidebar: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DashboardSidebar.vue")['default']>
  LazyUDashboardSidebarCollapse: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DashboardSidebarCollapse.vue")['default']>
  LazyUDashboardSidebarToggle: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DashboardSidebarToggle.vue")['default']>
  LazyUDashboardToolbar: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DashboardToolbar.vue")['default']>
  LazyUDrawer: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue")['default']>
  LazyUDropdownMenu: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue")['default']>
  LazyUDropdownMenuContent: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue")['default']>
  LazyUEditor: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Editor.vue")['default']>
  LazyUEditorDragHandle: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/EditorDragHandle.vue")['default']>
  LazyUEditorEmojiMenu: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/EditorEmojiMenu.vue")['default']>
  LazyUEditorMentionMenu: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/EditorMentionMenu.vue")['default']>
  LazyUEditorSuggestionMenu: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/EditorSuggestionMenu.vue")['default']>
  LazyUEditorToolbar: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/EditorToolbar.vue")['default']>
  LazyUEmpty: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Empty.vue")['default']>
  LazyUError: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Error.vue")['default']>
  LazyUFieldGroup: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/FieldGroup.vue")['default']>
  LazyUFileUpload: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/FileUpload.vue")['default']>
  LazyUFooter: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Footer.vue")['default']>
  LazyUFooterColumns: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/FooterColumns.vue")['default']>
  LazyUForm: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Form.vue")['default']>
  LazyUFormField: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/FormField.vue")['default']>
  LazyUHeader: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Header.vue")['default']>
  LazyUIcon: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Icon.vue")['default']>
  LazyUInput: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Input.vue")['default']>
  LazyUInputDate: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/InputDate.vue")['default']>
  LazyUInputMenu: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/InputMenu.vue")['default']>
  LazyUInputNumber: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/InputNumber.vue")['default']>
  LazyUInputRating: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/InputRating.vue")['default']>
  LazyUInputTags: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/InputTags.vue")['default']>
  LazyUInputTime: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/InputTime.vue")['default']>
  LazyUKbd: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue")['default']>
  LazyULink: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Link.vue")['default']>
  LazyULinkBase: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/LinkBase.vue")['default']>
  LazyUListbox: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Listbox.vue")['default']>
  LazyUMain: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Main.vue")['default']>
  LazyUMarquee: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Marquee.vue")['default']>
  LazyUModal: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue")['default']>
  LazyUNavigationMenu: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue")['default']>
  LazyUOverlayProvider: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/OverlayProvider.vue")['default']>
  LazyUPage: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Page.vue")['default']>
  LazyUPageAnchors: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageAnchors.vue")['default']>
  LazyUPageAside: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageAside.vue")['default']>
  LazyUPageBody: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageBody.vue")['default']>
  LazyUPageCTA: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageCTA.vue")['default']>
  LazyUPageCard: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageCard.vue")['default']>
  LazyUPageColumns: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageColumns.vue")['default']>
  LazyUPageFeature: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageFeature.vue")['default']>
  LazyUPageGrid: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageGrid.vue")['default']>
  LazyUPageHeader: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageHeader.vue")['default']>
  LazyUPageHero: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageHero.vue")['default']>
  LazyUPageLinks: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageLinks.vue")['default']>
  LazyUPageList: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageList.vue")['default']>
  LazyUPageLogos: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageLogos.vue")['default']>
  LazyUPageSection: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PageSection.vue")['default']>
  LazyUPagination: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue")['default']>
  LazyUPinInput: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PinInput.vue")['default']>
  LazyUPopover: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue")['default']>
  LazyUPricingPlan: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PricingPlan.vue")['default']>
  LazyUPricingPlans: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PricingPlans.vue")['default']>
  LazyUPricingTable: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PricingTable.vue")['default']>
  LazyUProgress: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue")['default']>
  LazyUProgressGroup: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ProgressGroup.vue")['default']>
  LazyURadioGroup: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/RadioGroup.vue")['default']>
  LazyUScrollArea: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ScrollArea.vue")['default']>
  LazyUSelect: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Select.vue")['default']>
  LazyUSelectMenu: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue")['default']>
  LazyUSeparator: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Separator.vue")['default']>
  LazyUSidebar: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Sidebar.vue")['default']>
  LazyUSkeleton: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue")['default']>
  LazyUSlideover: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue")['default']>
  LazyUSlider: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Slider.vue")['default']>
  LazyUSplitter: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Splitter.vue")['default']>
  LazyUStepper: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Stepper.vue")['default']>
  LazyUSwitch: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Switch.vue")['default']>
  LazyUTable: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Table.vue")['default']>
  LazyUTabs: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue")['default']>
  LazyUTextarea: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue")['default']>
  LazyUTheme: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Theme.vue")['default']>
  LazyUTimeline: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Timeline.vue")['default']>
  LazyUToast: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Toast.vue")['default']>
  LazyUToaster: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue")['default']>
  LazyUTooltip: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue")['default']>
  LazyUTree: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Tree.vue")['default']>
  LazyUUser: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/User.vue")['default']>
  LazyULocaleSelect: LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/locale/LocaleSelect.vue")['default']>
  LazyProseH5: LazyComponent<typeof import("../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']>
  LazyProseH6: LazyComponent<typeof import("../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']>
  /**
   * Lazy-loaded version of `<NuxtWelcome>`.
   *
   * Displays the welcome screen used by new Nuxt projects.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-welcome
   */
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  /**
   * Lazy-loaded version of `<NuxtLayout>`.
   *
   * Renders the selected layout around pages or error content.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-layout
   */
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  /**
   * Lazy-loaded version of `<NuxtErrorBoundary>`.
   *
   * Catches client-side errors from its default slot and renders an error slot.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-error-boundary
   */
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  /**
   * Lazy-loaded version of `<ClientOnly>`.
   *
   * Renders its default slot only on the client, with an optional server fallback.
   *
   * @see https://nuxt.com/docs/4.x/api/components/client-only
   */
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  /**
   * Lazy-loaded version of `<DevOnly>`.
   *
   * Renders its content only during development.
   *
   * @see https://nuxt.com/docs/4.x/api/components/dev-only
   */
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  /**
   * Lazy-loaded version of `<NuxtLink>`.
   *
   * A drop-in replacement for Vue Router's `<RouterLink>` and the HTML `<a>` element.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-link
   */
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  /**
   * Lazy-loaded version of `<NuxtLoadingIndicator>`.
   *
   * Displays a progress bar during page navigation.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-loading-indicator
   */
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  /**
   * Lazy-loaded version of `<NuxtTime>`.
   *
   * Formats dates and times consistently across server and client using the user's locale.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-time
   */
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  /**
   * Lazy-loaded version of `<NuxtRouteAnnouncer>`.
   *
   * Announces route changes to assistive technologies using the current page title.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-route-announcer
   */
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  /**
   * Lazy-loaded version of `<NuxtAnnouncer>`.
   *
   * Announces dynamic content changes to assistive technologies.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-announcer
   */
  LazyNuxtAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
  /**
   * Lazy-loaded version of `<NuxtImg>`.
   *
   * Renders an optimized image through the Nuxt Image module.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-img
   */
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  /**
   * Lazy-loaded version of `<NuxtPicture>`.
   *
   * Renders responsive optimized images through the Nuxt Image module.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-picture
   */
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtLinkLocale: LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
  LazySwitchLocalePathLink: LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
  LazyContentRenderer: LazyComponent<typeof import("../../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']>
  /**
   * Lazy-loaded version of `<NuxtPage>`.
   *
   * Renders the current page from the `pages/` directory.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-page
   */
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyIcon: LazyComponent<typeof import("../../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
  LazyColorScheme: LazyComponent<typeof import("../../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue")['default']>
  LazyMDC: LazyComponent<typeof import("../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']>
  LazyMDCCached: LazyComponent<typeof import("../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCCached.vue")['default']>
  LazyMDCRenderer: LazyComponent<typeof import("../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']>
  LazyMDCSlot: LazyComponent<typeof import("../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']>
  /**
   * Lazy-loaded version of `<NuxtIsland>`.
   *
   * Renders a non-interactive server component without shipping client-side JavaScript.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-island
   */
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

declare module '#app' {
  interface NuxtAppLiterals {
    componentName: "ProseA" | "LazyProseA" | "ProseAccordion" | "LazyProseAccordion" | "ProseAccordionItem" | "LazyProseAccordionItem" | "ProseBadge" | "LazyProseBadge" | "ProseBlockquote" | "LazyProseBlockquote" | "ProseCallout" | "LazyProseCallout" | "ProseCard" | "LazyProseCard" | "ProseCardGroup" | "LazyProseCardGroup" | "ProseCode" | "LazyProseCode" | "ProseCodeCollapse" | "LazyProseCodeCollapse" | "ProseCodeGroup" | "LazyProseCodeGroup" | "ProseCodeIcon" | "LazyProseCodeIcon" | "ProseCodePreview" | "LazyProseCodePreview" | "ProseCodeTree" | "LazyProseCodeTree" | "ProseCollapsible" | "LazyProseCollapsible" | "ProseEm" | "LazyProseEm" | "ProseField" | "LazyProseField" | "ProseFieldGroup" | "LazyProseFieldGroup" | "ProseH1" | "LazyProseH1" | "ProseH2" | "LazyProseH2" | "ProseH3" | "LazyProseH3" | "ProseH4" | "LazyProseH4" | "ProseHr" | "LazyProseHr" | "ProseIcon" | "LazyProseIcon" | "ProseImg" | "LazyProseImg" | "ProseKbd" | "LazyProseKbd" | "ProseLi" | "LazyProseLi" | "ProseOl" | "LazyProseOl" | "ProseP" | "LazyProseP" | "ProsePre" | "LazyProsePre" | "ProsePrompt" | "LazyProsePrompt" | "ProseScript" | "LazyProseScript" | "ProseSteps" | "LazyProseSteps" | "ProseStrong" | "LazyProseStrong" | "ProseTable" | "LazyProseTable" | "ProseTabs" | "LazyProseTabs" | "ProseTabsItem" | "LazyProseTabsItem" | "ProseTbody" | "LazyProseTbody" | "ProseTd" | "LazyProseTd" | "ProseTh" | "LazyProseTh" | "ProseThead" | "LazyProseThead" | "ProseTr" | "LazyProseTr" | "ProseUl" | "LazyProseUl" | "ProseCaution" | "LazyProseCaution" | "ProseNote" | "LazyProseNote" | "ProseTip" | "LazyProseTip" | "ProseWarning" | "LazyProseWarning" | "ProseH5" | "LazyProseH5" | "ProseH6" | "LazyProseH6" | "Icon" | "LazyIcon" | (string & {})
  }
}

export {}
