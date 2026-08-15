export const WHATSAPP = '6282235391112'
export const PHONE_DISPLAY = '+62 822-3539-1112'
export const PHONE_ALT = '+62 812-2866-2971'
export const EMAIL = 'info@ubudayungrafting.com'
export const ADDRESS =
  'Jalan Raya Kedewatan, Banjar Tanggayuda, Desa Kedewatan, Kecamatan Ubud, Bali 80571'
export const NIB = '0105240058676'
export const COMPANY = 'PT. Bali Jelajah Wisata'
export const RATING = '4.9'
export const REVIEW_COUNT = '150+'

/** Google Maps embed — update if client shares a precise pin */
export const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=Jalan%20Raya%20Kedewatan%20Banjar%20Tanggayuda%20Desa%20Kedewatan%20Ubud%20Bali&z=15&output=embed'

export const MAP_LINK =
  'https://www.google.com/maps/search/?api=1&query=Jalan+Raya+Kedewatan+Banjar+Tanggayuda+Desa+Kedewatan+Ubud+Bali'

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`
}

export type PackageId = 'own-transport' | 'ubud-transfer' | 'outside-ubud'

export const packageMeta: Record<
  PackageId,
  { price: string; featured: boolean }
> = {
  'own-transport': { price: '310.000', featured: false },
  'ubud-transfer': { price: '415.000', featured: true },
  'outside-ubud': { price: '520.000', featured: false },
}

export const packageIds = Object.keys(packageMeta) as PackageId[]

export const comboMeta = {
  id: 'combo-atv',
  price: '895.000',
} as const

export type GalleryCategory = 'rafting' | 'nature' | 'facilities'

export type GalleryItem = {
  src: string
  category: GalleryCategory
}

/** Placeholder imagery — replace with client photos before launch */
export const images = {
  hero: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=2400&q=80',
  combo:
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80',
  about:
    'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1600&q=80',
  gallery: [
    {
      src: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80',
      category: 'rafting',
    },
    {
      src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f5b4b?auto=format&fit=crop&w=1200&q=80',
      category: 'nature',
    },
    {
      src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      category: 'nature',
    },
    {
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
      category: 'nature',
    },
    {
      src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80',
      category: 'facilities',
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
      category: 'rafting',
    },
    {
      src: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&q=80',
      category: 'rafting',
    },
    {
      src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      category: 'facilities',
    },
  ] satisfies GalleryItem[],
}
