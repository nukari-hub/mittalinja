import React from 'react';
import SEOHead from '../components/SEOHead';
import PageSEO from '../components/PageSEO';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TargetCustomers from '../components/TargetCustomers';
import FAQTeaser from '../components/FAQTeaser';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <SEOHead />
      <PageSEO 
        title="A1-Luokan Mittauspalvelut Helsinki, Vantaa, Espoo"
        description="A1-luokan mittauspalveluja vuodesta 2004. Rakennusmittaus, maanmittaus, drone-kartoitus, laserkeilaus, koneohjausmallit. Vastaamme 24h sisällä. Pyydä tarjous!"
        keywords="mittauspalvelut, rakennusmittaus, maanmittaus, drone kartoitus, laserkeilaus, koneohjausmallit, A1-luokka, Helsinki, Vantaa, Espoo"
        canonicalUrl="https://mittalinja.fi/"
      />
      <div className="min-h-screen bg-white">
        <Header />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TargetCustomers />
        <FAQTeaser />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;