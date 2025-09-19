import Footer from '../organisms/Footer'
import Navbar from '../organisms/Navbar'

export default function MainTemplate({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}