import styles from '../../../styles/atoms/texts/headings.module.css'

const Heading = ({ type, color, children, ...rest }) => {
  const elemStyle = {
    color: color || '#ffffff'
  }

  return (
    <p className={`${styles.heading} ${styles[type]}`} style={elemStyle} {...rest}>
      { children }
    </p>
  )
}

export default Heading
