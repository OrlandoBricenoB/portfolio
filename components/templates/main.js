import Footer from '../organisms/Footer'
import Navbar from '../organisms/Navbar'

export default function MainTemplate({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ padding: '0 2rem' }}>{children}</main>
      <Footer />
    </>
  )
}