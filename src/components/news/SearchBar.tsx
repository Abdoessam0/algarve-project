"use client";
import { useState } from "react";

export default function SearchBar({ placeholder = "Search all news articles..." }: { placeholder?: string }) {
    const [q, setQ] = useState("");
    return (
        <div className="w-full">
            <label className="sr-only">Search</label>
            <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={placeholder}
                className="w-full h-12 rounded-full border border-stone-200 px-5 outline-none focus:ring-2 focus:ring-stone-300"
            />
        </div>
    );
}
