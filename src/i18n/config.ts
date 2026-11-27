export const locales = ['en', 'es'] as const
export type Lang = (typeof locales)[number]
export const defaultLang: Lang = 'en'
