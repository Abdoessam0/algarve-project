"use client";

import { useId } from "react";

const OPTIONS = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "Most Read", value: "popular" },
];

export default function SortSelect() {
  const selectId = useId();

  return (
    <label htmlFor={selectId} className="flex items-center gap-2 text-sm text-stone-600">
      <span className="sr-only">Sort articles</span>
      <select
        id={selectId}
        className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 shadow-sm outline-none transition focus:ring-2 focus:ring-stone-300"
      >
        {OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
