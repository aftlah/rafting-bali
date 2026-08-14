import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { section, sectionHead, sectionLead, sectionTitle } from '../lib/styles'

export function Faq() {
  const { t } = useLanguage()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className={`${section} bg-white`} id="faq">
      <div className="container-site max-w-3xl">
        <div className={sectionHead}>
          <h2 className={sectionTitle}>{t.faq.title}</h2>
          <p className={sectionLead}>{t.faq.lead}</p>
        </div>

        <ul className="grid gap-2">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i
            return (
              <li key={item.q} className="border border-line bg-foam/70">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left font-semibold text-forest"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span
                    className={`text-river transition ${isOpen ? 'rotate-45' : ''}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen ? (
                  <p className="border-t border-line px-4 py-4 text-muted">{item.a}</p>
                ) : null}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
