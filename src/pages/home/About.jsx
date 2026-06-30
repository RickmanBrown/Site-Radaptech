function About() {
  return (
    <section id="sobre" className="relative px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative rounded-[1.5rem] border border-cyan-400/10 bg-slate-900/80 p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              Sobre a RadapTech
            </p>

            <h2 className="mt-5 text-3xl font-black text-white sm:text-5xl">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
                Tecnologia simples
              </span>
              , funcional e feita para resolver{' '}
              <span className="text-cyan-300">problemas reais</span>.
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              A Radaptech nasceu com o objetivo de desenvolver{' '}
              <span className="font-semibold text-cyan-300">
                sistemas personalizados
              </span>{' '}
              para empresas, microempreendedores e negócios que precisam{' '}
              <span className="font-semibold text-blue-300">
                organizar melhor suas informações
              </span>{' '}
              e modernizar seus processos.
            </p>
          </div>
        </div>

        <div>
          <p className="text-lg leading-9 text-slate-300">
            Nosso foco é criar{' '}
            <span className="font-semibold text-cyan-300">
              soluções digitais sob medida
            </span>
            , evitando sistemas complicados e cheios de recursos que o cliente
            não usa. A ideia é entender a necessidade do negócio e transformar
            essa necessidade em uma ferramenta{' '}
            <span className="font-semibold text-blue-300">clara</span>,{' '}
            <span className="font-semibold text-cyan-300">bonita</span> e{' '}
            <span className="font-semibold text-blue-300">eficiente</span>.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition group-hover:opacity-100" />

              <div className="relative">
                <h3 className="text-xl font-bold text-white transition group-hover:text-cyan-200">
                  Missão
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  Ajudar empresas a saírem de{' '}
                  <span className="font-semibold text-cyan-300">
                    processos manuais
                  </span>{' '}
                  e ganharem mais organização com{' '}
                  <span className="font-semibold text-blue-300">
                    sistemas digitais
                  </span>
                  .
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition group-hover:opacity-100" />

              <div className="relative">
                <h3 className="text-xl font-bold text-white transition group-hover:text-cyan-200">
                  Visão
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  Ser uma empresa reconhecida por entregar{' '}
                  <span className="font-semibold text-cyan-300">
                    soluções simples
                  </span>
                  , úteis e{' '}
                  <span className="font-semibold text-blue-300">
                    bem construídas
                  </span>
                  .
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5 sm:col-span-2">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition group-hover:opacity-100" />
              <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition group-hover:opacity-100" />

              <div className="relative">
                <h3 className="text-xl font-bold text-white transition group-hover:text-cyan-200">
                  Para quem criamos
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  Empresas, microempreendedores, equipes pequenas e negócios que
                  precisam de{' '}
                  <span className="font-semibold text-cyan-300">controle</span>
                  ,{' '}
                  <span className="font-semibold text-blue-300">gestão</span> e{' '}
                  <span className="font-semibold text-cyan-300">
                    presença digital
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About