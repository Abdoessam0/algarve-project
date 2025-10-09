import React from "react";

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function NewsArticlePlaceholder({ params }: Props) {
    const { slug } = await params;

    const title = slug
        .split("-")
        .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join(" ");

    return (
        <main className="mx-auto max-w-3xl px-4 py-20">
            <h1 className="mb-4 text-4xl font-semibold">{title}</h1>
            <p className="mb-10 text-slate-500">
                This article is part of Algarve Real Estate Insights 2025. Full story coming soon.
            </p>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <p>
                    Stay tuned for more in-depth news about property trends, urban development, and market opportunities
                    across the Algarve.
                </p>
            </div>
        </main>
    );
}
