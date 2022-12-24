import styles from '../../../styles/atoms/texts/text.module.css'

const Text = ({ type, children, ...rest }) => {
  return (
    <p className={`${styles.text} ${styles[type] || styles.paragraph}`} {...rest}>
      { children }
    </p>
  )
}

export default Text
