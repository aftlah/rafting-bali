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
    stairs: string
    bookThis: string
    sharedItinerary: { title: string; text: string }[]
    sharedNotIncluded: string[]
    facts: {
      duration: string
      difficulty: string
      minAge: string
      stairs: string
    }
  }
  experience: {
    title: string
    lead: string
    steps: { n: string; title: string; text: string }[]
  }
  gallery: { title: string; lead: string; alt: string }
  reviews: {
    title: string
    lead: string
    items: { name: string; place: string; text: string }[]
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
    ownTransportTitle: string
    ownTransportText: string
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
}

const sharedDetailEn = {
  sharedItinerary: [
    {
      title: 'Check-in & briefing',
      text: 'Arrive at the base, store belongings, and get a safety briefing from your guide.',
    },
    {
      title: 'Gear up & descend',
      text: 'Life jacket, helmet, and paddle — then walk down the gorge stairs to the river.',
    },
    {
      title: 'Raft the Ayung',
      text: 'About two hours of Class II–III rapids through rainforest and waterfall views.',
    },
    {
      title: 'Shower & lunch',
      text: 'Hot shower, change, then Indonesian lunch before transfer or departure.',
    },
  ],
  sharedNotIncluded: [
    'Personal expenses and tips',
    'Hotel stay',
    'Photos / video packages (if sold separately on site)',
    'Pickup outside the selected transfer zone',
  ],
  facts: {
    duration: 'About 2 hours on the river (half-day overall with transfer & lunch)',
    difficulty: 'Class II–III — beginner friendly with a professional guide',
    minAge: 'Minimum age 7, accompanied by an adult',
    stairs:
      'Steep stairs to reach the river. Not recommended for guests with limited mobility or heart conditions.',
  },
}

const sharedDetailId = {
  sharedItinerary: [
    {
      title: 'Check-in & briefing',
      text: 'Tiba di base camp, simpan barang, dan ikuti briefing keselamatan dari guide.',
    },
    {
      title: 'Persiapan & turun ke sungai',
      text: 'Life jacket, helm, dan dayung — lalu turun tangga menuju Sungai Ayung.',
    },
    {
      title: 'Rafting di Ayung',
      text: 'Sekitar 2 jam arung jeram kelas II–III melewati hutan dan air terjun.',
    },
    {
      title: 'Mandi & makan siang',
      text: 'Mandi air hangat, ganti baju, lalu makan siang Indonesia sebelum pulang.',
    },
  ],
  sharedNotIncluded: [
    'Pengeluaran pribadi dan tip',
    'Penginapan hotel',
    'Paket foto / video (jika dijual terpisah di lokasi)',
    'Penjemputan di luar zona transfer yang dipilih',
  ],
  facts: {
    duration: 'Sekitar 2 jam di sungai (setengah hari termasuk transfer & makan)',
    difficulty: 'Kelas II–III — ramah pemula dengan guide profesional',
    minAge: 'Usia minimal 7 tahun, didampingi orang dewasa',
    stairs:
      'Tangga curam menuju sungai. Tidak disarankan bagi tamu dengan mobilitas terbatas atau kondisi jantung.',
  },
}

export const dictionaries: Record<Lang, Dictionary> = {
  en: {
    brand: 'Ubud Ayung',
    brandSub: 'Rafting',
    nav: {
      packages: 'Packages',
      experience: 'Experience',
      gallery: 'Gallery',
      faq: 'FAQ',
      location: 'Location',
      contact: 'Contact',
      book: 'Book via WhatsApp',
    },
    lang: { en: 'EN', id: 'ID', label: 'Language' },
    hero: {
      brand: 'Ubud Ayung Rafting',
      title: 'Ride Bali’s wildest river gorge',
      lead: 'White water rafting on the Ayung — rainforest walls, waterfalls, and guides who know every rapid.',
      ctaBook: 'Book on WhatsApp',
      ctaPackages: 'View packages',
    },
    why: {
      title: 'Why choose us',
      lead: 'A few good reasons to book direct',
      items: [
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
      ],
    },
    packages: {
      title: 'Choose your river day',
      lead: 'Transparent pricing, payment on arrival, and everything you need for the water — gear, lunch, insurance included.',
      from: 'From',
      book: 'Book this package',
      details: 'View details',
      mostBooked: 'Most booked',
      items: {
        'own-transport': {
          title: 'Own Transport',
          subtitle: 'Ayung White Water Rafting',
          blurb:
            'Meet us at the activity base — ideal if you already have a driver or scooter.',
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
          longDescription:
            'Come with your own transport and join Ayung white water rafting with a full set of gear, guide, lunch, and facilities at the base.',
        },
        'ubud-transfer': {
          title: 'Ubud Private Transfer',
          subtitle: 'Ayung White Water Rafting',
          blurb:
            'Hotel pick-up and drop-off in Ubud — the easiest full-day adventure.',
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
          longDescription:
            'Private transfer from your Ubud hotel, then raft the Ayung with guide, lunch, and all safety equipment included.',
        },
        'outside-ubud': {
          title: 'Outside Ubud Transfer',
          subtitle: 'Ayung White Water Rafting',
          blurb:
            'Private transfer from areas outside Ubud — Kuta, Seminyak, Sanur, and more.',
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
          longDescription:
            'Door-to-door private transfer from outside Ubud, plus the full Ayung rafting experience with lunch and facilities.',
        },
      },
      combo: {
        label: 'Special offer',
        title: 'ATV + Ayung Rafting Combo',
        blurb:
          'Quad bike through jungle trails, then ride the river — one unforgettable Bali day.',
        message:
          'Hi! I want to book the Combo Bali ATV Quad Bike and Ayung White Water Rafting (from IDR 895.000).',
        ask: 'Ask about the combo',
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
      minAge: 'Minimum age',
      stairs: 'Access note',
      bookThis: 'Book this package',
      ...sharedDetailEn,
    },
    experience: {
      title: 'How the day flows',
      lead: 'One clear path from briefing to the final paddle — no guesswork.',
      steps: [
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
      ],
    },
    gallery: {
      title: 'On the water',
      lead: 'Moments from the gorge — replace these placeholders with your own shoot.',
      alt: 'Ayung rafting gallery',
    },
    reviews: {
      title: 'Guests keep coming back',
      lead: 'Real notes from travelers who booked direct.',
      items: [
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
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      lead: 'Quick answers before you book.',
      items: [
        {
          q: 'Is rafting safe for beginners?',
          a: 'Yes. Guides brief every group, and all guests wear helmets and life jackets. Ayung rapids are generally Class II–III.',
        },
        {
          q: 'Can children join?',
          a: 'Children from age 7 can join when accompanied by an adult. Please mention ages when you book.',
        },
        {
          q: 'Do I need to know how to swim?',
          a: 'Basic water comfort helps, but life jackets are mandatory. Tell your guide if you are nervous in water.',
        },
        {
          q: 'What if it rains?',
          a: 'Rafting usually continues in light rain. Trips may be delayed or rescheduled only if river conditions are unsafe.',
        },
        {
          q: 'How do cancel or reschedule work?',
          a: 'Message us on WhatsApp as early as possible. We will help reschedule based on availability. Same-day cancellations may not be adjustable.',
        },
        {
          q: 'What should I bring?',
          a: 'Swimwear, change of clothes, sandals with strap, sunscreen, and a little cash for tips or extras. Lockers are available at the base.',
        },
      ],
    },
    location: {
      title: 'Activity location',
      lead: 'Find us in Kedewatan, Ubud — next to the Ayung River gorge.',
      addressLabel: 'Address',
      openMaps: 'Open in Google Maps',
      ownTransportTitle: 'Coming with your own transport?',
      ownTransportText:
        'Set your pin to our Kedewatan address and arrive 15–20 minutes early for check-in. Parking is available near the activity base. If you get lost, WhatsApp us and we will guide you in.',
    },
    contact: {
      title: 'Ready when you are',
      lead: 'Chat on WhatsApp for the fastest confirmation — or send a quick inquiry and we’ll reply with availability.',
      phone: 'WhatsApp / Phone',
      email: 'Email',
      base: 'Activity base',
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
      tag: 'White water rafting in the heart of Bali.',
      made: 'Ubud Ayung Rafting. Made in Bali.',
    },
    waGeneric: 'Hi! I want to book Ayung Rafting.',
    waQuestion: 'Hi! I have a question about Ayung Rafting.',
  },
  id: {
    brand: 'Ubud Ayung',
    brandSub: 'Rafting',
    nav: {
      packages: 'Paket',
      experience: 'Pengalaman',
      gallery: 'Galeri',
      faq: 'FAQ',
      location: 'Lokasi',
      contact: 'Kontak',
      book: 'Booking via WhatsApp',
    },
    lang: { en: 'EN', id: 'ID', label: 'Bahasa' },
    hero: {
      brand: 'Ubud Ayung Rafting',
      title: 'Jelajahi jurang sungai liar di Bali',
      lead: 'Arung jeram di Sungai Ayung — tebing hutan, air terjun, dan guide yang mengenal setiap jeram.',
      ctaBook: 'Booking via WhatsApp',
      ctaPackages: 'Lihat paket',
    },
    why: {
      title: 'Kenapa pilih kami',
      lead: 'Beberapa alasan bagus untuk booking langsung',
      items: [
        {
          id: 'price',
          title: 'Garansi harga terbaik',
          text: 'Tarif kompetitif untuk pengalaman Ayung lengkap — tanpa biaya tersembunyi.',
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
      title: 'Pilih hari di sungai',
      lead: 'Harga transparan, bayar di tempat, dan semua kebutuhan di air — perlengkapan, makan, asuransi termasuk.',
      from: 'Mulai',
      book: 'Booking paket ini',
      details: 'Lihat detail',
      mostBooked: 'Paling banyak dibooking',
      items: {
        'own-transport': {
          title: 'Transportasi sendiri',
          subtitle: 'Ayung White Water Rafting',
          blurb:
            'Datang ke base camp sendiri — cocok jika sudah punya driver atau motor.',
          includes: [
            'Rafting ~2 jam',
            'Guide berbahasa Inggris',
            'Makan siang Indonesia',
            'Semua perlengkapan & safety gear',
            'Locker, handuk & shower',
            'Asuransi, service & pajak',
          ],
          message:
            'Halo! Saya ingin booking Ayung Rafting dengan Transportasi Sendiri (mulai IDR 310.000).',
          longDescription:
            'Datang dengan transportasi sendiri dan nikmati rafting Ayung lengkap dengan perlengkapan, guide, makan siang, dan fasilitas di base.',
        },
        'ubud-transfer': {
          title: 'Transfer privat Ubud',
          subtitle: 'Ayung White Water Rafting',
          blurb:
            'Jemput-antar hotel di Ubud — cara paling mudah untuk petualangan sehari penuh.',
          includes: [
            'Jemput & antar hotel Ubud',
            'Rafting ~2 jam',
            'Guide berbahasa Inggris',
            'Makan siang Indonesia',
            'Semua perlengkapan & safety gear',
            'Locker, handuk & shower',
            'Asuransi, service & pajak',
          ],
          message:
            'Halo! Saya ingin booking Ayung Rafting dengan Transfer Privat Ubud (mulai IDR 415.000).',
          longDescription:
            'Transfer privat dari hotel Ubud, lalu rafting di Ayung dengan guide, makan siang, dan seluruh peralatan keselamatan.',
        },
        'outside-ubud': {
          title: 'Transfer luar Ubud',
          subtitle: 'Ayung White Water Rafting',
          blurb:
            'Transfer privat dari luar Ubud — Kuta, Seminyak, Sanur, dan sekitarnya.',
          includes: [
            'Jemput & antar luar Ubud',
            'Rafting ~2 jam',
            'Guide berbahasa Inggris',
            'Makan siang Indonesia',
            'Semua perlengkapan & safety gear',
            'Locker, handuk & shower',
            'Asuransi, service & pajak',
          ],
          message:
            'Halo! Saya ingin booking Ayung Rafting dengan Transfer Luar Ubud (mulai IDR 520.000).',
          longDescription:
            'Transfer privat door-to-door dari luar Ubud, plus pengalaman rafting Ayung lengkap dengan makan dan fasilitas.',
        },
      },
      combo: {
        label: 'Penawaran spesial',
        title: 'Combo ATV + Ayung Rafting',
        blurb:
          'ATV menyusuri jalur hutan, lalu arung jeram — satu hari Bali yang tak terlupakan.',
        message:
          'Halo! Saya ingin booking Combo ATV Quad Bike dan Ayung White Water Rafting (mulai IDR 895.000).',
        ask: 'Tanya tentang combo',
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
      minAge: 'Usia minimal',
      stairs: 'Catatan akses',
      bookThis: 'Booking paket ini',
      ...sharedDetailId,
    },
    experience: {
      title: 'Alur hari kegiatan',
      lead: 'Satu jalur jelas dari briefing sampai dayungan terakhir — tanpa tebak-tebakan.',
      steps: [
        {
          n: '01',
          title: 'Bertemu & bersiap',
          text: 'Briefing, life jacket, helm — lalu turun ke jurang Ayung.',
        },
        {
          n: '02',
          title: 'Menyusuri sungai',
          text: 'Sekitar dua jam jeram, dinding hutan, dan jeda di air terjun.',
        },
        {
          n: '03',
          title: 'Makan & istirahat',
          text: 'Shower hangat, locker, handuk, lalu makan siang Indonesia dengan pemandangan lembah.',
        },
      ],
    },
    gallery: {
      title: 'Di atas air',
      lead: 'Momen di jurang — ganti placeholder ini dengan foto asli Anda.',
      alt: 'Galeri rafting Ayung',
    },
    reviews: {
      title: 'Tamu senang kembali lagi',
      lead: 'Catatan dari traveler yang booking langsung.',
      items: [
        {
          name: 'Sophie',
          place: 'Australia',
          text: 'Kombinasi seru dan pemandangan hutan yang sempurna. Jemputan tepat waktu dan guide membuat semua merasa aman.',
        },
        {
          name: 'Marco',
          place: 'Italy',
          text: 'Booking jelas, kru ramah, dan makan siang enak setelah dayung. Sangat direkomendasikan.',
        },
        {
          name: 'Aiko',
          place: 'Japan',
          text: 'Pertama kali rafting dan mudah diikuti. Sungai indah, tim profesional sepanjang perjalanan.',
        },
      ],
    },
    faq: {
      title: 'Pertanyaan yang sering diajukan',
      lead: 'Jawaban singkat sebelum Anda booking.',
      items: [
        {
          q: 'Apakah aman untuk pemula?',
          a: 'Ya. Setiap grup mendapat briefing, dan semua tamu memakai helm serta life jacket. Jeram Ayung umumnya kelas II–III.',
        },
        {
          q: 'Bolehkah anak ikut?',
          a: 'Anak usia 7 tahun ke atas boleh ikut didampingi orang dewasa. Sebutkan usia saat booking.',
        },
        {
          q: 'Harus bisa berenang?',
          a: 'Nyaman di air membantu, tapi life jacket wajib. Beritahu guide jika Anda gugup di air.',
        },
        {
          q: 'Bagaimana jika hujan?',
          a: 'Rafting biasanya tetap jalan saat hujan ringan. Dijeda atau dijadwal ulang hanya jika kondisi sungai tidak aman.',
        },
        {
          q: 'Bagaimana cancel atau reschedule?',
          a: 'Hubungi kami via WhatsApp sedini mungkin. Kami bantu reschedule sesuai ketersediaan. Cancel di hari yang sama mungkin tidak bisa disesuaikan.',
        },
        {
          q: 'Apa yang harus dibawa?',
          a: 'Baju renang, baju ganti, sandal bertali, sunscreen, dan sedikit uang tunai untuk tip. Locker tersedia di base.',
        },
      ],
    },
    location: {
      title: 'Lokasi kegiatan',
      lead: 'Temui kami di Kedewatan, Ubud — dekat jurang Sungai Ayung.',
      addressLabel: 'Alamat',
      openMaps: 'Buka di Google Maps',
      ownTransportTitle: 'Datang dengan transportasi sendiri?',
      ownTransportText:
        'Arahkan pin ke alamat Kedewatan kami dan datang 15–20 menit lebih awal untuk check-in. Parkir tersedia dekat base. Jika tersesat, WhatsApp kami — kami akan pandu Anda.',
    },
    contact: {
      title: 'Siap kapan Anda siap',
      lead: 'Chat WhatsApp untuk konfirmasi tercepat — atau kirim inquiry singkat dan kami balas ketersediaan.',
      phone: 'WhatsApp / Telepon',
      email: 'Email',
      base: 'Base kegiatan',
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
      tag: 'White water rafting di jantung Bali.',
      made: 'Ubud Ayung Rafting. Made in Bali.',
    },
    waGeneric: 'Halo! Saya ingin booking Ayung Rafting.',
    waQuestion: 'Halo! Saya punya pertanyaan tentang Ayung Rafting.',
  },
}
