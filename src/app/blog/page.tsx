import type { Metadata } from "next";
import { meta } from "@/lib/seo";

import ComingSoon from "@/components/common/ComingSoon";

export const metadata: Metadata = meta({
  title: "Real Estate Blog",
  description:
    "Expert insights, market analysis, and step-by-step guides for buying, investing, and living in the Algarve.",
  canonical: "/blog",
});

export default function BlogPage() {
  return <ComingSoon />;
}
