import { useMemo, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Button from '../../atoms/Button'
import Heading from '../../atoms/texts/Heading'
import Text from '../../atoms/texts/Text'
import Email from '../../atoms/icons/Email'
import useTranslate from '../../../hooks/useTranslate'
import styles from '../../../styles/pages/courses/courses.module.css'

import mentorPhoto from '../../../assets/images/stories/holding-carnet.webp'

const TIERS = ['low', 'mid', 'vip']
const OUTCOMES = ['1', '2', '3']
const AUDIENCE_FOR = ['1', '2', '3', '4']
const AUDIENCE_NOT = ['1', '2', '3']
const FAQ = ['1', '2', '3', '4', '5', '6', '7']

const MODULES = ['mindset', 'foundations', 'stack', 'project']
const TOPICS = ['1', '2', '3']

const PATH = {
  low: { price: 200, from: 225 },
  mid: { price: 328, from: 365 },
  vip: { price: 450, from: 500 },
}

const money = amount => `$${amount}`

const CoursesPage = () => {
  const { t } = useTranslate()
  const { locale } = useRouter()
  const [tier, setTier] = useState('mid')
  const offer = PATH[tier]
  const saved = offer.from - offer.price

  const mail = useMemo(() => {
    const level = t(`courses--tier-${tier}`)
    const body = `${t('courses--wa-full')} (${level})`
    return `mailto:orlando@gadmin.app?body=${encodeURIComponent(body)}`
  }, [t, tier, locale])

  const reserveButton = (
    <Button
      componentElement='a'
      href={mail}
      Icon={<Email size='24' color='#ffffff' />}
    >
      {t('courses--cta')}
    </Button>
  )

  return (
    <main className={styles.page}>
      <Head>
        <title>{t('courses--meta-title')}</title>
        <meta name='description' content={t('courses--meta-description')} />
      </Head>

      <div className='wrapper'>
        {/* 1. Hero: the program and its three destinations */}
        <section className={styles.hero}>
          <div>
            <p className={styles.kicker}>{t('courses--kicker')}</p>
            <Heading type='h1' style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', lineHeight: 1.12, margin: '0.65rem 0 1rem' }}>
              {t('courses--title')}
            </Heading>
            <p className={styles.lead}>{t('courses--subtitle')}</p>
            <div className={styles.actions}>
              {reserveButton}
              <a className={styles.ghost} href='#outcomes'>{t('courses--see-path')}</a>
            </div>
          </div>

          <ol className={styles.rail}>
            {OUTCOMES.map((item, index) => (
              <li key={item}>
                <a href='#outcomes'>
                  <span className={styles.rail_index}>0{index + 1}</span>
                  <span>
                    <p className={styles.rail_name}>{t(`courses--outcome-${item}-title`)}</p>
                    <p className={styles.rail_meta}>{t(`courses--outcome-${item}-short`)}</p>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* 2. The destination */}
        <section className={styles.section} id='outcomes'>
          <p className={styles.kicker}>{t('courses--outcomes-kicker')}</p>
          <Heading type='h2'>{t('courses--outcomes-title')}</Heading>
          <p className={styles.intro}>{t('courses--outcomes-intro')}</p>
          <div className={styles.cards}>
            {OUTCOMES.map((item, index) => (
              <article key={item} className={styles.card}>
                <span className={styles.module_index}>0{index + 1}</span>
                <Heading type='h3'>{t(`courses--outcome-${item}-title`)}</Heading>
                <p>{t(`courses--outcome-${item}-body`)}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 3. Who it is for */}
        <section className={styles.section}>
          <p className={styles.kicker}>{t('courses--audience-kicker')}</p>
          <Heading type='h2'>{t('courses--audience-title')}</Heading>
          <div className={styles.audience}>
            <article className={`${styles.card} ${styles.audience_yes}`}>
              <Heading type='h3'>{t('courses--audience-yes-title')}</Heading>
              <ul className={styles.checklist}>
                {AUDIENCE_FOR.map(item => (
                  <li key={item}>{t(`courses--audience-yes-${item}`)}</li>
                ))}
              </ul>
            </article>
            <article className={styles.card}>
              <Heading type='h3'>{t('courses--audience-no-title')}</Heading>
              <ul className={`${styles.checklist} ${styles.checklist_no}`}>
                {AUDIENCE_NOT.map(item => (
                  <li key={item}>{t(`courses--audience-no-${item}`)}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* 4. How it is taught */}
        <section className={styles.section}>
          <p className={styles.kicker}>{t('courses--live-kicker')}</p>
          <Heading type='h2'>{t('courses--live-title')}</Heading>
          <p className={styles.intro}>{t('courses--live-intro')}</p>
          <div className={styles.cards}>
            {['1', '2', '3'].map(item => (
              <article key={item} className={styles.card}>
                <Heading type='h3'>{t(`courses--live-${item}-title`)}</Heading>
                <p>{t(`courses--live-${item}-body`)}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 5. The route: four modules of one course, seen together */}
        <section className={styles.section} id='path'>
          <p className={styles.kicker}>{t('courses--path-kicker')}</p>
          <Heading type='h2'>{t('courses--path-title')}</Heading>
          <p className={styles.intro}>{t('courses--path-intro')}</p>
          <div className={styles.modules}>
            {MODULES.map((id, index) => (
              <article key={id} id={`module-${id}`} className={styles.module}>
                <span className={styles.module_index}>0{index + 1}</span>
                <div>
                  <p className={styles.stage_label}>{t('courses--stage')} {index + 1}</p>
                  <Heading type='h3'>{t(`courses--mod-${id}-name`)}</Heading>
                  <p className={styles.module_weeks}>{t(`courses--mod-${id}-weeks`)}</p>
                  <p className={styles.module_focus}>{t(`courses--mod-${id}-focus`)}</p>
                  <ul className={styles.checklist}>
                    {TOPICS.map(topic => (
                      <li key={topic}>{t(`courses--mod-${id}-topics-${topic}`)}</li>
                    ))}
                  </ul>
                  <p className={styles.module_goal}>
                    <strong>{t('courses--stage-goal')}</strong> {t(`courses--mod-${id}-goal`)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 6. Mentor */}
        <section className={styles.section}>
          <div className={styles.mentor}>
            <Image
              className={styles.mentor_photo}
              src={mentorPhoto}
              alt={t('courses--mentor-alt')}
              width={360}
              height={360}
            />
            <div>
              <p className={styles.kicker}>{t('courses--mentor-kicker')}</p>
              <Heading type='h2'>{t('courses--mentor-title')}</Heading>
              <p className={styles.intro}>{t('courses--mentor-body-1')}</p>
              <p className={styles.intro}>{t('courses--mentor-body-2')}</p>
              <Link className={styles.ghost} href='/'>{t('courses--mentor-link')}</Link>
            </div>
          </div>
        </section>

        {/* 7. Pricing: the full program first */}
        <section className={styles.section} id='pricing'>
          <p className={styles.kicker}>{t('courses--price-kicker')}</p>
          <Heading type='h2'>{t('courses--price-title')}</Heading>
          <p className={styles.intro}>{t('courses--price-intro')}</p>

          <div className={styles.tiers}>
            {TIERS.map(id => (
              <button
                key={id}
                type='button'
                aria-pressed={tier === id}
                className={`${styles.tier} ${tier === id ? styles.tier_active : ''} ${id === 'vip' ? styles.tier_vip : ''}`}
                onClick={() => setTier(id)}
              >
                <p className={styles.tier_name}>{t(`courses--tier-${id}`)}</p>
                <p className={styles.tier_price}>{money(PATH[id].price)}</p>
                <p className={styles.price_from}>
                  {t('courses--from')} <s>{money(PATH[id].from)}</s>
                </p>
                <p>{t(`courses--tier-${id}-desc`)}</p>
              </button>
            ))}
          </div>

          <article className={`${styles.price_card} ${styles.price_featured}`}>
            <div>
              <p className={styles.kicker}>{t('courses--full-label')}</p>
              <Heading type='h3'>{t('courses--title')}</Heading>
              <p className={styles.price_note}>{t('courses--full-note')}</p>
            </div>
            <div>
              <p className={styles.price_amount}>{money(offer.price)}</p>
              <p className={styles.price_from}>
                {t('courses--from')} <s>{money(offer.from)}</s>
              </p>
              <span className={styles.save}>{t('courses--save')} {money(saved)}</span>
              <div className={styles.actions}>{reserveButton}</div>
            </div>
          </article>

        </section>

        {/* 8. Rhythm */}
        <section className={styles.section}>
          <p className={styles.kicker}>{t('courses--week-kicker')}</p>
          <Heading type='h2'>{t('courses--week-title')}</Heading>
          <div className={styles.rhythms}>
            {['1', '2', '3'].map(item => (
              <article key={item} className={styles.rhythm}>
                <Heading type='h3'>{t(`courses--week-${item}-title`)}</Heading>
                <p>{t(`courses--week-${item}-body`)}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 9. FAQ */}
        <section className={styles.section}>
          <p className={styles.kicker}>{t('courses--faq-kicker')}</p>
          <Heading type='h2'>{t('courses--faq-title')}</Heading>
          <div className={styles.faq}>
            {FAQ.map(item => (
              <details key={item} className={styles.faq_item}>
                <summary>{t(`courses--faq-${item}-q`)}</summary>
                <p>{t(`courses--faq-${item}-a`)}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 10. Final CTA */}
        <section className={styles.section}>
          <div className={styles.final}>
            <div className={styles.final_copy}>
              <Heading type='h2'>{t('courses--final-title')}</Heading>
              <Text type='big_paragraph' style={{ color: 'rgba(255,255,255,0.8)' }}>
                {t('courses--final-body')}
              </Text>
            </div>
            <div className={styles.actions}>
              {reserveButton}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default CoursesPage
