import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { PackageDetailSections } from '../components/package-detail/PackageDetailSections'
import {
  packageHeroImages,
  packageMeta,
  waLink,
  type PackageId,
} from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'
import { packageDetailContent } from '../i18n/packageDetailContent'
import { btnOutline, btnPrimary, section } from '../lib/styles'

const ids: PackageId[] = ['north-ubud', 'south-ubud', 'beach']

function isPackageId(id: string | undefined): id is PackageId {
  return !!id && ids.includes(id as PackageId)
}

export function PackageDetailPage() {
  const { id } = useParams()
  const { t, lang } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!isPackageId(id)) {
    return <Navigate to="/#packages" replace />
  }

  const meta = packageMeta[id]
  const pkg = t.packages.items[id]
  const d = t.detail
  const detailLabels = packageDetailContent[lang].labels

  return (
    <main className="bg-foam pt-[4.25rem]">
      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <img
          src={packageHeroImages[id]}
          alt=""
          className="absolute inset-0 size-full max-w-none object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,36,32,0.55)_0%,rgba(10,36,32,0.88)_100%)]" />
        <div className="container-site relative py-12 md:py-16">
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
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              className={btnPrimary}
              href={waLink(pkg.message)}
              target="_blank"
              rel="noreferrer"
            >
              {d.bookThis}
            </a>
            <p className="text-white/90">
              <span className="text-sm font-semibold tracking-wider uppercase opacity-75">
                {t.packages.from}
              </span>{' '}
              <span className="font-display text-2xl font-semibold">
                IDR {meta.price}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className={section}>
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:items-start">
          <PackageDetailSections packageId={id} includes={pkg.includes} />

          <aside className="lg:sticky lg:top-24">
            <div className="border border-line bg-white p-6">
              <p className="text-[0.75rem] font-bold tracking-widest text-river uppercase">
                {t.packages.from}
              </p>
              <p className="mt-1 font-display text-3xl font-semibold text-forest">
                IDR {meta.price}
              </p>
              <p className="mt-2 text-sm text-muted">{detailLabels.minPersons}</p>
              <a
                className={`${btnPrimary} mt-5 w-full`}
                href={waLink(pkg.message)}
                target="_blank"
                rel="noreferrer"
              >
                {d.bookThis}
              </a>
              <Link
                to="/#packages"
                className={`${btnOutline} mt-2 w-full`}
              >
                {d.back}
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
