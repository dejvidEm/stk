'use client';

import { CalendarRange } from 'lucide-react';

const INTERVALS = [
  {
    period: '4 roky',
    categories: 'L5e, L6e, L7e, O2, R2, T1a–T4a',
    items: [
      'Motorky a štvorkolky do 125 cm³',
      'Malé prípojné vozidlá brzdené a za traktor',
      'Traktor a prípojné za traktor s rýchlosťou do 40 km/h',
    ],
  },
  {
    period: '2 roky',
    categories: 'M1, N1, R3, R4, T, L5e, L6e, L7e',
    items: [
      'Osobné motorové vozidlá do 9 osôb',
      'Nákladné motorové vozidlá do 3,5 t',
      'Traktor a prípojné vozidlá za traktor',
      'Motorky a štvorkolky nad 125 cm³',
      'Nové vozidlá po 4 rokoch',
    ],
  },
  {
    period: '1 rok',
    categories: 'M2, M3, N2, N3, O3, O4',
    items: [
      'Osobné motorové vozidlá nad 9 osôb',
      'Nákladné motorové vozidlá nad 3,5 t',
      'Prípojné vozidlá',
      'Vozidlá taxislužby a s právom prednostnej jazdy',
    ],
  },
] as const;

export default function STKLehotyKontrolSection() {
  return (
    <div className="mt-12 md:mt-14" id="lehoty-kontrol-stk">
      <div className="rounded-2xl border border-brand-gray-200 bg-brand-gray-50/90 p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3 mb-6 md:mb-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-red-100">
            <CalendarRange className="h-6 w-6 text-brand-red-600" aria-hidden />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-brand-gray-900 uppercase tracking-wide">
            Lehoty kontrol STK
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {INTERVALS.map((block) => (
            <div
              key={block.period}
              className="rounded-xl border border-brand-gray-100 bg-white p-5 md:p-6 shadow-sm"
            >
              <p className="mb-3 text-lg font-bold uppercase tracking-wide text-brand-red-600 md:text-xl">
                {block.period}
              </p>
              <p className="mb-3 text-sm leading-snug text-brand-gray-700">
                <span className="font-semibold text-brand-gray-900">Kategórie: </span>
                {block.categories}
              </p>
              <ul className="m-0 list-none space-y-2 pl-0 text-sm text-brand-gray-600 leading-snug">
                {block.items.map((text) => (
                  <li key={text} className="flex gap-2">
                    <span className="shrink-0 font-bold text-brand-green-600" aria-hidden>
                      •
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
