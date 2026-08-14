import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { packageMeta, waLink, type PackageId } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'
import { btnPrimary, section } from '../lib/styles'

const ids: PackageId[] = ['own-transport', 'ubud-transfer', 'outside-ubud']

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

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-display text-2xl font-semibold text-forest">
                {d.itinerary}
              </h2>
              <ol className="grid gap-4">
                {d.sharedItinerary.map((step, i) => (
                  <li key={step.title} className="border-l-2 border-river pl-4">
                    <p className="text-xs font-bold tracking-wider text-river uppercase">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-1 font-semibold text-forest">{step.title}</h3>
                    <p className="mt-1 text-muted">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid gap-8">
              <div>
                <h2 className="mb-4 font-display text-2xl font-semibold text-forest">
                  {d.included}
                </h2>
                <ul className="grid gap-2">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className="relative pl-[1.1rem] text-muted before:absolute before:top-2 before:left-0 before:size-1.5 before:rounded-full before:bg-river-bright"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-4 font-display text-2xl font-semibold text-forest">
                  {d.notIncluded}
                </h2>
                <ul className="grid gap-2">
                  {d.sharedNotIncluded.map((item) => (
                    <li
                      key={item}
                      className="relative pl-[1.1rem] text-muted before:absolute before:top-2 before:left-0 before:size-1.5 before:rounded-full before:bg-accent/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border border-line bg-white p-6 md:p-8">
            <h2 className="mb-6 font-display text-2xl font-semibold text-forest">
              {d.goodToKnow}
            </h2>
            <dl className="grid gap-5 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-bold tracking-wider text-river uppercase">
                  {d.duration}
                </dt>
                <dd className="mt-1 text-forest">{d.facts.duration}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-wider text-river uppercase">
                  {d.difficulty}
                </dt>
                <dd className="mt-1 text-forest">{d.facts.difficulty}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-wider text-river uppercase">
                  {d.minAge}
                </dt>
                <dd className="mt-1 text-forest">{d.facts.minAge}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-wider text-river uppercase">
                  {d.stairs}
                </dt>
                <dd className="mt-1 text-forest">{d.facts.stairs}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  )
}
