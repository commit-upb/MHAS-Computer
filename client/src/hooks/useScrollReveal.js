import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !ref.current) return

    const {
      y = 30,
      duration = 0.7,
      stagger = 0.1,
      delay = 0,
      children = true,
    } = options

    const ctx = gsap.context(() => {
      const elements = children ? ref.current.children : [ref.current]

      gsap.fromTo(
        elements,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [])

  return ref
}
