import Logo from './Logo'

function Footer() {
  return (
    <footer className="relative border-t border-neutral-900 bg-neutral-950 px-6 py-12 font-sans lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        
        <div>
          <Logo />
        </div>

        <p className="text-sm font-light text-neutral-500">
          © {new Date().getFullYear()}{' '}
          <span className="font-normal text-blue-500">RadapTech</span>. Todos os direitos reservados.
        </p>
        
        <a
          href="mailto:radaptech@gmail.com"
          className="text-sm font-blue-500 text-neutral-400 transition-colors hover:text-blue-500"
        >
          radaptech@gmail.com
        </a>
        
      </div>
    </footer>
  )
}

export default Footer