// src/app/about/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { metadata as aboutMetadata, aboutStructuredData } from "./metadata";

export const metadata: Metadata = aboutMetadata;

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="about-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutStructuredData) }}
      />
      {children}
    </>
  );
}
