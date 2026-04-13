import React from 'react';
import { Link } from 'react-router-dom';

const ReferencesSection = () => {
  const references = [
    { client: 'Varte Oy', project: 'A-asunnot, Vaskenvalajankatu 8 Porvoo', work: 'Maanrakennus mittaukset, rakennusmittaukset, tarkemittaukset, kaivuumallien laadinta' },
    { client: 'Helen Oy', project: 'Kruunuvuoren länsitunneli', work: 'Tunnelin laserkeilaukset' },
    { client: 'K.Jousmaa Oy', project: 'Kronan Museo uudisrakennus Tammisaari', work: 'Maarakennus ja rakennusmittaukset' },
    { client: 'Kone Oy', project: 'Kone Heves Hyvinkää', work: 'Tulipalon jälkeen inventointi laserkeilaus, rakennusmittaukset' },
    { client: 'Mättölä Oy', project: 'Kivikon jäteasema', work: 'Laajennuksen rakennusmittaukset, putkistojen tarkemittaukset' },
    { client: 'Inkoo Shipping Oy', project: 'Kantvik satama varastoalue', work: 'Maarakennuksen mittaustyöt' },
    { client: 'Maanrakennus Soini Oy', project: 'As. Oy Järvenpään Ruusu', work: 'Maarakennusmittaukset, kaivuumallien laadinta' },
    { client: 'Lujatalo Oy', project: 'Hyvinkään Sairaala', work: 'Rakennusmittaukset, laserkeilaukset purkutöiden jälkeen' },
    { client: 'Rakennus Future Oy', project: 'Koivykylän Päiväkoti', work: 'Maarakennus, louhintamittaukset, rakennusmittaus, määrälaskenta' },
    { client: 'A-Insinöörit Oy', project: 'Citycenter Helsinki', work: '4 krs laserkeilaus, IFC-mallin laadinta' },
    { client: 'Kerabit Oy', project: 'LUKSIA Lohja', work: 'Talotekniikan mittaukset, uudet IV-konehuoneet' },
    { client: 'Rakennus Ahola Oy', project: 'Ateneum Helsinki', work: 'Eteistilat laserkeilaus, mittapiirustuksien laadinta' },
    { client: 'Kasit Oy', project: 'Perintötie-Rälssitie Vantaa', work: 'Maanrakennusmittaukset, Kaivuumallien laadinta' },
    { client: 'Maanrakennus Knuuttila Oy', project: 'Pelkokaaren PK Jokela', work: 'Paalutystyö merkintä, paalujen tarkemittaus' },
    { client: 'Fortum Waste Solution', project: 'Nopontie 292 Hyvinkää', work: 'Pilaantuneiden maiden poisto mittaukset, määrälaskenta, kaivuumallien laadinta' },
    { client: 'Rakennus Future Oy', project: 'Mårtendsdals koulu Vantaa', work: 'Rakennusmittaukset, kaivinkone 3D-mallien laadinta' },
    { client: 'Maanrakennus Heinänen Oy', project: 'Korson Päiväkoti', work: 'Maanrakennusmittaukset, louhinta, määrälaskenta, 3D-kaivuumallien laadinta' },
    { client: 'Arkta Rakennuskultti Oy', project: 'LPK Pelimanni ja Tiuku', work: 'Maanrakennusmittaukset, määrälaskenta louhinnat, rakennusmittaukset, kaivuu 3D-mallien laadinta' },
    { client: 'Arkta Rakennuskultti Oy', project: 'LPK Nuotti', work: 'Maanrakennusmittaukset, määrälaskenta louhinnat, rakennusmittaukset, kaivuu 3D-mallien laadinta, As-Built laserkeilaus' },
    { client: 'Arkta Rakennuskultti Oy', project: 'LPK Nihti', work: 'Maanrakennusmittaukset, määrälaskenta louhinnat, rakennusmittaukset, kaivuu 3D-mallien laadinta, As-Built laserkeilaus' },
    { client: 'Mijorak Oy', project: 'Lohjan Lyseo', work: 'Lattioiden purun jälkeinen laserkeilaus, louhinta määrälaskenta, rakennusmittaukset' },
    { client: 'Varte Oy', project: 'Logisnext, Mitsbishi Järvenpää', work: 'Hallin laajennuksen inventointimitaukset' },
    { client: 'Arkta Rakennuskultti Oy', project: 'Kuninkaantammi koulu Helsinki', work: 'Rakennusmittaukset, seurantamittaus, louhintojen mittaukset ja määrälaskenta' },
    { client: 'Jalon Uuusimaa Oy', project: 'Vanha Teboil Porvoo', work: 'Laserkeilaus vanha kiinteistö' },
    { client: 'Jalon Uuusimaa Oy', project: 'Suopursuntie 24 Tikkurila Vantaa', work: 'Vanhan suojeltavan kiinteistön laserkeilaus' },
    { client: 'Jalon Uuusimaa Oy', project: 'Maapadontie 9 Helsinki', work: 'Uudisrakennuksen rakennusmittaustyöt' },
    { client: 'Arkta Rakennuskultti Oy', project: 'Kottby Skola Helsinki', work: 'Rakennusmittaukset, As-Built laserkeilaus' },
    { client: 'Laatukaivuu Oy', project: 'Kottby Skola Helsinki', work: 'Maankaennusmittaukset, louhinta, määrälaskenta, kaivot-putket tarkemittaus, kaivuu 3D-mallien laadinta' },
    { client: 'Toivo Ajalin Oy', project: 'Kantvik Suomen sokeri satama', work: 'Satamalaiturin nosturikiskojen uusinta mittaustuöt,laiturin seurantamittaus' },
    { client: 'Toivo Ajalin Oy', project: 'Fortum Inkoo Satama', work: 'Tien levennyksen mittaustyöt tarkpiirustukset, kaivuu 3D-mallien laadinta' },
    { client: 'Toivo Ajalin Oy', project: 'Fortum Inkoo Satama', work: 'Pressuhallialueen Drone lentokartoitus, pintamallin laadinta' },
    { client: 'Toivo Ajalin Oy', project: 'Fortum Inkoo Satama', work: 'Varastoalueen laajennus, maavallin määrälaskenta, kaivuu 3D-mallien laadinta' },
    { client: 'Toivo Ajalin Oy', project: 'Hankon vesihuoltolinja', work: 'Uuden vesi-paiveviemärin linja maanrakennusmittaus, kaivuu 3D-mallien laadinta, tarkepiirustukset laadinta' },
    { client: 'Toivo Ajalin Oy', project: 'Inkoo venehotellin tien siirto', work: 'Maanrakennusmittaukset, tarkemitaukset, määrälaskenta' },
    { client: 'Varte Lahti Oy', project: 'Freesia-Pioni Tuusula', work: 'Rakennusmittaukset' },
    { client: 'Jatke Oy', project: 'Power halli Tammisto Vantaa', work: 'Rakennus ja tarkemittaukset, pinta-ala mittaus' },
    { client: 'Jatke Oy', project: 'Kameleonten urheiluhalli Espoo', work: 'Rakennus ja tarkemittaukset.' },
    { client: 'Jatke Oy', project: 'Ikea Lommila Espoo', work: 'Varstohallin rakennusmittaus, kuukausi drone työmaalennot' },
    { client: 'Skanska Oy', project: 'APC-hotelli lentokenttä Vantaa', work: 'Rakennusmittaukset' },
    { client: 'Skanska Oy', project: 'Finlandiatalo Helsinki', work: 'Maarakennusmittaukset, rakennusmittaukset, laserkeilaukset lattiat valutyöt jälkeen' },
    { client: 'Asfalttikallio Oy', project: 'Rajamäen linja-autoasema', work: 'Maanrakennusmittaukset, putket, kaivot tarkemittaus' },
    { client: 'Asfalttikallio Oy', project: 'Elonaukio Nurmijärvi KK', work: 'Maanrakennusmittaukset, putket, kaivot tarkemittaus' },
    { client: 'Asfalttikallio Oy', project: 'Kone Heves pihat Hyvinkää', work: 'Pihojen kartoitukset, putkitarkkeet, maanrakennusmittaus' },
    { client: 'Pekkaniska Oy', project: 'Tiilipojanlenkki 1-5 Vantaa', work: 'Inventointimittaukset piha-alueet, vanha halli laserkeilaus ja IFC-3D-mallin laadinta' },
    { client: 'Suomen Ulkoministeriö', project: 'Tukholman Suomen suurlähetystön residenssi', work: 'Inventointimittaukset, laserkeilaus, 3D-inventointi mallin laadinta, Invetointipiirustuksien laadinta' },
    { client: 'Klaavakiinteistöt Oy', project: 'Käpylän koulu Hykkylä', work: 'Rakennusmittaukset, As-Built laserkeilaus' },
    { client: 'K6 Consulting Oy', project: 'Tenholantie 10 pysäköinti luolat', work: 'Laserkeilaus, inventointi piirustukset, leikkaukset laadinta' }
  ];

  return (
    <section id="referenssit" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-base md:text-lg font-semibold text-blue-600 uppercase tracking-wide">
            Referenssit
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
            Viimeisimmät referenssit
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mittalinja on toteuttanut mittaus- ja mallinnusprojekteja rakennus-, infra- ja teollisuuskohteissa eri puolilla Uuttamaata. Referensseihimme kuuluu maanrakennusmittauksia, rakennusmittauksia, laserkeilauksia, tarkemittauksia sekä 3D- ja koneohjausmallien laadintaa.
          </p>
        </div>

        {/* References Table - Desktop */}
        <div className="max-w-7xl mx-auto hidden md:block">
          <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-600">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                    Tilaaja
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                    Kohde
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                    Toimeksianto
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {references.map((ref, index) => (
                  <tr key={index} className="hover:bg-blue-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-bold text-gray-900">{ref.client}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 font-medium">{ref.project}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600">{ref.work}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* References Cards - Mobile */}
        <div className="md:hidden space-y-4">
          {references.map((ref, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg border border-gray-200 p-4 hover:shadow-xl transition-shadow">
              <div className="space-y-3">
                <div>
                  <span className="text-xs font-semibold text-blue-600 uppercase">Tilaaja</span>
                  <p className="text-sm font-bold text-gray-900 mt-1">{ref.client}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-blue-600 uppercase">Kohde</span>
                  <p className="text-sm text-gray-900 font-medium mt-1">{ref.project}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-blue-600 uppercase">Toimeksianto</span>
                  <p className="text-sm text-gray-600 mt-1">{ref.work}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Info */}
        <div className="mt-16 text-center space-y-6">
          <p className="text-lg text-gray-700 font-medium">
            Asiakkainamme on rakennusliikkeitä, maanrakennusurakoitsijoita, suunnittelutoimistoja sekä julkisen sektorin toimijoita.
          </p>
          <p className="text-xl text-gray-900 font-semibold">
            Jokainen kohde toteutetaan tarkasti, luotettavasti ja sovitussa aikataulussa.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h4 className="text-2xl md:text-3xl font-bold mb-4">
            Pidämme huolta hyvästä ja luotettavasta lopputuloksesta
          </h4>
          <p className="text-blue-100 text-lg mb-6">
            Pyrimme aina vastaamaan yhteydenottoihin 24 tunnin sisällä. Ota rohkeasti yhteyttä ja kysy tarjouksemme kohteestasi!
          </p>
          <Link to="/yhteystiedot">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg">
              Ota yhteyttä tai pyydä tarjous
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
