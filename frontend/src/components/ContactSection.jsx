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
    message: '',
    honeypot: '' // Spam protection
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
        
        // Create mailto link with form data
        const mailtoBody = `Nimi: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APuhelin: ${formData.phone || 'Ei annettu'}%0D%0A%0D%0AViesti:%0D%0A${formData.message}`;
        const mailtoLink = `mailto:info@mittalinja.fi?subject=Lomake&body=${mailtoBody}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Reset form
        setFormData({ name: '', email: '', phone: '', message: '', honeypot: '' });
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

  const billingInfo = {
    company: 'Mittalinja A1 Oy (2305871-5)',
    networkInvoiceAddress: '003723058715'
  };

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

            {/* Billing Info */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Laskutustiedot
              </h4>
              <div className="space-y-3">
                <p className="text-gray-900 font-semibold">{billingInfo.company}</p>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Verkkolaskuosoite:</p>
                  <p className="text-gray-900 font-mono font-semibold">{billingInfo.networkInvoiceAddress}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 h-fit">
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

              {/* Honeypot field - hidden from users, spam bots will fill it */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />

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

        {/* Additional Info - Centered below */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white shadow-lg text-center">
            <h4 className="text-2xl md:text-3xl font-bold mb-4">
              Pidämme huolta hyvästä ja luotettavasta lopputuloksesta
            </h4>
            <p className="text-blue-100 leading-relaxed text-lg">
              Pyrimme aina vastaamaan yhteydenottoihin 24 tunnin sisällä. Ota rohkeasti yhteyttä 
              ja kysy tarjouksemme kohteestasi!
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tiimimme
            </h3>
            <p className="text-lg text-gray-600">
              Asiantuntevat ammattilaiset palveluksessasi
            </p>
          </div>

          {/* Mittalinja A1 Team */}
          <div className="mb-12">
            <h4 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-blue-600">
              Mittalinja A1 Oy
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Ari Piiroinen */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-blue-600">
                <h5 className="text-lg font-bold text-gray-900 mb-1">Ari Piiroinen</h5>
                <p className="text-sm text-blue-600 font-medium mb-4">Toimitusjohtaja, mittaustyönjohto</p>
                <div className="space-y-2">
                  <a href="tel:+358400460872" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                    <Phone className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600" />
                    <span className="text-sm">+358 400 460 872</span>
                  </a>
                  <a href="mailto:ari.piiroinen@mittalinja.fi" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                    <Mail className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600" />
                    <span className="text-sm break-all">ari.piiroinen@mittalinja.fi</span>
                  </a>
                </div>
              </div>

              {/* Tuomas Saavalainen */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                <h5 className="text-lg font-bold text-gray-900 mb-1">Tuomas Saavalainen</h5>
                <p className="text-sm text-gray-500 font-medium mb-4">&nbsp;</p>
                <div className="space-y-2">
                  <a href="tel:+358405746035" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                    <Phone className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600" />
                    <span className="text-sm">+358 405 746 035</span>
                  </a>
                  <a href="mailto:tuomas.saavalainen@mittalinja.fi" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                    <Mail className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600" />
                    <span className="text-sm break-all">tuomas.saavalainen@mittalinja.fi</span>
                  </a>
                </div>
              </div>

              {/* Jari Syrjä */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                <h5 className="text-lg font-bold text-gray-900 mb-1">Jari Syrjä</h5>
                <p className="text-sm text-gray-500 font-medium mb-4">&nbsp;</p>
                <div className="space-y-2">
                  <a href="tel:+358402580838" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                    <Phone className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600" />
                    <span className="text-sm">+358 402 580 838</span>
                  </a>
                  <a href="mailto:jari.syrja@mittalinja.fi" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                    <Mail className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600" />
                    <span className="text-sm break-all">jari.syrja@mittalinja.fi</span>
                  </a>
                </div>
              </div>

              {/* Antero Torssonen */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                <h5 className="text-lg font-bold text-gray-900 mb-1">Antero Torssonen</h5>
                <p className="text-sm text-blue-600 font-medium mb-4">Drone lennot ja laserkeilaus</p>
                <div className="space-y-2">
                  <a href="mailto:antero.torssonen@mittalinja.fi" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                    <Mail className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600" />
                    <span className="text-sm break-all">antero.torssonen@mittalinja.fi</span>
                  </a>
                </div>
              </div>

              {/* Juri Kantola */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                <h5 className="text-lg font-bold text-gray-900 mb-1">Juri Kantola</h5>
                <p className="text-sm text-gray-500 font-medium mb-4">&nbsp;</p>
                <div className="space-y-2">
                  <a href="tel:+358400163598" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                    <Phone className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600" />
                    <span className="text-sm">+358 400 163 598</span>
                  </a>
                  <a href="mailto:juri.kantola@mittalinja.fi" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                    <Mail className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600" />
                    <span className="text-sm break-all">juri.kantola@mittalinja.fi</span>
                  </a>
                </div>
              </div>

              {/* Sami Piiroinen */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                <h5 className="text-lg font-bold text-gray-900 mb-1">Sami Piiroinen</h5>
                <p className="text-sm text-gray-500 font-medium mb-4">&nbsp;</p>
                <div className="space-y-2">
                  <a href="tel:+358406538095" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                    <Phone className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600" />
                    <span className="text-sm">+358 406 538 095</span>
                  </a>
                  <a href="mailto:sami.piiroinen@mittalinja.fi" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                    <Mail className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600" />
                    <span className="text-sm break-all">sami.piiroinen@mittalinja.fi</span>
                  </a>
                </div>
              </div>

              {/* Juha Kosonen */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                <h5 className="text-lg font-bold text-gray-900 mb-1">Juha Kosonen</h5>
                <p className="text-sm text-gray-500 font-medium mb-4">&nbsp;</p>
                <div className="space-y-2">
                  <a href="tel:+358406538225" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                    <Phone className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600" />
                    <span className="text-sm">+358 406 538 225</span>
                  </a>
                  <a href="mailto:juha.kosonen@mittalinja.fi" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                    <Mail className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600" />
                    <span className="text-sm break-all">juha.kosonen@mittalinja.fi</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-gray-300">
              Yhteistyökumppanit
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tuomas Klaus - Sankari */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
                <h5 className="text-lg font-bold text-gray-900 mb-1">Tuomas Klaus</h5>
                <p className="text-sm text-blue-600 font-medium mb-2">3D-mallinnus, IFC mallit</p>
                <p className="text-sm text-gray-600 font-semibold mb-3">Arkkitehdit Sankari Oy</p>
                <div className="space-y-2">
                  <a href="tel:+358503033396" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                    <Phone className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600" />
                    <span className="text-sm">+358 503 033 396</span>
                  </a>
                  <a href="mailto:tuomas.klaus@sankari.fi" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                    <Mail className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600" />
                    <span className="text-sm break-all">tuomas.klaus@sankari.fi</span>
                  </a>
                  <a href="https://www.sankari.fi" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium mt-2">
                    <span>→ www.sankari.fi</span>
                  </a>
                </div>
              </div>

              {/* Nina Lindroth - Tiliporras */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
                <h5 className="text-lg font-bold text-gray-900 mb-1">Nina Lindroth</h5>
                <p className="text-sm text-gray-600 font-semibold mb-4">Tiliporras Uusimaa Oy</p>
                <div className="space-y-2">
                  <a href="tel:+358102021111" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                    <Phone className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600" />
                    <span className="text-sm">+358 102 021 111</span>
                  </a>
                  <a href="mailto:nina.lindroth@tiliporras.fi" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                    <Mail className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600" />
                    <span className="text-sm break-all">nina.lindroth@tiliporras.fi</span>
                  </a>
                  <a href="https://www.tiliporras.fi" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium mt-2">
                    <span>→ www.tiliporras.fi</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;