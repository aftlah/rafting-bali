import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  ADDRESS,
  EMAIL,
  PHONE_ALT,
  PHONE_DISPLAY,
  waLink,
} from '../data/site'

export function Contact() {
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
      `Hi! Booking inquiry from ${name || 'a guest'}.`,
      date && `Date: ${date}`,
      pax && `Guests: ${pax}`,
      hotel && `Hotel: ${hotel}`,
      note && `Note: ${note}`,
    ]
      .filter(Boolean)
      .join('\n')

    setSent(true)
    window.open(waLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <div className="section-head">
            <h2>Ready when you are</h2>
            <p>
              Chat on WhatsApp for the fastest confirmation — or send a quick
              inquiry and we’ll reply with availability.
            </p>
          </div>

          <ul className="contact__list">
            <li>
              <span>WhatsApp / Phone</span>
              <a href={`tel:${PHONE_DISPLAY.replace(/\s|-/g, '')}`}>{PHONE_DISPLAY}</a>
              <a href={`tel:${PHONE_ALT.replace(/\s|-/g, '')}`}>{PHONE_ALT}</a>
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <span>Activity base</span>
              <p>{ADDRESS}</p>
            </li>
          </ul>

          <a
            className="btn btn-primary"
            href={waLink('Hi! I have a question about Ayung Rafting.')}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>

        <form className="contact__form" onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" type="text" required autoComplete="name" placeholder="Your name" />
          </label>
          <div className="contact__row">
            <label>
              Preferred date
              <input name="date" type="date" required />
            </label>
            <label>
              Guests
              <input name="pax" type="number" min={1} max={40} required placeholder="2" />
            </label>
          </div>
          <label>
            Hotel / area
            <input name="hotel" type="text" placeholder="Ubud / Seminyak / …" />
          </label>
          <label>
            Message
            <textarea name="note" rows={4} placeholder="Package preference, pickup time…" />
          </label>
          <button className="btn btn-dark" type="submit">
            {sent ? 'Opening WhatsApp…' : 'Send inquiry'}
          </button>
        </form>
      </div>
    </section>
  )
}
