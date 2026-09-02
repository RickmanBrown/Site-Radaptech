import { motion } from 'framer-motion';
import { benefitsData } from './data';

const Benefits = () => {
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
                        Benefícios <span className="font-normal text-blue-500">reais.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:gap-x-12">
                    {benefitsData.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                            className="group flex flex-col items-start border-t border-neutral-900 pt-6 transition-colors hover:border-neutral-600"
                        >
                            <div className="mb-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-800 text-neutral-500 transition-colors group-hover:border-blue-500/30 group-hover:text-blue-500">
                                <benefit.icon size={20} strokeWidth={1.5} />
                            </div>
                            
                            <span className="text-sm font-normal leading-relaxed text-white sm:text-base">
                                {benefit.title}
                            </span>
                        </motion.div>
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default Benefits;