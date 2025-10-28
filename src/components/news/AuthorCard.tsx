export default function AuthorCard() {
  return (
    <section aria-label="Article author" className="mt-10">
      <div className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5">
        <div className="h-16 w-16 rounded-full border border-stone-200 bg-stone-100" />
        <div className="flex flex-col gap-2">
          <div className="h-4 w-32 rounded-full bg-stone-100">
            {/* TODO(scraping): inject author name */}
          </div>
          <div className="h-3 w-24 rounded-full bg-stone-100">
            {/* TODO(scraping): inject author role */}
          </div>
        </div>
      </div>
    </section>
  );
}
