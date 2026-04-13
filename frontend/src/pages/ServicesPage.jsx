import React from 'react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-24">
          <ServicesSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;