import { ADDRESS, MAP_EMBED_URL, MAP_LINK } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'
import { btnOutline, section, sectionHead, sectionLead, sectionTitle } from '../lib/styles'

export function LocationMap() {
  const { t } = useLanguage()

  return (
    <section className={`${section} bg-foam`} id="location">
      <div className="container-site grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
        <div>
          <div className={sectionHead}>
            <h2 className={sectionTitle}>{t.location.title}</h2>
            <p className={sectionLead}>{t.location.lead}</p>
          </div>

          <p className="mb-1 text-[0.75rem] font-bold tracking-wider text-river uppercase">
            {t.location.addressLabel}
          </p>
          <p className="mb-6 font-medium text-forest">{ADDRESS}</p>

          <h3 className="mb-3 font-display text-xl font-semibold text-forest">
            {t.location.areasTitle}
          </h3>
          <ul className="mb-6 grid gap-3">
            {t.location.areas.map((area) => (
              <li key={area.name} className="border-l-2 border-river pl-3">
                <p className="font-semibold text-forest">{area.name}</p>
                <p className="text-sm text-muted">{area.text}</p>
              </li>
            ))}
          </ul>

          <h3 className="mb-2 font-display text-xl font-semibold text-forest">
            {t.location.tipTitle}
          </h3>
          <p className="mb-6 max-w-prose text-muted">{t.location.tipText}</p>

          <a className={btnOutline} href={MAP_LINK} target="_blank" rel="noreferrer">
            {t.location.openMaps}
          </a>
        </div>

        <div className="overflow-hidden border border-line bg-white shadow-sm">
          <iframe
            title={t.location.title}
            src={MAP_EMBED_URL}
            className="h-80 w-full lg:h-[26rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
