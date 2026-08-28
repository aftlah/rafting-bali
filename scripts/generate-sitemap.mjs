import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const paths = [
  '/',
  '/about',
  '/packages/north-ubud',
  '/packages/south-ubud',
  '/packages/beach',
]

function loadSiteUrl() {
  const envPath = join(process.cwd(), '.env')
  if (!existsSync(envPath)) return 'https://wildatvbali.com'
  const line = readFileSync(envPath, 'utf8')
    .split('\n')
    .find((l) => l.startsWith('VITE_SITE_URL='))
  if (!line) return 'https://wildatvbali.com'
  const value = line.split('=').slice(1).join('=').trim().replace(/^["']|["']$/g, '')
  return value.replace(/\/$/, '') || 'https://wildatvbali.com'
}

const base = loadSiteUrl()
const today = new Date().toISOString().split('T')[0]

const urls = paths
  .map((path) => {
    const priority = path === '/' ? '1.0' : path.includes('/packages/') ? '0.9' : '0.8'
    return `  <url>
    <loc>${base}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`
  })
  .join('\n')

writeFileSync(
  join(process.cwd(), 'public', 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
)

writeFileSync(
  join(process.cwd(), 'public', 'robots.txt'),
  `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`,
)

console.log(`SEO files generated for ${base}`)
