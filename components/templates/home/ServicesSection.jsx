import useTranslate from '../../../hooks/useTranslate'
import Heading from '../../atoms/texts/Heading'
import Note from '../../atoms/ui/Note'
import styles from '../../../styles/pages/home/presentation.module.css'

const ITEMS = ['1', '2', '3', '4']

const ServicesSection = () => {
  const { t } = useTranslate()

  return (
    <section className={`${styles.section} ${styles.light}`} id='services'>
      <div className='wrapper'>
        <div data-reveal='up'><Note>{t('services--kicker')}</Note></div>
        <Heading type='h2' className={styles.title} data-reveal='up'>
          {t('services--title')}
        </Heading>
        <p className={styles.intro} data-reveal='up'>{t('services--intro')}</p>
        <div className={styles.grid4} data-reveal-stagger>
          {ITEMS.map(item => (
            <article key={item} className={styles.card} data-reveal='up'>
              <span className={styles.index}>0{item}</span>
              <Heading type='h3'>{t(`services--${item}-title`)}</Heading>
              <p>{t(`services--${item}-body`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
