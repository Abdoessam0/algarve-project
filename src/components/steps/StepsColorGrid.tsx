'use client';
import React from 'react';
import ColorJourneyCard from '@/components/steps/ColorJourneyCard';

export default function StepsColorGrid() {
  const items = [
    { id: 1, title: 'Research',  subtitle: 'Market Analysis',      count: 1, gradient: 'from-sky-400 to-blue-600' },
    { id: 2, title: 'Planning',  subtitle: 'Legal Setup',          count: 2, gradient: 'from-rose-400 to-red-500' },
    { id: 3, title: 'Financing', subtitle: 'Bank & Mortgage',      count: 3, gradient: 'from-teal-400 to-emerald-500' },
    { id: 4, title: 'Purchase',  subtitle: 'Property Acquisition', count: 4, gradient: 'from-violet-500 to-purple-600' },
    { id: 5, title: 'Ownership', subtitle: 'Final Transfer',       count: 5, gradient: 'from-amber-400 to-yellow-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((item) => (
          <ColorJourneyCard
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            count={item.count}
            gradient={item.gradient}
          />
        ))}
      </div>
    </div>
  );
}

