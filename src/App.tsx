import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import { useLenis } from './hooks/useLenis'
import { useReducedMotion } from './hooks/useReducedMotion'
import About from './sections/About'
import Hero from './sections/Hero'
import Journey from './sections/Journey'

export default function App() {
  const reduced = useReducedMotion()
  useLenis(!reduced)

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
      </main>
    </>
  )
}