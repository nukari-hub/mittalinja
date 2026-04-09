import React from 'react';
import { Card, CardContent } from './ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: 'Rakennusmittaus',
      description: 'Rakennusmittaus tulee tarpeeseen, kun haluat tarkat mitat tietystä rakennuksesta.',
      image: 'https://images.unsplash.com/photo-1694521787162-5373b598945c',
      items: [
        'Rakennusten mittaus',
        'Pohjapiirrosten laatiminen',
        'Leikkauspiirustukset',
        'Julkisivumittaukset',
        'Rakennusosien mittaus'
      ]
    },
    {
      title: 'Maanmittaus',
      description: 'Maanmittauspalvelu tulee tarpeeseen, kun haluat tarkat rajat maakappaleelle tai haluat tarkan kartan korkeusvaihteluineen tontista.',
      image: 'https://images.unsplash.com/photo-1628158088936-68ccaaa400dc',
      items: [
        'Rajamerkkien mittaus',
        'Tonttikartoitus',
        'Korkeuskäyräkartat',
        'Maaston mittaus',
        'Maastomallit'
      ]
    },
    {
      title: 'DRONE kartoitus ja kuvaus',
      description: 'UAV-kopterilla voimme kartoittaa nopeasti isoja alueita, toki myös pienet alueet soveltuvat kartoitettavaksi.',
      image: 'https://images.unsplash.com/photo-1706380003139-7471c33ca2b2',
      items: [
        'Ilmakuvaus',
        'Ortokuvat',
        'Pintojen määrälaskenta',
        'Isojen alueiden kartoitus',
        '3D-mallit'
      ]
    },
    {
      title: 'Laserkeilaus',
      description: 'Laserkeilaus eli 3D-skannaus on erinomainen menetelmä, jonka avulla voidaan kartoittaa rakennusten lisäksi myös esimerkiksi maastokohteita.',
      image: 'https://images.unsplash.com/photo-1694106722138-27187c94f50b',
      items: [
        '3D-pistepilviaineisto',
        'Rakennusten skannaus',
        'Teollisuuden mittaus',
        'Historiallisten kohteiden dokumentointi',
        'BIM-mallinnus'
      ]
    },
    {
      title: 'Laskenta ja tarkepiirustukset',
      description: 'Laskenta ja tarkepiirustusten avulla voidaan toteuttaa esim. maanalaisia putki- ja johtotarkepiirustuksia.',
      image: 'https://images.unsplash.com/photo-1526593714223-37c814d5aea9',
      items: [
        'Toteumapiirustukset',
        'Putki- ja johtotarkepiirustukset',
        'Määrälaskenta',
        'Kaivu- ja täyttömäärät',
        'CAD-piirustukset'
      ]
    },
    {
      title: 'Koneohjausmallit',
      description: 'Tuotamme maarakentamisen koneohjausmalleja tierakentamiseen, infrarakentamiseen ja rakennushankkeisiin.',
      image: 'https://images.unsplash.com/photo-1628158145409-9e222b56cc0b',
      items: [
        'Tierakentamisen mallit',
        'Inframallit',
        'Kenttämallit',
        'GPS-koneohjausmallit',
        'Maansiirtomallit'
      ]
    }
  ];

  return (
    <section id="palvelut" className="py-20 md:py-32 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-base md:text-lg font-semibold text-blue-600 uppercase tracking-wide">
            Palvelumme
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
            Ammattitaitoista työtä <br className="hidden md:block" />joka projektissa
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tarjoamme kattavat mittauspalvelut ammattitaidolla toteutettuna
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                        <img 
                          src="https://customer-assets.emergentagent.com/job_mittalinja-preview/artifacts/igp1cb8m_mitta.png"
                          alt="A1"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <h4 className="text-2xl font-bold text-white">{service.title}</h4>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;