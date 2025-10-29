// src/app/news/[category]/[slug]/page
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MessageCircle } from "lucide-react";

import ArticleMetaRow from "@/components/news/ArticleMetaRow";
import AuthorCard from "@/components/news/AuthorCard";
import Breadcrumbs from "@/components/news/Breadcrumbs";
import CTAButtons from "@/components/news/CTAButtons";
import HeroImage from "@/components/news/HeroImage";
import PrevNextNav from "@/components/news/PrevNextNav";
import SidebarListShell from "@/components/news/SidebarListShell";
import TagList from "@/components/news/TagList";
import { supabase } from "@/lib/supabase";
import { normalizeText } from "@/lib/utils";

export const dynamic = "force-dynamic";

type PageParams = { category: string; slug: string };
type PageProps = { params: Promise<PageParams> };

type NewsRow = {
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
  author?: string | null;
  author_name?: string | null;
  read_time_minutes?: number | null;
  read_time?: number | null;
  content?: string | null;
  body?: string | null;
  body_text?: string | null;
  rich_text?: string | null;
  status?: string | null;
  [key: string]: unknown;
};

type FetchResult = {
  article: NewsRow | null;
  error: Error | null;
};

type HeroImageData = {
  src: string;
  alt: string;
};

const fallbackIntroParagraphs = [
  "We're preparing the full article experience. Expect a clear narrative, neutral analysis, and curated insights once the newsroom publishes this story.",
  "While we collect verified data and expert commentary, this space holds a placeholder that keeps the layout fluid across devices.",
];

const fallbackBodyParagraphs = [
  "Return soon for context, key takeaways, and recommendations that match the Lisbon-inspired layout, tuned for Algarve investors.",
];

const metadataRobots: Metadata["robots"] = { index: false, follow: true };

function titleCaseFromSlug(value: string): string {
  return value
    .split("-")
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}

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

function splitParagraphs(value?: string | null): string[] {
  if (!value) {
    return [];
  }
  return value
    .split(/\r?\n\r?\n+/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph.length > 0);
}

function getCategorySlug(row: NewsRow): string | undefined {
  const slugCandidate = firstNonEmpty(
    row.category_slug,
    row.section_slug,
    row.category
  );
  if (slugCandidate) {
    return normalizeText(slugCandidate);
  }
  if (typeof row.category_name === "string" && row.category_name.trim()) {
    return normalizeText(row.category_name);
  }
  return undefined;
}

function getCategoryLabel(row: NewsRow, fallbackSlug: string): string {
  const labelCandidate = firstNonEmpty(
    row.category,
    row.category_name,
    row.section
  );
  if (labelCandidate) {
    return labelCandidate;
  }
  return titleCaseFromSlug(fallbackSlug);
}

function resolveHeroImage(row: NewsRow, fallbackTitle: string): HeroImageData | null {
  const src = firstNonEmpty(
    row.hero_image_url,
    row.hero_image,
    row.cover_image_url,
    row.cover_image
  );
  if (!src) {
    return null;
  }
  const alt =
    firstNonEmpty(row.hero_image_alt, row.title, row.headline, row.name) ??
    fallbackTitle;
  return { src, alt };
}

function getOriginalImageSrc(row: NewsRow): string | null {
  if (typeof row.original_image_url !== "string") {
    return null;
  }
  const trimmed = row.original_image_url.trim();
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

function resolveReadTime(row: NewsRow): number | undefined {
  const candidates = [row.read_time_minutes, row.read_time];
  for (const candidate of candidates) {
    if (typeof candidate === "number" && Number.isFinite(candidate)) {
      return Math.max(1, Math.round(candidate));
    }
    if (typeof candidate === "string") {
      const parsed = Number.parseInt(candidate, 10);
      if (!Number.isNaN(parsed)) {
        return Math.max(1, parsed);
      }
    }
  }
  return undefined;
}

async function fetchPublishedArticle(slug: string): Promise<FetchResult> {
  const { data, error } = await supabase
    .from("news")
    .select("*, original_image_url")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error) {
    if ((error as { code?: string }).code === "PGRST116") {
      return { article: null, error: null };
    }
    return { article: null, error: error as Error };
  }

  return { article: (data ?? null) as NewsRow, error: null };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category, slug } = await params;

  try {
    const result = await fetchPublishedArticle(slug);

    if (result.error) {
      console.error(
        `Failed to fetch published article "${slug}" for metadata`,
        result.error
      );
    }

    const article = result.article;
    const normalizedCategory = normalizeText(category);
    const canonicalCategorySlug = article
      ? getCategorySlug(article) ?? normalizedCategory
      : normalizedCategory;

    const title =
      article
        ? firstNonEmpty(article.title, article.headline, article.name) ??
          titleCaseFromSlug(slug)
        : titleCaseFromSlug(slug);

    const description = article
      ? firstNonEmpty(
          article.excerpt,
          article.summary,
          article.description,
          article.subtitle
        )
      : null;

    return {
      title,
      description: description ?? undefined,
      robots: metadataRobots,
      alternates: {
        canonical: `/news/${canonicalCategorySlug}/${slug}`,
      },
    };
  } catch (metadataError) {
    console.error(
      `Failed to build metadata for news article "${slug}"`,
      metadataError
    );
    const normalizedCategory = normalizeText(category);
    return {
      title: titleCaseFromSlug(slug),
      robots: metadataRobots,
      alternates: {
        canonical: `/news/${normalizedCategory}/${slug}`,
      },
    };
  }
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { category, slug } = await params;

  const result = await fetchPublishedArticle(slug);

  if (result.error) {
    console.error(`Failed to load article "${slug}"`, result.error);
    throw result.error;
  }

  const article = result.article;

  if (!article || typeof article.slug !== "string" || !article.slug.trim()) {
    notFound();
  }

  const normalizedCategory = normalizeText(category);
  const canonicalCategorySlug =
    getCategorySlug(article) ?? normalizedCategory;

  if (canonicalCategorySlug !== normalizedCategory) {
    notFound();
  }

  const articleSlug = article.slug;

  const articleTitle =
    firstNonEmpty(article.title, article.headline, article.name) ??
    titleCaseFromSlug(articleSlug);

  const summary =
    firstNonEmpty(
      article.excerpt,
      article.summary,
      article.description,
      article.subtitle
    ) ?? null;

  const publishedIso =
    firstNonEmpty(article.published_at, article.created_at) ?? undefined;

  const readMinutes = resolveReadTime(article);
  const articleAuthor =
    firstNonEmpty(article.author, article.author_name) ?? undefined;

  const categoryLabel = getCategoryLabel(article, canonicalCategorySlug);

  const bodySource =
    firstNonEmpty(
      article.content,
      article.body,
      article.body_text,
      article.rich_text
    ) ?? null;

  const introParagraphs =
    summary !== null ? [summary] : fallbackIntroParagraphs;

  let bodyParagraphs = splitParagraphs(bodySource);
  if (bodyParagraphs.length === 0) {
    bodyParagraphs = fallbackBodyParagraphs;
  }

  const heroImage = resolveHeroImage(article, articleTitle);
  const originalImageSrc = getOriginalImageSrc(article);

  const canonicalPath = `/news/${canonicalCategorySlug}/${articleSlug}`;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "News", href: "/news" },
    { label: categoryLabel, href: `/news/${canonicalCategorySlug}` },
    { label: articleTitle },
  ];

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ?? canonicalPath,
    })),
  };

  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="space-y-12">
            <header className="space-y-6">
              <div className="inline-flex rounded-full border border-stone-200 bg-stone-50 px-4 py-1 text-sm font-medium text-stone-700">
                {categoryLabel}
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
                {articleTitle}
              </h1>
              <ArticleMetaRow
                author={articleAuthor}
                category={categoryLabel}
                categoryHref={`/news/${canonicalCategorySlug}`}
                isoDate={publishedIso}
                readMinutes={readMinutes}
              />
            </header>
            {originalImageSrc ? (
              <Image
                src={originalImageSrc}
                alt={articleTitle}
                width={1600}
                height={900}
                sizes="100vw"
                className="h-auto w-full rounded-2xl object-cover"
              />
            ) : heroImage ? (
              <HeroImage src={heroImage.src} alt={heroImage.alt} />
            ) : (
              <div
                aria-hidden="true"
                className="aspect-[16/9] w-full rounded-xl border border-dashed border-stone-200 bg-stone-50"
              />
            )}
            <section className="space-y-6 text-base leading-8 text-stone-700 sm:text-lg">
              {introParagraphs.map((paragraph, index) => (
                <p key={`intro-${index}`}>{paragraph}</p>
              ))}
            </section>
            <CTAButtons />
            <section className="space-y-6 text-base leading-8 text-stone-700 sm:text-lg">
              {bodyParagraphs.map((paragraph, index) => (
                <p key={`body-${index}`}>{paragraph}</p>
              ))}
            </section>
            <section aria-labelledby="discussion-heading" className="space-y-6">
              <div>
                <h2
                  id="discussion-heading"
                  className="text-lg font-semibold text-stone-900 sm:text-xl"
                >
                  Discussion
                </h2>
                <p className="sr-only">
                  Reader discussion tools will display here once available.
                </p>
              </div>
              <div
                role="tablist"
                aria-label="Discussion filters"
                className="flex flex-wrap gap-6 border-b border-stone-200 pb-2"
              >
                {["All", "Helpful", "Popular", "Recent"].map((tab, index) => (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={index === 0}
                    aria-hidden="true"
                    tabIndex={-1}
                    className={`relative pb-2 text-sm font-medium ${
                      index === 0
                        ? "text-stone-900"
                        : "text-stone-400 hover:text-stone-500"
                    }`}
                  >
                    <span>{tab}</span>
                    {index === 0 ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-[1px] h-0.5 rounded-full bg-stone-900"
                      />
                    ) : null}
                  </button>
                ))}
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <span
                    aria-hidden="true"
                    className="text-sm font-medium text-stone-700"
                  >
                    Join the discussion
                  </span>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      tabIndex={-1}
                      aria-hidden="true"
                      className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    >
                      Share Opinion
                    </button>
                    <button
                      type="button"
                      tabIndex={-1}
                      aria-hidden="true"
                      className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    >
                      Get Expert Opinion
                    </button>
                  </div>
                </div>
                <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-stone-200 bg-stone-50 px-6 py-10 text-center">
                  <MessageCircle
                    aria-hidden="true"
                    className="h-10 w-10 text-stone-300"
                  />
                  <p
                    aria-hidden="true"
                    className="text-sm font-medium text-stone-500"
                  >
                    Start the discussion
                  </p>
                  <p className="sr-only">
                    Comment threads will appear here once the feature is wired
                    up.
                  </p>
                </div>
              </div>
            </section>
            <TagList />
            <AuthorCard />
            <PrevNextNav />
          </article>
          <aside className="space-y-8">
            <SidebarListShell title={`More in ${categoryLabel}`} />
            <SidebarListShell title="Popular Articles" />
          </aside>
        </div>
      </div>
    </main>
  );
}
