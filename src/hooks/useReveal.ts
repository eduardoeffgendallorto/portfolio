import type { RefObject } from 'react'
import { gsap, useGSAP } from '../lib/gsap'

// Revela, ao rolar, todo elemento marcado com data-reveal dentro da seção.
export function useReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const items = scope.current?.querySelectorAll<HTMLElement>('[data-reveal]')

        items?.forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: 40,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          })
        })
      })

      return () => mm.revert()
    },
    { scope },
  )
}