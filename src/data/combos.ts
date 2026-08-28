import foto2 from '../assets/foto-atv/52159384-4d8a-4ac3-bde5-e554bda7ebed.jfif'
import foto3 from '../assets/foto-atv/23169026-6012-4a14-8819-c74905e94466.jfif'
import foto6 from '../assets/foto-atv/042d5b82-8053-4394-8974-7fdd9939bedf.jfif'

export type ComboId = 'south-rafting' | 'north-rafting' | 'batur-jeep-north'

export const comboIds: ComboId[] = [
  'south-rafting',
  'north-rafting',
  'batur-jeep-north',
]

export const comboMeta: Record<
  ComboId,
  { price: string; image: string; heroImage: string }
> = {
  'south-rafting': {
    price: '675.000',
    image: foto3,
    heroImage: foto3,
  },
  'north-rafting': {
    price: '825.000',
    image: foto2,
    heroImage: foto2,
  },
  'batur-jeep-north': {
    price: '1.080.000',
    image: foto6,
    heroImage: foto6,
  },
}
