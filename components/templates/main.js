import Navbar from '../organisms/Navbar'

export default function MainTemplate({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}