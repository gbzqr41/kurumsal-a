
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    date: "12 MART 2024",
    title: "Dijital Dönüşümde Yeni Nesil Stratejiler",
    excerpt: "Yapay zeka ve otomasyonun iş dünyasındaki yeri her geçen gün sağlamlaşıyor. Peki şirketiniz buna hazır mı?",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    category: "TEKNOLOJİ"
  },
  {
    id: 2,
    date: "05 MART 2024",
    title: "2025 Tasarım Trendleri: Minimalizm ve Ötesi",
    excerpt: "Kullanıcı deneyiminde sadelik hiç bu kadar karmaşık olmamıştı. Tasarımın geleceğine dair içgörüler.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    category: "TASARIM"
  },
  {
    id: 3,
    date: "28 ŞUBAT 2024",
    title: "Sürdürülebilir Yazılım Geliştirme Kültürü",
    excerpt: "Yeşil kod yazmak sadece bir trend değil, bir zorunluluk. Verimliliği artırırken dünyayı korumanın yolları.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    category: "YAZILIM"
  }
];

const Blog: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="custom-container px-6">
        {/* Section Heading */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-[700] uppercase tracking-[0.4em] text-gray-400 mb-4 block"
            >
              GÜNCEL YAZILAR
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-[700] text-black tracking-tighter"
            >
              Düşüncelerimiz & <br /> <span className="text-gray-300 italic">Haberler</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <button className="flex items-center space-x-2 text-xs font-[700] uppercase tracking-widest border-b-2 border-black pb-2 hover:text-gray-400 hover:border-gray-400 transition-all">
              TÜM BLOG YAZILARINI GÖR
            </button>
          </motion.div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-8">
                <motion.img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white px-4 py-1.5 text-[10px] font-[700] tracking-widest text-black uppercase">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-[10px] font-[600] text-gray-400 tracking-widest">
                  {post.date}
                </div>
                <h3 className="text-2xl font-[700] text-black leading-tight tracking-tight group-hover:text-gray-500 transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-gray-500 font-[500] text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="pt-4">
                  <a href="#" className="inline-flex items-center space-x-2 text-[10px] font-[700] uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                    <span>DEVAMINI OKU</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-16 md:hidden text-center">
          <button className="px-10 py-4 border border-black text-[10px] font-[700] uppercase tracking-widest hover:bg-black hover:text-white transition-all">
            TÜMÜNÜ GÖR
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
