import React from 'react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-24">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;