const steps = [
  {
    title: 'Entendimento',
    description:
      'Conversamos para entender o problema, o tipo de negócio e o que o sistema precisa resolver.',
  },
  {
    title: 'Planejamento',
    description:
      'Organizamos as funcionalidades, telas e prioridades para criar uma solução clara e viável.',
  },
  {
    title: 'Desenvolvimento',
    description:
      'Construímos o sistema com foco em usabilidade, organização, responsividade e funcionamento.',
  },
  {
    title: 'Entrega e ajustes',
    description:
      'Apresentamos a solução, fazemos ajustes necessários e orientamos o cliente no uso.',
  },
]

function Process() {
  return (
    <section id="processo" className="relative px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
            Como trabalhamos
          </span>

          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
            Do{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
              problema
            </span>{' '}
            à solução digital.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Nosso processo é pensado para transformar uma{' '}
            <span className="font-semibold text-cyan-300">
              necessidade real
            </span>{' '}
            em um sistema{' '}
            <span className="font-semibold text-blue-300">funcional</span>,{' '}
            <span className="font-semibold text-cyan-300">objetivo</span> e
            fácil de usar.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition group-hover:opacity-100" />
              <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition group-hover:opacity-100" />

              <div className="relative">
                <span className="text-5xl font-black text-cyan-400/20 transition group-hover:text-cyan-400/35">
                  {index + 1}
                </span>

                <h3 className="mt-5 text-xl font-bold text-white transition group-hover:text-cyan-200">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process