import { COMPANY, NIB, RATING, REVIEW_COUNT } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'

export function TrustBar() {
  const { t } = useLanguage()

  return (
    <section className="border-y border-line bg-white" aria-label="Trust">
      <div className="container-site grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 lg:py-10">
        {t.trust.items.map((item) => {
          let text = item.text
          if (item.id === 'nib' && NIB) text = `NIB ${NIB} · ${COMPANY}`
          if (item.id === 'rating') text = `${RATING} / 5 · ${REVIEW_COUNT}`

          return (
            <div key={item.id} className="text-center lg:text-left">
              <p className="font-display text-lg font-semibold text-forest">{item.title}</p>
              <p className="mt-1 text-sm text-muted">{text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
