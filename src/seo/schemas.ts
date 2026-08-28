import {
  ADDRESS,
  COMPANY,
  EMAIL,
  MAP_LINK,
  PHONE_DISPLAY,
  RATING,
  REVIEW_COUNT,
  WHATSAPP,
  packageMeta,
  type PackageId,
} from '../data/site'
import type { Dictionary } from '../i18n/dictionaries'
import { absoluteUrl } from './siteUrl'

function parsePriceIdr(price: string) {
  return Number(price.replace(/\./g, ''))
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': absoluteUrl('/#organization'),
    name: COMPANY,
    url: absoluteUrl('/'),
    logo: absoluteUrl('/favicon.svg'),
    image: absoluteUrl('/images/hero.webp'),
    description:
      'ATV quad bike tours in Ubud and beach areas of Bali. Hotel transfer, professional guides, lunch and safety gear included.',
    telephone: PHONE_DISPLAY,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Begawan Giri, Melinggih Kelod',
      addressLocality: 'Payangan',
      addressRegion: 'Bali',
      postalCode: '80572',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -8.4095,
      longitude: 115.1889,
    },
    areaServed: [
      'Ubud',
      'South Ubud',
      'North Ubud',
      'Canggu',
      'Seminyak',
      'Kuta',
      'Sanur',
      'Nusa Dua',
      'Jimbaran',
      'Bali',
    ],
    sameAs: [MAP_LINK, `https://wa.me/${WHATSAPP}`],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: RATING,
      reviewCount: REVIEW_COUNT.replace(/\D/g, '') || '150',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '$$',
  }
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website'),
    name: COMPANY,
    url: absoluteUrl('/'),
    publisher: { '@id': absoluteUrl('/#organization') },
    inLanguage: ['en', 'id'],
  }
}

export function faqPageSchema(t: Dictionary) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function touristTripSchema(
  id: PackageId,
  name: string,
  description: string,
) {
  const price = parsePriceIdr(packageMeta[id].price)
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name,
    description,
    url: absoluteUrl(`/packages/${id}`),
    image: absoluteUrl('/images/hero.webp'),
    touristType: 'Adventure travelers',
    provider: { '@id': absoluteUrl('/#organization') },
    itinerary: {
      '@type': 'ItemList',
      description: 'Hotel pickup, ATV riding, shower and lunch, return transfer',
    },
    offers: {
      '@type': 'Offer',
      url: absoluteUrl(`/packages/${id}`),
      priceCurrency: 'IDR',
      price,
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString().split('T')[0],
    },
  }
}

export function localBusinessNote() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': absoluteUrl('/#localbusiness'),
    name: COMPANY,
    image: absoluteUrl('/images/hero.webp'),
    url: absoluteUrl('/'),
    telephone: PHONE_DISPLAY,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS,
      addressLocality: 'Payangan',
      addressRegion: 'Gianyar, Bali',
      postalCode: '80572',
      addressCountry: 'ID',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '17:00',
    },
  }
}
