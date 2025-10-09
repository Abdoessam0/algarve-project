import Link from "next/link";
import type { Metadata } from "next";
import { meta } from "@/lib/seo";
import newsSeed from "@/data/newsSeed.json";
import { NewsCard, type NewsItem } from "@/components/NewsCard";
import { NewsListItem } from "@/components/NewsListItem";

export const metadata: Metadata = meta({
  title: "News & Market Updates",
  description:
    "Stay current on Algarve real estate news, policy updates, and expert commentary to inform your property decisions.",
  canonical: "/news",
});

function formatDate(input: string) {
  try {
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(input));
  } catch {
    return input;
  }
}

const newsItems = newsSeed as NewsItem[];
const categories = Array.from(
  new Set(newsItems.map((item) => item.category))
);

export default function NewsPage() {
  const [featured, ...rest] = newsItems;
  const secondary = rest.length > 0 ? rest[0] : null;
  const primaryGrid = secondary ? rest.slice(1, 5) : rest.slice(0, 4);
  const relatedGrid = secondary ? rest.slice(5) : rest.slice(4);

  return (
    <div className="flex min-h-full flex-col bg-white">
      <section className="border-b border-slate-200 bg-slate-50 pb-12 pt-10">
        <div className="container mx-auto px-4 text-center">
          <nav aria-label="Breadcrumb" className="flex justify-center text-sm text-slate-600">
            <ol className="flex items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-slate-900">News</li>
            </ol>
          </nav>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Latest Algarve Real Estate News
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
            Market intelligence, policy shifts, and local commentary curated by our on-the-ground advisors in Portugal.
          </p>
        </div>
      </section>

      <section className="container mx-auto flex-1 px-4 pb-16 pt-10">
        <form className="mx-auto flex max-w-xl items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20" role="search">
          <label htmlFor="news-search" className="sr-only">
            Search news
          </label>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-slate-400"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            id="news-search"
            type="search"
            placeholder="Search Algarve news, policies, or trends"
            className="h-10 flex-1 border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            aria-label="Search Algarve news"
          />
          <button
            type="submit"
            className="hidden rounded-full bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:inline-flex"
          >
            Search
          </button>
        </form>

        <div className="mt-6 overflow-x-auto">
          <div className="mx-auto flex max-w-4xl items-center justify-center gap-3 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-x-12">
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Latest in News
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Insight, regulation, and opportunities from trusted professionals.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
              {featured ? (
                <NewsCard
                  item={featured}
                  formattedDate={formatDate(featured.date)}
                  featured
                  priority
                />
              ) : null}
              {secondary ? (
                <NewsCard
                  item={secondary}
                  formattedDate={formatDate(secondary.date)}
                  className="min-h-[22rem]"
                />
              ) : null}
            </div>
            <div className="grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2">
              {primaryGrid.map((item) => (
                <NewsCard
                  key={item.slug}
                  item={item}
                  formattedDate={formatDate(item.date)}
                />
              ))}
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-400 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Load More
              </button>
            </div>
          </div>

          <aside className="space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Related News
              </p>
              <h3 className="mt-1 text-xl font-semibold text-slate-900">
                Quick reads selected by our advisors
              </h3>
            </div>
            <div className="space-y-4">
              {relatedGrid.map((item) => (
                <NewsListItem
                  key={item.slug}
                  item={item}
                  formattedDate={formatDate(item.date)}
                />
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
