import { motion } from 'framer-motion';
import { ArrowRight, Zap, BarChart3, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import imgNotebook from './imagens/pc.png';

const particles = [
  { size: 4, top: '20%', left: '15%', delay: 0, duration: 3 },
  { size: 3, top: '75%', left: '85%', delay: 0.5, duration: 4 },
  { size: 5, top: '45%', left: '55%', delay: 1, duration: 5 },
  { size: 2, top: '80%', left: '25%', delay: 1.5, duration: 3.5 },
  { size: 4, top: '15%', left: '75%', delay: 2, duration: 4.5 },
  { size: 6, top: '60%', left: '10%', delay: 2.5, duration: 3.2 },
];

export default function HeroSystem() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-36 pb-16 lg:pt-25 lg:pb-20">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/20 blur-[130px] rounded-full pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay
            }}
            className="absolute rounded-full bg-cyan-400 blur-[2px]"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: particle.top,
              left: particle.left
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <Link
            to="/"
            className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300 lg:mb-12"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Voltar para o site RadapTech
          </Link>
          <br />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.1]">
            Gestão inteligente <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200">
              de EPIs para sua empresa
            </span>
          </h1>

          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0">
            Abandone as planilhas e o papel. Controle entregas, validades e estoque de Equipamentos de Proteção Individual com segurança jurídica e rastreabilidade total.
          </p>

          <ul className="flex flex-col gap-3 mb-10 text-slate-300 text-left max-w-md mx-auto lg:mx-0">
            <li className="flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/10 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              Assinatura digital ou foto de entrega para comprovação de recebimento
            </li>
            <li className="flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/10 flex items-center justify-center">
                <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              Dashboard e relatórios em tempo real
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a
              href="mailto:radaptech@gmail.com?subject=Solicitação de Demonstração - Sistema EPI"
              className="w-full cursor-pointer sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold hover:from-cyan-300 hover:to-blue-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              Solicitar Demonstração
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:radaptech@gmail.com?subject=Falar com a equipe - Sistema EPI"
              className="w-full cursor-pointer sm:w-auto px-8 py-3.5 rounded-full border border-white/20 bg-white/[0.03] text-white font-bold hover:border-cyan-400 hover:bg-cyan-400/5 hover:text-cyan-300 transition-all hover:-translate-y-1"
            >
              Falar com a equipe
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative mt-10 lg:mt-0 lg:scale-[1.08]"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-cyan-500/20 blur-[80px] -z-10 rounded-full pointer-events-none" />
          <div className="relative w-full rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(8,112,184,0.15)] flex items-center justify-center overflow-hidden group hover:border-cyan-400/30 transition-colors duration-500">

            <img
              src={imgNotebook}
              alt="Dashboard RadapTech Preview"
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-blue-500/20 opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}