import React from 'react';
import SEOHead from '../components/SEOHead';
import PageSEO from '../components/PageSEO';
import Header from '../components/Header';
import ReferencesSection from '../components/ReferencesSection';
import Footer from '../components/Footer';

const ReferencesPage = () => {
  return (
    <>
      <SEOHead />
      <PageSEO 
        title="Referenssit - Toteutetut Mittausprojektit"
        description="Yli 46 toteutettua mittausprojektia Uudellamaalla. Asiakkainamme Varte, Helen, Kone, Skanska, Fortum. Rakennukset, infrahankkeet, teollisuuskohteet."
        keywords="mittaus referenssit, toteutetut projektit, rakennusmittaus projektit, laserkeilaus referenssit, Varte, Helen, Kone, Skanska"
        canonicalUrl="https://mittalinja.fi/referenssit"
      />
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