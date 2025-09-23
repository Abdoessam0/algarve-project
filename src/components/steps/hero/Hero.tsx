//src/components/hero/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-algarve.jpg"
          alt="Algarve coastline at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Your Complete Guide to{" "}
            <span className="text-blue-300">Buying Property</span> in Algarve{" "}
            <span className="block">2025</span>
          </h1>

          <ul className="mt-6 space-y-2 text-white/90 text-sm md:text-base">
            <li>• Strong rental demand across Lagos, Faro, Portimão</li>
            <li>• Iconic beaches & coastal trails (Benagil, Ponta da Piedade)</li>
            <li>• Verified English-speaking professionals</li>
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/5-steps"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Download Complete Guide
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-4 py-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Get Your Free Investment Report
            </Link>
          </div>

          {/* quick links row */}
          <div className="mt-4 text-sm text-white/80 space-x-3">
            <Link href="/professionals" className="hover:underline">English-Speaking Agents</Link>
            <span>•</span>
            <Link href="/professionals" className="hover:underline">Property Lawyers</Link>
            <span>•</span>
            <Link href="/areas" className="hover:underline">Algarve Areas</Link>
          </div>
        </div>

        {/* KPI cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
          <KPI label="Price / m² (prime)" value="€3,800 – €5,200" sub="Lagos & Albufeira" />
          <KPI label="Top Rental Yield" value="6–7%" sub="Touristic lets" />
          <KPI label="Avg. Timeline" value="60–90 days" sub="From brief to keys" />
        </div>
      </div>
    </section>
  );
}

function KPI({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-xl bg-white/90 backdrop-blur text-gray-900 p-4 shadow">
      <div className="text-sm text-gray-600">{label}</div>
      <div className="mt-1 text-xl font-semibold">{value}</div>
      <div className="text-xs text-gray-500">{sub}</div>
    </div>
  );
}
