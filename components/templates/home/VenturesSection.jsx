import Image from 'next/image'

import useTranslate from '../../../hooks/useTranslate'
import Heading from '../../atoms/texts/Heading'
import Note from '../../atoms/ui/Note'
import GoToFile from '../../atoms/icons/GoToFile'
import styles from '../../../styles/pages/home/presentation.module.css'

import gadminLogo from '../../../assets/images/brands/gadmin.png'
import sellLogo from '../../../assets/images/brands/sell-logo.png'
import contyLogo from '../../../assets/images/brands/conty-logo.png'

const VENTURES = [
  { id: 'sell', name: 'Gadmin Sell', logo: sellLogo, href: 'https://gadminsell.com' },
  { id: 'conty', name: 'Gadmin Conty', logo: contyLogo, href: 'https://gadminconty.com' },
]

const VenturesSection = () => {
  const { t } = useTranslate()

  return (
    <section className={`${styles.section} ${styles.dark} ${styles.dark_join}`} id='ventures'>
      <div className='wrapper'>
        <div className={styles.dark_divider} />
        <div data-reveal='up'><Note>{t('ventures--kicker')}</Note></div>
        <Heading type='h2' className={styles.title} data-reveal='up'>{t('ventures--title')}</Heading>
        <div className={styles.parent} data-reveal='up'>
          <Image src={gadminLogo} alt='Gadmin' width={40} height={40} />
          <span>{t('ventures--parent')}</span>
        </div>
        <div className={styles.ventures} data-reveal-stagger>
          {VENTURES.map(venture => (
            <article key={venture.id} className={styles.venture} data-reveal='up'>
              <div className={styles.venture_head}>
                <Image className={styles.venture_logo} src={venture.logo} alt={venture.name} width={68} height={68} />
                <div>
                  <Heading type='h3'>{venture.name}</Heading>
                  <p className={styles.venture_tag}>{t(`ventures--${venture.id}-tagline`)}</p>
                </div>
              </div>
              <span className={styles.badge}>{t('ventures--badge')}</span>
              <p>{t(`ventures--${venture.id}-body`)}</p>
              <a
                className='pill-link pill-link--white'
                href={venture.href}
                target='_blank'
                rel='noreferrer'
                style={{ width: 'fit-content' }}
              >
                <GoToFile color='#0051ff' />
                {t('ventures--cta')}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VenturesSection
