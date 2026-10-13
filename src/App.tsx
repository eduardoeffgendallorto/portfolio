import ScrollProgress from './components/ScrollProgress'
import { useLenis } from './hooks/useLenis'
import { useReducedMotion } from './hooks/useReducedMotion'
import Hero from './sections/Hero'

export default function App() {
  const reduced = useReducedMotion()

  // Rolagem suave só para quem não pediu menos movimento
  useLenis(!reduced)

  return (
    <>
      <ScrollProgress />
      <main>
        <Hero />
      </main>
    </>
  )
}