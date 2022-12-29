import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
  
import MainSection from '../components/templates/home/MainSection'
import ProjectsSection from '../components/templates/home/ProjectsSection'
import AboutSection from '../components/templates/home/AboutSection'
import ContactSection from '../components/templates/home/ContactSection'

import useRecommendations from '../hooks/useRecommendations'
import useUsers from '../hooks/useUsers'

export default function Home() {
  const {
    data: recommendations
  } = useRecommendations()

  const {
    data: users
  } = useUsers()

  return (
    <>
      <MainSection recommendations={recommendations} users={users} />
      <ProjectsSection />
      <AboutSection />
      <ContactSection recommendations={recommendations} users={users} />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}