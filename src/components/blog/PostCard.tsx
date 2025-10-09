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
  const parsed = new Date(input);
  if (Number.isNaN(parsed.getTime())) return null;
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(parsed);
}

export default function PostCard({ post, className, priority = false }: Props) {
  const slug = post.slug ?? "";
  const href = slug ? `/news/${slug}` : "/news";
  const safeTitle = post.title ?? "Untitled post";

  const category = post.category ?? undefined;
  const excerpt = post.excerpt ?? undefined;
  const author =
    post.author && post.author.trim().length > 0 ? post.author : "Editorial Team";

  const formattedDate = formatDateString(post.published_at ?? null);
  const readTime =
    typeof post.read_time_min === "number" && post.read_time_min > 0
      ? `${post.read_time_min} min read`
      : null;

  const coverFromData: string | undefined =
    (post.image_url ?? post.cover_image_url ?? (post as Partial<Record<"cover", string>>).cover ?? undefined) ??
    undefined;

  const resolvedSrc =
    resolveBlogImage({
      slug,
      category,
      cover: coverFromData,
    }) || "/images/default-blog.webp";

  const metaParts: string[] = [];
  if (author) metaParts.push(author);
  if (formattedDate) metaParts.push(formattedDate);
  if (readTime) metaParts.push(readTime);
  const meta = metaParts.join(" \u00b7 ");

  return (
    <article
      className={clsx(
        "group flex h-full flex-col overflow-hidden rounded-3xl bg-white/95 ring-1 ring-black/5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md",
        className,
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
        {category ? (
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            {category}
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

        {excerpt ? (
          <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">
            {excerpt}
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
