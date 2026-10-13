import { useState } from 'react'
import { site } from '../config/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-void/70 backdrop-blur-md">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12"
      >
        <a
          href="#inicio"
          className="font-mono text-sm tracking-[0.2em] text-cyan"
        >
          {site.initials}
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-line px-4 py-1.5 text-sm text-mist md:hidden"
        >
          {open ? 'Fechar' : 'Menu'}
        </button>

        <ul
          id="menu-principal"
          className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col gap-1 border-b border-line bg-void/95 px-6 py-4 md:static md:flex md:flex-row md:gap-8 md:border-0 md:bg-transparent md:p-0`}
        >
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted transition-colors hover:text-cyan"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}