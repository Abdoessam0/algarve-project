//src/components/hero/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

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
            <Button as="a" href="/5-steps" variant="primary" size="md">
              Download Complete Guide
            </Button>
            <Button as="a" href="/contact" variant="secondary" size="md">
              Get Your Free Investment Report
            </Button>
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
