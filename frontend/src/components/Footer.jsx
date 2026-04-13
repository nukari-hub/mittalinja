import React from 'react';
import { Phone, Mail, MapPin, FileText } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="https://customer-assets.emergentagent.com/job_mittalinja-preview/artifacts/oxvp2ga3_cropped-mittalinja-logo-300x86-1.png"
              alt="Mittalinja A1"
              className="h-10 w-auto mb-4"
            />
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                <div>
                  <p>Naapurinkuja 1</p>
                  <p>01670 Vantaa</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <p>Y-tunnus: 2305871-5</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Ota yhteyttä</h4>
            <div className="space-y-3 text-gray-300">
              <a
                href="tel:+358400460872"
                className="flex items-center space-x-3 hover:text-blue-400 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>0400 460 872</span>
              </a>
              <a
                href="mailto:info@mittalinja.fi"
                className="flex items-center space-x-3 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@mittalinja.fi</span>
              </a>
            </div>
          </div>

          {/* Invoicing Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Laskutustiedot</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>Mittalinja A1 Oy (2305871-5)</p>
              <p>Verkkolaskuosoite:</p>
              <p className="font-mono bg-gray-800 px-3 py-2 rounded">003723058715</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              Copyright © {currentYear} Mittalinja A1 Oy
            </p>
            <div className="flex items-center space-x-6">
              <a href="/tietosuoja" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                Tietosuoja
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;