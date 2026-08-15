import { waLink } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'

export function WhatsAppFloat() {
  const { t } = useLanguage()

  return (
    <a
      href={waLink(t.waGeneric)}
      target="_blank"
      rel="noreferrer"
      aria-label={t.waFloat}
      className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.45)] transition hover:scale-105 hover:bg-[#1ebe57] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] md:right-6 md:bottom-6"
    >
      <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true" fill="currentColor">
        <path d="M16.1 4C9.6 4 4.3 9.3 4.3 15.8c0 2.1.6 4.1 1.6 5.9L4 28l6.5-1.7c1.7.9 3.6 1.4 5.6 1.4 6.5 0 11.8-5.3 11.8-11.8S22.6 4 16.1 4zm0 21.5c-1.8 0-3.5-.5-5-1.3l-.4-.2-3.8 1 1-3.7-.2-.4c-1-1.6-1.5-3.4-1.5-5.2 0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.3 9.8-9.7 9.8zm5.4-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.6.1-.2 0-.4-.1-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.2.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z" />
      </svg>
    </a>
  )
}
