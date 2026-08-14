import { EMAIL, PHONE_DISPLAY } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest px-0 py-10 text-foam/75">
      <div className="container-site flex flex-wrap justify-between gap-6">
        <div>
          <p className="font-bold tracking-tight text-white">
            {t.brand}{' '}
            <em className="font-display not-italic text-mint">{t.brandSub}</em>
          </p>
          <p className="mt-1.5 text-[0.92rem]">{t.footer.tag}</p>
        </div>
        <div className="grid gap-1.5 text-left text-[0.92rem] lg:text-right">
          <a
            className="hover:text-white"
            href={`tel:${PHONE_DISPLAY.replace(/\s|-/g, '')}`}
          >
            {PHONE_DISPLAY}
          </a>
          <a className="hover:text-white" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <p>
            © {year} {t.footer.made}
          </p>
        </div>
      </div>
    </footer>
  )
}
