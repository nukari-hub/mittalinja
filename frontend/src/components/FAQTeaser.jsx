import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { ArrowRight } from 'lucide-react';

const FAQTeaser = () => {
  const teaserQuestions = [
    {
      category: 'Yleistä',
      q: 'Mitä palveluita Mittalinja A1 tarjoaa?',
      a: 'Tarjoamme kattavat mittauspalvelut: rakennusmittaus, maanmittaus, drone-kartoitus, laserkeilaus, laskenta ja tarkepiirustukset sekä koneohjausmallit.'
    },
    {
      category: 'Yleistä',
      q: 'Kuinka kauan olette toimineet alalla?',
      a: 'Olemme tarjonneet A1-luokan mittauspalveluja vuodesta 2004 alkaen, eli yli 20 vuoden kokemuksella.'
    },
    {
      category: 'Rakennusmittaus',
      q: 'Kuinka tarkka rakennusmittaus on?',
      a: 'Käytämme millimetritarkkoja mittauslaitteita, joten mittaustarkkuutemme on tyypillisesti ±1-2mm.'
    },
    {
      category: 'Maanmittaus',
      q: 'Kuinka tarkka maanmittaus on?',
      a: 'RTK-GNSS laitteistollamme saavutamme senttimetritarkkuuden (±1-3cm).'
    },
    {
      category: 'Hinnoittelu',
      q: 'Kuinka paljon mittauspalvelut maksavat?',
      a: 'Hinnat riippuvat projektin laajuudesta ja monimutkaisuudesta. Pyydä ilmainen tarjous!'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-base md:text-lg font-semibold text-blue-600 uppercase tracking-wide">
            UKK
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
            Usein Kysytyt Kysymykset
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vastauksia yleisimpiin kysymyksiin mittauspalveluistamme
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {teaserQuestions.map((item, index) => (
              <AccordionItem
                key={index}
                value={`teaser-${index}`}
                className="border-2 border-gray-200 rounded-lg px-6 hover:border-blue-400 transition-colors bg-white"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2 block">
                      {item.category}
                    </span>
                    <span className="text-lg font-semibold text-gray-900">
                      {item.q}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* View All Link */}
          <div className="mt-12 text-center">
            <Link
              to="/ukk"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <span>Näytä kaikki kysymykset (95)</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQTeaser;