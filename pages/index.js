import Button from '../components/atoms/Button'
import Container from '../components/atoms/Container'
import Link from '../components/atoms/links/Link'
import NavButton from '../components/atoms/links/NavButton'
import Heading from '../components/atoms/texts/Heading'
import Text from '../components/atoms/texts/Text'

import ContactPage from '../components/atoms/icons/ContactPage'
import RateStar from '../components/atoms/rating/RateStar'
import Badge from '../components/atoms/Badge'
import SocialButton from '../components/molecules/socials/SocialButton'

import CSS from '../components/atoms/icons/tools/CSS'
import Linkedin from '../components/atoms/icons/Linkedin'
import Twitter from '../components/atoms/icons/Twitter'

export default function Home() {
  return (
    <div style={{ padding: '1rem' }}>
      <Heading type='h1'>Título 1</Heading>
      <Heading type='h2'>Título 2</Heading>
      <Heading type='h3'>Título 3</Heading>
      <Text type='big_paragraph'>Un subtítulo o párrafo grande</Text>
      <Text type='paragraph'>Test de párrafo</Text>
      <Text type='small_paragraph'>Small</Text>
      <Text type='button'>Button</Text>
      <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.5rem' }}>
        <Badge>Insignia</Badge>
        <Badge
          Icon={() => <CSS size='16' />}
        >Insignia</Badge>
      </div>

      <div style={{ width: '100px', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
        <SocialButton Icon={Linkedin} to='https://linkedin.com/in/orlandobricenob'>
          LinkedIn
        </SocialButton>
        <SocialButton Icon={Twitter}>
          Twitter
        </SocialButton>
      </div>

      <Container>
        <RateStar />
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
        <br />
        <Button
          Icon={() => <ContactPage size='24' color='#070a2b' />}
        >Contáctame</Button>
      </Container>
    </div>
  )
}