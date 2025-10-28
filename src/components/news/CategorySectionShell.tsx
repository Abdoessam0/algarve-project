import Link from "next/link";

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
  const sectionId = `category-${title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <section aria-labelledby={sectionId}>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 id={sectionId} className="text-xl font-semibold text-stone-900">
          {title}
        </h2>
        {href ? (
          <Link
            href={href}
            className="rounded-sm text-sm font-medium text-stone-600 transition-colors hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300"
          >
            View all
          </Link>
        ) : null}
      </div>
      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
        {/* TODO(scraping): inject articles for this category */}
        {Array.from({ length: slotCount }).map((_, index) => (
          <div
            key={index}
            className="h-64 rounded-2xl border border-stone-200 bg-white"
          />
        ))}
      </div>
    </section>
  );
}
