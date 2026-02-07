
import React from 'react';
import { motion } from 'framer-motion';

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Global Lojistik Platformu",
    category: "YAZILIM GELİŞTİRME",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1200",
    year: "2024"
  },
  {
    id: 2,
    title: "Ethereal Gayrimenkul",
    category: "UI/UX TASARIM",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    year: "2023"
  },
  {
    id: 3,
    title: "Modernist Mobilya",
    category: "E-TİCARET",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200",
    year: "2024"
  },
  {
    id: 4,
    title: "Quantum Cloud Panel",
    category: "STRATEJİ",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    year: "2023"
  }
];

const Projects: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="custom-container px-6">
        {/* Section Heading */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-[600] uppercase tracking-[0.3em] text-gray-400 mb-4 block"
          >
            Portfolyomuz
          </motion.span>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-[700] text-black tracking-tighter leading-none"
            >
              Fikirleri Gerçeğe <br /> Dönüştüren Projeler
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-xs text-gray-500 font-[500] text-sm leading-relaxed"
            >
              Her proje bizim için yeni bir hikaye, yeni bir inovasyon fırsatıdır.
            </motion.p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index % 2 * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              {/* Image with Parallax-like effect on hover */}
              <div className="relative aspect-[16/10] overflow-hidden mb-8 bg-gray-100">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              {/* Project Info */}
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-[10px] font-[700] uppercase tracking-widest text-gray-400">
                      {project.category}
                    </span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span className="text-[10px] font-[700] uppercase tracking-widest text-gray-400">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-[700] text-black tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {project.title}
                  </h3>
                </div>
                <div className="w-12 h-12 border border-black/10 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                  <span className="text-xl">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-24 text-center">
          <button className="px-12 py-5 border border-black text-xs font-[700] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300">
            TÜM ÇALIŞMALARIMIZI GÖRÜN
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
