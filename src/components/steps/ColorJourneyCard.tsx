'use client';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  subtitle: string;
  count: number;
  imageSrc?: string;
  gradient: string; // e.g., 'from-sky-400 to-blue-600'
};

export default function ColorJourneyCard({ title, subtitle, count, imageSrc, gradient }: Props) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: prefersReduced ? 0 : -6,
        boxShadow: '0 12px 32px rgba(0,0,0,.15)'
      }}
      transition={{ duration: 0.25 }}
      tabIndex={0}
      className={[
        'rounded-3xl p-6 text-white shadow-lg bg-gradient-to-br overflow-hidden',
        'focus:outline-none focus:ring-2 focus:ring-white/70',
        gradient,
      ].join(' ')}
      aria-label={`${title} step card`}
    >
      <div className="flex items-start justify-between">
        <div className="text-lg font-semibold drop-shadow-sm">{title}</div>
        <span className="rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold">
          #{count}
        </span>
      </div>
      <p className="mt-1 text-sm text-white/80">{subtitle}</p>

      {imageSrc ? (
        <div className="mt-4 flex justify-center">
          <Image
            src={imageSrc}
            alt={`${title} illustration`}
            width={96}
            height={96}
            className="w-24 h-24 rounded-xl object-cover mx-auto bg-white/15"
          />
        </div>
      ) : (
        <div
          className="w-24 h-24 rounded-xl mx-auto mt-4 bg-white/15 flex items-center justify-center text-white/80 text-xl font-semibold"
          aria-hidden="true"
        >
          {title.charAt(0)}
        </div>
      )}
    </motion.div>
  );
}

