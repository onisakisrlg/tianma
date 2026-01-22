import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CompanyProfile from './components/CompanyProfile';
import History from './components/History';
import Careers from './components/Careers';
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
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;