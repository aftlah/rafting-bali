import { combo, packages, waLink } from '../data/site'
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
  return (
    <section
      className={`${section} bg-[radial-gradient(ellipse_80%_50%_at_100%_0%,rgba(42,155,140,0.12),transparent)] bg-foam`}
      id="packages"
    >
      <div className="container-site">
        <div className={sectionHead}>
          <h2 className={sectionTitle}>Choose your river day</h2>
          <p className={sectionLead}>
            Transparent pricing, payment on arrival, and everything you need for
            the water — gear, lunch, insurance included.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className={`relative flex flex-col gap-2.5 border p-6 transition hover:-translate-y-0.5 ${
                pkg.featured
                  ? 'border-transparent bg-forest text-foam'
                  : 'border-line bg-white/55 hover:border-river/45'
              }`}
            >
              {pkg.featured ? (
                <span className="absolute top-4 right-4 bg-mint px-2 py-1 text-[0.72rem] font-bold tracking-wider text-forest uppercase">
                  Most booked
                </span>
              ) : null}
              <p
                className={`text-[0.8rem] font-semibold tracking-wider uppercase ${
                  pkg.featured ? 'text-foam/78' : 'text-river'
                }`}
              >
                {pkg.subtitle}
              </p>
              <h3
                className={`font-display text-[1.55rem] font-semibold leading-tight ${
                  pkg.featured ? 'pr-0 text-white lg:pr-16' : 'pr-0 text-forest lg:pr-16'
                }`}
              >
                {pkg.title}
              </h3>
              <p
                className={`text-[1.35rem] font-bold ${
                  pkg.featured ? 'text-white' : 'text-forest'
                }`}
              >
                <span className="mb-0.5 block text-[0.75rem] font-semibold tracking-widest uppercase opacity-70">
                  From
                </span>
                IDR {pkg.price}
              </p>
              <p className={`text-[0.95rem] ${pkg.featured ? 'text-foam/78' : 'text-muted'}`}>
                {pkg.blurb}
              </p>
              <ul className="mt-1.5 mb-3 grid flex-1 gap-1.5">
                {pkg.includes.map((item) => (
                  <li
                    key={item}
                    className={`relative pl-[1.1rem] text-[0.92rem] before:absolute before:top-2 before:left-0 before:size-1.5 before:rounded-full ${
                      pkg.featured
                        ? 'text-foam/78 before:bg-mint'
                        : 'text-muted before:bg-river-bright'
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <a
                className={`${pkg.featured ? btnPrimary : btnOutline} mt-auto w-full`}
                href={waLink(pkg.message)}
                target="_blank"
                rel="noreferrer"
              >
                Book this package
              </a>
            </article>
          ))}
        </div>

        <aside
          className="mt-6 grid min-h-72 items-end bg-[linear-gradient(120deg,rgba(10,36,32,0.88)_0%,rgba(10,36,32,0.45)_55%,rgba(10,36,32,0.2)_100%),url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center p-[clamp(1.5rem,4vw,2.5rem)] text-white"
        >
          <div>
            <p className="mb-2 text-[0.75rem] font-bold tracking-widest text-mint uppercase">
              Special offer
            </p>
            <h3 className="mb-2.5 max-w-[16ch] font-display text-[clamp(1.7rem,3vw,2.25rem)] font-semibold">
              {combo.title}
            </h3>
            <p className="max-w-[38ch] text-white/85">{combo.blurb}</p>
            <p className="my-4 text-[1.15rem]">
              From <strong>IDR {combo.price}</strong>
            </p>
            <a
              className={btnDark}
              href={waLink(combo.message)}
              target="_blank"
              rel="noreferrer"
            >
              Ask about the combo
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}
