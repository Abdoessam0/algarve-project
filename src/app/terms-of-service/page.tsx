import { Metadata } from "next";
import { TermsOfServiceContent } from "./components/TermsOfServiceContent";

export const metadata: Metadata = {
  title: "Terms of Service - Real Estate Algarve | Real Estate Directory",
  description:
    "Review the Terms of Service for using Real Estate Algarve, your real estate directory in Algarve, Portugal. Understand your rights and responsibilities when accessing our platform.",
  alternates: {
    canonical: "https://www.realestate-algarve.com/terms-of-service",
    languages: {
      en: "https://www.realestate-algarve.com/terms-of-service",
      pt: "https://www.realestate-algarve.com/terms-of-service",
    },
  },
  openGraph: {
    title: "Terms of Service - Real Estate Algarve",
    description:
      "Learn the terms and conditions for using Real Estate Algarve's services and platform.",
    url: "https://www.realestate-algarve.com/terms-of-service",
    type: "website",
    images: [{ url: "/hero-algarve.jpg" }],
    siteName: "Real Estate Algarve",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Real Estate Algarve",
    description: "Legal terms and conditions for using our real estate platform.",
    images: ["/hero-algarve.jpg"],
    site: "@RealEstateAlgarve",
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
  other: {
    "ai-content-type": "legal-document",
    "ai-topic": "terms-of-service",
    "ai-expertise-level": "legal-information",
    "ai-geographic-focus": "algarve-portugal",
    "ai-update-frequency": "yearly",
    "ai-content-format": "legal-document",
    "ai-service-category": "legal-compliance",
    "ai-verification-status": "company-verified",
    "geo.region": "PT",
    "geo.placename": "Algarve, Portugal",
    "geo.position": "37.0179;-7.9308",
    ICBM: "37.0179, -7.9308",
    "business.contact_data.country": "Portugal",
    "business.contact_data.region": "Algarve",
    audience: "all-users, property-buyers, investors, real-estate-professionals",
    "content-language": "en",
    distribution: "global",
    rating: "general",
    "revisit-after": "365 days",
  },
};

export default function TermsOfServicePage() {
  return <TermsOfServiceContent />;
}


