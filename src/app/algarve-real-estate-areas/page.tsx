// src/app/areas/page.tsx
"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { algarve } from "@/data/algarve";
import { useState } from "react";
import { Search, MapPin, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AreasPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMunicipalities = algarve.municipalities.filter((m) =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.mainCities.some((city) => city.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />

        <div className="container mx-auto max-w-7xl px-4 lg:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2 text-sm font-medium tracking-wide text-white/90 mb-8">
              <MapPin className="w-4 h-4" />
              Explore {algarve.municipalities.length} Prime Locations
            </div>

            {/* Heading */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-tight mb-6">
              Discover Algarve
              <span className="block font-normal mt-2">Municipalities</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
              From golden coastlines to historic hilltop towns, explore Portugal&apos;s most coveted regions for property investment and luxury living.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search municipalities or cities..."
                className="w-full rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-md pl-14 pr-6 py-5 text-base text-white placeholder:text-white/60 shadow-xl focus:border-white/40 focus:outline-none focus:ring-4 focus:ring-white/10 transition-all duration-300"
                aria-label="Search Algarve municipalities"
              />
            </div>

            {/* Results Count */}
            {searchTerm && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm text-white/70"
              >
                Found {filteredMunicipalities.length} {filteredMunicipalities.length === 1 ? 'municipality' : 'municipalities'}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 lg:px-6 py-4">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-slate-900 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-slate-900 font-medium">Areas</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Municipalities Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 lg:px-6">
          {filteredMunicipalities.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">No results found</h3>
              <p className="text-slate-600">Try adjusting your search terms</p>
            </motion.div>
          ) : (
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredMunicipalities.map((m, index) => (
                <motion.li
                  key={m.id}
                  variants={itemVariants}
                  className="group"
                >
                  <div
                    className="block h-full rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      // Stay on the same page - do nothing
                    }}
                  >
                    {/* Number Badge */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white font-semibold text-sm mb-6">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Municipality Name */}
                    <h2 className="text-2xl lg:text-3xl font-serif font-light tracking-tight text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
                      {m.name}
                    </h2>

                    {/* Main Cities */}
                    <div className="flex items-start gap-2 text-slate-600 mb-4">
                      <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-slate-400" />
                      <p className="text-base leading-relaxed">
                        {m.mainCities.join(", ")}
                      </p>
                    </div>

                    {/* View More Link */}
                    <div className="flex items-center text-sm font-medium text-slate-900 group-hover:gap-2 transition-all duration-300">
                      View Details
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 mb-6">
              Need Help Choosing the Perfect Location?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Our local experts can guide you through each municipality&apos;s unique character, investment potential, and lifestyle offerings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/professionals"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all duration-300 group"
              >
                Connect with Experts
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-slate-300 bg-white text-slate-900 px-8 py-4 text-base font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Diverse Locations</h3>
              <p className="text-slate-600 leading-relaxed">
                From coastal towns to inland villages, each municipality offers unique charm and investment opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Prime Properties</h3>
              <p className="text-slate-600 leading-relaxed">
                Discover luxury villas, beachfront apartments, and historic homes across Algarve&apos;s finest areas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Expert Guidance</h3>
              <p className="text-slate-600 leading-relaxed">
                Local professionals who understand the nuances of each region and can help you make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
