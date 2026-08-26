import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from './data';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-neutral-900 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group flex w-full items-center justify-between py-6 text-left"
            >
                <span className="text-base font-normal text-white transition-colors group-hover:text-neutral-300 sm:text-lg">
                    {question}
                </span>
                <div className="ml-4 shrink-0 text-neutral-500 transition-colors group-hover:text-blue-500">
                    {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                </div>
            </button>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-sm font-light leading-relaxed text-neutral-400 sm:text-base">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    return (
        <section className="relative bg-neutral-950 px-6 py-28 font-sans lg:px-12">
            <div className="mx-auto max-w-4xl">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-16 text-center lg:text-left"
                >
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                        Suporte e Dúvidas
                    </span>
                    <h2 className="mt-6 text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
                        Dúvidas <span className="font-normal text-blue-500">frequentes.</span>
                    </h2>
                </motion.div>

                <div className="border-t border-neutral-900">
                    {faqData.map((faq, idx) => (
                        <FAQItem key={idx} {...faq} />
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default FAQ;