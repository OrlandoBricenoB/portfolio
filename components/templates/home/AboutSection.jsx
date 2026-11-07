import { useState } from 'react'
import useTranslate from '../../../hooks/useTranslate'

import Heading from '../../atoms/texts/Heading'
import Text from '../../atoms/texts/Text'
import Note from '../../atoms/ui/Note'
import SectionHeader from '../../atoms/ui/SectionHeader'

import oldStarts from '../../../assets/images/stories/old-starts.jpg'
import oldStartsWebp from '../../../assets/images/stories/old-starts.webp'
import oldStartsTwo from '../../../assets/images/stories/old-starts-2.png'
import oldStartsTwoWebp from '../../../assets/images/stories/old-starts-2.webp'
import holdingCarnet from '../../../assets/images/stories/holding-carnet.png'
import holdingCarnetWebp from '../../../assets/images/stories/holding-carnet.webp'
import aboutPortrait from '../../../assets/images/guitar-keyboard.webp'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import Image from 'next/image'

import presentation from '../../../styles/pages/home/presentation.module.css'

const DISCIPLINES = ['dev', 'finance', 'economics', 'sales', 'marketing', 'investments', 'design']

// Importar los iconos

import HTML from '../../atoms/icons/tools/HTML'
import CSS from '../../atoms/icons/tools/CSS'
import TailwindCSS from '../../atoms/icons/tools/TailwindCSS'
import JavaScript from '../../atoms/icons/tools/JavaScript'
import TypeScript from '../../atoms/icons/tools/TypeScript'
import NodeJS from '../../atoms/icons/tools/NodeJS'
import Express from '../../atoms/icons/tools/Express'
import React from '../../atoms/icons/tools/React'
import NextJS from '../../atoms/icons/tools/NextJS'
import PostgreSQL from '../../atoms/icons/tools/PostgreSQL'
import MongoDB from '../../atoms/icons/tools/MongoDB'
import Hono from '../../atoms/icons/tools/Hono'
import Cloudflare from '../../atoms/icons/tools/Cloudflare'
import Lambdas from '../../atoms/icons/tools/Lambdas'
import CloudWatch from '../../atoms/icons/tools/CloudWatch'
import EC2 from '../../atoms/icons/tools/EC2'
import Figma from '../../atoms/icons/tools/Figma'
import AWS from '../../atoms/icons/tools/AWS'
import ChatGPT from '../../atoms/icons/tools/ChatGPT'
import N8N from '../../atoms/icons/tools/N8N'


let timeoutSlide

const AboutSection = () => {
  const { t } = useTranslate()

  const [, setSwiper] = useState(null)
  const autoSlide = (_swiper, clonnedSwiper) => {
    if (!clonnedSwiper || !_swiper) return
    if (clonnedSwiper.isEnd) {
      _swiper.slideTo(0)
    } else {
      _swiper.slideNext()
    }
  }

  const certifications = [
    {
      id: 1,
      name: t('certification--practical-javascript'),
      date: '2022',
      description: t('certification--practical-javascript-desc') || 'JS práctico, fundamentos y ejercicios.'
    },
    {
      id: 2,
      name: t('certification--professional-javascript'),
      date: '2022',
      description: t('certification--professional-javascript-desc') || 'JS avanzado, closures y asincronía.'
    },
    {
      id: 3,
      name: t('certification--nodejs'),
      date: '2022',
      description: t('certification--nodejs-desc') || 'Node.js, módulos y servidores básicos.'
    },
    {
      id: 4,
      name: t('certification--professional-git'),
      date: '2022',
      description: t('certification--professional-git-desc') || 'Git y GitHub, ramas y flujos de trabajo.'
    },
    {
      id: 5,
      name: t('certification--html-css'),
      date: '2022',
      description: t('certification--html-css-desc') || 'HTML5 y CSS3, maquetación web.'
    },
    {
      id: 6,
      name: t('certification--logical-thinking'),
      date: '2022',
      description: t('certification--logical-thinking-desc') || 'Pensamiento lógico y resolución de problemas.'
    },
    {
      id: 7,
      name: t('certification--time-management'),
      date: '2022',
      description: t('certification--time-management-desc') || 'Gestión del tiempo y productividad.'
    },
    {
      id: 8,
      name: t('certification--emotional-intelligence'),
      date: '2022',
      description: t('certification--emotional-intelligence-desc') || 'Inteligencia emocional y autogestión.'
    }
  ]

  const expertises = [
    {
      name: 'HTML',
      icon: HTML
    },
    {
      name: 'CSS',
      icon: CSS
    },
    {
      name: 'JavaScript',
      icon: JavaScript
    },
    {
      name: 'TypeScript',
      icon: TypeScript
    },
    {
      name: 'TailwindCSS',
      icon: TailwindCSS
    },
    {
      name: 'NodeJS',
      icon: NodeJS
    },
    {
      name: 'Hono',
      icon: Hono
    },
    {
      name: 'Express',
      icon: Express
    },
    {
      name: 'React',
      icon: React
    },
    {
      name: 'NextJS',
      icon: NextJS
    },
    {
      name: 'PostgreSQL',
      icon: PostgreSQL
    },
    {
      name: 'MongoDB',
      icon: MongoDB
    },
    {
      name: 'Cloudflare',
      icon: Cloudflare
    },
    {
      name: 'AWS',
      icon: AWS
    },
    {
      name: 'Lambdas (Amazon Web Services)',
      icon: Lambdas
    },
    {
      name: 'CloudWatch (Amazon Web Services)',
      icon: CloudWatch
    },
    {
      name: 'EC2 (Amazon Web Services)',
      icon: EC2
    },
    {
      name: 'Figma',
      icon: Figma
    },
    {
      name: 'ChatGPT',
      icon: ChatGPT
    },
    {
      name: 'N8N',
      icon: N8N
    },
  ]

  // Chronological "growth timeline": each photo is a commit on the way up
  const photoTiles = [
    {
      key: 'start-two',
      file: 'future.jpg',
      hash: 'a1f03c',
      node: (
        <picture>
          <source srcSet={oldStartsTwoWebp.src} type='image/webp' />
          <img src={oldStartsTwo.src} alt={t('stories--start-two-alt')} width={oldStartsTwo.width} height={oldStartsTwo.height} loading='lazy' />
        </picture>
      )
    },
    {
      key: 'start',
      file: 'new-city.jpg',
      hash: '7be42d',
      node: (
        <picture>
          <source srcSet={oldStartsWebp.src} type='image/webp' />
          <img src={oldStarts.src} alt={t('stories--start-alt')} width={oldStarts.width} height={oldStarts.height} loading='lazy' />
        </picture>
      )
    },
    {
      key: 'portrait',
      file: 'building.jpg',
      hash: '3d9c81',
      node: <Image src={aboutPortrait} alt='Orlando Briceño' width={aboutPortrait.width} height={aboutPortrait.height} />
    },
    {
      key: 'carnet',
      file: 'grown.jpg',
      hash: 'f00d51',
      node: (
        <picture>
          <source srcSet={holdingCarnetWebp.src} type='image/webp' />
          <img src={holdingCarnet.src} alt={t('about--carnet-alt')} width={holdingCarnet.width} height={holdingCarnet.height} loading='lazy' />
        </picture>
      )
    }
  ]

  return (
    <div className='section' id='about'>
      <div className='wrapper'>
        <SectionHeader
          note={t('common--about-me')}
          title={t('about--story-title')}
          level='h1'
        />

        <div className='about__content' data-reveal='up'>
          <div>
            <Heading type='h3'>{t('stories--start-title')}</Heading>
            <Text type='paragraph'>{t('stories--start-body')}</Text>
          </div>
          <Text type='paragraph' style={{ margin: 0 }}>
            {t('about--story-content-1')}
            <br /><br />
            {t('about--story-content-2')}
            <br /><br />
            {t('about--story-content-3')}
          </Text>
        </div>
      </div>

      <div className='wrapper'>
        <div className='about__timeline' data-reveal-stagger>
          {photoTiles.map((tile, index) => (
            <figure key={tile.key} className={'about__win about__win--' + (index + 1)} data-reveal='up'>
              <div className='about__win-bar'>
                <i /><i /><i />
                <span>~/story/{tile.file}</span>
              </div>
              <div className='about__win-photo'>{tile.node}</div>
              <figcaption className='about__win-foot'>
                <code>{tile.hash}</code>
                <b>{t(`about--tl-${index + 1}`)}</b>
                <span className='about__win-step'>{String(index + 1).padStart(2, '0')}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className='wrapper'>
        <div className={presentation.disciplines}>
          <Note>{t('disciplines--title')}</Note>
          <div className={presentation.disciplines_grid} data-reveal-stagger>
            {DISCIPLINES.map((id, index) => (
              <div
                key={id}
                className={presentation.discipline}
                style={{ '--r': `${[-1.5, 1, -0.8, 1.4, -1, 0.8, -1.2][index % 7]}deg` }}
                data-reveal='up'
              >
                <strong>{t(`disciplines--${id}-name`)}</strong>
                <span>{t(`disciplines--${id}-desc`)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certificados */}
        <div
          className='about_certifications'
          data-reveal='up'
          onMouseEnter={() => {
            clearTimeout(timeoutSlide)
          }}
          onMouseLeave={e => {
            const swiperEl = e.currentTarget.querySelector('.swiper')?.swiper
            if (swiperEl) {
              clearTimeout(timeoutSlide)
              timeoutSlide = setTimeout(() => {
                autoSlide(swiperEl, { ...swiperEl })
              }, 5000)
            }
          }}
        >
          <Swiper
            modules={[Pagination, Navigation, Scrollbar]}
            spaceBetween={16}
            slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }
            }}
            scrollbar={{ draggable: true, hide: true }}
            simulateTouch={true}
            onSwiper={_swiper => {
              setSwiper(_swiper)
              clearTimeout(timeoutSlide)
              timeoutSlide = setTimeout(() => {
                autoSlide(_swiper, { ..._swiper })
              }, 5000)
            }}
            onSlideChange={_swiper => {
              clearTimeout(timeoutSlide)
              timeoutSlide = setTimeout(() => autoSlide(_swiper, { ..._swiper }), 5000)
            }}
          >
            {certifications.map(certification => (
              <SwiperSlide key={certification.id}>
                <div className='about_certification'>
                  <div className='about_certification__content'>
                    <Text title={certification.name} type='big_paragraph' style={{ margin: 0, fontWeight: 700 }}>
                      {certification.name}
                    </Text>
                    <span className='sticker sticker--soft' style={{ '--r': '-2deg', width: 'fit-content', fontSize: 13, padding: '6px 11px' }}>
                      Platzi · {certification.date}
                    </span>
                    <Text type='paragraph' style={{ margin: 0, opacity: 0.8, fontSize: '0.95rem' }}>
                      {certification.description}
                    </Text>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Expertises icons below certificates */}
          <div className='about__tools'>
            {expertises.map(exp => {
              const Icon = exp.icon
              return (
                <span key={exp.name} title={exp.name} className='about__tool'>
                  <Icon size={30} />
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection