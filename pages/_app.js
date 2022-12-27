import 'normalizecss/normalize.css'
import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import Layout from '../components/templates/main'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(MyApp)