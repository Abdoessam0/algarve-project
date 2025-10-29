// src/app/news/page
import Image from "next/image";
import Link from "next/link";

import Breadcrumbs from "@/components/news/Breadcrumbs";
import CategoriesStrip from "@/components/news/CategoriesStrip";
import CategoryPills from "@/components/news/CategoryPills";
import CategorySectionShell from "@/components/news/CategorySectionShell";
import LatestShell from "@/components/news/LatestShell";
import SearchBar from "@/components/news/SearchBar";
import SidebarListShell from "@/components/news/SidebarListShell";
import { supabase } from "@/lib/supabase";
import { normalizeText } from "@/lib/utils";

export const dynamic = "force-dynamic";

const CATEGORY_SECTION_DATA = [
  { title: "Market Trends", slots: 4 },
  { title: "Investment Insights", slots: 4 },
  { title: "Lifestyle", slots: 3 },
  { title: "Legal Updates", slots: 3 },
  { title: "Technology", slots: 4 },
  { title: "Sustainability & Environment", slots: 3 },
];

type SupabaseNewsRow = {
  id?: string | number;
  slug?: string | null;
  title?: string | null;
  headline?: string | null;
  name?: string | null;
  excerpt?: string | null;
  summary?: string | null;
  description?: string | null;
  subtitle?: string | null;
  category?: string | null;
  category_name?: string | null;
  category_slug?: string | null;
  section?: string | null;
  section_slug?: string | null;
  published_at?: string | null;
  created_at?: string | null;
  hero_image_url?: string | null;
  hero_image?: string | null;
  cover_image_url?: string | null;
  cover_image?: string | null;
  hero_image_alt?: string | null;
  original_image_url?: string | null;
  [key: string]: unknown;
};

type Article = SupabaseNewsRow & { slug: string };

const dateFormatter = new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" });

function firstNonEmpty(...values: Array<unknown>): string | null {
  for (const value of values) {
    if (typeof value === "string") {
      const trimmed = value.trim();
      if (trimmed.length > 0) {
        return trimmed;
      }
    }
  }
  return null;
}

function titleCaseFromSlug(value: string): string {
  return value
    .split("-")
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}

function formatDate(value?: string | null): string | null {
  if (!value) {
    return null;
  }
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }
  try {
    return dateFormatter.format(parsed);
  } catch {
    return parsed.toISOString().split("T")[0];
  }
}

function getPublishedIso(article: SupabaseNewsRow): string | null {
  return firstNonEmpty(article.published_at, article.created_at);
}

function getCategorySlug(article: SupabaseNewsRow): string | undefined {
  const slugCandidate = firstNonEmpty(
    article.category_slug,
    article.section_slug,
    article.category
  );
  if (slugCandidate) {
    return normalizeText(slugCandidate);
  }
  if (typeof article.category_name === "string" && article.category_name.trim()) {
    return normalizeText(article.category_name);
  }
  return undefined;
}

function getCategoryLabel(article: SupabaseNewsRow, fallbackSlug: string): string {
  const labelCandidate = firstNonEmpty(
    article.category,
    article.category_name,
    article.section
  );
  if (labelCandidate) {
    return labelCandidate;
  }
  return titleCaseFromSlug(fallbackSlug);
}

function getArticlePath(article: Article): string {
  const categorySlug = getCategorySlug(article);
  if (categorySlug) {
    return `/news/${categorySlug}/${article.slug}`;
  }
  return `/news/${article.slug}`;
}

function getArticleTitle(article: Article): string {
  return (
    firstNonEmpty(article.title, article.headline, article.name) ??
    titleCaseFromSlug(article.slug)
  );
}

function getArticleSummary(article: Article): string | null {
  return (
    firstNonEmpty(
      article.excerpt,
      article.summary,
      article.description,
      article.subtitle
    ) ?? null
  );
}

function getOriginalImageSrc(article: SupabaseNewsRow): string | null {
  if (typeof article.original_image_url !== "string") {
    return null;
  }
  const trimmed = article.original_image_url.trim();
  if (!trimmed) {
    return null;
  }
  try {
    const url = new URL(trimmed);
    if (url.protocol === "http:" || url.protocol === "https:") {
      return url.toString();
    }
  } catch {
    return null;
  }
  return null;
}

function categorySectionId(title: string): string {
  return `category-${title.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

export default async function NewsHome() {
  const { data, error } = await supabase
    .from("news")
    .select("*, original_image_url")
    .eq("status", "published")
    .order("published_at", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: false, nullsFirst: false });

  if (error) {
    console.error("Failed to load published news articles", error);
  }

  const source = (data ?? []) as SupabaseNewsRow[];
  const articles = source.filter(
    (item): item is Article =>
      typeof item.slug === "string" && item.slug.trim().length > 0
  );

  const latestArticles = articles.slice(0, 5);
  const heroArticle = latestArticles[0];
  const supportingArticles = latestArticles.slice(1);
  const featureGridArticles = articles.slice(5, 9);
  const heroImageSrc = heroArticle ? getOriginalImageSrc(heroArticle) : null;

  const categorySections = CATEGORY_SECTION_DATA.map(({ title, slots }) => {
    const slug = normalizeText(title);
    const items = articles
      .filter((article) => getCategorySlug(article) === slug)
      .slice(0, slots);
    return { title, slug, items, slots };
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumbs />
      <header className="mb-6">
        <h1 className="text-2xl font-bold">News</h1>
      </header>

      <div className="mb-6">
        <SearchBar />
      </div>

      <div className="mb-6">
        <CategoriesStrip active="all" />
      </div>

      <div className="mb-6">
        <CategoryPills active="all" />
      </div>

      <section aria-label="Latest in News" className="mt-6">
        {error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-rose-700">
            <p className="font-semibold">We couldn&apos;t load the latest news.</p>
            <p className="text-sm">Please try again in a few moments.</p>
          </div>
        ) : heroArticle ? (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <article className="flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              {heroImageSrc ? (
                <div className="mb-4 overflow-hidden rounded-2xl">
                  <Image
                    src={heroImageSrc}
                    alt={
                      heroArticle
                        ? getArticleTitle(heroArticle)
                        : "Latest news hero image"
                    }
                    width={1200}
                    height={630}
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="h-auto w-full rounded-2xl object-cover"
                  />
                </div>
              ) : null}
              <div>
                <p className="text-xs font-semibold uppercase text-emerald-600">
                  Latest
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-stone-900">
                  {getArticleTitle(heroArticle)}
                </h2>
                {getArticleSummary(heroArticle) ? (
                  <p className="mt-4 text-base text-stone-600">
                    {getArticleSummary(heroArticle)}
                  </p>
                ) : null}
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-stone-500">
                <span>
                  {(() => {
                    const iso = getPublishedIso(heroArticle);
                    const label = formatDate(iso);
                    return label ? `Published ${label}` : "Published article";
                  })()}
                </span>
                <span className="font-medium">
                  {(() => {
                    const categorySlug = getCategorySlug(heroArticle) ?? "news";
                    return getCategoryLabel(heroArticle, categorySlug);
                  })()}
                </span>
              </div>
              <Link
                href={getArticlePath(heroArticle)}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Read article
              </Link>
            </article>
            <div className="space-y-4">
              {supportingArticles.map((article) => {
                const publishedLabel = formatDate(getPublishedIso(article));
                const imageSrc = getOriginalImageSrc(article);
                return (
                  <Link
                    key={article.id ?? article.slug}
                    href={getArticlePath(article)}
                    className="group block rounded-2xl border border-stone-200 bg-white p-5 transition hover:border-stone-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  >
                    {imageSrc ? (
                      <div className="mb-3 overflow-hidden rounded-xl">
                        <Image
                          src={imageSrc}
                          alt={getArticleTitle(article)}
                          width={1200}
                          height={630}
                          sizes="(max-width: 768px) 100vw, 600px"
                          className="h-auto w-full rounded-xl object-cover"
                        />
                      </div>
                    ) : null}
                    <p className="text-xs font-semibold uppercase text-stone-400">
                      {publishedLabel ?? "Published"}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-stone-900 group-hover:text-emerald-700">
                      {getArticleTitle(article)}
                    </h3>
                    {getArticleSummary(article) ? (
                      <p className="mt-2 text-sm text-stone-600">
                        {getArticleSummary(article)}
                      </p>
                    ) : null}
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          <LatestShell />
        )}
      </section>

      <section className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {featureGridArticles.length === 0
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={`feature-skeleton-${index}`}
                  className="h-64 rounded-2xl border border-stone-200 bg-white"
                />
              ))
            : featureGridArticles.map((article) => {
                const publishedLabel = formatDate(getPublishedIso(article));
                const imageSrc = getOriginalImageSrc(article);
                return (
                  <Link
                    key={article.id ?? article.slug}
                    href={getArticlePath(article)}
                    className="group flex h-64 flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 transition hover:border-stone-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  >
                    {imageSrc ? (
                      <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-xl">
                        <Image
                          src={imageSrc}
                          alt={getArticleTitle(article)}
                          width={1200}
                          height={630}
                          sizes="(max-width: 768px) 100vw, 600px"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : null}
                    <div className="flex flex-1 flex-col justify-between">
                      <p className="text-xs font-semibold uppercase text-stone-400">
                        {publishedLabel ?? "Published"}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-stone-900 group-hover:text-emerald-700">
                        {getArticleTitle(article)}
                      </h3>
                    </div>
                    {getArticleSummary(article) ? (
                      <p className="mt-4 text-sm text-stone-600">
                        {getArticleSummary(article)}
                      </p>
                    ) : null}
                  </Link>
                );
              })}
        </div>
        <SidebarListShell />
      </section>

      <section aria-labelledby="news-by-category" className="mt-16 space-y-10">
        <h2
          id="news-by-category"
          className="text-xl font-semibold text-stone-900"
        >
          News by Category
        </h2>
        <div className="space-y-12">
          {categorySections.map(({ title, slug, items, slots }) =>
            items.length === 0 ? (
              <CategorySectionShell
                key={title}
                title={title}
                href={`/news/${slug}`}
                slots={slots}
              />
            ) : (
              <section
                key={title}
                aria-labelledby={categorySectionId(title)}
                className="space-y-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3
                    id={categorySectionId(title)}
                    className="text-xl font-semibold text-stone-900"
                  >
                    {title}
                  </h3>
                  <Link
                    href={`/news/${slug}`}
                    className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300"
                  >
                    View all
                  </Link>
                </div>
                <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
                  {items.map((article) => {
                    const publishedLabel = formatDate(getPublishedIso(article));
                    const imageSrc = getOriginalImageSrc(article);
                    return (
                      <Link
                        key={article.id ?? article.slug}
                        href={getArticlePath(article)}
                        className="group flex h-64 flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 transition hover:border-stone-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                      >
                        {imageSrc ? (
                          <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-xl">
                            <Image
                              src={imageSrc}
                              alt={getArticleTitle(article)}
                              width={1200}
                              height={630}
                              sizes="(max-width: 768px) 100vw, 600px"
                              className="h-full w-full object-cover"
                            />
                          </div>
                        ) : null}
                        <div className="flex flex-1 flex-col justify-between">
                          <p className="text-xs font-semibold uppercase text-stone-400">
                            {publishedLabel ?? "Published"}
                          </p>
                          <h4 className="mt-2 text-lg font-semibold text-stone-900 group-hover:text-emerald-700">
                            {getArticleTitle(article)}
                          </h4>
                        </div>
                        {getArticleSummary(article) ? (
                          <p className="mt-3 text-sm text-stone-600">
                            {getArticleSummary(article)}
                          </p>
                        ) : null}
                      </Link>
                    );
                  })}
                </div>
              </section>
            )
          )}
        </div>
      </section>
    </main>
  );
}
