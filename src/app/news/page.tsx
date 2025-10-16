import type { Metadata } from "next";
import { meta } from "@/lib/seo";

import ComingSoon from "@/components/common/ComingSoon";

export const metadata: Metadata = meta({
  title: "News & Market Updates",
  description:
    "Stay current on Algarve real estate news, policy updates, and expert commentary to inform your property decisions.",
  canonical: "/news",
});

export default function NewsPage() {
  return <ComingSoon />;
}
