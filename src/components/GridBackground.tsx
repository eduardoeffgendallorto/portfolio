export default function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-deep),transparent_60%)]" />
      <div className="tech-grid absolute inset-0" />
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-electric/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan/10 blur-3xl" />
    </div>
  )
}