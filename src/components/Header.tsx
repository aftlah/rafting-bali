import { useEffect, useState } from 'react'
import { waLink } from '../data/site'
import { btnPrimary } from '../lib/styles'

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
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`relative z-[60] h-[4.25rem] transition-[background,box-shadow] ${
          solid ? 'bg-forest/96 shadow-[0_1px_0_var(--color-line-light)]' : ''
        }`}
      >
        <div className="container-site flex h-[4.25rem] items-center justify-between gap-4">
          <a
            href="#top"
            className="flex min-w-0 items-center gap-2.5 font-bold tracking-tight text-white"
            onClick={() => setOpen(false)}
          >
            <span
              className="size-2.5 shrink-0 rounded-full bg-accent shadow-[0_0_0_4px_rgba(226,91,60,0.25)]"
              aria-hidden="true"
            />
            <span className="flex flex-col leading-tight">
              Ubud Ayung
              <em className="font-display text-[1.05rem] font-semibold not-italic text-mint">
                Rafting
              </em>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.92rem] font-medium text-white/86 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              className={btnPrimary}
              href={waLink('Hi! I want to book Ayung Rafting.')}
              target="_blank"
              rel="noreferrer"
            >
              Book via WhatsApp
            </a>
          </nav>

          <button
            type="button"
            className="relative inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-white/8 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`absolute inset-x-2.5 h-0.5 rounded-sm bg-white transition ${
                open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-3.5'
              }`}
            />
            <span
              className={`absolute inset-x-2.5 top-1/2 h-0.5 -translate-y-1/2 rounded-sm bg-white transition ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute inset-x-2.5 h-0.5 rounded-sm bg-white transition ${
                open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-3.5 top-auto'
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[55] bg-forest px-[clamp(1.25rem,4vw,2.5rem)] pt-[calc(4.25rem+1.5rem)] pb-8 transition lg:hidden ${
          open
            ? 'visible pointer-events-auto translate-y-0 opacity-100'
            : 'invisible pointer-events-none -translate-y-2 opacity-0'
        }`}
        aria-hidden={!open}
      >
        <nav
          className="mx-auto mt-8 flex max-w-sm flex-col gap-1.5"
          aria-label="Mobile"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={open ? 0 : -1}
              className="block border-b border-line-light py-4 font-display text-2xl font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className={`${btnPrimary} mt-6 w-full`}
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
