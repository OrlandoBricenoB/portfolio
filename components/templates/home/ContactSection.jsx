import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Controller } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import Pagination from '../../molecules/Pagination'
import 'swiper/css'

import Button from '../../atoms/Button'
import Heading from '../../atoms/texts/Heading'
import Text from '../../atoms/texts/Text'

import Email from '../../atoms/icons/Email'
import AccountStar from '../../atoms/icons/AccountStar'

import ContactProfile from '../../../assets/images/contact-profile.png'
import Linkedin from '../../atoms/icons/Linkedin'
import Twitter from '../../atoms/icons/Twitter'
import ImageGradient from '../../atoms/ImageGradient'
import Recommendation from '../../organisms/Recommendation'
import Multirating from '../../molecules/rating/Multirating'
import Container from '../../atoms/Container'
import useTranslate from '../../../hooks/useTranslate'
import Image from 'next/image'

const ContactSection = ({ recommendations, users }) => {
  const { t } = useTranslate()

  /* * Swiper of Recommendations */
  const [swiper, setSwiper] = useState(null)
  const [position, setPosition] = useState(0)

  const handleChangeSwiper = () => setPosition(swiper.activeIndex)
  const handlePrevSwiper = () => swiper && swiper.slidePrev()
  const handleNextSwiper = () => swiper && swiper.slideNext()

  /* Form of Recommendation */
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    quantity: 0
  })
  const [isValidForm, setIsValidForm] = useState(false)

  const handleRateRecommendation = value => {
    setFormData(prev => {
      prev.quantity = value
      return prev
    })
    checkValidForm()
  }

  const checkValidForm = () => {
    if (!formData.name || 
      !formData.message || formData.message.length > 200 ||
      !formData.quantity) return setIsValidForm(false)
  
    return setIsValidForm(true)
  }

  const handleCreateRecommendation = () => {
    console.log({ formData })
  }

  return (
    <div className={classNames('contact', 'section')} id='contact'>
      <Heading type='h2' style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('contact--title')}</Heading>
      <div className={classNames('contact_content')}>
        {/* Contact */}
        <div className={classNames('contact__information')}>
          <figure style={{ margin: 0, position: 'relative' }}>
            <Image
              src={ContactProfile.src}
              width={1210}
              height={1876}
              style={{ width: '100%', height: 'auto' }}
              alt='Orlando Briceño Atento'
            />
            <ImageGradient />
          </figure>
          <div className={classNames('contact__information_text')}>
            <Heading type='h3' style={{ margin: 0, marginBottom: '4px' }}>Orlando Jose Briceño Blanco</Heading>
            <Text type='big_paragraph' style={{ margin: 0 }}>{t('common--role')}</Text>
            <Text type='paragraph' style={{ margin: '1.5rem 0' }}>
              {t('contact--content-1')}
              <br /><br />
              {t('contact--content-2')}
            </Text>
            {/* Social Buttons */}
            <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
              <a
                href='https://linkedin.com/in/orlandobricenob'
                target='_blank'
                className={classNames('contact__social_button')}
                aria-label='Visitar Perfil de LinkedIn de Orlando Briceno'
              >
                <Linkedin color='#21c2e1' size='32' />
              </a>
              <a
                href='https://twitter.com/orlandobricenob'
                target='_blank'
                className={classNames('contact__social_button')}
                aria-label='Visitar Twitter de OrlandoBricenoB'
              >
                <Twitter color='#21c2e1' size='32' />
              </a>
            </div>
            <Button
              Icon={<Email color='#070a2b' />}
              keepCase
              componentElement='a'
              href='mailto:orlando.briceno.blanco@gmail.com'
              style={{ width: 'fit-content' }}
            >{t('common--cta-email')}</Button>
          </div>
        </div>
        {/* Recommendations */}
        <div className={classNames('contact__recommendations')} id="recommendations">
          {/* Swiper Recommendations */}
          {
            recommendations.length !== 0 && (
              <div style={{ overflow: 'hidden' }}>
                <Swiper
                  modules={[Controller]}
                  spaceBetween={16}
                  slidesPerView={1}
                  onSlideChange={handleChangeSwiper}
                  onSwiper={_swiper => setSwiper(_swiper)}
                >
                  {
                    recommendations.map(recommendation => {
                      const user = users.find(user => user.uuid === recommendation.userUUID)
                      if (!user || !recommendation.uuid) return null

                      const fullName = user.name + ' ' + user.lastname

                      return (
                        <SwiperSlide key={recommendation.uuid}>
                          <Recommendation
                            image={recommendation.image || ContactProfile.src}
                            name={fullName}
                            message={recommendation.message}
                            stars={recommendation.quantity}
                          />
                        </SwiperSlide>
                      )
                    })
                  }
                </Swiper>

                <div className={classNames('contact__pagination')}>
                  <Pagination
                    onLeft={handlePrevSwiper}
                    onRight={handleNextSwiper}
                    disabledLeft={position <= 0}
                    disabledRight={position >= recommendations.length - 1}
                  />
                  <div className={classNames('content__pagination_slides')}>
                    <Swiper
                      modules={[Controller]}
                      controller={{ control: swiper }}
                      spaceBetween={8}
                      slidesPerView={3}
                      simulateTouch={false}
                    >
                      {
                        swiper?.slides.map((slide, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <div
                                onClick={() => swiper.slideTo(index)}
                                className={
                                  classNames('content__pagination_slide', {
                                    'content__pagination_slide--current': index === swiper.activeIndex
                                  })
                                }
                              />
                            </SwiperSlide>
                          )
                        })
                      }
                    </Swiper> 
                  </div>
                </div>
              </div>
            )
          }
          {
            recommendations.length === 0 && (
              <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ textAlign: 'center' }}>
                  {t('recommendation--empty-1')}
                  <br /><br />
                  {t('recommendation--empty-2')}
                </Text>
              </Container>
            )
          }
          {/* Write Recommendation */}
          <div>
            <Text type='big_paragraph'>{t('recommendations--title')}</Text>
            <Multirating onRate={handleRateRecommendation} />
            <input
              type='text'
              placeholder={t('recommendations--placeholder-name')}
              style={{ marginTop: '1rem' }}
              onChange={event => {
                setFormData(prev => {
                  prev.name = event.target.value
                  return prev
                })
                checkValidForm()
              }}
            />
            <textarea
              rows={4}
              maxLength={200}
              defaultValue={''}
              placeholder={t('recommendations--placeholder-message')}
              style={{ marginTop: '1rem' }}
              onChange={event => {
                setFormData(prev => {
                  prev.message = event.target.value
                  return prev
                })
                checkValidForm()
              }}
            />
            <Button
              Icon={<AccountStar color='#070a2b' />}
              keepCase
              disabled={!isValidForm}
              style={{ marginTop: '1.5rem' }}
              onClick={handleCreateRecommendation}
            >{t('recommendations--cta')}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
