import { useRef } from 'react'
import SectionHeading from '../components/SectionHeading'
import { timeline } from '../content/timeline'
import { useReveal } from '../hooks/useReveal'
import { gsap, useGSAP } from '../lib/gsap'

export default function Journey() {
  const root = useRef<HTMLElement>(null)
  const list = useRef<HTMLOListElement>(null)
  const line = useRef<HTMLDivElement>(null)

  useReveal(root)

  // A linha ciano "preenche" conforme você rola pela lista
  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          line.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: list.current,
              start: 'top 70%',
              end: 'bottom 70%',
              scrub: true,
            },
          },
        )
      })

      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      id="trajetoria"
      aria-labelledby="trajetoria-title"
      className="relative px-6 py-28 md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="trajetoria-title"
          index="02"
          eyebrow="Trajetória"
          title="Da lógica aos projetos."
        />

        <ol ref={list} className="relative">
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 h-full w-px bg-line"
          />
          <div
            ref={line}
            aria-hidden="true"
            className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-electric to-cyan"
          />

          {timeline.map((item) => (
            <li
              key={item.step}
              data-reveal
              className="relative max-w-3xl pb-16 pl-10 last:pb-0 md:pl-16 md:even:ml-24"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_12px_var(--color-cyan)] md:even:-left-[101px]"
              />
              <p className="font-mono text-sm text-cyan">{item.step}</p>
              <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                {item.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}