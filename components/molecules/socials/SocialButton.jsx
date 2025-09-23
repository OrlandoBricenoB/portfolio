import { useState } from 'react'
import styles from '../../../styles/molecules/socialButton.module.css'

const SocialButton = ({ Icon, children, keepCase = false, to = '#!' }) => {
  const [color, setColor] = useState('#ffffff')
  const handleMouseEnter = () => { setColor('#cccccc') }
  const handleMouseLeave = () => { setColor('#ffffff') }

  return (
    <a
      className={styles.social_button}
      href={to}
      target='_blank'
      aria-label={`Visitar ${children} de Orlando Briceño`}
      style={{
        textTransform: keepCase ? 'none' : 'uppercase',
        color: color,
        cursor: to ? 'pointer' : 'auto'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {Icon && <Icon color={color} />}
      {children}
    </a>
  )
}

export default SocialButton
