import { motion } from 'framer-motion';

const services = [
  {
    title: 'Sistemas web',
    description:
      'Desenvolvimento de sistemas online personalizados para organizar processos e facilitar a rotina da empresa.',
  },
  {
    title: 'Controle de estoque',
    description:
      'Soluções para controlar entradas, saídas, quantidades disponíveis e movimentações de produtos ou equipamentos.',
  },
  {
    title: 'Sites institucionais',
    description:
      'Criação de sites modernos, responsivos e profissionais para apresentar empresas, serviços e contatos.',
  },
  {
    title: 'Landing pages',
    description:
      'Páginas focadas em divulgação, captação de clientes, apresentação de produtos e campanhas específicas.',
  },
  {
    title: 'Painéis administrativos',
    description:
      'Dashboards e áreas internas para visualizar dados, gerenciar informações e acompanhar resultados.',
  },
  {
    title: 'Automação de processos',
    description:
      'Transformação de tarefas manuais em fluxos digitais mais rápidos, organizados e eficientes.',
  },
];

function Services() {
  return (
    <section id="servicos" className="relative bg-neutral-950 px-6 py-28 font-sans lg:px-12">
      <div className="mx-auto max-w-7xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            Serviços
          </span>

          <h2 className="mt-6 text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
            Soluções digitais{" "}
            <span className="text-blue-500 font-normal">
              para diferentes necessidades.
            </span>
          </h2>

          <p className="mt-6 text-base font-light leading-relaxed text-neutral-400 sm:text-lg">
            Criamos ferramentas que ajudam empresas e microempreendedores a{" "}
            <span className="text-blue-500 font-normal">controlar informações</span>,{" "}
            <span className="text-blue-500 font-normal">melhorar processos</span>{" "}
            e substituir métodos manuais por{" "}
            <span className="text-blue-500 font-normal">sistemas mais práticos</span>.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group relative border-t border-neutral-900 pt-8 transition-colors hover:border-neutral-600"
            >
              
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 text-xs font-light text-neutral-500 transition-colors group-hover:border-neutral-400 group-hover:text-white">
                {String(index + 1).padStart(2, '0')}
              </div>

              <h3 className="mt-6 text-xl font-normal text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-sm font-light leading-relaxed text-neutral-400">
                {service.description}
              </p>
              
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;