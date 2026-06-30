function Contact() {
  return (
    <section id="contato" className="relative px-5 py-24 lg:px-8">
      <div className="relative mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_40px_rgba(34,211,238,0.06)] sm:p-10 lg:grid-cols-2 lg:p-14">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
            Contato
          </span>

          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
            Vamos criar uma{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
              solução
            </span>{' '}
            para sua empresa?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Entre em contato com a Radaptech e conte o que sua empresa precisa{' '}
            <span className="font-semibold text-cyan-300">organizar</span>,{' '}
            <span className="font-semibold text-blue-300">automatizar</span> ou{' '}
            <span className="font-semibold text-cyan-300">
              apresentar melhor
            </span>
            .
          </p>

          <div className="group relative mt-8 overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 transition hover:border-cyan-300/40 hover:bg-cyan-400/15">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/10 opacity-0 blur-2xl transition group-hover:opacity-100" />

            <div className="relative">
              <p className="text-sm text-slate-300">E-mail</p>
              <a
                href="mailto:radaptech@gmail.com"
                className="mt-2 block break-all text-xl font-bold text-cyan-300 hover:text-cyan-200"
              >
                radaptech@gmail.com
              </a>
            </div>
          </div>
        </div>

        <form className="relative rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6 shadow-[0_0_30px_rgba(15,23,42,0.5)] backdrop-blur">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative grid gap-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Nome
              </label>
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:bg-cyan-400/[0.03] focus:shadow-[0_0_20px_rgba(34,211,238,0.08)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                E-mail
              </label>
              <input
                type="email"
                placeholder="seuemail@exemplo.com"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:bg-cyan-400/[0.03] focus:shadow-[0_0_20px_rgba(34,211,238,0.08)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Mensagem
              </label>
              <textarea
                rows="5"
                placeholder="Conte um pouco sobre o que você precisa..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:bg-cyan-400/[0.03] focus:shadow-[0_0_20px_rgba(34,211,238,0.08)]"
              />
            </div>

            <a
              href="mailto:radaptech@gmail.com"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 text-center font-bold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.18)] transition hover:scale-[1.02] hover:from-cyan-300 hover:to-blue-400"
            >
              Enviar mensagem por e-mail
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact