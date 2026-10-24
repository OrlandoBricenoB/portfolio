import { useRef, useState } from 'react'
import useIsomorphicLayoutEffect from '../../../hooks/useIsomorphicLayoutEffect'
import useTranslate from '../../../hooks/useTranslate'
import Heading from '../../atoms/texts/Heading'
import Text from '../../atoms/texts/Text'
import Image from 'next/image'

import destroyedBuildings from '../../../assets/images/stories/destroyed-buildings.jpg'
import destroyedBuildingsWebp from '../../../assets/images/stories/destroyed-buildings.webp'
import bringingLoveToKids from '../../../assets/images/stories/bringing-love-to-kids.jpg'
import bringingLoveToKidsWebp from '../../../assets/images/stories/bringing-love-to-kids.webp'
import wck from '../../../assets/images/stories/wck.jpg'
import wckWebp from '../../../assets/images/stories/wck.webp'
import barber from '../../../assets/images/stories/barber.jpg'
import barberWebp from '../../../assets/images/stories/barber.webp'

const stories = [
  {
    image: destroyedBuildings,
    imageWebp: destroyedBuildingsWebp,
    titleKey: 'stories--zone-title',
    bodyKey: 'stories--zone-body',
    altKey: 'stories--zone-alt',
    fit: 'cover',
    position: 'center',
  },
  {
    image: bringingLoveToKids,
    imageWebp: bringingLoveToKidsWebp,
    titleKey: 'stories--kids-title',
    bodyKey: 'stories--kids-body',
    altKey: 'stories--kids-alt',
    fit: 'contain',
    position: 'center',
  },
  {
    image: wck,
    imageWebp: wckWebp,
    titleKey: 'stories--wck-title',
    bodyKey: 'stories--wck-body',
    altKey: 'stories--wck-alt',
    fit: 'cover',
    position: 'center 15%',
  },
  {
    image: barber,
    imageWebp: barberWebp,
    titleKey: 'stories--barber-title',
    bodyKey: 'stories--barber-body',
    altKey: 'stories--barber-alt',
    fit: 'cover',
    position: 'center',
  },
]

const HOLD = 0.5

const StoriesSection = () => {
  const { t, ready, i18n } = useTranslate()
  const pinRef = useRef(null)
  const timelineRef = useRef(null)
  const [active, setActive] = useState(0)
  const [step, setStep] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useIsomorphicLayoutEffect(() => {
    if (!ready || !pinRef.current) return undefined

    // const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    // setReducedMotion(media.matches)
    // if (media.matches) return undefined

      let ctx
      let cancelled = false
      let alive = true

    const setup = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      if (cancelled || !pinRef.current) return

      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        const chapters = gsap.utils.toArray('.stories__chapter')
        const count = chapters.length

        chapters.forEach((chapter, index) => {
          const frame = chapter.querySelector('.stories__frame')
          const panel = chapter.querySelector('.stories__panel')
          const certificate = chapter.querySelector('.stories__certificate')
          gsap.set([frame, panel], { autoAlpha: index === 0 ? 1 : 0, y: 0 })
          if (certificate) {
            gsap.set(certificate, {
              autoAlpha: 0,
              scale: 0.22,
              transformOrigin: 'top left',
            })
          }
        })

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: pinRef.current,
            start: 'top top',
            end: () => `+=${window.innerHeight * (count + HOLD) * 0.6}`,
            pin: true,
            scrub: 0.55,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (!alive || !pinRef.current) return
              const time = Math.max(0, (self.animation ? self.animation.time() : 0) - HOLD)
              let index = 0
              for (let i = 1; i < count; i += 1) {
                if (time >= i + 0.18) index = i
              }
              const into = Math.max(0, Math.min(1, time - index))
              pinRef.current.style.setProperty('--stories-progress', String(self.progress))
              pinRef.current.style.setProperty('--story-step', String(into))
              setActive((current) => (current === index ? current : index))
              setStep((current) => (Math.abs(current - into) < 0.04 ? current : into))
            },
          },
        })

        chapters.forEach((chapter, index) => {
          const frame = chapter.querySelector('.stories__frame')
          const panel = chapter.querySelector('.stories__panel')
          const certificate = chapter.querySelector('.stories__certificate')

          timeline.addLabel(`story-${index}`, index)

          if (index > 0) {
            const previous = chapters[index - 1]
            timeline.to(previous.querySelector('.stories__frame'), {
              autoAlpha: 0,
              y: -28,
              duration: 0.42,
              ease: 'power1.in',
            }, index)
            timeline.to(previous.querySelector('.stories__panel'), {
              autoAlpha: 0,
              y: -36,
              duration: 0.42,
              ease: 'power1.in',
            }, index)
            timeline.fromTo(frame, {
              autoAlpha: 0,
              y: 36,
            }, {
              autoAlpha: 1,
              y: 0,
              duration: 0.48,
              ease: 'power2.out',
            }, index + 0.16)
            timeline.fromTo(panel, {
              autoAlpha: 0,
              y: 40,
            }, {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
              ease: 'power2.out',
            }, index + 0.22)
          }

          if (certificate) {
            timeline.fromTo(certificate, {
              autoAlpha: 0,
              scale: 0.22,
            }, {
              autoAlpha: 1,
              scale: 1,
              duration: 0.62,
              ease: 'power2.out',
            }, index + 0.42)
          }
        })

        // Hold the first story on screen for the first stretch of scroll so it is
        // always what the viewer sees on arrival, even after a fast scroll.
        timeline.shiftChildren(HOLD, true)
        timeline.to({}, { duration: HOLD }, 0)
        timeline.to({}, { duration: 0.4 })
        timelineRef.current = timeline
      }, pinRef)

      requestAnimationFrame(() => ScrollTrigger.refresh())
    }

    setup()

    return () => {
      cancelled = true
      alive = false
      timelineRef.current = null
      ctx?.revert()
    }
  }, [ready, i18n.language])

  const approachingNext = !reducedMotion && active < stories.length - 1 && step > 0.42
  const nextStory = stories[Math.min(active + 1, stories.length - 1)]

  const goTo = (index) => {
    const timeline = timelineRef.current
    const trigger = timeline?.scrollTrigger
    if (!timeline || !trigger) return

    const label = timeline.labels[`story-${index}`] ?? 0
    const chapterHasCertificate = Boolean(stories[index]?.certificate)
    const offset = chapterHasCertificate ? 0.9 : 0.5
    const time = Math.min(timeline.duration() - 0.01, index === 0 ? 0 : label + offset)
    const top = trigger.start + (trigger.end - trigger.start) * (time / timeline.duration())
    window.scrollTo({ top, behavior: 'auto' })
  }

  return (
    <section className="stories" id="stories">
      <div className="stories__pin" ref={pinRef}>
        <div className="wrapper stories__layout">
          <header className="stories__header">
            <Text type="big_paragraph" className="stories__kicker">
              {t('stories--kicker')}
            </Text>
            <Heading type="h2" className="stories__title">
              {t('stories--title')}
            </Heading>
            <Text type="paragraph" className="stories__intro">
              {t('stories--intro')}
            </Text>
          </header>

          <div className="stories__stage">
            {stories.map((story, index) => (
              <article
                className={index === active ? 'stories__chapter is-active' : 'stories__chapter'}
                key={story.titleKey}
              >
                <div className="stories__frame">
                  <div className="stories__photo">
                    {story.imageWebp ? (
                      <picture>
                        <source srcSet={story.imageWebp.src} type="image/webp" />
                        <img
                          src={story.image.src}
                          alt={t(story.altKey)}
                          style={{ objectFit: story.fit, objectPosition: story.position }}
                        />
                      </picture>
                    ) : (
                      <Image
                        src={story.image}
                        alt={t(story.altKey)}
                        fill
                        sizes="(max-width: 800px) 100vw, 58vw"
                        style={{ objectFit: story.fit, objectPosition: story.position }}
                        priority={index === 0}
                      />
                    )}
                  </div>
                  {story.certificate && (
                    <div className="stories__certificate">
                      <picture>
                        <source srcSet={story.certificateWebp.src} type="image/webp" />
                        <img
                          src={story.certificate.src}
                          alt={t(story.certificateAltKey)}
                          width={story.certificate.width}
                          height={story.certificate.height}
                        />
                      </picture>
                    </div>
                  )}
                </div>
                <div className="stories__panel" aria-hidden={!reducedMotion && index !== active ? true : undefined}>
                  <p className="stories__index">
                    {String(index + 1).padStart(2, '0')}
                    <span> / {String(stories.length).padStart(2, '0')}</span>
                  </p>
                  <Heading type="h3" className="stories__card_title">
                    {t(story.titleKey)}
                  </Heading>
                  <Text type="paragraph">{t(story.bodyKey)}</Text>
                </div>
              </article>
            ))}
          </div>

          <div className="stories__progress">
            <div className="stories__track" aria-hidden="true">
              <span />
            </div>
            <div className="stories__dots" role="group" aria-label={t('stories--kicker')}>
              {stories.map((story, index) => (
                <button
                  key={story.titleKey}
                  type="button"
                  className={[
                    'stories__dot',
                    index <= active ? 'is-active' : '',
                    approachingNext && index === active + 1 ? 'is-next' : '',
                  ].filter(Boolean).join(' ')}
                  aria-label={t(story.titleKey)}
                  aria-current={index === active ? 'true' : undefined}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
            <p className={
              active === stories.length - 1
                ? 'stories__hint is-done'
                : approachingNext
                  ? 'stories__hint is-next'
                  : 'stories__hint'
            }>
              {approachingNext ? t(nextStory.titleKey) : t('stories--hint')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoriesSection
