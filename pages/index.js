import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
  
import MainSection from '../components/templates/home/MainSection'
import ProjectsSection from '../components/templates/home/ProjectsSection'
import AboutSection from '../components/templates/home/AboutSection'
import ContactSection from '../components/templates/home/ContactSection'

import useRecommendations from '../hooks/useRecommendations'
import useUsers from '../hooks/useUsers'
import { useEffect } from 'react'

export default function Home() {
  const {
    data: recommendations
  } = useRecommendations()

  const [sortRecommendations, setSortRecommendations] = useState([])

  useEffect(() => {
    setSortRecommendations(recommendations.sort(
      (a, b) => {
      const aDate = new Date(a.createDate).getTime()
      const bDate = new Date(b.createDate).getTime()
      return bDate - aDate
    }))
  }, [recommendations])

  const {
    data: users
  } = useUsers()

  return (
    <>
      <MainSection recommendations={recommendations} users={users} />
      <ProjectsSection />
      <AboutSection />
      <ContactSection recommendations={sortRecommendations} users={users} />
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