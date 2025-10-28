export default function ShareBar() {
  return (
    <section aria-label="Share this article" className="mt-8">
      <div className="flex items-center gap-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <button
            key={index}
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-500 transition hover:border-stone-300 hover:text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-300"
          >
            {/* TODO(scraping): connect share action */}
          </button>
        ))}
      </div>
    </section>
  );
}
