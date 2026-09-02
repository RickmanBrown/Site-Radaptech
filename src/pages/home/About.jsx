import { motion } from 'framer-motion';

function About() {
  return (
    <section id="sobre" className="relative bg-neutral-950 px-6 py-28 font-sans lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            Sobre a RadapTech
          </span>

          <h2 className="mt-6 text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
            Tecnologia simples, funcional e feita para resolver{" "}
            <span className="font-normal text-white-500 ">problemas reais</span>.
          </h2>

          <p className="mt-6 text-base font-light leading-relaxed text-neutral-400 sm:text-lg">
            A Radaptech nasceu com o objetivo de desenvolver{" "}
            <span className="text-blue-500 font-normal">sistemas personalizados</span>{" "}
            para empresas e negócios que precisam{" "}
            <span className="text-blue-500 font-normal">organizar melhor suas informações</span>{" "}
            e modernizar seus processos.
          </p>
        </motion.div>

        <div>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-base font-light leading-relaxed text-neutral-400 sm:text-lg"
          >
            Nosso foco é criar{" "}
            <span className="text-blue-500 font-normal">soluções digitais sob medida</span>,
            evitando sistemas complicados e cheios de recursos que o cliente não usa. A ideia é entender a necessidade do negócio e transformar essa necessidade em uma ferramenta{" "}
            <span className="text-blue-500 font-normal">clara</span>,{" "}
            <span className="text-blue-500 font-normal">elegante</span> e{" "}
            <span className="text-blue-500 font-normal">eficiente</span>.
          </motion.p>

          <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2">

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group border-t border-neutral-900 pt-6 transition-colors hover:border-neutral-600"
            >
              <h3 className="text-lg font-normal text-white">
                Missão
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-neutral-400">
                Ajudar empresas a saírem de{" "}
                <span className="text-white-500 font-normal">processos manuais</span>{" "}
                e ganharem mais organização com{" "}
                <span className="text-blue-500 font-normal">sistemas digitais</span>.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group border-t border-neutral-900 pt-6 transition-colors hover:border-neutral-600"
            >
              <h3 className="text-lg font-normal text-white">
                Visão
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-neutral-400">
                Ser uma empresa reconhecida por entregar{" "}
                <span className="text-blue-500 font-normal">soluções simples</span>, úteis e{" "}
                <span className="text-blue-500 font-normal">bem construídas</span>.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group border-t border-neutral-900 pt-6 transition-colors hover:border-neutral-600 sm:col-span-2"
            >
              <h3 className="text-lg font-normal text-white">
                Para quem criamos
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-neutral-400">
                Empresas, microempreendedores, equipes pequenas e negócios que precisam de{" "}
                <span className="text-blue-500 font-normal">controle</span>,{" "}
                <span className="text-blue-500 font-normal">gestão</span> e{" "}
                <span className="text-blue-500 font-normal">presença digital</span>.
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;