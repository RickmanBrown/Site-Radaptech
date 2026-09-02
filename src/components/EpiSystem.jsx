import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
  'Cadastro de equipamentos',
  'Controle de entrada e saída',
  'Acompanhamento de quantidades',
  'Histórico de movimentações',
  'Organização por categorias',
  'Visualização rápida do estoque',
];

function EpiSystem() {
  return (
    <section id="epi" className="relative bg-neutral-950 px-6 py-28 font-sans lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Sistema em destaque
            </span>

            <h2 className="mt-6 text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
              <span className="text-blue-500 font-normal">Gestão de estoque</span>{' '}
              <span className="text-neutral-400">de EPI para empresas.</span>
            </h2>

            <p className="mt-6 text-base font-light leading-relaxed text-neutral-400 sm:text-lg">
              Estamos finalizando uma solução voltada para o controle de{' '}
              <span className="text-blue-500 font-normal">Equipamentos de Proteção Individual</span>. 
              O sistema ajuda empresas a acompanhar{' '}
              <span className="text-blue-500 font-normal">quantidades</span>,{' '}
              <span className="text-blue-500 font-normal">movimentações</span>{' '}
              e informações importantes sobre seus EPIs.
            </p>

            <p className="mt-5 text-base font-light leading-relaxed text-neutral-400 sm:text-lg">
              A proposta é substituir{' '}
              <span className="text-white font-normal">controles manuais</span>, 
              planilhas soltas e registros desorganizados por uma plataforma mais{' '}
              <span className="text-blue-500 font-normal">clara</span> e{' '}
              <span className="text-blue-500 font-normal">prática</span> para o dia a dia.
            </p>

            <Link
              to="/sistema-epi"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              Conhecer o Sistema
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  className="group flex items-start gap-4 rounded-2xl border border-transparent p-2 transition-colors hover:border-neutral-900 hover:bg-neutral-900/30"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-700 text-xs text-neutral-500 transition-colors group-hover:border-neutral-400 group-hover:text-white">
                    ✓
                  </div>
                  <p className="text-sm font-light text-neutral-400 transition-colors group-hover:text-neutral-200">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + (features.length * 0.1) }}
              className="mt-10 border-t border-neutral-900 pt-6"
            >
              <p className="text-sm font-light leading-relaxed text-neutral-400">
                Ideal para empresas que precisam melhorar o{' '}
                <span className="text-blue-500 font-normal">controle de EPIs</span>, 
                reduzir perda de informações e acompanhar o estoque com mais{' '}
                <span className="text-blue-500 font-normal">segurança</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default EpiSystem;