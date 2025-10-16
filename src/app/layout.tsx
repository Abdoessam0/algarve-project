// src/app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import { defaultSEO, organizationJsonLd, webSiteJsonLd } from "@/lib/seo";
import Navbar from "@/components/steps/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = defaultSEO;
// Ensure proper mobile scaling
export const viewport = { width: "device-width", initialScale: 1 } as const;

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
      <body className="min-h-screen flex flex-col bg-sand-50 text-ink-900 font-sans antialiased">
        <AuthProvider>
          <Navbar />
          <main className="flex-1 pt-16 md:pt-0">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
