import { useEffect, useState } from 'react'
import { useTranslations, localizePath } from '../../i18n/utils'
import Web from '../icons/Web'
import CaretDown from '../icons/CaretDown'
import Spain from '../icons/flags/Spain'
import USA from '../icons/flags/USA'

const LANGS = [
  { code: 'es', label: 'Español', Flag: Spain },
  { code: 'en', label: 'English', Flag: USA },
]

const navLink = (active, scrolled) =>
  [
    'my-2 whitespace-nowrap rounded-full px-3 py-1.5 text-[0.95rem] font-medium leading-tight no-underline transition-colors duration-200',
    scrolled
      ? 'text-ink hover:bg-blue-50 hover:text-blue-700'
      : 'text-white hover:bg-white/15 hover:text-white',
    active && (scrolled ? 'bg-blue-100 text-blue-700' : 'bg-white/20 text-white'),
  ]
    .filter(Boolean)
    .join(' ')

const BAR = 'absolute left-0 block h-0.5 w-[18px] rounded-full bg-current content-[""]'

const Navbar = ({ lang = 'en', currentPath = '/' }) => {
  const t = useTranslations(lang)
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [hash, setHash] = useState('')

  useEffect(() => {
    const onScroll = () => setIsScrolled((window.pageYOffset || document.documentElement.scrollTop) > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const closeOnDesktop = () => { if (window.innerWidth > 980) setMenuOpen(false) }
    window.addEventListener('resize', closeOnDesktop)
    return () => window.removeEventListener('resize', closeOnDesktop)
  }, [])

  // Keep the current hash when switching language
  useEffect(() => {
    const sync = () => setHash(window.location.hash)
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const onHome = currentPath === '/' || currentPath === ''
  const closeMenu = () => setMenuOpen(false)

  const goToContact = event => {
    closeMenu()
    if (!onHome) return
    const section = document.getElementById('contact')
    if (!section) return
    event.preventDefault()
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.pushState(null, '', `${window.location.pathname}#contact`)
    setHash('#contact')
  }

  const links = [
    { href: '/#about', label: t('nav--about') },
    { href: '/#services', label: t('nav--services') },
    { href: '/#method', label: t('nav--method') },
    { href: '/#ventures', label: t('nav--ventures') },
    { href: '/impact', label: t('nav--impact'), active: currentPath === '/impact' },
    { href: '/courses', label: t('nav--courses'), active: currentPath === '/courses' },
    { href: '/blog', label: t('nav--blog'), active: currentPath.startsWith('/blog') },
  ]

  const solid = isScrolled || menuOpen
  const ctaClass =
    'inline-flex items-center whitespace-nowrap rounded-full bg-blue-700 px-[18px] py-2.5 text-[0.95rem] font-semibold text-white no-underline transition duration-200 hover:-translate-y-px hover:bg-blue-800'
  const iconColor = '#0051ff'

  return (
    <header
      className={[
        'fixed left-0 top-0 z-[1000] w-full border-b py-[0.35rem] transition duration-300',
        solid
          ? 'border-ink/[0.08] bg-white/90 text-ink shadow-[0_6px_24px_rgba(5,5,40,0.06)] backdrop-blur-[14px] backdrop-saturate-[160%]'
          : 'border-transparent bg-transparent text-white shadow-none',
      ].join(' ')}
    >
      <div className="wrapper grid min-w-0 grid-cols-[minmax(0,1fr)_auto] place-items-center gap-3 nav:grid-cols-[auto_1fr_auto] nav:gap-6">
        <div className="max-w-full justify-self-start">
          <a
            href={localizePath('/', lang)}
            className={`my-3 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-base font-black tracking-[-0.03em] no-underline transition-colors duration-300 min-[561px]:text-[1.15rem] ${solid ? 'text-ink' : 'text-white'}`}
          >
            Orlando <span className="text-blue-700">Briceño</span>
          </a>
        </div>

        <nav className="hidden justify-self-center gap-1 nav:flex">
          {links.map(link => (
            <a key={link.href} href={localizePath(link.href, lang)} className={navLink(link.active, isScrolled)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-[0.35rem] justify-self-end">
          <div className="relative">
            <button
              type="button"
              aria-label="Language"
              aria-expanded={langOpen}
              onClick={() => setLangOpen(open => !open)}
              className="flex cursor-pointer items-center rounded-full border-0 bg-transparent px-2 py-1.5 transition-colors duration-200 hover:bg-blue-50"
            >
              <Web color={iconColor} />
              <span className="relative flex items-center">
                <CaretDown color={iconColor} />
              </span>
            </button>
            <div
              className={`absolute right-0 top-[calc(100%+0.35rem)] z-[1000] flex origin-top-right flex-col gap-[0.35rem] rounded-2xl border border-white/10 bg-[#050528f2] p-[0.4rem] shadow-[0_4px_24px_#00000014] backdrop-blur-2xl backdrop-saturate-[180%] transition-transform duration-200 nav:-left-24 nav:right-auto ${langOpen ? 'scale-100' : 'scale-0'}`}
            >
              {LANGS.map(({ code, label, Flag }) => (
                <a
                  key={code}
                  href={`${localizePath(currentPath, code)}${hash}`}
                  hrefLang={code}
                  onClick={() => setLangOpen(false)}
                  className="flex w-full items-center gap-1.5 rounded-full bg-transparent px-3 py-1.5 text-[.85rem] text-white no-underline transition duration-200 hover:bg-blue-950 active:scale-95"
                >
                  <Flag />
                  <span>{label}</span>
                </a>
              ))}
            </div>
            {langOpen && <div className="fixed inset-0 z-[900]" onClick={() => setLangOpen(false)} />}
          </div>

          <a className={`${ctaClass} ml-2 max-[560px]:hidden`} href={localizePath('/#contact', lang)} onClick={goToContact}>
            {t('common--cta-contact')}
          </a>

          <button
            type="button"
            className="ml-[0.15rem] inline-flex size-[42px] cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 text-inherit hover:bg-white/15 nav:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? t('nav--close-menu') : t('nav--open-menu')}
            onClick={() => setMenuOpen(open => !open)}
          >
            <span
              className={`relative block h-0.5 w-[18px] rounded-full ${menuOpen ? 'bg-transparent' : 'bg-current'}`}
            >
              <span className={`${BAR} ${menuOpen ? 'top-0 rotate-45' : '-top-1.5'}`} />
              <span className={`${BAR} ${menuOpen ? 'top-0 -rotate-45' : 'top-1.5'}`} />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="absolute left-0 right-0 top-full flex max-h-[calc(100dvh-4.25rem)] flex-col items-stretch gap-[0.15rem] overflow-auto border-b border-ink/[0.08] bg-white px-5 pb-5 pt-[0.35rem] text-ink shadow-[0_18px_40px_rgba(5,5,40,0.12)] nav:hidden"
        >
          {links.map(link => (
            <a
              key={link.href}
              href={localizePath(link.href, lang)}
              onClick={closeMenu}
              className={`${navLink(link.active, true)} justify-start !px-[0.35rem] !py-[0.85rem] !text-[1.05rem]`}
            >
              {link.label}
            </a>
          ))}
          <a className={`${ctaClass} mb-1 mt-3 justify-center`} href={localizePath('/#contact', lang)} onClick={goToContact}>
            {t('common--cta-contact')}
          </a>
        </nav>
      )}
    </header>
  )
}

export default Navbar
