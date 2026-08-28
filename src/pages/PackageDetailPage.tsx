import { useEffect, useMemo } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { PackageDetailSections } from '../components/package-detail/PackageDetailSections'
import { Seo } from '../components/Seo'
import {
  packageHeroImages,
  packageMeta,
  waLink,
  type PackageId,
} from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'
import { getPackageSeo } from '../seo/pageMeta'
import { breadcrumbSchema, touristTripSchema } from '../seo/schemas'
import { btnPrimary, section } from '../lib/styles'

const ids: PackageId[] = ['north-ubud', 'south-ubud', 'beach']

function isPackageId(id: string | undefined): id is PackageId {
  return !!id && ids.includes(id as PackageId)
}

export function PackageDetailPage() {
  const { id } = useParams()
  const { t, lang } = useLanguage()
  const packageId = isPackageId(id) ? id : null

  const pkg = packageId ? t.packages.items[packageId] : null
  const seoMeta = packageId ? getPackageSeo(packageId, lang) : null

  const jsonLd = useMemo(() => {
    if (!packageId || !pkg) return []
    return [
      touristTripSchema(packageId, pkg.title, pkg.longDescription),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: t.nav.packages, path: '/' },
        { name: pkg.title, path: `/packages/${packageId}` },
      ]),
    ]
  }, [packageId, pkg, t.nav.packages])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!packageId || !pkg || !seoMeta) {
    return <Navigate to="/#packages" replace />
  }

  const meta = packageMeta[packageId]
  const d = t.detail

  return (
    <main className="overflow-x-hidden bg-foam pt-[4.25rem]">
      <Seo meta={seoMeta} jsonLd={jsonLd} />
      <section className="relative overflow-hidden text-white">
        <img
          src={packageHeroImages[packageId]}
          alt={`${pkg.title} — ATV quad bike tour in Bali`}
          className="absolute inset-0 size-full max-w-none object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,36,32,0.5)_0%,rgba(10,36,32,0.92)_100%)]" />
        <div className="container-site relative py-12 md:py-20">
          <Link
            to="/#packages"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-mint hover:underline"
          >
            ← {d.back}
          </Link>
          <p className="text-[0.8rem] font-semibold tracking-wider text-mint uppercase">
            {pkg.subtitle}
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold tracking-tight">
            {pkg.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{pkg.longDescription}</p>
          <div className="mt-8 flex flex-wrap items-end gap-6">
            <div>
              <p className="text-xs font-bold tracking-widest text-mint uppercase">
                {t.packages.from}
              </p>
              <p className="mt-1 font-display text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-none">
                IDR {meta.price}
              </p>
            </div>
            <a
              className={btnPrimary}
              href={waLink(pkg.message)}
              target="_blank"
              rel="noreferrer"
            >
              {d.bookThis}
            </a>
          </div>
        </div>
      </section>

      <section className={`${section} bg-white`}>
        <div className="container-site w-full max-w-4xl">
          <PackageDetailSections packageId={packageId} includes={pkg.includes} />
        </div>
      </section>

      <section className="border-t border-line bg-forest py-10 text-center text-foam">
        <div className="container-site">
          <p className="font-display text-xl font-semibold">
            {lang === 'en' ? 'Ready to ride?' : 'Siap riding?'}
          </p>
          <a
            className={`${btnPrimary} mt-5`}
            href={waLink(pkg.message)}
            target="_blank"
            rel="noreferrer"
          >
            {d.bookThis}
          </a>
        </div>
      </section>
    </main>
  )
}