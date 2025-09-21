import useTranslate from '../../hooks/useTranslate'
import classNames from 'classnames'
import Heading from '../atoms/texts/Heading'
import Text from '../atoms/texts/Text'
import Image from 'next/image'

import GadminLogo from '../../assets/images/brands/gadmin.png'

const Footer = () => {
  const { t } = useTranslate()

  return (
    <footer className={classNames('footer')}>
      <div className="wrapper">
        <div className={classNames('footer__content')}>
          <div className={classNames('footer__description')}>
            <Heading type='h1'>{t('footer--title')}</Heading>
            <Text type='paragraph' style={{ fontSize: '1.1rem' }}>
              {t('footer--content-1')}
              <br /><br />
              {t('footer--content-2')}
            </Text>
          </div>
          <div className={classNames('footer__brands')} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <figure className={classNames('footer__brand')} style={{ margin: 0 }}>
              <a href='https://gadmin.app' target='_blank' aria-label='Gadmin Website' style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                <Image
                  src={GadminLogo}
                  width={128}
                  height={128}
                  className={classNames('footer__brand_image')}
                  alt='Gadmin'
                  style={{ maxWidth: '96px', margin: '0 auto' }}
                />
                <span
                  style={{
                    fontSize: '2rem',
                    letterSpacing: '0.1em',
                    color: '#ffffff',
                    userSelect: 'none',
                    lineHeight: 1,
                  }}
                >
                  Gadmin
                </span>
              </a>
            </figure>
          </div>
        </div>
        <div className={classNames('footer__credits')}>
        <Text type='paragraph' style={{ fontSize: '1.1rem', margin: 0 }}>
            {t('footer--credits')}
          </Text>
        </div>
      </div>
    </footer>
  )
}

export default Footer
