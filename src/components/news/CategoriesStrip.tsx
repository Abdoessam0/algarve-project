import Link from "next/link";
import { Home } from "lucide-react";

import { getCategoryIcon } from "@/components/news/categoryIcons";
import { normalizeText } from "@/lib/utils";

type CategoriesStripProps = {
  active?: string;
};

const LABELS = [
  "Construction Updates",
  "Expat & Investor Focus",
  "General",
  "Health",
  "Investment Insights",
  "Legal Updates",
  "Lifestyle",
  "Market Trends",
  "Neighborhood News",
  "Politics",
  "Professional News",
  "Sustainability & Environment",
  "Technology",
  "Tourism",
];

const baseClasses =
  "inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300";

export default function CategoriesStrip({ active = "all" }: CategoriesStripProps) {
  return (
    <section
      aria-label="News categories"
      className="rounded-2xl border border-stone-200 bg-stone-50/60 px-5 py-4"
    >
      <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-500">
        CATEGORIES:
      </div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="News categories tabs">
        <Link
          href="/news"
          role="tab"
          aria-selected={active === "all"}
          data-state={active === "all" ? "active" : "inactive"}
          className={[
            baseClasses,
            active === "all"
              ? "border-stone-900 bg-stone-900 text-white"
              : "border-stone-200 bg-stone-100 text-stone-800 hover:bg-stone-200",
          ].join(" ")}
        >
          <Home className="h-4 w-4" aria-hidden />
          All
        </Link>
        {LABELS.map((label) => {
          const slug = normalizeText(label);
          const Icon = getCategoryIcon(slug);
          const isActive = active === slug;
          return (
            <Link
              key={slug}
              href={`/news/${slug}`}
              role="tab"
              aria-selected={isActive}
              data-state={isActive ? "active" : "inactive"}
              className={[
                baseClasses,
                isActive
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-200 bg-stone-100 text-stone-800 hover:bg-stone-200",
              ].join(" ")}
            >
              <Icon className="h-4 w-4" aria-hidden />
              {label}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
