import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const HOLD = 0.5

// Pinned, scroll-scrubbed story chapters. All copy arrives pre-translated as props.
const StoriesPin = ({ kicker, title, intro, hint, stories }) => {
  const pinRef = useRef(null)
  const timelineRef = useRef(null)
  const [active, setActive] = useState(0)
  const [step, setStep] = useState(0)

  useIsomorphicLayoutEffect(() => {
    if (!pinRef.current) return undefined

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
          gsap.set([frame, panel], { autoAlpha: index === 0 ? 1 : 0, y: 0 })
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

          timeline.addLabel(`story-${index}`, index)

          if (index > 0) {
            const previous = chapters[index - 1]
            timeline.to(previous.querySelector('.stories__frame'), { autoAlpha: 0, y: -28, duration: 0.42, ease: 'power1.in' }, index)
            timeline.to(previous.querySelector('.stories__panel'), { autoAlpha: 0, y: -36, duration: 0.42, ease: 'power1.in' }, index)
            timeline.fromTo(frame, { autoAlpha: 0, y: 36 }, { autoAlpha: 1, y: 0, duration: 0.48, ease: 'power2.out' }, index + 0.16)
            timeline.fromTo(panel, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out' }, index + 0.22)
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
  }, [])

  const approachingNext = active < stories.length - 1 && step > 0.42
  const nextStory = stories[Math.min(active + 1, stories.length - 1)]

  const goTo = (index) => {
    const timeline = timelineRef.current
    const trigger = timeline?.scrollTrigger
    if (!timeline || !trigger) return

    const label = timeline.labels[`story-${index}`] ?? 0
    const time = Math.min(timeline.duration() - 0.01, index === 0 ? 0 : label + 0.5)
    const top = trigger.start + (trigger.end - trigger.start) * (time / timeline.duration())
    window.scrollTo({ top, behavior: 'auto' })
  }

  return (
    <div className="stories__pin" ref={pinRef}>
      <div className="wrapper stories__layout">
        <header className="stories__header">
          <p className="stories__kicker">{kicker}</p>
          <h2 className="stories__title">{title}</h2>
          <p className="stories__intro">{intro}</p>
        </header>

        <div className="stories__stage">
          {stories.map((story, index) => (
            <article className={index === active ? 'stories__chapter is-active' : 'stories__chapter'} key={story.id}>
              <div className="stories__frame">
                <div className="stories__photo">
                  <picture>
                    <source srcSet={story.imageWebp} type="image/webp" />
                    <img
                      src={story.image}
                      alt={story.alt}
                      style={{ objectFit: story.fit, objectPosition: story.position }}
                    />
                  </picture>
                </div>
              </div>
              <div className="stories__panel" aria-hidden={index !== active ? true : undefined}>
                <p className="stories__index">
                  {String(index + 1).padStart(2, '0')}
                  <span> / {String(stories.length).padStart(2, '0')}</span>
                </p>
                <h3 className="stories__card_title">{story.title}</h3>
                <p>{story.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="stories__progress">
          <div className="stories__track" aria-hidden="true">
            <span />
          </div>
          <div className="stories__dots" role="group" aria-label={kicker}>
            {stories.map((story, index) => (
              <button
                key={story.id}
                type="button"
                className={[
                  'stories__dot',
                  index <= active ? 'is-active' : '',
                  approachingNext && index === active + 1 ? 'is-next' : '',
                ].filter(Boolean).join(' ')}
                aria-label={story.title}
                aria-current={index === active ? 'true' : undefined}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <p className={active === stories.length - 1 ? 'stories__hint is-done' : approachingNext ? 'stories__hint is-next' : 'stories__hint'}>
            {approachingNext ? nextStory.title : hint}
          </p>
        </div>
      </div>
    </div>
  )
}

export default StoriesPin
