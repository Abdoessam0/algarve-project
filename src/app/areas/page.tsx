// src/app/areas/page.tsx
import { algarve } from "@/data/algarve";

export default function AreasPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold">Algarve Municipalities</h1>
      <input
        type="text"
        placeholder="Search Algarve municipalities..."
        className="mt-4 w-full max-w-md rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Search Algarve municipalities"
      />
      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {algarve.municipalities.map((m) => (
          <li
            key={m.id}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <h2 className="text-lg font-medium">{m.name}</h2>
            <p className="text-sm text-neutral-600">
              Main cities: {m.mainCities.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
