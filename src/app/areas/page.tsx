// src/app/areas/page.tsx
import { algarve } from "@/data/algarve";

export default function AreasPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold">Algarve Municipalities</h1>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {algarve.municipalities.map((m) => (
          <li key={m.id} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

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
