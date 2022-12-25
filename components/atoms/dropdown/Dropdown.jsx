import Container from '../Container'
import styles from '../../../styles/atoms/dropdown/dropdown.module.css'

const Dropdown = ({
  children,
  position = 'bottom',
  isOpen,
  setIsOpen,
  ...rest
}) => {
  console.log({ styles })
  return (
    <>
      <Container
        className={`${styles.dropdown} ${styles[`dropdown--${position}`]} ${isOpen && styles['dropdown--open']}`}
        {...rest}
      >
        {children}
      </Container>
      {
        isOpen && (
          <div className={styles.overlayer} onClick={() => setIsOpen && setIsOpen(false)}></div>
        )
      }
    </>
  )
}

export default Dropdown
