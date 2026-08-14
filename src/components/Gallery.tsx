import { images } from '../data/site'

export function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section-head">
          <h2>On the water</h2>
          <p>Moments from the gorge — replace these placeholders with your own shoot.</p>
        </div>
      </div>

      <div className="gallery__rail" role="list">
        {images.gallery.map((src, i) => (
          <figure key={src} role="listitem">
            <img
              src={src}
              alt={`Ayung rafting gallery ${i + 1}`}
              loading="lazy"
              width={1200}
              height={900}
            />
          </figure>
        ))}
      </div>
    </section>
  )
}
