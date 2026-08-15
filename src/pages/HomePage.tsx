import { Contact } from '../components/Contact'
import { Experience } from '../components/Experience'
import { Faq } from '../components/Faq'
import { Gallery } from '../components/Gallery'
import { Hero } from '../components/Hero'
import { LocationMap } from '../components/LocationMap'
import { Packages } from '../components/Packages'
import { Reviews } from '../components/Reviews'
import { TrustBar } from '../components/TrustBar'
import { WhyUs } from '../components/WhyUs'

export function HomePage() {
  return (
    <main>
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
