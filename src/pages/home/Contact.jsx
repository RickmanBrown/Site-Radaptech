import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contato" className="relative bg-neutral-950 px-6 py-28 font-sans lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            Contato
          </span>

          <h2 className="mt-6 text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
            Vamos criar uma <span className="text-blue-500 font-normal">solução</span> para sua empresa?
          </h2>

          <p className="mt-6 text-base font-light leading-relaxed text-neutral-400 sm:text-lg">
            Entre em contato com a Radaptech e conte o que sua empresa precisa{' '}
            <span className="text-blue-500 font-normal">organizar</span>,{' '}
            <span className="text-blue-500 font-normal">automatizar</span> ou{' '}
            <span className="text-blue-500 font-normal">apresentar melhor</span>.
          </p>

          <div className="mt-12">
            <p className="text-sm font-light text-neutral-500">E-mail direto</p>
            <a
              href="mailto:radaptech@gmail.com"
              className="mt-2 inline-block text-xl text-blue-500 font-normal transition-colors hover:text-neutral-400"
            >
              radaptech@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative grid gap-6"
        >
          <div>
            <label className="mb-3 block text-sm font-light text-neutral-400">
              Nome
            </label>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full rounded-xl border border-neutral-800 bg-transparent px-5 py-4 text-sm font-light text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-neutral-500 focus:bg-neutral-900/30"
            />
          </div>

          <div>
            <label className="mb-3 block text-sm font-light text-neutral-400">
              E-mail
            </label>
            <input
              type="email"
              placeholder="seuemail@exemplo.com"
              className="w-full rounded-xl border border-neutral-800 bg-transparent px-5 py-4 text-sm font-light text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-neutral-500 focus:bg-neutral-900/30"
            />
          </div>

          <div>
            <label className="mb-3 block text-sm font-light text-neutral-400">
              Mensagem
            </label>
            <textarea
              rows="4"
              placeholder="Conte um pouco sobre o que você precisa..."
              className="w-full resize-none rounded-xl border border-neutral-800 bg-transparent px-5 py-4 text-sm font-light text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-neutral-500 focus:bg-neutral-900/30"
            />
          </div>

          <a
            href="mailto:radaptech@gmail.com"
            className="mt-4 block w-full rounded-full bg-blue-600 px-6 py-4 text-center text-sm font-medium text-white transition-transform hover:scale-[1.02]"
          >
            Enviar mensagem por e-mail
          </a>
        </motion.form>
        
      </div>
    </section>
  )
}

export default Contact