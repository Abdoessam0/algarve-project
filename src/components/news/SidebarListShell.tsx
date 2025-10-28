export default function SidebarListShell({
  title = "Recent / Related",
}: {
  title?: string;
}) {
  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-600">
        {title}
      </h2>
      <div className="mt-4 space-y-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            aria-hidden
            className="h-20 rounded-xl border border-dashed border-stone-200 bg-stone-50"
          />
        ))}
      </div>
    </section>
  );
}
