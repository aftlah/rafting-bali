import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { PackageDetailSections } from '../components/package-detail/PackageDetailSections'
import { packageMeta, waLink, type PackageId } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'
import { btnPrimary, section } from '../lib/styles'

const ids: PackageId[] = ['north-ubud', 'south-ubud', 'beach']

function isPackageId(id: string | undefined): id is PackageId {
  return !!id && ids.includes(id as PackageId)
}

export function PackageDetailPage() {
  const { id } = useParams()
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!isPackageId(id)) {
    return <Navigate to="/#packages" replace />
  }

  const meta = packageMeta[id]
  const pkg = t.packages.items[id]
  const d = t.detail

  return (
    <main className="bg-foam pt-[4.25rem]">
      <section className={`${section} pt-10`}>
        <div className="container-site">
          <Link
            to="/#packages"
            className="mb-6 inline-block text-sm font-semibold text-river hover:underline"
          >
            ← {d.back}
          </Link>

          <p className="text-[0.8rem] font-semibold tracking-wider text-river uppercase">
            {pkg.subtitle}
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold tracking-tight text-forest">
            {pkg.title}
          </h1>
          <p className="mt-3 text-2xl font-bold text-forest">
            {t.packages.from} IDR {meta.price}
          </p>
          <p className="mt-4 max-w-2xl text-lg text-muted">{pkg.longDescription}</p>

          <a
            className={`${btnPrimary} mt-6`}
            href={waLink(pkg.message)}
            target="_blank"
            rel="noreferrer"
          >
            {d.bookThis}
          </a>

          <PackageDetailSections packageId={id} includes={pkg.includes} />
        </div>
      </section>
    </main>
  )
}
