import { createElement } from 'react'
import styles from '../../styles/atoms/button.module.css'
import Text from './texts/Text'

const Button = ({
  children,
  type = 'default',
  Icon = null,
  keepCase = false,
  componentElement = 'button',
  ...rest
}) => {
  rest.className = `${styles.button} ${styles['button--' + type]} ${keepCase && styles.keep_case}`

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
