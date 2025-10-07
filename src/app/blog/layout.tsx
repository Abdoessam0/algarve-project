// src/app/blog/layout.tsx
import type { Metadata } from "next";
import { meta } from "@/lib/seo";

export const metadata: Metadata = meta({
  title: "Real Estate Blog",
  description:
    "Expert insights, market analysis, and guides for buying, investing, and living in the Algarve, Portugal.",
  canonical: "/blog",
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Root layout already renders Navbar + Footer. We only scope page structure here.
  return <>{children}</>;
}

