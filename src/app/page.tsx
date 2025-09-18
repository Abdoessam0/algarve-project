import Link from 'next/link';
import { StepsSummary } from '@/components/steps/StepsSummary';

export const dynamic = 'force-static';
export const metadata = { title: 'Real Estate Algarve — Verified Professionals' };

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="max-w-3xl">
        <h1 className="text-3xl font-semibold">
          Property Professionals in Algarve, Portugal
        </h1>
        <p className="mt-3 text-neutral-600">
          Our 5-step method helps international buyers navigate Algarve with
          verified, English-speaking experts.
        </p>
        <div className="mt-6 flex gap-3">
          <Link className="rounded bg-black px-4 py-2 text-white" href="/5-steps">
            Learn the 5-Step Method
          </Link>
          <Link className="rounded border px-4 py-2" href="/areas">
            Explore Algarve Areas
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <StepsSummary />
      </section>
    </main>
  );
}
