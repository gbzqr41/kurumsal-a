
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';

const PRODUCTS_DATA = [
  {
    id: 'p1',
    name: 'Aura Pro Framework',
    category: 'YAZILIM',
    price: '₺12.450',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p2',
    name: 'Lumina Dashboard Kit',
    category: 'TASARIM',
    price: '₺4.200',
    imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p3',
    name: 'Nexus API Connect',
    category: 'ALTYAPI',
    price: '₺8.750',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p4',
    name: 'Zenith UI Design System',
    category: 'TASARIM',
    price: '₺3.100',
    imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800'
  }
];

const Products: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="custom-container px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-[600] uppercase tracking-[0.3em] text-gray-400 mb-4 block"
            >
              Mağazamız
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-[700] text-black tracking-tight"
            >
              Profesyonel Dijital <br /> Çözümlerimizi Keşfedin
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            <button className="px-6 py-2 border border-gray-200 text-xs font-[600] uppercase hover:bg-black hover:text-white transition-all">TÜMÜ</button>
            <button className="px-6 py-2 border border-gray-200 text-xs font-[500] uppercase hover:bg-black hover:text-white transition-all text-gray-500">YAZILIM</button>
            <button className="px-6 py-2 border border-gray-200 text-xs font-[500] uppercase hover:bg-black hover:text-white transition-all text-gray-500">TASARIM</button>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS_DATA.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              {/* Product Image Container */}
              <div className="relative aspect-[1/1.2] overflow-hidden bg-gray-50 mb-6">
                <motion.img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Controls */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 gap-2">
                  <button className="w-full bg-black text-white py-4 flex items-center justify-center space-x-2 text-xs font-[600] uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ShoppingCart size={16} />
                    <span>SEPETE EKLE</span>
                  </button>
                  <button className="w-full bg-white text-black py-4 flex items-center justify-center space-x-2 text-xs font-[600] uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">
                    <Eye size={16} />
                    <span>İNCELE</span>
                  </button>
                </div>

                {/* Tag */}
                <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[9px] font-[700] tracking-[0.2em] text-black">
                  YENİ
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-1">
                <p className="text-[10px] font-[600] text-gray-400 tracking-[0.2em] uppercase">
                  {product.category}
                </p>
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-[700] text-black tracking-tight group-hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-lg font-[600] text-black">
                    {product.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-20 border-t border-gray-100 pt-10 flex justify-center">
          <button className="group flex items-center space-x-4 text-xs font-[700] uppercase tracking-[0.3em] text-black hover:text-gray-500 transition-colors">
            <span>TÜM ÜRÜNLERİ GÖRÜNTÜLE</span>
            <span className="w-10 h-10 border border-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
