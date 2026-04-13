import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ReferencesPage from './pages/ReferencesPage';
import EquipmentPage from './pages/EquipmentPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/palvelut" element={<ServicesPage />} />
          <Route path="/referenssit" element={<ReferencesPage />} />
          <Route path="/kalusto" element={<EquipmentPage />} />
          <Route path="/ukk" element={<FAQPage />} />
          <Route path="/yhteystiedot" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;