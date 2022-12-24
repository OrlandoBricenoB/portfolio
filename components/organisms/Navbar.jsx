import NavButton from '../atoms/links/NavButton'
import styles from '../../styles/organisms/navBar.module.css'
import Text from '../atoms/texts/Text'
import Button from '../atoms/Button'

import ContactPage from '../atoms/icons/ContactPage'
import LanguageSelector from '../molecules/LanguageSelector'

const Navbar = () => {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div>
        <Text type='big_paragraph'>Orlando Briceño</Text>
      </div>

      {/* Buttons */}
      <div className={styles.nav_buttons}>
        <NavButton>Inicio</NavButton>
        <NavButton>Acerca de mí</NavButton>
        <NavButton>Proyectos</NavButton>
      </div>

      {/* CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '.25rem' }}>
        <LanguageSelector />
        <Button
          Icon={() => <ContactPage color='#070a2b' />}
        >Contáctame</Button>
      </div>
    </header>
  )
}

export default Navbar