import 'normalizecss/normalize.css'
import '../styles/globals.css'
import Layout from '../components/layouts/main'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Desarrollador Web Full Stack - Orlando Briceño</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
