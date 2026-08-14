import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { waLink } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'
import { btnPrimary } from '../lib/styles'

export function Header() {
  const { t, lang, setLang } = useLanguage()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const onHome = location.pathname === '/'

  const links = [
    { href: onHome ? '#packages' : '/#packages', label: t.nav.packages },
    { href: onHome ? '#experience' : '/#experience', label: t.nav.experience },
    { href: onHome ? '#gallery' : '/#gallery', label: t.nav.gallery },
    { href: onHome ? '#faq' : '/#faq', label: t.nav.faq },
    { href: onHome ? '#location' : '/#location', label: t.nav.location },
    { href: onHome ? '#contact' : '/#contact', label: t.nav.contact },
  ]

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
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const solid = scrolled || open || !onHome

  const LangSwitch = ({ className = '' }: { className?: string }) => (
    <div
      className={`inline-flex overflow-hidden rounded-full border border-line-light text-xs font-bold ${className}`}
      role="group"
      aria-label={t.lang.label}
    >
      {(['en', 'id'] as const).map((code) => (
        <button
          key={code}
          type="button"
          className={`px-2.5 py-1.5 transition ${
            lang === code ? 'bg-white text-forest' : 'text-white/80 hover:text-white'
          }`}
          onClick={() => setLang(code)}
        >
          {t.lang[code]}
        </button>
      ))}
    </div>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`relative z-[60] h-[4.25rem] transition-[background,box-shadow] ${
          solid ? 'bg-forest/96 shadow-[0_1px_0_var(--color-line-light)]' : ''
        }`}
      >
        <div className="container-site flex h-[4.25rem] items-center justify-between gap-4">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-2.5 font-bold tracking-tight text-white"
            onClick={() => setOpen(false)}
          >
            <span
              className="size-2.5 shrink-0 rounded-full bg-accent shadow-[0_0_0_4px_rgba(226,91,60,0.25)]"
              aria-hidden="true"
            />
            <span className="flex flex-col leading-tight">
              {t.brand}
              <em className="font-display text-[1.05rem] font-semibold not-italic text-mint">
                {t.brandSub}
              </em>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.92rem] font-medium text-white/86 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <LangSwitch />
            <a
              className={btnPrimary}
              href={waLink(t.waGeneric)}
              target="_blank"
              rel="noreferrer"
            >
              {t.nav.book}
            </a>
          </nav>

          <div className="flex items-center gap-2 xl:hidden">
            <LangSwitch />
            <button
              type="button"
              className="relative inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-white/8"
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
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[55] bg-forest px-[clamp(1.25rem,4vw,2.5rem)] pt-[calc(4.25rem+1.5rem)] pb-8 transition xl:hidden ${
          open
            ? 'visible pointer-events-auto translate-y-0 opacity-100'
            : 'invisible pointer-events-none -translate-y-2 opacity-0'
        }`}
        aria-hidden={!open}
      >
        <nav className="mx-auto mt-8 flex max-w-sm flex-col gap-1.5" aria-label="Mobile">
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
            href={waLink(t.waGeneric)}
            target="_blank"
            rel="noreferrer"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            {t.nav.book}
          </a>
        </nav>
      </div>
    </header>
  )
}
