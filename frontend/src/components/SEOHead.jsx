import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = () => {
  const businessData = {
    name: 'Mittalinja A1 Oy',
    description: 'A1-luokan mittauspalveluja vuodesta 2004. Tarjoamme rakennusmittaus, maanmittaus, drone-kartoitus, laserkeilaus, koneohjausmallit ja tarkepiirustukset Uudellamaalla.',
    phone: '+358400460872',
    email: 'info@mittalinja.fi',
    address: {
      street: 'Naapurinkuja 1',
      city: 'Vantaa',
      postalCode: '01670',
      country: 'Finland'
    },
    serviceArea: ['Helsinki', 'Vantaa', 'Espoo', 'Uusimaa'],
    services: [
      'Rakennusmittaus',
      'Maanmittaus',
      'Drone-kartoitus',
      'Laserkeilaus',
      'Koneohjausmallit',
      'Tarkepiirustukset'
    ],
    foundingYear: '2004',
    certifications: ['A1-luokka', 'AAA Gold 2025']
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://mittalinja.fi/#organization',
    name: businessData.name,
    url: 'https://mittalinja.fi',
    logo: 'https://customer-assets.emergentagent.com/job_mittalinja-preview/artifacts/oxvp2ga3_cropped-mittalinja-logo-300x86-1.png',
    description: businessData.description,
    foundingDate: businessData.foundingYear,
    email: businessData.email,
    telephone: businessData.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessData.address.street,
      addressLocality: businessData.address.city,
      postalCode: businessData.address.postalCode,
      addressCountry: businessData.address.country
    },
    areaServed: businessData.serviceArea.map(area => ({
      '@type': 'City',
      name: area
    })),
    sameAs: [
      'https://mittalinja.fi'
    ]
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://mittalinja.fi/#localbusiness',
    name: businessData.name,
    image: 'https://customer-assets.emergentagent.com/job_mittalinja-preview/artifacts/oxvp2ga3_cropped-mittalinja-logo-300x86-1.png',
    priceRange: '$$',
    description: businessData.description,
    telephone: businessData.phone,
    email: businessData.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessData.address.street,
      addressLocality: businessData.address.city,
      postalCode: businessData.address.postalCode,
      addressCountry: businessData.address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 60.2934,
      longitude: 25.0419
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '45'
    }
  };

  const servicesSchema = businessData.services.map((service, index) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://mittalinja.fi/#service-${index}`,
    name: service,
    provider: {
      '@id': 'https://mittalinja.fi/#organization'
    },
    areaServed: businessData.serviceArea,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://mittalinja.fi',
      servicePhone: businessData.phone,
      email: businessData.email
    }
  }));

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Mitä palveluita Mittalinja A1 tarjoaa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tarjoamme kattavat mittauspalvelut: rakennusmittaus, maanmittaus, drone-kartoitus, laserkeilaus, laskenta ja tarkepiirustukset sekä koneohjausmallit.'
        }
      },
      {
        '@type': 'Question',
        name: 'Kuinka kauan olette toimineet alalla?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Olemme tarjonneet A1-luokan mittauspalveluja vuodesta 2004 alkaen, eli yli 20 vuoden kokemuksella.'
        }
      },
      {
        '@type': 'Question',
        name: 'Millä alueella toimitte?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pääasiallinen toimialueemme on Helsinki, Vantaa, Espoo ja muu Uusimaa.'
        }
      },
      {
        '@type': 'Question',
        name: 'Kuinka tarkka rakennusmittaus on?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Käytämme millimetritarkkoja mittauslaitteita, joten mittaustarkkuutemme on tyypillisesti ±1-2mm.'
        }
      },
      {
        '@type': 'Question',
        name: 'Kuinka tarkka maanmittaus on?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'RTK-GNSS laitteistollamme saavutamme senttimetritarkkuuden (±1-3cm).'
        }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Etusivu',
        item: 'https://mittalinja.fi'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Palvelut',
        item: 'https://mittalinja.fi#palvelut'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Yhteystiedot',
        item: 'https://mittalinja.fi#yhteystiedot'
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Mittalinja A1 Oy | A1-Luokan Mittauspalvelut Helsinki, Vantaa, Espoo</title>
      <meta name="title" content="Mittalinja A1 Oy | A1-Luokan Mittauspalvelut Helsinki, Vantaa, Espoo" />
      <meta name="description" content="A1-luokan mittauspalveluja vuodesta 2004. Rakennusmittaus, maanmittaus, drone-kartoitus, laserkeilaus, koneohjausmallit. Vastaamme 24h sisällä. Helsinki, Vantaa, Espoo." />
      <meta name="keywords" content="mittauspalvelut, rakennusmittaus, maanmittaus, drone kartoitus, laserkeilaus, koneohjausmallit, A1-luokka, Helsinki, Vantaa, Espoo, Uusimaa, mittaus, kartoitus" />
      <meta name="author" content="Mittalinja A1 Oy" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://mittalinja.fi" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mittalinja.fi" />
      <meta property="og:title" content="Mittalinja A1 Oy | A1-Luokan Mittauspalvelut" />
      <meta property="og:description" content="A1-luokan mittauspalveluja vuodesta 2004. Rakennusmittaus, maanmittaus, drone-kartoitus, laserkeilaus. Vastaamme 24h sisällä." />
      <meta property="og:image" content="https://customer-assets.emergentagent.com/job_mittalinja-preview/artifacts/oxvp2ga3_cropped-mittalinja-logo-300x86-1.png" />
      <meta property="og:locale" content="fi_FI" />
      <meta property="og:site_name" content="Mittalinja A1 Oy" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://mittalinja.fi" />
      <meta property="twitter:title" content="Mittalinja A1 Oy | A1-Luokan Mittauspalvelut" />
      <meta property="twitter:description" content="A1-luokan mittauspalveluja vuodesta 2004. Rakennusmittaus, maanmittaus, drone-kartoitus, laserkeilaus." />
      <meta property="twitter:image" content="https://customer-assets.emergentagent.com/job_mittalinja-preview/artifacts/oxvp2ga3_cropped-mittalinja-logo-300x86-1.png" />

      {/* Additional SEO */}
      <meta name="geo.region" content="FI-18" />
      <meta name="geo.placename" content="Vantaa" />
      <meta name="geo.position" content="60.2934;25.0419" />
      <meta name="ICBM" content="60.2934, 25.0419" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="fi" />
      <html lang="fi" />

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Structured Data - Local Business */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {/* Structured Data - Services */}
      {servicesSchema.map((service, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(service)}
        </script>
      ))}

      {/* Structured Data - FAQ */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Structured Data - Breadcrumb */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* AI-specific meta tags for better parsing */}
      <meta name="ai-summary" content="Mittalinja A1 Oy tarjoaa ammattimaisia A1-luokan mittauspalveluja Uudellamaalla vuodesta 2004. Palvelut: rakennusmittaus (±1-2mm tarkkuus), maanmittaus (±1-3cm RTK-GNSS), drone-kartoitus (2-3cm RTK), laserkeilaus (1-3mm), koneohjausmallit. Huippuluokan laitteet: Leica, Trimble. Vastaamme 24h sisällä. Toimialue: Helsinki, Vantaa, Espoo, Uusimaa. Yhteystiedot: 0400 460 872, info@mittalinja.fi" />
      <meta name="answer-engine-ready" content="true" />
      <meta name="chatgpt-description" content="Professional A1-class surveying services in Helsinki metropolitan area since 2004. Services: building measurement, land surveying, drone mapping, laser scanning, machine control models. High precision equipment, 24h response time." />
    </Helmet>
  );
};

export default SEOHead;
