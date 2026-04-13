import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageSEO = ({ 
  title, 
  description, 
  keywords,
  canonicalUrl,
  ogImage,
  structuredData 
}) => {
  const siteName = 'Mittalinja A1 Oy';
  const fullTitle = `${title} | ${siteName}`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || 'https://customer-assets.emergentagent.com/job_mittalinja-preview/artifacts/oxvp2ga3_cropped-mittalinja-logo-300x86-1.png'} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fi_FI" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage || 'https://customer-assets.emergentagent.com/job_mittalinja-preview/artifacts/oxvp2ga3_cropped-mittalinja-logo-300x86-1.png'} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Hreflang */}
      <link rel="alternate" hrefLang="fi" href={canonicalUrl} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="Finnish" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Mittalinja A1 Oy" />
    </Helmet>
  );
};

export default PageSEO;
