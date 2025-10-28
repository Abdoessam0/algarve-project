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
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-stone-600">
      {items.map((item) => (
        <span
          key={item.key}
          className="inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1"
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}
