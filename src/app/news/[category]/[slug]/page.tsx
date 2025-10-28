import Breadcrumbs from "@/components/news/Breadcrumbs";
import ArticleMeta from "@/components/news/ArticleMeta";
import AuthorCard from "@/components/news/AuthorCard";
import CategorySectionShell from "@/components/news/CategorySectionShell";
import PrevNextNav from "@/components/news/PrevNextNav";
import ShareBar from "@/components/news/ShareBar";
import SidebarListShell from "@/components/news/SidebarListShell";
import TableOfContentsShell from "@/components/news/TableOfContentsShell";
import TagList from "@/components/news/TagList";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ category: string; slug: string }> };

export default async function ArticlePage({ params }: Props) {
  const { category, slug } = await params; // TODO(scraping): fetch article payload
  const displayCategory = category
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
  const displaySlug = slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: displayCategory, href: `/news/${category}` },
          { label: displaySlug },
        ]}
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-3xl font-bold text-stone-900">
              {/* TODO(scraping): article title */}
            </h1>
            <ArticleMeta category={displayCategory} dateLabel="" readTimeLabel="" />
            {/* TODO(scraping): wire article meta */}
          </header>

          <div className="relative aspect-[16/9] rounded-2xl border border-stone-200 bg-white" />
          {/* TODO(scraping): render cover media */}

          <div className="prose max-w-none">
            {/* TODO(scraping): article body */}
          </div>

          <ShareBar />
          <TagList />
          <AuthorCard />
          <PrevNextNav />
        </article>

        <aside className="space-y-6">
          <SidebarListShell title="Related / Recent" />
          <TableOfContentsShell />
          <CategorySectionShell title="More from this category" slots={3} />
          {/* TODO(scraping): replace shells with related content */}
        </aside>
      </div>
    </main>
  );
}
