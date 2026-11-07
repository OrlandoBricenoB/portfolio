import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import ImpactPage from '../components/templates/impact/ImpactPage'

export default function Impact() {
  return <ImpactPage />
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
