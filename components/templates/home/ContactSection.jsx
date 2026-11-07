import Image from 'next/image'

import Button from '../../atoms/Button'
import Heading from '../../atoms/texts/Heading'
import Text from '../../atoms/texts/Text'
import Note from '../../atoms/ui/Note'
import Email from '../../atoms/icons/Email'
import Linkedin from '../../atoms/icons/Linkedin'
import Instagram from '../../atoms/icons/Instagram'
import ContactProfile from '../../../assets/images/contact-me.webp'
import useTranslate from '../../../hooks/useTranslate'

const ContactSection = () => {
  const { t } = useTranslate()

  return (
    <section className='contact' id='contact'>
      <div className='wrapper contact__grid'>
        <div className='contact__information' data-reveal='up'>
          <Note>{t('contact--title')}</Note>
          <Heading type='h2' style={{ margin: 0 }}>Orlando Briceño</Heading>
          <Text type='big_paragraph' style={{ margin: '0.5rem 0 0', color: 'var(--blue-300)', fontWeight: 600 }}>
            {t('common--role')}
          </Text>
          <Text type='paragraph' style={{ margin: '1.5rem 0', opacity: 0.85 }}>
            {t('contact--content-1')}
            <br /><br />
            {t('contact--content-2')}
          </Text>

          <div className='contact__socials'>
            <a
              href='https://linkedin.com/in/orlandobricenob'
              target='_blank'
              rel='noreferrer'
              className='contact__social_button'
              aria-label='Visitar Perfil de LinkedIn de Orlando Briceno'
            >
              <Linkedin color='#ffffff' size='20' />
            </a>
            <a
              href='https://instagram.com/orlandobricenob'
              target='_blank'
              rel='noreferrer'
              className='contact__social_button'
              aria-label='Visitar Perfil de Instagram de Orlando Briceno'
            >
              <Instagram color='#ffffff' size='20' />
            </a>
            <a
              href='mailto:orlando@gadmin.app'
              target='_blank'
              rel='noreferrer'
              className='contact__social_button'
              aria-label='Enviar email a Orlando Briceno'
            >
              <Email color='#ffffff' size='20' />
            </a>
          </div>

          <Button
            type='primary'
            Icon={<Email size='24' color='#ffffff' />}
            componentElement='a'
            href='mailto:orlando@gadmin.app'
            data-sln-event='user: send email'
          >
            {t('common--cta-email')}
          </Button>
          <p className='contact__mail'>
            <a href='mailto:orlando@gadmin.app'>orlando@gadmin.app</a>
          </p>
        </div>

        <div className='contact__visual' data-reveal='right'>
          <Image
            src={ContactProfile}
            alt='Orlando Briceño'
            width={ContactProfile.width}
            height={ContactProfile.height}
            className='contact__photo'
          />
          <div className='contact__visual_fade' aria-hidden='true' />
          <div className='contact__visual_chips'>
            <span className='contact__chip contact__chip--blue'>Gadmin founder</span>
          </div>
        </div>      </div>
    </section>
  )
}

export default ContactSection
