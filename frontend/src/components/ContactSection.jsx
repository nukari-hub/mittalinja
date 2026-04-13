import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
      
      if (response.data.success) {
        toast({
          title: 'Kiitos viestistäsi!',
          description: response.data.message,
          duration: 5000
        });
        
        // Reset form
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Virhe',
        description: error.response?.data?.detail || 'Viestin lähettäminen epäonnistui. Yritä myöhemmin uudelleen tai soita meille.',
        variant: 'destructive',
        duration: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Puhelin',
      value: '0400 460 872',
      link: 'tel:+358400460872'
    },
    {
      icon: Mail,
      title: 'Sähköposti',
      value: 'info@mittalinja.fi',
      link: 'mailto:info@mittalinja.fi'
    },
    {
      icon: MapPin,
      title: 'Toimisto',
      value: 'Naapurinkuja 1, 01670 Vantaa',
      link: null
    },
    {
      icon: Clock,
      title: 'Toimialue',
      value: 'Helsinki, Vantaa, Espoo ja muu Uusimaa',
      link: null
    }
  ];

  return (
    <section id="yhteystiedot" className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-base md:text-lg font-semibold text-blue-600 uppercase tracking-wide">
            Yhteystiedot
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
            Ota meihin yhteyttä
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kerro meille projektistasi ja pyydä ilmainen tarjous. Vastaamme yhteydenottoihin 
            arkipäivisin 24 tunnin sisällä.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Additional Info */}
            <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-lg">
              <h4 className="text-2xl font-bold mb-4">
                Pidämme huolta hyvästä ja luotettavasta lopputuloksesta
              </h4>
              <p className="text-blue-100 leading-relaxed">
                Pyrimme aina vastaamaan yhteydenottoihin 24 tunnin sisällä. Ota rohkeasti yhteyttä 
                ja kysy tarjouksemme kohteestasi!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Lähetä viesti</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nimi *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Nimesi"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Sähköposti *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="sahkoposti@esimerkki.fi"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Puhelinnumero
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="+358 40 123 4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Viesti *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Kerro meille projektistasi..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Lähetetään...' : 'Lähetä viesti'}
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Vastaamme yhteydenottoihin arkipäivisin 24 tunnin sisällä.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;