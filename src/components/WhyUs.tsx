import { useLanguage } from '../i18n/LanguageContext'
import { section, sectionHead, sectionLead, sectionTitle } from '../lib/styles'

const icons = {
  price: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="size-7">
      <path
        d="M18 14h16l4 8v14H14V22l4-8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M18 14V10h12v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="28" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  payment: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="size-7">
      <rect x="8" y="14" width="32" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 20h32" stroke="currentColor" strokeWidth="2" />
      <path d="M14 30h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  booking: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="size-7">
      <rect x="12" y="8" width="24" height="32" rx="2" stroke="currentColor" strokeWidth="2" />
      <path
        d="M18 18h12M18 24h12M18 30h7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
} as const

export function WhyUs() {
  const { t } = useLanguage()

  return (
    <section
      className={`${section} bg-white py-[clamp(3.5rem,8vw,5rem)]`}
      id="why-us"
      aria-labelledby="why-heading"
    >
      <div className="container-site">
        <div className={`${sectionHead} mx-auto text-center`}>
          <h2 id="why-heading" className={sectionTitle}>
            {t.why.title}
          </h2>
          <p className={sectionLead}>{t.why.lead}</p>
        </div>

        <ul className="grid grid-cols-1 gap-[clamp(1.5rem,4vw,2.5rem)] md:grid-cols-3">
          {t.why.items.map((reason) => (
            <li key={reason.id} className="mx-auto max-w-72 text-center">
              <span className="mb-4 inline-flex size-14 items-center justify-center rounded-full bg-foam text-river">
                {icons[reason.id as keyof typeof icons]}
              </span>
              <h3 className="mb-1.5 font-display text-[1.35rem] font-semibold text-forest">
                {reason.title}
              </h3>
              <p className="text-[0.98rem] text-muted">{reason.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
