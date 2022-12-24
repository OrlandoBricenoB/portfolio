import styles from '../../../styles/atoms/links/navButton.module.css'

const NavButton = ({ children, to = '#!' }) => {
  return (
    <a className={styles.nav_button} href={to}>
      {children}
    </a>
  )
}

export default NavButton
