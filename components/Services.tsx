
import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';
import { Layers, Globe, Zap, ShieldCheck } from 'lucide-react';

const SERVICES: Service[] = [
  { id: '1', title: 'Brand Identity', description: 'Crafting unique visual languages that resonate and endure in modern markets.', category: 'CREATIVE' },
  { id: '2', title: 'Enterprise Web', description: 'High-performance, scalable web solutions built for security and complex logic.', category: 'DEVELOPMENT' },
  { id: '3', title: 'Strategic UI/UX', description: 'Data-driven user experiences designed to maximize engagement and conversion.', category: 'DESIGN' },
  { id: '4', title: 'Digital Growth', description: 'Performance marketing and SEO strategies that drive measurable business impact.', category: 'MARKETING' },
];

const ServiceCard: React.FC<{ service: Service, index: number }> = ({ service, index }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative p-10 border border-white/5 bg-[#0e0e0e] hover:bg-[#151515] transition-all duration-500 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-700" />
      
      <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-12 block group-hover:text-gray-400 transition-colors">
        {service.category} / 0{index + 1}
      </span>
      
      <h3 className="text-3xl font-serif mb-6 group-hover:italic transition-all">
        {service.title}
      </h3>
      
      <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
        {service.description}
      </p>

      <div className="mt-12 flex items-center text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
        Read More <span className="ml-2">→</span>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-4 block">Core Capabilities</span>
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter">
              Bespoke solutions <br /> for global <span className="italic">ambition</span>.
            </h2>
          </div>
          <p className="text-gray-500 md:max-w-xs text-sm leading-relaxed">
            We focus on a select number of partners annually to ensure uncompromised quality and deep integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {SERVICES.map((s, idx) => (
            <ServiceCard key={s.id} service={s} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
