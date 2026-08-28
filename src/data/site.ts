import foto1 from '../assets/foto-atv/foto1.jpg'
import foto2 from '../assets/foto-atv/52159384-4d8a-4ac3-bde5-e554bda7ebed.jfif'
import foto3 from '../assets/foto-atv/23169026-6012-4a14-8819-c74905e94466.jfif'
import foto4 from '../assets/foto-atv/95c378c0-de56-40e2-929d-4e063c7877e4.jfif'
import foto5 from '../assets/foto-atv/f73c8a69-de23-4a21-a222-f489686d3aca.jfif'
import foto6 from '../assets/foto-atv/042d5b82-8053-4394-8974-7fdd9939bedf.jfif'
import foto7 from '../assets/foto-atv/c517e504-5c3b-4834-90b1-e10ff5877960.jfif'
import foto8 from '../assets/foto-atv/07d9a9a9-c824-4382-8455-0a99219dd21e.jfif'
import foto9 from '../assets/foto-atv/0dbb40d1-7b70-4272-a644-1200ea407291.jfif'

export const WHATSAPP = '6285737292988'
export const PHONE_DISPLAY = '+62 857-3729-2988'
export const PHONE_ALT: string = ''
export const EMAIL = 'putu.karang2609@gmail.com'
export const ADDRESS =
  'Jl. Begawan Giri, Melinggih Kelod, Kec. Payangan, Kabupaten Gianyar, Bali 80572'
export const COMPANY = 'Wild ATV Bali'
export const NIB = ''
export const RATING = '4.9'
export const REVIEW_COUNT = '150+'

/** Activity base — Payangan, Gianyar */
export const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=Jl.+Begawan+Giri,+Melinggih+Kelod,+Payangan,+Gianyar,+Bali+80572&z=14&output=embed'

export const MAP_LINK =
  'https://www.google.com/maps/search/?api=1&query=Jl.+Begawan+Giri,+Melinggih+Kelod,+Payangan,+Gianyar,+Bali+80572'

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`
}

export type PackageId = 'north-ubud' | 'south-ubud' | 'beach'

export const packageMeta: Record<
  PackageId,
  { price: string; featured: boolean }
> = {
  'north-ubud': { price: '720.000', featured: false },
  'south-ubud': { price: '495.000', featured: true },
  beach: { price: '975.000', featured: false },
}

export const packageIds = Object.keys(packageMeta) as PackageId[]

/** Hero image per package detail page */
export const packageHeroImages: Record<PackageId, string> = {
  'north-ubud': foto2,
  'south-ubud': foto5,
  beach: foto7,
}

export const comboMeta = {
  id: 'combo-rafting',
  price: '675.000',
} as const

export type GalleryCategory = 'atv' | 'trail'

export type GalleryItem = {
  src: string
  category: GalleryCategory
}

export const images = {
  /** High-res hero in /public/images (1350px). Local foto-atv files are only ~1024px. */
  hero: '/images/hero.webp',
  heroSrcSet: [
    { src: '/images/hero-980.webp', width: 980 },
    { src: '/images/hero-1280.webp', width: 1280 },
    { src: '/images/hero.webp', width: 1350 },
  ],
  combo: foto3,
  about: foto2,
  gallery: [
    { src: foto1, category: 'atv' },
    { src: foto2, category: 'atv' },
    { src: foto3, category: 'trail' },
    { src: foto4, category: 'trail' },
    { src: foto5, category: 'atv' },
    { src: foto6, category: 'trail' },
    { src: foto7, category: 'atv' },
    { src: foto8, category: 'trail' },
    { src: foto9, category: 'atv' },
  ] satisfies GalleryItem[],
}
