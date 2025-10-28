import Breadcrumbs from "@/components/news/Breadcrumbs";
import SearchBar from "@/components/news/SearchBar";
import CategoriesStrip from "@/components/news/CategoriesStrip";
import CategoryPills from "@/components/news/CategoryPills";
import CategorySectionShell from "@/components/news/CategorySectionShell";
import LatestShell from "@/components/news/LatestShell";
import SidebarListShell from "@/components/news/SidebarListShell";
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

export default async function NewsHome() {
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
        <LatestShell />
      </section>

      <section className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
        {/* TODO(scraping): map real cards here */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="h-64 rounded-2xl border border-stone-200 bg-white" />
          <div className="h-64 rounded-2xl border border-stone-200 bg-white" />
          <div className="h-64 rounded-2xl border border-stone-200 bg-white" />
          <div className="h-64 rounded-2xl border border-stone-200 bg-white" />
        </div>
        <SidebarListShell />
      </section>

      <section aria-labelledby="news-by-category" className="mt-16 space-y-10">
        <h2 id="news-by-category" className="text-xl font-semibold text-stone-900">
          News by Category
        </h2>
        <div className="space-y-12">
          {CATEGORY_SECTION_DATA.map(({ title, slots }) => (
            <CategorySectionShell
              key={title}
              title={title}
              href={`/news/${normalizeText(title)}`}
              slots={slots}
            />
          ))}
        </div>
      </section>
    </main>
  );
}