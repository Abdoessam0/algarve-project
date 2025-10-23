// src/app/about/metadata.ts
import type { Metadata } from "next";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title:
    "Meet Real Estate Algarve | Experts in Algarve & Portugal Property Market | Powered by 5 Steps Real Estate",
  description:
    "Learn about Real Estate Algarve, powered by 5 Steps Real Estate's PropTech platform. Portugal's trusted platform connecting international buyers with verified Algarve real estate professionals. Discover our mission, values, expert team, and technology-driven services.",
  keywords: [
    "about real estate algarve",
    "portuguese property platform",
    "international buyers algarve",
    "verified real estate agents algarve",
    "algarve property services",
    "portugal real estate experts",
    "real estate algarve team",
    "algarve real estate assistance",
    "algarve property platform",
    "proptech algarve",
    "real estate technology algarve",
    "5 steps real estate algarve",
  ],
  openGraph: {
    title:
      "About Real Estate Algarve | Portugal's Premier Property Connection Platform | Powered by 5 Steps Real Estate",
    description:
      "Discover Real Estate Algarve's mission to connect international buyers with Portugal's most trusted Algarve real estate professionals. Powered by 5 Steps Real Estate's PropTech platform.",
    url: "https://www.realestate-algarve.com/about",
    type: "website",
    images: [
      {
        url: "/images/about_us.jpg",
        width: 1200,
        height: 630,
        alt:
          "Real Estate Algarve Team - Connecting international buyers with verified Algarve property professionals",
      },
    ],
    siteName: "Real Estate Algarve",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Real Estate Algarve | Portugal's Premier Property Platform | Powered by 5 Steps Real Estate",
    description:
      "Our mission is to simplify Algarve real estate for international buyers with PropTech and verified professionals.",
    images: ["/images/about_us.jpg"],
    creator: "@RealEstateAlgarve",
  },
  alternates: {
    canonical: "https://www.realestate-algarve.com/about",
    languages: {
      en: "https://www.realestate-algarve.com/about",
      es: "https://www.realestate-algarve.com/es/about",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Real Estate Algarve Team" }],
  creator: "Real Estate Algarve",
  publisher: "Real Estate Algarve",
  category: "Real Estate",
  other: {
    "application-name": "Real Estate Algarve",
    "apple-mobile-web-app-title": "Real Estate Algarve",
    "msapplication-TileColor": "#111827",
    "theme-color": "#111827",
    "article:author": "Real Estate Algarve Team",
    "article:publisher":
      "https://www.facebook.com/profile.php?id=61574617724175",
    "og:rich_attachment": "true",
    "geo.region": "PT-08",
    "geo.placename": "Algarve, Portugal",
    "geo.position": "37.0891;-8.2479",
    ICBM: "37.0891, -8.2479",
  },
};

// Structured data (Algarve)
export const aboutStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.realestate-algarve.com/about",
      url: "https://www.realestate-algarve.com/about",
      name:
        "About Real Estate Algarve | Powered by 5 Steps Real Estate",
      description:
        "Real Estate Algarve is the Algarve branch of 5 Steps Real Estate, connecting international buyers with verified professionals and a clear, technology-supported buying journey.",
      mainEntity: {
        "@type": "Organization",
        name: "Real Estate Algarve",
        url: "https://www.realestate-algarve.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.realestate-algarve.com/favicon.ico",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Salvador Martins 3A",
          addressLocality: "Porto Salvo",
          postalCode: "2740-315",
          addressCountry: "PT",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+351-912-154-527",
          contactType: "customer service",
          email: "contact@5stepsrealestate.com",
          availableLanguage: ["English", "Portuguese"],
        },
        foundingDate: "2025",
        numberOfEmployees: "3-10",
        areaServed: { "@type": "Place", name: "Algarve Region, Portugal" },
        parentOrganization: {
          "@type": "Organization",
          name: "5 Steps Real Estate",
          url: "https://5stepsrealestate.com",
          sameAs: [
            "https://www.linkedin.com/company/5-steps-real-estate",
            "https://www.instagram.com/5stepsrealestate",
            "https://x.com/5stepsRE",
          ],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Real Estate Professional Services",
          itemListElement: services
            .filter((s) => s.available)
            .map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s.name, description: s.description },
            })),
        },
        knowsAbout: [
          "Algarve real estate professionals",
          "International property transactions",
          "Portuguese property law",
          "Real estate investment analysis",
          "Property market data and trends",
          "PropTech solutions for real estate",
        ],
      },
    },
    {
      "@type": "Organization",
      name: "Real Estate Algarve",
      alternateName: "RealEstate-Algarve.com",
      url: "https://www.realestate-algarve.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.realestate-algarve.com/favicon.ico",
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61574617724175",
        "https://www.instagram.com/5stepsrealestate",
        "https://x.com/5stepsRE",
        "https://www.linkedin.com/company/5-steps-real-estate",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+351-912-154-527",
        contactType: "customer service",
        email: "contact@5stepsrealestate.com",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Salvador Martins 3A",
        addressLocality: "Porto Salvo",
        postalCode: "2740-315",
        addressCountry: "PT",
      },
      description:
        "Real Estate Algarve is the Algarve branch of 5 Steps Real Estate, a PropTech company connecting international buyers with verified professionals and a clear acquisition roadmap.",
      foundingDate: "2025",
      parentOrganization: {
        "@type": "Organization",
        name: "5 Steps Real Estate",
        url: "https://5stepsrealestate.com",
      },
      employee: [],
      founder: [
        { "@type": "Person", name: "Pieter Paul Castelein", jobTitle: "CEO" },
        {
          "@type": "Person",
          name: "Mihail Talev",
          jobTitle: "Head of Digital Innovation",
        },
        {
          "@type": "Person",
          name: "Nikola Zdraveski",
          jobTitle: "Property Data Specialist",
        },
      ],
    },
    {
      "@type": "WebSite",
      name: "Real Estate Algarve",
      url: "https://www.realestate-algarve.com",
      publisher: {
        "@type": "Organization",
        name: "5 Steps Real Estate",
        url: "https://5stepsrealestate.com",
      },
      isPartOf: { "@id": "https://5stepsrealestate.com" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "5 Steps Real Estate",
          item: "https://5stepsrealestate.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Algarve Branch",
          item: "https://www.realestate-algarve.com",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "About",
          item: "https://www.realestate-algarve.com/about",
        },
      ],
    },
  ],
};
