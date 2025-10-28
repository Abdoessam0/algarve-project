export default function PrevNextNav() {
  return (
    <nav
      aria-label="Article pagination"
      className="mt-10 flex flex-col gap-3 border-t border-stone-200 pt-6 sm:flex-row sm:items-center sm:justify-between"
    >
      <button
        type="button"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-300 sm:w-auto"
      >
        {/* TODO(scraping): link previous article */}
        {"< Previous"}
      </button>
      <button
        type="button"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-300 sm:w-auto"
      >
        {/* TODO(scraping): link next article */}
        {"Next >"}
      </button>
    </nav>
  );
}
