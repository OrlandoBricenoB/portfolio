import styles from '../../styles/atoms/button_text.module.css'

const ButtonText = ({ children }) => {
  return (
    <p className={styles.button_text}>
      { children }
    </p>
  )
}

export default ButtonText
