import { motion } from 'framer-motion';
import imgDashboard from './imagens/pc-estoque.png'; 

const Dashboard = () => {
    return (
        <section className="py-24 bg-[#01010c] overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-[3rem] p-8 lg:p-12 relative"
                >
                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Controle total com <br />
                                <span className="text-[#00a3ff]">Dashboards reais</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Acompanhe o status do estoque, entregas pendentes e indicadores de segurança em uma interface intuitiva feita para quem precisa de agilidade.
                            </p>
                            <ul className="space-y-4">
                                {['Valor Total do Estoque', 'Filtros avançados', 'Exportação em PDF/Excel', 'Controle de Validades', 'Devolução de EPIs'].map((txt, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/70">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#00a3ff]" />
                                        {txt}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="relative lg:col-span-7 z-10"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#00a3ff]/20 blur-[80px] -z-10 rounded-full pointer-events-none" />

                            <div className="relative w-full rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,163,255,0.15)] flex items-center justify-center overflow-hidden group hover:border-[#00a3ff]/30 transition-colors duration-500">
                                
                                <img 
                                    src={imgDashboard} 
                                    alt="Dashboard System Preview" 
                                    className="w-full h-auto object-contain transition-transform duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-tr from-[#00a3ff]/20 via-transparent to-[#00a3ff]/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Dashboard;