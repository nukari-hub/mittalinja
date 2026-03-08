import React from 'react';
import { Card, CardContent } from './ui/card';
import { CheckCircle } from 'lucide-react';

const ReferencesSection = () => {
  const references = [
    {
      title: 'Taloyhtiö Kalliokatu 15',
      location: 'Helsinki',
      description: 'Tontin rajamittaus ja korkeuskäyräkartan laatiminen',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
      year: '2024'
    },
    {
      title: 'Rakennusliike Oy',
      location: 'Espoo',
      description: 'Rakennusmittaus ja toteumapiirustukset',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
      year: '2024'
    },
    {
      title: 'Kaupungin infrahanke',
      location: 'Vantaa',
      description: 'Drone-kartoitus ja koneohjausmallit tierakentamiseen',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9',
      year: '2023'
    },
    {
      title: 'Teollisuuskiinteistö',
      location: 'Helsinki',
      description: 'Laserkeilaus ja BIM-mallinnus',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
      year: '2023'
    },
    {
      title: 'Omakotitalo',
      location: 'Sipoo',
      description: 'Tontin mittaus ja paalutus',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
      year: '2024'
    },
    {
      title: 'Liikekiinteistö',
      location: 'Espoo',
      description: 'Putki- ja johtotarkepiirustukset',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
      year: '2023'
    }
  ];

  return (
    <section id="referenssit" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-base md:text-lg font-semibold text-blue-600 uppercase tracking-wide">
            Referenssit
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
            Toteuttamamme projektit
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Olemme ylpeitä toteuttamistamme projekteista ympäri Uuttamaata
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((ref, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={ref.image}
                  alt={ref.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-blue-400 bg-blue-900/50 px-3 py-1 rounded-full">
                      {ref.year}
                    </span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 space-y-3">
                <h4 className="text-xl font-bold text-gray-900">{ref.title}</h4>
                <p className="text-sm text-gray-500 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                  {ref.location}
                </p>
                <p className="text-gray-600 leading-relaxed">{ref.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Haluatko nähdä lisää projektejamme tai saada tarjouksen omaan projektiisi?
          </p>
          <a
            href="#yhteystiedot"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Ota yhteyttä
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;