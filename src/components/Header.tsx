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

  return (
    <header className={`header ${scrolled || open ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="header__brand" onClick={() => setOpen(false)}>
          <span className="header__mark" aria-hidden="true" />
          <span>
            Ubud Ayung
            <em>Rafting</em>
          </span>
        </a>

        <nav className={`header__nav ${open ? 'is-open' : ''}`} aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn-primary header__cta"
            href={waLink('Hi! I want to book Ayung Rafting.')}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Book via WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className={`header__toggle ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
