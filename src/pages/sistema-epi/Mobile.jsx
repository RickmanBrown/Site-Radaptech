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
    <section className="relative bg-neutral-950 px-6 py-28 font-sans lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex w-full justify-center lg:justify-start"
          >
            <div className="relative mx-auto h-[350px] w-full max-w-2xl sm:h-[450px] lg:h-[550px]">

              <motion.div className="group absolute right-0 top-0 z-10 w-[90%] overflow-hidden rounded-xl border border-neutral-900 bg-neutral-900/20 shadow-2xl transition-colors hover:border-neutral-800 lg:w-[85%]">
                <img 
                  src={imgDesktop} 
                  alt="Versão Computador" 
                  className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]" 
                />
              </motion.div>

              <motion.div className="group absolute bottom-[5%] left-0 z-20 w-[50%] overflow-hidden rounded-xl border border-neutral-900 bg-neutral-900/20 shadow-2xl transition-colors hover:border-neutral-800 lg:w-[45%]">
                <img 
                  src={imgTablet} 
                  alt="Versão Tablet" 
                  className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]" 
                />
              </motion.div>

              <motion.div className="group absolute bottom-[10%] right-[10%] z-30 w-[30%] overflow-hidden rounded-[1.5rem] border-[4px] border-neutral-950 bg-neutral-900/20 shadow-2xl transition-colors hover:border-neutral-900 md:rounded-[2rem] md:border-[6px] lg:bottom-[15%] lg:right-[15%] lg:w-[25%]">
                <div className="absolute left-1/2 top-0 z-10 h-3 w-1/2 -translate-x-1/2 rounded-b-lg bg-neutral-950 md:h-4 md:rounded-b-xl" />
                <img 
                  src={imgMobile} 
                  alt="Versão Celular" 
                  className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]" 
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              100% em Nuvem
            </span>

            <h2 className="mt-6 text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl">
              Acesse de <span className="font-normal text-blue-500">qualquer lugar</span>, a qualquer momento.
            </h2>

            <p className="mt-6 text-base font-light leading-relaxed text-neutral-400 sm:text-lg">
              Não se preocupe com instalações pesadas ou servidores locais. O sistema da RadapTech funciona diretamente no navegador, com uma interface que se adapta perfeitamente ao tamanho da sua tela.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="group border-t border-neutral-900 pt-6 transition-colors hover:border-neutral-600">
                <div className="mb-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-800 text-neutral-500 transition-colors group-hover:border-blue-500/30 group-hover:text-blue-500">
                  <Cloud size={20} strokeWidth={1.5} />
                </div>
                <h4 className="text-base font-normal text-white">Dados Sincronizados</h4>
                <p className="mt-2 text-sm font-light leading-relaxed text-neutral-400">Tudo o que você faz no celular atualiza no computador na mesma hora.</p>
              </div>

              <div className="group border-t border-neutral-900 pt-6 transition-colors hover:border-neutral-600">
                <div className="mb-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-800 text-neutral-500 transition-colors group-hover:border-blue-500/30 group-hover:text-blue-500">
                  <ShieldCheck size={20} strokeWidth={1.5} />
                </div>
                <h4 className="text-base font-normal text-white">Backup Automático</h4>
                <p className="mt-2 text-sm font-light leading-relaxed text-neutral-400">Seus registros de EPIs seguros em servidores de alta disponibilidade.</p>
              </div>
            </div>

            <div className="mt-12 border-t border-neutral-900 pt-8">
              <p className="mb-8 text-sm font-light text-neutral-500">Compatível com todos os formatos:</p>
              <div className="grid grid-cols-3 gap-4">
                {devices.map((device, idx) => (
                  <div key={idx} className="group flex flex-col items-center text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-800 text-neutral-500 transition-colors group-hover:border-neutral-500 group-hover:text-white">
                      <device.icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-light text-neutral-300 transition-colors group-hover:text-white">{device.title}</span>
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