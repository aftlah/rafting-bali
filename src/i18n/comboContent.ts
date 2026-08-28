import type { ComboId } from '../data/combos'
import type { Lang } from './dictionaries'

export type ComboPriceTier = { label: string; price: string }

export type ComboPriceGroup = {
  title: string
  tiers: ComboPriceTier[]
}

export type ComboItemCopy = {
  title: string
  longDescription: string
  message: string
  includes: string[]
  priceGroups: ComboPriceGroup[]
  pickupSlots: { areaKey: string; time: string }[]
  itinerary: { time: string; text: string }[]
  itineraryNote?: string
  whatToBring?: string[]
}

export type ComboContent = {
  page: {
    title: string
    lead: string
    viewDetails: string
    bookThis: string
    back: string
    backToCombos: string
  }
  combos: Record<ComboId, ComboItemCopy>
}

const hotelAreas =
  'Ubud, Sanur, Kuta, Seminyak, Legian, Nusa Dua, Jimbaran, Pecatu, Canggu, Tanjung Benoa'

const raftingPickup = [
  { areaKey: 'nusaDuaJimbaran', time: '08.00 – 08.15' },
  { areaKey: 'kutaSeminyakLegian', time: '08.00 – 08.15' },
  { areaKey: 'canggu', time: '08.00 – 08.15' },
  { areaKey: 'sanur', time: '08.30 – 08.45' },
  { areaKey: 'ubud', time: '09.00 – 09.15' },
]

const jeepPickup = [
  { areaKey: 'nusaDuaJimbaran', time: '02.00 – 02.15' },
  { areaKey: 'kutaSeminyakLegian', time: '02.15 – 02.30' },
  { areaKey: 'canggu', time: '02.15 – 02.30' },
  { areaKey: 'sanur', time: '02.30 – 02.45' },
  { areaKey: 'ubud', time: '02.45 – 03.00' },
]

const raftingItineraryNoteEn =
  'Note: The itinerary is subject to conditions and circumstances on-site. The schedule may change, with Ayung River Rafting first, followed by the ATV Quad Bike tour.'

const raftingItineraryNoteId =
  'Catatan: Itinerary dapat berubah sesuai kondisi di lokasi. Jadwal bisa berubah, dengan Arung Jeram Ayung terlebih dahulu, diikuti Tur ATV Quad Bike.'

export const comboContent: Record<Lang, ComboContent> = {
  en: {
    page: {
      title: 'Combo ATV & Adventure Tours',
      lead:
        'Pair your ATV ride with Ayung rafting or a Mount Batur jeep sunrise — full-day adventures with private transfer, lunch, and gear included.',
      viewDetails: 'View details',
      bookThis: 'Book this combo',
      back: 'Back to combos',
      backToCombos: '← All combo tours',
    },
    combos: {
      'south-rafting': {
        title: 'Combo Bali ATV Quad Bike South Ubud and Ayung Rafting Tour',
        longDescription:
          'Experience the ultimate adventure with the Combo Bali ATV Quad Bike South Ubud and Ayung Rafting Tour. This thrilling day begins with a hassle-free hotel pick-up and drop-off in a private car. Your journey starts with a heart-pounding 1.5-hour ATV Quad Bike Tour in southern Ubud, led by a professional English-speaking guide. Following your ATV adventure, savor a delicious Indonesian lunch, then head to the Ayung River for an unforgettable 2-hour rafting experience.',
        message:
          'Hi Wild ATV Bali, I would like to book the Combo South Ubud ATV + Ayung Rafting tour.',
        includes: [
          'Hotel pick-up and drop-off (Private Car)',
          'Rafting activity (approximately 2 hours)',
          'ATV Quad Bike Tour (approximately 1.5 hours)',
          'Professional guide (English speaking)',
          'Refreshment (Water, Coffee, Tea)',
          'Lunch (Indonesian Food)',
          'All necessary equipment (Paddle, Waterproof Bag)',
          'All necessary safety gear (Helmet, Life Jacket, Boots)',
          'Towel & Shower Room',
          'Locker & Change Room',
          'Insurance coverage (ATV & Rafting)',
          'Service charge and government tax',
        ],
        priceGroups: [
          {
            title: 'Combo (ATV Single & Rafting)',
            tiers: [
              { label: '4–6 persons', price: '885.000' },
              { label: '2–3 persons', price: '975.000' },
              { label: '1 person (Solo Traveler)', price: '1.170.000' },
            ],
          },
          {
            title: 'Combo (ATV Tandem & Rafting)',
            tiers: [
              { label: '4–6 persons', price: '675.000' },
              { label: '2 persons', price: '885.000' },
            ],
          },
        ],
        pickupSlots: raftingPickup,
        itinerary: [
          {
            time: '08.00 – 09.15',
            text: `Pick-up at the hotel. Subject to your hotel location (${hotelAreas})`,
          },
          { time: '10.00', text: 'Enjoy the Bali ATV Quad Bike South Ubud Tour' },
          { time: '12.00', text: 'Lunch (Indonesian Food)' },
          { time: '13.00', text: 'Enjoy Ayung River Rafting' },
          {
            time: '15.00',
            text: 'Arrive at the finish point, take towel, shower and changes',
          },
          { time: '16.00', text: 'Back to the hotel' },
        ],
        itineraryNote: raftingItineraryNoteEn,
      },
      'north-rafting': {
        title: 'Combo Bali ATV Quad Bike North Ubud and Ayung Rafting Tour',
        longDescription:
          'The Combo Bali ATV Quad Bike North Ubud and Ayung Rafting Tour offers an exciting adventure in the heart of Bali’s natural beauty. Experience an exhilarating ATV Quad Bike Tour through northern Ubud for approximately 1.5 hours, then enjoy a delicious lunch before heading to the Ayung River for an incredible 2-hour rafting experience — all with private transfer, safety gear, and insurance included.',
        message:
          'Hi Wild ATV Bali, I would like to book the Combo North Ubud ATV + Ayung Rafting tour.',
        includes: [
          'Hotel pick-up and drop-off (Private Car)',
          'Rafting activity (approximately 2 hours)',
          'ATV Quad Bike Tour (approximately 1.5 hours)',
          'Professional guide (English speaking)',
          'Refreshment (Water, Coffee, Tea)',
          'Lunch',
          'All necessary equipment (Paddle, Waterproof Bag)',
          'All necessary safety gear (Helmet, Life Jacket, Boots)',
          'Towel & Shower Room',
          'Locker & Change Room',
          'Insurance coverage (ATV & Rafting)',
          'Service charge and government tax',
        ],
        priceGroups: [
          {
            title: 'Combo (ATV Single & Rafting)',
            tiers: [
              { label: '4–6 persons', price: '1.035.000' },
              { label: '2–3 persons', price: '1.125.000' },
              { label: '1 person (Solo Traveler)', price: '1.320.000' },
            ],
          },
          {
            title: 'Combo (ATV Tandem & Rafting)',
            tiers: [
              { label: '4–6 persons', price: '825.000' },
              { label: '2 persons', price: '1.035.000' },
            ],
          },
        ],
        pickupSlots: raftingPickup,
        itinerary: [
          {
            time: '08.00 – 09.15',
            text: `Pick-up at the hotel. Subject to your hotel location (${hotelAreas})`,
          },
          { time: '10.00', text: 'Enjoy the Bali ATV Quad Bike North Ubud Tour' },
          { time: '12.00', text: 'Lunch' },
          { time: '13.00', text: 'Enjoy the Ayung River Rafting' },
          {
            time: '15.00',
            text: 'Arrive at the finish point, take towel, shower and changes',
          },
          { time: '16.00', text: 'Back to the hotel' },
        ],
        itineraryNote: raftingItineraryNoteEn,
      },
      'batur-jeep-north': {
        title: 'Combo Mt Batur Jeep Sunrise & Bali ATV Quad Bike North Ubud Tour',
        longDescription:
          'Experience the thrill of the Combo Mount Batur Jeep Sunrise & Bali ATV Quad Bike North Ubud Tour with seamless hotel pick-up and drop-off in a private car. Watch the sunrise atop Mount Batur with an English-speaking 4WD jeep driver, light breakfast, and Kintamani entrance fees included — then ride North Ubud ATV trails for 1.5 hours before lunch and return to your hotel.',
        message:
          'Hi Wild ATV Bali, I would like to book the Combo Mt Batur Jeep Sunrise + North Ubud ATV tour.',
        includes: [
          'Hotel pick-up and drop-off (Private Car)',
          'Mount Batur Jeep Sunrise Tour',
          '4WD Jeep Driver (English Speaking)',
          'Kintamani Entrance Fees',
          'Light Breakfast',
          'ATV Quad Bike Tour (approximately 1.5 hours)',
          'Professional ATV guide (English speaking)',
          'All necessary safety gear (Helmet, Boots)',
          'Towel, Locker, Shower & Change Room',
          'Lunch (Sandwich)',
          'Insurance coverage (ATV Quad Bike)',
          'Service charge and government tax',
        ],
        priceGroups: [
          {
            title: 'Combo (ATV Single & Jeep Tour)',
            tiers: [
              { label: '3–6 persons', price: '1.185.000' },
              { label: '2 persons', price: '1.335.000' },
              { label: '1 person (Solo Traveler)', price: '2.025.000' },
            ],
          },
          {
            title: 'Combo (ATV Tandem & Jeep Tour)',
            tiers: [
              { label: '4–6 persons', price: '1.080.000' },
              { label: '2 persons', price: '1.185.000' },
            ],
          },
        ],
        pickupSlots: jeepPickup,
        itinerary: [
          {
            time: '02.00 – 03.00',
            text: `(Early Morning) Pick-up at the hotel. Subject to your hotel location (${hotelAreas})`,
          },
          { time: '04.30', text: 'Arrive at the starting point' },
          {
            time: '05.30',
            text: 'Arrive at Sunrise Viewpoint (Enjoying the sunrise, taking photos, and having breakfast)',
          },
          { time: '07.30', text: 'Coming back down the mountain' },
          {
            time: '09.30',
            text: 'Enjoy the Bali ATV Quad Bike North Ubud Tour (1.5 hours)',
          },
          {
            time: '11.30',
            text: 'Arrive at the finish point, take towel, shower and changes',
          },
          { time: '12.00', text: 'Lunch' },
          { time: '13.00', text: 'Back to the hotel' },
        ],
        whatToBring: [
          'Jacket',
          'Short pants or a swimsuit',
          'A change of dry clothes',
          'Sunscreen',
          'Hat',
          'Sport shoes or strapped sandals',
          'Extra money',
        ],
      },
    },
  },
  id: {
    page: {
      title: 'Combo ATV & Petualangan',
      lead:
        'Gabungkan ATV dengan arung jeram Ayung atau jeep sunrise Gunung Batur — petualangan seharian penuh dengan transfer privat, makan siang, dan peralatan lengkap.',
      viewDetails: 'Lihat detail',
      bookThis: 'Booking combo ini',
      back: 'Kembali ke combo',
      backToCombos: '← Semua tur combo',
    },
    combos: {
      'south-rafting': {
        title: 'Combo ATV Quad Bike South Ubud dan Arung Jeram Ayung',
        longDescription:
          'Rasakan petualangan terbaik dengan Combo ATV Quad Bike South Ubud dan Arung Jeram Ayung. Hari penuh dimulai dengan jemputan dan antar hotel dengan mobil privat. Perjalanan dimulai dengan tur ATV Quad Bike 1,5 jam di South Ubud bersama guide berbahasa Inggris, diikuti makan siang Indonesia, lalu arung jeram Sungai Ayung selama 2 jam.',
        message:
          'Halo Wild ATV Bali, saya ingin booking Combo ATV South Ubud + Arung Jeram Ayung.',
        includes: [
          'Jemput & antar hotel (Mobil Privat)',
          'Aktivitas arung jeram (sekitar 2 jam)',
          'Tur ATV Quad Bike (sekitar 1,5 jam)',
          'Guide profesional (berbahasa Inggris)',
          'Refreshment (Air, Kopi, Teh)',
          'Makan siang (Masakan Indonesia)',
          'Semua peralatan (Dayung, Tas Anti Air)',
          'Safety gear lengkap (Helm, Life Jacket, Boots)',
          'Handuk & Kamar Mandi',
          'Locker & Ruang Ganti',
          'Asuransi (ATV & Arung Jeram)',
          'Service charge dan pajak pemerintah',
        ],
        priceGroups: [
          {
            title: 'Combo (ATV Single & Arung Jeram)',
            tiers: [
              { label: '4–6 orang', price: '885.000' },
              { label: '2–3 orang', price: '975.000' },
              { label: '1 orang (Solo)', price: '1.170.000' },
            ],
          },
          {
            title: 'Combo (ATV Tandem & Arung Jeram)',
            tiers: [
              { label: '4–6 orang', price: '675.000' },
              { label: '2 orang', price: '885.000' },
            ],
          },
        ],
        pickupSlots: raftingPickup,
        itinerary: [
          {
            time: '08.00 – 09.15',
            text: `Jemput di hotel. Sesuai lokasi hotel Anda (${hotelAreas})`,
          },
          { time: '10.00', text: 'Nikmati Tur ATV Quad Bike South Ubud' },
          { time: '12.00', text: 'Makan siang (Masakan Indonesia)' },
          { time: '13.00', text: 'Nikmati Arung Jeram Sungai Ayung' },
          {
            time: '15.00',
            text: 'Tiba di titik finish, handuk, shower, dan ganti baju',
          },
          { time: '16.00', text: 'Kembali ke hotel' },
        ],
        itineraryNote: raftingItineraryNoteId,
      },
      'north-rafting': {
        title: 'Combo ATV Quad Bike North Ubud dan Arung Jeram Ayung',
        longDescription:
          'Combo ATV Quad Bike North Ubud dan Arung Jeram Ayung menawarkan petualangan seru di jantung alam Bali. Nikmati tur ATV 1,5 jam di North Ubud, makan siang, lalu arung jeram Sungai Ayung selama 2 jam — termasuk transfer privat, safety gear, dan asuransi.',
        message:
          'Halo Wild ATV Bali, saya ingin booking Combo ATV North Ubud + Arung Jeram Ayung.',
        includes: [
          'Jemput & antar hotel (Mobil Privat)',
          'Aktivitas arung jeram (sekitar 2 jam)',
          'Tur ATV Quad Bike (sekitar 1,5 jam)',
          'Guide profesional (berbahasa Inggris)',
          'Refreshment (Air, Kopi, Teh)',
          'Makan siang',
          'Semua peralatan (Dayung, Tas Anti Air)',
          'Safety gear lengkap (Helm, Life Jacket, Boots)',
          'Handuk & Kamar Mandi',
          'Locker & Ruang Ganti',
          'Asuransi (ATV & Arung Jeram)',
          'Service charge dan pajak pemerintah',
        ],
        priceGroups: [
          {
            title: 'Combo (ATV Single & Arung Jeram)',
            tiers: [
              { label: '4–6 orang', price: '1.035.000' },
              { label: '2–3 orang', price: '1.125.000' },
              { label: '1 orang (Solo)', price: '1.320.000' },
            ],
          },
          {
            title: 'Combo (ATV Tandem & Arung Jeram)',
            tiers: [
              { label: '4–6 orang', price: '825.000' },
              { label: '2 orang', price: '1.035.000' },
            ],
          },
        ],
        pickupSlots: raftingPickup,
        itinerary: [
          {
            time: '08.00 – 09.15',
            text: `Jemput di hotel. Sesuai lokasi hotel Anda (${hotelAreas})`,
          },
          { time: '10.00', text: 'Nikmati Tur ATV Quad Bike North Ubud' },
          { time: '12.00', text: 'Makan siang' },
          { time: '13.00', text: 'Nikmati Arung Jeram Sungai Ayung' },
          {
            time: '15.00',
            text: 'Tiba di titik finish, handuk, shower, dan ganti baju',
          },
          { time: '16.00', text: 'Kembali ke hotel' },
        ],
        itineraryNote: raftingItineraryNoteId,
      },
      'batur-jeep-north': {
        title: 'Combo Jeep Sunrise Gunung Batur & ATV Quad Bike North Ubud',
        longDescription:
          'Rasakan sensasi Combo Jeep Sunrise Gunung Batur & ATV Quad Bike North Ubud dengan jemputan dan antar hotel mobil privat. Saksikan sunrise di puncak Gunung Batur dengan driver jeep 4WD berbahasa Inggris, sarapan ringan, dan tiket masuk Kintamani — lalu riding ATV North Ubud 1,5 jam sebelum makan siang dan kembali ke hotel.',
        message:
          'Halo Wild ATV Bali, saya ingin booking Combo Jeep Sunrise Gunung Batur + ATV North Ubud.',
        includes: [
          'Jemput & antar hotel (Mobil Privat)',
          'Tur Jeep Sunrise Gunung Batur',
          'Driver Jeep 4WD (Berbahasa Inggris)',
          'Tiket Masuk Kintamani',
          'Sarapan Ringan',
          'Tur ATV Quad Bike (sekitar 1,5 jam)',
          'Guide ATV profesional (berbahasa Inggris)',
          'Safety gear lengkap (Helm, Boots)',
          'Handuk, Locker, Shower & Ruang Ganti',
          'Makan siang (Sandwich)',
          'Asuransi (ATV Quad Bike)',
          'Service charge dan pajak pemerintah',
        ],
        priceGroups: [
          {
            title: 'Combo (ATV Single & Tur Jeep)',
            tiers: [
              { label: '3–6 orang', price: '1.185.000' },
              { label: '2 orang', price: '1.335.000' },
              { label: '1 orang (Solo)', price: '2.025.000' },
            ],
          },
          {
            title: 'Combo (ATV Tandem & Tur Jeep)',
            tiers: [
              { label: '4–6 orang', price: '1.080.000' },
              { label: '2 orang', price: '1.185.000' },
            ],
          },
        ],
        pickupSlots: jeepPickup,
        itinerary: [
          {
            time: '02.00 – 03.00',
            text: `(Pagi Buta) Jemput di hotel. Sesuai lokasi hotel Anda (${hotelAreas})`,
          },
          { time: '04.30', text: 'Tiba di titik start' },
          {
            time: '05.30',
            text: 'Tiba di titik Sunrise (Menikmati sunrise, foto, dan sarapan)',
          },
          { time: '07.30', text: 'Turun dari gunung' },
          {
            time: '09.30',
            text: 'Nikmati Tur ATV Quad Bike North Ubud (1,5 jam)',
          },
          {
            time: '11.30',
            text: 'Tiba di titik finish, handuk, shower, dan ganti baju',
          },
          { time: '12.00', text: 'Makan siang' },
          { time: '13.00', text: 'Kembali ke hotel' },
        ],
        whatToBring: [
          'Jaket',
          'Celana pendek atau baju renang',
          'Baju ganti kering',
          'Sunscreen',
          'Topi',
          'Sepatu olahraga atau sandal bertali',
          'Uang tambahan',
        ],
      },
    },
  },
}
