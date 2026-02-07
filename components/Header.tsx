
import React from 'react';

const Header: React.FC = () => {
  const menuItems = [
    { name: 'ANASAYFA', active: true },
    { name: 'HAKKIMIZDA', active: false },
    { name: 'HİZMETLERİMİZ', active: false },
    { name: 'İLETİŞİM', active: false },
  ];

  return (
    <header className="w-full h-[100px] bg-white flex items-center shadow-sm">
      <div className="custom-container px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-[28px] font-[700] text-black tracking-tight">
          LOGO
        </div>

        {/* Menu */}
        <nav className="flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`text-sm tracking-wide transition-colors ${
                item.active ? 'font-[600]' : 'font-[500] text-gray-600 hover:text-black'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Button */}
        <button className="bg-black text-white p-[10px] text-xs font-[600] uppercase tracking-wider hover:bg-gray-800 transition-all">
          TEKLİF AL
        </button>
      </div>
    </header>
  );
};

export default Header;
