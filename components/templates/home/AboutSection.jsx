import classNames from 'classnames'

import Heading from '../../atoms/texts/Heading'

const AboutSection = () => {
  return (
    <div className={classNames('projects')}>
      <Heading type='h2' style={{ textAlign: 'center' }}>Acerca de mí</Heading>
      <div className={classNames('projects__content')}>
        {/* Information Aside */}
        <div>Left</div>
        {/* Projects */}
        <div>Right</div>
      </div>
    </div>
  )
}

export default AboutSection
