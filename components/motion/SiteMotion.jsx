import { useRef } from 'react'
import useIsomorphicLayoutEffect from '../../hooks/useIsomorphicLayoutEffect'
import useTranslate from '../../hooks/useTranslate'

const SiteMotion = () => {
  const { ready, i18n } = useTranslate()
  const barRef = useRef(null)

  useIsomorphicLayoutEffect(() => {
    if (!ready) return undefined

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let ctx
    let cancelled = false
    let refreshTimer
    let refresh

    const setup = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      if (cancelled) return

      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        // Scroll progress bar (always on, it is not decorative motion)
        if (barRef.current && !reduced) {
          gsap.set(barRef.current, { scaleX: 0, transformOrigin: 'left center' })
          ScrollTrigger.create({
            start: 0,
            end: 'max',
            onUpdate: (self) => {
              gsap.set(barRef.current, { scaleX: self.progress })
            },
          })
        }

        if (reduced) return

        const skip = (node) => Boolean(node.closest('#stories'))
        // clamp() keeps the start inside the scrollable range, so a block
        // sitting at the bottom of the page (the footer) still fires.
        // The tween is created on enter only. A from() tween owned by
        // ScrollTrigger gets rewound to opacity 0 on refresh() after it has
        // already played once, which left the footer invisible.
        const enter = (trigger, start, play) => {
          ScrollTrigger.create({
            trigger,
            start: `clamp(${start})`,
            once: true,
            onEnter: play,
          })
        }

        // 1. Reveal on enter: fade + rise once, with stagger for grouped children
        const staggerParents = gsap.utils.toArray('[data-reveal-stagger]').filter(node => !skip(node))
        const staggered = new Set()

        staggerParents.forEach((parent) => {
          const children = Array.from(parent.querySelectorAll(':scope > [data-reveal], :scope > * > [data-reveal]'))
            .filter(child => child.closest('[data-reveal-stagger]') === parent)
          if (!children.length) return
          children.forEach(child => staggered.add(child))

          enter(parent, 'top 88%', () => {
            gsap.from(children, {
              y: 28,
              autoAlpha: 0,
              duration: 0.8,
              ease: 'power3.out',
              stagger: 0.08,
              clearProps: 'transform,opacity,visibility',
            })
          })
        })

        gsap.utils.toArray('[data-reveal]').forEach((node) => {
          if (skip(node) || staggered.has(node)) return
          const direction = node.getAttribute('data-reveal')
          const x = direction === 'left' ? -32 : direction === 'right' ? 32 : 0
          const y = x === 0 ? 24 : 0
          const delay = Number(node.getAttribute('data-reveal-delay') || 0)
          const start = node.getAttribute('data-reveal-start') || 'top 92%'

          enter(node, start, () => {
            gsap.from(node, {
              x,
              y,
              autoAlpha: 0,
              duration: 0.8,
              delay,
              ease: 'power3.out',
              clearProps: 'transform,opacity,visibility',
            })
          })
        })

        // 2. Stickers pop in with a little bounce
        gsap.utils.toArray('[data-pop]').forEach((node) => {
          if (skip(node)) return
          enter(node, 'top 94%', () => {
            gsap.from(node, {
              scale: 0.5,
              autoAlpha: 0,
              duration: 0.6,
              delay: 0.15,
              ease: 'back.out(2.2)',
              clearProps: 'transform,opacity,visibility',
            })
          })
        })

        // 3. Polaroids drop and settle
        gsap.utils.toArray('[data-drop]').forEach((node) => {
          enter(node, 'top 92%', () => {
            gsap.from(node, {
              y: -34,
              scale: 1.05,
              autoAlpha: 0,
              duration: 0.9,
              ease: 'power3.out',
              clearProps: 'transform,opacity,visibility',
            })
          })
        })

        // 4. Highlighter wipe behind keywords
        gsap.utils.toArray('[data-hl]').forEach((node) => {
          if (skip(node)) return
          enter(node, 'top 90%', () => {
            gsap.fromTo(node, { '--wipe': '0%' }, {
              '--wipe': '100%',
              duration: 0.7,
              delay: 0.25,
              ease: 'power2.inOut',
            })
          })
        })

        // 5. Method line draws itself
        gsap.utils.toArray('[data-method-line]').forEach((node) => {
          gsap.fromTo(node, { '--p': 0 }, {
            '--p': 1,
            ease: 'none',
            scrollTrigger: {
              trigger: node.parentElement,
              start: 'top 75%',
              end: 'bottom 60%',
              scrub: 0.5,
            },
          })
        })
      })

      refresh = () => ScrollTrigger.refresh()
      refreshTimer = window.setTimeout(refresh, 350)
      window.addEventListener('load', refresh)
    }

    setup()

    return () => {
      cancelled = true
      window.clearTimeout(refreshTimer)
      if (refresh) window.removeEventListener('load', refresh)
      ctx?.revert()
    }
  }, [ready, i18n.language])

  return (
    <div className="site-scroll" aria-hidden="true">
      <span ref={barRef} />
    </div>
  )
}

export default SiteMotion
