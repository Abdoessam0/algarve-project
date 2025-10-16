// src/app/areas/page.tsx
"use client";

import { motion } from "framer-motion";
import { algarve } from "@/data/algarve";

export default function AreasPage() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-balance max-w-4xl mx-auto">
            Algarve Municipalities
          </h1>
          <div className="mt-6 flex justify-center">
            <input
              type="text"
              placeholder="Search Algarve municipalities..."
              className="w-full max-w-md rounded-2xl border border-slate-200 bg-white/70 px-5 py-3 text-base text-slate-900 shadow-sm focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
              aria-label="Search Algarve municipalities"
            />
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {algarve.municipalities.map((m) => (
            <li
              key={m.id}
              className="rounded-2xl border border-slate-200 bg-white/60 p-6 text-left shadow-sm backdrop-blur-md transition hover:shadow-md"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{m.name}</h2>
              <p className="mt-3 text-base sm:text-lg text-muted-foreground">
                Main cities: {m.mainCities.join(", ")}
              </p>
            </li>
          ))}
        </motion.ul>
      </div>
    </main>
  );
}
