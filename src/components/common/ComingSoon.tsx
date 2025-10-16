"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Home, MapPin } from "lucide-react";

interface ComingSoonProps {
  title?: string;
  subtitle?: string;
}

export default function ComingSoon({
  title = "Coming Soon",
  subtitle = "We're currently working on high-quality real estate content. In the meantime, explore our featured areas and verified professionals.",
}: ComingSoonProps) {
  const ctaButtons = [
    {
      href: "/professionals",
      label: "Find Professionals",
      icon: Users,
      variant: "primary" as const,
    },
    {
      href: "/",
      label: "Back to Home",
      icon: Home,
      variant: "secondary" as const,
    },
    {
      href: "/algarve-real-estate-areas",
      label: "Explore Areas",
      icon: MapPin,
      variant: "secondary" as const,
    },
  ];

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-gradient-to-b from-sand-50 to-white px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/5 px-4 py-2 text-sm font-medium text-gold-500"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500" />
          </span>
          In Development
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-bold tracking-tighter-headline text-ink-900 md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-base leading-body text-slate-600 md:text-lg"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {ctaButtons.map((button, index) => {
            const Icon = button.icon;
            const isPrimary = button.variant === "primary";

            return (
              <motion.div
                key={button.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.3 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={button.href}
                  className={`group inline-flex items-center gap-2 rounded-button px-6 py-3 text-sm font-semibold transition-all duration-micro ease-smooth ${
                    isPrimary
                      ? "bg-ink-900 text-white shadow-soft hover:bg-ink-900/90 hover:shadow-soft-lg"
                      : "border border-stone-200 bg-white text-ink-900 shadow-glass hover:border-gold-500/30 hover:bg-sand-50"
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{button.label}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-micro group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-2 text-xs text-slate-600"
        >
          <div className="h-px w-12 bg-stone-200" />
          <span>Launching Soon</span>
          <div className="h-px w-12 bg-stone-200" />
        </motion.div>
      </motion.div>
    </main>
  );
}
