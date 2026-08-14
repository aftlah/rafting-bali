import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[] }
  }
}

export function Analytics() {
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined
    const pixelId = import.meta.env.VITE_META_PIXEL_ID as string | undefined

    if (gaId && !document.getElementById('ga-gtag')) {
      const script = document.createElement('script')
      script.id = 'ga-gtag'
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
      document.head.appendChild(script)

      window.dataLayer = window.dataLayer || []
      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer?.push(args)
      }
      window.gtag('js', new Date())
      window.gtag('config', gaId)
    }

    if (pixelId && !document.getElementById('meta-pixel')) {
      const script = document.createElement('script')
      script.id = 'meta-pixel'
      script.async = true
      script.src = 'https://connect.facebook.net/en_US/fbevents.js'
      document.head.appendChild(script)

      const fbq = function (...args: unknown[]) {
        ;(fbq.queue = fbq.queue || []).push(args)
      } as ((...args: unknown[]) => void) & { queue?: unknown[] }
      fbq.queue = []
      window.fbq = fbq
      window.fbq('init', pixelId)
      window.fbq('track', 'PageView')
    }
  }, [])

  return null
}
