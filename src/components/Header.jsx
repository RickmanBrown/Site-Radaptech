import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom' 
import Logo from './Logo'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  const links = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sistemas', href: '#epi' },
    { label: 'Processo', href: '#processo' },
    { label: 'Contato', href: '#contato' },
  ]

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {isHomePage ? (
          <Logo />
        ) : (
          <Link to="/">
            <Logo />
          </Link>
        )}

        {isHomePage && (
          <>
            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 lg:flex">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative transition hover:text-cyan-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-cyan-300 after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="mailto:radaptech@gmail.com"
              className="hidden rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-[0_0_22px_rgba(34,211,238,0.18)] transition hover:scale-[1.02] hover:from-cyan-300 hover:to-blue-400 lg:inline-flex"
            >
              Fale conosco
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white shadow-[0_0_18px_rgba(34,211,238,0.08)] transition hover:border-cyan-400/40 hover:text-cyan-300 lg:hidden"
              aria-label="Abrir menu"
            >
              <span className="text-2xl">{isOpen ? '×' : '☰'}</span>
            </button>
          </>
        )}

        {!isHomePage && (
          <a
            href="mailto:radaptech@gmail.com"
            className="hidden rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-[0_0_22px_rgba(34,211,238,0.18)] transition hover:scale-[1.02] hover:from-cyan-300 hover:to-blue-400 lg:inline-flex"
          >
            Fale com a equipe
          </a>
        )}

      </div>

      {isHomePage && isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 py-5 shadow-[0_20px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-4 text-slate-300">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl border border-transparent px-4 py-3 transition hover:border-cyan-400/20 hover:bg-cyan-400/5 hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}

            <a
              href="mailto:radaptech@gmail.com"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-center font-bold text-slate-950 shadow-[0_0_22px_rgba(34,211,238,0.18)] transition hover:from-cyan-300 hover:to-blue-400"
            >
              Fale conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header