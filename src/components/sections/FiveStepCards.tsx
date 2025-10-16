"use client";
import React from 'react';
import Link from "next/link";
import { motion, useReducedMotion, MotionConfig } from 'framer-motion';
import { CheckCircle } from "lucide-react";

type Step = {
    num: number;
    title: string;
    body: string;
};

const STEPS: Step[] = [
    {
        num: 1,
        title: "Define Your Goals",
        body:
            "What type of property are you looking for? Investment, family home, or relocation?",
    },
    {
        num: 2,
        title: "Understand the Market",
        body:
            "Data insights, neighborhoods, pricing trends — all simplified.",
    },
    {
        num: 3,
        title: "Build Your Team",
        body:
            "We connect you with vetted local professionals (agents, lawyers, banks).",
    },
    {
        num: 4,
        title: "Buy With Confidence",
        body:
            "From negotiation to legal process — every step mapped out clearly.",
    },
    {
        num: 5,
        title: "Move & Optimize",
        body:
            "Post-purchase support — renovation, rental management, and relocation tips.",
    },
];

const SUMMARIES: Record<number, string[]> = {
    1: [
        "Define goals & must-haves",
        "Set purchase budget & financing plan",
        "Shortlist Algarve locations",
    ],
    2: [
        "Get NIF & bank account",
        "Power of Attorney (if remote)",
        "Engage English-speaking lawyer",
    ],
    3: [
        "Land registry & debt checks",
        "Planning/municipality searches",
        "Technical survey (as needed)",
    ],
    4: [
        "Offer & CPCV milestones",
        "Funds, KYC, and deed day prep",
        "Final signatures & keys",
    ],
    5: [
        "Utilities & services setup",
        "Rental/management options",
        "Ongoing local support",
    ],
};

// Detect if the device supports hover with a fine pointer
function useHoverable() {
    const [hoverable, setHoverable] = React.useState(false);
    React.useEffect(() => {
        const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
        const set = () => setHoverable(mq.matches);
        set();
        mq.addEventListener?.('change', set);
        return () => mq.removeEventListener?.('change', set);
    }, []);
    return hoverable;
}

export default function FiveStepCards() {
    const prefersReduced = useReducedMotion();
    const hoverable = useHoverable();
    const [flipped, setFlipped] = React.useState<boolean[]>(Array(STEPS.length).fill(false));

    const handleFlip = (idx: number, next?: boolean) => {
        setFlipped((prev) => prev.map((v, i) => (i === idx ? (typeof next === 'boolean' ? next : !v) : v)));
    };

    return (
        <MotionConfig transition={prefersReduced ? { duration: 0.2 } : { type: "spring", stiffness: 240, damping: 20 }}>
            <section
                className="relative py-16 lg:py-20"
                aria-label="Five step roadmap"
            >
                <div className="mx-auto max-w-7xl px-4 lg:px-6">
                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">The 5-Step Algarve Property Roadmap</p>
                        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                            Your Complete Path to Algarve Property Ownership
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-slate-600">
                            Follow our proven 5-step roadmap with verified English-speaking professionals guiding you through every milestone. From defining your goals to post-purchase optimization, we ensure a seamless Algarve property journey.
                        </p>
                    </div>
                    <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
                        {STEPS.map((s, idx) => {
                            const isFlipped = flipped[idx];
                            const desktopHover = hoverable && !prefersReduced ? "md:group-hover:[transform:rotateY(180deg)]" : "";
                            return (
                                <div
                                    key={s.title}
                                    role="button"
                                    tabIndex={0}
                                    aria-labelledby={`title-${s.num}`}
                                    aria-expanded={isFlipped}
                                    className="group relative h-[400px] cursor-pointer perspective-1000 rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 transition-shadow hover:shadow-lg"
                                    onMouseEnter={hoverable ? () => handleFlip(idx, true) : undefined}
                                    onMouseLeave={hoverable ? () => handleFlip(idx, false) : undefined}
                                    onClick={() => handleFlip(idx)}
                                    onKeyDown={(e) => {
                                        if (e.target !== e.currentTarget) {
                                            return;
                                        }
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            handleFlip(idx);
                                        }
                                    }}
                                >
                                    <motion.div
                                        className={`relative h-full w-full transition-transform duration-700 ${!prefersReduced ? 'ease-[cubic-bezier(0.2,0.8,0.2,1)]' : ''} preserve-3d ${desktopHover}`}
                                        animate={
                                            prefersReduced ? { rotateY: 0 } : { rotateY: isFlipped ? 180 : 0 }
                                        }
                                        transition={
                                            prefersReduced ? { duration: 0.2 } : { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }
                                        }
                                    >
                                        {/* FRONT FACE */}
                                        <div
                                            className="absolute inset-0 backface-hidden flex h-full flex-col bg-white p-6 text-slate-900"
                                            style={prefersReduced ? { opacity: isFlipped ? 0 : 1, transition: 'opacity 200ms' } : undefined}
                                            aria-hidden={isFlipped}
                                        >
                                            <div className="mb-4">
                                                <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-600">
                                                    Step {s.num}
                                                </span>
                                            </div>
                                            <span className="mb-4 text-6xl font-bold leading-none text-sky-600">{s.num}</span>
                                            <h3
                                                id={`title-${s.num}`}
                                                className="mb-3 text-xl font-bold text-slate-900 leading-tight break-words"
                                            >
                                                {s.title}
                                            </h3>
                                            <p className="flex-1 text-sm text-slate-600 leading-relaxed break-words">
                                                {s.body}
                                            </p>
                                            <div className="mt-4 flex justify-center">
                                                <span className="text-xs text-slate-400">
                                                    Hover to see actions
                                                </span>
                                            </div>
                                        </div>

                                        {/* BACK FACE */}
                                        <div
                                            className={[
                                                "absolute inset-0 backface-hidden flex h-full flex-col bg-gradient-to-br from-sky-500 to-blue-600 p-6 text-white",
                                                prefersReduced ? "" : "[transform:rotateY(180deg)]"
                                            ].join(" ")}
                                            style={prefersReduced ? { opacity: isFlipped ? 1 : 0, transition: 'opacity 200ms' } : undefined}
                                            aria-hidden={!isFlipped}
                                        >
                                            <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white mb-5 self-start">
                                                Key Actions
                                            </span>
                                            <div className="flex-1 flex items-center">
                                                <ul className="space-y-3.5 w-full">
                                                    {SUMMARIES[s.num].map((line, i) => (
                                                        <li key={i} className="flex items-start gap-2.5">
                                                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                                                            <span className="text-sm text-white leading-relaxed break-words">
                                                                {line}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <span className="mt-5 text-xs text-white/70 text-center">Hover out to flip back</span>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-12 flex justify-center">
                        <Link
                            href="/roadmap"
                            className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-sm transition-all hover:bg-slate-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
                        >
                            Explore 5-Step Roadmap
                        </Link>
                    </div>
                </div>
            </section>
        </MotionConfig>
    );
}