import Heading from '../texts/Heading'
import Note from './Note'

const SectionHeader = ({ note, title, intro, arrow = '↓', color, level = 'h2' }) => (
  <header style={{ maxWidth: '46rem' }}>
    {note && <div data-reveal='up'><Note arrow={arrow}>{note}</Note></div>}
    <Heading type={level} color={color} data-reveal='up'>{title}</Heading>
    {intro && <p className='section__intro' data-reveal='up'>{intro}</p>}
  </header>
)

export default SectionHeader
