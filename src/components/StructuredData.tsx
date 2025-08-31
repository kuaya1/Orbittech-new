import React from 'react';

interface StructuredDataProps {
  data: object;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Local Business Schema Data
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "The Orbit Tech",
  "@id": "https://theorbittech.com",
  "url": "https://www.theorbittech.com",
  "telephone": "+15719996915",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "McLean",
    "addressLocality": "McLean",
    "addressRegion": "VA",
    "postalCode": "22102",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 38.9338,
    "longitude": -77.2297
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "priceRange": "$$",
  "serviceType": ["Starlink Installation","Amazon Kuiper Installation","Mesh WiFi Setup","Business Internet Solutions"],
  "areaServed": [
    {
      "@type": "State",
      "name": "Virginia"
    },
    {
      "@type": "State", 
      "name": "Maryland"
    },
    {
      "@type": "City",
      "name": "Washington",
      "addressRegion": "DC"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "200",
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Internet Installation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Starlink Installation",
          "description": "Professional Starlink satellite internet installation with same-day service"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Mesh WiFi Setup",
          "description": "Enterprise-grade mesh WiFi system installation and optimization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Business Internet Solutions",
          "description": "Redundant internet connectivity solutions for businesses"
        }
      }
    ]
  }
};

// Speakable Schema for Voice Search
export const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".hero-title", ".services-description", ".faq-answer"]
  }
};