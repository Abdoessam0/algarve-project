import type { Metadata } from "next";

import ArticleMeta from "@/components/news/ArticleMeta";
import AuthorCard from "@/components/news/AuthorCard";
import Breadcrumbs from "@/components/news/Breadcrumbs";
import CTAButtons from "@/components/news/CTAButtons";
import CategorySectionShell from "@/components/news/CategorySectionShell";
import PrevNextNav from "@/components/news/PrevNextNav";
import ShareRail from "@/components/news/ShareRail";
import SidebarListShell from "@/components/news/SidebarListShell";
import TagList from "@/components/news/TagList";

export const dynamic = "force-dynamic";

type RouteParams = { category: string; slug: string };
type PageProps = { params: Promise<RouteParams> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;

  return {
    robots: { index: false, follow: true },
    alternates: {
      canonical: `/news/${category}/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { category, slug } = await params; // TODO(scraping): fetch article payload

  const displayCategory = category
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  const displaySlug = slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "News", href: "/news" },
    { label: displayCategory, href: `/news/${category}` },
    { label: displaySlug, href: `/news/${category}/${slug}` },
  ];

  const breadcrumbListJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: crumb.href,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListJsonLd) }}
      />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[72px_minmax(0,1fr)_320px]">
          <ShareRail />

          <article className="space-y-8">
            <header className="space-y-4">
              <span className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-stone-600">
                {displayCategory}
              </span>

              <h1 className="text-3xl font-bold text-stone-900">
                {/* TODO(scraping): article title */}
              </h1>

              <CTAButtons />

              <ArticleMeta category={displayCategory} dateLabel="" readTimeLabel="" />
              {/* TODO(scraping): wire article meta */}
            </header>

            <div className="relative aspect-[16/9] rounded-2xl border border-stone-200 bg-white" />
            {/* TODO(scraping): render cover media */}

            <div className="prose max-w-none">
              {/* TODO(scraping): article body */}
              <p className="text-sm text-stone-500">Content coming soon.</p>
            </div>

            <TagList />
            <AuthorCard />
            <PrevNextNav />
          </article>

          <aside className="space-y-6">
            <SidebarListShell title="More in this category" />
            <SidebarListShell title="Related / Recent" />
            <CategorySectionShell title={`${displayCategory} highlights`} slots={2} />
            {/* TODO(scraping): replace shells with related content */}
          </aside>
        </div>
      </main>
    </>
  );
}
