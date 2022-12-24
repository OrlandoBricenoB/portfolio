import 'normalizecss/normalize.css'
import '../styles/globals.css'
import Layout from '../components/layouts/main'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
