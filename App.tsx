
import React from 'react';
import Header from './components/Header.tsx';
import HeroSlider from './components/HeroSlider.tsx';
import Services from './components/Services.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="flex-grow w-full">
        <HeroSlider />
        <Services />
      </main>
    </div>
  );
};

export default App;
