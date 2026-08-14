import { images, waLink } from '../data/site'

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero__media" aria-hidden="true">
        <img
          src={images.hero}
          alt=""
          width={2400}
          height={1600}
          fetchPriority="high"
        />
      </div>
      <div className="hero__veil" aria-hidden="true" />

      <div className="container hero__content">
        <p className="hero__brand reveal">Ubud Ayung Rafting</p>
        <h1 className="reveal reveal-delay-1">Ride Bali’s wildest river gorge</h1>
        <p className="hero__lead reveal reveal-delay-2">
          White water rafting on the Ayung — rainforest walls, waterfalls, and
          guides who know every rapid.
        </p>
        <div className="hero__actions reveal reveal-delay-3">
          <a
            className="btn btn-primary"
            href={waLink('Hi! I want to book Ayung Rafting.')}
            target="_blank"
            rel="noreferrer"
          >
            Book on WhatsApp
          </a>
          <a className="btn btn-ghost" href="#packages">
            View packages
          </a>
        </div>
      </div>
    </section>
  )
}
