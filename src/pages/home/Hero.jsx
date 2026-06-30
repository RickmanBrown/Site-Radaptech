function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 lg:px-8"
    >
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
            Desenvolvimento de sistemas para empresas
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
              Sistemas inteligentes
            </span>{' '}
            para empresas que querem crescer com{' '}
            <span className="text-cyan-300">organização</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            A RadapTech desenvolve{' '}
            <span className="font-semibold text-cyan-300">
              sistemas personalizados
            </span>
            , sites e{' '}
            <span className="font-semibold text-blue-300">
              soluções digitais
            </span>{' '}
            para empresas, microempreendedores e negócios que precisam
            modernizar processos, reduzir tarefas manuais e ganhar{' '}
            <span className="font-semibold text-cyan-300">produtividade</span>.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:Radaptech@gmail.com"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 text-center font-bold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.18)] transition hover:scale-[1.02] hover:from-cyan-300 hover:to-blue-400"
            >
              Solicitar orçamento
            </a>

            <a
              href="#servicos"
              className="rounded-full border border-white/20 bg-white/[0.03] px-7 py-4 text-center font-bold text-white transition hover:border-cyan-400 hover:bg-cyan-400/5 hover:text-cyan-300"
            >
              Ver serviços
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 opacity-0 blur-2xl transition group-hover:opacity-100" />
              <div className="relative">
                <strong className="block text-2xl text-cyan-300">Web</strong>
                <span className="text-sm text-slate-400">
                  Sistemas online
                </span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 opacity-0 blur-2xl transition group-hover:opacity-100" />
              <div className="relative">
                <strong className="block text-2xl text-cyan-300">EPI</strong>
                <span className="text-sm text-slate-400">
                  Gestão de estoque
                </span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 opacity-0 blur-2xl transition group-hover:opacity-100" />
              <div className="relative">
                <strong className="block text-2xl text-cyan-300">
                  Sob medida
                </strong>
                <span className="text-sm text-slate-400">
                  Para seu negócio
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-400/10 backdrop-blur">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative rounded-[1.5rem] border border-cyan-400/10 bg-slate-900/90 p-5 shadow-[0_0_35px_rgba(34,211,238,0.06)] sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-slate-400">Painel RadapTech</p>
                  <h2 className="mt-1 text-xl font-bold text-white">
                    Estoque de{' '}
                    <span className="text-cyan-300">EPI</span>
                  </h2>
                </div>

                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.12)]">
                  Online
                </span>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="group rounded-2xl border border-white/5 bg-slate-800/80 p-5 transition hover:border-cyan-400/30 hover:bg-cyan-400/5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Luvas de proteção</span>
                    <strong className="text-cyan-300">124</strong>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-700">
                    <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.22)]" />
                  </div>
                </div>

                <div className="group rounded-2xl border border-white/5 bg-slate-800/80 p-5 transition hover:border-cyan-400/30 hover:bg-cyan-400/5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Capacetes</span>
                    <strong className="text-cyan-300">58</strong>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-700">
                    <div className="h-2 w-3/5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.22)]" />
                  </div>
                </div>

                <div className="group rounded-2xl border border-white/5 bg-slate-800/80 p-5 transition hover:border-cyan-400/30 hover:bg-cyan-400/5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">
                      Óculos de segurança
                    </span>
                    <strong className="text-cyan-300">91</strong>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-700">
                    <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.22)]" />
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 shadow-[0_0_22px_rgba(34,211,238,0.06)]">
                <p className="text-sm font-medium text-cyan-200">
                  Controle entradas, saídas, quantidades e movimentações de
                  equipamentos com mais{' '}
                  <span className="font-bold text-white">clareza</span> e{' '}
                  <span className="font-bold text-white">segurança</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-white/10 bg-slate-900/95 p-5 shadow-xl shadow-cyan-400/10 backdrop-blur sm:block">
            <p className="text-sm text-slate-400">Status</p>
            <p className="mt-1 font-bold text-cyan-300">
              Sistema em finalização
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero