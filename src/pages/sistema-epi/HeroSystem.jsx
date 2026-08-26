import { motion } from 'framer-motion';
import { ArrowRight, Zap, BarChart3, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import imgNotebook from './imagens/pc.png';

export default function HeroSystem() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-neutral-950 px-6 pb-16 pt-32 font-sans lg:px-12 lg:pb-20 lg:pt-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full text-left lg:w-1/2"
        >
          <Link
            to="/"
            className="group mb-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 transition-colors hover:text-white lg:mb-12"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" strokeWidth={1.5} />
            Voltar para o site RadapTech
          </Link>

          <h1 className="mb-6 text-4xl font-light leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Gestão inteligente <br className="hidden lg:block" />
            <span className="font-normal text-blue-500">de EPIs</span>{" "}
            <span className="text-neutral-400">para sua empresa.</span>
          </h1>

          <p className="mb-10 max-w-xl text-base font-light leading-relaxed text-neutral-400 sm:text-lg">
            Abandone as planilhas e o papel. Controle entregas, validades e estoque de Equipamentos de Proteção Individual com segurança jurídica e rastreabilidade total.
          </p>

          <ul className="mb-12 flex max-w-md flex-col gap-4 text-left text-neutral-400">
            <li className="flex items-start gap-4">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-700 text-neutral-500">
                <Zap className="h-3 w-3" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-light leading-relaxed">
                Assinatura digital ou foto de entrega para <span className="font-normal text-white">comprovação de recebimento</span>.
              </span>
            </li>
            
            <li className="flex items-start gap-4">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-700 text-neutral-500">
                <BarChart3 className="h-3 w-3" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-light leading-relaxed">
                Dashboard e <span className="font-normal text-white">relatórios em tempo real</span>.
              </span>
            </li>
          </ul>

          <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="mailto:radaptech@gmail.com?subject=Solicitação de Demonstração - Sistema EPI"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:w-auto"
            >
              Solicitar Demonstração
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </a>
            
            <a
              href="mailto:radaptech@gmail.com?subject=Falar com a equipe - Sistema EPI"
              className="flex w-full items-center justify-center rounded-full border border-neutral-800 bg-transparent px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-900 sm:w-auto"
            >
              Falar com a equipe
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative w-full lg:w-1/2"
        >
          <div className="relative flex items-center justify-center overflow-hidden rounded-3xl border border-neutral-900 bg-neutral-900/20 p-4 transition-colors hover:border-neutral-800 sm:p-8">
            <img
              src={imgNotebook}
              alt="Dashboard RadapTech Preview"
              className="h-auto w-full object-contain transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}