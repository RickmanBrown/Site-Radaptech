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
    <section id="epi" className="relative px-5 py-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-cyan-400/[0.04] p-6 shadow-[0_0_45px_rgba(34,211,238,0.08)] sm:p-10 lg:p-14">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              Sistema em destaque
            </span>

            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
                Gestão de estoque
              </span>{' '}
              de EPI para empresas.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Estamos finalizando uma solução voltada para o controle de{' '}
              <span className="font-semibold text-cyan-300">
                Equipamentos de Proteção Individual
              </span>
              . O sistema ajuda empresas a acompanhar{' '}
              <span className="font-semibold text-blue-300">quantidades</span>,{' '}
              <span className="font-semibold text-cyan-300">
                movimentações
              </span>{' '}
              e informações importantes sobre seus EPIs.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              A proposta é substituir{' '}
              <span className="font-semibold text-cyan-300">
                controles manuais
              </span>
              , planilhas soltas e registros desorganizados por uma plataforma
              mais{' '}
              <span className="font-semibold text-blue-300">clara</span> e{' '}
              <span className="font-semibold text-cyan-300">prática</span> para
              o dia a dia.
            </p>

            <Link
              to="/sistema-epi"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 font-bold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.18)] transition hover:scale-[1.02] hover:from-cyan-300 hover:to-blue-400"
            >
              Conhecer o Sistema
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5 shadow-[0_0_35px_rgba(15,23,42,0.55)] backdrop-blur"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 opacity-0 blur-2xl transition group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.12)]">
                      ✓
                    </div>

                    <p className="font-medium text-slate-200 transition group-hover:text-cyan-100">
                      {feature}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + (features.length * 0.1) }}
              className="relative mt-5 overflow-hidden rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl" />

              <p className="relative text-sm leading-6 text-cyan-100">
                Ideal para empresas que precisam melhorar o{' '}
                <span className="font-semibold text-white">
                  controle de EPIs
                </span>
                , reduzir perda de informações e acompanhar o estoque com mais{' '}
                <span className="font-semibold text-white">segurança</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default EpiSystem;