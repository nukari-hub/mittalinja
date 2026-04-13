import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageSEO from '../components/PageSEO';
import { Shield, Mail, Phone, FileText, User, Clock, CheckCircle } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <>
      <PageSEO 
        title="Tietosuojaseloste | Mittalinja A1 Oy"
        description="Mittalinja A1 Oy:n tietosuojaseloste. Lue miten käsittelemme henkilötietojasi GDPR:n mukaisesti."
        keywords="tietosuoja, GDPR, henkilötiedot, rekisteriseloste, Mittalinja A1"
      />
      
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Tietosuojaseloste
                </h1>
                <p className="text-lg md:text-xl text-blue-100">
                  Kunnioitamme yksityisyyttäsi ja suojaamme henkilötietojasi
                </p>
                <p className="text-sm text-blue-200 mt-4">
                  Voimassa 1.1.2025 alkaen
                </p>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                
                {/* Rekisterinpitäjä */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      1. Rekisterinpitäjä
                    </h2>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                    <p className="text-gray-800 font-semibold">Mittalinja A1 Oy</p>
                    <p className="text-gray-600">Y-tunnus: 2305871-5</p>
                    <p className="text-gray-600">Naapurinkuja 1, 01670 Vantaa</p>
                    <div className="flex items-center space-x-2 text-gray-600 pt-2">
                      <Phone className="w-4 h-4" />
                      <span>0400 460 872</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>info@mittalinja.fi</span>
                    </div>
                  </div>
                </div>

                {/* Rekisterin nimi */}
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    2. Rekisterin nimi
                  </h2>
                  <p className="text-gray-700">
                    Mittalinja A1 Oy:n asiakasrekisteri ja markkinointirekisteri
                  </p>
                </div>

                {/* Henkilötietojen käsittelyn tarkoitus */}
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    3. Henkilötietojen käsittelyn tarkoitus
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Asiakassuhteen hoitaminen ja ylläpitäminen</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Yhteydenottoihin vastaaminen ja tarjouspyyntöjen käsittely</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Mittauspalvelujen toimittaminen ja sopimusten täyttäminen</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Laskutus ja maksuliikenne</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Palveluiden kehittäminen ja markkinointi (suostumuksen perusteella)</p>
                    </div>
                  </div>
                </div>

                {/* Rekisterin tietosisältö */}
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    4. Rekisterin tietosisältö
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Rekisteriin voidaan tallentaa seuraavia tietoja:
                  </p>
                  <div className="bg-blue-50 rounded-lg p-6 space-y-2">
                    <p className="text-gray-800">• Nimi</p>
                    <p className="text-gray-800">• Yrityksen nimi ja Y-tunnus</p>
                    <p className="text-gray-800">• Yhteystiedot (puhelinnumero, sähköpostiosoite, postiosoite)</p>
                    <p className="text-gray-800">• Projekti- ja tarjoustiedot</p>
                    <p className="text-gray-800">• Laskutustiedot</p>
                    <p className="text-gray-800">• Asiakassuhteeseen liittyvä kirjeenvaihto ja muut asiakirjat</p>
                    <p className="text-gray-800">• Verkkosivuston käyttötiedot (IP-osoite, evästeet)</p>
                  </div>
                </div>

                {/* Tietolähteet */}
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    5. Säännönmukaiset tietolähteet
                  </h2>
                  <p className="text-gray-700">
                    Henkilötiedot saadaan pääasiassa rekisteröidyltä itseltään verkkolomakkeiden, sähköpostin, 
                    puhelimen tai muun yhteydenoton kautta. Tietoja voidaan täydentää myös julkisista lähteistä 
                    kuten kaupparekisteristä tai yritys- ja yhteisötietojärjestelmästä.
                  </p>
                </div>

                {/* Tietojen luovutus */}
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    6. Tietojen säännönmukaiset luovutukset
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Henkilötietoja ei luovuteta kolmansille osapuolille ilman rekisteröidyn suostumusta tai 
                    lakiin perustuvaa velvoitetta. Tietoja voidaan luovuttaa:
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700">• Kirjanpito- ja laskutuspalveluiden toimittajille</p>
                    <p className="text-gray-700">• IT-palveluiden tarjoajille (palvelimet, pilvipalvelut)</p>
                    <p className="text-gray-700">• Viranomaisille lakisääteisen velvoitteen perusteella</p>
                  </div>
                </div>

                {/* Tietojen siirto EU:n ulkopuolelle */}
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    7. Tietojen siirto EU:n tai ETA:n ulkopuolelle
                  </h2>
                  <p className="text-gray-700">
                    Henkilötietoja ei pääsääntöisesti siirretä Euroopan unionin tai Euroopan talousalueen 
                    ulkopuolelle. Jos tietoja joudutaan siirtämään, varmistetaan asianmukainen suojan taso 
                    EU:n tietosuoja-asetuksen edellyttämällä tavalla.
                  </p>
                </div>

                {/* Rekisterin suojaus */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      8. Rekisterin suojaus
                    </h2>
                  </div>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Sähköiset tiedot:</strong> Rekisteri on suojattu palomuurilla, 
                      käyttäjätunnuksilla ja salasanoilla. Tietoihin on pääsy vain niillä henkilöillä, 
                      joiden työtehtävät sitä edellyttävät.
                    </p>
                    <p>
                      <strong>Fyysiset tiedot:</strong> Paperiaineisto säilytetään lukituissa tiloissa, 
                      joihin on pääsy vain valtuutetulla henkilöstöllä.
                    </p>
                    <p>
                      <strong>Tekninen suojaus:</strong> Käytämme SSL/TLS-salausta tiedonsiirtoon ja 
                      säännöllisiä varmuuskopioita tietojen säilyttämiseksi.
                    </p>
                  </div>
                </div>

                {/* Tarkastusoikeus */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      9. Rekisteröidyn oikeudet
                    </h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Tarkastusoikeus</h3>
                      <p className="text-gray-700">
                        Sinulla on oikeus tarkastaa, mitä sinua koskevia tietoja rekisteriin on tallennettu.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Oikeus tietojen oikaisemiseen</h3>
                      <p className="text-gray-700">
                        Voit pyytää virheellisten tai puutteellisten tietojen oikaisemista.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Oikeus tietojen poistamiseen</h3>
                      <p className="text-gray-700">
                        Voit pyytää tietojesi poistamista, ellei niiden säilyttämiseen ole lakiin 
                        perustuvaa velvoitetta (esim. kirjanpito).
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Oikeus käsittelyn rajoittamiseen</h3>
                      <p className="text-gray-700">
                        Voit pyytää tietojesi käsittelyn rajoittamista tietyissä tilanteissa.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Vastustamisoikeus</h3>
                      <p className="text-gray-700">
                        Voit vastustaa suoramarkkinointia ja henkilötietojesi käsittelyä 
                        suoramarkkinointitarkoituksiin.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Oikeus siirtää tiedot järjestelmästä toiseen</h3>
                      <p className="text-gray-700">
                        Sinulla on oikeus saada antamasi tiedot jäsennellyssä, yleisesti käytetyssä 
                        ja koneellisesti luettavassa muodossa.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Säilytysaika */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      10. Tietojen säilytysaika
                    </h2>
                  </div>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Henkilötietoja säilytetään niin kauan kuin on tarpeen alkuperäisen 
                      käsittelytarkoituksen toteuttamiseksi tai lakisääteisten velvoitteiden täyttämiseksi.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                      <p>• <strong>Asiakastiedot:</strong> Asiakassuhteen ajan ja 2 vuotta sen päättymisen jälkeen</p>
                      <p>• <strong>Laskutustiedot:</strong> Kirjanpitolain mukaisesti 6 vuotta tilikauden päättymisestä</p>
                      <p>• <strong>Tarjouspyynnöt:</strong> 2 vuotta tarjouksen antamisesta</p>
                      <p>• <strong>Markkinointilupa:</strong> Kunnes suostumus peruutetaan tai viimeisestä yhteydenotosta 3 vuotta</p>
                    </div>
                  </div>
                </div>

                {/* Evästeet */}
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    11. Evästeet (Cookies)
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Verkkosivustomme käyttää evästeitä parantaakseen käyttökokemusta ja analysoidakseen 
                    sivuston käyttöä. Evästeet ovat pieniä tekstitiedostoja, jotka tallentuvat laitteellesi.
                  </p>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      <strong>Välttämättömät evästeet:</strong> Tarvitaan sivuston perustoiminnoille.
                    </p>
                    <p className="text-gray-700">
                      <strong>Analytiikka-evästeet:</strong> Keräävät tietoa sivuston käytöstä anonyymisti 
                      palvelun parantamiseksi.
                    </p>
                    <p className="text-gray-700 text-sm mt-4">
                      Voit hallita evästeasetuksia selaimesi kautta tai kieltäytyä evästeistä. 
                      Huomaa, että tämä voi rajoittaa joidenkin sivuston ominaisuuksien käyttöä.
                    </p>
                  </div>
                </div>

                {/* Muutokset */}
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    12. Tietosuojaselosteen muutokset
                  </h2>
                  <p className="text-gray-700">
                    Pidätämme oikeuden päivittää tätä tietosuojaselostetta tarvittaessa. 
                    Muutoksista ilmoitetaan verkkosivuillamme. Suosittelemme tarkistamaan 
                    tietosuojaselosteen säännöllisesti.
                  </p>
                </div>

                {/* Yhteydenotto */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    13. Yhteydenotto tietosuoja-asioissa
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Jos sinulla on kysyttävää henkilötietojesi käsittelystä tai haluat käyttää 
                    rekisteröidyn oikeuksiasi, ota yhteyttä:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <a href="mailto:info@mittalinja.fi" className="text-blue-600 hover:text-blue-800 font-medium">
                        info@mittalinja.fi
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <a href="tel:+358400460872" className="text-blue-600 hover:text-blue-800 font-medium">
                        0400 460 872
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-6">
                    Sinulla on myös oikeus tehdä valitus valvontaviranomaiselle 
                    (Tietosuojavaltuutetun toimisto, <a href="https://tietosuoja.fi" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">tietosuoja.fi</a>), 
                    jos katsot, että henkilötietojesi käsittelyssä on rikottu tietosuojalainsäädäntöä.
                  </p>
                </div>

              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPage;
