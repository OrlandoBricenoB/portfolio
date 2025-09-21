import classNames from 'classnames'
import Button from '../../atoms/Button'
import Heading from '../../atoms/texts/Heading'
import Text from '../../atoms/texts/Text'
import Email from '../../atoms/icons/Email'
import ContactProfile from '../../../assets/images/contact-me.webp'
import Linkedin from '../../atoms/icons/Linkedin'
import useTranslate from '../../../hooks/useTranslate'
import Instagram from '../../atoms/icons/Instagram'
import WhatsApp from '../../atoms/icons/WhatsApp'

const ContactSection = () => {
  const { t } = useTranslate()

  return (
    <div 
      className={classNames('contact')} 
      id='contact'
      style={{
        backgroundImage: `url(${ContactProfile.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <div className="wrapper">
        <Text type='big_paragraph' style={{ color: 'var(--white)' }}>{
          '| ' + t('contact--title') + ' |'
        }</Text>
        <div className={classNames('contact_content')}>
          {/* Contenido de texto a la derecha */}
          <div className={classNames('contact__information')}>
            <div className={classNames('contact__information_text')}>
              <Heading type='h3' color={'var(--dark)'} style={{ margin: 0, marginBottom: '4px' }}>Orlando Jose Briceño Blanco</Heading>
              <Text type='big_paragraph' style={{ margin: 0 }}>{t('common--role')}</Text>
              <Text type='paragraph' style={{ margin: '1.5rem 0' }}>
                {t('contact--content-1')}
                <br /><br />
                {t('contact--content-2')}
              </Text>
              {/* Social Buttons */}
              <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                <a
                  href='https://linkedin.com/in/orlandobricenob'
                  target='_blank'
                  className={classNames('contact__social_button')}
                  aria-label='Visitar Perfil de LinkedIn de Orlando Briceno'
                >
                  <Linkedin color='#21c2e1' size='32' />
                </a>
                <a
                  href='https://instagram.com/orlandobricenob'
                  target='_blank'
                  className={classNames('contact__social_button')}
                  aria-label='Visitar Perfil de Instagram de Orlando Briceno'
                >
                  <Instagram color='#21c2e1' size='32' />
                </a>
                <a
                  href='mailto:orlando@gadmin.app'
                  target='_blank'
                  className={classNames('contact__social_button')}
                  aria-label='Enviar email a Orlando Briceno'
                >
                  <Email color='#21c2e1' size='32' />
                </a>
              </div>
              <Button
                type='primary'
                Icon={<WhatsApp size='32' color='#070a2b' />}
                componentElement='a'
                href='https://wa.me/584121689393?text=Hey%2C%20Orlando.%20Tengo%20una%20idea%20s%C3%BAper%20potente%20y%20quiero%20compartirla%20contigo.'
                target='_blank'
                data-sln-event="user: send whatsapp"
              >
                {t('common--cta-whatsapp')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
