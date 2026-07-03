import { motion } from 'framer-motion';
import { featuresData } from './data';

const Features = () => {
    return (
        <section className="py-24 bg-[#01010c]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Recursos <span className="text-[#00e0ff]">completos</span>
                    </h2>
                    <p className="text-gray-400">
                        Uma solução de ponta a ponta para a segurança do trabalho da sua empresa.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {featuresData.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/[0.06] transition-all flex flex-col items-center text-center group cursor-default"
                        >
                            <div className="text-[#00e0ff] mb-4 group-hover:scale-110 transition-transform">
                                <feature.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h4 className="text-white font-bold mb-2 text-sm uppercase tracking-tight">{feature.title}</h4>
                            <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;