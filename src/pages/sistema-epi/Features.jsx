import { motion } from 'framer-motion';
import { featuresData } from './data';

const Features = () => {
    return (
        <section className="relative bg-neutral-950 px-6 py-28 font-sans lg:px-12">
            <div className="mx-auto max-w-7xl">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-16 text-center lg:text-left"
                >
                    <h2 className="text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
                        Recursos <span className="font-normal text-blue-500">completos.</span>
                    </h2>
                    <p className="mt-6 text-base font-light leading-relaxed text-neutral-400 sm:text-lg">
                        Uma solução de ponta a ponta para a segurança do trabalho da sua empresa.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
                    {featuresData.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                            className="group flex flex-col items-center border-t border-neutral-900 pt-6 text-center transition-colors hover:border-neutral-600 sm:items-start sm:text-left"
                        >
                            <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-neutral-800 text-neutral-500 transition-colors group-hover:border-blue-500/30 group-hover:text-blue-500">
                                <feature.icon size={22} strokeWidth={1.5} />
                            </div>
                            
                            <h4 className="mb-3 text-sm font-normal uppercase tracking-wider text-white">
                                {feature.title}
                            </h4>
                            
                            <p className="text-sm font-light leading-relaxed text-neutral-400">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default Features;