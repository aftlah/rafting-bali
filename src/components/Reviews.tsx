import { useEffect, useState, type FormEvent } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import {
  fetchApprovedReviews,
  isReviewsApiConfigured,
  submitReview,
  type LiveReview,
} from '../lib/reviewsApi'
import {
  btnDark,
  section,
  sectionHead,
  sectionLead,
  sectionTitle,
} from '../lib/styles'

const field =
  'w-full rounded-md border border-line bg-white px-3.5 py-3 font-sans text-ink focus:border-river focus:outline-2 focus:outline-river/35'

function Stars({ rating }: { rating: number }) {
  const value = Math.min(5, Math.max(1, Math.round(rating)))
  return (
    <p className="mb-2 text-sm tracking-wide text-accent" aria-label={`${value} / 5`}>
      {'★'.repeat(value)}
      <span className="text-line">{'★'.repeat(5 - value)}</span>
    </p>
  )
}

export function Reviews() {
  const { t, lang } = useLanguage()
  const configured = isReviewsApiConfigured()
  const [live, setLive] = useState<LiveReview[]>([])
  const [loading, setLoading] = useState(configured)
  const [rating, setRating] = useState(5)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle',
  )

  useEffect(() => {
    if (!configured) {
      setLoading(false)
      setLive([])
      return
    }

    let cancelled = false
    setLoading(true)
    fetchApprovedReviews()
      .then((reviews) => {
        if (!cancelled) setLive(reviews)
      })
      .catch(() => {
        if (!cancelled) setLive([])
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [configured])

  // Setelah Sheets terhubung: hanya data approved dari spreadsheet.
  // Sebelum terhubung: pakai contoh lokal agar section tidak kosong.
  const displayed: LiveReview[] = configured
    ? live
    : t.reviews.items.map((item) => ({ ...item, rating: 5 }))

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!configured || status === 'sending') return

    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const place = String(data.get('place') || '').trim()
    const text = String(data.get('text') || '').trim()

    if (name.length < 2 || text.length < 10) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      await submitReview({ name, place, text, rating, lang })
      setStatus('success')
      form.reset()
      setRating(5)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      className={`${section} bg-[linear-gradient(180deg,var(--color-mist),var(--color-foam))]`}
      id="reviews"
    >
      <div className="container-site">
        <div className={sectionHead}>
          <h2 className={sectionTitle}>{t.reviews.title}</h2>
          <p className={sectionLead}>{t.reviews.lead}</p>
        </div>

        {configured && loading ? (
          <p className="text-sm text-muted">{t.reviews.loading}</p>
        ) : configured && displayed.length === 0 ? (
          <p className="rounded-md border border-dashed border-line bg-white/55 p-6 text-sm text-muted">
            {t.reviews.empty}
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {displayed.map((review) => (
              <blockquote
                key={`${review.name}-${review.text.slice(0, 24)}`}
                className="m-0 border-t-2 border-river bg-white/55 p-6"
              >
                {typeof review.rating === 'number' ? (
                  <Stars rating={review.rating} />
                ) : null}
                <p className="font-display text-[1.2rem] leading-snug text-forest">
                  “{review.text}”
                </p>
                <footer className="mt-5 flex items-baseline gap-2 text-[0.9rem]">
                  <strong>{review.name}</strong>
                  {review.place ? (
                    <span className="text-muted">{review.place}</span>
                  ) : null}
                </footer>
              </blockquote>
            ))}
          </div>
        )}

        <div className="mt-10 grid gap-6 border border-line bg-white/70 p-6 md:grid-cols-[1fr_1.1fr] md:p-8">
          <div>
            <h3 className="font-display text-2xl font-semibold text-forest">
              {t.reviews.formTitle}
            </h3>
            <p className="mt-2 text-[0.95rem] text-muted">{t.reviews.formLead}</p>
            <p className="mt-4 text-sm text-muted">{t.reviews.pendingNote}</p>
          </div>

          {configured ? (
            <form className="grid gap-3.5" onSubmit={onSubmit}>
              <label className="grid gap-1.5 text-[0.85rem] font-semibold text-forest">
                {t.reviews.name}
                <input
                  className={field}
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  maxLength={80}
                  autoComplete="name"
                  placeholder={t.reviews.namePh}
                />
              </label>
              <label className="grid gap-1.5 text-[0.85rem] font-semibold text-forest">
                {t.reviews.place}
                <input
                  className={field}
                  name="place"
                  type="text"
                  maxLength={80}
                  placeholder={t.reviews.placePh}
                />
              </label>
              <fieldset className="grid gap-1.5">
                <legend className="text-[0.85rem] font-semibold text-forest">
                  {t.reviews.rating}
                </legend>
                <div className="flex flex-wrap gap-2">
                  {[5, 4, 3, 2, 1].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setRating(value)}
                      className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                        rating === value
                          ? 'bg-forest text-foam'
                          : 'bg-mist text-muted hover:text-forest'
                      }`}
                      aria-pressed={rating === value}
                    >
                      {value} ★
                    </button>
                  ))}
                </div>
              </fieldset>
              <label className="grid gap-1.5 text-[0.85rem] font-semibold text-forest">
                {t.reviews.text}
                <textarea
                  className={field}
                  name="text"
                  rows={4}
                  required
                  minLength={10}
                  maxLength={800}
                  placeholder={t.reviews.textPh}
                />
              </label>
              <button
                className={`${btnDark} mt-1.5 w-full`}
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? t.reviews.submitting : t.reviews.submit}
              </button>
              {status === 'success' ? (
                <p className="text-sm font-medium text-river">{t.reviews.success}</p>
              ) : null}
              {status === 'error' ? (
                <p className="text-sm font-medium text-accent">{t.reviews.error}</p>
              ) : null}
            </form>
          ) : (
            <p className="rounded-md border border-dashed border-line bg-foam p-4 text-sm text-muted">
              {t.reviews.notConfigured}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
