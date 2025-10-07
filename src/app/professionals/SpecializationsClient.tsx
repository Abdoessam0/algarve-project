"use client";

// src/app/professionals/SpecializationsClient.tsx
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
            className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
              active === t.key
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.length === 0 ? (
          <div className="col-span-full rounded-xl border bg-white p-6 text-center text-gray-600">
            No professionals found for this filter.
          </div>
        ) : (
          list.map((p) => (
            <article
              key={p.id}
              className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                  {p.name?.charAt(0) ?? "P"}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{p.name ?? "Verified Professional"}</h4>
                  <p className="text-xs text-gray-600">
                    {p.specialization ?? "Expert"}
                    {p.location ? ` • ${p.location}` : ""}
                  </p>
                </div>
              </div>
              {p.company ? (
                <p className="mt-3 text-sm text-gray-700">{p.company}</p>
              ) : null}
              <div className="mt-4">
                <Link href="/register" className="text-sm text-blue-700 hover:underline">
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

