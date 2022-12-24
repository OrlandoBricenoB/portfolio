import styles from '../../../styles/atoms/texts/headings.module.css'

const Heading = ({ type, color, children }) => {
  const elemStyle = {
    color: color || '#ffffff'
  }

  return (
    <p className={`${styles.heading} ${styles[type]}`} style={elemStyle}>
      { children }
    </p>
  )
}

export default Heading
