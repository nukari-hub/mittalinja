import React from 'react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1682663810771-89d21838530f"
          alt="Mittauspalvelut"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/80 to-blue-600/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
          <p className="text-blue-200 text-lg md:text-xl font-medium tracking-wide uppercase">
            Rakennustekniset mittauspalvelut ja kartoitukset
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            A1-Luokan <br />
            <span className="text-blue-200">mittauspalveluja</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            A1-Luokan mittauspalveluja vuodesta 2004 alkaen. Asiakkaitamme ovat rakennusliikkeet, 
            maanrakentajat, suunnittelutoimistot, kunnat, kaupungit sekä omakotitalorakentajat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              onClick={() => scrollToSection('yhteystiedot')}
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-6 text-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Pyydä tarjous
            </Button>
            <Button
              onClick={() => scrollToSection('palvelut')}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-6 text-lg transition-all duration-200 hover:scale-105"
            >
              Tutustu palveluihin
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <span className="text-sm md:text-base font-medium">Huippuluokan mittauslaitteet</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <span className="text-sm md:text-base font-medium">Yli 20 vuoden kokemus</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <span className="text-sm md:text-base font-medium">Vastaamme 24h sisällä</span>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={() => scrollToSection('palvelut')}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors duration-200 animate-bounce"
        >
          <span className="text-sm font-medium">Vieritä alas</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;