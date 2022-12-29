import styles from '../../../styles/atoms/links/link.module.css'

const Link = ({ children, to, ...rest }) => {
  return (
    <a
      className={styles.link}
      href={to}
      aria-label={children}
      {...rest}
    >
      {children}
    </a>
  )
}

export default Link
