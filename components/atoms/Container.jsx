import styles from '../../styles/atoms/container.module.css'

const Container = ({ children, ...rest }) => {
  return (
    <div className={styles.container} {...rest}>{ children }</div>
  )
}

export default Container