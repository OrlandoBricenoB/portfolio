import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { i18n as i18nConfig } from './next-i18next.config'

// Importar recursos de traducción
import enCommon from './public/locales/en/common.json'
import esCommon from './public/locales/es/common.json'

const resources = {
  en: {
    common: enCommon
  },
  es: {
    common: esCommon
  }
}

i18n
  .use(initReactI18next)
  .init({
    ...i18nConfig,
    resources,
    lng: i18nConfig.defaultLocale,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
