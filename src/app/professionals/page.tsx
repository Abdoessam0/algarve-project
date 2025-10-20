// src/app/professionals/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { meta } from "@/lib/seo";
import BackToTop from "./BackToTop";
import SpecializationsClient from "./SpecializationsClient";
import { Briefcase, MapPin, ThumbsUp, Clock, ArrowRight, Shield, Star } from "lucide-react";
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
    { label: "Verified Professionals", value: totalPros || 1200, Icon: Briefcase },
    { label: "Prime Locations", value: locations.length || 25, Icon: MapPin },
    { label: "Client Satisfaction", value: "99%", Icon: ThumbsUp },
    { label: "Avg Response", value: "1–3h", Icon: Clock },
  ] as const;

  const premiumItems = [
    { title: "Real Estate Agents", href: "/professionals#specializations", src: "/english-speaking-agents.jpg" },
    { title: "Property Lawyers", href: "/professionals#specializations", src: "/english-speaking-lawyers.webp" },
    { title: "Architects", href: "/professionals#specializations", src: "/english-speaking-architects.jpg" },
    { title: "Contractors", href: "/professionals#specializations", src: "/english-speaking-constructors.webp" },
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
      {/* Hero Section */}
      <section className="relative min-h-[650px] flex items-center">
        <div className="absolute inset-0">
          <div
            aria-hidden
            className="h-full w-full bg-center bg-cover"
            style={{ backgroundImage: 'url(/newphoto2.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/85" />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-white/80 text-sm mb-6">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-white font-medium">Professionals</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Content */}
            <div className="lg:col-span-3 text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2 text-sm font-medium tracking-wide text-white/90 mb-6">
                <Shield className="w-4 h-4" />
                Verified Excellence
              </div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-6">
                Distinguished
                <span className="block font-normal mt-2">Real Estate Professionals</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Connect with carefully vetted experts who understand the nuances of Algarve premium property market. From acquisition to completion, work with professionals who prioritize excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-slate-900 px-8 py-4 text-base font-semibold shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 group"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="#specializations"
                  aria-label="Filter professionals by expertise"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white px-8 py-4 text-base font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  Browse by Expertise
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ label, value, Icon }) => (
                  <div
                    key={label}
                    className="rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 text-white p-6 shadow-xl hover:bg-white/15 transition-all duration-300"
                  >
                    <Icon className="h-8 w-8 mb-3 text-white/80" aria-hidden="true" />
                    <div className="text-3xl font-bold mb-1">{value}</div>
                    <div className="text-sm text-white/70 leading-snug">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-y border-slate-200 bg-slate-50/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Fully Verified</h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                Every professional undergoes comprehensive verification including licensing, references, and client reviews.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Proven Excellence</h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                Selected based on track record, client satisfaction, and deep knowledge of Algarve&apos;s property market.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Responsive Service</h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                Average response time of 1-3 hours ensures your inquiries are addressed promptly and professionally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section id="services" className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Premium Services
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Curated experts trusted for transactions across Algarve most sought-after locations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {premiumItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-white font-semibold text-xl mb-2">{item.title}</h3>
                  <div className="flex items-center text-white/80 text-sm group-hover:text-white transition-colors">
                    View Professionals
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Specializations */}
      <section id="specializations" className="bg-slate-50/50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-slate-900 mb-4">
              Browse by Specialization
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Find the perfect match for your needs. Filter by discipline and request personalized introductions.
            </p>
          </div>

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
      <section className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Everything you need to know about working with our network of professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {[{
            q: "How are professionals verified?",
            a: "Each professional undergoes a rigorous verification process including licensing validation, reference checks, and client feedback reviews before being featured on our platform."
          }, {
            q: "Can I request a specific location?",
            a: "Absolutely. Share your preferred towns or neighborhoods, and we'll connect you with professionals who have deep expertise in those specific areas."
          }, {
            q: "Do you charge for introductions?",
            a: "No. Client introductions are complimentary. Our professionals may offer preferred rates for clients referred through our platform."
          }, {
            q: "What languages do professionals speak?",
            a: "All professionals speak English and Portuguese fluently. Many also offer services in French, German, Spanish, and other languages."
          }].map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <summary className="cursor-pointer font-semibold text-slate-900 text-lg flex items-center justify-between">
                {item.q}
                <span className="text-slate-400 group-open:rotate-180 transition-transform duration-300">
                  ›
                </span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-20 md:pb-28">
        <div className="rounded-3xl bg-slate-900 text-white p-10 md:p-16 shadow-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-serif text-3xl md:text-4xl font-light mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              Share your goals and timeline with us, and we&apos;ll connect you with the ideal professionals for your Algarve property journey.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-10 py-4 text-base font-semibold shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
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