import React from 'react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import ReferencesSection from '../components/ReferencesSection';
import Footer from '../components/Footer';

const ReferencesPage = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-24">
          <ReferencesSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ReferencesPage;