# Yhteydenottolomake - Tietokantatallennuksella

## ✅ Toteutettu ratkaisu

Yhteydenottolomake **tallentaa viestit MongoDB-tietokantaan** sähköpostin lähettämisen sijaan.

---

## 🎯 Toiminnallisuudet

### Frontend (Yhteydenottolomake)

**Sijainti:** http://localhost:3000/yhteystiedot

**Kentät:**
- Nimi (pakollinen)
- Sähköposti (pakollinen)
- Puhelinnumero (valinnainen)
- Viesti (pakollinen)
- **Honeypot-kenttä** (piilotettu, spam-esto)

**Honeypot spam-suojaus:**
- Piilotettu kenttä jota käyttäjät eivät näe
- Robotit täyttävät sen automaattisesti
- Jos kenttä on täytetty, viesti hylätään hiljaisesti (ei virheilmoitusta)

**Toiminta:**
1. Käyttäjä täyttää lomakkeen
2. Klikkaa "Lähetä viesti"
3. Viesti tallentuu MongoDB:hen
4. Käyttäjä saa vahvistuksen: "Kiitos yhteydenotostasi! Vastaamme sinulle 24 tunnin sisällä."

---

### Backend API

**Endpointit:**

#### 1. POST /api/contact
Tallentaa viestin tietokantaan

**Request body:**
```json
{
  "name": "Matti Meikäläinen",
  "email": "matti@example.com",
  "phone": "040 123 4567",
  "message": "Haluaisin tarjouksen...",
  "honeypot": ""
}
```

**Response:**
```json
{
  "success": true,
  "message": "Kiitos yhteydenotostasi! Vastaamme sinulle 24 tunnin sisällä."
}
```

#### 2. GET /api/contact/messages
Hakee kaikki viestit (admin)

**Response:**
```json
{
  "success": true,
  "count": 2,
  "messages": [
    {
      "id": "uuid",
      "name": "Matti Meikäläinen",
      "email": "matti@example.com",
      "phone": "040 123 4567",
      "message": "Viesti...",
      "timestamp": "13.04.2026 12:50:36",
      "read": false,
      "ip_address": "10.79.129.5"
    }
  ]
}
```

#### 3. PATCH /api/contact/messages/{message_id}/read
Merkitsee viestin luetuksi

**Response:**
```json
{
  "success": true,
  "message": "Viesti merkitty luetuksi"
}
```

---

### MongoDB Collection

**Collection:** `contact_messages`

**Schema:**
```javascript
{
  id: String,           // UUID
  name: String,         // Lähettäjän nimi
  email: String,        // Sähköpostiosoite
  phone: String,        // Puhelinnumero (optional)
  message: String,      // Viestin sisältö
  timestamp: DateTime,  // Lähetysaika (UTC)
  read: Boolean,        // Onko luettu?
  ip_address: String    // Lähettäjän IP-osoite
}
```

---

### Admin-näkymä

**Sijainti:** http://localhost:3000/admin/viestit

**Toiminnallisuudet:**
- ✅ Näyttää kaikki viestit uusimmasta vanhimpaan
- ✅ Suodattimet: Kaikki / Lukemattomat / Luetut
- ✅ Merkitse viesti luetuksi -nappi
- ✅ Lukemattomat viestit näkyvät sinisellä reunalla
- ✅ Klikkaa sähköpostia tai puhelinta → avaa mailto/tel linkki
- ✅ Näyttää aikaleiman, IP-osoitteen ja kaikki tiedot

**Visuaalinen hierarkia:**
- Lukematon viesti = Sininen reunus vasemmalla
- Luettu viesti = Harmaa reunus

---

## 🔐 Turvallisuus

### Honeypot spam-suojaus
- Piilotettu kenttä lomakkeessa
- CSS: `position: absolute; left: -9999px`
- Robotit täyttävät sen, ihmiset eivät näe sitä
- Jos täytetty → viesti hylätään hiljaisesti

### IP-osoitteiden tallennus
- Jokaisesta viestistä tallennetaan lähettäjän IP
- Voidaan käyttää spam-seurantaan ja estoon

### Tulevaisuuden parannukset
- Rate limiting (esim. max 5 viestiä/IP/tunti)
- Email-validointi (tarkista disposable emails)
- ReCAPTCHA v3 integraatio (jos halutaan)

---

## 📊 Käyttöönotto

### Lomakkeen käyttö (asiakas)

1. Mene: http://mittalinja.fi/yhteystiedot
2. Täytä lomake
3. Klikkaa "Lähetä viesti"
4. Saat vahvistuksen

### Viestien lukeminen (admin)

1. Mene: http://mittalinja.fi/admin/viestit
2. Näet kaikki viestit
3. Suodata tarvittaessa (Kaikki / Lukemattomat / Luetut)
4. Lue viestit ja merkitse luetuksi
5. Soita tai lähetä email asiakkaalle suoraan

---

## 🔧 Tekninen toteutus

**Backend:** FastAPI + Motor (async MongoDB)
**Frontend:** React + Axios
**Tietokanta:** MongoDB

**Tiedostot:**
- Backend: `/app/backend/routes/contact.py`
- Frontend lomake: `/app/frontend/src/components/ContactSection.jsx`
- Admin-sivu: `/app/frontend/src/pages/AdminMessagesPage.jsx`

---

## 📈 Edut verrattuna email-ratkaisuun

✅ **Ei SMTP-konfiguraatiota** - Ei tarvita Gmail App Password, Resend, jne.
✅ **Keskitetty tallennuspaikka** - Kaikki viestit yhdessä paikassa
✅ **Ei menetettyjä viestejä** - Email voi mennä roskapostiin
✅ **Spam-suojaus** - Honeypot-kenttä estää robotit
✅ **IP-seuranta** - Voidaan tunnistaa spam-lähteet
✅ **Lukukuittaukset** - Näet mitkä viestit on käsitelty
✅ **Suodattimet** - Helppo löytää lukemattomat viestit

---

## 🚀 Seuraavat askeleet

**Julkaisussa:**
1. Testaa lomake tuotannossa
2. Varmista että MongoDB on käytössä
3. Tallenna admin-sivun URL turvallisesti (ei julkista linkkiä)

**Valinnaisia parannuksia:**
- Lisää password-suojaus admin-sivulle
- Exporttaa viestit CSV-tiedostoon
- Automaattinen spam-filtteri (ML-pohjainen)
- Email-notifikaatiot uusista viesteistä (valinnainen)

---

## 📞 Yhteystiedot

**Jos haluat lisätä email-notifikaatiot myöhemmin:**
- Voidaan lähettää email-ilmoitus joka kerta kun uusi viesti saapuu
- Säilyttää nykyinen ratkaisu + lisää email-notifikaatio
- Ei vaadi SMTP-konfiguraatiota ennen julkaisua

**Kysymyksiä?**
Kerro jos tarvitset lisäominaisuuksia tai muutoksia!
