import useTranslate from '../../../hooks/useTranslate'
import Heading from '../../atoms/texts/Heading'
import Note from '../../atoms/ui/Note'
import styles from '../../../styles/pages/home/presentation.module.css'

import Youtube from '../../atoms/icons/Youtube'
import Instagram from '../../atoms/icons/Instagram'
import TikTok from '../../atoms/icons/TikTok'
import Linkedin from '../../atoms/icons/Linkedin'
import XIcon from '../../atoms/icons/XIcon'
import Email from '../../atoms/icons/Email'

// Set a channel's url to a string to enable it. `null` renders it as "coming soon".
export const CHANNELS = [
  { id: 'youtube', name: 'YouTube', Icon: Youtube, url: null },
  { id: 'instagram', name: 'Instagram', Icon: Instagram, url: 'https://instagram.com/orlandobricenob' },
  { id: 'tiktok', name: 'TikTok', Icon: TikTok, url: null },
  { id: 'linkedin', name: 'LinkedIn', Icon: Linkedin, url: 'https://linkedin.com/in/orlandobricenob' },
  { id: 'x', name: 'X', Icon: XIcon, url: null },
  { id: 'newsletter', name: 'Newsletter', Icon: Email, url: null },
]

const ContentSection = () => {
  const { t } = useTranslate()

  return (
    <section className={`${styles.section} ${styles.soft}`} id='content'>
      <div className='wrapper'>
        <div data-reveal='up'><Note>{t('content--kicker')}</Note></div>
        <Heading type='h2' className={styles.title} data-reveal='up'>
          {t('content--title')}
        </Heading>
        <p className={styles.intro} data-reveal='up'>{t('content--body')}</p>
        <div className={styles.channels} data-reveal-stagger>
          {CHANNELS.map(({ id, name, Icon, url }) => (
            url ? (
              <a key={id} className={styles.channel} href={url} target='_blank' rel='noreferrer' data-reveal='up'>
                <Icon size='26' color='#0051ff' />
                {name}
              </a>
            ) : (
              <span key={id} className={`${styles.channel} ${styles.channel_soon}`} aria-disabled='true' data-reveal='up'>
                <Icon size='26' color='#48a4ff' />
                {name} · {t('content--soon')}
              </span>
            )
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContentSection
