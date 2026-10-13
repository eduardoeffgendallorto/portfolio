import Button from '../components/Button'
import GridBackground from '../components/GridBackground'
import { site } from '../config/site'

export default function Hero() {
  const { hero } = site

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh items-center overflow-hidden px-6 py-28 md:px-12"
    >
      <GridBackground />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
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