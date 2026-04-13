import React from 'react';
import SEOHead from '../components/SEOHead';
import PageSEO from '../components/PageSEO';
import Header from '../components/Header';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const FAQPage = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Mitä palveluita Mittalinja A1 tarjoaa?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Tarjoamme kattavat mittauspalvelut: rakennusmittaus, maanmittaus, drone-kartoitus, laserkeilaus, laskenta ja tarkepiirustukset sekä koneohjausmallit.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Kuinka tarkka rakennusmittaus on?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Käytämme millimetritarkkoja mittauslaitteita, joten mittaustarkkuutemme on tyypillisesti ±1-2mm.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Kuinka paljon mittauspalvelut maksavat?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Hinnat riippuvat projektin laajuudesta ja monimutkaisuudesta. Pyydä ilmainen tarjous!'
        }
      }
    ]
  };

  return (
    <>
      <SEOHead />
      <PageSEO 
        title="UKK - Usein Kysytyt Kysymykset Mittauspalveluista"
        description="Vastauksia 95 yleisimpiin kysymyksiin mittauspalveluista: hinnat, tarkkuus, aikataulu, laitteet. Rakennusmittaus, maanmittaus, laserkeilaus, drone-kartoitus."
        keywords="mittaus ukk, mittauspalvelut kysymykset, rakennusmittaus hinta, maanmittaus tarkkuus, laserkeilaus kysymykset"
        canonicalUrl="https://mittalinja.fi/ukk"
        structuredData={faqSchema}
      />
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