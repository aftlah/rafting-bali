import { useLanguage } from '../i18n/LanguageContext'
import { section, sectionHead, sectionLead, sectionTitle } from '../lib/styles'

export function Reviews() {
  const { t } = useLanguage()

  return (
    <section
      className={`${section} bg-[linear-gradient(180deg,var(--color-mist),var(--color-foam))]`}
      id="reviews"
    >
      <div className="container-site">
        <div className={sectionHead}>
          <h2 className={sectionTitle}>{t.reviews.title}</h2>
          <p className={sectionLead}>{t.reviews.lead}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {t.reviews.items.map((review) => (
            <blockquote
              key={review.name}
              className="m-0 border-t-2 border-river bg-white/55 p-6"
            >
              <p className="font-display text-[1.2rem] leading-snug text-forest">
                “{review.text}”
              </p>
              <footer className="mt-5 flex items-baseline gap-2 text-[0.9rem]">
                <strong>{review.name}</strong>
                <span className="text-muted">{review.place}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
