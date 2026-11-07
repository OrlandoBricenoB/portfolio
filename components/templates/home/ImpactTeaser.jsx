import Link from 'next/link'

import useTranslate from '../../../hooks/useTranslate'
import Heading from '../../atoms/texts/Heading'
import Note from '../../atoms/ui/Note'
import Sticker from '../../atoms/ui/Sticker'
import Polaroid from '../../atoms/ui/Polaroid'
import styles from '../../../styles/pages/home/presentation.module.css'

import kids from '../../../assets/images/stories/bringing-love-to-kids.jpg'
import kidsWebp from '../../../assets/images/stories/bringing-love-to-kids.webp'

const ImpactTeaser = () => {
  const { t } = useTranslate()

  return (
    <section className={`${styles.section} ${styles.soft}`} id='impact-teaser'>
      <div className='wrapper'>
        <div className={styles.teaser}>
          <div>
            <div data-reveal='up'><Note>{t('teaser-impact--kicker')}</Note></div>
            <Heading type='h2' className={styles.title} data-reveal='up'>
              {t('teaser-impact--title')}
            </Heading>
            <p className={styles.intro} data-reveal='up'>{t('teaser-impact--body')}</p>
            <Link className={styles.link_button} href='/impact' data-reveal='up'>
              {t('teaser-impact--cta')} →
            </Link>
          </div>
          <div className={styles.teaser_visual}>
            <Polaroid rotate={-2.5}>
              <picture>
                <source srcSet={kidsWebp.src} type='image/webp' />
                <img
                  className={styles.teaser_photo}
                  src={kids.src}
                  alt={t('stories--kids-alt')}
                  loading='lazy'
                />
              </picture>
            </Polaroid>
            <Sticker abs variant='blue' rotate={-8} style={{ top: 0, right: 12 }}>La Guaira</Sticker>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactTeaser
