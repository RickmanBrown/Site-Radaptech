import { motion } from 'framer-motion';
import imgDashboard from './imagens/pc-estoque.png'; 

const Dashboard = () => {
    const features = [
        'Valor Total do Estoque',
        'Filtros avançados',
        'Exportação em PDF/Excel',
        'Controle de Validades',
        'Devolução de EPIs'
    ];

    return (
        <section className="relative bg-neutral-950 px-6 py-28 font-sans lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="lg:col-span-5"
                    >
                        <h2 className="mb-6 text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
                            Controle total com <br />
                            <span className="font-normal text-blue-500">Dashboards reais.</span>
                        </h2>
                        
                        <p className="mb-10 text-base font-light leading-relaxed text-neutral-400 sm:text-lg">
                            Acompanhe o status do estoque, entregas pendentes e indicadores de segurança em uma interface intuitiva feita para quem precisa de agilidade.
                        </p>
                        
                        <ul className="flex flex-col gap-4">
                            {features.map((txt, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                    <span className="text-sm font-light text-neutral-400">
                                        {txt}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative lg:col-span-7"
                    >
                        <div className="relative flex items-center justify-center overflow-hidden rounded-3xl border border-neutral-900 bg-neutral-900/20 p-4 transition-colors hover:border-neutral-800 sm:p-8">
                            <img 
                                src={imgDashboard} 
                                alt="Dashboard System Preview" 
                                className="h-auto w-full object-contain transition-transform duration-700 hover:scale-[1.02]"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Dashboard;