import styles from '../../styles/atoms/smallParagraph.module.css'

const SmallParagraph = ({ children }) => {
  return (
    <p className={styles.small_paragraph}>
      { children }
    </p>
  )
}

export default SmallParagraph
