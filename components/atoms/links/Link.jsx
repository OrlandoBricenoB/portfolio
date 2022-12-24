import styles from '../../../styles/atoms/links/link.module.css'

const Link = ({ children, to = '#!' }) => {
  return (
    <a className={styles.link} href={to}>
      {children}
    </a>
  )
}

export default Link
