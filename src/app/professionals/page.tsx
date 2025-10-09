// src/app/professionals/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { meta } from "@/lib/seo";
import BackToTop from "./BackToTop";
import SpecializationsClient from "./SpecializationsClient";
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
    { label: "Premium Professionals", value: totalPros || 1200, icon: "👑" },
    { label: "Exclusive Areas", value: locations.length || 25, icon: "📍" },
    { label: "Client Satisfaction", value: "99%", icon: "⭐" },
    { label: "Avg Response", value: "1–3h", icon: "⏱" },
  ];

  const premiumItems = [
    { title: "Agents", href: "/professionals/agents", src: "/english-speaking-agents.jpg" },
    { title: "Lawyers", href: "/professionals/lawyers", src: "/english-speaking-lawyers.webp" },
    { title: "Architects", href: "/professionals/architects", src: "/english-speaking-architects.jpg" },
    { title: "Constructors", href: "/professionals/constructors", src: "/english-speaking-constructors.webp" },
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
    <div className="bg-white">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <div
            aria-hidden
            className="h-80 w-full bg-center bg-cover"
            style={{ backgroundImage: 'url(/hero-algarve.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-white/0" />
        </div>
        <div className="container mx-auto px-4 pt-16 md:pt-20 relative">
          <nav aria-label="Breadcrumb" className="text-white/90 text-sm mb-3">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="font-medium">Real Estate Professionals</li>
            </ol>
          </nav>
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center rounded-full bg-blue-600/90 px-3 py-1 text-sm">
              Premium Professional Network
            </span>
            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">
              Connect with Distinguished <span className="text-blue-200">Real Estate Professionals</span>
            </h1>
            <p className="mt-3 text-white/90">
              Work with verified real estate agents, lawyers, architects, and service experts. Every profile is vetted and reviewed by discerning clients across the Algarve.
            </p>
            <div className="mt-5 flex gap-3">
              <Link href="#services" className="inline-flex items-center rounded-full bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700">
                Explore Premium Services
              </Link>
              <Link href="#specializations" className="inline-flex items-center rounded-full bg-white text-gray-900 px-4 py-2 font-medium shadow hover:bg-gray-50">
                Filter by Expertise
              </Link>
            </div>
          </div>

          {/* Glass stats */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:absolute md:right-6 md:top-24 md:w-[520px]">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl backdrop-blur bg-white/30 text-white border border-white/40 p-4 shadow-sm">
                <div className="text-2xl">{s.icon}</div>
                <div className="mt-1 text-xl font-semibold">{s.value}</div>
                <div className="text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section id="services" className="container mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Premium Services</h2>
        <p className="text-gray-600 mt-2">Curated experts trusted for transactions in prime Algarve locations.</p>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {premiumItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block overflow-hidden rounded-2xl border border-black/10 bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <div className="relative h-48 w-full sm:h-52">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute left-4 bottom-4 text-white font-semibold text-lg drop-shadow">
                  {item.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Specializations (client) */}
      <section id="specializations" className="container mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Specializations</h2>
        <p className="text-gray-600 mt-2">Browse by discipline and request tailored introductions.</p>
        <div className="mt-6">
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
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {[{
            q: "How are professionals verified?",
            a: "We verify licensing where applicable and review track record, references, and client feedback before listing."
          },{
            q: "Can I request a specific location?",
            a: "Yes. Share your preferred towns or neighborhoods and we will match you with nearby experts."
          },{
            q: "Do you charge clients for introductions?",
            a: "No. Introductions are free for clients; some partners may offer preferred rates."
          },{
            q: "What languages do professionals speak?",
            a: "Most speak English and Portuguese; many also speak French or German."
          }].map((item) => (
            <details key={item.q} className="rounded-2xl border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-medium text-gray-900">{item.q}</summary>
              <p className="mt-2 text-gray-700 text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-14">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 text-white p-8 flex items-center justify-between flex-col md:flex-row gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Ready to get matched?</h3>
            <p className="text-white/90 mt-1">Tell us your goals and timelines to meet the right experts.</p>
          </div>
          <Link href="/register" className="rounded-xl bg-white text-blue-700 px-5 py-2 font-medium shadow hover:bg-gray-50">
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
