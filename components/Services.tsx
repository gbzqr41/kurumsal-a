
import React from 'react';
import { motion } from 'framer-motion';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
}

const SERVICES: Service[] = [
  { id: '1', title: 'Strateji & Marka', description: 'Geleceğin pazar liderleri için vizyoner yol haritaları.', category: 'STRATEGY' },
  { id: '2', title: 'Özel Yazılım', description: 'Karmaşık iş süreçlerini kolaylaştıran ölçeklenebilir altyapılar.', category: 'DEVELOPMENT' },
  { id: '3', title: 'Kreatif Tasarım', description: 'Kullanıcıyı büyüleyen, estetik ve fonksiyonel arayüzler.', category: 'DESIGN' },
  { id: '4', title: 'Yapay Zeka', description: 'İşletmenizi veriyle dönüştüren akıllı çözümler.', category: 'AI' },
];

const Services: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 mb-6 block font-bold">Neler Yapıyoruz?</span>
            <h2 className="text-5xl md:text-8xl font-serif tracking-tighter leading-none">
              Sınırları <br /> <span className="italic text-gray-500">Zorlayan</span> Çözümler.
            </h2>
          </div>
          <p className="text-gray-500 md:max-w-xs text-sm leading-relaxed uppercase tracking-widest font-medium">
            Her proje bizim için bir sanat eseridir. Teknolojiyi estetikle harmanlıyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={service.id}
              whileHover={{ backgroundColor: '#111' }}
              className="group relative p-12 bg-[#0a0a0a] transition-all duration-700 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 group-hover:bg-white transition-all duration-700" />
              <span className="text-[9px] uppercase tracking-[0.4em] text-gray-600 mb-16 block">
                {service.category} / 0{idx + 1}
              </span>
              <h3 className="text-3xl font-serif mb-8 group-hover:translate-x-2 transition-transform duration-500">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-12 group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
              <div className="flex items-center text-[10px] uppercase tracking-widest font-black opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                Detaylar <span className="ml-3 text-xl">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
