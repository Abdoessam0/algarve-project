import Link from "next/link";

import { normalizeText } from "@/lib/utils";

type CategorySectionShellProps = {
  title: string;
  href?: string;
  slots?: number;
};

export default function CategorySectionShell({
  title,
  href,
  slots = 4,
}: CategorySectionShellProps) {
  const slotCount = Math.max(1, slots);
  const sectionId = `category-${normalizeText(title)}`;

  return (
    <section aria-labelledby={sectionId}>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 id={sectionId} className="text-xl font-semibold text-gray-900">
          {title}
        </h2>
        {href ? (
          <Link
            href={href}
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            View all →
          </Link>
        ) : null}
      </div>
      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
        {/* TODO(scraping): inject articles for this category */}
        {Array.from({ length: slotCount }).map((_, index) => (
          <div
            key={index}
            className="h-64 rounded-2xl border border-gray-200 bg-white"
          />
        ))}
      </div>
    </section>
  );
}