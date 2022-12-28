import { useState } from 'react'
import { useRouter } from 'next/router'

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
  const router = useRouter()

  // * Dropdown
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)

  const handleOpenModal = () => {
    setIsOpenDropdown(!isOpenDropdown)
  }

  // * Select language
  const handleClickLanguage = lang => {
    setIsOpenDropdown(false)

    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: lang })
  }

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div style={{ justifySelf: 'flex-start' }}>
        <Text type='big_paragraph' style={{ margin: '1rem 0' }}>Orlando Briceño</Text>
      </div>

      {/* Buttons */}
      <div className={styles.nav_buttons}>
        <NavButton to='#presentation'>Presentación</NavButton>
        <NavButton to='#about'>Acerca de mí</NavButton>
        <NavButton to='#projects'>Proyectos</NavButton>
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
              Icon={<Spain />}
              style={{ cursor: 'pointer', width: '100%' }}
              onClick={() => handleClickLanguage('es')}
              withHover
            >Español</Badge>
            <Badge
              Icon={<USA />}
              style={{ cursor: 'pointer', width: '100%' }}
              onClick={() => handleClickLanguage('en')}
              withHover
            >English</Badge>
          </Dropdown>
        </div>
        <Button
          componentElement='a'
          Icon={<ContactPage color='#070a2b' />}
          href='#contact'
        >Contáctame</Button>
      </div>
    </header>
  )
}

export default Navbar