import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  ADDRESS,
  EMAIL,
  PHONE_ALT,
  PHONE_DISPLAY,
  waLink,
} from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'
import {
  btnDark,
  btnPrimary,
  section,
  sectionHead,
  sectionLead,
  sectionTitle,
} from '../lib/styles'

const field =
  'w-full rounded-md border border-line bg-white px-3.5 py-3 font-sans text-ink focus:border-river focus:outline-2 focus:outline-river/35'

export function Contact() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '').trim()
    const date = String(data.get('date') || '').trim()
    const pax = String(data.get('pax') || '').trim()
    const hotel = String(data.get('hotel') || '').trim()
    const note = String(data.get('note') || '').trim()

    const message = [
      `${t.contact.inquiryPrefix} ${name || '—'}.`,
      date && `${t.contact.inquiryDate}: ${date}`,
      pax && `${t.contact.inquiryGuests}: ${pax}`,
      hotel && `${t.contact.inquiryHotel}: ${hotel}`,
      note && `${t.contact.inquiryNote}: ${note}`,
    ]
      .filter(Boolean)
      .join('\n')

    setSent(true)
    window.open(waLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className={`${section} bg-white`} id="contact">
      <div className="container-site grid grid-cols-1 items-start gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-[1fr_1.05fr]">
        <div>
          <div className={sectionHead}>
            <h2 className={sectionTitle}>{t.contact.title}</h2>
            <p className={sectionLead}>{t.contact.lead}</p>
          </div>

          <ul className="mb-6 grid gap-5">
            <li>
              <span className="mb-1 block text-[0.75rem] font-bold tracking-wider text-river uppercase">
                {t.contact.phone}
              </span>
              <a
                className="block font-medium text-forest"
                href={`tel:${PHONE_DISPLAY.replace(/\s|-/g, '')}`}
              >
                {PHONE_DISPLAY}
              </a>
              <a
                className="mt-0.5 block font-medium text-forest"
                href={`tel:${PHONE_ALT.replace(/\s|-/g, '')}`}
              >
                {PHONE_ALT}
              </a>
            </li>
            <li>
              <span className="mb-1 block text-[0.75rem] font-bold tracking-wider text-river uppercase">
                {t.contact.email}
              </span>
              <a className="block font-medium text-forest" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </li>
            <li>
              <span className="mb-1 block text-[0.75rem] font-bold tracking-wider text-river uppercase">
                {t.contact.base}
              </span>
              <p className="font-medium text-forest">{ADDRESS}</p>
            </li>
          </ul>

          <a
            className={btnPrimary}
            href={waLink(t.waQuestion)}
            target="_blank"
            rel="noreferrer"
          >
            {t.contact.chat}
          </a>
        </div>

        <form className="grid gap-3.5 border border-line bg-foam p-6" onSubmit={onSubmit}>
          <label className="grid gap-1.5 text-[0.85rem] font-semibold text-forest">
            {t.contact.name}
            <input
              className={field}
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder={t.contact.namePh}
            />
          </label>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <label className="grid gap-1.5 text-[0.85rem] font-semibold text-forest">
              {t.contact.date}
              <input className={field} name="date" type="date" required />
            </label>
            <label className="grid gap-1.5 text-[0.85rem] font-semibold text-forest">
              {t.contact.guests}
              <input
                className={field}
                name="pax"
                type="number"
                min={1}
                max={40}
                required
                placeholder="2"
              />
            </label>
          </div>
          <label className="grid gap-1.5 text-[0.85rem] font-semibold text-forest">
            {t.contact.hotel}
            <input
              className={field}
              name="hotel"
              type="text"
              placeholder={t.contact.hotelPh}
            />
          </label>
          <label className="grid gap-1.5 text-[0.85rem] font-semibold text-forest">
            {t.contact.message}
            <textarea
              className={field}
              name="note"
              rows={4}
              placeholder={t.contact.notePh}
            />
          </label>
          <button className={`${btnDark} mt-1.5 w-full`} type="submit">
            {sent ? t.contact.sending : t.contact.send}
          </button>
        </form>
      </div>
    </section>
  )
}
