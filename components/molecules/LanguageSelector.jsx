import { useState } from 'react'
import Web from '../atoms/icons/Web'
import CaretDown from '../atoms/icons/CaretDown'
import styles from '../../styles/molecules/languageSelector.module.css'

const LanguageSelector = ({ onClick = () => {} }) => {
  const [color, setColor] = useState('#0051ff')
  const handleMouseEnter = () => { setColor('#083fc5') }
  const handleMouseLeave = () => { setColor('#0051ff') }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={styles.language_selector}
    >
      <Web color={color} />
      <div className={styles.language_selector__caret}>
        <CaretDown color={color} />
      </div>
    </div>
  )
}

export default LanguageSelector
