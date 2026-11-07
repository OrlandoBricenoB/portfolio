import { useEffect, useState } from 'react'
import Image from 'next/image'

import useTranslate from '../../../hooks/useTranslate'

import Button from '../../atoms/Button'
import Heading from '../../atoms/texts/Heading'
import Text from '../../atoms/texts/Text'
import Note from '../../atoms/ui/Note'
import Sticker from '../../atoms/ui/Sticker'

import Linkedin from '../../atoms/icons/Linkedin'
import Instagram from '../../atoms/icons/Instagram'
import Github from '../../atoms/icons/Github'
import Email from '../../atoms/icons/Email'

import cover from '../../../assets/images/cover.png'
import coverWebp from '../../../assets/images/cover.webp'
import logoGadmin from '../../../assets/images/logo-no-frame-light.webp'

import styles from '../../../styles/pages/home/home.module.css'

const DISCIPLINES = ['dev', 'finance', 'sales', 'marketing', 'design']

// Typewriter that cycles through the translated discipline names
const RotatingWord = ({ words }) => {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(words[0] || '')

  const key = words.join('|')

  useEffect(() => {
    setIndex(0)
    setText(words[0] || '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  useEffect(() => {
    if (!words.length) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const target = words[index % words.length]
    let timer

    if (text === target) {
      // fully typed: hold, then move to the next word
      timer = setTimeout(() => setIndex(index + 1), 1700)
    } else if (target.startsWith(text)) {
      timer = setTimeout(() => setText(target.slice(0, text.length + 1)), 70)
    } else {
      timer = setTimeout(() => setText(text.slice(0, -1)), 35)
    }

    return () => clearTimeout(timer)
  }, [text, index, key])

  return <span className='rot'>{text || '\u00A0'}</span>
}

const MainSection = () => {
  const { t } = useTranslate()
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    setShowVideo(true)
  }, [])

  const words = DISCIPLINES.map(id => t(`disciplines--${id}-name`))

  return (
    <section className={styles.hero} id='presentation'>
      {/* Full-screen video + picture on the right */}
      <div className={styles.hero__media} aria-hidden='true'>
        {showVideo && (
          <video className={styles.hero__video} autoPlay muted loop playsInline>
            <source src='/videos/background-video.webm' type='video/webm' />
            <source src='/videos/background-video.mp4' type='video/mp4' />
          </video>
        )}
        <picture className={styles.hero__cover}>
          <source srcSet={coverWebp.src} type='image/webp' />
          <img src={cover.src} alt='' />
        </picture>
      </div>
      <div className={styles.hero__overlay} aria-hidden='true' />

      <div className={`wrapper ${styles.hero__grid}`}>
        <div className={styles.hero__copy}>
          <div data-reveal='up'>
            <Note arrow='→' className={styles.hero__note}>{t('common--specialization')}</Note>
          </div>
          <Heading type='h1' className={styles.hero__title} data-reveal='up'>
            {t('common--title')}
          </Heading>

          <div className={styles.hero__rot} data-reveal='up'>
            <span className='hl'>
              <RotatingWord words={words} />
            </span>
          </div>

          <Text type='paragraph' className={styles.hero__bio} data-reveal='up'>
            {t('main--greetings')}<br /><br />
            {t('main--bio-1')}<br /><br />
            {t('main--bio-2')}
          </Text>

          <div className={styles.hero__cta} data-reveal='up'>
            <Button
              type='primary'
              Icon={<Email size='24' color='#ffffff' />}
              componentElement='a'
              href='mailto:orlando@gadmin.app'
              data-sln-event='user: send email'
            >
              {t('common--cta-email')}
            </Button>
          </div>

          <div className={styles.hero__stats} data-reveal='up'>
            <a
              href='https://gadmin.app/'
              target='_blank'
              rel='noreferrer'
              className={styles.hero__logo}
              aria-label='Ir a Gadmin.app'
            >
              <Image src={logoGadmin} alt='Logo Gadmin' width={64} height={64} />
            </a>
            <div className={styles.hero__stat}>
              <b>15</b>
              <span>{t('common--experience-years')}</span>
            </div>
            <div className={styles.hero__stat}>
              <b>10+</b>
              <span>{t('common--done-projects')}</span>
            </div>
          </div>
        </div>

        <div className={styles.hero__socials} data-reveal='up'>
          <a href='https://linkedin.com/in/orlandobricenob' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
            <Linkedin size='18' color='#ffffff' /> <b>LinkedIn</b>
          </a>
          <a href='https://instagram.com/orlandobricenob' target='_blank' rel='noreferrer' aria-label='Instagram'>
            <Instagram size='18' color='#ffffff' /> <b>Instagram</b>
          </a>
          <a href='https://github.com/OrlandoBricenoB' target='_blank' rel='noreferrer' aria-label='GitHub'>
            <Github size='18' color='#ffffff' /> <b>GitHub</b>
          </a>
        </div>
      </div>
    </section>
  )
}

export default MainSection