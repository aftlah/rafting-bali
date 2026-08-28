import type { PackageId } from '../data/site'
import type { Lang } from './dictionaries'

export type ItineraryStep = { time: string; text: string }

export type ScheduleBlock = {
  id: string
  label: string
  steps: ItineraryStep[]
}

export type PackageDetailCopy = {
  labels: {
    pricesTitle: string
    minPersons: string
    withoutTransfer: string
    withUbudTransfer: string
    withOutsideUbudTransfer: string
    withCangguTransfer: string
    withOutsideCangguTransfer: string
    single: string
    tandem: string
    perPerson: string
    twoPersons: string
    includedTitle: string
    transferNote: string
    pickUpTime: string
    morningTrip: string
    afternoonTrip: string
    sunsetTrip: string
    itinerary: string
    whatToBring: string
    additionalInfo: string
    termsConditions: string
    groupBookingNote: string
  }
  pickupAreas: Record<string, string>
  whatToBring: string[]
  additionalInfo: string[]
  terms: string[]
  packages: Record<PackageId, { schedules: ScheduleBlock[] }>
}

const hotelAreas =
  'Ubud, Sanur, Kuta, Seminyak, Legian, Nusa Dua, Jimbaran, Pecatu, Canggu, Tanjung Benoa'

const hotelAreasId =
  'Ubud, Sanur, Kuta, Seminyak, Legian, Nusa Dua, Jimbaran, Pecatu, Canggu, Tanjung Benoa'

function ubudSchedules(
  tourName: string,
  lunchMorning: string,
  lunchAfternoon: string,
  lang: Lang,
): ScheduleBlock[] {
  const pickup =
    lang === 'en'
      ? `Pick-up at the hotel. Subject to your hotel location (${hotelAreas})`
      : `Jemput di hotel. Sesuai lokasi hotel Anda (${hotelAreasId})`

  const enjoy = (duration: string) =>
    lang === 'en'
      ? `Enjoy the ${tourName} (${duration})`
      : `Nikmati ${tourName} (${duration})`

  const finish =
    lang === 'en'
      ? 'Arrive at the finish point, take towel, shower and changes'
      : 'Tiba di titik finish, handuk, shower, dan ganti baju'

  const back =
    lang === 'en' ? 'Back to the hotel' : 'Kembali ke hotel'

  return [
    {
      id: 'morning',
      label: lang === 'en' ? 'Morning Trip' : 'Trip Pagi',
      steps: [
        { time: '08.00 – 09.15', text: pickup },
        { time: '10.00', text: enjoy(lang === 'en' ? '1.5 hours' : '1,5 jam') },
        { time: '12.00', text: finish },
        { time: '12.30', text: lunchMorning },
        { time: '13.30', text: back },
      ],
    },
    {
      id: 'afternoon',
      label: lang === 'en' ? 'Afternoon Trip' : 'Trip Siang',
      steps: [
        { time: '11.00 – 12.15', text: pickup },
        { time: '13.00', text: enjoy(lang === 'en' ? '1.5 hours' : '1,5 jam') },
        { time: '15.00', text: finish },
        { time: '15.30', text: lunchAfternoon },
        { time: '16.30', text: back },
      ],
    },
  ]
}

function beachSchedules(lang: Lang): ScheduleBlock[] {
  const tourName =
    lang === 'en'
      ? 'Bali ATV Quad Bike on the Beach Tour'
      : 'Bali ATV Quad Bike Tur Pantai'
  const pickup =
    lang === 'en'
      ? `Pick-up at the hotel. Subject to your hotel location (${hotelAreas})`
      : `Jemput di hotel. Sesuai lokasi hotel Anda (${hotelAreasId})`

  const enjoy =
    lang === 'en'
      ? `Enjoy the ${tourName} (2 hours)`
      : `Nikmati ${tourName} (2 jam)`

  const finish =
    lang === 'en'
      ? 'Arrive at the finish point, take towel, shower and changes'
      : 'Tiba di titik finish, handuk, shower, dan ganti baju'

  const lunch =
    lang === 'en' ? 'Lunch (Fried Rice)' : 'Makan siang (Nasi Goreng)'

  const dinner =
    lang === 'en' ? 'Dinner (Fried Rice)' : 'Makan malam (Nasi Goreng)'

  const back =
    lang === 'en' ? 'Back to the hotel' : 'Kembali ke hotel'

  return [
    {
      id: 'morning',
      label: lang === 'en' ? 'Morning Trip' : 'Trip Pagi',
      steps: [
        { time: '07.45 – 08.15', text: pickup },
        { time: '10.00', text: enjoy },
        { time: '12.00', text: finish },
        { time: '12.30', text: lunch },
        { time: '13.30', text: back },
      ],
    },
    {
      id: 'afternoon',
      label: lang === 'en' ? 'Afternoon Trip' : 'Trip Siang',
      steps: [
        { time: '10.45 – 11.15', text: pickup },
        { time: '13.00', text: enjoy },
        { time: '15.00', text: finish },
        { time: '15.30', text: lunch },
        { time: '16.30', text: back },
      ],
    },
    {
      id: 'sunset',
      label: lang === 'en' ? 'Sunset Trip' : 'Trip Sunset',
      steps: [
        { time: '13.45 – 14.15', text: pickup },
        { time: '16.00', text: enjoy },
        { time: '18.00', text: finish },
        { time: '18.30', text: dinner },
        { time: '19.30', text: back },
      ],
    },
  ]
}

const sharedEn = {
  whatToBring: [
    'Short pants or a swimsuit',
    'A change of dry clothes',
    'Sunscreen',
    'Hat',
    'Sport shoes or strapped sandals',
    'Extra money',
  ],
  additionalInfo: [
    'The tour is suitable for participants aged 7 – 65',
    'Not recommended for pregnant travelers',
    'Participants are expected to possess a moderate level of physical fitness.',
    'There are no issues with the heart or any other significant medical conditions',
  ],
  terms: [
    'Reservations or bookings via WhatsApp or Booking Form',
    'Payment upon arrival at location (Cash, Debit or Credit Card) or Online Payment (Paypal)',
    'Cancellation fee to 50% of the total payment will be charged if a confirmed booking is cancelled within one day prior to clients pick up',
    'No-Show will be charge of 100% of the total payment',
    'The photos and videos displayed on our website are from one or several providers or partners with whom we collaborate. We work in partnership with several providers or partners.',
    'The location of activities is based on the availability of our providers or partners on the day of the activities',
  ],
}

const sharedId = {
  whatToBring: [
    'Celana pendek atau baju renang',
    'Baju ganti kering',
    'Sunscreen',
    'Topi',
    'Sepatu olahraga atau sandal bertali',
    'Uang tambahan',
  ],
  additionalInfo: [
    'Tur cocok untuk peserta usia 7 – 65 tahun',
    'Tidak direkomendasikan untuk ibu hamil',
    'Peserta diharapkan memiliki tingkat kebugaran sedang.',
    'Tidak ada masalah jantung atau kondisi medis serius lainnya',
  ],
  terms: [
    'Reservasi atau booking via WhatsApp atau Formulir Booking',
    'Pembayaran saat tiba di lokasi (Tunai, Debit atau Kartu Kredit) atau Pembayaran Online (Paypal)',
    'Biaya pembatalan 50% dari total pembayaran jika booking yang dikonfirmasi dibatalkan dalam satu hari sebelum jemputan',
    'No-Show akan dikenakan 100% dari total pembayaran',
    'Foto dan video di website kami berasal dari satu atau beberapa provider atau mitra yang bekerja sama dengan kami.',
    'Lokasi kegiatan berdasarkan ketersediaan provider atau mitra kami pada hari kegiatan',
  ],
}

export const packageDetailContent: Record<Lang, PackageDetailCopy> = {
  en: {
    labels: {
      pricesTitle: 'Prices (Minimum 2 persons)',
      minPersons: 'Minimum 2 persons',
      withoutTransfer: 'Without Transfer*',
      withUbudTransfer: 'With Ubud Hotel Transfer:',
      withOutsideUbudTransfer: 'With Outside Ubud Hotel Transfer:',
      withCangguTransfer: 'With Canggu Hotel Transfer:',
      withOutsideCangguTransfer: 'With Outside Canggu Hotel Transfer:',
      single: 'Single',
      tandem: 'Tandem',
      perPerson: '/person',
      twoPersons: '(2 persons)',
      includedTitle: "What's Included",
      transferNote: 'Note: Without Transfer*',
      pickUpTime: 'Pick-Up Time',
      morningTrip: 'Morning Trip',
      afternoonTrip: 'Afternoon Trip',
      sunsetTrip: 'Sunset Trip',
      itinerary: 'Itinerary',
      whatToBring: 'What to Bring',
      additionalInfo: 'Additional Info',
      termsConditions: 'Terms & Conditions',
      groupBookingNote:
        'Note: Terms & conditions for group bookings (over 10 persons) are regulated differently',
    },
    pickupAreas: {
      nusaDuaJimbaran: 'Nusa Dua and Jimbaran',
      kutaSeminyakLegian: 'Kuta, Seminyak, Legian',
      canggu: 'Canggu',
      sanur: 'Sanur',
      ubud: 'Ubud',
    },
    ...sharedEn,
    packages: {
      'north-ubud': {
        schedules: ubudSchedules(
          'Bali ATV Quad Bike North Ubud Tour',
          'Lunch',
          'Lunch (Indonesian Food)',
          'en',
        ),
      },
      'south-ubud': {
        schedules: ubudSchedules(
          'Bali ATV Quad Bike South Ubud Tour',
          'Lunch (Indonesian Food)',
          'Lunch (Indonesian Food)',
          'en',
        ),
      },
      beach: { schedules: beachSchedules('en') },
    },
  },
  id: {
    labels: {
      pricesTitle: 'Harga (Minimum 2 orang)',
      minPersons: 'Minimum 2 orang',
      withoutTransfer: 'Tanpa Transfer*',
      withUbudTransfer: 'Dengan Transfer Hotel Ubud:',
      withOutsideUbudTransfer: 'Dengan Transfer Hotel Luar Ubud:',
      withCangguTransfer: 'Dengan Transfer Hotel Canggu:',
      withOutsideCangguTransfer: 'Dengan Transfer Hotel Luar Canggu:',
      single: 'Single',
      tandem: 'Tandem',
      perPerson: '/orang',
      twoPersons: '(2 orang)',
      includedTitle: 'Yang Termasuk',
      transferNote: 'Catatan: Tanpa Transfer*',
      pickUpTime: 'Jam Jemput',
      morningTrip: 'Trip Pagi',
      afternoonTrip: 'Trip Siang',
      sunsetTrip: 'Trip Sunset',
      itinerary: 'Itinerary',
      whatToBring: 'Yang Dibawa',
      additionalInfo: 'Info Tambahan',
      termsConditions: 'Syarat & Ketentuan',
      groupBookingNote:
        'Catatan: Syarat & ketentuan untuk booking grup (lebih dari 10 orang) diatur berbeda',
    },
    pickupAreas: {
      nusaDuaJimbaran: 'Nusa Dua dan Jimbaran',
      kutaSeminyakLegian: 'Kuta, Seminyak, Legian',
      canggu: 'Canggu',
      sanur: 'Sanur',
      ubud: 'Ubud',
    },
    ...sharedId,
    packages: {
      'north-ubud': {
        schedules: ubudSchedules(
          'Bali ATV Quad Bike Tur North Ubud',
          'Makan siang',
          'Makan siang (Masakan Indonesia)',
          'id',
        ),
      },
      'south-ubud': {
        schedules: ubudSchedules(
          'Bali ATV Quad Bike Tur South Ubud',
          'Makan siang (Masakan Indonesia)',
          'Makan siang (Masakan Indonesia)',
          'id',
        ),
      },
      beach: { schedules: beachSchedules('id') },
    },
  },
}
