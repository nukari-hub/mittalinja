import React from 'react';
import OptimizedImage from './OptimizedImage';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const EquipmentSection = () => {
  const navigate = useNavigate();

  const equipmentList = [
    'Leica 1200 sarjan robottitakymetrit',
    'Leica MS 50 Multistation laserkeilain',
    'Leica BLK 360 laserkeilain',
    'Leica RTC 360 laserkeilain',
    'Leica TS15 robottitakymetrit',
    'Leica TS16 1" robottitakymetrit',
    'Leica VIVA CS 15 maastotallentimet',
    'Leica Captivate maastotallentimet',
    'Leica GS 15 ja GS 14 GNSS satelliittimittausvastaanotttimet',
    'Leica Rugby taso- ja kallistuslaserit',
    'Leica Bistro etäisyysmittarit',
    'Satelliittimittauksissa käytämme Leican SmartNet tukiasemaverkostoa',
    'DJI Inspire 2 UAV-kopteri'
  ];

  const softwareList = [
    { name: 'Leica Infinity, Leica Cyclon Register 360, Tiemies- ja Laatumies-sovellukset', company: 'Leica Geosystems Oy' },
    { name: 'CADMATIC GeoXY sovellus', company: null },
    { name: '3D-Win', company: '3D-system Oy' },
    { name: 'Pix4D mapper Pro', company: 'Pix4D SA' }
  ];

  const leicaImages = [
    {
      url: 'https://customer-assets.emergentagent.com/job_mittalinja-preview/artifacts/4x35xlek_cs20-2.jpg',
      alt: 'Leica CS20 kenttäkontrolleri'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mittalinja-preview/artifacts/imhtuc0n_Leica%20RTC360-1.jpg',
      alt: 'Leica RTC360 laserkeilain'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mittalinja-preview/artifacts/j9q43epn_Leica-Surveying-Equipment.jpeg',
      alt: 'Leica mittauslaite jalustalla'
    }
  ];

  return (
    <section id="kalusto" className="py-20 md:py-32 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-base md:text-lg font-semibold text-blue-600 uppercase tracking-wide">
            Kalusto & Ohjelmistot
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
            Huippuluokan mittausvälineet
          </h3>
        </div>

        <div className="max-w-6xl mx-auto space-y-20">
          {/* Kalustomme Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Kalustomme</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Käytämme nykyaikaisia mittalaitteita huippuluokan tuloksen takaamiseksi. 
              Mittalaitteemme ovat pääosin Leican valmistamia, joka on markkinoiden parhaita 
              mittalaite valmistajia. Ilmakuvauksessa käytämme DJI:n nelirootttorikopteria.
            </p>

            {/* Equipment List */}
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {equipmentList.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                  <p className="text-gray-800">{item}</p>
                </div>
              ))}
            </div>

            {/* Leica Equipment Images */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {leicaImages.map((image, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <OptimizedImage
                    src={image.url}
                    alt={image.alt}
                    width={600}
                    quality={80}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Ohjelmistot Section */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Ohjelmistot</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Suunnitteluohjelmistoina luotamme mittausalan ammattilaisille tehtyihin ohjelmiin
            </p>

            <div className="space-y-4 mb-10">
              {softwareList.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                  <div>
                    <p className="text-gray-800 font-medium">{item.name}</p>
                    {item.company && (
                      <p className="text-blue-600 font-semibold mt-1">{item.company}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-900 rounded-xl p-8 text-white">
              <p className="text-lg leading-relaxed mb-6">
                Nykyaikaisella kalustolla ja ohjelmilla mahdollista hallinnoida isojakin 
                projekteja tehokkaasti ja aikataulussa pysyen. Tämä tietää säästöä ajassa 
                ja kustannuksissa. Siksi voit luottaa meihin.
              </p>
              <Button
                onClick={() => navigate('/yhteystiedot')}
                className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-8 py-6 text-lg"
              >
                Pyydä tarjous kohteestasi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;