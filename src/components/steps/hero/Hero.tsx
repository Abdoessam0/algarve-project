//src/components/hero/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/newphoto2.jpg"
          alt="Algarve coastline at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/65" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-16 sm:py-20">
        {/* Main Heading */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            Your Complete Guide to{" "}
            <span className="text-blue-400">Buying Property</span> in Algarve 2025
          </h1>

          {/* Key Features */}
          <ul className="mt-6 space-y-2 text-white text-base sm:text-lg drop-shadow-md">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Strong rental demand across Lagos, Faro, Portimão</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Iconic beaches & coastal trails (Benagil, Ponta da Piedade)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Verified English-speaking professionals</span>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              href="#"
              variant="primary"
              size="lg"
              className="flex items-center justify-center gap-2 shadow-2xl hover:shadow-[0_20px_50px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105 bg-blue-500 hover:bg-blue-600 text-white font-semibold"
              onClick={(e: React.MouseEvent) => e.preventDefault()}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Individual roadmap
            </Button>
            <Button
              as="a"
              href="#"
              variant="secondary"
              size="lg"
              className="flex items-center justify-center gap-2 shadow-2xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 bg-white hover:bg-gray-50 text-gray-900 font-semibold border-2 border-white"
              onClick={(e: React.MouseEvent) => e.preventDefault()}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              Get Your Free Investment Report
            </Button>
          </div>

          {/* Quick links row */}
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white drop-shadow-md">
            <Link href="/professionals" className="hover:text-blue-300 hover:underline transition-colors">
              English-Speaking Agents
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/professionals" className="hover:text-blue-300 hover:underline transition-colors">
              Property Lawyers
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/areas" className="hover:text-blue-300 hover:underline transition-colors">
              Algarve Areas
            </Link>
          </div>
        </div>

        {/* KPI cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
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
    <div className="rounded-xl bg-white/95 backdrop-blur-sm text-gray-900 p-5 shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">{label}</div>
      <div className="mt-2 text-2xl font-bold text-gray-900">{value}</div>
      <div className="mt-1 text-sm text-gray-500">{sub}</div>
    </div>
  );
}