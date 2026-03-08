import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Award,
      title: 'Laatu',
      description: 'Huippuluokan mittauslaitteet ja tarkka työnjälki'
    },
    {
      icon: Users,
      title: 'Ammattitaito',
      description: 'Yli 20 vuoden kokemus alalta'
    },
    {
      icon: Clock,
      title: 'Nopeus',
      description: 'Reagoimme yhteydenottoihin 24 tunnin sisällä'
    },
    {
      icon: Target,
      title: 'Luotettavuus',
      description: 'A1-luokan mittauspalvelut vuodesta 2004'
    }
  ];

  return (
    <section id="meista" className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-base md:text-lg font-semibold text-blue-200 uppercase tracking-wide">
                Meistä
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                A1-luokan laatua <br />vuodesta 2004
              </h3>
            </div>
            
            <div className="space-y-6 text-blue-100 text-lg leading-relaxed">
              <p>
                Mittalinja A1 Oy on erikoistunut rakennusteknisiin mittauspalveluihin ja 
                kartoituksiin pääkaupunkiseudulla. Meille jokainen projekti on mahdollisuus 
                tarjota tarkinta ja luotettavinta mittauspalvelua.
              </p>
              <p>
                Työmme perustuu pitkään kokemukseen, huippuluokan mittauslaitteisiin ja 
                asiakkaan tarpeiden kuuntelemiseen. Olemme ylpeitä jokaisesta 
                toteuttamastamme projektista.
              </p>
              <p>
                Puhelin ja sähköyhtiöille, rakennusliikkeille, suunnittelutoimistoille, 
                maanrakennusliikkeille, julkiselle sektorille sekä rakentajille ja rakennuttajille.
              </p>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-blue-100 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section - Service Area */}
        <div className="mt-20 text-center space-y-6">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20">
            <h4 className="text-2xl font-bold mb-2">Toimimme Uudellamaalla</h4>
            <p className="text-blue-100 text-lg">
              Pääasiallinen toimialueemme on Helsinki, Vantaa ja Espoo sekä muu Uusimaa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;