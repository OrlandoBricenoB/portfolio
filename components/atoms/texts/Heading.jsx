import styles from '../../../styles/atoms/texts/headings.module.css'

const Heading = ({ type, children }) => {
  return (
    <p className={`${styles.heading} ${styles[type]}`}>
      { children }
    </p>
  )
}

export default Heading
