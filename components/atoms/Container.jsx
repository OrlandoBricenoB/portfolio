import styles from '../../styles/atoms/container.module.css'

const Container = ({ children, className, ...rest }) => {
  return (
    <div className={`${styles.container} ${className || ''}`} {...rest}>
      { children }
    </div>
  )
}

export default Container