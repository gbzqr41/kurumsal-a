
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Dynamic Aura Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-[10px] uppercase tracking-[0.5em] text-gray-500 mb-12 font-bold">
            Pioneering the Digital Era
          </span>
          <h1 className="text-[12vw] md:text-[8rem] font-serif leading-[0.85] tracking-tighter mb-12">
            The <span className="italic text-gray-400">Future</span> <br /> 
            Is Bespoke.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-16"
        >
          Biz, markanızın hikayesini kod ve tasarımla yeniden yazıyoruz. Sadece teknoloji değil, dijital bir miras inşa ediyoruz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <button className="w-full sm:w-auto bg-white text-black px-14 py-6 text-[11px] uppercase tracking-[0.3em] font-black hover:bg-gray-200 transition-all transform hover:-translate-y-1">
            Başlayalım
          </button>
          <button className="group flex items-center space-x-4 text-[11px] uppercase tracking-[0.3em] font-bold text-white">
            <span>Showreel</span>
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black group-hover:border-white">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white group-hover:border-l-black border-b-[6px] border-b-transparent ml-1 transition-colors" />
            </div>
          </button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
        <span className="text-[9px] uppercase tracking-[0.4em] rotate-90 origin-left ml-2">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
