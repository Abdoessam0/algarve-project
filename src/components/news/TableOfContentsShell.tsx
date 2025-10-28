export default function TableOfContentsShell() {
  return (
    <aside className="rounded-2xl border border-stone-200 bg-white p-4">
      <h4 className="mb-3 text-sm font-semibold text-stone-700">
        Table of Contents
      </h4>
      <div className="space-y-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-3 rounded-full bg-stone-100"
          >
            {/* TODO(scraping): inject table of contents */}
          </div>
        ))}
      </div>
    </aside>
  );
}
