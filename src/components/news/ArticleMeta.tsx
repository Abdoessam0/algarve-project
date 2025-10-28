type ArticleMetaProps = {
  category?: string;
  dateLabel?: string;
  readTimeLabel?: string;
};

export default function ArticleMeta({
  category,
  dateLabel,
  readTimeLabel,
}: ArticleMetaProps) {
  const items = [
    category ? { key: "category", label: category } : null,
    dateLabel ? { key: "date", label: dateLabel } : null,
    readTimeLabel ? { key: "readTime", label: readTimeLabel } : null,
  ].filter(Boolean) as { key: string; label: string }[];

  if (items.length === 0) {
    return (
      <div className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
        <span className="h-6 w-24 rounded-full bg-stone-200/70" />
        <span className="h-6 w-20 rounded-full bg-stone-200/70" />
        <span className="h-6 w-20 rounded-full bg-stone-200/70" />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
      {items.map((item) => (
        <span
          key={item.key}
          className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-stone-600"
        >
          {/* TODO(scraping): article meta */}
          {item.label}
        </span>
      ))}
    </div>
  );
}
