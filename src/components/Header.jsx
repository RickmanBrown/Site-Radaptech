import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Logo from './Logo'

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="20" y2="12"></line>
    <line x1="4" y1="6" x2="20" y2="6"></line>
    <line x1="4" y1="18" x2="20" y2="18"></line>
  </svg>
)

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

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
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-neutral-950/80 backdrop-blur-md transition-all font-sans">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <div className="flex items-center">
          {isHomePage ? (
            <Logo />
          ) : (
            <Link to="/" className="transition-opacity hover:opacity-80">
              <Logo />
            </Link>
          )}
        </div>

        {isHomePage && (
          <>
            <nav className="hidden items-center gap-10 lg:flex">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-light tracking-wide text-neutral-400 transition-colors hover:text-blue-600"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="mailto:radaptech@gmail.com"
              className="hidden rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-transform hover:scale-105 lg:inline-flex"
            >
              Fale conosco
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-neutral-400 transition-colors hover:text-white lg:hidden"
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </>
        )}

        {!isHomePage && (
          <a
            href="mailto:radaptech@gmail.com"
            className="hidden rounded-full bg-white px-6 py-2 text-sm font-medium text-black transition-transform hover:scale-105 lg:inline-flex"
          >
            Fale com a equipe
          </a>
        )}
      </div>

      {isHomePage && isOpen && (
        <div className="absolute left-0 top-full w-full border-b border-white/5 bg-neutral-950/95 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col px-6 py-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-white/5 py-4 text-sm font-light tracking-wide text-neutral-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="mailto:radaptech@gmail.com"
              onClick={closeMenu}
              className="mt-6 inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
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