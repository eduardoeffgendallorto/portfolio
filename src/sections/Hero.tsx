import { useRef } from 'react'
import Button from '../components/Button'
import GridBackground from '../components/GridBackground'
import { site } from '../config/site'
import { gsap, useGSAP } from '../lib/gsap'

export default function Hero() {
  const { hero } = site
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // Tudo aqui só roda se a pessoa NÃO pediu menos movimento.
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Entrada cinematográfica
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

        tl.from('[data-hero="eyebrow"]', { autoAlpha: 0, x: -24, duration: 0.8 })
          .from('[data-hero="name"]', { autoAlpha: 0, y: 20, duration: 0.8 }, '-=0.5')
          .from(
            '[data-hero^="title"]',
            {
              clipPath: 'inset(0 0 100% 0)',
              yPercent: 60,
              duration: 1.1,
              stagger: 0.15,
              clearProps: 'clipPath',
            },
            '-=0.4',
          )
          .from('[data-hero="description"]', { autoAlpha: 0, y: 24, duration: 0.9 }, '-=0.6')
          .from(
            '[data-hero="actions"] > *',
            { autoAlpha: 0, y: 24, duration: 0.7, stagger: 0.12 },
            '-=0.6',
          )
          .from('[data-hero="depth"]', { autoAlpha: 0, duration: 1.2 }, 0.3)
          .from('.depth-layer', { opacity: 0, duration: 1, stagger: 0.18 }, 0.4)

        // Parallax: camadas se movem em velocidades diferentes ao rolar
        const scrollConfig = {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
        gsap.to('[data-hero="depth"]', {
          yPercent: -18,
          ease: 'none',
          scrollTrigger: scrollConfig,
        })
        gsap.to('[data-hero="content"]', {
          yPercent: -6,
          ease: 'none',
          scrollTrigger: scrollConfig,
        })
      })

      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh items-center overflow-hidden px-6 py-28 md:px-12"
    >
      <GridBackground />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-12">
        <div data-hero="content" className="lg:col-span-7">
          <p
            data-hero="eyebrow"
            className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan"
          >
            <span className="h-px w-10 bg-cyan" aria-hidden="true" />
            {site.role} · {site.university}
          </p>

          <h1 id="hero-title">
            <span
              data-hero="name"
              className="mb-6 block text-xl font-medium text-mist md:text-2xl"
            >
              {site.name}
            </span>
            <span
              data-hero="title-lead"
              className="block text-[clamp(2.5rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-tight"
            >
              {hero.titleLead}
            </span>
            <span
              data-hero="title-accent"
              className="block bg-gradient-to-r from-electric to-cyan bg-clip-text text-[clamp(2.5rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-tight text-transparent"
            >
              {hero.titleAccent}
            </span>
          </h1>

          <p
            data-hero="description"
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
          >
            {hero.description}
          </p>

          <div data-hero="actions" className="mt-10 flex flex-wrap gap-4">
            <Button href={hero.ctaProjects.href}>{hero.ctaProjects.label}</Button>
            <Button href={hero.ctaJourney.href} variant="ghost">
              {hero.ctaJourney.label}
            </Button>
          </div>
        </div>

        <div
          data-hero="depth"
          aria-hidden="true"
          className="depth-stage relative mx-auto aspect-square w-full max-w-md lg:col-span-5"
        >
          <div className="depth-scene">
            <div className="depth-layer" />
            <div className="depth-layer" />
            <div className="depth-layer" />
            <div className="depth-layer" />
          </div>
        </div>
      </div>
    </section>
  )
}