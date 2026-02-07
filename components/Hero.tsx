
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.5em] text-gray-500 mb-8 font-semibold">
            ESTABLISHED 2024
          </span>
          <h1 className="text-6xl md:text-[10rem] font-serif leading-[0.9] tracking-tighter mb-8">
            Crafting <br />
            <span className="italic text-gray-400">Digital</span> Legacy
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="max-w-2xl mx-auto text-lg text-gray-400 font-light leading-relaxed mb-12"
        >
          We bridge the gap between abstract vision and tangible results through innovative design, strategic engineering, and relentless pursuit of excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="bg-white text-black px-12 py-5 text-sm uppercase tracking-widest font-bold hover:bg-gray-200 transition-all transform hover:-translate-y-1">
            Explore Our Portfolio
          </button>
          <button className="group flex items-center space-x-3 text-sm uppercase tracking-widest font-medium text-white">
            <span>Watch Showreel</span>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all group-hover:border-white">
              <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1" />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
