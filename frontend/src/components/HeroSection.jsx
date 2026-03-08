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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8 animate-fadeIn text-white">
            <p className="text-blue-200 text-base md:text-lg font-semibold tracking-widest uppercase">
              Rakennustekniset mittauspalvelut ja kartoitukset
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              A1-Luokan<br />
              <span className="text-blue-300">mittauspalveluja</span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
              A1-Luokan mittauspalveluja vuodesta 2004 alkaen. Asiakkaitamme ovat rakennusliikkeet, 
              maanrakentajat, suunnittelutoimistot, kunnat, kaupungit sekä omakotitalorakentajat.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 py-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span className="text-sm md:text-base font-medium">Huippuluokan mittauslaitteet</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span className="text-sm md:text-base font-medium">Yli 20 vuoden kokemus</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span className="text-sm md:text-base font-medium">Vastaamme 24h sisällä</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('yhteystiedot')}
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-10 py-7 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                Pyydä tarjous
              </Button>
              <Button
                onClick={() => scrollToSection('palvelut')}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-10 py-7 text-lg transition-all duration-300 hover:scale-105"
              >
                Tutustu palveluihin
              </Button>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="hidden lg:flex items-center justify-center animate-fadeIn">
            <div className="relative w-full max-w-2xl">
              <img
                src="https://customer-assets.emergentagent.com/job_mittalinja-preview/artifacts/sklb948d_Nimeto%CC%88n%20malli.png"
                alt="Mittaustyö illustraatio"
                className="w-full h-auto drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={() => scrollToSection('palvelut')}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors duration-200 animate-slowBounce"
      >
        <span className="text-sm font-medium">Vieritä alas</span>
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;