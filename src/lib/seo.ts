// src/lib/seo.ts
import type { Metadata } from "next";

export const siteName = "Real Estate Algarve";
export const siteUrl = "https://www.realestate-algarve.com";

export const defaultSEO: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Real Estate Algarve — Verified Professionals",
        template: "%s — Real Estate Algarve",
    },
    description:
        "Explore our 5-step buying method and connect with verified English-speaking professionals across the Algarve, Portugal.",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        siteName,
        url: siteUrl,
        title: "Real Estate Algarve — Verified Professionals",
        description:
            "Explore our 5-step buying method and connect with verified English-speaking professionals across the Algarve, Portugal.",
        images: [
            {
                url: "/hero-algarve.jpg",
                width: 1200,
                height: 630,
                alt: "Algarve coastline",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Real Estate Algarve — Verified Professionals",
        description:
            "Explore our 5-step buying method and connect with verified English-speaking professionals across the Algarve, Portugal.",
        images: ["/hero-algarve.jpg"],
    },
};

export function meta({
    title,
    description,
    canonical,
}: {
    title?: string;
    description?: string;
    canonical?: string;
} = {}): Metadata {
    const resolvedTitle = title && title.length > 0 ? title : undefined;
    const resolvedDesc = description && description.length > 0 ? description : defaultSEO.description;
    return {
        title: resolvedTitle,
        description: resolvedDesc,
        alternates: canonical ? { canonical } : undefined,
    };
}

export function organizationJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/logo/favicon.ico`,
    };
}

export function webSiteJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteName,
        url: siteUrl,
        potentialAction: {
            "@type": "SearchAction",
            target: `${siteUrl}/search?q={query}`,
            query: "required",
            queryInput: "required name=query",
        },
    } as const;
}


