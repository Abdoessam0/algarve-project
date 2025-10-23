// src/app/about/page.tsx
'use client';

import React, { Suspense, memo, useState } from 'react';
import {
  Building,
  Users,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Target,
  Calendar,
  Briefcase,
  Clock,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants, useReducedMotion } from 'framer-motion';
import { roadmapSteps } from '@/data/roadmap';
import { teamMembers } from '@/data/teamMembers';
import Button from '@/components/ui/Button';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const teamStagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const teamCardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const viewportSettings = { once: true, amount: 0.2 } as const;

const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
  </div>
);

// Lisbon-like badge positions (outside edges allowed)
const heroStepPositions = [
  { top: '6%', right: '8%' },   // 1
  { top: '22%', left: '-10%' }, // 2
  { top: '44%', right: '-6%' }, // 3
  { bottom: '30%', left: '4%' },// 4
  { bottom: '10%', right: '18%' }, // 5
] as const;

const heroBadgeThemes = {
  blue: { bg: 'from-blue-500 to-blue-600', shadow: 'rgba(59,130,246,0.35)' },
  green: { bg: 'from-emerald-500 to-emerald-600', shadow: 'rgba(16,185,129,0.35)' },
  purple: { bg: 'from-violet-500 to-violet-600', shadow: 'rgba(139,92,246,0.35)' },
  orange: { bg: 'from-orange-500 to-orange-600', shadow: 'rgba(249,115,22,0.35)' },
  indigo: { bg: 'from-indigo-500 to-indigo-600', shadow: 'rgba(99,102,241,0.35)' },
  default: { bg: 'from-blue-500 to-blue-600', shadow: 'rgba(59,130,246,0.35)' },
} as const;

type HeroBadgeThemeKey = keyof typeof heroBadgeThemes;
type RoadmapStep = (typeof roadmapSteps)[number];
type HeroBadgePosition = typeof heroStepPositions[number];

interface StepBadgeProps {
  step: RoadmapStep;
  index: number;
  position: HeroBadgePosition;
}

const StepBadge = ({ step, index, position }: StepBadgeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const theme =
    heroBadgeThemes[(step.color as HeroBadgeThemeKey) ?? 'default'] ?? heroBadgeThemes.default;
  const tooltipId = `hero-step-tooltip-${step.number}`;
  const showTooltip = isHovered || isFocused;

  return (
    <motion.div
      className="absolute z-30"
      style={position}
      initial={{ opacity: 0, scale: 0.92, y: 8 }}
      animate={
        prefersReducedMotion
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 1, scale: 1, y: [0, -10, 0] }
      }
      transition={{
        opacity: { duration: 0.4, delay: index * 0.08 },
        scale: { duration: 0.4, delay: index * 0.08 },
        y: prefersReducedMotion
          ? { duration: 0.4, delay: index * 0.08 }
          : { duration: 5.5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: index * 0.2 },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        tabIndex={0}
        role="button"
        aria-label={`Step ${step.number}: ${step.title}`}
        aria-describedby={showTooltip ? tooltipId : undefined}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${theme.bg} text-white text-lg font-bold ring-2 ring-white shadow-lg transition-transform`}
        style={{ boxShadow: `0 10px 26px ${theme.shadow}` }}
      >
        <span className="text-xl leading-none">{step.number}</span>
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/30" />
      </div>

      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          role="tooltip"
          id={tooltipId}
          className="absolute bottom-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white shadow-[0_12px_30px_rgba(15,23,42,0.4)]"
        >
          {step.title}
          <span aria-hidden className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-[2px] bg-gray-900" />
        </motion.div>
      )}
    </motion.div>
  );
};

const HeroSection = memo(() => (
  <section className="relative overflow-hidden bg-white py-16 md:py-24">
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }}
    />
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: 'radial-gradient(circle, #374151 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    />

    <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
      <div className="grid items-center gap-8 lg:grid-cols-[55%_45%] lg:gap-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-gray-300 bg-gray-900 px-5 py-3 shadow-lg">
            <Building className="h-5 w-5 text-white" />
            <span className="text-sm font-bold text-white">
              The Algarve Branch of{' '}
              <a
                href="https://5stepsrealestate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-2 underline-offset-2 hover:text-gray-200"
              >
                5 Steps Real Estate
              </a>
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            About <span className="text-gray-700">5 Steps Real Estate</span> Algarve
          </h1>

          <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl">
            Your Trusted PropTech Partner for Property Acquisition on Portugal&apos;s Southern Coast
          </h2>

          <p className="text-xl leading-relaxed text-gray-600">
            Real Estate Algarve is the Algarve branch of 5 Steps Real Estate, purpose-built to guide
            international buyers through the opportunities and nuances of purchasing property across
            Portugal&apos;s celebrated coastal region. We transform a complex process into a clear,
            systematic journey supported by verified English-speaking professionals at every stage.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/login">
              <Button className="bg-gray-900 text-white shadow-lg transition-all duration-300 hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/professionals">
              <Button
                variant="outline"
                className="border-2 border-gray-900 text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2"
              >
                Browse Professionals
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="relative hidden lg:block"
        >
          {/* parent wrapper keeps overflow visible so badges are not clipped */}
          <div className="relative mx-auto max-w-[520px]">
            <figure className="relative aspect-square overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_18px_44px_rgba(0,0,0,0.12)]">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-gray-50 to-gray-100" />
              <div className="absolute inset-0 rounded-[32px] border border-gray-100" />
              <div className="relative z-10 flex h-full w-full items-center justify-center p-10">
                <Image
                  src="/images/about/hero-illustration.png"
                  alt="Real Estate Algarve - 5 Steps Property Acquisition Journey"
                  width={500}
                  height={500}
                  className="h-auto w-full drop-shadow-[0_20px_45px_rgba(0,0,0,0.18)]"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
              </div>
            </figure>

            {roadmapSteps.slice(0, heroStepPositions.length).map((step, index) => {
              const position = heroStepPositions[index];
              if (!position) return null;
              const key = `${step.number ?? index}-${step.title}`;
              return <StepBadge key={key} step={step} index={index} position={position} />;
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
));
HeroSection.displayName = 'HeroSection';

const TeamSection = memo(() => (
  <section className="bg-gray-50 py-12 md:py-16">
    <div className="container mx-auto max-w-7xl px-4 md:px-6">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="mb-8 text-center"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-white shadow-md">
          <Users className="h-4 w-4" />
          <span className="text-sm font-bold">5 Steps Real Estate Team</span>
        </div>
        <h2 className="mb-4 text-3xl font-bold text-gray-900">Meet Our Team</h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Our experienced 5 Steps Real Estate professionals are dedicated to connecting you with the
          perfect Algarve property solutions.
        </p>
      </motion.div>

      <motion.div
        variants={teamStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {teamMembers.map((member, index) => (
          <motion.article
            key={`${member.name}-${index}`}
            variants={teamCardVariants}
            tabIndex={-1}
            aria-disabled
            className="group relative h-[440px] cursor-default overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-transform duration-300 ease-out hover:shadow-xl focus:outline-none"
          >
            <div className="absolute inset-0">
              <Image
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                fill
                className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${index === 0 ? 'object-center' : 'object-top'
                  }`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-900/35 to-transparent transition duration-300 group-hover:from-gray-950/85" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="transition-all duration-300 ease-out">
                <h3 className="mb-1 text-2xl font-bold">{member.name}</h3>
                <p className="text-base font-semibold text-gray-200">{member.role}</p>
                <div className="max-h-0 overflow-hidden transition-all duration-300 ease-out group-hover:mt-3 group-hover:max-h-24">
                  <p className="text-sm leading-relaxed text-gray-100 line-clamp-3">{member.bio}</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {member.expertise.map((skill) => (
                    <span
                      key={`${member.name}-${skill}`}
                      className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm transition-colors duration-200 group-hover:bg-white/25"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute right-4 top-4">
              <div className="h-3 w-3 rounded-full bg-green-400 ring-2 ring-white shadow-lg" />
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="mt-10"
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="relative h-48 w-full">
              <Image
                src="/about_us/agents/adrian-garuta.webp"
                alt="Adrian Garuta - Real Estate Agent"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <p className="text-sm font-semibold text-gray-900">Adrian Garuta</p>
              <p className="text-xs text-gray-500">Associate Project Manager</p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="relative h-48 w-full">
              <Image
                src="/about_us/developers/abdo-essam.webp"
                alt="Abdo Essam - Developer"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <p className="text-sm font-semibold text-gray-900">Abdo Essam</p>
              <p className="text-xs text-gray-500">Developer</p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="relative h-48 w-full">
              <Image
                src="/about_us/developers/julia-vieira-de-souza.webp"
                alt="Júlia Vieira de Souza - Developer"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <p className="text-sm font-semibold text-gray-900">Júlia Vieira de Souza</p>
              <p className="text-xs text-gray-500">Developer</p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="relative h-48 w-full">
              <Image
                src="/about_us/developers/mehmet-yasir-balci.webp"
                alt="Mehmet Yasir Balci - Developer"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <p className="text-sm font-semibold text-gray-900">Mehmet Yasir Balci</p>
              <p className="text-xs text-gray-500">Developer</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="mt-12 text-center"
      >
        <div className="mx-auto max-w-3xl rounded-2xl border-2 border-gray-900 bg-gray-900 p-8 shadow-xl">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Building className="h-8 w-8 text-white" />
            <h3 className="text-2xl font-bold text-white">5 Steps Real Estate Technology</h3>
          </div>
          <p className="text-center text-lg leading-relaxed text-white">
            <strong className="text-white">We are 5 Steps Real Estate</strong> - our team leverages
            our proprietary PropTech platform to give you access to advanced market analysis tools,
            verified professional networks, and systematic buying guidance that transforms complex
            Algarve property acquisitions into clear, manageable steps.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
));
TeamSection.displayName = 'TeamSection';

const RoadmapCTASection = memo(() => (
  <section className="bg-white py-12 md:py-16">
    <div className="container mx-auto max-w-7xl px-4 md:px-6">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="relative overflow-hidden rounded-2xl bg-gray-900 p-8 shadow-xl md:p-12"
      >
        <div className="absolute right-0 top-0 h-60 w-60 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-60 w-60 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
              <Target className="h-4 w-4" />
              See the full 5-Step Roadmap
            </div>
            <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Your property journey mapped from goals to move-in
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-gray-300">
              Explore the detailed 5 Steps Real Estate process that guides every Algarve buyer. From
              defining objectives to post-completion support, our roadmap keeps every milestone on
              track.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link href="/roadmap">
              <Button className="bg-white text-gray-900 transition-all duration-300 hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">
                View the 5-Step Roadmap
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
));
RoadmapCTASection.displayName = 'RoadmapCTASection';

const ContactSection = memo(() => (
  <section className="bg-gray-50 py-12 md:py-16">
    <div className="container mx-auto max-w-7xl px-4 md:px-6">
      <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Let&apos;s Start Your Algarve Property Journey
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
          From defining your goals to optimizing your property post-purchase,{' '}
          <strong className="text-gray-800">5 Steps Real Estate</strong> provides the roadmap,
          professionals, and PropTech tools you need for a successful Algarve acquisition.
        </p>
      </motion.div>

      <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <h3 className="mb-6 text-2xl font-bold text-gray-900">Contact Us</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gray-900 text-white shadow-md">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-600">+351 912 154 527</p>
                <p className="text-sm text-gray-500">Mon-Fri 9AM-5PM WET</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gray-900 text-white shadow-md">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-gray-900">Email</h4>
                <a
                  href="mailto:contact@5stepsrealestate.com"
                  className="inline-block text-gray-700 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2"
                >
                  contact@5stepsrealestate.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gray-900 text-white shadow-md">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-gray-900">Office</h4>
                <p className="text-gray-600">Rua Salvador Martins 3A</p>
                <p className="text-gray-600">Porto Salvo 2740-315</p>
                <p className="text-sm italic text-gray-500">by appointment</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gray-900 text-white shadow-md">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-gray-900">Hours</h4>
                <p className="text-gray-600">by appointment</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps?q=Rua%20Salvador%20Martins%203A,%20Porto%20Salvo%202740-315&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Real Estate Office - Porto Salvo"
              className="h-full w-full"
            />
          </div>
        </motion.div>
      </div>

      <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="text-center">
        <div className="mb-6 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/login">
            <Button className="bg-gray-900 text-white transition-all duration-300 hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </Link>
          <Link href="/professionals">
            <Button
              variant="outline"
              className="border-2 border-gray-900 text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              Browse Professionals
            </Button>
          </Link>
        </div>
        <div className="inline-block max-w-2xl rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm leading-relaxed text-gray-700">
            <strong>
              Ready to explore Algarve property opportunities with complete confidence? Let&apos;s
              begin your journey today.
            </strong>
          </p>
        </div>
      </motion.div>
    </div>
  </section>
));
ContactSection.displayName = 'ContactSection';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Suspense fallback={<LoadingSpinner />}>
        <main className="flex-1">
          <HeroSection />
          <div id="team">
            <TeamSection />
          </div>
          <div id="roadmap">
            <RoadmapCTASection />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
        </main>
      </Suspense>
    </div>
  );
}
