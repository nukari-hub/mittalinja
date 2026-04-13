import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ReferencesPage from './pages/ReferencesPage';
import EquipmentPage from './pages/EquipmentPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import AdminMessagesPage from './pages/AdminMessagesPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
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
      </BrowserRouter>
    </div>
  );
}

export default App;