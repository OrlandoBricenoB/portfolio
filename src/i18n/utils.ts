import en from './locales/en.json'
import es from './locales/es.json'
import { defaultLang, locales, type Lang } from './config'

const dictionaries: Record<Lang, Record<string, string>> = { en, es }

export const isLang = (value: unknown): value is Lang =>
  locales.includes(value as Lang)

export const getLangFromUrl = (url: URL): Lang => {
  const [, first] = url.pathname.split('/')
  return isLang(first) ? first : defaultLang
}

// Falls back to English, then to the key itself.
export const useTranslations = (lang: Lang) => (key: string): string =>
  dictionaries[lang]?.[key] ?? dictionaries[defaultLang][key] ?? key

// '/impact' + 'es' -> '/es/impact'; '/#about' + 'es' -> '/es/#about'
export const localizePath = (path: string, lang: Lang): string => {
  const clean = path.startsWith('/') ? path : `/${path}`
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '/' : clean}`
}

// Same page in another locale: '/es/impact' -> '/impact'
export const stripLang = (pathname: string): string => {
  const [, first, ...rest] = pathname.split('/')
  return isLang(first) ? `/${rest.join('/')}` : pathname
}
