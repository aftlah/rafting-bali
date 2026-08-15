export const WHATSAPP = '6282235358349'
export const PHONE_DISPLAY = '+62 822-3535-8349'
export const PHONE_ALT = '+62 812-2866-2972'
export const EMAIL = 'info@baliatvubud.com'
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

/** Placeholder imagery — replace with client ATV photos before launch */
export const images = {
  hero: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=2400&q=80',
  combo:
    'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1600&q=80',
  about:
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1600&q=80',
  gallery: [
    {
      src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
      category: 'atv',
    },
    {
      src: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?auto=format&fit=crop&w=1200&q=80',
      category: 'trail',
    },
    {
      src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      category: 'trail',
    },
    {
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      category: 'beach',
    },
    {
      src: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80',
      category: 'beach',
    },
    {
      src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      category: 'atv',
    },
    {
      src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      category: 'trail',
    },
    {
      src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      category: 'atv',
    },
  ] satisfies GalleryItem[],
}
