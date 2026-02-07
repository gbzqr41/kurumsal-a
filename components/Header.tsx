
import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const menuItems = [
    { name: 'ANASAYFA', href: '#', active: true },
    { name: 'HAKKIMIZDA', href: '#', active: false },
    { name: 'HİZMETLERİMİZ', href: '#', active: false },
    { name: 'İLETİŞİM', href: '#footer', active: false },
  ];

  return (
    <>
      <header className="w-full h-[80px] md:h-[100px] bg-white flex items-center shadow-sm sticky top-0 z-[100]">
        <div className="custom-container px-6 flex justify-between items-center w-full">
          {/* Logo */}
          <div className="cursor-pointer">
            <img 
              src="https://raw.githubusercontent.com/gbzqr41/resp1/refs/heads/main/logo.png" 
              alt="Logo" 
              className="h-[35px] md:h-[45px] w-auto object-contain"
            />
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
            
            {/* Search Input Section */}
            <div className="flex items-center">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 180, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <input 
                      autoFocus
                      type="text"
                      placeholder="Ara..."
                      className="w-full bg-transparent border-b border-black/20 focus:border-black outline-none text-sm py-1 px-2"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-black p-2 hover:text-gray-500 transition-colors" 
                aria-label="Arama"
              >
                {isSearchOpen ? <X size={20} /> : <Search size={20} />}
              </button>
            </div>

            {/* Cart Button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="text-black p-2 hover:text-gray-500 transition-colors relative" 
              aria-label="Sepet"
            >
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-black rounded-full border border-white"></span>
            </button>

            {/* Custom Menu Trigger */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hidden sm:flex items-center cursor-pointer"
            >
              <span className="text-[11px] font-[700] tracking-widest mr-[5px]">MENÜ</span>
              <div className="flex flex-col gap-[5px] items-end">
                <div className="w-[30px] h-[2px] bg-black"></div>
                <div className="w-[20px] h-[2px] bg-black"></div>
              </div>
            </button>

            {/* Quote Button */}
            <button className="hidden sm:block bg-black text-white px-6 py-3 text-xs font-[600] uppercase tracking-wider hover:bg-gray-800 transition-all">
              TEKLİF AL
            </button>
            
            <button 
              className="lg:hidden text-black p-2 flex items-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menüyü Aç/Kapat"
            >
              {isMenuOpen ? (
                <X size={28} />
              ) : (
                <div className="flex flex-col gap-[5px] items-end px-1">
                  <div className="w-[30px] h-[2px] bg-black"></div>
                  <div className="w-[20px] h-[2px] bg-black"></div>
                </div>
              )}
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

      {/* Cart Drawer Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[201] shadow-2xl p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-2xl font-[700] tracking-tight">SEPETİNİZ</h2>
                <button onClick={() => setIsCartOpen(false)} className="text-black">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                  <ShoppingBag size={40} />
                </div>
                <div>
                  <p className="text-lg font-[600] text-black">Sepetiniz boş.</p>
                  <p className="text-sm text-gray-500 mt-2">Görünüşe göre henüz bir ürün eklemediniz.</p>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="bg-black text-white px-8 py-4 text-xs font-[700] uppercase tracking-widest hover:bg-gray-800 transition-all"
                >
                  ALIŞVERİŞE BAŞLA
                </button>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-[600] text-gray-500 uppercase">Toplam</span>
                  <span className="text-xl font-[700]">₺0.00</span>
                </div>
                <button disabled className="w-full bg-gray-100 text-gray-400 py-5 text-xs font-[700] uppercase tracking-widest cursor-not-allowed">
                  ÖDEMEYE GEÇ
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
