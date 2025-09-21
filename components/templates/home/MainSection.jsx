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
import Instagram from '../../atoms/icons/Instagram'
import Github from '../../atoms/icons/Github'
import WhatsApp from '../../atoms/icons/WhatsApp'

/*
  * IMAGES
*/
import bgPresentation from '../../../assets/images/bg-presentation.webp'
import logoGadmin from '../../../assets/images/logo-no-frame-light.webp'

/*
  * STYLES
*/
import styles from '../../../styles/pages/home/home.module.css'
import Image from 'next/image'
import Email from '../../atoms/icons/Email'

const MainSection = ({ recommendations = [] }) => {
  const { t } = useTranslate()

  return (
    <div 
      className={styles.home_container} 
      id='presentation'
      style={{
        backgroundImage: `url(${bgPresentation.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <div
        className={'wrapper'}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Content */}
        <div className={styles.home__content_container}>
          <div className={styles.home__content}>
            {/* Title */}
            <div>
              <Text type='big_paragraph' className={styles.home__specialization}>{
                '| ' + t('common--specialization') + ' |'
              }</Text>
              <Heading type='h1' className={styles.home__title}>{
                t('common--title')
              }</Heading>
            </div>

            {/* Bio */}
            <Text type='paragraph' style={{ fontSize: '1.2rem' }}>
              {t('main--greetings')}<br /><br />
              {t('main--bio-1')}<br /><br />
              {t('main--bio-2')}
            </Text>

            {/* CTA */}
            <div className={styles.home__cta} style={{ display: 'flex', gap: '1rem' }}>
              <Button
                type='primary'
                Icon={<WhatsApp size='32' color='#070a2b' />}
                componentElement='a'
                href='https://wa.me/584121689393?text=Hey%2C%20Orlando.%20Tengo%20una%20idea%20s%C3%BAper%20potente%20y%20quiero%20compartirla%20contigo.'
                target='_blank'
                data-sln-event="user: send whatsapp"
              >
                {t('common--cta-whatsapp')}
              </Button>
              <Button
                type='outlined'
                Icon={<Email color='#21c2e1' size='32' />}
                componentElement='a'
                href='mailto:orlando@gadmin.app'
                target='_blank'
                className={styles.home__cta_email}
                aria-label='Enviar email a Orlando Briceno'
                style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                data-sln-event="user: send email"
              >
                <span style={{ marginLeft: '0.5rem', fontWeight: 500, color: '#21c2e1' }}>
                  {'Email'}
                </span>
              </Button>
            </div>
          </div>
          
          {/* Statistics */}
          <div className={styles.home__statistics}>
            <a
              href="https://gadmin.app/"
              target="_blank"
              className={styles.gadmin_logo_container}
              aria-label="Ir a Gadmin.app"
            >
              <div className={styles.gadmin_logo}>
                <Image
                  src={logoGadmin}
                  alt="Logo Gadmin"
                  width={64}
                  height={64}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: '100%',
                    background: 'transparent',
                  }}
                />
              </div>
            </a>
            <div className={styles.home__statistics_item}>
              <Text type='big_paragraph' className={styles.statistics_number}>15</Text>
              <Text type='paragraph' className={styles.statistics_description}>{t('common--experience-years')}</Text>
            </div>
            <div className={styles.home__statistics_item} style={{ marginTop: '2rem' }}>
              <Text type='big_paragraph' className={styles.statistics_number}>10+</Text>
              <Text type='paragraph' className={styles.statistics_description}>{t('common--done-projects')}</Text>
            </div>
          </div>
        </div>
        
        {/* Social Buttons moved to bottom right */}
        <div
          className={styles.social_buttons}
          style={{
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <div></div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
            <SocialButton Icon={Linkedin} to='https://linkedin.com/in/orlandobricenob' />
            <SocialButton Icon={Instagram} to='https://instagram.com/orlandobricenob' />
            <SocialButton Icon={Github} to='https://github.com/OrlandoBricenoB' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection

