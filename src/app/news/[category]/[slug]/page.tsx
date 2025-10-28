import type { Metadata } from "next";

import { MessageCircle } from "lucide-react";

import ArticleMetaRow from "@/components/news/ArticleMetaRow";
import AuthorCard from "@/components/news/AuthorCard";
import Breadcrumbs from "@/components/news/Breadcrumbs";
import CTAButtons from "@/components/news/CTAButtons";
import HeroImage from "@/components/news/HeroImage";
import PrevNextNav from "@/components/news/PrevNextNav";
import SidebarListShell from "@/components/news/SidebarListShell";
import TagList from "@/components/news/TagList";

export const dynamic = "force-dynamic";

type PageParams = { category: string; slug: string };

type PageProps = {
  params: Promise<PageParams>;
};

type HeroImageData = {
  src: string;
  alt: string;
};

const getPlaceholderHeroImage = (): HeroImageData | null => null;

const titleCaseFromSlug = (value: string) =>
  value
    .split("-")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  return {
    robots: { index: false, follow: true },
    alternates: { canonical: `/news/${category}/${slug}` },
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { category, slug } = await params;
  const categoryTitle = titleCaseFromSlug(category);
  const articleTitle = titleCaseFromSlug(slug);
  const canonicalPath = `/news/${category}/${slug}`;
  const nowIso = new Date().toISOString();

  const heroImage = getPlaceholderHeroImage();

  const introPlaceholders = [
    "We're preparing the full article experience. Expect a clear narrative, neutral analysis, and curated insights once the newsroom publishes this story.",
    "While we collect verified data and expert commentary, this space holds a placeholder that keeps the layout fluid across devices.",
  ];

  const bodyPlaceholders = [
    "Return soon for context, key takeaways, and recommendations that match the Lisbon-inspired layout, tuned for Algarve investors.",
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "News", href: "/news" },
    { label: categoryTitle, href: `/news/${category}` },
    { label: articleTitle },
  ];

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${item.href}` } : { item: canonicalPath }),
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
                {categoryTitle}
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
                <span className="sr-only">{articleTitle}</span>
                <span
                  aria-hidden="true"
                  className="block h-11 w-4/5 rounded-xl bg-stone-200/90"
                />
                <span
                  aria-hidden="true"
                  className="mt-3 block h-11 w-3/5 rounded-xl bg-stone-100"
                />
              </h1>
              <ArticleMetaRow
                author="Editorial Desk"
                category={categoryTitle}
                categoryHref={`/news/${category}`}
                isoDate={nowIso}
                readMinutes={6}
                views={1240}
                shares={58}
              />
              <p className="sr-only">
                Article metadata and content will populate once data integration
                is complete.
              </p>
            </header>
            {heroImage !== null ? (
              <HeroImage src={heroImage.src} alt={heroImage.alt} />
            ) : (
              <div
                aria-hidden="true"
                className="aspect-[16/9] w-full rounded-xl border border-dashed border-stone-200 bg-stone-50"
              />
            )}
            <section className="space-y-6 text-base leading-8 text-stone-700 sm:text-lg">
              {introPlaceholders.map((paragraph, index) => (
                <p
                  key={`intro-${index}`}
                  aria-hidden="true"
                  className="max-w-3xl text-stone-500"
                >
                  {paragraph}
                </p>
              ))}
            </section>
            <CTAButtons />
            <section className="space-y-6 text-base leading-8 text-stone-700 sm:text-lg">
              {bodyPlaceholders.map((paragraph, index) => (
                <p
                  key={`body-${index}`}
                  aria-hidden="true"
                  className="max-w-3xl text-stone-500"
                >
                  {paragraph}
                </p>
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
            <SidebarListShell title={`More in ${categoryTitle}`} />
            <SidebarListShell title="Popular Articles" />
          </aside>
        </div>
      </div>
    </main>
  );
}
