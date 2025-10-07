// src/app/professionals/layout.tsx
import type { Metadata } from "next";
import { meta } from "@/lib/seo";

export const metadata: Metadata = meta({
  title: "Real Estate Professionals",
  description:
    "Connect with verified real estate agents, lawyers, architects, and service experts across the Algarve.",
  canonical: "/professionals",
});

export default function ProfessionalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Root layout already renders Navbar + Footer
  return <>{children}</>;
}

