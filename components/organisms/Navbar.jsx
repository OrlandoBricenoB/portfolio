import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import NavButton from '../atoms/links/NavButton'
import styles from '../../styles/organisms/navBar.module.css'

import LanguageSelector from '../molecules/LanguageSelector'
import Dropdown from '../atoms/dropdown/Dropdown'
import Badge from '../atoms/Badge'

import Spain from '../atoms/icons/flags/Spain'
import USA from '../atoms/icons/flags/USA'
import useTranslate from '../../hooks/useTranslate'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const { t } = useTranslate()

  const router = useRouter()

  useEffect(() => {
    setMenuOpen(false)
  }, [router.asPath])

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 980) setMenuOpen(false)
    }

    window.addEventListener('resize', closeOnDesktop)
    return () => window.removeEventListener('resize', closeOnDesktop)
  }, [])

  // * Dropdown
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)

  const handleOpenModal = () => {
    setIsOpenDropdown(!isOpenDropdown)
  }

  // * Select language
  const handleClickLanguage = lang => {
    setIsOpenDropdown(false)

    const { pathname, asPath, query } = router
    const asPathScrollLess = asPath.includes('#!') ? asPath : asPath.replace('#', '#!')

    router.push({ pathname, query }, asPathScrollLess, { locale: lang })
  }

  const closeMenu = () => setMenuOpen(false)

  const goToContact = event => {
    closeMenu()
    const onHome = router.pathname === '/'
    if (!onHome) return

    event.preventDefault()
    const section = document.getElementById('contact')
    if (!section) return

    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const path = router.asPath.split('#')[0]
    window.history.pushState(null, '', `${path}#contact`)
  }

  const links = [
    { href: '/#about', label: t('nav--about') },
    { href: '/#services', label: t('nav--services') },
    { href: '/#method', label: t('nav--method') },
    { href: '/#ventures', label: t('nav--ventures') },
    { href: '/impact', label: t('nav--impact'), active: router.pathname === '/impact' },
    { href: '/courses', label: t('nav--courses'), active: router.pathname === '/courses' },
  ]

  return (
    <header className={`${styles.header} ${(isScrolled || menuOpen) ? styles['header--scrolled'] : ''}`}>
      <div className={styles.nav + ' wrapper'}>
        {/* Logo */}
        <div style={{ justifySelf: 'flex-start' }}>
          <Link href='/' className={styles.logo}>
            Orlando <span>Briceño</span>
          </Link>
        </div>

        {/* Buttons */}
        <div className={styles.nav_buttons}>
          {links.map(link => (
            <NavButton key={link.href} to={link.href} active={link.active}>
              {link.label}
            </NavButton>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.nav_end}>
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
          <Link
            className={styles.cta}
            href='/#contact'
            onClick={goToContact}
          >
            {t('common--cta-contact')}
          </Link>
          <button
            type='button'
            className={`${styles.menu_toggle} ${menuOpen ? styles['menu_toggle--open'] : ''}`}
            aria-expanded={menuOpen}
            aria-controls='mobile-nav'
            aria-label={menuOpen ? t('nav--close-menu') : t('nav--open-menu')}
            onClick={() => setMenuOpen(open => !open)}
          >
            <span className={styles.menu_icon} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id='mobile-nav' className={styles.mobile_menu}>
          {links.map(link => (
            <NavButton key={link.href} to={link.href} active={link.active} onClick={closeMenu}>
              {link.label}
            </NavButton>
          ))}
          <Link
            className={`${styles.cta} ${styles.mobile_cta}`}
            href='/#contact'
            onClick={goToContact}
          >
            {t('common--cta-contact')}
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Navbar
