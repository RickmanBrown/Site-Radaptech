import { motion } from 'framer-motion';
import { problemsData } from './data';

const Problems = () => {
    return (
        <section className="relative bg-neutral-950 px-6 py-28 font-sans lg:px-12">
            <div className="mx-auto max-w-7xl">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                        Riscos e Perdas
                    </span>
                    
                    <h2 className="mt-6 text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
                        O custo da gestão <span className="font-normal text-blue-500">manual.</span>
                    </h2>
                    
                    <p className="mt-6 text-base font-light leading-relaxed text-neutral-400 sm:text-lg">
                        Processos ultrapassados geram insegurança jurídica e perdas financeiras.
                    </p>
                </motion.div>

                <div className="mt-20 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                    {problemsData.map((item, index) => (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            className="group relative border-t border-neutral-900 pt-8 transition-colors hover:border-neutral-600"
                        >
                            <div className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-neutral-800 text-neutral-500 transition-colors group-hover:border-blue-500/30 group-hover:text-blue-500">
                                <item.icon size={22} strokeWidth={1.5} />
                            </div>
                            
                            <h3 className="text-xl font-normal text-white">
                                {item.title}
                            </h3>
                            
                            <p className="mt-4 text-sm font-light leading-relaxed text-neutral-400">
                                {item.desc}
                            </p>
                        </motion.article>
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default Problems;