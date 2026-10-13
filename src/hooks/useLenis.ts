import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '../lib/gsap'

export function useLenis(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return

    // offset negativo: a rolagem para um pouco antes da seção,
    // para o título não ficar escondido embaixo da Navbar fixa
    const lenis = new Lenis({ anchors: { offset: -72 } })

    lenis.on('scroll', ScrollTrigger.update)

    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [enabled])
}