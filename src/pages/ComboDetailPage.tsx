import { useEffect, useMemo } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ComboDetailSections } from '../components/combo-detail/ComboDetailSections'
import { Seo } from '../components/Seo'
import { comboIds, comboMeta, type ComboId } from '../data/combos'
import { waLink } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'
import { comboContent } from '../i18n/comboContent'
import { getComboSeo } from '../seo/pageMeta'
import { breadcrumbSchema } from '../seo/schemas'
import { btnPrimary, section } from '../lib/styles'

function isComboId(id: string | undefined): id is ComboId {
  return !!id && comboIds.includes(id as ComboId)
}

export function ComboDetailPage() {
  const { id } = useParams()
  const { lang } = useLanguage()
  const comboId = isComboId(id) ? id : null
  const copy = comboContent[lang]
  const combo = comboId ? copy.combos[comboId] : null
  const seoMeta = comboId ? getComboSeo(comboId, lang) : null

  const jsonLd = useMemo(() => {
    if (!comboId || !combo) return []
    return [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: copy.page.title, path: '/combos' },
        { name: combo.title, path: `/combos/${comboId}` },
      ]),
    ]
  }, [comboId, combo, copy.page.title])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!comboId || !combo || !seoMeta) {
    return <Navigate to="/combos" replace />
  }

  const meta = comboMeta[comboId]

  return (
    <main className="overflow-x-hidden bg-foam pt-[4.25rem]">
      <Seo meta={seoMeta} jsonLd={jsonLd} />
      <section className="relative overflow-hidden text-white">
        <img
          src={meta.heroImage}
          alt={combo.title}
          className="absolute inset-0 size-full max-w-none object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,36,32,0.5)_0%,rgba(10,36,32,0.92)_100%)]" />
        <div className="container-site relative py-12 md:py-20">
          <Link
            to="/combos"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-mint hover:underline"
          >
            {copy.page.backToCombos}
          </Link>
          <p className="text-[0.8rem] font-semibold tracking-wider text-mint uppercase">
            Combo Tour
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-tight">
            {combo.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            {combo.longDescription}
          </p>
          <div className="mt-8 flex flex-wrap items-end gap-6">
            <div>
              <p className="text-xs font-bold tracking-widest text-mint uppercase">
                {lang === 'en' ? 'From' : 'Mulai'}
              </p>
              <p className="mt-1 font-display text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-none">
                IDR {meta.price}
              </p>
            </div>
            <a
              className={btnPrimary}
              href={waLink(combo.message)}
              target="_blank"
              rel="noreferrer"
            >
              {copy.page.bookThis}
            </a>
          </div>
        </div>
      </section>

      <section className={`${section} bg-white`}>
        <div className="container-site w-full max-w-4xl">
          <ComboDetailSections comboId={comboId} />
        </div>
      </section>

      <section className="border-t border-line bg-forest py-10 text-center text-foam">
        <div className="container-site">
          <p className="font-display text-xl font-semibold">
            {lang === 'en' ? 'Ready for your combo adventure?' : 'Siap petualangan combo?'}
          </p>
          <a
            className={`${btnPrimary} mt-5`}
            href={waLink(combo.message)}
            target="_blank"
            rel="noreferrer"
          >
            {copy.page.bookThis}
          </a>
        </div>
      </section>
    </main>
  )
}
