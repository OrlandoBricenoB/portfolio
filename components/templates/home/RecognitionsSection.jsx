import { useLayoutEffect, useRef } from 'react'
import useTranslate from '../../../hooks/useTranslate'
import Heading from '../../atoms/texts/Heading'
import Text from '../../atoms/texts/Text'

import amdaCertificate from '../../../assets/images/amda-certificate.png'
import amdaCertificateWebp from '../../../assets/images/amda-certificate.webp'
import gvpCertificate from '../../../assets/images/gvp-certificate.png'
import gvpCertificateWebp from '../../../assets/images/gvp-certificate.webp'
import mcdonaldsCertificate from '../../../assets/images/mcdonalds-certificate.png'
import mcdonaldsCertificateWebp from '../../../assets/images/mcdonalds-certificate.webp'

import holdingAmda from '../../../assets/images/holding-amda.png'
import holdingAmdaWebp from '../../../assets/images/holding-amda.webp'
import holdingGvp from '../../../assets/images/holding-gvp.png'
import holdingGvpWebp from '../../../assets/images/holding-gvp.webp'
import holdingMcdonalds from '../../../assets/images/holding-mcdonalds.png'
import holdingMcdonaldsWebp from '../../../assets/images/holding-mcdonalds.webp'

const recognitions = [
  {
    image: amdaCertificate,
    imageWebp: amdaCertificateWebp,
    holding: holdingAmda,
    holdingWebp: holdingAmdaWebp,
    titleKey: 'recognitions--amda-title',
    bodyKey: 'recognitions--amda-body',
    altKey: 'recognitions--amda-certificate-alt',
    holdingAltKey: 'stories--amda-alt',
  },
  {
    image: gvpCertificate,
    imageWebp: gvpCertificateWebp,
    holding: holdingGvp,
    holdingWebp: holdingGvpWebp,
    titleKey: 'recognitions--gvp-title',
    bodyKey: 'recognitions--gvp-body',
    altKey: 'recognitions--gvp-certificate-alt',
    holdingAltKey: 'stories--gvp-alt',
  },
  {
    image: mcdonaldsCertificate,
    imageWebp: mcdonaldsCertificateWebp,
    holding: holdingMcdonalds,
    holdingWebp: holdingMcdonaldsWebp,
    titleKey: 'recognitions--mcdonalds-title',
    bodyKey: 'recognitions--mcdonalds-body',
    altKey: 'recognitions--mcdonalds-certificate-alt',
    holdingAltKey: 'stories--mcdonalds-alt',
  },
]

const RecognitionsSection = () => {
  const { t, ready, i18n } = useTranslate()
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    if (!ready || !sectionRef.current) return undefined

    let ctx
    let cancelled = false

    const setup = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      if (cancelled || !sectionRef.current) return

      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        gsap.utils.toArray('.recognitions__stage').forEach((stage) => {
          const flat = stage.querySelector('.recognitions__flat')
          const person = stage.querySelector('.recognitions__person')

          // Scrubbed one-shot timeline: no repeat, no yoyo, no infinite tweens.
          const timeline = gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              trigger: stage,
              start: 'top 85%',
              end: 'top 25%',
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          })

          timeline
            .fromTo(person, { yPercent: 55, autoAlpha: 0, scale: 0.9 }, {
              yPercent: 0,
              autoAlpha: 1,
              scale: 1,
              transformOrigin: '50% 100%',
              duration: 1,
            }, 0)
            .fromTo(flat, { scale: 1, autoAlpha: 1 }, {
              scale: 0.94,
              autoAlpha: 0.35,
              duration: 1,
            }, 0)
        })
      }, sectionRef)

      requestAnimationFrame(() => ScrollTrigger.refresh())
    }

    setup()

    return () => {
      cancelled = true
      ctx?.revert()
    }
  }, [ready, i18n.language])

  return (
    <section className="recognitions" id="recognitions" ref={sectionRef}>
      <div className="wrapper">
        <header className="recognitions__header" data-reveal="up">
          <Text type="big_paragraph" className="recognitions__kicker">
            {t('recognitions--kicker')}
          </Text>
          <Heading type="h2" className="recognitions__title">
            {t('recognitions--title')}
          </Heading>
          <Text type="paragraph" className="recognitions__intro">
            {t('recognitions--intro')}
          </Text>
        </header>

        <div className="recognitions__grid">
          {recognitions.map((item) => (
            <article className="recognitions__card" key={item.titleKey}>
              <div className="recognitions__stage">
                <picture className="recognitions__flat">
                  <source srcSet={item.imageWebp.src} type="image/webp" />
                  <img
                    src={item.image.src}
                    alt={t(item.altKey)}
                    width={item.image.width}
                    height={item.image.height}
                    loading="lazy"
                  />
                </picture>
                <picture className="recognitions__person">
                  <source srcSet={item.holdingWebp.src} type="image/webp" />
                  <img
                    src={item.holding.src}
                    alt={t(item.holdingAltKey)}
                    width={item.holding.width}
                    height={item.holding.height}
                    loading="lazy"
                  />
                </picture>
              </div>
              <Heading type="h3" className="recognitions__card_title">
                {t(item.titleKey)}
              </Heading>
              <Text type="paragraph" className="recognitions__card_body">
                {t(item.bodyKey)}
              </Text>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecognitionsSection
