'use client';
import { motion } from 'framer-motion';

const steps = [
    { n: 1, title: 'Brief & Budget', href: '/roadmap#step-1' },
    { n: 2, title: 'Legal Kit', href: '/roadmap#step-2' },
    { n: 3, title: 'Property Due Diligence', href: '/roadmap#step-3' },
    { n: 4, title: 'Secure Purchase', href: '/roadmap#step-4' },
    { n: 5, title: 'Autopilot Ownership', href: '/roadmap#step-5' },
];

export function StepsSummary() {
    return (
        <div
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                {steps.map((s, i) => (
                    <motion.a
                        key={s.n}
                        href={s.href}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="block h-full rounded-lg border p-4 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    >
                        <div className="text-sm text-neutral-500">Step {s.n}</div>
                        <div className="mt-1 text-base font-semibold">{s.title}</div>
                        <div className="mt-2 text-xs text-blue-600">Learn more</div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
}
