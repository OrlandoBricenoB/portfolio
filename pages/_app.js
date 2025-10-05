import 'normalizecss/normalize.css'
import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from '../components/templates/main'
import Head from 'next/head'
import '../i18n' // Importar configuración de i18next

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Orlando Briceño | Gadmin Founder</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)