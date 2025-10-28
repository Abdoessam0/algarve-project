export default function ShareRail() {
  return (
    <aside className="hidden lg:flex sticky top-28 flex-col gap-3" aria-label="Share">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="h-10 w-10 rounded-full border border-stone-200 bg-white shadow-sm"
          aria-hidden
        />
      ))}
    </aside>
  );
}
