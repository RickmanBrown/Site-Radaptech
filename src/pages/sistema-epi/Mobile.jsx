import { motion } from 'framer-motion';
import { Smartphone, Monitor, Tablet, Cloud, ShieldCheck } from 'lucide-react';
import imgDesktop from './imagens/pc.png';
import imgTablet from './imagens/tablet.png';
import imgMobile from './imagens/celular.png';

const devices = [
  { icon: Monitor, title: "Computadores", desc: "Painel completo para gestão no escritório." },
  { icon: Tablet, title: "Tablets", desc: "Ideal para conferência de estoque físico." },
  { icon: Smartphone, title: "Celulares", desc: "Consultas rápidas e entregas em campo." }
];

function Mobile() {
  return (
    <section className="relative overflow-hidden bg-[#01010c] px-5 py-24 lg:px-8">
      <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-400/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-start w-full"
          >
            <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 to-blue-500/10 blur-3xl rounded-full" />

              <motion.div className="absolute top-0 right-0 w-[90%] lg:w-[85%] z-10 rounded-xl border border-white/10 bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
                <img 
                  src={imgDesktop} 
                  alt="Versão Computador" 
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" 
                />
              </motion.div>

              <motion.div className="absolute bottom-[5%] left-0 w-[50%] lg:w-[45%] z-20 rounded-xl border border-white/10 bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
                <img 
                  src={imgTablet} 
                  alt="Versão Tablet" 
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" 
                />
              </motion.div>

              <motion.div className="absolute bottom-[10%] lg:bottom-[15%] right-[10%] lg:right-[15%] w-[30%] lg:w-[25%] z-30 rounded-[1.5rem] md:rounded-[2rem] border-[4px] md:border-[6px] border-slate-800 bg-slate-950 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden group">
                <div className="absolute left-1/2 top-0 h-3 md:h-4 w-1/2 -translate-x-1/2 rounded-b-lg md:rounded-b-xl bg-slate-800 z-10" />
                <img 
                  src={imgMobile} 
                  alt="Versão Celular" 
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" 
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              100% em Nuvem
            </span>

            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl md:text-5xl">
              Acesse de <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">qualquer lugar</span>, a qualquer momento.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Não se preocupe com instalações pesadas ou servidores locais. O sistema da RadapTech funciona diretamente no navegador, com uma interface que se adapta perfeitamente ao tamanho da sua tela.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:border-cyan-400/30 hover:bg-white/[0.04]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                  <Cloud size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Dados Sincronizados</h4>
                  <p className="mt-1 text-sm text-slate-400">Tudo o que você faz no celular atualiza no computador na mesma hora.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:border-cyan-400/30 hover:bg-white/[0.04]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Backup Automático</h4>
                  <p className="mt-1 text-sm text-slate-400">Seus registros de EPIs seguros em servidores de alta disponibilidade.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="mb-6 font-semibold text-white">Compatível com todos os formatos:</p>
              <div className="grid grid-cols-3 gap-4">
                {devices.map((device, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-300 shadow-lg transition-transform hover:scale-110 hover:border-cyan-400/50 hover:text-cyan-400">
                      <device.icon size={20} />
                    </div>
                    <span className="text-sm font-bold text-slate-200">{device.title}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Mobile;