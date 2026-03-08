import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TargetCustomers from '../components/TargetCustomers';
import ReferencesSection from '../components/ReferencesSection';
import EquipmentSection from '../components/EquipmentSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TargetCustomers />
      <ReferencesSection />
      <EquipmentSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;