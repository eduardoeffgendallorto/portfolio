import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'

export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        bar.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3,
          },
        },
      )
    },
    { scope: bar },
  )

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-0.5 bg-line/40"
    >
      <div
        ref={bar}
        className="h-full origin-left bg-gradient-to-r from-electric to-cyan"
      />
    </div>
  )
}