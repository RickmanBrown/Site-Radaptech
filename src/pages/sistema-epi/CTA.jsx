import { motion } from 'framer-motion';
import { Calendar} from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-24 bg-[#01010c]">
            <div className="container mx-auto px-6">
                <div className="relative overflow-hidden bg-gradient-to-br from-[#00a3ff] to-[#0057ff] rounded-[3rem] p-12 md:p-20 text-center">
                    <div className="absolute top-0 left-0 w-64 h-64 border-[40px] border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Transforme a segurança da sua empresa hoje.
                        </h2>
                        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                            Pronto para migrar para o digital? Nossa equipe está pronta para te mostrar como o Sistema de Gestão de EPI vai economizar seu tempo e garantir sua tranquilidade.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a 
                                href="mailto:radaptech@gmail.com?subject=Solicitação de Demonstração - Sistema EPI"
                                className="cursor-pointer px-10 py-5 bg-white text-[#00a3ff] rounded-2xl font-bold text-lg hover:scale-105 transition-all flex items-center gap-3 shadow-xl"
                            >
                                <Calendar size={22} /> Solicitar demonstração
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;