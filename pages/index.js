import Heading from '../components/atoms/texts/Heading'
import Text from '../components/atoms/texts/Text'

export default function Home() {
  return (
    <div>
      <Heading type='h1'>Título 1</Heading>
      <Heading type='h2'>Título 2</Heading>
      <Heading type='h3'>Título 3</Heading>
      <Text type='big_paragraph'>Un subtítulo o párrafo grande</Text>
      <Text type='paragraph'>Test de párrafo</Text>
      <Text type='small_paragraph'>Small</Text>
      <Text type='button'>Button</Text>
    </div>
  )
}