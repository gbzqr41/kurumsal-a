
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    title: "Geleceği Tasarlıyoruz",
    subtitle: "Yenilikçi çözümlerle markanızı dijital dünyada zirveye taşıyın.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
    buttonText: "HİZMETLERİ İNCELE"
  },
  {
    id: 2,
    title: "Teknoloji ve Estetik",
    subtitle: "Modern tasarım anlayışını en son teknolojilerle harmanlıyoruz.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000",
    buttonText: "PROJELERİMİZ"
  },
  {
    id: 3,
    title: "Sizin İçin Buradayız",
    subtitle: "Kurumsal kimliğinizi güçlendirecek stratejik dokunuşlar yapıyoruz.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000",
    buttonText: "İLETİŞİME GEÇ"
  }
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));

  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
            style={{ backgroundImage: `url(${SLIDES[current].image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative h-full custom-container px-6 flex flex-col justify-center items-start text-white">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-[700] leading-[1.1] mb-6 tracking-tight">
                {SLIDES[current].title}
              </h1>
              <p className="text-base sm:text-lg md:text-2xl font-[500] text-white/80 mb-8 md:mb-10 max-w-2xl leading-relaxed">
                {SLIDES[current].subtitle}
              </p>
              <button className="bg-white text-black px-8 md:px-10 py-4 md:py-5 text-xs md:text-sm font-[600] uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300">
                {SLIDES[current].buttonText}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 flex space-x-3 md:space-x-4 z-20">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 md:w-14 md:h-14 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all rounded-full backdrop-blur-sm"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-10 h-10 md:w-14 md:h-14 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all rounded-full backdrop-blur-sm"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Indicators (Bars) - Aligned within container on the left */}
      <div className="absolute bottom-6 md:bottom-10 left-0 w-full z-20 pointer-events-none">
        <div className="custom-container px-6">
          <div className="flex space-x-2 md:space-x-3 pointer-events-auto">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1 transition-all duration-500 rounded-full ${
                  current === idx ? 'w-8 md:w-12 bg-white' : 'w-4 md:w-6 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
