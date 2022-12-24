import { createElement } from 'react'
import styles from '../../../styles/atoms/texts/headings.module.css'

const Heading = ({ type = 'h3', color, children, ...rest }) => {
  rest.className = `${styles.heading} ${styles[type]} ${rest.className || ''}`
  rest.style= {
    ...rest.style,
    color: color || '#ffffff'
  }

  return createElement(
    type,
    rest,
    children
  )
}

export default Heading
