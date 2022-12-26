import 'normalizecss/normalize.css'
import '../styles/globals.css'
import Layout from '../components/templates/main'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Desarrollador Web Full Stack - Orlando Briceño</title>
        <meta
          property="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
