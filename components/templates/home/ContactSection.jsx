import classNames from 'classnames'

import Button from '../../atoms/Button'
import Heading from '../../atoms/texts/Heading'
import Text from '../../atoms/texts/Text'

import Email from '../../atoms/icons/Email'

import ContactProfile from '../../../assets/images/contact-profile.png'
import Linkedin from '../../atoms/icons/Linkedin'
import Twitter from '../../atoms/icons/Twitter'
import ImageGradient from '../../atoms/ImageGradient'

const ContactSection = () => {
  return (
    <div className={classNames('contact', 'section')}>
      <Heading type='h2' style={{ textAlign: 'center', marginBottom: '2rem' }}>Hablemos</Heading>
      <div className={classNames('contact_content')}>
        {/* Contact */}
        <div className={classNames('contact__information')}>
          <figure style={{ margin: 0, position: 'relative' }}>
            <img src={ContactProfile.src} style={{ width: '100%' }} />
            <ImageGradient />
          </figure>
          <div className={classNames('contact__information_text')}>
            <Heading type='h3' style={{ margin: 0, marginBottom: '4px' }}>Orlando Jose Briceño Blanco</Heading>
            <Text type='big_paragraph' style={{ margin: 0 }}>Full Stack Developer NodeJS & React</Text>
            <Text type='paragraph' style={{ margin: '1.5rem 0' }}>
              Espero haber logrado captar tu atención y ser de agrado para tus ojos. Sinceramente me encantaría que podamos trabajar juntos en tu nuevo proyecto.
              <br /><br />
              Si realmente te ha gustado mi trabajo y perfil como desarrollador, te pido, por favor que me des tu recomendación honesta para poder seguir creciendo y sustentar mi hogar, mi esposa y mi familia; con tu apoyo me ayudarías mucho más de lo que te imaginas.
            </Text>
            {/* Social Buttons */}
            <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
              <a href='https://linkedin.com/in/orlandobricenob' target='_blank' className={classNames('contact__social_button')}>
                <Linkedin color='#21c2e1' size='32' />
              </a>
              <a href='https://twitter.com/orlandobricenob' target='_blank' className={classNames('contact__social_button')}>
                <Twitter color='#21c2e1' size='32' />
              </a>
            </div>
            <Button
              Icon={<Email color='#070a2b' />}
              keepCase
              componentElement='a'
              href='mailto://orlando.briceno.blanco@gmail.com'
              style={{ width: 'fit-content' }}
            >Enviar email</Button>
          </div>
        </div>
        {/* Recommendations */}
        <div>Bottom</div>
      </div>
    </div>
  )
}

export default ContactSection
