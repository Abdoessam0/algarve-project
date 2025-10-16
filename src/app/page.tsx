// src/app/page.tsx
"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import FiveStepCards from "@/components/sections/FiveStepCards";

const Hero = dynamic(() => import("@/components/steps/hero/Hero"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Hero />
      </motion.div>

      {/* Steps ribbon under hero */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="-mt-6 md:-mt-10 py-12 lg:py-16"
      >
        <div className="container mx-auto max-w-7xl px-4 lg:px-6">
          <h2 className="sr-only">Complete 5-Step Buying Journey</h2>
          <FiveStepCards />
        </div>
      </motion.section>
    </>
  );
}
