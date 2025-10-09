import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { resolveBlogImage } from "@/lib/blogImages";
import type { BlogPost } from "@/app/blog/utils";

type Props = {
  post: BlogPost;
  className?: string;
  priority?: boolean;
};

function formatDateString(input?: string | null) {
  if (!input) return null;
  try {
    // ثابتة على "en" لتجنب اختلافات اللوكالز بين السيرفر والكلينت
    const d = new Date(input);
    if (Number.isNaN(d.getTime())) return null;
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(d);
  } catch {
    return null;
  }
}

export default function PostCard({ post, className, priority = false }: Props) {
  // روابط وعناوين آمنة
  const safeTitle = post?.title ?? "Untitled post";
  const slug = post?.slug ?? "";
  const href = slug ? `/news/${slug}` : "/news";

  // مصادر الصور (image_url / cover_image_url) لو موجودة في الداتا
  const coverFromData =
    (post as any)?.image_url ??
    (post as any)?.cover_image_url ??
    (post as any)?.cover ??
    undefined;

  // حل الصورة النهائي مع فالباك مضمون
  const resolvedSrc =
    resolveBlogImage({
      slug,
      category: post?.category ?? undefined,
      cover: coverFromData,
    }) || "/images/default-blog.webp";

  const formattedDate = formatDateString((post as any)?.published_at);
  const readTime =
    (post as any)?.read_time_min && Number((post as any).read_time_min) > 0
      ? `${(post as any).read_time_min} min read`
      : null;
  const author = (post as any)?.author ?? "Editorial Team";
  const meta = [author, formattedDate, readTime].filter(Boolean).join(" \u00b7 ");

  return (
    <article
      className={clsx(
        "group flex h-full flex-col overflow-hidden rounded-3xl bg-white/95 ring-1 ring-black/5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      <Link
        href={href}
        className="focus-visible:outline-none"
        aria-label={`Read ${safeTitle}`}
        prefetch={false}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={resolvedSrc}
            alt={safeTitle}
            fill
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width:1280px) 360px, (min-width:768px) 50vw, 100vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent"
            aria-hidden
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {post?.category ? (
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            {post.category}
          </span>
        ) : null}

        <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900">
          <Link
            href={href}
            className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            prefetch={false}
          >
            {safeTitle}
          </Link>
        </h3>

        {post?.excerpt ? (
          <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">
            {post.excerpt}
          </p>
        ) : null}

        {meta ? (
          <div className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-500">
            {meta}
          </div>
        ) : null}
      </div>
    </article>
  );
}
