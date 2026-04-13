# SMTP-asetukset yhteydenottolomakkeelle

## Nykyinen tilanne

✅ **Yhteydenottolomake on toteutettu ja testattu**
- Frontend-lomake: `/app/frontend/src/pages/ContactPage.jsx`
- Backend-API: `/app/backend/routes/contact.py`
- API-endpoint: `POST /api/contact`
- Vastaanottajan sähköposti: `ari.piiroinen@mittalinja.fi`

⚠️ **SMTP-tunnukset puuttuvat** - Sähköpostit eivät lähetä tuotannossa ilman näitä asetuksia.

---

## SMTP-palvelun valinta

Valitse yksi seuraavista vaihtoehdoista:

### Vaihtoehto 1: Gmail (SUOSITELTU pienille yrityksille)

**Edut:**
- Ilmainen
- Luotettava ja nopea
- Helppo konfiguroida

**Haitat:**
- Rajoitus: max 500 viestiä/päivä
- Vaatii "App Password" -asetusten konfiguroinnin

**Ohjeet:**
1. Kirjaudu Gmail-tiliisi
2. Mene: https://myaccount.google.com/security
3. Ota käyttöön "2-Step Verification"
4. Mene: https://myaccount.google.com/apppasswords
5. Luo uusi "App Password" sovellukselle "Mail"
6. Kopioi generoitu 16-merkkinen salasana

**Asetukset `.env`-tiedostoon:**
```env
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USERNAME="ari.piiroinen@mittalinja.fi"
SMTP_PASSWORD="xxxx xxxx xxxx xxxx"  # 16-merkkinen App Password
SMTP_FROM_EMAIL="noreply@mittalinja.fi"
```

---

### Vaihtoehto 2: Microsoft 365 / Outlook

**Edut:**
- Ammattimainen ratkaisu
- Hyvä jos yrityksellä on jo M365-tilaus
- Suuremmat lähetysrajat

**Haitat:**
- Maksullinen (jos ei ole jo tilausta)
- Vaatii enemmän konfiguraatiota

**Asetukset `.env`-tiedostoon:**
```env
SMTP_HOST="smtp.office365.com"
SMTP_PORT="587"
SMTP_USERNAME="ari.piiroinen@mittalinja.fi"
SMTP_PASSWORD="sähköpostitilin-salasana"
SMTP_FROM_EMAIL="ari.piiroinen@mittalinja.fi"
```

---

### Vaihtoehto 3: SendGrid (Ammattikäyttöön)

**Edut:**
- Ilmainen tier: 100 viestiä/päivä
- Ammattimainen palvelu
- Analytics ja raportointi
- Parempi deliverability

**Haitat:**
- Vaatii tilin luomisen
- Enemmän konfiguraatiota

**Ohjeet:**
1. Rekisteröidy: https://signup.sendgrid.com/
2. Vahvista sähköposti
3. Luo API Key: Settings → API Keys → Create API Key
4. Valitse "Full Access" tai "Mail Send"

**Asetukset `.env`-tiedostoon:**
```env
SMTP_HOST="smtp.sendgrid.net"
SMTP_PORT="587"
SMTP_USERNAME="apikey"  # Kirjaimellisesti "apikey"
SMTP_PASSWORD="SG.xxxxxxxxxxxx"  # SendGrid API key
SMTP_FROM_EMAIL="noreply@mittalinja.fi"
```

**Huom:** SendGrid vaatii lähettäjän sähköpostin verifioimisen.

---

### Vaihtoehto 4: Resend (Moderni vaihtoehto)

**Edut:**
- Ilmainen: 100 viestiä/päivä, 3000/kk
- Moderni API
- Helppo käyttää
- Hyvä dokumentaatio

**Ohjeet:**
1. Rekisteröidy: https://resend.com/signup
2. Luo API key
3. Lisää domain (tai käytä ilmaista testausdomain)

**Asetukset `.env`-tiedostoon:**
```env
SMTP_HOST="smtp.resend.com"
SMTP_PORT="587"
SMTP_USERNAME="resend"
SMTP_PASSWORD="re_xxxxxxxxxxxx"  # Resend API key
SMTP_FROM_EMAIL="noreply@mittalinja.fi"
```

---

## Miten asennat SMTP-tunnukset?

### Vaihe 1: Valitse SMTP-palvelu yllä olevista vaihtoehdoista

### Vaihe 2: Päivitä `/app/backend/.env` -tiedosto

Avaa tiedosto `/app/backend/.env` ja poista kommentit (#) riveiltä 7-11, sitten päivitä oikeat arvot:

```env
MONGO_URL="mongodb://localhost:27017"
DB_NAME="test_database"
CORS_ORIGINS="*"

# SMTP Email Configuration
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USERNAME="ari.piiroinen@mittalinja.fi"
SMTP_PASSWORD="xxxx xxxx xxxx xxxx"
SMTP_FROM_EMAIL="noreply@mittalinja.fi"
```

### Vaihe 3: Käynnistä backend uudelleen

```bash
sudo supervisorctl restart backend
```

### Vaihe 4: Testaa

Lähetä testimiesti yhteydenottolomakkeelta:
1. Avaa: http://localhost:3000/yhteystiedot
2. Täytä lomake
3. Lähetä
4. Tarkista että sähköposti saapuu osoitteeseen: ari.piiroinen@mittalinja.fi

---

## Yleisimmät ongelmat

### "Authentication failed"
- Tarkista käyttäjätunnus ja salasana
- Gmailissa: Varmista että käytät App Passwordia, et tavallista salasanaa
- Varmista että 2-Step Verification on päällä (Gmail)

### "Connection timeout"
- Tarkista SMTP_HOST ja SMTP_PORT
- Tarkista palomuuriasetukset
- Jotkin hosting-palvelut estävät portin 587

### "Sender not verified"
- SendGrid/Resend: Vahvista lähettäjän sähköposti
- Tarkista SMTP_FROM_EMAIL

### Testaa terminaalissa:

```bash
API_URL=$(grep REACT_APP_BACKEND_URL /app/frontend/.env | cut -d '=' -f2)
curl -X POST "$API_URL/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Testi",
    "email": "testi@example.com",
    "phone": "040 123 4567",
    "message": "Testimiesti"
  }'
```

Jos onnistuu, vastaus:
```json
{
  "success": true,
  "message": "Kiitos yhteydenotostasi! Vastaamme sinulle 24 tunnin sisällä."
}
```

---

## Suositus

**Pienille/keskisuurille yrityksille: Gmail**
- Ilmainen
- Luotettava
- Riittää useimmille tarpeille (500 viestiä/päivä)

**Ammattikäyttöön: SendGrid tai Resend**
- Parempi deliverability
- Analytics
- Skaalautuva
- Ilmainen tier riittää useimmille

---

## Tuki

Jos tarvitset apua SMTP-asetusten kanssa:
1. Tarkista ylläolevat ohjeet
2. Testaa eri SMTP-palvelua
3. Tarkista backend-logit: `tail -f /var/log/supervisor/backend.*.log`

**Backend-logeista näet:**
- Onnistuiko sähköpostin lähetys
- Mahdolliset virheviestit
- SMTP-yhteysyritykset
