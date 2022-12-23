import styles from '../../styles/atoms/texts/text.module.css'

const Text = ({ type, children }) => {
  return (
    <p className={styles[type] || styles.paragraph}>
      { children }
    </p>
  )
}

export default Text
