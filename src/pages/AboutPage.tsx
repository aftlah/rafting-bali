import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { images, waLink } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'
import { btnPrimary, section, sectionTitle } from '../lib/styles'

export function AboutPage() {
  const { t } = useLanguage()
  const a = t.about

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-foam pt-[4.25rem]">
      <section className="relative overflow-hidden text-white">
        <img
          src={images.about}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/75" />
        <div className="container-site relative py-16 md:py-24">
          <p className="text-sm font-bold tracking-wider text-mint uppercase">
            Wild ATV Bali
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-[clamp(2.2rem,5vw,3.5rem)] font-semibold tracking-tight">
            {a.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">{a.lead}</p>
        </div>
      </section>

      <section className={section}>
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className={sectionTitle}>{a.introTitle}</h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">{a.intro}</p>
            <Link to="/#packages" className="mt-6 inline-block font-semibold text-river hover:underline">
              ← {t.nav.packages}
            </Link>
          </div>
          <div className="border border-line bg-white p-6">
            <h3 className="font-display text-xl font-semibold text-forest">{a.gearTitle}</h3>
            <ul className="mt-4 grid gap-2">
              {a.gear.map((item) => (
                <li
                  key={item}
                  className="relative pl-[1.1rem] text-muted before:absolute before:top-2 before:left-0 before:size-1.5 before:rounded-full before:bg-river-bright"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`${section} bg-white`}>
        <div className="container-site">
          <h2 className={sectionTitle}>{a.teamTitle}</h2>
          <p className="mt-3 max-w-xl text-muted">{a.teamLead}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {a.team.map((member) => (
              <article key={member.role} className="border-t-2 border-river pt-4">
                <h3 className="font-display text-xl font-semibold text-forest">
                  {member.role}
                </h3>
                <p className="mt-2 text-muted">{member.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${section} bg-forest text-foam`}>
        <div className="container-site">
          <h2 className={`${sectionTitle} text-white`}>{a.safetyTitle}</h2>
          <p className="mt-3 max-w-xl text-foam/72">{a.safetyLead}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {a.safety.map((item) => (
              <article key={item.title} className="border-t border-line-light pt-4">
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-foam/72">{item.text}</p>
              </article>
            ))}
          </div>
          <a
            className={`${btnPrimary} mt-10`}
            href={waLink(t.waQuestion)}
            target="_blank"
            rel="noreferrer"
          >
            {a.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
