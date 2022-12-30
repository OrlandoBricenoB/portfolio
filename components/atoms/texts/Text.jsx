import { createElement } from 'react'
import styles from '../../../styles/atoms/texts/text.module.css'

const Text = ({
  type,
  className = '',
  children,
  componentElement = 'p',
  ...rest
}) => {
  rest.className = `${styles.text} ${styles[type] || styles.paragraph} ${className}`

  return createElement(
    componentElement,
    rest,
    children
  )
}

export default Text
