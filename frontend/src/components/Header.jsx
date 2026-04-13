import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
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
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src="https://customer-assets.emergentagent.com/job_mittalinja-preview/artifacts/oxvp2ga3_cropped-mittalinja-logo-300x86-1.png"
              alt="Mittalinja A1"
              className="h-8 md:h-10 w-auto"
            />
            <img 
              src="https://customer-assets.emergentagent.com/job_mittalinja-preview/artifacts/a4nyyudm_AAA-Gold-logo-2025-FI-transparent-768x431.png"
              alt="AAA Gold"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors duration-200 font-medium ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Etusivu
            </Link>
            <Link
              to="/palvelut"
              className={`transition-colors duration-200 font-medium ${
                isActive('/palvelut') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Palvelut
            </Link>
            <Link
              to="/referenssit"
              className={`transition-colors duration-200 font-medium ${
                isActive('/referenssit') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Referenssit
            </Link>
            <Link
              to="/kalusto"
              className={`transition-colors duration-200 font-medium ${
                isActive('/kalusto') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Kalusto
            </Link>
            <Link
              to="/ukk"
              className={`transition-colors duration-200 font-medium ${
                isActive('/ukk') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              UKK
            </Link>
            <Link
              to="/yhteystiedot"
              className={`transition-colors duration-200 font-medium ${
                isActive('/yhteystiedot') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Yhteystiedot
            </Link>
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
            <Link to="/yhteystiedot">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
                Pyydä tarjous
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;