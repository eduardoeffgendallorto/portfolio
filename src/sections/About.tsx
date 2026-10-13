import { useRef } from 'react'
import SectionHeading from '../components/SectionHeading'
import { site } from '../config/site'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const root = useRef<HTMLElement>(null)
  useReveal(root)

  const { paragraphs, facts } = site.about

  return (
    <section
      ref={root}
      id="sobre"
      aria-labelledby="sobre-title"
      className="relative px-6 py-28 md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="sobre-title"
          index="01"
          eyebrow="Sobre mim"
          title="Quem está por trás do código."
        />

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-7">
            {paragraphs.map((text) => (
              <p key={text} data-reveal>
                {text}
              </p>
            ))}
          </div>

          <aside
            data-reveal
            className="self-start rounded-2xl border border-line bg-panel/60 p-8 backdrop-blur-sm lg:col-span-4 lg:col-start-9"
          >
            <dl className="space-y-6">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-mist">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}