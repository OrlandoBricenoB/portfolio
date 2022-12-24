import Button from '../components/atoms/Button'
import Container from '../components/atoms/Container'
import Link from '../components/atoms/links/Link'
import NavButton from '../components/atoms/links/NavButton'
import Heading from '../components/atoms/texts/Heading'
import Text from '../components/atoms/texts/Text'

import ContactPage from '../components/atoms/icons/ContactPage'
import RateStar from '../components/atoms/rating/RateStar'

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