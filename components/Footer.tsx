
import React from 'react';
import { Mail, Github, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black text-white pt-32 pb-12 px-6">
      <div className="custom-container">
        {/* Big CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-32 gap-16">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-8xl font-[700] leading-[0.9] tracking-tighter mb-16">
              Birlikte <span className="text-gray-500 italic font-light">sıra dışı</span> bir şeyler yaratalım mı?
            </h2>
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              <a href="mailto:hello@novadynamics.com" className="group flex items-center space-x-3 text-xl md:text-3xl font-[600] border-b-2 border-white/20 pb-2 hover:border-white transition-all">
                <span>merhaba@novadynamics.com</span>
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a href="#" className="group flex items-center space-x-3 text-xl md:text-3xl font-[600] border-b-2 border-white/20 pb-2 hover:border-white transition-all">
                <span>Bizimle Çalışın</span>
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-96 space-y-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-[700]">BÜLTENE ABONE OLUN</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="E-posta Adresiniz"
                className="w-full bg-transparent border-b border-white/20 py-6 text-lg focus:outline-none focus:border-white transition-colors"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-[700] uppercase tracking-widest bg-white text-black px-6 py-2 hover:bg-gray-200 transition-colors">
                KAYDOL
              </button>
            </div>
            <p className="text-[10px] text-gray-500 font-[500] leading-relaxed">
              En son güncellemeler, tasarım trendleri ve teknoloji haberlerini doğrudan gelen kutunuza gönderelim.
            </p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-8 font-[700]">STÜDYO</p>
            <ul className="space-y-4 text-sm font-[500] text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Hikayemiz</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ekibimiz</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kariyer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Felsefemiz</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-8 font-[700]">HİZMETLER</p>
            <ul className="space-y-4 text-sm font-[500] text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Marka Stratejisi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Özel Yazılım</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kreatif Danışmanlık</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UX Araştırması</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-8 font-[700]">LOKASYONLAR</p>
            <ul className="space-y-4 text-sm font-[500] text-gray-400">
              <li>İstanbul, TR</li>
              <li>Berlin, DE</li>
              <li>London, UK</li>
              <li>New York, US</li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-8 font-[700]">SOSYAL MEDYA</p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-full"><Twitter size={20} /></a>
              <a href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-full"><Linkedin size={20} /></a>
              <a href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-full"><Instagram size={20} /></a>
              <a href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-full"><Github size={20} /></a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-[10px] uppercase tracking-widest text-gray-500 font-[500]">
            © 2024 Nova Dynamics. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-gray-500 font-[500]">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Çerez Ayarları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
