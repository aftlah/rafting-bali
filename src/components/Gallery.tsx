import { images } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'
import { section, sectionHead, sectionLead, sectionTitle } from '../lib/styles'

export function Gallery() {
  const { t } = useLanguage()

  return (
    <section className={`${section} pb-[clamp(3rem,6vw,4rem)]`} id="gallery">
      <div className="container-site">
        <div className={sectionHead}>
          <h2 className={sectionTitle}>{t.gallery.title}</h2>
          <p className={sectionLead}>{t.gallery.lead}</p>
        </div>
      </div>

      <div
        className="grid auto-cols-[minmax(16rem,22vw)] grid-flow-col gap-3 overflow-x-auto px-[clamp(1.25rem,4vw,2.5rem)] pb-2 snap-x snap-mandatory [-webkit-overflow-scrolling:touch] [scrollbar-width:thin]"
        role="list"
      >
        {images.gallery.map((src, i) => (
          <figure key={src} role="listitem" className="aspect-4/5 snap-start overflow-hidden">
            <img
              src={src}
              alt={`${t.gallery.alt} ${i + 1}`}
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full object-cover transition duration-[600ms] hover:scale-105"
            />
          </figure>
        ))}
      </div>
    </section>
  )
}
