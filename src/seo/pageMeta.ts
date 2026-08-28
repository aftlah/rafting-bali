import type { Lang } from '../i18n/dictionaries'
import type { PackageId } from '../data/site'
import { packageIds } from '../data/site'

export type PageSeo = {
  title: string
  description: string
  keywords: string
  path: string
  ogType?: 'website' | 'article'
  image?: string
  noindex?: boolean
}

const sharedKeywords = {
  en: 'ATV Bali, ATV Ubud, quad bike Bali, Bali ATV tour, ATV ride Bali, Ubud ATV, Bali adventure, ATV pantai Bali, wild ATV Bali, booking ATV Bali',
  id: 'ATV Bali, ATV Ubud, quad bike Bali, tur ATV Bali, wisata ATV Ubud, ATV pantai Bali, booking ATV Bali, harga ATV Bali, Wild ATV Bali',
}

export const homeSeo: Record<Lang, PageSeo> = {
  en: {
    title: 'Wild ATV Bali — ATV Quad Bike Tours Ubud & Beach | Book via WhatsApp',
    description:
      'Book Bali ATV quad bike tours in North Ubud, South Ubud & beach tracks. Hotel transfer, lunch, safety gear & guide included. From IDR 495.000. Pay on arrival. WhatsApp booking.',
    keywords: sharedKeywords.en,
    path: '/',
    ogType: 'website',
    image: '/images/hero.webp',
  },
  id: {
    title: 'Wild ATV Bali — Tur ATV Quad Bike Ubud & Pantai | Booking WhatsApp',
    description:
      'Booking tur ATV Bali di North Ubud, South Ubud & jalur pantai. Termasuk transfer hotel, makan siang, safety gear & guide. Mulai IDR 495.000. Bayar di lokasi.',
    keywords: sharedKeywords.id,
    path: '/',
    ogType: 'website',
    image: '/images/hero.webp',
  },
}

export const aboutSeo: Record<Lang, PageSeo> = {
  en: {
    title: 'About Wild ATV Bali — Safety, Guides & ATV Base Payangan',
    description:
      'Meet the Wild ATV Bali team. Professional guides, safety briefing, helmets, lockers & showers at our Payangan base. Your trusted ATV operator in Ubud & Bali.',
    keywords:
      'Wild ATV Bali about, ATV safety Bali, ATV guide Ubud, Payangan ATV base, quad bike operator Bali',
    path: '/about',
    image: '/images/hero.webp',
  },
  id: {
    title: 'Tentang Wild ATV Bali — Keamanan, Guide & Base Payangan',
    description:
      'Kenali tim Wild ATV Bali. Guide profesional, briefing keselamatan, helm, locker & shower di base Payangan. Operator ATV terpercaya di Ubud & Bali.',
    keywords:
      'tentang Wild ATV Bali, keselamatan ATV Bali, guide ATV Ubud, base ATV Payangan',
    path: '/about',
    image: '/images/hero.webp',
  },
}

const packageSeoEn: Record<PackageId, Omit<PageSeo, 'path'>> = {
  'north-ubud': {
    title: 'North Ubud ATV Tour Bali — IDR 720.000 | Wild ATV Bali',
    description:
      'Bali ATV North Ubud tour: jungle trails, rice fields & hidden paths. 1.5 hours riding, hotel transfer, welcome drink, lunch & gear. Book North Ubud quad bike via WhatsApp.',
    keywords:
      'North Ubud ATV, ATV North Ubud Bali, quad bike North Ubud, Bali ATV jungle tour, harga ATV North Ubud',
    image: '/images/hero.webp',
    ogType: 'article',
  },
  'south-ubud': {
    title: 'South Ubud ATV Tour Bali — From IDR 495.000 | Most Popular',
    description:
      'Best-value South Ubud ATV tour: rice paddies, village trails & river crossings. 1.5 hours, private transfer, Indonesian lunch included. Book Bali ATV South Ubud today.',
    keywords:
      'South Ubud ATV, ATV Ubud murah, ATV South Ubud Bali, quad bike Ubud, Bali ATV rice field, harga ATV Ubud',
    image: '/images/hero.webp',
    ogType: 'article',
  },
  beach: {
    title: 'Bali Beach ATV Tour — Coastal Quad Bike | IDR 975.000',
    description:
      'ATV on the beach Bali: 2-hour coastal ride, sand tracks & sea breeze. Hotel transfer from Canggu area, fried rice lunch, safety gear. Book beach ATV quad bike tour.',
    keywords:
      'ATV pantai Bali, beach ATV Bali, quad bike beach Bali, ATV Canggu, ATV pesisir Bali, harga ATV pantai',
    image: '/images/hero.webp',
    ogType: 'article',
  },
}

const packageSeoId: Record<PackageId, Omit<PageSeo, 'path'>> = {
  'north-ubud': {
    title: 'Tur ATV North Ubud Bali — IDR 720.000 | Wild ATV Bali',
    description:
      'Tur ATV North Ubud: jalur hutan, sawah & pedesaan. 1,5 jam riding, transfer hotel, welcome drink, makan siang & gear. Booking ATV North Ubud via WhatsApp.',
    keywords:
      'ATV North Ubud, quad bike North Ubud, tur ATV Ubud utara, harga ATV North Ubud Bali',
    image: '/images/hero.webp',
    ogType: 'article',
  },
  'south-ubud': {
    title: 'Tur ATV South Ubud Bali — Mulai IDR 495.000 | Paling Populer',
    description:
      'Tur ATV South Ubud paling laris: sawah, jalur desa & sungai. 1,5 jam, transfer privat, makan Indonesia termasuk. Booking ATV Ubud sekarang.',
    keywords:
      'ATV South Ubud, ATV Ubud murah, quad bike Ubud, tur ATV sawah Bali, harga ATV South Ubud',
    image: '/images/hero.webp',
    ogType: 'article',
  },
  beach: {
    title: 'Tur ATV Pantai Bali — Quad Bike Pesisir | IDR 975.000',
    description:
      'ATV di pantai Bali: riding 2 jam, jalur pasir & angin laut. Transfer dari area Canggu, nasi goreng, safety gear. Booking ATV pantai Bali.',
    keywords:
      'ATV pantai Bali, quad bike pantai, tur ATV Canggu, ATV pesisir Bali, harga ATV pantai',
    image: '/images/hero.webp',
    ogType: 'article',
  },
}

export function getPackageSeo(id: PackageId, lang: Lang): PageSeo {
  const meta = lang === 'en' ? packageSeoEn[id] : packageSeoId[id]
  return { ...meta, path: `/packages/${id}` }
}

export const sitemapPaths = [
  '/',
  '/about',
  ...packageIds.map((id) => `/packages/${id}`),
]
