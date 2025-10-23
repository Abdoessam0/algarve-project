"use client";

import * as React from "react";
import clsx from "clsx";
import Button from "@/components/ui/Button";

type MetricAccent = "default" | "info" | "success" | "warning";

export type RoadmapMetric = {
  label: string;
  value: string;
  description?: string;
  accent?: MetricAccent;
};

export type RoadmapTable = {
  columns: string[];
  rows: { cells: string[] }[];
  footnote?: string;
};

export type RoadmapSection = {
  heading: string;
  description?: string;
  bullets?: string[];
  metrics?: RoadmapMetric[];
  table?: RoadmapTable;
};

export type RoadmapStep = {
  number: number;
  title: string;
  subtitle: string;
  summary: string;
  sections: RoadmapSection[];
  slug?: string;
};

type RoadmapClientProps = {
  steps: RoadmapStep[];
};

const metricAccentStyles: Record<MetricAccent, string> = {
  default: "bg-slate-50 text-slate-900 border border-slate-200",
  info: "bg-sky-50 text-sky-900 border border-sky-100",
  success: "bg-emerald-50 text-emerald-900 border border-emerald-100",
  warning: "bg-amber-50 text-amber-900 border border-amber-100",
};

export default function RoadmapClient({ steps }: RoadmapClientProps) {
  const [openSteps, setOpenSteps] = React.useState<number[]>(
    steps.length ? [steps[0]!.number] : [],
  );

  const toggleStep = (stepNumber: number) => {
    setOpenSteps((prev) => {
      if (prev.includes(stepNumber)) {
        return prev.filter((n) => n !== stepNumber);
      }
      return [...prev, stepNumber].sort((a, b) => a - b);
    });
  };

  const expandAll = () => setOpenSteps(steps.map((step) => step.number));
  const collapseAll = () => setOpenSteps([]);

  const activeStepNumber = openSteps[0] ?? steps[0]?.number ?? 1;
  const activeIndex = Math.max(steps.findIndex((s) => s.number === activeStepNumber), 0);
  const nextStep = steps[activeIndex + 1];

  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Step Progress
            </p>
            <p className="mt-1 text-base font-semibold text-slate-900">
              Step {activeIndex + 1} of {steps.length}
              {nextStep ? (
                <span className="ml-2 text-sm font-normal text-slate-500">
                  Next: {nextStep.title}
                </span>
              ) : null}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={expandAll}
              className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm transition hover:bg-sky-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
            >
              Expand All
            </button>
            <button
              type="button"
              onClick={collapseAll}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
            >
              Collapse All
            </button>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          {steps.map((step) => {
            const isOpen = openSteps.includes(step.number);
            const stepSlug = step.slug ?? `step-${step.number}`;
            return (
              <article
                id={stepSlug}
                key={step.number}
                className={clsx(
                  "rounded-3xl border bg-white p-6 md:p-8 shadow-sm transition",
                  isOpen
                    ? "border-sky-200 shadow-sky-100 ring-2 ring-sky-500/20"
                    : "border-slate-200 hover:border-sky-200",
                )}
              >
                <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-lg font-semibold text-white shadow">
                        {step.number}
                      </span>
                      <div>
                        <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
                          {step.title}
                        </h2>
                        <p className="text-sm text-slate-600 md:text-base">{step.subtitle}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-slate-600 md:text-base">{step.summary}</p>
                  </div>
                  <div className="md:self-start">
                    <Button
                      as="button"
                      type="button"
                      size="sm"
                      onClick={() => toggleStep(step.number)}
                      aria-expanded={isOpen}
                      aria-controls={`step-${step.number}`}
                      className={clsx("whitespace-nowrap", isOpen ? "shadow-lg" : undefined)}
                    >
                      Explore Step {step.number}
                      <span className="sr-only">
                        {isOpen ? " (collapse content)" : " (expand content)"}
                      </span>
                    </Button>
                  </div>
                </header>

                {isOpen ? (
                  <div id={`step-${step.number}`} className="mt-6 space-y-10">
                    {step.sections.map((section) => {
                      const headingSlug = section.heading
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-");
                      const headingId = `${stepSlug}-${headingSlug}`;
                      return (
                        <section key={section.heading} aria-labelledby={headingId}>
                          <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                            <h3
                              id={headingId}
                              className="text-lg font-semibold text-slate-900 md:text-xl"
                            >
                              {section.heading}
                            </h3>
                            {section.description ? (
                              <p className="max-w-2xl text-sm text-slate-600 md:text-base md:text-right">
                                {section.description}
                              </p>
                            ) : null}
                          </div>

                          {section.metrics ? (
                            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                              {section.metrics.map((metric) => (
                                <div
                                  key={`${section.heading}-${metric.label}`}
                                  className={clsx(
                                    "rounded-2xl p-4 shadow-sm",
                                    metricAccentStyles[metric.accent ?? "default"],
                                  )}
                                >
                                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    {metric.label}
                                  </div>
                                  <div className="mt-2 text-xl font-semibold">{metric.value}</div>
                                  {metric.description ? (
                                    <p className="mt-2 text-sm text-slate-600">
                                      {metric.description}
                                    </p>
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          ) : null}

                          {section.bullets ? (
                            <ul className="mt-4 space-y-2 text-sm text-slate-700 md:text-base md:leading-relaxed">
                              {section.bullets.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : null}

                          {section.table ? (
                            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
                              <table className="min-w-full divide-y divide-slate-200 text-sm text-slate-700">
                                <thead className="bg-slate-100 text-xs font-semibold uppercase tracking-wide text-slate-600">
                                  <tr>
                                    {section.table.columns.map((column) => (
                                      <th key={column} className="px-4 py-3 text-left">
                                        {column}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody className="bg-white">
                                  {section.table.rows.map((row, rowIdx) => (
                                    <tr
                                      key={`${section.heading}-row-${rowIdx}`}
                                      className={rowIdx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                                    >
                                      {row.cells.map((cell, cellIdx) => (
                                        <td key={`cell-${cellIdx}`} className="px-4 py-3 align-top">
                                          {cell}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                              {section.table.footnote ? (
                                <p className="bg-slate-50 px-4 py-3 text-xs text-slate-500">
                                  {section.table.footnote}
                                </p>
                              ) : null}
                            </div>
                          ) : null}
                        </section>
                      );
                    })}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
