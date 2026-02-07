
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  { 
    question: "Bir projenin tamamlanması ne kadar sürer?", 
    answer: "Projenin kapsamına bağlı olarak değişmekle birlikte, standart bir kurumsal web projesi genellikle keşif aşamasından yayına kadar 8 ila 16 hafta sürer." 
  },
  { 
    question: "Lansman sonrası destek veriyor musunuz?", 
    answer: "Evet, dijital varlıklarınızın her zaman en yüksek performansta çalışmasını sağlamak için aylık bakım, güvenlik güncellemeleri ve teknik destek paketleri sunuyoruz." 
  },
  { 
    question: "Hangi sektörlerde uzmanlığınız var?", 
    answer: "Sektör bağımsız çalışmakla birlikte; Fintech, Lüks Perakende, Gayrimenkul ve SaaS alanlarında derin bir deneyime sahibiz." 
  },
  { 
    question: "Mevcut sistemlerimizle entegrasyon yapabiliyor musunuz?", 
    answer: "Kesinlikle. Mühendislik felsefemiz modülerlik üzerine kuruludur; mevcut ERP, CRM veya diğer API tabanlı ekosistemlerle sorunsuz entegrasyon sağlıyoruz." 
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#f8f9fa]">
      <div className="custom-container px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-[700] uppercase tracking-[0.5em] text-gray-400 mb-4 block"
            >
              MERAK EDİLENLER
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-[700] tracking-tighter text-black"
            >
              Sıkça Sorulan <br /> <span className="text-gray-400 italic font-light">Sorular</span>.
            </motion.h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border-b border-black/5"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex justify-between items-center text-left py-8 group"
                >
                  <span className={`text-xl md:text-2xl font-[600] tracking-tight transition-colors duration-300 ${openIndex === idx ? 'text-black' : 'text-gray-400 group-hover:text-black'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full border border-black/5 flex items-center justify-center transition-transform duration-500 ${openIndex === idx ? 'rotate-180 bg-black text-white' : 'text-black'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-500 font-[500] leading-relaxed pb-10 pr-12 text-lg">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
