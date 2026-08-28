import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { comboIds, comboMeta } from '../data/combos'
import { useLanguage } from '../i18n/LanguageContext'
import { comboContent } from '../i18n/comboContent'
import { getCombosSeo } from '../seo/pageMeta'
import { breadcrumbSchema } from '../seo/schemas'
import {
  btnOutline,
  btnPrimary,
  section,
  sectionHead,
  sectionLead,
  sectionTitle,
} from '../lib/styles'

export function CombosPage() {
  const { lang, t } = useLanguage()
  const copy = comboContent[lang]
  const seoMeta = getCombosSeo(lang)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="overflow-x-hidden bg-foam pt-[4.25rem]">
      <Seo
        meta={seoMeta}
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: copy.page.title, path: '/combos' },
          ]),
        ]}
      />

      <section className={`${section} bg-white`}>
        <div className="container-site">
          <Link
            to="/#packages"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-river hover:underline"
          >
            ← {t.packages.title}
          </Link>
          <div className={sectionHead}>
            <h1 className={sectionTitle}>{copy.page.title}</h1>
            <p className={sectionLead}>{copy.page.lead}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {comboIds.map((id) => {
              const meta = comboMeta[id]
              const combo = copy.combos[id]
              return (
                <article
                  key={id}
                  className="flex flex-col overflow-hidden rounded-sm border border-river/35 bg-white transition hover:-translate-y-0.5 hover:border-river/60"
                >
                  <img
                    src={meta.image}
                    alt={combo.title}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-5 text-center">
                    <h2 className="font-display text-lg font-semibold leading-snug text-forest">
                      {combo.title}
                    </h2>
                    <p className="mt-3 text-lg font-bold text-accent">
                      {t.packages.from} IDR {meta.price}
                    </p>
                    <div className="mt-4 flex-1 text-left">
                      <p className="mb-2 text-center text-sm font-semibold text-forest">
                        {lang === 'en' ? "What's Included:" : 'Yang Termasuk:'}
                      </p>
                      <ul className="grid gap-1.5">
                        {combo.includes.map((item) => (
                          <li
                            key={item}
                            className="relative pl-[1.1rem] text-[0.85rem] text-muted before:absolute before:top-2 before:left-0 before:size-1 before:rounded-full before:bg-river-bright"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      to={`/combos/${id}`}
                      className={`${btnPrimary} mt-5 w-full uppercase tracking-wider`}
                    >
                      {copy.page.viewDetails}
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-forest py-10 text-center text-foam">
        <div className="container-site">
          <p className="font-display text-xl font-semibold">
            {lang === 'en'
              ? 'Questions about combo tours?'
              : 'Ada pertanyaan tentang tur combo?'}
          </p>
          <a
            className={`${btnOutline} mt-5 border-foam/30 text-foam hover:bg-white/10`}
            href="/#contact"
          >
            {lang === 'en' ? 'Contact us' : 'Hubungi kami'}
          </a>
        </div>
      </section>
    </main>
  )
}
