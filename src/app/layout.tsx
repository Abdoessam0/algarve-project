// src/app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import { defaultSEO, organizationJsonLd, webSiteJsonLd } from "@/lib/seo";
import Navbar from "@/components/steps/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = defaultSEO;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd()) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
