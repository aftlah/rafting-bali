/** Shared button class strings for Tailwind */
export const btn =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.95rem] font-semibold tracking-wide transition active:translate-y-px'

export const btnPrimary = `${btn} bg-accent text-white shadow-[0_10px_28px_rgba(226,91,60,0.28)] hover:bg-accent-hover`

export const btnGhost = `${btn} border border-line-light bg-white/12 text-white backdrop-blur-sm hover:bg-white/22`

export const btnDark = `${btn} bg-forest text-foam hover:bg-forest-mid`

export const btnOutline = `${btn} border border-line bg-transparent text-forest hover:bg-mist`

export const section = 'py-[clamp(4rem,10vw,6.5rem)]'

export const sectionHead = 'mb-[clamp(2rem,5vw,3rem)] max-w-xl'

export const sectionTitle =
  'font-display text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.12] tracking-tight text-forest'

export const sectionLead = 'mt-3.5 text-[1.05rem] text-muted'
