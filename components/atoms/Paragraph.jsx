import styles from '../../styles/atoms/paragraph.module.css'

const Paragraph = ({ children }) => {
  return (
    <p className={styles.paragraph}>{ children }</p>
  )
}

export default Paragraph
