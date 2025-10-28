import Link from "next/link";
import { Clock, Eye, Share2 } from "lucide-react";

type ArticleMetaRowProps = {
  author?: string;
  category?: string;
  categoryHref?: string;
  isoDate?: string;
  readMinutes?: number;
  views?: number;
  shares?: number;
};

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "medium",
  timeStyle: "short",
});

function formatTimestamp(isoDate?: string) {
  if (!isoDate) return null;
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) {
    return null;
  }
  try {
    return dateFormatter.format(date);
  } catch {
    return date.toISOString();
  }
}

export default function ArticleMetaRow({
  author,
  category,
  categoryHref,
  isoDate,
  readMinutes,
  views,
  shares,
}: ArticleMetaRowProps) {
  const formattedDate = formatTimestamp(isoDate);

  const leftItems = [
    author ? (
      <span key="author">
        <span className="text-stone-500">By </span>
        <span className="font-medium text-stone-800">{author}</span>
      </span>
    ) : null,
    category ? (
      <span key="category" className="flex items-center gap-1">
        <span className="text-stone-500">in</span>
        {categoryHref ? (
          <Link
            href={categoryHref}
            className="font-medium text-stone-800 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300"
          >
            {category}
          </Link>
        ) : (
          <span className="font-medium text-stone-800">{category}</span>
        )}
      </span>
    ) : null,
    formattedDate ? (
      <time key="date" dateTime={isoDate} className="text-stone-500">
        {formattedDate}
      </time>
    ) : null,
  ].filter(Boolean);

  const metrics = [
    typeof readMinutes === "number"
      ? {
          key: "readMinutes",
          Icon: Clock,
          label: `${readMinutes} min read`,
        }
      : null,
    typeof views === "number"
      ? {
          key: "views",
          Icon: Eye,
          label: `${views.toLocaleString()} views`,
        }
      : null,
    typeof shares === "number"
      ? {
          key: "shares",
          Icon: Share2,
          label: `${shares.toLocaleString()} shares`,
        }
      : null,
  ].filter(Boolean) as {
    key: string;
    Icon: typeof Clock;
    label: string;
  }[];

  if (leftItems.length === 0 && metrics.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-3 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between">
      {leftItems.length > 0 ? (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {leftItems.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              {item}
              {index < leftItems.length - 1 ? (
                <span aria-hidden className="text-stone-300">
                  &bull;
                </span>
              ) : null}
            </span>
          ))}
        </div>
      ) : null}
      {metrics.length > 0 ? (
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-stone-500">
          {metrics.map(({ key, Icon, label }) => (
            <li key={key} className="inline-flex items-center gap-2">
              <Icon aria-hidden className="h-4 w-4 text-stone-400" />
              <span className="font-medium text-stone-700">{label}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
