import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import CoursesPage from '../components/templates/courses/CoursesPage'

export default function Courses() {
  return <CoursesPage />
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
