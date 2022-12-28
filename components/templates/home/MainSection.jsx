/*
  * i18n
*/
import { useTranslation } from 'next-i18next'

/*
  * COMPONENTS
*/
import Button from '../../atoms/Button'
import Container from '../../atoms/Container'
import Link from '../../atoms/links/Link'
import Heading from '../../atoms/texts/Heading'
import Text from '../../atoms/texts/Text'

import Multirating from '../../molecules/rating/Multirating'
import SocialButton from '../../molecules/socials/SocialButton'

/*
  * ICONS
*/
import Linkedin from '../../atoms/icons/Linkedin'
import Twitter from '../../atoms/icons/Twitter'
import Github from '../../atoms/icons/Github'
import StackOverflow from '../../atoms/icons/StackOverflow'
import CloudDownload from '../../atoms/icons/CloudDownload'
import Clock from '../../atoms/icons/Clock'
import Email from '../../atoms/icons/Email'
import Codepen from '../../atoms/icons/Codepen'

/*
  * IMAGES
*/
import profilePresentation from '../../../assets/images/profile-presentation.jpg'

/*
  * STYLES
*/
import styles from '../../../styles/pages/home/home.module.css'

const MainSection = () => {
  const { t } = useTranslation('common')

  return (
    <div className={styles.home_container} id='presentation'>
      {/* Social Buttons */}
      <aside className={styles.social_buttons}>
        <SocialButton Icon={Linkedin} to='https://linkedin.com/in/orlandobricenob'>
          <Text type='small_paragraph' style={{ textAlign: 'center' }}>LinkedIn</Text>
        </SocialButton>
        <SocialButton Icon={Twitter} to='https://twitter.com/orlandobricenob'>
          <Text type='small_paragraph' style={{ textAlign: 'center' }}>Twitter</Text>
        </SocialButton>
        <SocialButton Icon={Github} to='https://github.com/OrlandoBricenoB'>
          <Text type='small_paragraph' style={{ textAlign: 'center' }}>Github</Text>
        </SocialButton>
        <SocialButton Icon={Codepen} to='https://codepen.io/orlandobricenob'>
          <Text type='small_paragraph' style={{ textAlign: 'center' }}>Codepen</Text>
        </SocialButton>
        <SocialButton Icon={StackOverflow} to='https://stackoverflow.com/users/20795121/orlando-jose-brice%C3%B1o-blanco'>
          <Text type='small_paragraph' style={{ textAlign: 'center' }}>
            Stack<br />Overflow
          </Text>
        </SocialButton>
      </aside>
      {/* Content */}
      <div className={styles.home__content}>
        {/* Title */}
        <div>
          <Heading type='h1' className={styles.home__title}>{t('h1')}</Heading>
          <Text type='big_paragraph' className={styles.home__title}>NodeJS, React, SQL & NoSQL</Text>
          <div className={styles.home__rating}>
            <Multirating filled={5} hoverLess />
            <Link
              style={{ cursor: 'pointer' }}
              onClick={() => { alert('Open modal of recommendations') }}
            >900 recomendaciones</Link>
          </div>
        </div>

        {/* Image Mobile */}
        <figure className={`${styles.profile_presentation} ${styles['profile_presentation--mobile']}`}>
          <img src={profilePresentation.src} className={styles.profile_presentation__image} />
          <figcaption className={styles.profile_presentation__caption}>
            Orlando Jose Briceño Blanco<br />🇻🇪 Venezuela
          </figcaption>
        </figure>

        {/* Bio */}
        <Text type='paragraph'>
          Hi! I'm Orlando. 👋🏼<br /><br />
          Paso la vida disfrutando desarrollar soluciones automatizadas para todo tipo de problemas.<br /><br />
          A mis 16 años de edad pasé de amar la programación a también vivir de ella, convirtiéndome en un profesional Full Stack capaz de desarrollar todo tipo de aplicaciones sobre sólidos patrones de arquitectura. Y es por esto y más que amo estudiar autodidactamente y me esfuerzo en crecer cada día adaptándome a las nuevas tecnologías.
        </Text>

        {/* Presentation Video */}
        <Container className={styles.home__presentation}>
          <div style={{ display: 'flex', borderRadius: '4px 0 0 4px' }}>
            <img src={profilePresentation.src} style={{
              width: '100%',
              aspectRatio: '16 / 9',
              borderRadius: '4px 0 0 4px',
              objectFit: 'cover'
            }} />
          </div>
          <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Text type='big_paragraph' style={{ margin: 0, marginBottom: '.5rem' }}>
              Presentación: Quién soy y qué hago
            </Text>
            <Text type='paragraph' style={{
              color: '#8E92C2',
              display: 'flex',
              alignItems: 'center',
              gap: '.35rem',
              margin: '0'
            }}>
              <Clock color='#8E92C2' /> 00:30
            </Text>
          </div>
        </Container>

        {/* CTA */}
        <div className={styles.home__cta}>
          <Button
            type='outlined'
            Icon={<CloudDownload color='#21c2e1' />}
            componentElement='a'
            href='https://drive.google.com/drive/folders/1bsw5DEICWihZpYH6XEXqm0TMuabJxmuy?usp=sharing'
            target='_blank'
          >Descargar CV</Button>
          <Button
            Icon={<Email color='#21c2e1' />}
            type='ghost'
            componentElement='a'
            href='mailto:orlando.briceno.blanco@gmail.com'
            style={{ width: 'fit-content' }}
            keepCase
          >Enviar email</Button>
        </div>
      </div>
      {/* Image */}
      <figure className={styles.profile_presentation}>
        <img src={profilePresentation.src} className={styles.profile_presentation__image} />
        <figcaption className={styles.profile_presentation__caption}>
          Orlando Jose Briceño Blanco<br />
          🇻🇪 Venezuela
        </figcaption>
      </figure>
    </div>
  )
}

export default MainSection
