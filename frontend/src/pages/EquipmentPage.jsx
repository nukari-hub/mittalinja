import React from 'react';
import SEOHead from '../components/SEOHead';
import PageSEO from '../components/PageSEO';
import Header from '../components/Header';
import EquipmentSection from '../components/EquipmentSection';
import Footer from '../components/Footer';

const EquipmentPage = () => {
  return (
    <>
      <SEOHead />
      <PageSEO 
        title="Kalusto - Huippuluokan Mittauslaitteet"
        description="Nykyaikaiset mittauslaitteet: Leica TS16, DJI Phantom 4 RTK, Leica RTC360 laserkeilain, Trimble X12. Millimetritarkkuus, RTK-GNSS, 3D-skannaus."
        keywords="mittauslaitteet, Leica, Trimble, drone mittaus, laserkeilain, taakymeetri, GNSS vastaanotin, 3D skanneri"
        canonicalUrl="https://mittalinja.fi/kalusto"
      />
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