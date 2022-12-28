import { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'

import Container from '../../atoms/Container'
import Heading from '../../atoms/texts/Heading'
import Text from '../../atoms/texts/Text'

/* * Certifications Images */
import FundamentalsNodeJS from '../../../assets/images/certifications/diploma-fundamentos-node.jpg'
import TimeManagement from '../../../assets/images/certifications/diploma-gestion-tiempo.jpg'
import GitGithub from '../../../assets/images/certifications/diploma-git-github.jpg'
import HTMLCSS from '../../../assets/images/certifications/diploma-html-css.jpg'
import Intelligence from '../../../assets/images/certifications/diploma-inteligencia-emocional.jpg'
import JavaScriptPractice from '../../../assets/images/certifications/diploma-javascript-practico.jpg'
import JavaScriptProfessional from '../../../assets/images/certifications/diploma-javascript-profesional.png'
import LogicThinking from '../../../assets/images/certifications/diploma-pensamiento-logico.jpg'

import ThinkingProfile from '../../../assets/images/thinking-cut.png'
import ImageGradient from '../../atoms/ImageGradient'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Controller, Navigation, Pagination, Scrollbar } from 'swiper'

let timeoutSlide

const AboutSection = () => {
  const [swiper, setSwiper] = useState(null)

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
      name: 'Curso Práctico de JavaScript',
      description: '...',
      image: JavaScriptPractice
    },
    {
      name: 'Curso Profesional de JavaScript',
      description: '...',
      image: JavaScriptProfessional
    },
    {
      name: 'Curso de Fundamentos de Node.JS',
      description: '...',
      image: FundamentalsNodeJS
    },
    {
      name: 'Curso Profesional de Git y Github',
      description: '...',
      image: GitGithub
    },
    {
      name: 'Curso Definitivo de HTML y CSS',
      description: '...',
      image: HTMLCSS
    },
    {
      name: 'Curso de Gestión Efectiva del Tiempo',
      description: '...',
      image: TimeManagement
    },
    {
      name: 'Curso de Inteligencia Emocional',
      description: '...',
      image: Intelligence
    },
    {
      name: 'Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo',
      description: '...',
      image: LogicThinking
    }
  ]

  return (
    <div className={classNames('section')} id='about'>
      <Heading type='h2' style={{ textAlign: 'center', marginBottom: '2rem' }}>Acerca de mí</Heading>
      <div className={classNames('about__container')}>
        {/* Certificates */}
        <div className={classNames('about_certifications')}>
          <Swiper
            modules={[Controller, Pagination, Navigation, Scrollbar]}
            spaceBetween={16}
            slidesPerView={4}
            controller
            scrollbar={{
              draggable: true,
              hide: true
            }}
            onSwiper={_swiper => {
              setSwiper(_swiper)

              // * First auto slide
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
              certifications.map(certification => {
                return (
                  <SwiperSlide key={certification.name}>
                    <div className={classNames('about_certification')}>
                      <figure className={classNames('about_certification__image')}>
                        <img src={certification.image.src} />
                      </figure>
                      <div className={classNames('about_certification__content')}>
                        <Text type='big_paragraph' style={{ margin: 0 }}>{certification.name}</Text>
                        <Text type='paragraph' style={{ margin: 0 }}>{certification.description}</Text>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
        {/* About */}
        <div className={classNames('about__content')}>
          <figure className={classNames('about__content_image')} style={{ margin: 0, position: 'relative' }}>
            <img src={ThinkingProfile.src} style={{ width: '100%' }} />
            <ImageGradient />
          </figure>
          <Container>
            <Heading type='h3'>Mi Historia como Desarrollador</Heading>
            <Text type='paragraph'>
              Soy Orlando Jose Briceño Blanco, la programación ha formado parte de mi vida desde mi niñez, de ella me enamoré y sin importar qué, siempre estuve con ella.
              <br /><br />
              No tuve los recursos para estudiar apropiadamente e incluso pasé un tiempo donde desarrollaba en una libreta, en mis tiempos libres trabajando en el campo (sí, agricultura y todo ese trabajo hermoso).
              <br /><br />
              Aún así, a lo largo del tiempo y los años, me convertí en aquello que quería ser, alguien que pudiera construir cualquier cosa por sí solo, pero eso no fue suficiente, construí equipos de trabajo y me di cuenta de lo poderoso que podía ser un buen equipo.
              <br /><br />
              Estudié duro y sin parar de practicar, desarrollé aplicaciones con arquitecturas cada vez más complejas, siempre enfocado en el desarrollo web, trabajé el backend con PHP hasta mudarme a NodeJS en el 2015, en esas fechas conocí de SPA/PWA, NoSQL, ODMs, ORMs, API RESTs y a partir de allí crecí exponencialmente (gracias a las comunidades donde formé parte).
              <br /><br />
              En todo este largo trayecto desarrollé habilidades para Resolver problemas con autonomía, Trabajar en equipo y Construir código y arquitecturas limpias.
              <br /><br />
              Actualmente me especializo en desarrollo web Full Stack con:
            </Text>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>HTML, CSS, JavaScript y TypeScript</li>
              <li>TailwindCSS / Sass</li>
              <li>MongoDB, Express, React y NodeJS (Stack MERN)</li>
              <li>NextJS</li>
              <li>PostgreSQL / MySQL / SQLite</li>
              <li>Documentación para Usuarios y Desarrolladores</li>
            </ul>
            <Text type='paragraph'>
              En el año 2016 comenzé mi carrera profesional como Freelancer, desarrollando tanto aplicaciones webs como aplicaciones móviles híbridas y de escritorio para clientes y proyectos personales, logrando un avance gigantesco en mi vida profesional y personal.
              <br /><br />
              Actualmente quiero seguir creciendo junto a mi esposa, educando y guiando a cualquier persona que se encuentra ahora en la misma situación en la que una vez estuve.
              <br /><br />
              Estoy consciente de que nunca debo parar de aprender, seguir creciendo y aportar gran valor al mundo del desarrollo web.
            </Text>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
