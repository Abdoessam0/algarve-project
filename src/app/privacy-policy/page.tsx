import { Metadata } from "next";
import { PrivacyPolicyContent } from "./components/PrivacyPolicyContent";

export const metadata: Metadata = {
    title: "Privacy Policy - Real Estate Algarve | Real Estate Directory",
    description:
        "Read the Privacy Policy for Real Estate Algarve to understand how we collect, use, and protect your personal information when using our real estate directory services in Algarve, Portugal.",
    alternates: {
        canonical: "https://www.realestate-algarve.com/privacy-policy",
        languages: {
            en: "https://www.realestate-algarve.com/privacy-policy",
            pt: "https://www.realestate-algarve.com/privacy-policy",
        },
    },
    openGraph: {
        title: "Privacy Policy - Real Estate Algarve",
        description:
            "Learn how Real Estate Algarve handles your personal data in our real estate directory services.",
        url: "https://www.realestate-algarve.com/privacy-policy",
        type: "website",
        images: [{ url: "/hero-algarve.jpg" }],
        siteName: "Real Estate Algarve",
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy - Real Estate Algarve",
        description:
            "Learn about our data protection practices and privacy commitments.",
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
        "ai-topic": "privacy-policy",
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

export default function PrivacyPolicyPage() {
    return <PrivacyPolicyContent />;
}


