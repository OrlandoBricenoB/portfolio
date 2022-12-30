import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Pagination from '../../molecules/Pagination'
import 'swiper/css'

import Button from '../../atoms/Button'
import Heading from '../../atoms/texts/Heading'
import Text from '../../atoms/texts/Text'

import Email from '../../atoms/icons/Email'
import AccountStar from '../../atoms/icons/AccountStar'
import Upload from '../../atoms/icons/Upload'

import ContactProfile from '../../../assets/images/contact-profile.png'
import Linkedin from '../../atoms/icons/Linkedin'
import Twitter from '../../atoms/icons/Twitter'
import ImageGradient from '../../atoms/ImageGradient'
import Recommendation from '../../organisms/Recommendation'
import Multirating from '../../molecules/rating/Multirating'
import Container from '../../atoms/Container'
import useTranslate from '../../../hooks/useTranslate'
import NextImage from 'next/image'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactSection = ({ recommendations, users }) => {
  const { t } = useTranslate()
  const [avatar, setAvatar] = useState(null)
  const [avatarFile, setAvatarFile] = useState(null)
  const [recommendationSent, setRecommendationSent] = useState(false)

  useEffect(() => {
    setRecommendationSent(
      window.localStorage.getItem('recommendation-sent') || false
    )
  }, [])

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

  useEffect(() => {
    checkValidForm()
  }, [avatar])

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
      !formData.quantity || 
      !avatar) return setIsValidForm(false)
  
    return setIsValidForm(true)
  }

  const handleSelectImage = event => {
    if (!event.target.files.length) return
    const file = event.target.files[0]

    if (file.size > 5000000) {
      return toast('La imagen debe pesar máximo 5MB', {
        type: 'error'
      })
    }

    const reader = new FileReader()
    reader.onload = function (e) {
        var img = new Image()     
        img.src = e.target.result

        img.onload = function () {
          const [width, height] = [this.width, this.height]

          if (width !== height) {
            return toast('La imagen debe ser cuadrada.', {
              type: 'error'
            })
          }

          setAvatar(e.target.result)
          setAvatarFile(file)
        }
    }
    reader.readAsDataURL(file)

  }

  const handleCreateRecommendation = async () => {
    if (!isValidForm) return

    const recommendationSent = window.localStorage.getItem('recommendation-sent') || false
    if (recommendationSent) return

    // * Hacer la petición fetch para crear la recomendación.
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/recommendations/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          name: formData.name,
          image: avatar
        },
        message: formData.message,
        quantity: formData.quantity
      })
    })
    const data = await response.json()

    // * Limpiar el formulario.
    window.localStorage.setItem('recommendation-sent', data.uuid)
    setRecommendationSent(data.uuid)
  }

  return (
    <div className={classNames('contact', 'section')} id='contact'>
      <ToastContainer />
      <Heading type='h2' style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('contact--title')}</Heading>
      <div className={classNames('contact_content')}>
        {/* Contact */}
        <div className={classNames('contact__information')}>
          <figure style={{ margin: 0, position: 'relative' }}>
            <NextImage
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

                      return (
                        <SwiperSlide key={recommendation.uuid}>
                          <Recommendation
                            name={user.name}
                            image={user.image || ContactProfile.src}
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
          <div className={classNames('contact__form', { 'contact__form--thankyou': recommendationSent })}>
            {
              !recommendationSent
                ? (
                  <>
                    {/* Form */}
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
                    </div>
                    {/* Upload Image */}
                    <input
                      id='imageInput'
                      name='imageInput'
                      type='file'
                      accept="image/png, image/jpeg"
                      onChange={handleSelectImage}
                      hidden
                    />
                    <Container
                      componentElement='label'
                      htmlFor='imageInput'
                      className={classNames('contact__recommendation_image')}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        cursor: 'pointer',
                        paddingTop: 0
                      }}
                    >
                      {
                        !avatar
                          ? (
                            <>
                              <Upload size='128' />
                              <Text type='paragraph' style={{ margin: 0 }}>
                                Clic para subir una imagen
                              </Text>
                            </>
                          )
                          : (
                            <>
                              <img src={avatar} width={128} height={128} />
                              <Text type='paragraph'>{avatarFile.name.split('.')[0].slice(0, 35)}.{avatarFile.name.split('.')[1]}</Text>
                              <Text type='paragraph' style={{ color: '#8E92C2', margin: 0 }}>Clic para reemplazar la imagen</Text>
                            </>
                          )
                      }
                    </Container>
        
                    {/* CTA */}
                    <Button
                      Icon={<AccountStar color='#070a2b' />}
                      keepCase
                      disabled={!isValidForm}
                      style={{ marginTop: '1.5rem' }}
                      onClick={handleCreateRecommendation}
                    >{t('recommendations--cta')}</Button>
                  </>
                )
                : (
                  <Container style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    textAlign: 'center'
                  }}>
                    <Heading type='h3'>¡Gracias por dejar tu recomendación!</Heading>
                    <Text type='paragraph'>Tu apoyo es de gran ayuda para mí, gracias por ser parte de esto.</Text>
                    {
                      !recommendations.find(recommendation => {
                        return recommendation.uuid === recommendationSent
                      }) && (
                        <Text type='paragraph' style={{ margin: 0 }}>
                          En estos momentos tu recomendación está en revisión, muy pronto aparecerá en el listado.
                        </Text>
                      )
                    }
                  </Container>
                )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
