import classNames from 'classnames'

import Heading from '../../atoms/texts/Heading'

const ContactSection = () => {
  return (
    <div className={classNames('projects')}>
      <Heading type='h2' style={{ textAlign: 'center' }}>Hablemos</Heading>
      <div className={classNames('projects__content')}>
        {/* Information Aside */}
        <div>Left</div>
        {/* Projects */}
        <div>Right</div>
      </div>
    </div>
  )
}

export default ContactSection
