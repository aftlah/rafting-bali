import { useMemo } from 'react'
import { Contact } from '../components/Contact'
import { Experience } from '../components/Experience'
import { Faq } from '../components/Faq'
import { Gallery } from '../components/Gallery'
import { Hero } from '../components/Hero'
import { LocationMap } from '../components/LocationMap'
import { Packages } from '../components/Packages'
import { Reviews } from '../components/Reviews'
import { Seo } from '../components/Seo'
import { TrustBar } from '../components/TrustBar'
import { WhyUs } from '../components/WhyUs'
import { useLanguage } from '../i18n/LanguageContext'
import { homeSeo } from '../seo/pageMeta'
import {
  faqPageSchema,
  localBusinessNote,
  organizationSchema,
  webSiteSchema,
} from '../seo/schemas'

export function HomePage() {
  const { t, lang } = useLanguage()
  const meta = homeSeo[lang]

  const jsonLd = useMemo(
    () => [
      organizationSchema(),
      webSiteSchema(),
      localBusinessNote(),
      faqPageSchema(t),
    ],
    [t],
  )

  return (
    <main>
      <Seo meta={meta} jsonLd={jsonLd} />
      <Hero />
      <TrustBar />
      <WhyUs />
      <Packages />
      <Experience />
      <Gallery />
      <Reviews />
      <Faq />
      <LocationMap />
      <Contact />
    </main>
  )
}
