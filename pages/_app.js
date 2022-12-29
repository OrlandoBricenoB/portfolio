import 'normalizecss/normalize.css'
import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from '../components/templates/main'
import Head from 'next/head'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Desarrollador Web Full Stack - Orlando Briceño</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)