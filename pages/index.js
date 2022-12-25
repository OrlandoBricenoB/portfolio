import styles from '../styles/pages/home.module.css'
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
      <div className={styles.home__content} style={{ width: '100%' }}>
        <Heading type='h1' style={{ margin: '0', textAlign: 'center' }}>Desarrollador Full Stack</Heading>
        <Text type='big_paragraph' style={{ margin: '0', textAlign: 'center' }}>NodeJS, React, SQL & NoSQL</Text>
        {/* Image Mobile */}
        <figure className={`${styles.profile_presentation} ${styles['profile_presentation--mobile']}`}>
          <img src={profilePresentation.src} className={styles.profile_presentation__image} />
          <figcaption className={styles.profile_presentation__caption}>
            Orlando Jose Briceño Blanco<br />🇻🇪 Venezuela
          </figcaption>
        </figure>
        <br /><br /><br />
        
        <Heading type='h2'>Título 2</Heading>
        <Heading type='h3'>Título 3</Heading>
        <Text type='paragraph'>Test de párrafo</Text>
        <Text type='small_paragraph'>Small</Text>
        <Text type='button'>Button</Text>
        <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.5rem' }}>
          <Badge>Insignia</Badge>
          <Badge
            Icon={() => <CSS size='16' />}
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
          <br />
          <Button type='ghost'>Ghost</Button>
          <br />
          <Button type='outlined'>Outlined</Button>
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