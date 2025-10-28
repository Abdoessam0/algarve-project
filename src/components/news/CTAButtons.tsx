export default function CTAButtons() {
  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm md:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl space-y-1">
          <h2 className="text-base font-semibold text-stone-900">
            Contribute to the conversation
          </h2>
          <p className="text-sm text-stone-500">
            Share local knowledge or request tailored guidance from our team.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
          >
            Share Opinion
          </button>
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
          >
            Get Expert Opinion
          </button>
        </div>
      </div>
    </section>
  );
}
