import { useState } from 'react'
import Web from '../atoms/icons/Web'
import CaretDown from '../atoms/icons/CaretDown'
import styles from '../../styles/molecules/languageSelector.module.css'

const LanguageSelector = ({ onClick = () => {} }) => {
  const [color, setColor] = useState('#21c2e1')
  const handleMouseEnter = () => { setColor('#6ee9ff') }
  const handleMouseLeave = () => { setColor('#21c2e1') }

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
