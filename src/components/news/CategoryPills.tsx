export default function CategoryPills({ active = "all" }: { active?: string }) {
    // TODO(scraping): inject real categories here
    const cats: string[] = []; // empty for now
    return (
        <div className="flex flex-wrap gap-2">
            <span className={`px-3 py-1.5 rounded-full border ${active === "all" ? "bg-stone-900 text-white border-stone-900" : "bg-white border-stone-200"}`}>All</span>
            {cats.map(c => (
                <span key={c} className="px-3 py-1.5 rounded-full border bg-white border-stone-200">{c}</span>
            ))}
        </div>
    );
}
