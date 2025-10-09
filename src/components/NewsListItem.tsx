import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/components/NewsCard";

type Props = {
    item: NewsItem;
    formattedDate: string;
};

export function NewsListItem({ item, formattedDate }: Props) {
    const href = `/news/${item.slug}`;

    return (
        <article className="flex items-start gap-3 rounded-2xl border border-transparent p-3 transition-colors duration-200 hover:border-slate-200 focus-within:border-slate-200">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="64px"
                    className="object-cover"
                />
            </div>
            <div className="min-w-0 flex-1">
                <h4 className="text-sm font-semibold text-slate-900">
                    <Link
                        href={href}
                        className="hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                    >
                        {item.title}
                    </Link>
                </h4>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">
                    {item.author} <span aria-hidden>|</span> <time dateTime={item.date}>{formattedDate}</time>
                </p>
            </div>
        </article>
    );
}
