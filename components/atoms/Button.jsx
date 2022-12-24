import styles from '../../styles/atoms/button.module.css'
import Text from './texts/Text'

const Button = ({
  children,
  type = 'default',
  Icon = null,
  keepCase = false
}) => {
  return (
    <button className={`${styles.button} ${styles['button--' + type]} ${keepCase && styles.keep_case}`}>
      {Icon && <Icon />}
      <Text type='button' style={{ margin: 0 }}>{children}</Text>
    </button>
  )
}

export default Button
