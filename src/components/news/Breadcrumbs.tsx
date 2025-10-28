import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({
  items = [
    { label: "Home", href: "/" },
    { label: "News" },
  ],
}: {
  items?: Crumb[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-stone-600">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="rounded-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "font-medium text-stone-900" : ""}>
                  {item.label}
                </span>
              )}
              {!isLast ? (
                <span aria-hidden className="mx-1 text-stone-400">
                  &gt;
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
