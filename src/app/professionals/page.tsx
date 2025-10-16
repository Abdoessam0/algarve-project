// src/app/professionals/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { meta } from "@/lib/seo";
import BackToTop from "./BackToTop";
import SpecializationsClient from "./SpecializationsClient";
import { Briefcase, MapPin, ThumbsUp, Clock } from "lucide-react";
import {
  getAllAccountants,
  getAllAgents,
  getAllArchitects,
  getAllCivilEngineers,
  getAllConstructors,
  getAllElectricians,
  getAllLawyers,
  getAllLocations,
  getAllNotaries,
} from "./data";

export const metadata: Metadata = meta({
  title: "Real Estate Professionals",
  description:
    "Connect with distinguished Algarve real estate agents, lawyers, architects, and verified experts.",
  canonical: "/professionals",
});

export default async function ProfessionalsPage() {
  const [
    agents,
    lawyers,
    accountants,
    architects,
    constructors,
    notaries,
    civilEngineers,
    electricians,
    locations,
  ] = await Promise.all([
    getAllAgents(),
    getAllLawyers(),
    getAllAccountants(),
    getAllArchitects(),
    getAllConstructors(),
    getAllNotaries(),
    getAllCivilEngineers(),
    getAllElectricians(),
    getAllLocations(),
  ]);

  const totalPros =
    agents.length +
    lawyers.length +
    accountants.length +
    architects.length +
    constructors.length +
    notaries.length +
    civilEngineers.length +
    electricians.length;

  const stats = [
    { label: "Premium Professionals", value: totalPros || 1200, Icon: Briefcase },
    { label: "Exclusive Areas", value: locations.length || 25, Icon: MapPin },
    { label: "Client Satisfaction", value: "99%", Icon: ThumbsUp },
    { label: "Avg Response", value: "1–3h", Icon: Clock },
  ] as const;

  const premiumItems = [
    { title: "Agents", href: "/professionals#specializations", src: "/english-speaking-agents.jpg" },
    { title: "Lawyers", href: "/professionals#specializations", src: "/english-speaking-lawyers.webp" },
    { title: "Architects", href: "/professionals#specializations", src: "/english-speaking-architects.jpg" },
    { title: "Constructors", href: "/professionals#specializations", src: "/english-speaking-constructors.webp" },
  ] as const;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Real Estate Professionals", item: "/professionals" },
    ],
  } as const;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Real Estate Algarve — Verified Professionals",
    areaServed: "Algarve, Portugal",
    url: "/professionals",
    serviceType: [
      "Real Estate Agent",
      "Lawyer",
      "Architect",
      "Civil Engineer",
      "Electrician",
      "Notary",
      "Accountant",
      "Contractor",
    ],
  } as const;

  return (
    <div className="bg-sand-50">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <div
            aria-hidden
            className="h-full w-full bg-center bg-cover"
            style={{ backgroundImage: 'url(/hero-algarve.jpg )' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-sand-50/20" />
        </div>
        <div className="container mx-auto px-4 pt-16 md:pt-24 pb-12 md:pb-20 relative">
          <nav aria-label="Breadcrumb" className="text-white/90 text-sm mb-4">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="font-medium">Real Estate Professionals</li>
            </ol>
          </nav>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 text-white">
              <span className="inline-flex items-center rounded-full border border-gold-500/20 bg-gold-500/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-gold-500">
                Premium Professional Network
              </span>
              <h1 className="font-display text-4xl font-bold leading-heading tracking-tighter-headline mt-4 md:text-5xl lg:text-6xl">
                Connect with Distinguished <span className="text-gold-500">Real Estate Professionals</span>
              </h1>
              <p className="mt-4 text-base leading-body text-white/90 md:text-lg max-w-xl">
                Work with verified real estate agents, lawyers, architects, and service experts. Every profile is vetted and reviewed by discerning clients across the Algarve.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="#services" className="inline-flex items-center justify-center rounded-button bg-ink-900 text-white px-6 py-3 text-sm font-semibold shadow-soft transition-all duration-micro ease-smooth hover:bg-ink-900/90 hover:shadow-soft-lg">
                  Explore Premium Services
                </Link>
                <Link
                  href="#specializations"
                  aria-label="Filter professionals by expertise"
                  className="inline-flex items-center justify-center rounded-button px-6 py-3 text-sm font-semibold
             border border-transparent bg-ink-900 text-white shadow-glass
             transition-all duration-micro ease-smooth
             hover:bg-ink-800 active:bg-ink-900/90
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold-500/50"
                >
                  Filter by Expertise
                </Link>

              </div>
            </div>
            <div className="md:col-span-1">
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ label, value, Icon }) => (
                  <div key={label} className="rounded-card backdrop-blur bg-white/10 text-white border border-white/20 p-4 shadow-glass">
                    <div className="text-2xl">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="mt-1 text-xl font-semibold">{value}</div>
                    <div className="text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section id="services" className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight-headline text-ink-900 md:text-4xl">Premium Services</h2>
        <p className="mt-2 text-base leading-body text-slate-600 md:text-lg">Curated experts trusted for transactions in prime Algarve locations.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {premiumItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block overflow-hidden rounded-card border border-stone-200 bg-white shadow-soft transition-transform duration-micro hover:-translate-y-1 hover:shadow-soft-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-micro group-hover:scale-105"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-ink-900/20 to-transparent" />
                <div className="absolute left-4 bottom-4 text-white font-semibold text-lg drop-shadow">
                  {item.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Specializations (client) */}
      <section id="specializations" className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight-headline text-ink-900 md:text-4xl">Specializations</h2>
        <p className="mt-2 text-base leading-body text-slate-600 md:text-lg">Browse by discipline and request tailored introductions.</p>
        <div className="mt-8">
          <SpecializationsClient
            agents={agents}
            lawyers={lawyers}
            accountants={accountants}
            architects={architects}
            constructors={constructors}
            notaries={notaries}
            civilEngineers={civilEngineers}
            electricians={electricians}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight-headline text-ink-900 md:text-4xl">Frequently Asked Questions</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{
            q: "How are professionals verified?",
            a: "We verify licensing where applicable and review track record, references, and client feedback before listing."
          }, {
            q: "Can I request a specific location?",
            a: "Yes. Share your preferred towns or neighborhoods and we will match you with nearby experts."
          }, {
            q: "Do you charge clients for introductions?",
            a: "No. Introductions are free for clients; some partners may offer preferred rates."
          }, {
            q: "What languages do professionals speak?",
            a: "Most speak English and Portuguese; many also speak French or German."
          }].map((item) => (
            <details key={item.q} className="rounded-card border border-stone-200 bg-white p-6 shadow-soft">
              <summary className="cursor-pointer font-semibold text-ink-900">{item.q}</summary>
              <p className="mt-2 text-slate-600 text-base">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-16 lg:pb-20">
        <div className="rounded-card bg-ink-900 text-white p-8 flex flex-col items-center justify-between gap-6 md:flex-row md:p-10 shadow-soft-lg">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tight-headline md:text-3xl">Ready to get matched?</h3>
            <p className="mt-2 text-base text-white/90 md:text-lg">Tell us your goals and timelines to meet the right experts.</p>
          </div>
          <Link href="/register" className="inline-flex items-center rounded-button bg-gold-500 text-white px-8 py-3 text-base font-semibold shadow-soft transition-all duration-micro ease-smooth hover:bg-gold-600 hover:shadow-soft-lg">
            Get Started
          </Link>
        </div>
      </section>

      {/* Back to top */}
      <BackToTop />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
    </div>
  );
}
