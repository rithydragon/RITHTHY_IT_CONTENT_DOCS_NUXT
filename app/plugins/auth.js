export default defineNuxtPlugin(async () => {
  const authStore = useAuthStore()
  await authStore.init()

  // Re-check after init — fetchMe may have triggered a 401 → refresh failed → clearAuth + redirect.
  // If no longer authenticated, stop here so we don't fire API calls after the redirect.
  if (!authStore.isAuthenticated) return

  // After app loads, users without an event need the creation flow. Platform
  // administrators are allowed to have no organization-specific events.
  const isSuperAdmin = authStore.user?.roles?.includes('SUPER_ADMIN')
  const route = useRoute()
})
