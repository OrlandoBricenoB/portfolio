import useTranslate from '../../hooks/useTranslate'
import classNames from 'classnames'
import Heading from '../atoms/texts/Heading'
import Text from '../atoms/texts/Text'
import Note from '../atoms/ui/Note'
import Image from 'next/image'
import Link from 'next/link'

import GadminLogo from '../../assets/images/brands/gadmin.png'
import SellLogo from '../../assets/images/brands/sell-logo.png'
import ContyLogo from '../../assets/images/brands/conty-logo.png'

const BRANDS = [
  { href: 'https://gadmin.app', label: 'Gadmin Website', name: 'Gadmin', logo: GadminLogo },
  { href: 'https://gadminsell.com', label: 'Gadmin Sell Website', name: 'Gadmin Sell', logo: SellLogo },
  { href: 'https://gadminconty.com', label: 'Gadmin Conty Website', name: 'Gadmin Conty', logo: ContyLogo },
]

const STICKERS = [
  { href: '/impact', key: 'nav--impact', cls: 's-blue', r: -2 },
  { href: '/courses', key: 'nav--courses', cls: 's-ink', r: 1.5 },
  { href: '/#services', key: 'nav--services', cls: 's-soft', r: -1 },
  { href: '/#ventures', key: 'nav--ventures', cls: 's-soft', r: 2 },
]

const Footer = () => {
  const { t } = useTranslate()

  return (
    <footer className={classNames('footer')}>
      <div className='wrapper'>
        <div className={classNames('footer__content')} data-reveal='up'>
          <div className={classNames('footer__description')}>
            <Note>{t('common--role')}</Note>
            <Heading type='h2'>{t('footer--title')}</Heading>
            <Text type='paragraph'>
              {t('footer--content-1')}
              <br /><br />
              {t('footer--content-2')}
            </Text>
            <nav aria-label='Footer' className='footer__stickers'>
              {STICKERS.map(({ href, key, cls, r }) => (
                <Link key={key} href={href} className={cls} style={{ '--r': `${r}deg` }}>
                  {t(key)}
                </Link>
              ))}
            </nav>
          </div>
          <div className={classNames('footer__brands')}>
            {BRANDS.map(({ href, label, name, logo }) => (
              <figure key={name} className={classNames('footer__brand')}>
                <a href={href} target='_blank' rel='noreferrer' aria-label={label}>
                  <Image
                    src={logo}
                    width={96}
                    height={96}
                    alt={name}
                    style={{ width: 80, height: 80, background: 'var(--white)', padding: 8, boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)' }}
                  />
                  <span style={{ fontSize: '1.75rem', fontWeight: 900, letterSpacing: '-0.03em' }}>
                    {name}
                  </span>
                </a>
              </figure>
            ))}
          </div>
        </div>
        <div className={classNames('footer__credits')}>
          <Text type='paragraph' style={{ margin: 0, fontSize: '0.95rem' }}>
            {t('footer--credits')}
          </Text>
        </div>
      </div>
    </footer>
  )
}

export default Footer
