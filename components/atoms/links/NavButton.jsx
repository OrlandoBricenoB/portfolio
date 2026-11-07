import Link from 'next/link'
import styles from '../../../styles/atoms/links/navButton.module.css'

const NavButton = ({ children, to = '#!', active = false, onClick }) => {
  return (
    <Link className={`${styles.nav_button} ${active ? styles.active : ''}`} href={to} onClick={onClick}>
      {children}
    </Link>
  )
}

export default NavButton
