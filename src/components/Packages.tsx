import { Link } from 'react-router-dom'
import { comboMeta, images, packageIds, packageMeta, waLink } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'
import {
  btnDark,
  btnOutline,
  btnPrimary,
  section,
  sectionHead,
  sectionLead,
  sectionTitle,
} from '../lib/styles'

export function Packages() {
  const { t } = useLanguage()

  return (
    <section
      className={`${section} bg-[radial-gradient(ellipse_80%_50%_at_100%_0%,rgba(42,155,140,0.12),transparent)] bg-foam`}
      id="packages"
    >
      <div className="container-site">
        <div className={sectionHead}>
          <h2 className={sectionTitle}>{t.packages.title}</h2>
          <p className={sectionLead}>{t.packages.lead}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {packageIds.map((id) => {
            const meta = packageMeta[id]
            const pkg = t.packages.items[id]
            return (
              <article
                key={id}
                className={`relative flex flex-col gap-2.5 border p-6 transition hover:-translate-y-0.5 ${
                  meta.featured
                    ? 'border-transparent bg-forest text-foam'
                    : 'border-line bg-white/55 hover:border-river/45'
                }`}
              >
                {meta.featured ? (
                  <span className="absolute top-4 right-4 bg-mint px-2 py-1 text-[0.72rem] font-bold tracking-wider text-forest uppercase">
                    {t.packages.mostBooked}
                  </span>
                ) : null}
                <p
                  className={`text-[0.8rem] font-semibold tracking-wider uppercase ${
                    meta.featured ? 'text-foam/78' : 'text-river'
                  }`}
                >
                  {pkg.subtitle}
                </p>
                <h3
                  className={`font-display text-[1.55rem] font-semibold leading-tight ${
                    meta.featured ? 'text-white' : 'text-forest'
                  }`}
                >
                  {pkg.title}
                </h3>
                <p
                  className={`text-[1.35rem] font-bold ${
                    meta.featured ? 'text-white' : 'text-forest'
                  }`}
                >
                  <span className="mb-0.5 block text-[0.75rem] font-semibold tracking-widest uppercase opacity-70">
                    {t.packages.from}
                  </span>
                  IDR {meta.price}
                </p>
                <p className={`text-[0.95rem] ${meta.featured ? 'text-foam/78' : 'text-muted'}`}>
                  {pkg.blurb}
                </p>
                <ul className="mt-1.5 mb-3 grid flex-1 gap-1.5">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className={`relative pl-[1.1rem] text-[0.92rem] before:absolute before:top-2 before:left-0 before:size-1.5 before:rounded-full ${
                        meta.featured
                          ? 'text-foam/78 before:bg-mint'
                          : 'text-muted before:bg-river-bright'
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto grid gap-2">
                  <a
                    className={`${meta.featured ? btnPrimary : btnOutline} w-full`}
                    href={waLink(pkg.message)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.packages.book}
                  </a>
                  <Link
                    to={`/packages/${id}`}
                    className={`text-center text-sm font-semibold underline-offset-4 hover:underline ${
                      meta.featured ? 'text-mint' : 'text-river'
                    }`}
                  >
                    {t.packages.details}
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        <aside
          className="mt-6 grid min-h-72 items-end bg-cover bg-center p-[clamp(1.5rem,4vw,2.5rem)] text-white"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(10,36,32,0.88) 0%, rgba(10,36,32,0.45) 55%, rgba(10,36,32,0.2) 100%), url('${images.combo}')`,
          }}
        >
          <div>
            <p className="mb-2 text-[0.75rem] font-bold tracking-widest text-mint uppercase">
              {t.packages.combo.label}
            </p>
            <h3 className="mb-2.5 max-w-[16ch] font-display text-[clamp(1.7rem,3vw,2.25rem)] font-semibold">
              {t.packages.combo.title}
            </h3>
            <p className="max-w-[38ch] text-white/85">{t.packages.combo.blurb}</p>
            <p className="my-4 text-[1.15rem]">
              {t.packages.from} <strong>IDR {comboMeta.price}</strong>
            </p>
            <a
              className={btnDark}
              href={waLink(t.packages.combo.message)}
              target="_blank"
              rel="noreferrer"
            >
              {t.packages.combo.ask}
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}
