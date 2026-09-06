import type { PackageId } from '../data/site'

export type Lang = 'en' | 'id'

type PackageCopy = {
  title: string
  subtitle: string
  blurb: string
  includes: string[]
  message: string
  longDescription: string
}

export type Dictionary = {
  brand: string
  brandSub: string
  nav: {
    packages: string
    experience: string
    gallery: string
    about: string
    faq: string
    location: string
    contact: string
    book: string
  }
  lang: { en: string; id: string; label: string }
  hero: {
    brand: string
    title: string
    lead: string
    ctaBook: string
    ctaPackages: string
  }
  why: {
    title: string
    lead: string
    items: { id: string; title: string; text: string }[]
  }
  packages: {
    title: string
    lead: string
    from: string
    book: string
    details: string
    mostBooked: string
    items: Record<PackageId, PackageCopy>
    combo: {
      label: string
      title: string
      blurb: string
      message: string
      ask: string
      viewDetails: string
    }
  }
  detail: {
    back: string
    overview: string
    itinerary: string
    included: string
    notIncluded: string
    goodToKnow: string
    duration: string
    difficulty: string
    minAge: string
    note: string
    bookThis: string
    sharedItinerary: { title: string; text: string }[]
    sharedNotIncluded: string[]
    facts: {
      duration: string
      difficulty: string
      minAge: string
      note: string
    }
  }
  experience: {
    title: string
    lead: string
    steps: { n: string; title: string; text: string }[]
  }
  gallery: {
    title: string
    lead: string
    alt: string
    filters: {
      all: string
      atv: string
      trail: string
    }
    close: string
    prev: string
    next: string
  }
  trust: {
    items: { id: string; title: string; text: string }[]
  }
  about: {
    title: string
    lead: string
    introTitle: string
    intro: string
    teamTitle: string
    teamLead: string
    team: { role: string; text: string }[]
    safetyTitle: string
    safetyLead: string
    safety: { title: string; text: string }[]
    gearTitle: string
    gear: string[]
    cta: string
  }
  reviews: {
    title: string
    lead: string
    items: { name: string; place: string; text: string }[]
    formTitle: string
    formLead: string
    name: string
    namePh: string
    place: string
    placePh: string
    rating: string
    text: string
    textPh: string
    submit: string
    submitting: string
    success: string
    error: string
    pendingNote: string
    notConfigured: string
    loading: string
    empty: string
  }
  faq: {
    title: string
    lead: string
    items: { q: string; a: string }[]
  }
  location: {
    title: string
    lead: string
    addressLabel: string
    openMaps: string
    areasTitle: string
    areas: { name: string; text: string }[]
    tipTitle: string
    tipText: string
  }
  contact: {
    title: string
    lead: string
    phone: string
    email: string
    base: string
    chat: string
    name: string
    date: string
    guests: string
    hotel: string
    message: string
    send: string
    sending: string
    namePh: string
    hotelPh: string
    notePh: string
    inquiryPrefix: string
    inquiryDate: string
    inquiryGuests: string
    inquiryHotel: string
    inquiryNote: string
  }
  footer: {
    tag: string
    made: string
  }
  waGeneric: string
  waQuestion: string
  waFloat: string
}

const sharedDetailEn = {
  sharedItinerary: [
    {
      title: 'Hotel pickup',
      text: 'Private car pickup from your hotel area, then transfer to the ATV base.',
    },
    {
      title: 'Briefing & gear',
      text: 'Safety briefing, helmet fitting, and a quick practice before the trail.',
    },
    {
      title: 'ATV adventure',
      text: 'Ride jungle tracks, rice paddies, shallow rivers, or beach routes depending on your package.',
    },
    {
      title: 'Shower & lunch',
      text: 'Hot shower, change clothes, then lunch before drop-off back to your hotel.',
    },
  ],
  sharedNotIncluded: [
    'Personal expenses and tips',
    'Hotel stay',
    'Photos / video packages (if sold separately on site)',
    'Extra riding time beyond the package',
  ],
  facts: {
    duration: 'About 1.5–2 hours on the ATV (half-day overall with transfer & lunch)',
    difficulty: 'Beginner friendly — dual ride options available on request',
    minAge: 'Children welcome as passengers; confirm driver age when booking',
    note: 'Wear closed shoes and clothes you do not mind getting muddy or wet. Lockers are available at the base.',
  },
}

const sharedDetailId = {
  sharedItinerary: [
    {
      title: 'Jemput hotel',
      text: 'Jemputan mobil privat dari area hotel, lalu menuju base ATV.',
    },
    {
      title: 'Briefing & perlengkapan',
      text: 'Briefing keselamatan, pasang helm, dan latihan singkat sebelum masuk jalur.',
    },
    {
      title: 'Petualangan ATV',
      text: 'Menyusuri jalur hutan, sawah, sungai dangkal, atau pantai sesuai paket yang dipilih.',
    },
    {
      title: 'Mandi & makan siang',
      text: 'Shower hangat, ganti baju, lalu makan siang sebelum diantar kembali ke hotel.',
    },
  ],
  sharedNotIncluded: [
    'Pengeluaran pribadi dan tip',
    'Penginapan hotel',
    'Paket foto / video (jika dijual terpisah di lokasi)',
    'Waktu riding di luar durasi paket',
  ],
  facts: {
    duration: 'Sekitar 1,5–2 jam di ATV (setengah hari termasuk transfer & makan)',
    difficulty: 'Ramah pemula — opsi tandem tersedia (konfirmasi saat booking)',
    minAge: 'Anak boleh ikut sebagai penumpang; konfirmasi usia pengemudi saat booking',
    note: 'Pakai sepatu tertutup dan baju yang tidak masalah kotor/basah. Locker tersedia di base.',
  },
}

export const dictionaries: Record<Lang, Dictionary> = {
  en: {
    brand: 'Wild ATV',
    brandSub: 'Bali',
    nav: {
      packages: 'Packages',
      experience: 'Experience',
      gallery: 'Gallery',
      about: 'About',
      faq: 'FAQ',
      location: 'Location',
      contact: 'Contact',
      book: 'Book via WhatsApp',
    },
    lang: { en: 'EN', id: 'ID', label: 'Language' },
    hero: {
      brand: 'Wild ATV Bali',
      title: 'Feel the thrill of Bali by ATV',
      lead: 'Ride jungle trails, rice paddies, and beach tracks with local guides — from Ubud to the coast.',
      ctaBook: 'Book on WhatsApp',
      ctaPackages: 'View packages',
    },
    why: {
      title: 'Why choose us',
      lead: 'A few good reasons to book direct',
      items: [
        {
          id: 'memorable',
          title: 'Memorable adventures',
          text: 'Thrills, local expertise, and routes you will actually remember.',
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
      ],
    },
    packages: {
      title: 'Choose your ATV ride',
      lead: 'Transparent pricing, hotel transfer, guide, lunch, and safety gear included.',
      from: 'From',
      book: 'Book this package',
      details: 'View details',
      mostBooked: 'Most booked',
      items: {
        'north-ubud': {
          title: 'North Ubud Tour',
          subtitle: 'Bali ATV Quad Bike',
          blurb:
            'Explore North Ubud trails through rugged terrain, rice fields, and hidden paths — 1.5 hours of pure adventure.',
          includes: [
            'Hotel pick-up and drop-off (Private Car)*',
            'ATV Quad Bike Tour (approximately 1.5 hours)',
            'Professional guide (English speaking)',
            'Welcome drink',
            'Lunch',
            'All necessary safety gear (Helmet, Boots)',
            'Towel & Shower Room',
            'Locker & Change Room',
            'Insurance coverage (ATV Quad Bike)',
            'Service charge and government tax',
          ],
          message:
            'Hi! I want to book Bali ATV Quad Bike North Ubud Tour with Wild ATV Bali (from IDR 720.000).',
          longDescription:
            'A scenic North Ubud ATV ride with private hotel transfer, welcome drink, lunch, and full safety gear — ideal if you want deeper jungle and countryside tracks.',
        },
        'south-ubud': {
          title: 'South Ubud Tour',
          subtitle: 'Bali ATV Quad Bike',
          blurb:
            'The most popular Ubud ATV experience — rice paddies, village trails, and river crossings in 1.5 hours.',
          includes: [
            'Hotel pick-up and drop-off (Private Car)*',
            'ATV Quad Bike Tour (approximately 1.5 hours)',
            'Professional guide (English speaking)',
            'Refreshment (Water)',
            'Lunch (Indonesian Food)',
            'All necessary safety gear (Helmet, Boots)',
            'Towel & Shower Room',
            'Locker & Change Room',
            'Insurance coverage (ATV Quad Bike)',
            'Service charge and government tax',
          ],
          message:
            'Hi! I want to book Bali ATV Quad Bike South Ubud Tour with Wild ATV Bali (from IDR 495.000).',
          longDescription:
            'Our best-value South Ubud ATV tour with hotel transfer, Indonesian lunch, and everything you need for a muddy, fun half-day ride.',
        },
        beach: {
          title: 'Beach Tour',
          subtitle: 'Bali ATV Quad Bike',
          blurb:
            'Two hours of coastal ATV riding — sand tracks, sea breeze, and a different Bali adventure.',
          includes: [
            'Hotel pick-up and drop-off (Private Car)',
            'ATV Quad Bike Tour (approximately 2 hours)',
            'Professional guide (English speaking)',
            'Refreshment (Water)',
            'Lunch (Fried Rice)',
            'All necessary safety gear (Helmet)',
            'Towel & Shower Room',
            'Locker & Change Room',
            'Insurance coverage (ATV Quad Bike)',
            'Service charge and government tax',
          ],
          message:
            'Hi! I want to book Bali ATV Quad Bike on the Beach Tour with Wild ATV Bali (from IDR 975.000).',
          longDescription:
            'Ride ATVs by the beach with private transfer, fried-rice lunch, and a longer 2-hour session for guests who want sand and sea views.',
        },
      },
      combo: {
        label: 'Special offer',
        title: 'ATV + Ayung Rafting Combo',
        blurb:
          'Quad bike through Ubud trails, then white water rafting on the Ayung — one unforgettable Bali day.',
        message:
          'Hi! I want to book the Combo Bali ATV Quad Bike and Ayung White Water Rafting with Wild ATV Bali (from IDR 675.000).',
        ask: 'Ask about the combo',
        viewDetails: 'View details',
      },
    },
    detail: {
      back: 'Back to packages',
      overview: 'Overview',
      itinerary: 'Itinerary',
      included: 'What’s included',
      notIncluded: 'What’s not included',
      goodToKnow: 'Good to know',
      duration: 'Duration',
      difficulty: 'Difficulty',
      minAge: 'Age guidance',
      note: 'What to wear',
      bookThis: 'Book this package',
      ...sharedDetailEn,
    },
    experience: {
      title: 'How the day flows',
      lead: 'From hotel pickup to the final muddy grin — clear and easy.',
      steps: [
        {
          n: '01',
          title: 'Pickup & arrive',
          text: 'Private transfer to the ATV base with a short welcome and briefing.',
        },
        {
          n: '02',
          title: 'Ride the trails',
          text: '1.5–2 hours through jungle paths, rice fields, rivers, or beach tracks.',
        },
        {
          n: '03',
          title: 'Shower & lunch',
          text: 'Clean up, eat, then ride back to your hotel with muddy memories.',
        },
      ],
    },
    gallery: {
      title: 'On the trail',
      lead: 'Real moments from our Ubud ATV trails and muddy rides.',
      alt: 'Wild ATV Bali gallery',
      filters: {
        all: 'All',
        atv: 'ATV',
        trail: 'Trail',
      },
      close: 'Close',
      prev: 'Previous photo',
      next: 'Next photo',
    },
    trust: {
      items: [
        {
          id: 'adventure',
          title: 'Memorable adventures',
          text: 'Thrills, expertise, unforgettable routes across Ubud and the coast.',
        },
        {
          id: 'insurance',
          title: 'ATV insurance',
          text: 'Coverage included on every package for peace of mind.',
        },
        {
          id: 'payment',
          title: 'Pay on arrival',
          text: 'Cash, debit, or credit card — no awkward upfront transfer.',
        },
        {
          id: 'rating',
          title: 'Guest rated 4.9',
          text: 'Trusted by travelers who booked direct with us.',
        },
      ],
    },
    about: {
      title: 'About & safety',
      lead: 'The people, gear, and standards behind every Wild ATV Bali ride.',
      introTitle: 'Built for the trail',
      intro:
        'Wild ATV Bali runs quad bike adventures through Ubud’s countryside and coastal tracks. Local guides, clear briefings, and base facilities mean you get the adrenaline — without the chaos.',
      teamTitle: 'Our team',
      teamLead: 'Guides and crew who know every muddy turn.',
      team: [
        {
          role: 'ATV guides',
          text: 'English-speaking guides lead the convoy, pace the group, and keep beginners comfortable.',
        },
        {
          role: 'Base crew',
          text: 'Check-in, gear fitting, lockers, showers, and lunch so the day runs smoothly.',
        },
        {
          role: 'Drivers',
          text: 'Private transfer drivers for hotel pickup and drop-off — easy to reach on WhatsApp.',
        },
      ],
      safetyTitle: 'Safety first',
      safetyLead: 'Briefing and gear before anyone hits the throttle.',
      safety: [
        {
          title: 'Mandatory briefing',
          text: 'Throttle control, braking, and trail etiquette before the ride starts.',
        },
        {
          title: 'Safety gear',
          text: 'Helmets and riding equipment provided and fitted at the base.',
        },
        {
          title: 'Guided convoy',
          text: 'You ride with a guide — not alone on unfamiliar tracks.',
        },
      ],
      gearTitle: 'Equipment & facilities',
      gear: [
        'Helmet & safety gear',
        'ATV quad bike',
        'Locker & change room',
        'Towel & hot shower',
        'Lunch / refreshment',
        'ATV insurance coverage',
      ],
      cta: 'Ask about safety or booking',
    },
    reviews: {
      title: 'Guests keep coming back',
      lead: 'Real notes from travelers who booked direct.',
      items: [
        {
          name: 'Emma',
          place: 'UK',
          text: 'Muddy, fun, and beautifully organized. The South Ubud trail was the highlight of our trip.',
        },
        {
          name: 'Kenji',
          place: 'Japan',
          text: 'Guide was patient with beginners. Hotel pickup on time and lunch after the ride was perfect.',
        },
        {
          name: 'Sofia',
          place: 'Spain',
          text: 'We did the beach ATV and it felt totally different from the jungle. Highly recommend.',
        },
      ],
      formTitle: 'Share your experience',
      formLead:
        'Leave a short review after your ride. We publish selected testimonials on this page.',
      name: 'Your name',
      namePh: 'Emma',
      place: 'Country / city',
      placePh: 'UK',
      rating: 'Rating',
      text: 'Your review',
      textPh: 'Tell others what you enjoyed…',
      submit: 'Submit review',
      submitting: 'Sending…',
      success: 'Thank you! Your review was received and will appear after we approve it.',
      error: 'Could not send your review. Please try again or contact us on WhatsApp.',
      pendingNote: 'Reviews appear on the website after we approve them.',
      notConfigured:
        'Review form is not connected yet. Please set VITE_REVIEWS_SCRIPT_URL after Google Sheets setup.',
      loading: 'Loading reviews…',
      empty: 'Be the first to share your ATV experience.',
    },
    faq: {
      title: 'Frequently asked questions',
      lead: 'Quick answers before you book.',
      items: [
        {
          q: 'Do I need ATV experience?',
          a: 'No. Most guests are first-timers. You get a briefing and can request a dual/tandem ride when booking.',
        },
        {
          q: 'Will I get muddy or wet?',
          a: 'Very likely — especially on Ubud trails with rice fields and river crossings. That is part of the fun.',
        },
        {
          q: 'Is hotel transfer included?',
          a: 'Yes on the listed packages (private car). Pickup zones can vary — confirm your hotel area on WhatsApp.',
        },
        {
          q: 'What should I wear?',
          a: 'Closed shoes, clothes you can get dirty, and a change of outfit. Showers and lockers are at the base.',
        },
        {
          q: 'Can children join?',
          a: 'Yes, usually as passengers. Tell us ages when you book so we can arrange a suitable ATV.',
        },
        {
          q: 'How do cancel or reschedule work?',
          a: 'Message us on WhatsApp as early as possible. We will help reschedule based on availability.',
        },
      ],
    },
    location: {
      title: 'Where we ride',
      lead: 'ATV bases around Ubud and the beach — office in Payangan, Gianyar.',
      addressLabel: 'Office address',
      openMaps: 'Open in Google Maps',
      areasTitle: 'Activity areas',
      areas: [
        {
          name: 'North Ubud',
          text: 'Longer countryside trails and scenic North Ubud terrain.',
        },
        {
          name: 'South Ubud',
          text: 'Popular rice-field and village tracks — our most booked ride.',
        },
        {
          name: 'Beach',
          text: 'Coastal ATV routes with sand tracks and sea breeze.',
        },
      ],
      tipTitle: 'Getting there',
      tipText:
        'Hotel pickup is included on packages. If you self-arrange transport, WhatsApp us for the exact meeting point of your chosen tour.',
    },
    contact: {
      title: 'Ready when you are',
      lead: 'Chat on WhatsApp for the fastest confirmation — or send a quick inquiry and we’ll reply with availability.',
      phone: 'WhatsApp / Phone',
      email: 'Email',
      base: 'Office address',
      chat: 'Chat on WhatsApp',
      name: 'Name',
      date: 'Preferred date',
      guests: 'Guests',
      hotel: 'Hotel / area',
      message: 'Message',
      send: 'Send inquiry',
      sending: 'Opening WhatsApp…',
      namePh: 'Your name',
      hotelPh: 'Ubud / Seminyak / …',
      notePh: 'Package preference, pickup time…',
      inquiryPrefix: 'Hi! Booking inquiry from',
      inquiryDate: 'Date',
      inquiryGuests: 'Guests',
      inquiryHotel: 'Hotel',
      inquiryNote: 'Note',
    },
    footer: {
      tag: 'ATV adventures across Ubud trails and Bali beaches.',
      made: 'Wild ATV Bali. Made in Bali.',
    },
    waGeneric: 'Hi! I want to book an ATV tour with Wild ATV Bali.',
    waQuestion: 'Hi! I have a question for Wild ATV Bali.',
    waFloat: 'Chat on WhatsApp',
  },
  id: {
    brand: 'Wild ATV',
    brandSub: 'Bali',
    nav: {
      packages: 'Paket',
      experience: 'Pengalaman',
      gallery: 'Galeri',
      about: 'Tentang',
      faq: 'FAQ',
      location: 'Lokasi',
      contact: 'Kontak',
      book: 'Booking via WhatsApp',
    },
    lang: { en: 'EN', id: 'ID', label: 'Bahasa' },
    hero: {
      brand: 'Wild ATV Bali',
      title: 'Rasakan sensasi Bali dengan ATV',
      lead: 'Jelajahi jalur hutan, sawah, dan pantai bersama guide lokal — dari Ubud sampai pesisir.',
      ctaBook: 'Booking via WhatsApp',
      ctaPackages: 'Lihat paket',
    },
    why: {
      title: 'Kenapa pilih kami',
      lead: 'Beberapa alasan bagus untuk booking langsung',
      items: [
        {
          id: 'memorable',
          title: 'Petualangan berkesan',
          text: 'Sensasi, keahlian lokal, dan rute yang benar-benar diingat.',
        },
        {
          id: 'payment',
          title: 'Bayar saat tiba',
          text: 'Bayar tunai, debit, atau kartu kredit di lokasi — tanpa ribet di muka.',
        },
        {
          id: 'booking',
          title: 'Booking mudah',
          text: 'Reservasi lewat WhatsApp atau formulir — konfirmasi cepat.',
        },
      ],
    },
    packages: {
      title: 'Pilih jalur ATV Anda',
      lead: 'Harga transparan, transfer hotel, guide, makan, dan safety gear termasuk.',
      from: 'Mulai',
      book: 'Booking paket ini',
      details: 'Lihat detail',
      mostBooked: 'Paling banyak dibooking',
      items: {
        'north-ubud': {
          title: 'Tur North Ubud',
          subtitle: 'Bali ATV Quad Bike',
          blurb:
            'Jelajahi jalur North Ubud: medan menantang, sawah, dan jalur tersembunyi — 1,5 jam petualangan.',
          includes: [
            'Jemput & antar hotel (Mobil Privat)*',
            'Tur ATV Quad Bike (sekitar 1,5 jam)',
            'Guide profesional (berbahasa Inggris)',
            'Welcome drink',
            'Makan siang',
            'Semua safety gear (Helm, Boots)',
            'Handuk & Kamar Mandi',
            'Locker & Ruang Ganti',
            'Asuransi (ATV Quad Bike)',
            'Service charge dan pajak pemerintah',
          ],
          message:
            'Halo! Saya ingin booking Bali ATV Quad Bike North Ubud Tour di Wild ATV Bali (mulai IDR 720.000).',
          longDescription:
            'Riding ATV North Ubud dengan transfer hotel privat, welcome drink, makan siang, dan perlengkapan lengkap — cocok untuk jalur pedesaan yang lebih dalam.',
        },
        'south-ubud': {
          title: 'Tur South Ubud',
          subtitle: 'Bali ATV Quad Bike',
          blurb:
            'Pengalaman ATV Ubud paling populer — sawah, jalur desa, dan sungai dangkal dalam 1,5 jam.',
          includes: [
            'Jemput & antar hotel (Mobil Privat)*',
            'Tur ATV Quad Bike (sekitar 1,5 jam)',
            'Guide profesional (berbahasa Inggris)',
            'Refreshment (Air)',
            'Makan siang (Masakan Indonesia)',
            'Semua safety gear (Helm, Boots)',
            'Handuk & Kamar Mandi',
            'Locker & Ruang Ganti',
            'Asuransi (ATV Quad Bike)',
            'Service charge dan pajak pemerintah',
          ],
          message:
            'Halo! Saya ingin booking Bali ATV Quad Bike South Ubud Tour di Wild ATV Bali (mulai IDR 495.000).',
          longDescription:
            'Paket South Ubud dengan value terbaik: transfer hotel, makan siang Indonesia, dan semua kebutuhan untuk half-day ride yang seru.',
        },
        beach: {
          title: 'Tur Pantai',
          subtitle: 'Bali ATV Quad Bike',
          blurb:
            'Dua jam ATV di jalur pesisir — pasir, angin laut, dan petualangan Bali yang berbeda.',
          includes: [
            'Jemput & antar hotel (Mobil Privat)',
            'Tur ATV Quad Bike (sekitar 2 jam)',
            'Guide profesional (berbahasa Inggris)',
            'Refreshment (Air)',
            'Makan siang (Nasi Goreng)',
            'Semua safety gear (Helm)',
            'Handuk & Kamar Mandi',
            'Locker & Ruang Ganti',
            'Asuransi (ATV Quad Bike)',
            'Service charge dan pajak pemerintah',
          ],
          message:
            'Halo! Saya ingin booking Bali ATV Quad Bike on the Beach Tour di Wild ATV Bali (mulai IDR 975.000).',
          longDescription:
            'ATV di pantai dengan transfer privat, makan nasi goreng, dan sesi 2 jam untuk yang ingin sensasi pasir dan laut.',
        },
      },
      combo: {
        label: 'Penawaran spesial',
        title: 'Combo ATV + Ayung Rafting',
        blurb:
          'ATV menyusuri jalur Ubud, lalu arung jeram Ayung — satu hari Bali yang tak terlupakan.',
        message:
          'Halo! Saya ingin booking Combo Bali ATV Quad Bike dan Ayung White Water Rafting di Wild ATV Bali (mulai IDR 675.000).',
        ask: 'Tanya tentang combo',
        viewDetails: 'Lihat detail',
      },
    },
    detail: {
      back: 'Kembali ke paket',
      overview: 'Ringkasan',
      itinerary: 'Itinerary',
      included: 'Yang termasuk',
      notIncluded: 'Yang tidak termasuk',
      goodToKnow: 'Perlu diketahui',
      duration: 'Durasi',
      difficulty: 'Tingkat kesulitan',
      minAge: 'Panduan usia',
      note: 'Pakaian',
      bookThis: 'Booking paket ini',
      ...sharedDetailId,
    },
    experience: {
      title: 'Alur hari kegiatan',
      lead: 'Dari jemputan hotel sampai senyum penuh lumpur — jelas dan mudah.',
      steps: [
        {
          n: '01',
          title: 'Jemput & tiba',
          text: 'Transfer privat ke base ATV dengan welcome singkat dan briefing.',
        },
        {
          n: '02',
          title: 'Menyusuri jalur',
          text: '1,5–2 jam melewati hutan, sawah, sungai, atau jalur pantai.',
        },
        {
          n: '03',
          title: 'Mandi & makan',
          text: 'Bersih-bersih, makan, lalu kembali ke hotel dengan kenangan berlumpur.',
        },
      ],
    },
    gallery: {
      title: 'Di jalur',
      lead: 'Momen nyata dari jalur ATV Ubud dan riding berlumpur kami.',
      alt: 'Galeri Wild ATV Bali',
      filters: {
        all: 'Semua',
        atv: 'ATV',
        trail: 'Jalur',
      },
      close: 'Tutup',
      prev: 'Foto sebelumnya',
      next: 'Foto berikutnya',
    },
    trust: {
      items: [
        {
          id: 'adventure',
          title: 'Petualangan berkesan',
          text: 'Sensasi, keahlian, dan rute tak terlupakan di Ubud maupun pesisir.',
        },
        {
          id: 'insurance',
          title: 'Asuransi ATV',
          text: 'Perlindungan termasuk di setiap paket untuk ketenangan Anda.',
        },
        {
          id: 'payment',
          title: 'Bayar saat tiba',
          text: 'Tunai, debit, atau kartu kredit — tanpa transfer di muka.',
        },
        {
          id: 'rating',
          title: 'Rating tamu 4.9',
          text: 'Dipercaya traveler yang booking langsung dengan kami.',
        },
      ],
    },
    about: {
      title: 'Tentang & keselamatan',
      lead: 'Tim, peralatan, dan standar di balik setiap riding Wild ATV Bali.',
      introTitle: 'Dibangun untuk jalur',
      intro:
        'Wild ATV Bali menjalankan petualangan quad bike di pedesaan Ubud dan jalur pesisir. Guide lokal, briefing jelas, dan fasilitas base membuat Anda mendapat adrenalin — tanpa kekacauan.',
      teamTitle: 'Tim kami',
      teamLead: 'Guide dan kru yang mengenal setiap belokan berlumpur.',
      team: [
        {
          role: 'Guide ATV',
          text: 'Guide berbahasa Inggris memimpin konvoi, mengatur tempo, dan membuat pemula nyaman.',
        },
        {
          role: 'Kru base',
          text: 'Check-in, pemasangan gear, locker, shower, dan makan siang agar hari berjalan lancar.',
        },
        {
          role: 'Driver',
          text: 'Driver transfer privat untuk jemput-antar hotel — mudah dihubungi via WhatsApp.',
        },
      ],
      safetyTitle: 'Keselamatan utama',
      safetyLead: 'Briefing dan perlengkapan sebelum gas pertama.',
      safety: [
        {
          title: 'Briefing wajib',
          text: 'Kontrol gas, pengereman, dan etika jalur sebelum mulai.',
        },
        {
          title: 'Safety gear',
          text: 'Helm dan perlengkapan riding disediakan serta dipasang di base.',
        },
        {
          title: 'Konvoi dipandu',
          text: 'Anda riding bersama guide — bukan sendiri di jalur yang belum dikenal.',
        },
      ],
      gearTitle: 'Peralatan & fasilitas',
      gear: [
        'Helm & safety gear',
        'ATV quad bike',
        'Locker & ruang ganti',
        'Handuk & shower hangat',
        'Makan / refreshment',
        'Asuransi ATV',
      ],
      cta: 'Tanya soal keselamatan atau booking',
    },
    reviews: {
      title: 'Tamu senang kembali lagi',
      lead: 'Catatan dari traveler yang booking langsung.',
      items: [
        {
          name: 'Emma',
          place: 'UK',
          text: 'Berlumpur, seru, dan terorganisir. Jalur South Ubud jadi highlight perjalanan kami.',
        },
        {
          name: 'Kenji',
          place: 'Japan',
          text: 'Guide sabar untuk pemula. Jemputan hotel tepat waktu dan makan setelah riding sempurna.',
        },
        {
          name: 'Sofia',
          place: 'Spain',
          text: 'Kami coba ATV pantai dan rasanya beda dari jungle. Sangat direkomendasikan.',
        },
      ],
      formTitle: 'Bagikan pengalaman Anda',
      formLead:
        'Tulis ulasan singkat setelah riding. Kami akan menampilkan testimoni terpilih di halaman ini.',
      name: 'Nama Anda',
      namePh: 'Emma',
      place: 'Negara / kota',
      placePh: 'Indonesia',
      rating: 'Rating',
      text: 'Testimoni Anda',
      textPh: 'Ceritakan apa yang paling berkesan…',
      submit: 'Kirim testimoni',
      submitting: 'Mengirim…',
      success:
        'Terima kasih! Testimoni Anda sudah diterima dan akan muncul setelah kami setujui.',
      error:
        'Gagal mengirim testimoni. Coba lagi atau hubungi kami via WhatsApp.',
      pendingNote: 'Testimoni tampil di website setelah kami setujui.',
      notConfigured:
        'Form testimoni belum terhubung. Isi VITE_REVIEWS_SCRIPT_URL setelah setup Google Sheets.',
      loading: 'Memuat testimoni…',
      empty: 'Jadilah yang pertama membagikan pengalaman ATV Anda.',
    },
    faq: {
      title: 'Pertanyaan yang sering diajukan',
      lead: 'Jawaban singkat sebelum Anda booking.',
      items: [
        {
          q: 'Perlu pengalaman ATV?',
          a: 'Tidak. Mayoritas tamu pemula. Ada briefing dan bisa minta tandem saat booking.',
        },
        {
          q: 'Apakah akan kotor atau basah?',
          a: 'Sangat mungkin — terutama jalur Ubud dengan sawah dan sungai. Itu bagian dari keseruannya.',
        },
        {
          q: 'Apakah transfer hotel termasuk?',
          a: 'Ya pada paket yang tertera (mobil privat). Zona jemput bisa berbeda — konfirmasi area hotel via WhatsApp.',
        },
        {
          q: 'Pakai apa?',
          a: 'Sepatu tertutup, baju yang boleh kotor, dan baju ganti. Shower serta locker tersedia di base.',
        },
        {
          q: 'Bolehkah anak ikut?',
          a: 'Ya, biasanya sebagai penumpang. Sebutkan usia saat booking agar kami siapkan ATV yang sesuai.',
        },
        {
          q: 'Bagaimana cancel atau reschedule?',
          a: 'Hubungi kami via WhatsApp sedini mungkin. Kami bantu reschedule sesuai ketersediaan.',
        },
      ],
    },
    location: {
      title: 'Lokasi riding',
      lead: 'Base ATV di sekitar Ubud dan pantai — kantor di Payangan, Gianyar.',
      addressLabel: 'Alamat kantor',
      openMaps: 'Buka di Google Maps',
      areasTitle: 'Area kegiatan',
      areas: [
        {
          name: 'North Ubud',
          text: 'Jalur pedesaan lebih panjang dan pemandangan North Ubud.',
        },
        {
          name: 'South Ubud',
          text: 'Jalur sawah dan desa paling populer — paling banyak dibooking.',
        },
        {
          name: 'Pantai',
          text: 'Rute ATV pesisir dengan jalur pasir dan angin laut.',
        },
      ],
      tipTitle: 'Cara ke lokasi',
      tipText:
        'Jemputan hotel termasuk di paket. Jika datang sendiri, WhatsApp kami untuk titik temu tur yang Anda pilih.',
    },
    contact: {
      title: 'Siap kapan Anda siap',
      lead: 'Chat WhatsApp untuk konfirmasi tercepat — atau kirim inquiry singkat dan kami balas ketersediaan.',
      phone: 'WhatsApp / Telepon',
      email: 'Email',
      base: 'Alamat kantor',
      chat: 'Chat di WhatsApp',
      name: 'Nama',
      date: 'Tanggal pilihan',
      guests: 'Jumlah tamu',
      hotel: 'Hotel / area',
      message: 'Pesan',
      send: 'Kirim inquiry',
      sending: 'Membuka WhatsApp…',
      namePh: 'Nama Anda',
      hotelPh: 'Ubud / Seminyak / …',
      notePh: 'Preferensi paket, jam jemput…',
      inquiryPrefix: 'Halo! Inquiry booking dari',
      inquiryDate: 'Tanggal',
      inquiryGuests: 'Tamu',
      inquiryHotel: 'Hotel',
      inquiryNote: 'Catatan',
    },
    footer: {
      tag: 'Petualangan ATV di jalur Ubud dan pantai Bali.',
      made: 'Wild ATV Bali. Made in Bali.',
    },
    waGeneric: 'Halo! Saya ingin booking tur ATV di Wild ATV Bali.',
    waQuestion: 'Halo! Saya punya pertanyaan untuk Wild ATV Bali.',
    waFloat: 'Chat via WhatsApp',
  },
}
