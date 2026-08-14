import { useLanguage } from '../i18n/LanguageContext'
import { section, sectionHead, sectionLead, sectionTitle } from '../lib/styles'

export function Experience() {
  const { t } = useLanguage()

  return (
    <section className={`${section} bg-forest text-foam`} id="experience">
      <div className="container-site">
        <div className={sectionHead}>
          <h2 className={`${sectionTitle} text-white`}>{t.experience.title}</h2>
          <p className={`${sectionLead} text-foam/72`}>{t.experience.lead}</p>
        </div>

        <ol className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {t.experience.steps.map((step) => (
            <li key={step.n} className="border-t border-line-light pt-5">
              <span className="mb-3 block font-display text-3xl text-mint">{step.n}</span>
              <h3 className="mb-2 font-display text-[1.45rem] font-semibold">{step.title}</h3>
              <p className="max-w-[28ch] text-foam/72">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
