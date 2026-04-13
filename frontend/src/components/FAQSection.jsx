import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Input } from './ui/input';
import { Search } from 'lucide-react';

const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      category: 'Yleistä',
      questions: [
        { q: 'Mitä palveluita Mittalinja A1 tarjoaa?', a: 'Tarjoamme kattavat mittauspalvelut: rakennusmittaus, maanmittaus, drone-kartoitus, laserkeilaus, laskenta ja tarkepiirustukset sekä koneohjausmallit.' },
        { q: 'Kuinka kauan olette toimineet alalla?', a: 'Olemme tarjonneet A1-luokan mittauspalveluja vuodesta 2004 alkaen, eli yli 20 vuoden kokemuksella.' },
        { q: 'Millä alueella toimitte?', a: 'Pääasiallinen toimialueemme on Helsinki, Vantaa, Espoo ja muu Uusimaa.' },
        { q: 'Kuinka nopeasti vastatkaa yhteydenottoihin?', a: 'Pyrimme vastaamaan kaikkiin yhteydenottoihin 24 tunnin sisällä arkipäivisin.' },
        { q: 'Onko teillä vakuutukset kunnossa?', a: 'Kyllä, meillä on kattavat vastuuvakuutukset ja olemme A1-luokan mittauspalveluiden tarjoaja.' },
      ]
    },
    {
      category: 'Rakennusmittaus',
      questions: [
        { q: 'Mitä rakennusmittaus sisältää?', a: 'Rakennusmittaus sisältää rakennusten tarkkojen mittojen määrittämisen, pohjapiirrosten laatimisen, leikkauspiirustukset ja julkisivumittaukset.' },
        { q: 'Kuinka tarkka rakennusmittaus on?', a: 'Käytämme millimetritarkkoja mittauslaitteita, joten mittaustarkkuutemme on tyypillisesti ±1-2mm.' },
        { q: 'Kuinka kauan rakennusmittaus kestää?', a: 'Riippuu kohteen koosta, mutta tyypillinen omakotitalo voidaan mitata 2-4 tunnissa.' },
        { q: 'Tarvitseeko minun olla paikalla mittauksen aikana?', a: 'Ei välttämättä, mutta on suositeltavaa että joku on paikalla avaamassa tilat.' },
        { q: 'Mitä rakennusmittaus maksaa?', a: 'Hinnoittelu riippuu kohteen koosta ja monimutkaisuudesta. Pyydä tarjous niin kerromme tarkemman hinnan.' },
        { q: 'Voitteko mitata historiallisia rakennuksia?', a: 'Kyllä, meillä on kokemusta historiallisten kohteiden dokumentoinnista laserkeilauksen avulla.' },
        { q: 'Saako mittauksesta CAD-piirustukset?', a: 'Kyllä, toimitamme mittaustulokset CAD-muodossa sovittavassa formaatissa.' },
        { q: 'Voitteko mitata vain osan rakennuksesta?', a: 'Kyllä, voimme tehdä myös osittaisia mittauksia tarpeen mukaan.' },
        { q: 'Mittaatteko myös sisätiloja?', a: 'Kyllä, mittaamme sekä sisä- että ulkotilat tarpeen mukaan.' },
        { q: 'Kuinka nopeasti saan mittaustulokset?', a: 'Tyypillisesti toimitamme valmiit piirustukset 1-2 viikon kuluessa mittauksesta.' },
      ]
    },
    {
      category: 'Maanmittaus',
      questions: [
        { q: 'Mitä maanmittaus sisältää?', a: 'Maanmittaus sisältää tontin rajamittauksen, korkeuskäyräkartat, maaston mittauksen ja maastomallin laatimisen.' },
        { q: 'Kuinka tarkka maanmittaus on?', a: 'RTK-GNSS laitteistollamme saavutamme senttimetritarkkuuden (±1-3cm).' },
        { q: 'Tarvitsenko maanmittausta ennen rakentamista?', a: 'Kyllä, maanmittaus on välttämätön rakennusluvan hakemisessa ja rakentamisen suunnittelussa.' },
        { q: 'Kuinka kauan tontin mittaus kestää?', a: 'Tyypillinen omakotitontti voidaan mitata 2-4 tunnissa riippuen koosta ja maaston haastavuudesta.' },
        { q: 'Voitteko auttaa rajamerkkien etsimisessä?', a: 'Kyllä, etsimme ja paikallistamme olemassa olevat rajamerkit tai asetamme uudet tarvittaessa.' },
        { q: 'Mitä eroa on maanmittauksella ja tonttijaolla?', a: 'Maanmittaus on tontin mittojen määrittämistä, tonttijakoa tekee vain maanmittauslaitos.' },
        { q: 'Tarvitsenko luvan maanmittaukseen?', a: 'Ei yleensä, mutta naapurin maalle menemiseen tarvitaan lupa tai ilmoitus.' },
        { q: 'Voitteko mitata korkeuskäyrät?', a: 'Kyllä, tuotamme tarkat korkeuskäyräkartat maaston muotojen esittämiseksi.' },
        { q: 'Kuinka usein tontin rajat pitää mitata?', a: 'Rajamittaus kannattaa tehdä ennen rakentamista ja aina kun rajoista on epäselvyyttä.' },
        { q: 'Toimitteko myös haastavassa maastossa?', a: 'Kyllä, mittauslaitteistomme soveltuu myös vaativiin maasto-olosuhteisiin.' },
      ]
    },
    {
      category: 'Drone-kartoitus',
      questions: [
        { q: 'Mitä drone-kartoitus tarjoaa?', a: 'Drone-kartoitus tuottaa ilmakuvia, ortokuvia, 3D-malleja ja pintojen määrälaskentaa.' },
        { q: 'Kuinka suuren alueen voitte kartoittaa dronella?', a: 'Voimme kartoittaa alueita muutamasta hehtaarista satoihin hehtaareihin yhdellä lennolla.' },
        { q: 'Kuinka tarkka drone-kartoitus on?', a: 'RTK-dronellamme saavutamme 2-3cm tarkkuuden korkeussuunnassa.' },
        { q: 'Tarvitaanko drone-kartoitukseen lupa?', a: 'Kyllä, tarvitsemme lennon suoritusluvan Traficomilta, hoidamme lupaprosessin.' },
        { q: 'Voiko dronea käyttää kaupunkialueella?', a: 'Kyllä, mutta on rajoituksia. Selvitämme aina lentomahdollisuudet etukäteen.' },
        { q: 'Kuinka nopeasti drone-kartoitus valmistuu?', a: 'Lennätys voi kestää tunnista muutamaan tuntiin, käsittely 2-5 päivää koosta riippuen.' },
        { q: 'Mitä formaatteja drone-kuvat ovat?', a: 'Toimitamme ortokuvat GeoTIFF-muodossa ja 3D-mallit LAZ/LAS tai mesh-muodossa.' },
        { q: 'Voitteko lentää missä säässä tahansa?', a: 'Tarvitsemme kohtuullisen sään, ei voimakasta tuulta tai sadetta.' },
        { q: 'Saako dronella mitattua tilavuuksia?', a: 'Kyllä, laskemme tarkasti maa- ja kiviainesten määrät drone-aineistosta.' },
        { q: 'Kuinka korkealta drone lentää?', a: 'Tyypillisesti 50-120 metrin korkeudelta riippuen halutusta tarkkuudesta.' },
      ]
    },
    {
      category: 'Laserkeilaus',
      questions: [
        { q: 'Mitä laserkeilaus on?', a: 'Laserkeilaus eli 3D-skannaus luo tarkan 3D-pistepiliviaineiston kohteesta.' },
        { q: 'Mihin laserkeilausta käytetään?', a: 'Rakennusten dokumentointiin, teollisuuden mittauksiin, BIM-mallinnukseen ja historiallisten kohteiden tallentamiseen.' },
        { q: 'Kuinka tarkka laserkeilaus on?', a: 'Laitteistollamme saavutamme 1-3mm tarkkuuden 50 metrin etäisyydellä.' },
        { q: 'Kuinka nopeasti laserkeilaus tehdään?', a: 'Yksittäinen skannaus kestää muutamia minuutteja, kokonaisprojekti tunneista päiviin.' },
        { q: 'Voitteko skannata liikkuvaa kohdetta?', a: 'Ei, laserkeilaus vaatii paikallaan olevan kohteen.' },
        { q: 'Mitä formaatteja pistepilvi on?', a: 'Toimitamme pistepilvet LAZ/LAS, E57 tai RCP-formaateissa.' },
        { q: 'Voitteko tehdä BIM-mallin pistepilaineistosta?', a: 'Kyllä, tuotamme BIM-malleja pistepilviaineistoista.' },
        { q: 'Kuinka suuren tilan voitte skannata?', a: 'Voimme skannata kohteita koostaan riippumatta yhdistämällä useita skannauksia.' },
        { q: 'Toimiiko laserkeilaus ulkona?', a: 'Kyllä, laserkeilaus toimii sekä sisä- että ulkotiloissa.' },
        { q: 'Kuinka monta pistettä laserkeilaus tuottaa?', a: 'Miljoonia pisteitä sekunnissa, kokonaismäärä riippuu kohteen koosta.' },
      ]
    },
    {
      category: 'Koneohjausmallit',
      questions: [
        { q: 'Mitä koneohjausmallit ovat?', a: 'Koneohjausmallit ovat 3D-malleja jotka ohjaavat maarakennuskoneita automaattisesti.' },
        { q: 'Mihin koneohjausmalleja käytetään?', a: 'Tierakentamiseen, infrarakentamiseen, kenttien rakentamiseen ja kaikenlaiseen maansiirtoon.' },
        { q: 'Missä formaatissa koneohjausmallit ovat?', a: 'Toimitamme mallit koneen vaatimassa formaatissa (LandXML, DXF, TTM, jne.).' },
        { q: 'Kuinka nopeasti saan koneohjausmallin?', a: 'Tyypillisesti 1-3 päivää suunnitelmien vastaanottamisesta.' },
        { q: 'Voitteko tehdä mallin olemassa olevista suunnitelmista?', a: 'Kyllä, teemme koneohjausmallin CAD-suunnitelmista tai PDF-piirustuksista.' },
        { q: 'Tarvitseeko mallin olla hyväksytty?', a: 'Tarkistamme mallin ennen toimitusta, mutta vastuu lopullisesta toteutuksesta on urakoitsijalla.' },
        { q: 'Voitteko auttaa mallin asennuksessa koneeseen?', a: 'Annamme ohjeita, mutta varsinaisen asennuksen tekee koneen käyttäjä tai huolto.' },
        { q: 'Toimiiko malli kaikissa koneissa?', a: 'Suurin osa koneohjausjärjestelmistä tukee standardimuotoja, mutta kerro konemerkki tarjousta pyytäessä.' },
        { q: 'Voitteko päivittää mallia työn edetessä?', a: 'Kyllä, voimme tehdä päivityksiä mallin tarvittaessa.' },
        { q: 'Kuinka tarkka koneohjausmalli on?', a: 'Mallit tehdään senttimetritarkkuudella, vastaten rakennussuunnitelmia.' },
      ]
    },
    {
      category: 'Hinnoittelu',
      questions: [
        { q: 'Kuinka paljon mittauspalvelut maksavat?', a: 'Hinnat riippuvat projektin laajuudesta ja monimutkaisuudesta. Pyydä ilmainen tarjous!' },
        { q: 'Onko konsultointi maksullista?', a: 'Ensimmäinen konsultaatio ja tarjouksen laatiminen on ilmaista.' },
        { q: 'Veloitatteko matkakuluista?', a: 'Uudenmaan alueella matkakulut sisältyvät hintaan, muualla mahdollinen lisä.' },
        { q: 'Voiko maksaa erissä?', a: 'Suurissa projekteissa voimme sopia maksuerista.' },
        { q: 'Antako alennusta isoista projekteista?', a: 'Kyllä, suuremmissa projekteissa voimme tarjota kokonaisratkaisuja edullisemmin.' },
        { q: 'Mitä maksutapoja hyväksytte?', a: 'Laskutus, verkkolasku on ensisijainen maksutapamme.' },
        { q: 'Kuinka pitkä maksuaika on?', a: 'Tyypillinen maksuaika on 14 päivää netto.' },
        { q: 'Onko hinta-arvio sitova?', a: 'Tarjous on sitova, elleivät projektin reunaehdot muutu.' },
        { q: 'Veloitatteko ylimääräisistä käynneistä?', a: 'Jos työ vaatii enemmän käyntejä kuin arvioitu, sovimme lisäveloituksesta etukäteen.' },
        { q: 'Saako tarjouksen nopeasti?', a: 'Pyrimme toimittamaan tarjouksen 1-3 arkipäivän kuluessa.' },
      ]
    },
    {
      category: 'Aikataulu',
      questions: [
        { q: 'Kuinka nopeasti pääsette aloittamaan?', a: 'Tyypillisesti pystymme aloittamaan 1-2 viikon sisällä yhteydenotosta.' },
        { q: 'Voitteko tehdä kiireellisen mittauksen?', a: 'Kyllä, pystymme usein järjestämään pikatoimituksen lisämaksusta.' },
        { q: 'Kuinka kauan projekti kestää?', a: 'Riippuu projektin laajuudesta, pienimmät 1-2 päivää, isommat viikkoja.' },
        { q: 'Milloin on paras aika tehdä maanmittaus?', a: 'Voimme mitata ympäri vuoden, mutta loppukevät ja alkusyksy ovat suosittuja.' },
        { q: 'Voitteko työskennellä viikonloppuisin?', a: 'Kyllä, voimme sopia viikonloppumittauksista tarvittaessa.' },
        { q: 'Estääkö sade mittauksen?', a: 'Kevyt sade ei haittaa useimpia mittauksia, kova sade voi estää drone-lennot.' },
        { q: 'Voitteko mitata talvella?', a: 'Kyllä, voimme tehdä mittauksia ympäri vuoden.' },
        { q: 'Kuinka kauan tulokset ovat voimassa?', a: 'Mittaustulokset ovat voimassa toistaiseksi, ellei maasto tai rakennus muutu.' },
        { q: 'Ilmoitatteko jos tulette myöhässä?', a: 'Kyllä, informoimme aina mahdollisista viivästyksistä heti.' },
        { q: 'Voiko aikataulua muuttaa?', a: 'Kyllä, joustavuus on tärkeää, ilmoita muutoksista mahdollisimman aikaisin.' },
      ]
    },
    {
      category: 'Tekniset kysymykset',
      questions: [
        { q: 'Mitä laitteita käytätte?', a: 'Käytämme Leican ja Trimblen huippuluokan mittauslaitteita.' },
        { q: 'Kuinka kalibroitte laitteenne?', a: 'Laitteemme kalibroidaan säännöllisesti valmistajan ohjeiden mukaan.' },
        { q: 'Missä koordinaattijärjestelmässä toimitatte?', a: 'Tyypillisesti ETRS-TM35FIN, mutta voimme toimittaa missä järjestelmässä tahansa.' },
        { q: 'Voitteko muuntaa koordinaatteja?', a: 'Kyllä, teemme koordinaattimuunnokset tarvittaessa.' },
        { q: 'Mitä CAD-ohjelmia tuette?', a: 'Toimitamme aineistot AutoCAD, MicroStation, Tekla ja muiden yleisimpien ohjelmien formaateissa.' },
        { q: 'Voitteko toimittaa aineiston GIS-muodossa?', a: 'Kyllä, toimitamme aineistot myös shapefile, GeoJSON tai muissa GIS-formaateissa.' },
        { q: 'Onko aineisto georeferoitu?', a: 'Kyllä, kaikki aineistomme on georeferoitua virallisessa koordinaattijärjestelmässä.' },
        { q: 'Kuinka suuren tiedoston voitte toimittaa?', a: 'Toimitamme isot aineistot pilvipalvelun kautta tai fyysisellä medialla.' },
        { q: 'Voitteko tehdä 3D-mallin?', a: 'Kyllä, tuotamme 3D-malleja laserkeilaus- tai drone-aineistosta.' },
        { q: 'Mitä GNSS-järjestelmiä käytätte?', a: 'Käytämme monikanava-vastaanottimia jotka tukevat GPS, GLONASS, Galileo ja BeiDou.' },
      ]
    },
    {
      category: 'Asiakaspalvelu',
      questions: [
        { q: 'Miten voin pyytää tarjousta?', a: 'Voit soittaa, lähettää sähköpostia tai täyttää yhteydenottolomakkeen sivustollamme.' },
        { q: 'Kuka ottaa yhteyttä tarjouksen jälkeen?', a: 'Projektipäällikkömme ottaa yhteyttä ja vastaa kysymyksiinne.' },
        { q: 'Voitteko käydä esittelemässä palveluita?', a: 'Kyllä, voimme tulla esittelemään palveluitamme paikan päällä.' },
        { q: 'Saako nähdä referenssejä?', a: 'Kyllä, voimme esitellä aikaisempia projektejamme.' },
        { q: 'Voitteko auttaa suunnittelussa?', a: 'Kyllä, autamme suunnitteluvaiheessa määrittämään tarvittavat mittaustyöt.' },
        { q: 'Onko teillä vakituiset työntekijät?', a: 'Kyllä, kaikki työntekijämme ovat kokeneita mittausalan ammattilaisia.' },
        { q: 'Puhuuko henkilökuntanne englantia?', a: 'Kyllä, palvelemme sekä suomeksi että englanniksi.' },
        { q: 'Voitteko työskennellä yhdessä muiden urakoitsijoiden kanssa?', a: 'Kyllä, teemme usein yhteistyötä muiden urakoitsijoiden ja suunnittelijoiden kanssa.' },
        { q: 'Antako koulutusta?', a: 'Voimme antaa ohjeita mittaustulosten käyttöön projektikohtaisesti.' },
        { q: 'Kuinka tavoitettavissa olette?', a: 'Olemme tavoitettavissa arkisin 8-17, kiireellisissä tapauksissa myös muina aikoina.' },
      ]
    },
  ];

  const allQuestions = faqCategories.flatMap(cat => 
    cat.questions.map(q => ({ ...q, category: cat.category }))
  );

  const filteredQuestions = searchTerm
    ? allQuestions.filter(
        item =>
          item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.a.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : null;

  return (
    <section id="ukk" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-base md:text-lg font-semibold text-blue-600 uppercase tracking-wide">
            UKK
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
            Usein Kysytyt Kysymykset
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Löydä vastaukset yleisimpiin kysymyksiin mittauspalveluistamme
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Etsi kysymyksiä..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg border-2 border-gray-200 focus:border-blue-500"
            />
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          {filteredQuestions ? (
            // Search Results
            <div className="space-y-4">
              <p className="text-gray-600 mb-6">
                Löytyi {filteredQuestions.length} kysymystä
              </p>
              <Accordion type="single" collapsible className="space-y-4">
                {filteredQuestions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`search-${index}`}
                    className="border-2 border-gray-200 rounded-lg px-6 hover:border-blue-400 transition-colors"
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
            </div>
          ) : (
            // Categories View
            <div className="space-y-12">
              {faqCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
                    {category.category}
                  </h4>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((item, qIndex) => (
                      <AccordionItem
                        key={qIndex}
                        value={`${catIndex}-${qIndex}`}
                        className="border-2 border-gray-200 rounded-lg px-6 hover:border-blue-400 transition-colors"
                      >
                        <AccordionTrigger className="text-left py-6 hover:no-underline">
                          <span className="text-lg font-semibold text-gray-900">
                            {item.q}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">
            Etkö löytänyt vastausta?
          </h4>
          <p className="text-gray-600 mb-6">
            Ota yhteyttä, niin autamme mielellämme!
          </p>
          <a
            href="#yhteystiedot"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Ota yhteyttä
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
