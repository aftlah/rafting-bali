import { images, waLink } from '../data/site'
import { btnGhost, btnPrimary } from '../lib/styles'

export function Hero() {
  return (
    <section
      className="relative grid min-h-svh items-end overflow-hidden text-white"
      id="top"
      aria-label="Hero"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={images.hero}
          alt=""
          width={2400}
          height={1600}
          fetchPriority="high"
          className="animate-drift h-full w-full scale-[1.04] object-cover"
        />
      </div>
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,24,21,0.35)_0%,rgba(8,24,21,0.15)_35%,rgba(8,24,21,0.82)_100%),linear-gradient(90deg,rgba(8,24,21,0.55)_0%,transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative z-1 ml-[max((100%-var(--max-width-site))/2,clamp(1.25rem,4vw,2.5rem))] w-[min(100%-2*clamp(1.25rem,4vw,2.5rem),42rem)] pt-[calc(4.25rem+3rem)] pb-[clamp(3.5rem,8vw,5.5rem)]">
        <p className="animate-rise mb-3.5 font-display text-[clamp(1.65rem,3.5vw,2.35rem)] font-semibold tracking-tight">
          Ubud Ayung Rafting
        </p>
        <h1 className="animate-rise animate-rise-1 max-w-[11ch] font-display text-[clamp(2.4rem,7vw,4.35rem)] font-semibold leading-[1.05] tracking-tight">
          Ride Bali’s wildest river gorge
        </h1>
        <p className="animate-rise animate-rise-2 mt-4 max-w-[34ch] text-[clamp(1rem,2vw,1.15rem)] text-white/88">
          White water rafting on the Ayung — rainforest walls, waterfalls, and
          guides who know every rapid.
        </p>
        <div className="animate-rise animate-rise-3 mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            className={`${btnPrimary} sm:w-auto`}
            href={waLink('Hi! I want to book Ayung Rafting.')}
            target="_blank"
            rel="noreferrer"
          >
            Book on WhatsApp
          </a>
          <a className={`${btnGhost} sm:w-auto`} href="#packages">
            View packages
          </a>
        </div>
      </div>
    </section>
  )
}
