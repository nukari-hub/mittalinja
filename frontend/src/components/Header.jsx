import React, { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src="https://customer-assets.emergentagent.com/job_mittalinja-preview/artifacts/oxvp2ga3_cropped-mittalinja-logo-300x86-1.png"
              alt="Mittalinja A1"
              className="h-8 md:h-10 w-auto cursor-pointer"
              onClick={() => scrollToSection('hero')}
            />
            <img 
              src="https://customer-assets.emergentagent.com/job_mittalinja-preview/artifacts/a4nyyudm_AAA-Gold-logo-2025-FI-transparent-768x431.png"
              alt="AAA Gold"
              className="h-10 md:h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Etusivu
            </button>
            <button
              onClick={() => scrollToSection('palvelut')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Palvelut
            </button>
            <button
              onClick={() => scrollToSection('referenssit')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Referenssit
            </button>
            <button
              onClick={() => scrollToSection('kalusto')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Kalusto
            </button>
            <button
              onClick={() => scrollToSection('ukk')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              UKK
            </button>
            <button
              onClick={() => scrollToSection('yhteystiedot')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Yhteystiedot
            </button>
          </nav>

          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <a
              href="mailto:info@mittalinja.fi"
              className="hidden xl:flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              <span className="font-medium">info@mittalinja.fi</span>
            </a>
            <a
              href="tel:+358400460872"
              className="hidden lg:flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">0400 460 872</span>
            </a>
            <Button
              onClick={() => scrollToSection('yhteystiedot')}
              className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
            >
              Pyydä tarjous
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;