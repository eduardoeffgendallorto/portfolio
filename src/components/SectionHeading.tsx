type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  id: string
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  id,
}: SectionHeadingProps) {
  return (
    <header data-reveal className="mb-14 max-w-3xl md:mb-20">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan">
        <span>{index}</span>
        <span className="h-px w-10 bg-cyan" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
      >
        {title}
      </h2>
    </header>
  )
}