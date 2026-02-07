
import React from 'react';
import { Mail, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black pt-32 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Big CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-8xl font-serif leading-none tracking-tighter mb-12">
              Ready to create something <span className="italic text-gray-400">extraordinary</span>?
            </h2>
            <div className="flex flex-wrap gap-8">
              <a href="mailto:hello@novadynamics.com" className="text-2xl font-medium border-b-2 border-white pb-2 hover:text-gray-400 hover:border-gray-400 transition-all">
                hello@novadynamics.com
              </a>
              <a href="#" className="text-2xl font-medium border-b-2 border-white pb-2 hover:text-gray-400 hover:border-gray-400 transition-all">
                Work With Us
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-80 space-y-8">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Newsletter</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-sm uppercase tracking-widest font-bold">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-8">Studio</p>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Philosophy</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-8">Service</p>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Branding</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Creative Strategy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UX Research</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-8">Locations</p>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>Berlin, DE</li>
              <li>London, UK</li>
              <li>New York, US</li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-8">Social</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-full"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-full"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-full"><Instagram size={18} /></a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-[10px] uppercase tracking-widest text-gray-600">
            © 2024 Nova Dynamics. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
