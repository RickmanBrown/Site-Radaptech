import { motion } from 'framer-motion';
import { problemsData } from './data';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const Problems = () => {
    return (
        <section className="py-24 bg-[#01010c] relative">
            <div className="container mx-auto px-6">
                <motion.div 
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        O custo da gestão <span className="text-[#00a3ff]">manual</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Processos ultrapassados geram insegurança jurídica e perdas financeiras.
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {problemsData.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl group hover:border-[#00a3ff]/30 transition-all"
                        >
                            <div className="w-14 h-14 bg-[#00a3ff]/10 rounded-2xl flex items-center justify-center mb-6 text-[#00a3ff] group-hover:bg-[#00a3ff] group-hover:text-white transition-all">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Problems;