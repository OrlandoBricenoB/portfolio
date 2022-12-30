import { createElement } from 'react'
import styles from '../../styles/atoms/container.module.css'

const Container = ({ children, componentElement = 'div', className, ...rest }) => {
  rest.className = `${styles.container} ${className || ''}`

  return createElement(
    componentElement,
    rest,
    children
  )
}

export default Container