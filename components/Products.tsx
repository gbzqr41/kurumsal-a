
import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';

const PRODUCTS: Product[] = [
  { id: 'p1', name: 'Aura Framework', tagline: 'The backbone of modern web ecosystems.', imageUrl: 'https://picsum.photos/seed/aura/800/1000' },
  { id: 'p2', name: 'Lumina Analytics', tagline: 'Clarity in complex data landscapes.', imageUrl: 'https://picsum.photos/seed/lumina/800/1000' },
  { id: 'p3', name: 'Nexus Connect', tagline: 'Seamless enterprise-level integration.', imageUrl: 'https://picsum.photos/seed/nexus/800/1000' },
];

const Products: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 tracking-tight">Our Flagship Assets</h2>
          <div className="w-20 h-px bg-white/20 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {PRODUCTS.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-900 mb-6">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-sm uppercase tracking-widest font-bold">View Case Study</p>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-2">{product.name}</h3>
              <p className="text-gray-500 text-sm uppercase tracking-widest">{product.tagline}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="text-xs uppercase tracking-[0.3em] font-bold border-b border-white/20 pb-2 hover:border-white transition-all">
            Browse All Innovations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
