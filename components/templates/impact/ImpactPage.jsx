import Head from 'next/head'
import Link from 'next/link'

import useTranslate from '../../../hooks/useTranslate'
import Heading from '../../atoms/texts/Heading'
import Button from '../../atoms/Button'
import Email from '../../atoms/icons/Email'
import StoriesSection from '../home/StoriesSection'
import RecognitionsSection from '../home/RecognitionsSection'
import styles from '../../../styles/pages/impact/impact.module.css'

const ImpactPage = () => {
  const { t } = useTranslate()

  return (
    <main>
      <Head>
        <title>{t('impact--meta-title')}</title>
        <meta name='description' content={t('impact--meta-description')} />
      </Head>

      <section className={styles.hero}>
        <div className='wrapper'>
          <p className={styles.kicker}>{t('impact--kicker')}</p>
          <Heading type='h1' style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', lineHeight: 1.12, margin: 0, maxWidth: '46rem' }}>
            {t('impact--title')}
          </Heading>
          <p className={styles.lead}>{t('impact--lead')}</p>
        </div>
      </section>

      <StoriesSection />
      <RecognitionsSection />

      <section className={styles.closing}>
        <div className='wrapper'>
          <Heading type='h2' style={{ maxWidth: '40rem' }}>{t('impact--closing-title')}</Heading>
          <p className={styles.lead}>{t('impact--closing-body')}</p>
          <div className={styles.closing_actions}>
            <Button
              componentElement='a'
              href='mailto:orlando@gadmin.app'
              Icon={<Email size='24' color='#ffffff' />}
            >
              {t('common--cta-email')}
            </Button>
            <Link className={styles.ghost} href='/'>{t('impact--cta-home')}</Link>
            <Link className={styles.ghost} href='/courses'>{t('impact--cta-courses')}</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ImpactPage
