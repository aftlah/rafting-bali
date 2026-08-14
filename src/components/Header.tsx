import { useEffect, useState } from 'react'
import { waLink } from '../data/site'

const links = [
  { href: '#packages', label: 'Packages' },
  { href: '#experience', label: 'Experience' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const solid = scrolled || open

  return (
    <header className={`header ${solid ? 'header--solid' : ''} ${open ? 'header--open' : ''}`}>
      <div className="header__bar">
        <div className="container header__inner">
          <a href="#top" className="header__brand" onClick={() => setOpen(false)}>
            <span className="header__mark" aria-hidden="true" />
            <span className="header__brand-text">
              Ubud Ayung
              <em>Rafting</em>
            </span>
          </a>

          <nav className="header__nav" aria-label="Primary">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a
              className="btn btn-primary header__cta"
              href={waLink('Hi! I want to book Ayung Rafting.')}
              target="_blank"
              rel="noreferrer"
            >
              Book via WhatsApp
            </a>
          </nav>

          <button
            type="button"
            className={`header__toggle ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`header__panel ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
      >
        <nav className="header__panel-nav" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="btn btn-primary header__cta"
            href={waLink('Hi! I want to book Ayung Rafting.')}
            target="_blank"
            rel="noreferrer"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            Book via WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
