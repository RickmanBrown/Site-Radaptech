import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const CTA = () => {
    return (
        <section className="relative bg-neutral-950 px-6 py-28 font-sans lg:px-12">
            <div className="mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                        Próximo Passo
                    </span>

                    <h2 className="mt-6 text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
                        Transforme a segurança da sua <span className="font-normal text-blue-500">empresa hoje.</span>
                    </h2>
                    
                    <p className="mt-6 text-base font-light leading-relaxed text-neutral-400 sm:text-lg">
                        Pronto para migrar para o digital? Nossa equipe está pronta para te mostrar como o Sistema de Gestão de EPI vai economizar seu tempo e garantir sua tranquilidade.
                    </p>

                    <div className="mt-12 flex justify-center">
                        <a 
                            href="mailto:radaptech@gmail.com?subject=Solicitação de Demonstração - Sistema EPI"
                            className="group flex items-center gap-3 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-transform hover:scale-105"
                        >
                            <Calendar size={18} strokeWidth={2} className="transition-transform group-hover:-rotate-12" />
                            Solicitar demonstração
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;