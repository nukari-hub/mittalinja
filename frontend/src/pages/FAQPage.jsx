import React from 'react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const FAQPage = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-24">
          <FAQSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default FAQPage;