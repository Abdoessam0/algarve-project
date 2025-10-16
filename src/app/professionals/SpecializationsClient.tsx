"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Pro } from "./data";

type Props = {
  agents: Pro[];
  lawyers: Pro[];
  accountants: Pro[];
  architects: Pro[];
  constructors: Pro[];
  notaries: Pro[];
  civilEngineers: Pro[];
  electricians: Pro[];
};

export default function SpecializationsClient(props: Props) {
  const tabs = [
    { key: "All", label: "All" },
    { key: "Agent", label: "Agents" },
    { key: "Lawyer", label: "Lawyers" },
    { key: "Accountant", label: "Accountants" },
    { key: "Architect", label: "Architects" },
    { key: "Constructor", label: "Contractors" },
    { key: "Notary", label: "Notaries" },
    { key: "Civil Engineer", label: "Civil Engineers" },
    { key: "Electrician", label: "Electricians" },
  ] as const;

  const all = useMemo(
    () => [
      ...props.agents,
      ...props.lawyers,
      ...props.accountants,
      ...props.architects,
      ...props.constructors,
      ...props.notaries,
      ...props.civilEngineers,
      ...props.electricians,
    ],
    [props]
  );

  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("All");

  const list = useMemo(() => {
    if (active === "All") return all;
    return all.filter((p) => p.specialization === active);
  }, [active, all]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`px-3 py-1.5 rounded-button text-sm border transition-colors duration-micro focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 ${active === t.key
              ? "bg-ink-900 text-white border-ink-900"
              : "bg-white text-slate-600 hover:bg-sand-50 border-stone-200"
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.length === 0 ? (
          <div className="col-span-full rounded-card border border-stone-200 bg-white p-6 text-center text-slate-600 shadow-soft">
            No professionals found for this filter.
          </div>
        ) : (
          list.map((p) => (
            <article
              key={p.id}
              className="rounded-card border border-stone-200 bg-white p-5 shadow-soft transition-shadow duration-micro hover:shadow-soft-lg"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-sand-50 flex items-center justify-center text-ink-900 font-semibold">
                  {p.name?.charAt(0) ?? "P"}
                </div>
                <div>
                  <h4 className="font-semibold text-ink-900">{p.name ?? "Verified Professional"}</h4>
                  <p className="text-xs text-slate-600">
                    {p.specialization ?? "Expert"}
                    {p.location ? ` • ${p.location}` : ""}
                  </p>
                </div>
              </div>
              {p.company ? (
                <p className="mt-3 text-sm text-slate-600">{p.company}</p>
              ) : null}
              <div className="mt-4">
                <Link href="/register" className="text-sm text-gold-500 hover:underline">
                  Request an introduction →
                </Link>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
