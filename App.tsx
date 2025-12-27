import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CompanyProfile from './components/CompanyProfile';
import History from './components/History';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CompanyProfile />
        <History />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;