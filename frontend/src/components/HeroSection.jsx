import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1682663810771-89d21838530f?w=1920&q=75&fm=webp&fit=crop"
          alt="Mittauspalvelut tausta"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-700/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Text */}
          <div className="space-y-6 md:space-y-8 animate-fadeIn text-white text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              A1-Luokan<br />
              <span className="text-blue-300">mittauspalveluja</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-blue-100 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              A1-Luokan mittauspalveluja vuodesta 2004 alkaen. Asiakkaitamme ovat rakennusliikkeet, 
              maanrakentajat, suunnittelutoimistot, kunnat, kaupungit sekä omakotitalorakentajat.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 gap-3 md:gap-4 py-4 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span className="text-sm md:text-base font-medium">Huippuluokan mittauslaitteet</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span className="text-sm md:text-base font-medium">Yli 20 vuoden kokemus</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span className="text-sm md:text-base font-medium">Vastaamme 24h sisällä</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Link to="/yhteystiedot" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 md:px-10 py-6 md:py-7 text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
                >
                  Pyydä tarjous
                </Button>
              </Link>
              <Link to="/palvelut" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 md:px-10 py-6 md:py-7 text-base md:text-lg transition-all duration-300 hover:scale-105"
                >
                  Tutustu palveluihin
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="hidden lg:flex items-center justify-center animate-fadeIn">
            <div className="relative w-full max-w-2xl">
              <img
                src="https://customer-assets.emergentagent.com/job_mittalinja-preview/artifacts/jcu7153m_mittalinja.png"
                alt="Mittaustyö illustraatio"
                className="w-full h-auto drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToBottom}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors duration-200 animate-slowBounce"
      >
        <span className="text-sm font-medium">Vieritä alas</span>
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;