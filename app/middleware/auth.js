// Paths that don't require a wedding to exist
const NO_WEDDING_ALLOWED = [
  '/auth/',
  '/admin/',
  '/settings',
  '/help',
  '/profile',
  '/oauth',
  '/legal',
  '/support',
]

// Auth pages under any locale prefix (e.g. /km/auth/login, /auth/login)
function isAuthPath(path) {
  const authSuffixes = ['/auth/login', '/auth/register', '/auth/forgot-password', '/auth/reset-password']
  return authSuffixes.some((s) => path === s || path.endsWith(s) || path.startsWith(s + '/'))
}

function isJwtExpired(token) {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    // Match refreshToken.js: treat as expired 30s early
    return payload.exp * 1000 < Date.now() + 30_000
  } catch {
    return true
  }
}

export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('access_token').value

  const isAuthPage = isAuthPath(to.path)
  const isOAuth = to.path.startsWith('/oauth') || to.path.startsWith('/auth/google')

  // allow OAuth always
  if (isOAuth) return
  
  // If not authenticated and not on an auth page → try refresh, then redirect to login
  const authStore = useAuthStore()
  const hasValidToken = token && !isJwtExpired(token) && authStore.isAuthenticated
  if (!hasValidToken && !isAuthPage) {
    const refreshToken = useCookie('refresh_token').value
    if (refreshToken) {
      // Refresh token still exists — let the app load; refreshToken.js will handle it
      return
    }
    if (to.path !== '/auth/login') {
      return navigateTo({
        path: '/auth/login',
        query: { next: to.fullPath }
      }, { replace: true })
    }
  }
})