
import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'ANASAYFA', href: '#', active: true },
    { name: 'HAKKIMIZDA', href: '#', active: false },
    { name: 'HİZMETLERİMİZ', href: '#', active: false },
    { name: 'İLETİŞİM', href: '#footer', active: false },
  ];

  return (
    <header className="w-full h-[80px] md:h-[100px] bg-white flex items-center shadow-sm sticky top-0 z-[100]">
      <div className="custom-container px-6 flex justify-between items-center w-full">
        {/* Logo */}
        <div className="text-[24px] md:text-[28px] font-[700] text-black tracking-tight cursor-pointer">
          LOGO
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm tracking-wide transition-colors ${
                item.active ? 'font-[600]' : 'font-[500] text-gray-600 hover:text-black'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Icons & Mobile Toggle */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Search Button */}
          <button className="text-black p-2 hover:text-gray-500 transition-colors" aria-label="Arama">
            <Search size={20} />
          </button>

          {/* Cart Button */}
          <button className="text-black p-2 hover:text-gray-500 transition-colors relative" aria-label="Sepet">
            <ShoppingCart size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-black rounded-full border border-white"></span>
          </button>

          {/* Quote Button */}
          <button className="hidden sm:block bg-black text-white px-6 py-3 text-xs font-[600] uppercase tracking-wider hover:bg-gray-800 transition-all">
            TEKLİF AL
          </button>
          
          <button 
            className="lg:hidden text-black p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[80px] left-0 w-full bg-white border-t border-gray-100 shadow-xl z-[90] lg:hidden"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg tracking-wide py-2 ${
                    item.active ? 'font-[700] text-black' : 'font-[500] text-gray-600'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full bg-black text-white py-4 text-sm font-[600] uppercase tracking-wider">
                TEKLİF AL
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
