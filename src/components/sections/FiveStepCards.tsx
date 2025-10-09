"use client";
import React from 'react';
import { motion, useReducedMotion, MotionConfig } from 'framer-motion';
import { stepGradients } from "@/utils/gradients";
import { CheckCircle } from "lucide-react";

type Step = {
    num: number;
    title: string;
    body: string;
};

const STEPS: Step[] = [
    {
        num: 1,
        title: "Brief & Budget",
        body:
            "Start your property journey by defining your goals, budget, and requirements. This foundational step combines initial orientation with financial planning to set clear expectations for your property search in Portugal.",
        // gradient is now handled by stepGradients
    },
    {
        num: 2,
        title: "Legal Kit",
        body:
            "Essential legal documentation and requirements for foreign property buyers in Portugal. Learn about NIF, bank accounts, and power of attorney.",
        // gradient is now handled by stepGradients
    },
    {
        num: 3,
        title: "Property Due Diligence",
        body:
            "Essential checks and professional services for a secure property purchase in Portugal.",
        // gradient is now handled by stepGradients
    },
    {
        num: 4,
        title: "Secure Purchase",
        body:
            "Navigate the purchase process with confidence, from offer to completion. This step combines negotiation, due diligence, and final transaction procedures.",
        // gradient is now handled by stepGradients
    },
    {
        num: 5,
        title: "Autopilot Ownership",
        body:
            "Enjoy your new property with ongoing support and management services. This step covers post-purchase services and long-term property management.",
        // gradient is now handled by stepGradients
    },
];
const SUMMARIES: Record<number, string[]> = {
    1: [
        "Define goals, budget, and must-haves.",
        "Align expectations and plan financing.",
    ],
    2: [
        "Get NIF and open a bank account.",
        "Set Power of Attorney if needed.",
    ],
    3: [
        "Run legal/title checks with a lawyer.",
        "Survey & technical due diligence.",
    ],
    4: [
        "Offer + CPCV + deed with funds ready.",
        "Clear milestones to completion.",
    ],
    5: [
        "Bills, services, rentals & management.",
        "Ongoing local support after purchase.",
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
    // Call hook unconditionally to satisfy rules-of-hooks
    const prefersReduced = useReducedMotion();
    const hoverable = useHoverable();
    const [flipped, setFlipped] = React.useState<boolean[]>(Array(STEPS.length).fill(false));

    const handleFlip = (idx: number, next?: boolean) => {
        setFlipped((prev) => prev.map((v, i) => (i === idx ? (typeof next === 'boolean' ? next : !v) : v)));
    };

    return (
        <MotionConfig transition={prefersReduced ? { duration: 0.2 } : { type: "spring", stiffness: 240, damping: 20 }}>
            <section
                className="relative py-8 sm:py-12 lg:py-16"
                aria-label="Five step journey"
            >
                <div className="mx-auto max-w-7xl px-4 md:px-6">
                    <div className="mx-auto max-w-[65ch] text-center mb-10 md:mb-12">
                        <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">Five-Step Journey</p>
                        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                            5 Steps to Buying a Home in Portugal with Professional Support
                        </h2>
                        <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600">
                            Follow our proven 5-step system with verified English-speaking professionals guiding you through every step. From initial consultation to final escritura, our network ensures a smooth property buying journey in Portugal.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
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
                                    className="group relative [perspective:1400px] min-h-[260px] md:min-h-[300px] overflow-visible focus:outline-none focus:ring-2 focus:ring-white/40 rounded-3xl"
                                    onMouseEnter={hoverable ? () => handleFlip(idx, true) : undefined}
                                    onMouseLeave={hoverable ? () => handleFlip(idx, false) : undefined}
                                    onClick={() => handleFlip(idx)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            handleFlip(idx);
                                        }
                                    }}
                                >
                                    <motion.div
                                        className={`relative h-full w-full transition-transform duration-700 ${!prefersReduced ? 'ease-[cubic-bezier(0.2,0.8,0.2,1)]' : ''} [transform-style:preserve-3d] ${desktopHover}`}
                                        animate={
                                            prefersReduced ? { rotateY: 0 } : { rotateY: isFlipped ? 180 : 0 }
                                        }
                                        transition={
                                            prefersReduced ? { duration: 0.2 } : { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }
                                        }
                                    >
                                        {/* FRONT FACE */}
                                        <div
                                            className={
                                                `absolute inset-0 rounded-3xl p-6 md:p-8 shadow-lg md:shadow-xl ${stepGradients[s.num]} text-white [backface-visibility:hidden] before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:-z-10 before:blur-2xl before:opacity-30 before:bg-white/10 md:group-hover:-translate-y-1 md:group-hover:rotate-x-[1.5deg] md:group-hover:-rotate-y-[1.5deg] transition-all duration-300`
                                            }
                                            style={prefersReduced ? { opacity: isFlipped ? 0 : 1, transition: 'opacity 200ms' } : undefined}
                                            aria-hidden={isFlipped}
                                        >
                                            <div className="flex flex-col h-full">
                                                <span className="text-6xl font-black leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">{s.num}</span>
                                                <h3 id={`title-${s.num}`} className="mt-3 text-2xl md:text-[1.55rem] font-extrabold tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">{s.title}</h3>
                                                <div className="ml-auto mt-auto self-end rounded-full bg-white/20 text-white text-[11px] px-2 py-0.5 backdrop-blur-sm">Tap to see summary</div>
                                            </div>
                                        </div>

                                        {/* BACK FACE */}
                                        <div
                                            className={[
                                                "absolute inset-0 rounded-3xl p-6 md:p-8",
                                                prefersReduced ? "" : "[transform:rotateY(180deg)] [backface-visibility:hidden]",
                                                "backdrop-blur-xl bg-neutral-900/80 text-white"
                                            ].join(" ")}
                                            style={prefersReduced ? { opacity: isFlipped ? 1 : 0, transition: 'opacity 200ms' } : undefined}
                                            aria-hidden={!isFlipped}
                                        >
                                            <div className="flex h-full flex-col">
                                                <ul className="space-y-3 text-sm md:text-base leading-7">
                                                    {SUMMARIES[s.num].map((line, i) => (
                                                        <li key={i} className="flex items-start gap-2">
                                                            <CheckCircle className="mt-1 h-4 w-4 shrink-0 opacity-90" />
                                                            <span>{line}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <span className="mt-auto text-[11px] text-white/70">Tap again to flip back</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </MotionConfig>
    );
}

