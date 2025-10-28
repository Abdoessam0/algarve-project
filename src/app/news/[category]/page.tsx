import type { Metadata } from "next";

import Breadcrumbs from "@/components/news/Breadcrumbs";
import CategoriesStrip from "@/components/news/CategoriesStrip";
import CategoryHero from "@/components/news/CategoryHero";
import CategorySectionShell from "@/components/news/CategorySectionShell";
import SidebarListShell from "@/components/news/SidebarListShell";

export const dynamic = "force-dynamic";

type RouteParams = { category: string };
type PageProps = { params: Promise<RouteParams> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;

  return {
    robots: { index: false, follow: true },
    alternates: {
      canonical: `/news/${category}`,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params; // TODO(scraping): validate via real categories

  const displayCategory = category
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "News", href: "/news" },
    { label: displayCategory, href: `/news/${category}` },
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

        <div className="mb-8">
          <CategoriesStrip active={category} />
        </div>

        <div className="mb-10">
          <CategoryHero
            title={displayCategory}
            slug={category}
            articleCountLabel=""
            description=""
          />
          {/* TODO(scraping): fill hero props */}
        </div>

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <CategorySectionShell title={displayCategory} slots={6} />
          <SidebarListShell title="Recent / Related" />
          {/* TODO(scraping): replace shells with dynamic data */}
        </section>
      </main>
    </>
  );
}
