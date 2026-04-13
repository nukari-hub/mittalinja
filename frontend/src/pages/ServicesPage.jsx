import React from 'react';
import SEOHead from '../components/SEOHead';
import PageSEO from '../components/PageSEO';
import Header from '../components/Header';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Mittauspalvelut',
    'provider': {
      '@type': 'Organization',
      'name': 'Mittalinja A1 Oy'
    },
    'serviceType': 'Rakennustekniset mittauspalvelut',
    'areaServed': ['Helsinki', 'Vantaa', 'Espoo', 'Uusimaa'],
    'description': 'Kattavat mittauspalvelut: rakennusmittaus, maanmittaus, drone-kartoitus, laserkeilaus, koneohjausmallit ja tarkepiirustukset.'
  };

  return (
    <>
      <SEOHead />
      <PageSEO 
        title="Mittauspalvelut - Rakennusmittaus, Maanmittaus, Laserkeilaus"
        description="Ammattitaitoisia mittauspalveluja Uudellamaalla: Rakennusmittaus (±1-2mm), maanmittaus (±1-3cm), drone-kartoitus, laserkeilaus, koneohjausmallit. Yli 20v kokemus."
        keywords="rakennusmittaus, maanmittaus, drone kartoitus, laserkeilaus, koneohjausmallit, tarkepiirustukset, mittaus Helsinki, mittaus Vantaa"
        canonicalUrl="https://mittalinja.fi/palvelut"
        structuredData={servicesSchema}
      />
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