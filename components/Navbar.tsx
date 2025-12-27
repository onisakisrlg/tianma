import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar shadow/transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ホーム', href: '#home' },
    { name: '事業内容', href: '#services' },
    { name: '会社概要', href: '#about' },
    { name: '沿革', href: '#history' },
    { name: 'お問い合わせ', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-white/90 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a 
              href="#home" 
              className="flex-shrink-0 flex items-center gap-3 group cursor-pointer" 
              onClick={(e) => handleNavClick(e, '#home')}
            >
              <div className="bg-blue-900 text-white p-2 rounded-lg group-hover:bg-blue-800 transition-colors">
                <Icon name="Globe" size={24} />
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-wide">株式会社天馬</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-600 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-bold transition-all hover:bg-slate-50 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-4 bg-blue-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
            >
              お問い合わせ
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-blue-900 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              <Icon name={isOpen ? 'X' : 'Menu'} size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'
        } bg-white`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-3 text-base font-bold text-slate-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 pb-2 px-2">
             <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block w-full text-center bg-blue-900 text-white px-5 py-3 rounded-lg text-base font-bold hover:bg-blue-800 transition-colors shadow-md cursor-pointer"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;