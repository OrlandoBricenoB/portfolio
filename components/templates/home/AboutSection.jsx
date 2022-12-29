import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation('common')

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
      name: t('certification--practical-javascript'),
      description: '...',
      image: JavaScriptPractice
    },
    {
      name: t('certification--professional-javascript'),
      description: '...',
      image: JavaScriptProfessional
    },
    {
      name: t('certification--nodejs'),
      description: '...',
      image: FundamentalsNodeJS
    },
    {
      name: t('certification--professional-git'),
      description: '...',
      image: GitGithub
    },
    {
      name: t('certification--html-css'),
      description: '...',
      image: HTMLCSS
    },
    {
      name: t('certification--time-management'),
      description: '...',
      image: TimeManagement
    },
    {
      name: t('certification--emotional-intelligence'),
      description: '...',
      image: Intelligence
    },
    {
      name: t('certification--logical-thinking'),
      description: '...',
      image: LogicThinking
    }
  ]

  return (
    <div className={classNames('section')} id='about'>
      <Heading type='h2' style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('common--about-me')}</Heading>
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
            <img src={ThinkingProfile.src} style={{ width: '100%' }} />
            <ImageGradient />
          </figure>
          <Container>
            <Heading type='h3'>{t('about--story-title')}</Heading>
            <Text type='paragraph'>
              {t('about--story-content-1')}
              <br /><br />
              {t('about--story-content-2')}
              <br /><br />
              {t('about--story-content-3')}
              <br /><br />
              {t('about--story-content-4')}
              <br /><br />
              {t('about--story-content-5')}
              <br /><br />
              {t('about--story-content-6')}
            </Text>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>{t('about--story-content-6-a')}</li>
              <li>{t('about--story-content-6-b')}</li>
              <li>{t('about--story-content-6-c')}</li>
              <li>{t('about--story-content-6-d')}</li>
              <li>{t('about--story-content-6-e')}</li>
              <li>{t('about--story-content-6-f')}</li>
            </ul>
            <Text type='paragraph'>
              {t('about--story-content-7')}
              <br /><br />
              {t('about--story-content-8')}
              <br /><br />
              {t('about--story-content-9')}
            </Text>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
