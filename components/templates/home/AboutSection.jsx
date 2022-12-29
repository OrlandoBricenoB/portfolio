import { useState } from 'react'
import useTranslate from '../../../hooks/useTranslate'
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
import Image from 'next/image'

let timeoutSlide

const AboutSection = () => {
  const { t, ready } = useTranslate()

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
      id: 1,
      name: ready && t('certification--practical-javascript'),
      description: '...',
      image: JavaScriptPractice
    },
    {
      id: 2,
      name: ready && t('certification--professional-javascript'),
      description: '...',
      image: JavaScriptProfessional
    },
    {
      id: 3,
      name: ready && t('certification--nodejs'),
      description: '...',
      image: FundamentalsNodeJS
    },
    {
      id: 4,
      name: ready && t('certification--professional-git'),
      description: '...',
      image: GitGithub
    },
    {
      id: 5,
      name: ready && t('certification--html-css'),
      description: '...',
      image: HTMLCSS
    },
    {
      id: 6,
      name: ready && t('certification--time-management'),
      description: '...',
      image: TimeManagement
    },
    {
      id: 7,
      name: ready && t('certification--emotional-intelligence'),
      description: '...',
      image: Intelligence
    },
    {
      id: 8,
      name: ready && t('certification--logical-thinking'),
      description: '...',
      image: LogicThinking
    }
  ]

  return (
    <div className={classNames('section')} id='about'>
      <Heading type='h2' style={{ textAlign: 'center', marginBottom: '2rem' }}>{ready && t('common--about-me')}</Heading>
      <div className={classNames('about__container')}>
        {/* Certificates */}
        <div className={classNames('about_certifications')}>
          <Swiper
            modules={[Controller, Pagination, Navigation, Scrollbar]}
            spaceBetween={16}
            slidesPerView={4}
            breakpoints={{
              320: {
                slidesPerView: 2
              },
              640: {
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
                  <SwiperSlide key={certification.id}>
                    <div className={classNames('about_certification')}>
                      <figure className={classNames('about_certification__image')}>
                        <Image
                          src={certification.image.src}
                          width={330}
                          height={225}
                          alt={certification.name}
                        />
                      </figure>
                      <div className={classNames('about_certification__content')}>
                        <Text type='big_paragraph' style={{ margin: 0 }}>{certification.name}</Text>
                        {/* <Text type='paragraph' style={{ margin: 0 }}>{certification.description}</Text> */}
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
            <Image
              src={ThinkingProfile.src}
              width={750}
              height={1000}
              style={{ width: '100%', height: 'auto' }}
              alt='Orlando Briceño Pensando'
            />
            <ImageGradient />
          </figure>
          <Container>
            <Heading type='h3'>{ready && t('about--story-title')}</Heading>
            <Text type='paragraph'>
              {ready && t('about--story-content-1')}
              <br /><br />
              {ready && t('about--story-content-2')}
              <br /><br />
              {ready && t('about--story-content-3')}
              <br /><br />
              {ready && t('about--story-content-4')}
              <br /><br />
              {ready && t('about--story-content-5')}
              <br /><br />
              {ready && t('about--story-content-6')}
            </Text>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>{ready && t('about--story-content-6-a')}</li>
              <li>{ready && t('about--story-content-6-b')}</li>
              <li>{ready && t('about--story-content-6-c')}</li>
              <li>{ready && t('about--story-content-6-d')}</li>
              <li>{ready && t('about--story-content-6-e')}</li>
              <li>{ready && t('about--story-content-6-f')}</li>
            </ul>
            <Text type='paragraph'>
              {ready && t('about--story-content-7')}
              <br /><br />
              {ready && t('about--story-content-8')}
              <br /><br />
              {ready && t('about--story-content-9')}
            </Text>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
