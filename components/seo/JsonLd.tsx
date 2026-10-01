import * as React from "react";
import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.tagline,
    telephone: siteConfig.phoneFormatted,
    email: siteConfig.email,
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "39.7392",
      longitude: "-104.9903",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: `${area.city}, ${area.state}`,
    })),
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card, Check, Financing Available",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HVAC Repair & Maintenance Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency AC Repair",
            description: "24/7 emergency diagnostic and fast repair for residential air conditioning systems.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Furnace & Heating Repair",
            description: "Expert troubleshooting and replacement for gas furnaces, heat pumps, and boilers.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Seasonal HVAC Tune-Up",
            description: "21-point system inspection and cleaning for maximum energy efficiency.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}
