import { useState } from 'react'

import NavButton from '../atoms/links/NavButton'
import styles from '../../styles/organisms/navBar.module.css'
import Text from '../atoms/texts/Text'
import Button from '../atoms/Button'

import ContactPage from '../atoms/icons/ContactPage'
import LanguageSelector from '../molecules/LanguageSelector'
import Dropdown from '../atoms/dropdown/Dropdown'
import Badge from '../atoms/Badge'

import Spain from '../atoms/icons/flags/Spain'
import USA from '../atoms/icons/flags/USA'

const Navbar = () => {
  // * Dropdown
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)

  const handleOpenModal = () => {
    setIsOpenDropdown(!isOpenDropdown)
  }

  // * Select language
  const [language, setLanguage] = useState('es')
  const handleClickLanguage = lang => {
    setLanguage(lang)
    setIsOpenDropdown(false)
  }

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div style={{ justifySelf: 'flex-start' }}>
        <Text type='big_paragraph' style={{ margin: '1rem 0' }}>Orlando Briceño</Text>
      </div>

      {/* Buttons */}
      <div className={styles.nav_buttons}>
        <NavButton>Presentación</NavButton>
        <NavButton>Acerca de mí</NavButton>
        <NavButton>Proyectos</NavButton>
      </div>

      {/* CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '.25rem', justifySelf: 'flex-end' }}>
        <div style={{ position: 'relative' }}>
          <LanguageSelector onClick={handleOpenModal} />
          <Dropdown
            isOpen={isOpenDropdown}
            setIsOpen={setIsOpenDropdown}
            style={{ display: 'flex', flexDirection: 'column', gap: '.35rem' }}
          >
            <Badge
              Icon={Spain}
              style={{ cursor: 'pointer', width: '100%' }}
              onClick={() => handleClickLanguage('es')}
              withHover
            >Español</Badge>
            <Badge
              Icon={USA}
              style={{ cursor: 'pointer', width: '100%' }}
              onClick={() => handleClickLanguage('en')}
              withHover
            >English</Badge>
          </Dropdown>
        </div>
        <Button
          Icon={<ContactPage color='#070a2b' />}
        >Contáctame</Button>
      </div>
    </header>
  )
}

export default Navbar