import Breadcrumbs from "@/components/news/Breadcrumbs";
import SearchBar from "@/components/news/SearchBar";
import CategoryPills from "@/components/news/CategoryPills";
import SidebarListShell from "@/components/news/SidebarListShell";

export const dynamic = "force-dynamic";

type Props = { params: { category: string } };

export default async function CategoryPage({ params }: Props) {
  const { category } = params; // TODO(scraping): validate via real categories
  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "News", href: "/news" },
    { label: category },
  ]}
/>

      <header className="mb-6">
        <h1 className="text-2xl font-bold capitalize">{category}</h1>
      </header>

      <div className="mb-6">
        <SearchBar />
      </div>
      <CategoryPills active={category} />

      <section className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
        {/* TODO(scraping): render category articles here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="h-64 rounded-2xl border border-stone-200 bg-white" />
          <div className="h-64 rounded-2xl border border-stone-200 bg-white" />
          <div className="h-64 rounded-2xl border border-stone-200 bg-white" />
          <div className="h-64 rounded-2xl border border-stone-200 bg-white" />
        </div>
        <SidebarListShell />
      </section>
    </main>
  );
}
