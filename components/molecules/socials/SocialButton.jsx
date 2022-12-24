import { useState } from 'react'
import styles from '../../../styles/molecules/socialButton.module.css'

const SocialButton = ({ Icon, children, keepCase = false, to = '#!' }) => {
  const [color, setColor] = useState('#8E92C2')
  const handleMouseEnter = () => { setColor('#FFFFFF') }
  const handleMouseLeave = () => { setColor('#8E92C2') }

  return (
    <a
      className={styles.social_button}
      href={to}
      target='_blank'
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
