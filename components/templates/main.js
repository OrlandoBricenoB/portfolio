import Footer from '../organisms/Footer'
import Navbar from '../organisms/Navbar'
import SiteMotion from '../motion/SiteMotion'

export default function MainTemplate({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <SiteMotion />
    </>
  )
}