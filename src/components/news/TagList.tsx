type TagListProps = {
  tags?: string[];
};

export default function TagList({ tags }: TagListProps) {
  const values = tags && tags.length > 0 ? tags : Array.from({ length: 3 });

  return (
    <section aria-label="Article tags" className="pt-4">
      <div className="flex flex-wrap gap-2">
        {values.map((tag, index) => (
          <span
            key={typeof tag === "string" ? tag : index}
            className={`inline-flex min-w-[90px] items-center justify-center rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide uppercase ${
              typeof tag === "string"
                ? "border-stone-200 bg-white text-stone-700"
                : "border-stone-200 bg-stone-100 text-stone-400"
            }`}
          >
            {typeof tag === "string" ? (
              <>
                {/* TODO(content): inject article tags */}
                {tag}
              </>
            ) : (
              <span aria-hidden className="invisible">
                placeholder
              </span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
