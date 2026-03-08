import React from 'react';
import { Building2, Pencil, Truck, Phone, Building, Hammer } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const TargetCustomers = () => {
  const customers = [
    { icon: Building2, title: 'Rakennusliikkeille' },
    { icon: Pencil, title: 'Suunnittelutoimistoille' },
    { icon: Truck, title: 'Maanrakennusliikkeille' },
    { icon: Phone, title: 'Puhelin ja sähköyhtiöille' },
    { icon: Building, title: 'Julkiselle sektorille' },
    { icon: Hammer, title: 'Rakentajille ja rakennuttajille' }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-base md:text-lg font-semibold text-blue-600 uppercase tracking-wide">
            Asiakkaamme
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
            Tarjoamme maasto, rakennus <br className="hidden md:block" />ja tiemittauspalvelua
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {customers.map((customer, index) => {
            const IconComponent = customer.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-blue-100 hover:border-blue-400 bg-white"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{customer.title}</h4>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetCustomers;