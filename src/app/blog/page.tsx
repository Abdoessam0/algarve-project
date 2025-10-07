// src/app/blog/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { meta } from "@/lib/seo";
import { getAllBlogPosts, getFeaturedBlogPost, type BlogPost } from "./utils";

export const metadata: Metadata = meta({
  title: "Real Estate Blog",
  description:
    "Expert insights, market analysis, and step-by-step guides for buying, investing, and living in the Algarve.",
  canonical: "/blog",
});

function formatDate(input?: string | null) {
  if (!input) return "";
  try {
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(input));
  } catch {
    return "";
  }
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group rounded-2xl border bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      {post.image_url ? (
        <div
          aria-hidden
          className="h-44 w-full bg-gray-100 bg-center bg-cover"
          style={{ backgroundImage: `url(${post.image_url})` }}
        />
      ) : null}
      <div className="p-4">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          {post.category ? (
            <span className="inline-flex items-center rounded-full bg-sky-50 text-sky-700 px-2 py-0.5">
              {post.category}
            </span>
          ) : null}
          {post.read_time_min ? <span>{post.read_time_min} min read</span> : null}
        </div>
        <h3 className="mt-2 text-lg font-semibold text-gray-900">
          <Link href={post.slug ? `/news/${post.slug}` : "/news"} className="hover:underline">
            {post.title}
          </Link>
        </h3>
        {post.excerpt ? (
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
        ) : null}
        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <span>{post.author ?? "Real Estate Algarve"}</span>
          <time dateTime={post.published_at ?? undefined}>{formatDate(post.published_at)}</time>
        </div>
      </div>
    </article>
  );
}

export default async function BlogPage() {
  const [featured, posts] = await Promise.all([
    getFeaturedBlogPost(),
    getAllBlogPosts(12),
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    headline: "Real Estate Algarve Blog",
    url: "/blog",
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.published_at ?? undefined,
      image: p.image_url ?? undefined,
      author: p.author ? { "@type": "Person", name: p.author } : undefined,
    })),
  } as const;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
    ],
  } as const;

  return (
    <div className="bg-white">
      <section className="relative">
        {/* Hero background */}
        <div className="absolute inset-0">
          <div
            aria-hidden
            className="h-72 w-full bg-center bg-cover"
            style={{ backgroundImage: 'url(/images/journey/lisbon.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white/0" />
        </div>
        <div className="container mx-auto px-4 pt-16 md:pt-20 pb-6 relative">
          <nav aria-label="Breadcrumb" className="text-white/90 text-sm mb-3">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="font-medium">Blog</li>
            </ol>
          </nav>
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Real Estate Blog</h1>
            <p className="mt-2 text-white/90">
              Expert insights, market analysis, and guides for buying and investing across the Algarve.
            </p>
          </div>

          {/* Featured card (floated on desktop) */}
          {featured ? (
            <div className="mt-6 md:absolute md:right-6 md:top-20 md:w-[440px]">
              <article className="rounded-2xl bg-white shadow-md ring-1 ring-black/5 overflow-hidden">
                {featured.image_url ? (
                  <div
                    aria-hidden
                    className="h-40 w-full bg-center bg-cover"
                    style={{ backgroundImage: `url(${featured.image_url})` }}
                  />
                ) : null}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-gray-600">
                    <span className="inline-flex items-center rounded-full bg-yellow-100 text-yellow-800 px-2 py-0.5">
                      Featured Post
                    </span>
                    {featured.category ? (
                      <span className="inline-flex items-center rounded-full bg-sky-50 text-sky-700 px-2 py-0.5">
                        {featured.category}
                      </span>
                    ) : null}
                    {featured.read_time_min ? <span>• {featured.read_time_min} min read</span> : null}
                  </div>
                  <h2 className="mt-2 text-xl font-semibold text-gray-900">
                    <Link href={featured.slug ? `/news/${featured.slug}` : "/news"} className="hover:underline">
                      {featured.title}
                    </Link>
                  </h2>
                  {featured.excerpt ? (
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">{featured.excerpt}</p>
                  ) : null}
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                    <span>{featured.author ?? "Editorial Team"}</span>
                    <time dateTime={featured.published_at ?? undefined}>{formatDate(featured.published_at)}</time>
                  </div>
                  <div className="mt-4">
                    <Link
                      href={featured.slug ? `/news/${featured.slug}` : "/news"}
                      className="inline-flex items-center justify-center rounded-xl bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      Read Full Article →
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ) : null}
        </div>
      </section>

      {/* Main content */}
      <section className="container mx-auto px-4 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Posts list */}
          <div className="lg:col-span-2">
            <h2 className="sr-only">Latest articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {posts.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside aria-label="Sidebar" className="space-y-6">
            <section className="rounded-2xl border bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">Market at a Glance</h3>
              <ul className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <li className="rounded-xl bg-sky-50 text-sky-900 p-3">
                  <p className="text-xs text-sky-800">Median Price</p>
                  <p className="font-semibold">€450k</p>
                </li>
                <li className="rounded-xl bg-indigo-50 text-indigo-900 p-3">
                  <p className="text-xs text-indigo-800">YoY Change</p>
                  <p className="font-semibold">+6.2%</p>
                </li>
                <li className="rounded-xl bg-blue-50 text-blue-900 p-3">
                  <p className="text-xs text-blue-800">Days on Market</p>
                  <p className="font-semibold">42</p>
                </li>
                <li className="rounded-xl bg-teal-50 text-teal-900 p-3">
                  <p className="text-xs text-teal-800">Cash Buyers</p>
                  <p className="font-semibold">38%</p>
                </li>
              </ul>
            </section>

            <section className="rounded-2xl border bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">News Ticker</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {posts.slice(0, 5).map((p) => (
                  <li key={`ticker-${p.id}`} className="truncate">
                    <Link href={p.slug ? `/news/${p.slug}` : "/news"} className="text-blue-700 hover:underline">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link href="/news" className="inline-flex items-center text-sm font-medium text-blue-700 hover:underline">
                  View All News →
                </Link>
              </div>
            </section>

            <section className="rounded-2xl border bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">Weather</h3>
              <p className="mt-2 text-sm text-gray-600">Algarve: 24°C · Clear skies</p>
              <p className="text-xs text-gray-500 mt-1">For planning only</p>
            </section>

            <section className="rounded-2xl border bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">Explore More</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/areas" className="text-blue-700 hover:underline">Explore Areas</Link>
                </li>
                <li>
                  <Link href="/professionals" className="text-blue-700 hover:underline">Find Professionals</Link>
                </li>
                <li>
                  <Link href="/news" className="text-blue-700 hover:underline">Market News</Link>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </section>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </div>
  );
}
