import Button from '../components/atoms/Button'
import Container from '../components/atoms/Container'
import Link from '../components/atoms/links/Link'
import NavButton from '../components/atoms/links/NavButton'
import Heading from '../components/atoms/texts/Heading'
import Text from '../components/atoms/texts/Text'

import RateStar from '../components/atoms/rating/RateStar'
import Badge from '../components/atoms/Badge'
import SocialButton from '../components/molecules/socials/SocialButton'

import CSS from '../components/atoms/icons/tools/CSS'
import Linkedin from '../components/atoms/icons/Linkedin'
import Twitter from '../components/atoms/icons/Twitter'
import Github from '../components/atoms/icons/Github'
import Codepen from '../components/atoms/icons/Codepen'
import StackOverflow from '../components/atoms/icons/StackOverflow'
import Multirating from '../components/molecules/rating/Multirating'

import profilePresentation from '../assets/images/profile-presentation.jpg'

import CloudDownload from '../components/atoms/icons/CloudDownload'
import Clock from '../components/atoms/icons/Clock'
import Email from '../components/atoms/icons/Email'

import styles from '../styles/pages/home.module.css'

export default function Home() {
  return (
    <div className={styles.home_container}>
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
          <Heading type='h1' className={styles.home__title}>Desarrollador Full Stack</Heading>
          <Text type='big_paragraph' className={styles.home__title}>NodeJS, React, SQL & NoSQL</Text>
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
        <Container style={{
          display: 'flex',
          padding: 0,
          width: '75%',
          height: '192px'
        }}>
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
        <div style={{ display: 'flex', gap: '.5rem' }}>
          <Button type='outlined' Icon={<CloudDownload color='#21c2e1' />}>Descargar CV</Button>
          <Button
            type='ghost'
            Icon={<Email color='#21c2e1' />}
            keepCase
          >Enviar email</Button>
        </div>

        <Heading type='h2'>Título 2</Heading>
        <Heading type='h3'>Título 3</Heading>
        <Text type='paragraph'>Test de párrafo</Text>
        <Text type='small_paragraph'>Small</Text>
        <Text type='button'>Button</Text>
        <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.5rem' }}>
          <Badge>Insignia</Badge>
          <Badge
            Icon={<CSS size='16' />}
          >Insignia</Badge>
        </div>

        <Container>
          <RateStar />
          <Multirating />
          <Heading type='h3' color='#ffffff'>Título 3</Heading>
          <NavButton>Prueba 1</NavButton>
          <Text type='paragraph'>
            Este es un texto, pero puedes dar <Link>click aquí</Link> creo yo.
          </Text>
          <Button keepCase={true}>Contáctame</Button>
        </Container>
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