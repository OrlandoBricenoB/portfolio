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
        <title>Desarrollador Web Full Stack - Orlando Briceño</title>
        <meta charSet="utf-8" />
        <meta
          property="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document