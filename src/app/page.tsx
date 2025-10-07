// src/app/page.tsx
import Hero from "@/components/steps/hero/Hero";
import FiveStepCards from "@/components/sections/FiveStepCards";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Steps ribbon under hero */}
      <section className="container mx-auto px-4 pb-12 -mt-6 md:-mt-10">
        <h2 className="sr-only">Complete 5-Step Buying Journey</h2>
        <FiveStepCards />
      </section>
    </>
  );
}
