import { createElement } from 'react'
import styles from '../../styles/atoms/button.module.css'
import Text from './texts/Text'

const Button = ({
  children,
  type = 'default',
  Icon = null,
  keepCase = false,
  disabled = false,
  componentElement = 'button',
  ...rest
}) => {
  rest.className = `${styles.button} ${styles['button--' + type]} ${keepCase && styles.keep_case}`
  rest.className = rest.className + (disabled ? ' ' + styles['button--disabled'] : '')

  const Content = () => (
    <>
      {Icon}
      <Text type='button' style={{ margin: 0 }}>{children}</Text>
    </>
  )

  return createElement(
    componentElement,
    rest,
    <Content />
  )
}

export default Button
