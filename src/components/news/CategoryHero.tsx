import SortSelect from "@/components/news/SortSelect";
import { getCategoryIcon } from "@/components/news/categoryIcons";
import { normalizeText } from "@/lib/utils";

type CategoryHeroProps = {
  title: string;
  slug?: string;
  articleCountLabel?: string;
  description?: string;
};

export default function CategoryHero({
  title,
  slug,
  articleCountLabel = "",
  description = "",
}: CategoryHeroProps) {
  const resolvedSlug = slug ?? normalizeText(title);
  const Icon = getCategoryIcon(resolvedSlug);

  return (
    <section className="rounded-3xl border border-stone-200 bg-white px-6 py-10 text-center shadow-sm">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-stone-600">
          <Icon className="h-8 w-8" aria-hidden />
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-stone-900">
            {/* TODO(scraping): fill category title */}
            {title}
          </h1>
          {articleCountLabel && (
            <span className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-stone-600">
              {/* TODO(scraping): fill article count label */}
              {articleCountLabel}
            </span>
          )}
          {description && (
            <p className="text-sm text-stone-600">
              {/* TODO(scraping): fill category description */}
              {description}
            </p>
          )}
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full sm:max-w-[380px]">
            <label className="sr-only" htmlFor="category-search">
              Search this category
            </label>
            <input
              id="category-search"
              name="category-search"
              placeholder="Search this category..."
              className="w-full rounded-full border border-stone-200 bg-white px-5 py-3 text-sm text-stone-700 outline-none transition focus:ring-2 focus:ring-stone-300"
            />
            {/* TODO(scraping): wire category-level search */}
          </div>
          <div>
            <SortSelect />
          </div>
        </div>
      </div>
    </section>
  );
}
