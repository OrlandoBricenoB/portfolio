import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import i18nextConfig from '../next-i18next.config'

function Document({ ...rest }) {
  const currentLocale =
    rest.__NEXT_DATA__?.locale ?? i18nextConfig.i18n.defaultLocale

  return (
    <Html lang={currentLocale}>
      <Head>
        <meta charSet="utf-8" />
        <meta
          property="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#070a2b" />
        <meta name="theme-color" content="#21c2e1" />

        {/* Primary Meta Tags */}
        <meta name="title" content="Orlando Briceño | Gadmin Founder" />
        <meta name="description" content="¡Hola! Soy Orlando Briceño, fundador de Gadmin y emprendedor. Quiero ayudar a las personas, es por eso que creé las herramientas de Gadmin." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://orlandobricenob.com/" />
        <meta property="og:title" content="Orlando Briceño | Gadmin Founder" />
        <meta property="og:description" content="¡Hola! Soy Orlando Briceño, fundador de Gadmin y emprendedor. Quiero ayudar a las personas, es por eso que creé las herramientas de Gadmin." />
        <meta property="og:image" content="https://orlandobricenob.com/og-meta.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://orlandobricenob.com/" />
        <meta property="twitter:title" content="Orlando Briceño | Gadmin Founder" />
        <meta property="twitter:description" content="¡Hola! Soy Orlando Briceño, fundador de Gadmin y emprendedor. Quiero ayudar a las personas, es por eso que creé las herramientas de Gadmin." />
        <meta property="twitter:image" content="https://orlandobricenob.com/og-meta.png" />

        <script async src="https://cdn.seline.so/seline.js" data-token="4e832700dab5473"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document