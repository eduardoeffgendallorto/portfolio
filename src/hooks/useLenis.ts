import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '../lib/gsap'

export function useLenis(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return

    const lenis = new Lenis({ anchors: true })

    // 1) Cada rolagem do Lenis avisa o ScrollTrigger.
    lenis.on('scroll', ScrollTrigger.update)

    // 2) O ticker do GSAP passa a comandar o Lenis (um único loop).
    //    O GSAP conta em segundos, o Lenis em milissegundos.
    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [enabled])
}