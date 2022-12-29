import useTranslate from '../../hooks/useTranslate'
import classNames from 'classnames'
import Container from '../atoms/Container'
import Text from '../atoms/texts/Text'

const Footer = () => {
  const { t, ready } = useTranslate()

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
          xd
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
