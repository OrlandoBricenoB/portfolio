import { useLayoutEffect, useRef } from 'react'
import useTranslate from '../../hooks/useTranslate'

const SiteMotion = () => {
  const { ready, i18n } = useTranslate()
  const barRef = useRef(null)

  useLayoutEffect(() => {
    if (!ready) return undefined

    // const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    // if (media.matches) return undefined

    let ctx
    let cancelled = false
    let refreshTimer

    const setup = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      if (cancelled) return

      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        if (barRef.current) {
          gsap.set(barRef.current, { scaleX: 0, transformOrigin: 'left center' })
          ScrollTrigger.create({
            start: 0,
            end: 'max',
            onUpdate: (self) => {
              gsap.set(barRef.current, { scaleX: self.progress })
            },
          })
        }

        const nodes = gsap.utils.toArray('[data-reveal]').filter((node) => (
          !node.closest('#stories') && !node.closest('#presentation')
        ))

        nodes.forEach((node) => {
          const inAbout = Boolean(node.closest('#about'))
          const direction = node.getAttribute('data-reveal')
          const x = direction === 'left' ? (inAbout ? -18 : -28) : direction === 'right' ? (inAbout ? 18 : 28) : 0
          const y = x === 0 ? (inAbout ? 22 : 28) : (inAbout ? 0 : 8)
          const delay = Number(node.getAttribute('data-reveal-delay') || 0)

          if (inAbout) {
            gsap.from(node, {
              x,
              y,
              autoAlpha: 0,
              duration: 0.85,
              delay,
              ease: 'power2.out',
              clearProps: 'transform',
              scrollTrigger: {
                trigger: node,
                start: 'top 90%',
                once: true,
              },
            })
            return
          }

          gsap.fromTo(node, {
            x,
            y,
            autoAlpha: 0,
          }, {
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: node,
              start: 'top 94%',
              end: 'top 62%',
              scrub: 0.35,
            },
          })
        })
      })

      const refresh = () => ScrollTrigger.refresh()
      refreshTimer = window.setTimeout(refresh, 350)
      window.addEventListener('load', refresh)

      ctx._refresh = refresh
    }

    setup()

    return () => {
      cancelled = true
      window.clearTimeout(refreshTimer)
      if (ctx?._refresh) window.removeEventListener('load', ctx._refresh)
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
