import { motion } from 'framer-motion';

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
    <section id="processo" className="relative bg-neutral-950 px-6 py-28 font-sans lg:px-12">
      <div className="mx-auto max-w-7xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            Como trabalhamos
          </span>

          <h2 className="mt-6 text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
            Do <span className="font-normal text-white">problema</span> à solução digital.
          </h2>

          <p className="mt-6 text-base font-light leading-relaxed text-neutral-400 sm:text-lg">
            Nosso processo é pensado para transformar uma{" "}
            <span className="text-blue-500 font-normal">necessidade real</span>{" "}
            em um sistema{" "}
            <span className="text-blue-500 font-normal">funcional</span>,{" "}
            <span className="text-blue-500 font-normal">objetivo</span> e fácil de usar.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group relative border-t border-neutral-800 pt-8 transition-colors hover:border-neutral-600"
            >
              <div className="relative">
                <span className="block text-4xl font-light text-neutral-800 transition-colors group-hover:text-neutral-400">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-xl font-normal text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm font-light leading-relaxed text-neutral-400">
                  {step.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default Process