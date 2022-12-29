import useTranslate from '../../hooks/useTranslate'
import classNames from 'classnames'
import Container from '../atoms/Container'
import Text from '../atoms/texts/Text'
import Image from 'next/image'

import LeadinGraphLogo from '../../assets/images/brands/leadingraph.png'
import PlatziLogo from '../../assets/images/brands/platzi.png'

const Footer = () => {
  const { t } = useTranslate()

  return (
    <footer className={classNames('footer')}>
      <div className={classNames('footer__content')}>
        <div className={classNames('footer__description')}>
          <Text type='big_paragraph'>{t('footer--title')}</Text>
          <Text type='paragraph'>
            {t('footer--content-1')}
            <br /><br />
            {t('footer--content-2')}
          </Text>
        </div>
        <Container className={classNames('footer__brands')}>
          <figure className={classNames('footer__brand')}>
            <a href='https://leadingraph.com' target='_blank' aria-label='LeadinGraph Website'>
              <Image
                src={LeadinGraphLogo}
                width={128}
                height={128}
                className={classNames('footer__brand_image')}
                alt='LeadinGraph'
              />
            </a>
          </figure>
          <figure className={classNames('footer__brand')}>
            <a href='https://platzi.com' target='_blank' aria-label='Platzi Website'>
              <Image
                src={PlatziLogo}
                width={128}
                height={128}
                className={classNames('footer__brand_image')}
                alt='Platzi'
              />
            </a>
          </figure>
        </Container>
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
