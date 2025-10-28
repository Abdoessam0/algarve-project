import Breadcrumbs from "@/components/news/Breadcrumbs";
import CategoriesStrip from "@/components/news/CategoriesStrip";
import CategoryHero from "@/components/news/CategoryHero";
import CategorySectionShell from "@/components/news/CategorySectionShell";
import SidebarListShell from "@/components/news/SidebarListShell";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ category: string }> };

export default async function CategoryPage({ params }: Props) {
  const { category } = await params; // TODO(scraping): validate via real categories
  const displayCategory = category
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: displayCategory },
        ]}
      />

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
  );
}
