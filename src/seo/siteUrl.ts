/** Production site URL — set VITE_SITE_URL in .env before build (no trailing slash). */
export function getSiteUrl() {
  const url = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '')
  return url || 'https://wildatvbali.com'
}

export function absoluteUrl(path: string) {
  const base = getSiteUrl()
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalized}`
}
