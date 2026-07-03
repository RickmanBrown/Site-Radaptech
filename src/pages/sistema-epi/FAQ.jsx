import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from './data';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/5 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className="text-lg font-medium text-white group-hover:text-[#00e0ff] transition-colors">
                    {question}
                </span>
                <div className="text-gray-500 group-hover:text-[#00e0ff] transition-colors">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
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
                        <p className="pb-6 text-gray-400 leading-relaxed">
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
        <section className="py-24 bg-[#01010c]">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
                    Dúvidas <span className="text-[#00e0ff]">Frequentes</span>
                </h2>
                <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 shadow-[0_0_50px_rgba(0,163,255,0.03)]">
                    {faqData.map((faq, idx) => (
                        <FAQItem key={idx} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;