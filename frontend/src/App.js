import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ReferencesPage = lazy(() => import('./pages/ReferencesPage'));
const EquipmentPage = lazy(() => import('./pages/EquipmentPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const AdminMessagesPage = lazy(() => import('./pages/AdminMessagesPage'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
      <p className="mt-4 text-gray-600">Ladataan...</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/palvelut" element={<ServicesPage />} />
            <Route path="/referenssit" element={<ReferencesPage />} />
            <Route path="/kalusto" element={<EquipmentPage />} />
            <Route path="/ukk" element={<FAQPage />} />
            <Route path="/yhteystiedot" element={<ContactPage />} />
            <Route path="/tietosuoja" element={<PrivacyPage />} />
            <Route path="/admin/viestit" element={<AdminMessagesPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;