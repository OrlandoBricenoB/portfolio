import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const setup = () => {
  gsap.context(() => {
    // Scroll progress bar (not decorative motion, but hidden by CSS when reduced)
    const bar = document.querySelector<HTMLElement>('.site-scroll span')
    if (bar && !reduced) {
      gsap.set(bar, { scaleX: 0, transformOrigin: 'left center' })
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: self => { gsap.set(bar, { scaleX: self.progress }) },
      })
    }

    if (reduced) return

    const skip = (node: Element) => Boolean(node.closest('#stories'))
    // clamp() keeps the start inside the scrollable range, so a block sitting
    // at the bottom of the page (the footer) still fires. The tween is created
    // on enter only: a from() tween owned by ScrollTrigger gets rewound to
    // opacity 0 on refresh() after it has played once.
    const enter = (trigger: Element, start: string, play: () => void) => {
      ScrollTrigger.create({ trigger, start: `clamp(${start})`, once: true, onEnter: play })
    }

    // 1. Reveal on enter: fade + rise once, with stagger for grouped children
    const staggerParents = gsap.utils.toArray<HTMLElement>('[data-reveal-stagger]').filter(node => !skip(node))
    const staggered = new Set<Element>()

    staggerParents.forEach(parent => {
      const children = Array.from(parent.querySelectorAll<HTMLElement>(':scope > [data-reveal], :scope > * > [data-reveal]'))
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

    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(node => {
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
    gsap.utils.toArray<HTMLElement>('[data-pop]').forEach(node => {
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
    gsap.utils.toArray<HTMLElement>('[data-drop]').forEach(node => {
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
    gsap.utils.toArray<HTMLElement>('[data-hl]').forEach(node => {
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
    gsap.utils.toArray<HTMLElement>('[data-method-line]').forEach(node => {
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

  const refresh = () => ScrollTrigger.refresh()
  window.setTimeout(refresh, 350)
  window.addEventListener('load', refresh)
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setup)
} else {
  setup()
}
