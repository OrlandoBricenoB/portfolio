module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es']
  },
  fallbackLng: {
    default: ['en']
  },
  localePath: './public/locales',
  react: { 
    useSuspense: true // Habilitamos Suspense para mejor rendimiento
  },
  nonExplicitSupportedLngs: true,
  // Optimizaciones para Next.js 15
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  // Carga asíncrona de traducciones
  load: 'languageOnly',
  // Optimización de carga de namespaces
  ns: ['common'],
  defaultNS: 'common'
}
