import Breadcrumbs from "@/components/news/Breadcrumbs";
import SidebarListShell from "@/components/news/SidebarListShell";
// import { normalizeText } from "@/lib/utils"; // TODO(scraping): use to build slugs

export const dynamic = "force-dynamic";

type Props = { params: { category: string; slug: string } };

export default async function ArticlePage({ params }: Props) {
  const { category, slug } = params;
  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: category, href: `/news/${category}` },
          { label: slug },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
        <article>
          <header className="mb-4">
            <div className="text-xs uppercase tracking-wide text-stone-500">{category}</div>
            <h1 className="text-3xl font-bold"> {/* TODO(scraping): article title */} </h1>
            <div className="text-sm text-stone-500">{/* TODO(scraping): date */}</div>
          </header>

          <div className="relative aspect-[16/9] rounded-2xl border border-stone-200 bg-white mb-6" />
          <div className="prose max-w-none">
            {/* TODO(scraping): article body */}
          </div>
        </article>

        <SidebarListShell title="Related / Recent" />
      </div>
    </main>
  );
}
