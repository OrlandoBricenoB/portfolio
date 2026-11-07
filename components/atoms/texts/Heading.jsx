import { createElement } from 'react'
import styles from '../../../styles/atoms/texts/headings.module.css'
import RichText from '../ui/RichText'

const Heading = ({ type = 'h3', color, children, ...rest }) => {
  rest.className = `${styles.heading} ${styles[type]} ${rest.className || ''}`
  if (color) {
    rest.style = { ...rest.style, color }
  }

  return createElement(
    type,
    rest,
    typeof children === 'string' ? <RichText>{children}</RichText> : children
  )
}

export default Heading
