import styles from '../../../styles/atoms/texts/headings.module.css'

const Heading = ({ type, color, children }) => {
  const elemStyle = {
    color: color || '#070a2b'
  }

  return (
    <p className={`${styles.heading} ${styles[type]}`} style={elemStyle}>
      { children }
    </p>
  )
}

export default Heading
