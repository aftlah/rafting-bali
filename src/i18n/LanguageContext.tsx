import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { dictionaries, type Dictionary, type Lang } from './dictionaries'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'uar-lang'

function detectLang(): Lang {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'en' || saved === 'id') return saved
  return navigator.language.toLowerCase().startsWith('id') ? 'id' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() =>
    typeof window === 'undefined' ? 'en' : detectLang(),
  )

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang, setLang],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
