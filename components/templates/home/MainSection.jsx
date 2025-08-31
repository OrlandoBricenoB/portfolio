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
import Github from '../../atoms/icons/Github'
import Email from '../../atoms/icons/Email'

/*
  * IMAGES
*/
import profilePresentation from '../../../assets/images/profile.webp'

/*
  * STYLES
*/
import styles from '../../../styles/pages/home/home.module.css'
import Image from 'next/image'

const MainSection = ({ recommendations = [] }) => {
  const { t } = useTranslate()

  return (
    <div className={styles.home_container} id='presentation'>
      {/* Social Buttons */}
      <aside className={styles.social_buttons}>
        <SocialButton Icon={Linkedin} to='https://linkedin.com/in/orlandobricenob'>
          <Text type='small_paragraph' style={{ textAlign: 'center' }}>LinkedIn</Text>
        </SocialButton>
        <SocialButton Icon={Github} to='https://github.com/OrlandoBricenoB'>
          <Text type='small_paragraph' style={{ textAlign: 'center' }}>Github</Text>
        </SocialButton>
      </aside>
      {/* Content */}
      <div className={styles.home__content}>
        {/* Title */}
        <div>
          <Heading type='h1' className={styles.home__title}>{
            t('common--title')
          }</Heading>
          <Text type='big_paragraph' className={styles.home__title}>{
            t('common--specialization')
          }</Text>
          {/* <div className={styles.home__rating}>
            <Multirating filled={5} hoverLess />
            <Link
              style={{ cursor: 'pointer' }}
              to='#recommendations'
              // onClick={() => { alerready && t('Open modal of recommendations') }}
            >{recommendations.length} {
              t('common--recommendations')
            }</Link>
          </div> */}
        </div>

        {/* Image Mobile */}
        <figure className={`${styles.profile_presentation} ${styles['profile_presentation--mobile']}`}>
          <Image
            src={profilePresentation.src}
            width={1080}
            height={1080}
            className={styles.profile_presentation__image}
            priority
            alt='Orlando Briceño'
          />
          <figcaption className={styles.profile_presentation__caption}>
            {t('common--full-name')}<br />🇻🇪 Venezuela
          </figcaption>
        </figure>

        {/* Bio */}
        <Text type='paragraph'>
          {t('main--greetings')}<br /><br />
          {t('main--bio-1')}<br /><br />
          {t('main--bio-2')}
        </Text>

        {/* Presentation Video */}
        {/* <Container className={styles.home__presentation}>
          <div style={{ display: 'flex', borderRadius: '4px 0 0 4px' }}>
            <Image src={profilePresentation.src} style={{
              width: '100%',
              aspectRatio: '16 / 9',
              borderRadius: '4px 0 0 4px',
              objectFit: 'cover'
            }} />
          </div>
          <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Text type='big_paragraph' style={{ margin: 0, marginBottom: '.5rem' }}>
              {t('main--presentation-title')}
            </Text>
            <Text type='paragraph' style={{
              color: '#8E92C2',
              display: 'flex',
              alignItems: 'center',
              gap: '.35rem',
              margin: '0'
            }}>
              <Clock color='#8E92C2' /> 00:30
            </Text>
          </div>
        </Container> */}

        {/* CTA */}
        <div className={styles.home__cta}>
          <Button
            type='outlined'
            Icon={<Email color='#21c2e1' />}
            componentElement='a'
            href='mailto:orlando@gadmin.app'
            target='_blank'
            data-sln-event="user: send email"
          >{t('common--cta-email')}</Button>
        </div>
      </div>
      {/* Image */}
      <figure className={styles.profile_presentation}>
        <Image
          src={profilePresentation.src}
          width={1080}
          height={1080}
          className={styles.profile_presentation__image}
          priority
          alt='Orlando Briceño'
        />
        <figcaption className={styles.profile_presentation__caption}>
          Orlando Jose Briceño Blanco<br />
          🇻🇪 Venezuela
        </figcaption>
      </figure>
    </div>
  )
}

export default MainSection
