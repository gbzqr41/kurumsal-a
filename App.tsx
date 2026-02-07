
import React from 'react';
import Header from './components/Header.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="flex-grow w-full">
        {/* İçerik buraya gelecek */}
      </main>
    </div>
  );
};

export default App;
