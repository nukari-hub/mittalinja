import React from 'react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import EquipmentSection from '../components/EquipmentSection';
import Footer from '../components/Footer';

const EquipmentPage = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-24">
          <EquipmentSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default EquipmentPage;