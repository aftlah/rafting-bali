import { useEffect, useMemo, useState } from 'react'
import {
  images,
  type GalleryCategory,
  type GalleryItem,
} from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'
import { section, sectionHead, sectionLead, sectionTitle } from '../lib/styles'

type Filter = 'all' | GalleryCategory

export function Gallery() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<Filter>('all')
  const [active, setActive] = useState<number | null>(null)

  const filters: { id: Filter; label: string }[] = [
    { id: 'all', label: t.gallery.filters.all },
    { id: 'atv', label: t.gallery.filters.atv },
    { id: 'trail', label: t.gallery.filters.trail },
    { id: 'beach', label: t.gallery.filters.beach },
  ]

  const items = useMemo(
    () =>
      filter === 'all'
        ? images.gallery
        : images.gallery.filter((item) => item.category === filter),
    [filter],
  )

  useEffect(() => {
    setActive(null)
  }, [filter])

  useEffect(() => {
    if (active === null) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => (i === null ? i : (i + 1) % items.length))
      if (e.key === 'ArrowLeft')
        setActive((i) => (i === null ? i : (i - 1 + items.length) % items.length))
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, items.length])

  function openItem(item: GalleryItem) {
    const index = items.findIndex((g) => g.src === item.src)
    setActive(index >= 0 ? index : 0)
  }

  return (
    <section className={`${section} pb-[clamp(3rem,6vw,4rem)]`} id="gallery">
      <div className="container-site">
        <div className={sectionHead}>
          <h2 className={sectionTitle}>{t.gallery.title}</h2>
          <p className={sectionLead}>{t.gallery.lead}</p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Gallery filters">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === f.id
                  ? 'bg-forest text-white'
                  : 'border border-line bg-white text-forest hover:bg-mist'
              }`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4" role="list">
          {items.map((item, i) => (
            <button
              key={item.src}
              type="button"
              role="listitem"
              className="group aspect-4/5 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-river"
              onClick={() => openItem(item)}
            >
              <img
                src={item.src}
                alt={`${t.gallery.alt} ${i + 1}`}
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover transition duration-[600ms] group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {active !== null && items[active] ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-forest/92 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={t.gallery.alt}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20"
            onClick={() => setActive(null)}
          >
            {t.gallery.close}
          </button>

          <button
            type="button"
            className="absolute left-3 rounded-full bg-white/10 px-3 py-3 text-white hover:bg-white/20 md:left-6"
            aria-label={t.gallery.prev}
            onClick={(e) => {
              e.stopPropagation()
              setActive((i) => (i === null ? i : (i - 1 + items.length) % items.length))
            }}
          >
            ←
          </button>

          <img
            src={items[active].src}
            alt={`${t.gallery.alt} ${active + 1}`}
            className="max-h-[85svh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            className="absolute right-3 rounded-full bg-white/10 px-3 py-3 text-white hover:bg-white/20 md:right-6"
            aria-label={t.gallery.next}
            onClick={(e) => {
              e.stopPropagation()
              setActive((i) => (i === null ? i : (i + 1) % items.length))
            }}
          >
            →
          </button>
        </div>
      ) : null}
    </section>
  )
}
