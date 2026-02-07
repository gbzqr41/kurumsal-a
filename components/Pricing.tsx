
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PRICING_PLANS = [
  {
    name: "Başlangıç",
    price: "4.900",
    description: "Yeni başlayan ve dijital varlığını oluşturmak isteyen butik markalar için.",
    features: [
      "Modern Web Tasarımı",
      "Mobil Uyumluluk",
      "Temel SEO Optimizasyonu",
      "5 Sayfaya Kadar İçerik",
      "1 Yıl Ücretsiz Teknik Destek"
    ],
    isFeatured: false
  },
  {
    name: "Profesyonel",
    price: "12.500",
    description: "Büyüyen işletmeler ve dijitalde fark yaratmak isteyen profesyoneller için.",
    features: [
      "Özel UI/UX Tasarımı",
      "E-ticaret Entegrasyonu",
      "Gelişmiş SEO Yönetimi",
      "Sınırsız Sayfa Ekleme",
      "Performans Analiz Paneli",
      "7/24 Öncelikli Destek"
    ],
    isFeatured: true
  },
  {
    name: "Kurumsal",
    price: "Özel",
    description: "Büyük ölçekli projeler ve özel yazılım ihtiyaçları olan global markalar için.",
    features: [
      "Tamamen Özel Yazılım Altyapısı",
      "API Entegrasyonları",
      "Yapay Zeka Çözümleri",
      "Yüksek Güvenlik Protokolleri",
      "Özel Proje Yöneticisi",
      "SLA Garantisi"
    ],
    isFeatured: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="custom-container px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-[600] uppercase tracking-[0.3em] text-gray-400 mb-4 block"
          >
            Fiyatlandırma
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-[700] text-black tracking-tight"
          >
            Şeffaf ve Esnek <br /> Çözüm Planları
          </motion.h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-10 border transition-all duration-500 ${
                plan.isFeatured 
                ? 'bg-black text-white border-black shadow-2xl scale-105 z-10' 
                : 'bg-white text-black border-gray-100 hover:border-gray-300'
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-[700] px-4 py-1 uppercase tracking-widest rounded-full">
                  En Çok Tercih Edilen
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xs font-[700] uppercase tracking-[0.2em] mb-4 opacity-60">
                  {plan.name} Planı
                </h3>
                <div className="flex items-baseline">
                  {plan.price !== "Özel" && <span className="text-2xl font-[600] mr-1">₺</span>}
                  <span className="text-5xl font-[700] tracking-tighter">
                    {plan.price}
                  </span>
                  {plan.price !== "Özel" && <span className="text-sm opacity-60 ml-2">/başlayan</span>}
                </div>
              </div>

              <p className={`text-sm mb-10 leading-relaxed ${plan.isFeatured ? 'text-white/70' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <Check size={16} className={plan.isFeatured ? 'text-white' : 'text-black'} />
                    <span className="text-sm font-[500]">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 text-xs font-[700] uppercase tracking-widest transition-all duration-300 ${
                plan.isFeatured 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-black text-white hover:bg-gray-800'
              }`}>
                {plan.price === "Özel" ? "BİZE ULAŞIN" : "HEMEN BAŞLAYIN"}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Info Text */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-sm text-gray-400 font-[500]"
        >
          Tüm fiyatlara KDV dahildir. Özel projeler için lütfen bizimle iletişime geçin.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
