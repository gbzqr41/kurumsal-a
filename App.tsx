
import React from 'react';
import Header from './components/Header.tsx';
import HeroSlider from './components/HeroSlider.tsx';
import Services from './components/Services.tsx';
import Products from './components/Products.tsx';
import Pricing from './components/Pricing.tsx';
import Projects from './components/Projects.tsx';
import Blog from './components/Blog.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="flex-grow w-full">
        <HeroSlider />
        <Services />
        <Products />
        <Pricing />
        <Projects />
        <Blog />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
