import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { CategoryIcon } from "@/components/icons/CategoryIcon";

export type NewsItem = {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: number;
    author: string;
    image: string;
};

type Props = {
    item: NewsItem;
    formattedDate: string;
    featured?: boolean;
    priority?: boolean;
    className?: string;
};

export function NewsCard({ item, formattedDate, featured = false, priority = false, className }: Props) {
    const href = `/news/${item.slug}`;
    const aspectClass = featured ? "aspect-[16/9]" : "aspect-[4/3]";
    const titleClass = featured
        ? "text-2xl font-semibold md:text-3xl"
        : "text-xl font-semibold";

    return (
        <article
            className={clsx(
                "group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg focus-within:shadow-lg",
                className,
            )}
        >
            <Link
                href={href}
                className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                aria-label={`Read ${item.title}`}
            >
                <div className={`relative ${aspectClass} w-full overflow-hidden bg-slate-100`}>
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes={featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority={priority}
                    />
                </div>
            </Link>
            <div className="flex flex-1 flex-col px-4 pb-4 pt-4 sm:px-6 sm:pb-6 sm:pt-6">
                <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
                    <CategoryIcon category={item.category} className="text-slate-500" />
                    {item.category}
                </span>
                <h3 className={`mt-4 ${titleClass} text-slate-900`}>
                    <Link
                        href={href}
                        className="hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                    >
                        {item.title}
                    </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">{item.excerpt}</p>
                <div className="mt-auto pt-5 text-xs font-medium uppercase tracking-wide text-slate-500">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span>{item.author}</span>
                        <span aria-hidden>|</span>
                        <time dateTime={item.date}>{formattedDate}</time>
                        <span aria-hidden>|</span>
                        <span>{item.readTime} min read</span>
                    </div>
                </div>
            </div>
        </article>
    );
}
