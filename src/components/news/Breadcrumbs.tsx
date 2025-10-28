import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({
    items = [{ label: "Home", href: "/" }, { label: "News" }],
}: {
    items?: Crumb[];
}) {
    return (
        <nav aria-label="Breadcrumb" className="text-sm text-stone-600 mb-4">
            <ol className="flex flex-wrap gap-1 items-center">
                {items.map((item, i) => {
                    const isLast = i === items.length - 1;
                    return (
                        <li key={i} className="flex items-center gap-1">
                            {item.href && !isLast ? (
                                <Link
                                    href={item.href}
                                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-stone-300 rounded-sm"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className={isLast ? "text-stone-900 font-medium" : ""}>
                                    {item.label}
                                </span>
                            )}
                            {!isLast && <span className="mx-1 text-stone-400">›</span>}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
