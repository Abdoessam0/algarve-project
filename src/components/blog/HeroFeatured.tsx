"use client";

import Image from "next/image";
import Link from "next/link";
import { resolveBlogImage } from "@/lib/blogImages";
import type { BlogPost } from "@/app/blog/utils";

type Props = {
  post: BlogPost;
};

function formatDateString(input?: string | null) {
  if (!input) return null;
  try {
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(input));
  } catch {
    return null;
  }
}

export default function HeroFeatured({ post }: Props) {
  const href = post.slug ? `/news/${post.slug}` : "/news";
  const cover = post.image_url ?? post.cover_image_url ?? undefined;
  const src = resolveBlogImage({ slug: post.slug, category: post.category ?? undefined, cover });
  const formattedDate = formatDateString(post.published_at);
  const readTime = post.read_time_min ? `${post.read_time_min} min read` : null;
  const author = post.author ?? "Editorial Team";
  const meta = [author, formattedDate, readTime].filter(Boolean).join(" \u00b7 ");

  return (
    <article className="rounded-3xl overflow-hidden shadow-lg bg-white/95 ring-1 ring-black/5 transition duration-300 hover:shadow-xl">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={src}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="(min-width:1280px) 560px, 100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent"
          aria-hidden
        />
      </div>
      <div className="p-6 md:p-7">
        {post.category ? (
          <span className="inline-flex items-center gap-2 text-xs font-semibold rounded-full px-3 py-1 bg-blue-50 text-blue-700 tracking-wide uppercase">
            {post.category}
          </span>
        ) : null}
        <h2 className="mt-3 text-2xl md:text-3xl font-bold leading-tight text-slate-900">
          <Link href={href} className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
            {post.title}
          </Link>
        </h2>
        {post.excerpt ? (
          <p className="mt-3 text-base text-slate-600 leading-relaxed">{post.excerpt}</p>
        ) : null}
        {meta ? <div className="mt-4 text-sm text-slate-500">{meta}</div> : null}
        <Link
          href={href}
          className="mt-5 inline-flex rounded-full bg-blue-600 text-white px-4 py-2 font-semibold hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          Read Full Article
        </Link>
      </div>
    </article>
  );
}
