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
    <section id="servicos" className="relative px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
            Serviços
          </span>

          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
              Soluções digitais
            </span>{' '}
            para diferentes necessidades.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Criamos ferramentas que ajudam empresas e microempreendedores a{' '}
            <span className="font-semibold text-cyan-300">
              controlar informações
            </span>
            ,{' '}
            <span className="font-semibold text-blue-300">
              melhorar processos
            </span>{' '}
            e substituir métodos manuais por{' '}
            <span className="font-semibold text-cyan-300">
              sistemas mais práticos
            </span>
            .
          </p>
        </motion.div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/5"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
              </div>

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-lg font-black text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.12)]">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className="mt-6 text-xl font-bold text-white transition group-hover:text-cyan-200">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;