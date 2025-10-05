import useTranslate from '../../../hooks/useTranslate'

import classNames from 'classnames'
import GoToFile from '../../atoms/icons/GoToFile'

import Heading from '../../atoms/texts/Heading'
import Text from '../../atoms/texts/Text'
import Button from '../../atoms/Button'
import Container from '../../atoms/Container'

import GadminLegacy from '../../../assets/images/projects/gadmin-legacy.webp'
import GadminWebs from '../../../assets/images/projects/gadmin-webs.webp'
import FileExt from '../../../assets/images/projects/file-ext.webp'
import AdventBanner from '../../../assets/images/projects/adventjs.webp'
import NarubyondProject from '../../../assets/images/projects/narubyond.webp'
import NgnProject from '../../../assets/images/projects/ngn.webp'
import CorreFution from '../../../assets/images/projects/correfution.webp'
import PaypalCalculator from '../../../assets/images/projects/paypal-calculator.webp'
import BokadosPreview from '../../../assets/images/projects/bokados-preview.webp'
import ImprovedWebsite from '../../../assets/images/projects/improved-website.webp'
import ImprovedAppWebsite from '../../../assets/images/projects/improved-app-website.webp'

import Kunzapp from '../../../assets/images/brands/kunzapp.webp'
import SmartCompliance from '../../../assets/images/brands/smartcompliance.webp'
import GadminLogo from '../../../assets/images/brands/gadmin.png'

import Image from 'next/image'

const IMAGE_WIDTH = 1200
const IMAGE_HEIGHT = 628

// Colores a usar para todos los proyectos (del id 1)
const COMMON_TITLE_COLOR = 'var(--dark)'
const COMMON_TEXT_COLOR = 'var(--dark-lighter)'

const ProjectsSection = () => {
  const { t } = useTranslate()

  const projects = [
    {
      title: 'Gadmin',
      year: '2025',
      description: t('projects--gadmin-content'),
      image: GadminWebs,
      backgroundColor: 'transparent',
      technologies: ['JavaScript (TS)', 'React', 'NodeJS & PostgreSQL'],
      link: 'https://gadmin.app'
    },
    {
      title: 'Gadmin Legacy',
      year: '2022',
      description: `${t('projects--gadmin-legacy-content-1')}<br /><br />${t('projects--gadmin-legacy-content-2')}`,
      image: GadminLegacy,
      backgroundColor: '#0d1117',
      technologies: ['JavaScript (TS)', 'React', 'NodeJS & PostgreSQL'],
      link: 'https://app.gadmin.app'
    },
    {
      title: 'File Ext',
      year: '2022',
      description: `${t('projects--file-content-1')}<br /><br />${t('projects--file-content-2')}`,
      image: FileExt,
      backgroundColor: '#0d1117',
      technologies: ['JavaScript (TS)'],
      link: 'https://www.npmjs.com/package/@jo-sword/file-ext'
    },
    {
      title: 'AdventJS 2022',
      year: '2022',
      description: `${t('projects--adventjs-1')}<br /><br />${t('projects--adventjs-2')}`,
      image: AdventBanner,
      backgroundColor: '#141211',
      technologies: ['JavaScript'],
      link: 'https://github.com/OrlandoBricenoB/adventjs-2022'
    },
    {
      title: 'Improved App',
      year: '2022',
      description: `${t('projects--improved-website-app-1')}<br /><br />${t('projects--improved-website-app-2')}`,
      image: ImprovedAppWebsite,
      backgroundColor: '#141211',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React (Native)'],
      link: 'https://orlandobricenob.github.io/improved-website/'
    },
    {
      title: t('projects--bokados-title'),
      year: '2021',
      description: `${t('projects--bokados-1')}<br /><br />${t('projects--bokados-2')}`,
      image: BokadosPreview,
      backgroundColor: '#141211',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: null
    },
    {
      title: 'Improved Web',
      year: '2020',
      description: `${t('projects--improved-website-1')}<br /><br />${t('projects--improved-website-2')}`,
      image: ImprovedWebsite,
      backgroundColor: '#141211',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://orlandobricenob.github.io/improved-website/'
    },
    {
      title: t('projects--calculadora-title'),
      year: '2020',
      description: `${t('projects--calculadora-1')}<br /><br />${t('projects--calculadora-2')}`,
      image: PaypalCalculator,
      backgroundColor: '#141211',
      technologies: ['JavaScript'],
      link: 'https://github.com/OrlandoBricenoB/calculadora-paypal'
    },
    {
      title: 'Corre Fution',
      year: '2019',
      description: `${t('projects--correfution-1')}<br /><br />${t('projects--correfution-2')}`,
      image: CorreFution,
      backgroundColor: '#141211',
      technologies: ['JavaScript (Phaser JS)'],
      link: 'https://jo-sword.itch.io/corre-fution'
    },
    {
      title: 'Naruto Guerra Ninja',
      year: '2013',
      description: `${t('projects--ngn-1')}<br /><br />${t('projects--ngn-2')}`,
      image: NgnProject,
      backgroundColor: '#141211',
      technologies: ['Dream Maker (C Based)'],
      link: 'https://www.byond.com/games/RedFill/NarutoGuerraNinja'
    },
    {
      title: 'NaruByond',
      year: '2013',
      description: `${t('projects--narubyond-1')}<br /><br />${t('projects--narubyond-2')}`,
      image: NarubyondProject,
      backgroundColor: '#141211',
      technologies: ['Dream Maker (C Based)'],
      link: 'https://www.byond.com/games/RedFill/NaruByond'
    }
  ]

  return (
    <div className={classNames('projects')} id='projects'>
      <div className={classNames('wrapper')}>
        <Text type='big_paragraph'>{
          '| ' + t('common--projects') + ' |'
        }</Text>
        <div className="projects__header">
          <Heading
            type='h1'
            color={COMMON_TITLE_COLOR}
            className="projects__heading"
          >
            {t('common--projects-title')}
          </Heading>
          <Heading type="h1" color={COMMON_TEXT_COLOR} className="projects__year">
            2013-{new Date().getFullYear()}
          </Heading>
        </div>
        <div className={classNames('projects__content')}>
          {/* Projects */}
          <div className={classNames('projects__list')}>
            {projects.map((project, index) => {
              const isRight = index % 2 === 1 // Alternar: 0=izquierda, 1=derecha, 2=izquierda, etc.
              const itemClasses = classNames(
                'projects__item',
                'projects__item--big',
                isRight ? 'projects__item--right' : 'projects__item--left'
              )

              return (
                <Container key={project.title} className={itemClasses}>
                  <div className="projects__image-wrapper">
                    <div
                      className="projects__image-aspect"
                      style={{
                        backgroundColor: project.backgroundColor,
                      }}
                    >
                      <Image
                        src={project.image.src}
                        width={IMAGE_WIDTH}
                        height={IMAGE_HEIGHT}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        alt={`Portada de ${project.title}`}
                      />
                    </div>
                  </div>
                  <div className={classNames('projects__content-wrapper', 'projects__item_content')}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                      {/* Project Information */}
                      <Heading 
                        type='h3'
                        color={COMMON_TITLE_COLOR}
                        style={{ margin: 0 }}
                      >
                        {project.title} ({project.year})
                      </Heading>
                      <Text 
                        type='big_paragraph'
                        style={{ color: COMMON_TEXT_COLOR, margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: project.description }}
                      />
                      {/* Technologies List */}
                      <ul style={{ margin: '0.5rem 0', paddingLeft: '1rem' }}>
                        {project.technologies.map((tech, techIndex) => (
                          <li key={techIndex} style={{ color: COMMON_TEXT_COLOR, margin: '0.25rem 0' }}>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Take a look - CTA */}
                    {project.link && (
                      <Button
                        type='primary'
                        Icon={<GoToFile color='#070a2b' />}
                        style={{ width: 'fit-content' }}
                        componentElement='a'
                        href={project.link}
                        target='_blank'
                      >
                        {t('projects--item-cta')}
                      </Button>
                    )}
                  </div>
                </Container>
              )
            })}
          </div>
        </div>
        <div className={classNames('projects__businesses')}>
          <div className={classNames('about_certification')}>
            <div className={classNames('about_certification__content')} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0rem',
              padding: '1.25rem 1rem'
            }}>
              <a
                href="https://www.kunzapp.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '.5rem' }}
              >
                <Image src={Kunzapp} alt='Kunzapp' width={48} height={48} style={{ borderRadius: '.25rem' }} />
                <Text title='Kunzapp' type='big_paragraph' style={{ margin: 0, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  Kunzapp
                </Text>
              </a>
              <Text type='small' style={{ fontWeight: 500, marginBottom: '.25rem' }}>
                🇨🇱 Chile & 🇲🇽 México - 02/2023 - 05/2023
              </Text>
              <Text type='paragraph' style={{ margin: 0, color: 'var(--dark-lighter)' }}>
                Una corta pero rica experiencia ayudando a Kunzapp en sus primeros pasos en el lanzamiento de su MVP y presentaciones en el Demo Day de Platanus Ventures, con quienes levantaron USD $150,000 de capital.
                <br /><br />
                Junto al equipo construí la mejor herramienta que consigue ahorros, visibilidad y control de todos los SaaS de tu organización.
              </Text>
            </div>
          </div>
          <div className={classNames('about_certification')}>
            <div className={classNames('about_certification__content')} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '.25rem',
              padding: '1.25rem 1rem'
            }}>
              <a
                href="https://smartcompliance.cl"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '.5rem' }}
              >
                <Image src={SmartCompliance} alt='Smart Compliance' width={48} height={48} style={{ borderRadius: '.25rem' }} />
                <Text title='Smart Compliance' type='big_paragraph' style={{ margin: 0, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  Smart Compliance
                </Text>
              </a>
              <Text type='small' style={{ fontWeight: 500, marginBottom: '.25rem' }}>
                🇨🇱 Chile - 11/2023 - {t('common--actuality-word')}
              </Text>
              <Text type='paragraph' style={{ margin: 0, color: 'var(--dark-lighter)' }}>
                Un pequeño equipo y yo convertimos un backend construido sobre arquitectura monolítica a arquitectura de microservicios utilizando Lambdas de AWS, aumentando el rendimiento, escalabilidad y eficiencia de los servidores, y, reduciendo los costes de infraestructura en más de un 60%.
              </Text>
            </div>
          </div>
          <div className={classNames('about_certification')}>
            <div className={classNames('about_certification__content')} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '.25rem',
              padding: '1.25rem 1rem'
            }}>
              <a
                href="https://gadmin.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '.5rem' }}
              >
                <Image src={GadminLogo} alt='Gadmin' width={48} height={48} style={{ backgroundColor: '#16142D', padding: '.25rem', borderRadius: '.25rem' }} />
                <Text title='Gadmin' type='big_paragraph' style={{ margin: 0, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  Gadmin
                </Text>
              </a>
              <Text type='small' style={{ fontWeight: 500, marginBottom: '.25rem' }}>
                🇻🇪 Venezuela & 🇨🇱 Chile - 2023 - {t('common--actuality-word')}
              </Text>
              <Text type='paragraph' style={{ margin: 0, color: 'var(--dark-lighter)' }}>
                Aquí estoy siendo feliz cambiando la vida de muchos.
                <br /><br />
                Crea tu página web, blog o tienda online en instantes sin conocimiento técnico, deja que la IA te ayude a crear el negocio que sueñas. 😉
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection