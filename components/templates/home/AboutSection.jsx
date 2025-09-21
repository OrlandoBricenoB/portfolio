import { useState } from 'react'
import useTranslate from '../../../hooks/useTranslate'
import classNames from 'classnames'

import Heading from '../../atoms/texts/Heading'
import Text from '../../atoms/texts/Text'

import AboutMeProfile from '../../../assets/images/guitar-keyboard.webp'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Controller, Navigation, Pagination, Scrollbar } from 'swiper'
import Image from 'next/image'

// Importar los iconos
import Joystick from '../../atoms/icons/Joystick'
import CursorPointer from '../../atoms/icons/CursorPointer'
import Books from '../../atoms/icons/Books'

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

  return (
    <div className={classNames('section')} id='about'>
      <div className="wrapper">
        <Text type='big_paragraph'>{
          '| ' + t('common--about-me') + ' |'
        }</Text>
        <div className={classNames('about__container')}>
          {/* About */}
          <div className={classNames('about__content')}>
            <figure className={classNames('about__content_image')} style={{ margin: 0, position: 'relative' }}>
              <Image
                src={AboutMeProfile.src}
                width={2500}
                height={2597}
                style={{ width: '100%', height: 'auto' }}
                alt='Orlando Briceño Pensando'
              />
            </figure>
            <div className="about__content-text">
              <Heading type='h1' color='var(--dark)'>{t('about--story-title')}</Heading>
              <Text type='paragraph' style={{ fontSize: '1.1rem', marginBottom: '0' }}>
                {t('about--story-content-1')}
                <br /><br />
                {t('about--story-content-2')}
                <br /><br />
                {t('about--story-content-3')}
                <br /><br />
              </Text>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span style={{ marginRight: '1rem', flexShrink: 0, borderRadius: '100%', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40 }}>
                      <Joystick size={28} color="#21c2e1" />
                    </span>
                    <span>
                      {t('about--story-content-4-before')}
                      <strong>{t('about--story-content-4-brand')}</strong>
                      {t('about--story-content-4-after')}
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span style={{ marginRight: '1rem', flexShrink: 0, borderRadius: '100%', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40 }}>
                      <CursorPointer size={28} color="#21c2e1" />
                    </span>
                    <span>
                      {t('about--story-content-5-before')}
                      <strong>{t('about--story-content-5-brand')}</strong>
                      {t('about--story-content-5-after')}
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '1rem', flexShrink: 0, borderRadius: '100%', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40 }}>
                      <Books size={28} color="#21c2e1" />
                    </span>
                    <span>
                      {t('about--story-content-6-before')}
                      <strong>{t('about--story-content-6-brand')}</strong>
                      {t('about--story-content-6-after')}
                    </span>
                  </li>
                </ul>
                <br /><br />
                <Text type='paragraph' style={{ fontSize: '1.1rem', marginTop: '0' }}>
                  {t('about--story-content-7')}
                </Text>
            </div>
          </div>
          {/* Certificados */}
          <div
            className={classNames('about_certifications')}
            onMouseEnter={() => {
              clearTimeout(timeoutSlide)
            }}
            onMouseLeave={e => {
              // Busca el swiper en el DOM
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
              modules={[Controller, Pagination, Navigation, Scrollbar]}
              spaceBetween={16}
              slidesPerView={4}
              breakpoints={{
                320: {
                  slidesPerView: 1
                },
                640: {
                  slidesPerView: 2
                },
                1024: {
                  slidesPerView: 4
                }
              }}
              controller
              scrollbar={{
                draggable: true,
                hide: true
              }}
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
              {/* Render certificate */}
              {
                certifications.map(certification => (
                  <SwiperSlide key={certification.id}>
                    <div className={classNames('about_certification')}>
                      <div className={classNames('about_certification__content')} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '.25rem',
                        padding: '1.25rem 1rem'
                      }}>
                        <Text title={certification.name} type='big_paragraph' style={{ margin: 0, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {certification.name}
                        </Text>
                        <Text type='small' style={{ fontWeight: 500, marginBottom: '.25rem' }}>
                          Platzi - {certification.date}
                        </Text>
                        <Text type='paragraph' style={{ margin: 0, color: 'var(--dark-lighter)' }}>
                          {certification.description}
                        </Text>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
            {/* Expertises icons below certificates */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginTop: '0.5rem',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {expertises.map((exp, idx) => {
                const Icon = exp.icon
                return (
                  <span
                    key={exp.name}
                    title={exp.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 1, // Full opacity
                      width: 44,
                      height: 44,
                      background: '#070a2b80',
                      borderRadius: '8px'
                    }}
                  >
                    <Icon size={32} />
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
