export const WHATSAPP = '6282235391112'
export const PHONE_DISPLAY = '+62 822-3539-1112'
export const PHONE_ALT = '+62 812-2866-2971'
export const EMAIL = 'info@ubudayungrafting.com'
export const ADDRESS =
  'Jalan Raya Kedewatan, Banjar Tanggayuda, Desa Kedewatan, Kecamatan Ubud, Bali 80571'

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`
}

export const packages = [
  {
    id: 'own-transport',
    title: 'Own Transport',
    subtitle: 'Ayung White Water Rafting',
    price: '310.000',
    featured: false,
    blurb: 'Meet us at the activity base — ideal if you already have a driver or scooter.',
    includes: [
      'Rafting ~2 hours',
      'English-speaking guide',
      'Indonesian lunch',
      'All equipment & safety gear',
      'Locker, towel & shower',
      'Insurance, service & tax',
    ],
    message:
      'Hi! I want to book Ayung Rafting with Own Transport (from IDR 310.000).',
  },
  {
    id: 'ubud-transfer',
    title: 'Ubud Private Transfer',
    subtitle: 'Ayung White Water Rafting',
    price: '415.000',
    featured: true,
    blurb: 'Hotel pick-up and drop-off in Ubud — the easiest full-day adventure.',
    includes: [
      'Ubud hotel pick-up & drop-off',
      'Rafting ~2 hours',
      'English-speaking guide',
      'Indonesian lunch',
      'All equipment & safety gear',
      'Locker, towel & shower',
      'Insurance, service & tax',
    ],
    message:
      'Hi! I want to book Ayung Rafting with Ubud Private Transfer (from IDR 415.000).',
  },
  {
    id: 'outside-ubud',
    title: 'Outside Ubud Transfer',
    subtitle: 'Ayung White Water Rafting',
    price: '520.000',
    featured: false,
    blurb: 'Private transfer from areas outside Ubud — Kuta, Seminyak, Sanur, and more.',
    includes: [
      'Outside Ubud pick-up & drop-off',
      'Rafting ~2 hours',
      'English-speaking guide',
      'Indonesian lunch',
      'All equipment & safety gear',
      'Locker, towel & shower',
      'Insurance, service & tax',
    ],
    message:
      'Hi! I want to book Ayung Rafting with Outside Ubud Private Transfer (from IDR 520.000).',
  },
] as const

export const combo = {
  title: 'ATV + Ayung Rafting Combo',
  price: '895.000',
  blurb: 'Quad bike through jungle trails, then ride the river — one unforgettable Bali day.',
  message:
    'Hi! I want to book the Combo Bali ATV Quad Bike and Ayung White Water Rafting (from IDR 895.000).',
}

export const reasons = [
  {
    id: 'price',
    title: 'Best price guarantee',
    text: 'Unbeatable rates for the full Ayung experience — no hidden fees.',
  },
  {
    id: 'payment',
    title: 'Payment on arrival',
    text: 'Pay with cash, debit, or credit card when you arrive — no upfront stress.',
  },
  {
    id: 'booking',
    title: 'Easy booking',
    text: 'Reserve in minutes via WhatsApp or the inquiry form — confirmation is fast.',
  },
] as const

export const steps = [
  {
    n: '01',
    title: 'Meet & gear up',
    text: 'Briefing, life jacket, helmet — then descend into the Ayung gorge.',
  },
  {
    n: '02',
    title: 'Ride the river',
    text: 'About two hours of rapids, rainforest walls, and waterfall pauses.',
  },
  {
    n: '03',
    title: 'Lunch & unwind',
    text: 'Hot shower, locker, towel, then Indonesian lunch overlooking the valley.',
  },
]

export const reviews = [
  {
    name: 'Sophie',
    place: 'Australia',
    text: 'A perfect mix of thrill and jungle scenery. Pickup was on time and the guides made everyone feel safe.',
  },
  {
    name: 'Marco',
    place: 'Italy',
    text: 'Clear booking, friendly crew, and lunch that actually tasted great after the paddle. Highly recommend.',
  },
  {
    name: 'Aiko',
    place: 'Japan',
    text: 'First-time rafting and it felt easy to follow. Beautiful river, professional team throughout.',
  },
]

/** Placeholder imagery — replace with client photos before launch */
export const images = {
  hero: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=2400&q=80',
  packages:
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
  combo:
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1504280390367-361c6d9f5b4b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
  ],
}
