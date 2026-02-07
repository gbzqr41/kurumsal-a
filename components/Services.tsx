
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Zap, Shield, BarChart3, Globe, Cpu } from 'lucide-react';

const SERVICES_DATA = [
  {
    icon: <Monitor size={32} />,
    title: "Dijital Strateji",
    description: "Markanızın dijital varlığını güçlendirecek, veriye dayalı stratejiler geliştiriyoruz."
  },
  {
    icon: <Cpu size={32} />,
    title: "Yazılım Geliştirme",
    description: "En son teknolojileri kullanarak ölçeklenebilir ve güvenli web uygulamaları inşa ediyoruz."
  },
  {
    icon: <Zap size={32} />,
    title: "UX & UI Tasarım",
    description: "Kullanıcı deneyimini önceliğe alarak estetik ve fonksiyonel arayüzler tasarlıyoruz."
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Veri Analitiği",
    description: "İşletmenizin performansını artırmak için karmaşık verileri anlamlı içgörülere dönüştürüyoruz."
  },
  {
    icon: <Shield size={32} />,
    title: "Siber Güvenlik",
    description: "Dijital varlıklarınızı en üst düzey güvenlik protokolleri ile koruma altına alıyoruz."
  },
  {
    icon: <Globe size={32} />,
    title: "Global Çözümler",
    description: "Dünya standartlarında çözümlerle markanızı uluslararası pazarda öne çıkarıyoruz."
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="custom-container px-6">
        {/* Section Heading */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-[600] uppercase tracking-[0.3em] text-gray-500 mb-4 block"
          >
            Hizmetlerimiz
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-[700] text-black tracking-tight"
          >
            Sizin İçin Neler Yapıyoruz?
          </motion.h2>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 shadow-sm border border-gray-100 group transition-all duration-300"
            >
              <div className="text-black mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-[600] text-black mb-4 uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="text-gray-600 font-[500] leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 pt-8 border-t border-gray-50">
                <button className="text-[10px] font-[700] uppercase tracking-widest text-black flex items-center group-hover:gap-3 transition-all">
                  DETAYLI BİLGİ <span className="ml-2 text-lg">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
