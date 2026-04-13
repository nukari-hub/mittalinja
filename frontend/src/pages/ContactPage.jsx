import React from 'react';
import SEOHead from '../components/SEOHead';
import PageSEO from '../components/PageSEO';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const ContactPage = () => {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'Mittalinja A1 Oy',
      'telephone': '+358400460872',
      'email': 'info@mittalinja.fi',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Naapurinkuja 1',
        'addressLocality': 'Vantaa',
        'postalCode': '01670',
        'addressCountry': 'FI'
      }
    }
  };

  return (
    <>
      <SEOHead />
      <PageSEO 
        title="Yhteystiedot - Ota Yhteyttä | Pyydä Tarjous"
        description="Ota yhteyttä Mittalinja A1:een. Puh: 0400 460 872, Sähköposti: info@mittalinja.fi. Vastaamme 24h sisällä. Naapurinkuja 1, 01670 Vantaa."
        keywords="mittaus yhteystiedot, pyydä tarjous mittaus, Mittalinja yhteystiedot, mittaus Vantaa yhteystiedot"
        canonicalUrl="https://mittalinja.fi/yhteystiedot"
        structuredData={contactSchema}
      />
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