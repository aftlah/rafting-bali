import type { Lang } from '../i18n/dictionaries'
import type { PackageId } from '../data/site'
import type { ComboId } from '../data/combos'
import { packageIds } from '../data/site'
import { comboIds } from '../data/combos'

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

const comboSeoEn: Record<ComboId, Omit<PageSeo, 'path'>> = {
  'south-rafting': {
    title: 'South Ubud ATV + Ayung Rafting Combo — From IDR 675.000',
    description:
      'Combo South Ubud ATV and Ayung white water rafting: 1.5h quad bike + 2h rafting, private transfer, Indonesian lunch, gear & insurance. Book via WhatsApp.',
    keywords:
      'ATV rafting combo Bali, South Ubud ATV rafting, Ayung rafting combo, combo ATV Bali, harga combo ATV rafting',
    image: '/images/hero.webp',
    ogType: 'article',
  },
  'north-rafting': {
    title: 'North Ubud ATV + Ayung Rafting Combo — From IDR 825.000',
    description:
      'Combo North Ubud ATV and Ayung rafting tour: jungle trails, 2-hour rafting, lunch, hotel transfer & safety gear included. Full-day Bali adventure.',
    keywords:
      'North Ubud ATV rafting, combo ATV North Ubud, Ayung rafting Bali, ATV arung jeram combo',
    image: '/images/hero.webp',
    ogType: 'article',
  },
  'batur-jeep-north': {
    title: 'Mt Batur Jeep Sunrise + North Ubud ATV — From IDR 1.080.000',
    description:
      'Combo Mount Batur jeep sunrise and North Ubud ATV: Kintamani sunrise, light breakfast, 1.5h quad bike, lunch & private transfer. Book Bali combo tour.',
    keywords:
      'Batur jeep sunrise ATV, combo Gunung Batur ATV, jeep sunrise Bali ATV, North Ubud combo tour',
    image: '/images/hero.webp',
    ogType: 'article',
  },
}

const comboSeoId: Record<ComboId, Omit<PageSeo, 'path'>> = {
  'south-rafting': {
    title: 'Combo ATV South Ubud + Arung Jeram Ayung — Mulai IDR 675.000',
    description:
      'Combo ATV South Ubud dan arung jeram Ayung: ATV 1,5 jam + rafting 2 jam, transfer privat, makan Indonesia, gear & asuransi. Booking via WhatsApp.',
    keywords:
      'combo ATV rafting Bali, ATV South Ubud arung jeram, combo ATV Ayung, harga combo ATV rafting',
    image: '/images/hero.webp',
    ogType: 'article',
  },
  'north-rafting': {
    title: 'Combo ATV North Ubud + Arung Jeram Ayung — Mulai IDR 825.000',
    description:
      'Combo ATV North Ubud dan arung jeram Ayung: jalur hutan, rafting 2 jam, makan siang, transfer hotel & safety gear. Petualangan Bali seharian.',
    keywords:
      'ATV North Ubud arung jeram, combo ATV North Ubud, rafting Ayung Bali, combo ATV arung jeram',
    image: '/images/hero.webp',
    ogType: 'article',
  },
  'batur-jeep-north': {
    title: 'Jeep Sunrise Gunung Batur + ATV North Ubud — Mulai IDR 1.080.000',
    description:
      'Combo jeep sunrise Gunung Batur dan ATV North Ubud: sunrise Kintamani, sarapan ringan, ATV 1,5 jam, makan siang & transfer privat.',
    keywords:
      'jeep sunrise Batur ATV, combo Gunung Batur ATV, jeep sunrise Bali ATV, combo tur North Ubud',
    image: '/images/hero.webp',
    ogType: 'article',
  },
}

export const combosHubSeo: Record<Lang, PageSeo> = {
  en: {
    title: 'ATV Combo Tours Bali — Rafting & Jeep Sunrise | Wild ATV Bali',
    description:
      'Book Bali ATV combo tours: South/North Ubud + Ayung rafting from IDR 675.000, or Mt Batur jeep sunrise + ATV. Private transfer, lunch & gear included.',
    keywords:
      'ATV combo Bali, rafting combo Ubud, jeep sunrise ATV Bali, combo tour Bali, Wild ATV Bali combo',
    path: '/combos',
    image: '/images/hero.webp',
  },
  id: {
    title: 'Tur Combo ATV Bali — Arung Jeram & Jeep Sunrise | Wild ATV Bali',
    description:
      'Booking tur combo ATV Bali: South/North Ubud + arung jeram Ayung mulai IDR 675.000, atau jeep sunrise Gunung Batur + ATV. Termasuk transfer, makan siang & gear.',
    keywords:
      'combo ATV Bali, combo arung jeram Ubud, jeep sunrise ATV Bali, tur combo Bali',
    path: '/combos',
    image: '/images/hero.webp',
  },
}

export function getCombosSeo(lang: Lang): PageSeo {
  return combosHubSeo[lang]
}

export function getComboSeo(id: ComboId, lang: Lang): PageSeo {
  const meta = lang === 'en' ? comboSeoEn[id] : comboSeoId[id]
  return { ...meta, path: `/combos/${id}` }
}

export const sitemapPaths = [
  '/',
  '/about',
  '/combos',
  ...packageIds.map((id) => `/packages/${id}`),
  ...comboIds.map((id) => `/combos/${id}`),
]
