// src/app/blog/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { meta } from "@/lib/seo";
import HeroFeatured from "@/components/blog/HeroFeatured";
import PostCard from "@/components/blog/PostCard";
import { resolveBlogImage } from "@/lib/blogImages";
import { getAllBlogPosts, getFeaturedBlogPost, type BlogPost } from "./utils";

export const metadata: Metadata = meta({
  title: "Real Estate Blog",
  description:
    "Expert insights, market analysis, and step-by-step guides for buying, investing, and living in the Algarve.",
  canonical: "/blog",
});

function buildSchemaPosts(featured: BlogPost | null, posts: BlogPost[]) {
  const seen = new Set<string | number>();
  return [featured, ...posts]
    .filter((post): post is BlogPost => Boolean(post))
    .filter((post) => {
      if (seen.has(post.id)) return false;
      seen.add(post.id);
      return true;
    });
}

export default async function BlogPage() {
  const [featured, posts] = await Promise.all([
    getFeaturedBlogPost(),
    getAllBlogPosts(12),
  ]);

  let heroFeatured: BlogPost | null = featured;
  let derivedPosts = [...posts];

  if (!heroFeatured && derivedPosts.length > 0) {
    heroFeatured = derivedPosts[0] ?? null;
    derivedPosts = derivedPosts.slice(1);
  }

  const secondaryFeatured = derivedPosts.length > 0 ? derivedPosts[0] : null;
  const remainingPosts = secondaryFeatured
    ? derivedPosts.slice(1)
    : derivedPosts;

  const schemaPosts = buildSchemaPosts(featured, posts);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    headline: "Real Estate Algarve Blog",
    url: "/blog",
    blogPost: schemaPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.published_at ?? undefined,
      image: resolveBlogImage({
        slug: post.slug,
        category: post.category ?? undefined,
        cover: (post.image_url ?? post.cover_image_url ?? (post as Partial<Record<"cover", string | null>>).cover ?? undefined) ?? undefined,
      }),
      author: post.author ? { "@type": "Person", name: post.author } : undefined,
      url: post.slug ? `/news/${post.slug}` : undefined,
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
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/blog_hero.webp"
            alt="Lisbon skyline at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-black/35"
            aria-hidden
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 lg:py-20">
          <nav aria-label="Breadcrumb" className="text-white/90 text-sm">
            <ol className="flex items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-white">Blog</li>
            </ol>
          </nav>
          <div className="mt-10 grid gap-y-10 gap-x-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="space-y-6 max-w-xl">
              <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                Real Estate Blog
              </h1>
              <p className="text-white/85 text-base md:text-lg">
                Expert insights, market analysis, and guides for buying and investing across the Algarve.
              </p>
              <p className="text-sm text-white/70">
                Explore perspectives from verified professionals to navigate every step from scouting neighborhoods to closing on your Portuguese home.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-rows-[minmax(0,1fr)_minmax(0,1fr)]">
              {heroFeatured ? <HeroFeatured post={heroFeatured} /> : null}
              {secondaryFeatured ? (
                <PostCard post={secondaryFeatured} className="min-h-[22rem]" />
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 pt-10">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-x-12">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Latest Articles
              </h2>
              <Link
                href="/news"
                  className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                View News
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 xl:grid-cols-3">
              {remainingPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
          <aside aria-label="Sidebar" className="space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Market at a Glance</h3>
              <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <li className="rounded-xl bg-sky-50 p-3 text-sky-900">
                  <p className="text-xs text-sky-700">Median Price</p>
                  <p className="font-semibold">EUR 450k</p>
                </li>
                <li className="rounded-xl bg-indigo-50 p-3 text-indigo-900">
                  <p className="text-xs text-indigo-700">Year-over-Year</p>
                  <p className="font-semibold">+6.2%</p>
                </li>
                <li className="rounded-xl bg-blue-50 p-3 text-blue-900">
                  <p className="text-xs text-blue-700">Days on Market</p>
                  <p className="font-semibold">42</p>
                </li>
                <li className="rounded-xl bg-emerald-50 p-3 text-emerald-900">
                  <p className="text-xs text-emerald-700">Cash Buyers</p>
                  <p className="font-semibold">38%</p>
                </li>
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">News Ticker</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {posts.slice(0, 5).map((post) => (
                  <li key={`ticker-${post.id}`} className="truncate">
                    <Link
                      href={post.slug ? `/news/${post.slug}` : "/news"}
                      className="text-blue-700 transition-colors hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 transition-colors hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  View All News
                </Link>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Weather</h3>
              <p className="mt-2 text-sm text-slate-600">Algarve: 24 C with clear skies.</p>
              <p className="mt-1 text-xs text-slate-500">For planning purposes only.</p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Explore More</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link
                    href="/areas"
                    className="text-blue-700 transition-colors hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  >
                    Explore Areas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/professionals"
                    className="text-blue-700 transition-colors hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  >
                    Find Professionals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-blue-700 transition-colors hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  >
                    Market News
                  </Link>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </section>

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


