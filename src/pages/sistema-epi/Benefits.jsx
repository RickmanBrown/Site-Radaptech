import { motion } from 'framer-motion';
import { benefitsData } from './data';

const Benefits = () => {
    return (
        <section className="py-24 bg-[#01010c]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Benefícios <span className="text-[#00a3ff]">reais</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {benefitsData.map((benefit, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                            className="p-8 border border-white/5 rounded-[2rem] flex flex-col items-center text-center transition-all"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[#00a3ff] mb-4">
                                <benefit.icon size={24} strokeWidth={2} />
                            </div>
                            <span className="text-white font-semibold text-sm leading-tight">{benefit.title}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;