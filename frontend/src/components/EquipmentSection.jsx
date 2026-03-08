import React from 'react';
import { Card, CardContent } from './ui/card';

const EquipmentSection = () => {
  const equipment = [
    {
      name: 'Leica TS16',
      category: 'Taakymeteri',
      description: 'Huippuluokan robottimainen mittauslaite millimetritarkkuudella. Soveltuu rakennusmittaukseen, maanmittaukseen ja tierakentamiseen.',
      image: 'https://images.unsplash.com/photo-1526593714223-37c814d5aea9',
      specs: ['Etäisyystarkkuus: ±1mm', 'Kulmien tarkkuus: 1"', 'Automaattinen kohdistus']
    },
    {
      name: 'DJI Phantom 4 RTK',
      category: 'Mittausdroni',
      description: 'RTK-teknologialla varustettu droni tarkkaan ilmakartoitukseen ja fotogrammetriaan. Tuottaa ortokuvia ja 3D-malleja.',
      image: 'https://images.unsplash.com/photo-1706380003139-7471c33ca2b2',
      specs: ['RTK-tarkkuus: ±3cm', 'Kuvausetäisyys: 7km', 'Lennätysaika: 30min']
    },
    {
      name: 'Leica RTC360',
      category: 'Laserkeilain',
      description: '3D-laserkeilain nopeaan ja tarkkaan ympäristön skannaukseen. Tuottaa miljoonapisteisiä pistepilviä.',
      image: 'https://images.unsplash.com/photo-1694106722138-27187c94f50b',
      specs: ['Skannausnopeus: 2M pistettä/s', 'Kantama: 130m', '360° × 300° kenttä']
    },
    {
      name: 'Leica GS18',
      category: 'GNSS-vastaanotin',
      description: 'RTK-GNSS vastaanotin senttimetritarkkuuteen. Kallistettu mittaus mahdollistaa nopean ja tehokkaan työskentelyn.',
      image: 'https://images.unsplash.com/photo-1628158088936-68ccaaa400dc',
      specs: ['RTK-tarkkuus: ±1cm', 'Kallistettu mittaus 60°', 'Monikanavavastaanotin']
    },
    {
      name: 'Trimble X12',
      category: '3D-Skanneri',
      description: 'Erittäin nopea ja tarkka 3D-laserskanneri vaativiin kohteisiin. Automaattinen rekisteröinti.',
      image: 'https://images.unsplash.com/photo-1682663810771-89d21838530f',
      specs: ['Tarkkuus: 2mm@50m', 'Skannausnopeus: 1M pistettä/s', 'Automaattinen rekisteröinti']
    },
    {
      name: 'Trimble DiNi',
      category: 'Digitaalivaaituskoje',
      description: 'Digitaalinen vaaituskoje tarkkaan korkeuden mittaamiseen. Soveltuu infrarakentamiseen ja rakennusmittaukseen.',
      image: 'https://images.unsplash.com/photo-1694521787162-5373b598945c',
      specs: ['Tarkkuus: 0.3mm/km', 'Muisti: 10000 mittausta', 'USB-liitäntä']
    }
  ];

  return (
    <section id="kalusto" className="py-20 md:py-32 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-base md:text-lg font-semibold text-blue-600 uppercase tracking-wide">
            Kalusto
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
            Huippuluokan mittauslaitteet
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Käytämme alan parhaita ja uusimpia mittauslaitteita tarkan tuloksen takaamiseksi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-semibold text-white bg-blue-600 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h4 className="text-2xl font-bold text-gray-900">{item.name}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <h5 className="text-sm font-semibold text-gray-700 mb-3">Tekniset tiedot:</h5>
                  <ul className="space-y-2">
                    {item.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h4 className="text-2xl md:text-3xl font-bold mb-4">
            Laitteistomme takaa luotettavan ja tarkan lopputuloksen
          </h4>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Kaikki laitteemme ovat säännöllisesti kalibroituja ja huollettuja. Henkilökuntamme on koulutettu
            käyttämään laitteita tehokkaasti ja turvallisesti.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;