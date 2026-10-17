import { useEffect, useLayoutEffect, useRef, useState } from 'react'

/*
  * i18n
*/
import useTranslate from '../../../hooks/useTranslate'

/*
  * COMPONENTS
*/
import Button from '../../atoms/Button'
// import Link from '../../atoms/links/Link'
import Heading from '../../atoms/texts/Heading'
import Text from '../../atoms/texts/Text'

// import Multirating from '../../molecules/rating/Multirating'
import SocialButton from '../../molecules/socials/SocialButton'

/*
  * ICONS
*/
import Linkedin from '../../atoms/icons/Linkedin'
import Instagram from '../../atoms/icons/Instagram'
import Github from '../../atoms/icons/Github'
import WhatsApp from '../../atoms/icons/WhatsApp'

/*
  * IMAGES
*/
import cover from '../../../assets/images/cover.png'
import coverWebp from '../../../assets/images/cover.webp'
import logoGadmin from '../../../assets/images/logo-no-frame-light.webp'

/*
  * STYLES
*/
import styles from '../../../styles/pages/home/home.module.css'
import Image from 'next/image'
import Email from '../../atoms/icons/Email'

const MainSection = ({ recommendations = [] }) => {
  const { t } = useTranslate()
  const rootRef = useRef(null)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    setShowVideo(true)
  }, [])

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) return undefined

    let ctx
    let cancelled = false

    const setup = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      if (cancelled || !rootRef.current) return

      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        const content = root.querySelector('[data-hero="content"]')
        const social = root.querySelector('[data-hero="social"]')
        const media = root.querySelector('[data-hero="media"]')
        const shade = root.querySelector('[data-hero="shade"]')
        const cue = root.querySelector('[data-hero="cue"]')
        const copy = [content, social]

        gsap.from(copy, {
          y: 32,
          autoAlpha: 0,
          duration: 0.95,
          stagger: 0.08,
          ease: 'power2.out',
        })

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.65,
          },
        })

        timeline.to(copy, { y: -72, autoAlpha: 0, ease: 'none' }, 0)
        timeline.to(media, { scale: 1.1, yPercent: 8, ease: 'none' }, 0)
        timeline.to(shade, { autoAlpha: 0.72, ease: 'none' }, 0)
        timeline.to(cue, { autoAlpha: 0, y: -16, ease: 'none', duration: 0.35 }, 0)
      }, root)
    }

    setup()

    return () => {
      cancelled = true
      ctx?.revert()
    }
  }, [])

  return (
    <div 
      className={styles.home_container}
      id='presentation'
      ref={rootRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#070a2b',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <div className={styles.home__media} data-hero="media">
        {showVideo && (
          <video
            className={styles.home__video}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src="/videos/background-video.webm" type="video/webm" />
            <source src="/videos/background-video.mp4" type="video/mp4" />
          </video>
        )}
        <picture className={styles.home__cover} aria-hidden="true">
          <source srcSet={coverWebp.src} type="image/webp" />
          <img src={cover.src} alt="" />
        </picture>
      </div>
      <div className={styles.home__video_overlay} aria-hidden="true" />
      <div className={styles.home__shade} data-hero="shade" aria-hidden="true" />
      <div
        className={'wrapper'}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Content */}
        <div className={styles.home__content_container}>
          <div className={styles.home__content} data-hero="content">
            {/* Title */}
            <div>
              <Text type='big_paragraph' className={styles.home__specialization}>{
                '| ' + t('common--specialization') + ' |'
              }</Text>
              <Heading type='h1' className={styles.home__title}>{
                t('common--title')
              }</Heading>
            </div>

            {/* Bio */}
            <Text type='paragraph' style={{ fontSize: '1.2rem' }}>
              {t('main--greetings')}<br /><br />
              {t('main--bio-1')}<br /><br />
              {t('main--bio-2')}
            </Text>

            {/* CTA */}
            <div className={styles.home__cta} style={{ display: 'flex', gap: '1rem' }}>
              <Button
                type='primary'
                Icon={<WhatsApp size='32' color='#070a2b' />}
                componentElement='a'
                href='https://wa.me/584121689393?text=Hey%2C%20Orlando.%20Tengo%20una%20idea%20s%C3%BAper%20potente%20y%20quiero%20compartirla%20contigo.'
                target='_blank'
                data-sln-event="user: send whatsapp"
              >
                {t('common--cta-whatsapp')}
              </Button>
              <Button
                type='outlined'
                Icon={<Email color='#21c2e1' size='32' />}
                componentElement='a'
                href='mailto:orlando@gadmin.app'
                target='_blank'
                className={styles.home__cta_email}
                aria-label='Enviar email a Orlando Briceno'
                style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                data-sln-event="user: send email"
              >
                <span style={{ marginLeft: '0.5rem', fontWeight: 500, color: '#21c2e1' }}>
                  {'Email'}
                </span>
              </Button>
            </div>

                      {/* Statistics */}
          <div className={styles.home__statistics}>
            <a
              href="https://gadmin.app/"
              target="_blank"
              className={styles.gadmin_logo_container}
              aria-label="Ir a Gadmin.app"
            >
              <div className={styles.gadmin_logo}>
                <Image
                  src={logoGadmin}
                  alt="Logo Gadmin"
                  width={64}
                  height={64}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: '100%',
                    background: 'transparent',
                  }}
                />
              </div>
            </a>
            <div className={styles.home__statistics_item}>
              <Text type='big_paragraph' className={styles.statistics_number}>15</Text>
              <Text type='paragraph' className={styles.statistics_description}>{t('common--experience-years')}</Text>
            </div>
            <div className={styles.home__statistics_item}>
              <Text type='big_paragraph' className={styles.statistics_number}>10+</Text>
              <Text type='paragraph' className={styles.statistics_description}>{t('common--done-projects')}</Text>
            </div>
          </div>
          </div>
        </div>
        
        {/* Social Buttons moved to bottom right */}
        <div
          className={styles.social_buttons}
          data-hero="social"
          style={{
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <div></div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
            <SocialButton Icon={Linkedin} to='https://linkedin.com/in/orlandobricenob' />
            <SocialButton Icon={Instagram} to='https://instagram.com/orlandobricenob' />
            <SocialButton Icon={Github} to='https://github.com/OrlandoBricenoB' />
          </div>
        </div>
      </div>
      <p className={styles.home__cue} data-hero="cue">
        {t('stories--hint')}
      </p>
    </div>
  )
}

export default MainSection

