import useTranslate from '../../../hooks/useTranslate'
import Heading from '../../atoms/texts/Heading'
import Note from '../../atoms/ui/Note'
import styles from '../../../styles/pages/home/presentation.module.css'

const STEPS = ['1', '2', '3', '4']

const MethodSection = () => {
  const { t } = useTranslate()

  return (
    <section className={`${styles.section} ${styles.dark} ${styles.dark_head}`} id='method'>
      <div className='wrapper'>
        <div data-reveal='up'><Note>{t('method--kicker')}</Note></div>
        <Heading type='h2' className={styles.title} data-reveal='up'>{t('method--title')}</Heading>
        <p className={styles.intro} data-reveal='up'>{t('method--intro')}</p>
        <div className={`${styles.grid4} ${styles.method_grid}`} data-reveal-stagger>
          <div className={styles.method_line} data-method-line aria-hidden='true'><span /></div>
          {STEPS.map(step => (
            <article key={step} className={styles.card} data-reveal='up'>
              <span className={styles.index}>0{step}</span>
              <Heading type='h3'>{t(`method--${step}-title`)}</Heading>
              <p>{t(`method--${step}-body`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MethodSection
