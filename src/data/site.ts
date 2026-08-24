export const WHATSAPP = '6285737292988'
export const PHONE_DISPLAY = '+62 857-3729-2988'
export const PHONE_ALT: string = ''
export const EMAIL = 'putu.karang2609@gmail.com'
export const ADDRESS =
  'Jalan Tegal Harum No. 5, Kesiman Kertalangu, Denpasar Timur, Denpasar, Bali 80237'
export const COMPANY = 'Wild ATV Bali'
export const NIB = ''
export const RATING = '4.9'
export const REVIEW_COUNT = '150+'

/** Marketing office / Ubud area map */
export const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=Jalan%20Tegal%20Harum%20No.%205%20Kesiman%20Kertalangu%20Denpasar%20Bali&z=14&output=embed'

export const MAP_LINK =
  'https://www.google.com/maps/search/?api=1&query=Jalan+Tegal+Harum+No.+5+Kesiman+Kertalangu+Denpasar+Bali'

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

export const comboMeta = {
  id: 'combo-rafting',
  price: '675.000',
} as const

export type GalleryCategory = 'atv' | 'trail' | 'beach'

export type GalleryItem = {
  src: string
  category: GalleryCategory
}

/** Placeholder ATV imagery — replace with client photos before launch */
export const images = {
  hero: 'https://images.unsplash.com/photo-1496521061024-90e1c1221555?auto=format&fit=crop&w=2400&q=80',
  combo:
    'https://images.unsplash.com/photo-1582959746698-660400376dd6?auto=format&fit=crop&w=1600&q=80',
  about:
    'https://images.unsplash.com/photo-1507621320306-87a4aac1816c?auto=format&fit=crop&w=1600&q=80',
  gallery: [
    {
      src: 'https://images.unsplash.com/photo-1496521061024-90e1c1221555?auto=format&fit=crop&w=1200&q=80',
      category: 'atv',
    },
    {
      src: 'https://images.unsplash.com/photo-1507621320306-87a4aac1816c?auto=format&fit=crop&w=1200&q=80',
      category: 'atv',
    },
    {
      src: 'https://images.unsplash.com/photo-1582959746698-660400376dd6?auto=format&fit=crop&w=1200&q=80',
      category: 'trail',
    },
    {
      src: 'https://images.unsplash.com/photo-1612118756064-5403ff7747de?auto=format&fit=crop&w=1200&q=80',
      category: 'trail',
    },
    {
      src: 'https://images.unsplash.com/photo-1713472850797-96ef549ba6af?auto=format&fit=crop&w=1200&q=80',
      category: 'trail',
    },
    {
      src: 'https://images.unsplash.com/photo-1721343431343-1a0241c07a2f?auto=format&fit=crop&w=1200&q=80',
      category: 'beach',
    },
    {
      src: 'https://images.unsplash.com/photo-1734410117891-bd6b5c61177e?auto=format&fit=crop&w=1200&q=80',
      category: 'beach',
    },
    {
      src: 'https://images.unsplash.com/photo-1506408334286-246f3e68526c?auto=format&fit=crop&w=1200&q=80',
      category: 'atv',
    },
  ] satisfies GalleryItem[],
}
