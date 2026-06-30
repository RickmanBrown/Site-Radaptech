import Logo from './Logo'

function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-5 py-10 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_35px_rgba(34,211,238,0.06)] md:flex-row md:items-center md:justify-between">
        <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative">
          <Logo />
        </div>

        <p className="relative text-sm text-slate-500">
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-cyan-300">RadapTech</span>. Todos
          os direitos reservados.
        </p>

        <a
          href="mailto:radaptech@gmail.com"
          className="relative text-sm font-medium text-cyan-300 transition hover:text-cyan-200 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.45)]"
        >
          radaptech@gmail.com
        </a>
      </div>
    </footer>
  )
}

export default Footer