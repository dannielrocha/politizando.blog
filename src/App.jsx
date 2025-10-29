import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import News from '@/pages/News';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Support from '@/pages/Support';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/quem-somos" element={<About />} />
          <Route path="/fale-conosco" element={<Contact />} />
          <Route path="/apoie" element={<Support />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
