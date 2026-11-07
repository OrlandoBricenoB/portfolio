import Link from 'next/link'

import useTranslate from '../../../hooks/useTranslate'
import Heading from '../../atoms/texts/Heading'
import Note from '../../atoms/ui/Note'
import styles from '../../../styles/pages/home/presentation.module.css'

const TILTS = [-2, 1.5, -1]

const CoursesTeaser = () => {
  const { t } = useTranslate()

  return (
    <section className={`${styles.section} ${styles.light}`} id='courses-teaser'>
      <div className='wrapper'>
        <div className={styles.big_card} data-reveal='up'>
          <div data-reveal='up'><Note>{t('teaser-courses--kicker')}</Note></div>
          <Heading type='h2' className={styles.title} data-reveal='up'>{t('courses--title')}</Heading>
          <p className={styles.intro} data-reveal='up'>{t('teaser-courses--body')}</p>
          <ul className={styles.teaser_list} data-reveal-stagger>
            {['1', '2', '3'].map((item, index) => (
              <li key={item} style={{ '--r': `${TILTS[index]}deg` }} data-pop>
                {t(`courses--outcome-${item}-title`)}
              </li>
            ))}
          </ul>
          <Link className={`${styles.link_button} ${styles.link_white}`} href='/courses'>
            {t('teaser-courses--cta')} →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CoursesTeaser
