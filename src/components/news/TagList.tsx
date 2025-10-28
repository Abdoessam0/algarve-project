type TagListProps = {
  tags?: string[];
};

export default function TagList({ tags }: TagListProps) {
  const values = tags && tags.length > 0 ? tags : Array.from({ length: 3 });

  return (
    <section aria-label="Article tags" className="mt-6">
      <div className="flex flex-wrap gap-2">
        {values.map((tag, index) => {
          return (
            <span
              key={typeof tag === "string" ? tag : index}
              className={`inline-flex min-w-[88px] items-center justify-center rounded-full border px-4 py-1.5 text-sm ${
                typeof tag === "string"
                  ? "border-stone-200 bg-white text-stone-600"
                  : "border-stone-200 bg-stone-100 text-stone-400"
              }`}
            >
              {typeof tag === "string" ? (
                <>
                  {/* TODO(scraping): inject article tags */}
                  {tag}
                </>
              ) : (
                <span className="invisible">placeholder</span>
              )}
            </span>
          );
        })}
      </div>
    </section>
  );
}
