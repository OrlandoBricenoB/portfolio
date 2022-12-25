import styles from '../../../styles/atoms/texts/text.module.css'

const Text = ({ type, className = '', children, ...rest }) => {
  return (
    <p className={`${styles.text} ${styles[type] || styles.paragraph} ${className}`} {...rest}>
      { children }
    </p>
  )
}

export default Text
