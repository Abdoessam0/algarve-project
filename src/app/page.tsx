// src/app/page.tsx
import Hero from "@/components/steps/hero/Hero";
import { StepsSummary } from "@/components/steps/StepsSummary";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Steps ribbon under hero like Lisbon */}
      <section className="container mx-auto px-4 pb-12 -mt-6 md:-mt-10">
        <h2 className="sr-only">Complete 5-Step Buying Journey</h2>
        <div className="rounded-2xl bg-white shadow-md p-4 md:p-6">
          <StepsSummary />
        </div>
      </section>
    </>
  );
}
