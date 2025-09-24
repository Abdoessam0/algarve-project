import { Metadata } from "next";
import { CookiePolicyContent } from "./components/CookiePolicyContent";

export const metadata: Metadata = {
    title: "Cookie Policy - Real Estate Algarve | Real Estate Directory",
    description:
        "Learn how Real Estate Algarve uses cookies and similar technologies to enhance your experience on our real estate directory website. Understand your options for managing cookies.",
    alternates: {
        canonical: "https://www.realestate-algarve.com/cookie-policy",
        languages: {
            en: "https://www.realestate-algarve.com/cookie-policy",
            pt: "https://www.realestate-algarve.com/cookie-policy",
        },
    },
    openGraph: {
        title: "Cookie Policy - Real Estate Algarve",
        description:
            "Understand how cookies are used on the Real Estate Algarve website to improve your real estate search experience.",
        url: "https://www.realestate-algarve.com/cookie-policy",
        type: "website",
        images: [{ url: "/hero-algarve.jpg" }],
        siteName: "Real Estate Algarve",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cookie Policy - Real Estate Algarve",
        description:
            "Learn about cookie usage and management options on our platform.",
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
        "ai-topic": "cookie-policy",
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

export default function CookiePolicyPage() {
    return <CookiePolicyContent />;
}


