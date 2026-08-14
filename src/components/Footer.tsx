import { EMAIL, PHONE_DISPLAY } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__brand">
            Ubud Ayung <em>Rafting</em>
          </p>
          <p className="footer__tag">White water rafting in the heart of Bali.</p>
        </div>
        <div className="footer__meta">
          <a href={`tel:${PHONE_DISPLAY.replace(/\s|-/g, '')}`}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <p>© {year} Ubud Ayung Rafting. Made in Bali.</p>
        </div>
      </div>
    </footer>
  )
}
