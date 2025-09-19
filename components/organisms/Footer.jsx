import useTranslate from '../../hooks/useTranslate'
import classNames from 'classnames'
import Container from '../atoms/Container'
import Text from '../atoms/texts/Text'
import Image from 'next/image'

import GadminLogo from '../../assets/images/brands/gadmin.png'

const Footer = () => {
  const { t } = useTranslate()

  return (
    <footer className={classNames('footer', 'wrapper')}>
      <div className={classNames('footer__content')}>
        <div className={classNames('footer__description')}>
          <Text type='big_paragraph'>{t('footer--title')}</Text>
          <Text type='paragraph'>
            {t('footer--content-1')}
            <br /><br />
            {t('footer--content-2')}
          </Text>
        </div>
        <div className={classNames('footer__brands')}>
          <figure className={classNames('footer__brand')}>
            <a href='https://gadmin.app' target='_blank' aria-label='Gadmin Website'>
              <Image
                src={GadminLogo}
                width={128}
                height={128}
                className={classNames('footer__brand_image')}
                alt='Gadmin'
                style={{ maxWidth: '96px', margin: '0 auto' }}
              />
            </a>
          </figure>
        </div>
      </div>
      <div className={classNames('footer__credits')}>
        <Text type='big_paragraph' style={{ margin: 0 }}>
          {t('footer--credits')}
        </Text>
      </div>
    </footer>
  )
}

export default Footer
