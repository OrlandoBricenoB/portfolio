// * Encerrar el componente Paragraph, SmallParagraph y Subtitle/Big Paragraph en un solo componente.
import styles from '../../styles/atoms/text.module.css'

const Text = ({ type, children }) => {
  return (
    <p className={styles[type] || styles.paragraph}>
      { children }
    </p>
  )
}

export default Text
