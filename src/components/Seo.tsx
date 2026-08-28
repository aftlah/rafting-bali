import { useEffect } from 'react'
import {
  removeJsonLd,
  setDocumentTitle,
  setJsonLd,
  setLink,
  setMeta,
} from '../seo/meta'
import type { PageSeo } from '../seo/pageMeta'
import { absoluteUrl, getSiteUrl } from '../seo/siteUrl'

type SeoProps = {
  meta: PageSeo
  jsonLd?: object | object[]
}

export function Seo({ meta, jsonLd }: SeoProps) {
  useEffect(() => {
    const url = absoluteUrl(meta.path)
    const image = absoluteUrl(meta.image ?? '/images/hero.webp')
    const siteName = 'Wild ATV Bali'

    setDocumentTitle(meta.title)
    setMeta('description', meta.description)
    setMeta('keywords', meta.keywords)
    setMeta('robots', meta.noindex ? 'noindex, nofollow' : 'index, follow')
    setMeta('author', siteName)
    setMeta('geo.region', 'ID-BA')
    setMeta('geo.placename', 'Payangan, Bali')

    setLink('canonical', url)

    setMeta('og:title', meta.title, 'property')
    setMeta('og:description', meta.description, 'property')
    setMeta('og:type', meta.ogType ?? 'website', 'property')
    setMeta('og:url', url, 'property')
    setMeta('og:image', image, 'property')
    setMeta('og:image:alt', meta.title, 'property')
    setMeta('og:site_name', siteName, 'property')
    setMeta('og:locale', 'en_ID', 'property')

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', meta.title)
    setMeta('twitter:description', meta.description)
    setMeta('twitter:image', image)

    if (jsonLd) {
      setJsonLd('page-json-ld', jsonLd)
    }

    return () => {
      removeJsonLd('page-json-ld')
    }
  }, [meta, jsonLd])

  return null
}

export function DefaultSeoTags() {
  useEffect(() => {
    setMeta('theme-color', '#0a2420')
    setLink('icon', absoluteUrl('/favicon.svg'))
    setMeta('application-name', 'Wild ATV Bali')
    setMeta('apple-mobile-web-app-title', 'Wild ATV Bali')
  }, [])

  return null
}

export { getSiteUrl, absoluteUrl }
