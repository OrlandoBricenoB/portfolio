import classNames from 'classnames'
import Container from '../atoms/Container'
import Text from '../atoms/texts/Text'

const Footer = () => {
  return (
    <footer className={classNames('footer')}>
      <div className={classNames('footer__content')}>
        <div className={classNames('footer__description')}>
          <Text type='big_paragraph'>Un poco más de mí, ya que no todos leen esto</Text>
          <Text type='paragraph'>
            Cuando no estoy creando contenido para Develandia o compartiendo tiempo con mi esposa, estoy creando cosas increíbles junto a mis compañeros.
            <br /><br />
            Mi mayor fortaleza y debilidad al mismo tiempo es mi honestidad, la siguiente que la acompaña es mi pasión por hacer las cosas ordenadamente.
          </Text>
        </div>
        <Container className={classNames('footer__brands')}>
          xd
        </Container>
      </div>
      <div className={classNames('footer__credits')}>
        <Text type='big_paragraph' style={{ margin: 0 }}>Hecho con 💙 por mí</Text>
      </div>
    </footer>
  )
}

export default Footer
