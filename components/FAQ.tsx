
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

const FAQS: FAQItem[] = [
  { question: "How long does a typical project take?", answer: "Timeline varies by scope, but a standard enterprise project typically ranges from 12 to 24 weeks from discovery to deployment." },
  { question: "Do you offer post-launch support?", answer: "Yes, we provide ongoing maintenance and evolutionary support packages to ensure your digital assets continue to perform at peak capacity." },
  { question: "What industries do you specialize in?", answer: "While we are industry-agnostic, we have deep expertise in Fintech, High-end Real Estate, Luxury Retail, and SaaS." },
  { question: "Can we integrate with our existing stack?", answer: "Absolutely. Our engineering philosophy is focused on modularity and seamless API integration with legacy or modern ecosystems." }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <span className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-4 block">Frequently Asked Questions</span>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight">Understanding our <br /> <span className="italic">Collaborative Process</span>.</h2>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border-b border-white/10 pb-6">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center text-left py-4 hover:text-gray-300 transition-colors"
              >
                <span className="text-xl font-medium tracking-tight">{faq.question}</span>
                <ChevronDown className={`transition-transform duration-500 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-500 leading-relaxed py-4 pr-12">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
