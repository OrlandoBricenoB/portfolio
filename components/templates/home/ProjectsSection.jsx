import { useState } from 'react'
import useTranslate from '../../../hooks/useTranslate'

import classNames from 'classnames'
import GoToFile from '../../atoms/icons/GoToFile'

import Heading from '../../atoms/texts/Heading'
import Text from '../../atoms/texts/Text'
import Button from '../../atoms/Button'
import Note from '../../atoms/ui/Note'
import Sticker from '../../atoms/ui/Sticker'

import GadminLegacy from '../../../assets/images/projects/gadmin-legacy.webp'
import ContyEn from '../../../assets/images/projects/gadminconty-english.webp'
import ContyEs from '../../../assets/images/projects/gadminconty-spanish.webp'
import SellEn from '../../../assets/images/projects/gadminsell-english.webp'
import SellEs from '../../../assets/images/projects/gadminsell-spanish.webp'
import GadminGvp from '../../../assets/images/projects/gadmin-gvp.webp'
import FileExt from '../../../assets/images/projects/file-ext.webp'
import AdventBanner from '../../../assets/images/projects/adventjs.webp'
import NarubyondProject from '../../../assets/images/projects/narubyond.webp'
import NgnProject from '../../../assets/images/projects/ngn.webp'
import CorreFution from '../../../assets/images/projects/correfution.webp'
import PaypalCalculator from '../../../assets/images/projects/paypal-calculator.webp'
import BokadosPreview from '../../../assets/images/projects/bokados-preview.webp'
import ImprovedWebsite from '../../../assets/images/projects/improved-website.webp'
import ImprovedAppWebsite from '../../../assets/images/projects/improved-app-website.webp'
import SorteosMdB from '../../../assets/images/projects/sorteosmdb.webp'

import Kunzapp from '../../../assets/images/brands/kunzapp.webp'
import SmartCompliance from '../../../assets/images/brands/smartcompliance.webp'
import GadminLogo from '../../../assets/images/brands/gadmin.png'
import WekanLogo from '../../../assets/images/brands/wekanenterprisesolutions.webp'

import Image from 'next/image'

const IMAGE_WIDTH = 1200
const IMAGE_HEIGHT = 628

// Colores a usar para todos los proyectos (del id 1)
const COMMON_TITLE_COLOR = 'var(--ink)'
const COMMON_TEXT_COLOR = 'var(--dark-lighter)'

// The first projects are the most relevant for companies; the rest tell the origin story.
const FEATURED_COUNT = 4

const ProjectsSection = () => {
  const { t, i18n } = useTranslate()
  const isEs = (i18n.language || '').startsWith('es')
  const [showAll, setShowAll] = useState(false)

  const projects = [
    {
      title: 'Gadmin Conty',
      year: '2026',
      description: t('projects--gadmin-conty-content'),
      image: isEs ? ContyEs : ContyEn,
      backgroundColor: 'transparent',
      technologies: [t('projects--tag-financial-analysis'), t('projects--tag-strategy'), t('projects--tag-reports')],
      link: 'https://gadminconty.com/'
    },
    {
      title: 'Gadmin Sell',
      year: '2026',
      description: t('projects--gadmin-sell-content'),
      image: isEs ? SellEs : SellEn,
      backgroundColor: 'transparent',
      technologies: ['WhatsApp', t('projects--tag-ai'), t('projects--tag-sales')],
      link: 'https://gadminsell.com/'
    },
    {
      title: 'Gadmin GVP',
      year: '2026',
      description: t('projects--gadmin-gvp-content'),
      image: GadminGvp,
      backgroundColor: '#0d1117',
      technologies: ['React', 'NodeJS & PostgreSQL', t('projects--tag-reports')],
      link: 'https://gvpve.org/'
    },
    {
      title: 'Sorteos Md\'B',
      year: '2025',
      description: `${t('projects--sorteos-mdb-content-1')}<br /><br />${t('projects--sorteos-mdb-content-2')}`,
      image: SorteosMdB,
      backgroundColor: '#0d1117',
      technologies: ['Astro', 'Tailwind CSS', 'Cloudflare', 'JavaScript'],
      link: 'https://sorteosmdb.com/?r=QAZ815U3'
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

  const featured = projects.slice(0, FEATURED_COUNT)
  const older = projects.slice(FEATURED_COUNT)

  const renderTech = project => (
    <ul className='projects__tech'>
      {project.technologies.map(tech => <li key={tech}>{tech}</li>)}
    </ul>
  )

  const businesses = [
    {
      id: 'kunzapp',
      href: 'https://www.kunzapp.com',
      name: 'Kunzapp',
      logo: <Image src={Kunzapp} alt='Kunzapp' width={52} height={52} />,
      meta: '🇨🇱 & 🇲🇽 - 02/2023 - 05/2023',
      body: [t('business--kunzapp-content-1'), t('business--kunzapp-content-2')],
      tilt: -0.8
    },
    {
      id: 'smartcompliance',
      href: 'https://smartcompliance.cl',
      name: 'Smart Compliance',
      logo: <Image src={SmartCompliance} alt='Smart Compliance' width={52} height={52} />,
      meta: '🇨🇱 - 11/2023 - 06/2026',
      body: [t('business--smartcompliance-content-1'), t('business--smartcompliance-content-2')],
      tilt: 0.6
    },
    {
      id: 'gadmin',
      href: 'https://gadmin.app',
      name: 'Gadmin',
      logo: <Image src={GadminLogo} alt='Gadmin' width={52} height={52} className='projects__logo--dark' />,
      meta: `🇻🇪 & 🇨🇱 - 2023 - ${t('common--actuality-word')}`,
      body: [t('business--gadmin-content-1'), t('business--gadmin-content-2')],
      tilt: -0.5
    },
    {
      id: 'wekan',
      href: 'https://www.wekan.ai',
      name: 'WeKan',
      logo: <Image src={WekanLogo} alt='WeKan' width={52} height={52} />,
      meta: `🇻🇪 - 09/2026 - ${t('common--actuality-word')}`,
      body: [t('business--wekan-content-1'), t('business--wekan-content-2')],
      tilt: 0.7
    }
  ]

  return (
    <div className='section projects' id='projects'>
      <div className='wrapper'>
        <div className='projects__header'>
          <div style={{ maxWidth: '40rem' }}>
            <div data-reveal='up'><Note>{t('common--projects')}</Note></div>
            <Heading type='h2' color={COMMON_TITLE_COLOR} data-reveal='up'>
              {t('common--projects-title')}
            </Heading>
          </div>
          <span className='sticker sticker--blue projects__years' style={{ '--r': '4deg' }} data-pop>
            2013 – {new Date().getFullYear()}
          </span>
        </div>

        <div className='projects__list'>
          {featured.map((project, index) => {
            const isRight = index % 2 === 1
            return (
              <article
                key={project.title}
                className={classNames('projects__item', isRight && 'projects__item--right')}
                data-reveal={isRight ? 'right' : 'left'}
              >
                <div className='projects__image-wrapper'>
                  <div className='projects__image-aspect' style={{ backgroundColor: project.backgroundColor }}>
                    <Image
                      src={project.image.src}
                      width={IMAGE_WIDTH}
                      height={IMAGE_HEIGHT}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      alt={`Portada de ${project.title}`}
                    />
                  </div>
                  <Sticker abs variant='ink' rotate={-6} style={{ top: -12, left: -8 }}>{project.year}</Sticker>
                </div>
                <div className='projects__item_content'>
                  <Heading type='h3' color={COMMON_TITLE_COLOR} style={{ margin: 0, fontSize: 26 }}>
                    {project.title}
                  </Heading>
                  <Text
                    type='big_paragraph'
                    style={{ color: COMMON_TEXT_COLOR, margin: 0, fontSize: '1rem' }}
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                  {renderTech(project)}
                  {project.link && (
                    <a className='pill-link' href={project.link} target='_blank' rel='noreferrer' style={{ width: 'fit-content' }}>
                      <GoToFile color='#ffffff' />
                      {t('projects--item-cta')}
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        {showAll && (
          <div className='projects__grid'>
            {older.map(project => (
              <article key={project.title} className='projects__card' data-reveal='up'>
                <div className='projects__card-image' style={{ backgroundColor: project.backgroundColor }}>
                  <Image
                    src={project.image.src}
                    width={IMAGE_WIDTH}
                    height={IMAGE_HEIGHT}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    alt={`Portada de ${project.title}`}
                  />
                  <span className='sticker sticker--ink' style={{ '--r': '-5deg', position: 'absolute', top: 10, left: 10, fontSize: 13 }}>
                    {project.year}
                  </span>
                </div>
                <Heading type='h3' color={COMMON_TITLE_COLOR} style={{ margin: '0.9rem 0 0.4rem' }}>
                  {project.title}
                </Heading>
                <Text
                  type='paragraph'
                  className='projects__card-text'
                  style={{ color: COMMON_TEXT_COLOR, margin: 0, fontSize: '0.92rem' }}
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
                {renderTech(project)}
                {project.link && (
                  <a className='text-link' href={project.link} target='_blank' rel='noreferrer'>
                    {t('projects--item-cta')} →
                  </a>
                )}
              </article>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
          <Button
            type='outlined'
            onClick={() => setShowAll(value => !value)}
            aria-expanded={showAll}
          >
            {showAll ? t('projects--show-less') : t('projects--show-more')}
          </Button>
        </div>

        <div className='projects__businesses' data-reveal-stagger>
          {businesses.map(biz => (
            <article
              key={biz.id}
              className='projects__business'
              style={{ '--r': `${biz.tilt}deg` }}
              data-reveal='up'
            >
              <a href={biz.href} target='_blank' rel='noopener noreferrer' className='projects__business-head'>
                {biz.logo}
                <Text title={biz.name} type='big_paragraph' style={{ margin: 0, fontWeight: 800 }}>
                  {biz.name}
                </Text>
              </a>
              <span className='sticker sticker--soft' style={{ '--r': '-1.5deg', fontSize: 12, padding: '6px 11px', whiteSpace: 'normal' }}>
                {biz.meta}
              </span>
              <Text type='paragraph' style={{ margin: 0, fontSize: '0.95rem', opacity: 0.85 }}>
                {biz.body[0]}
                <br /><br />
                {biz.body[1]}
              </Text>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection