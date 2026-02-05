'use client';

import { Calendar, Clock, Info } from 'lucide-react';

export default function SaturdayInfoBanner() {
  return (
    <section className="bg-gradient-to-r from-brand-green-600 via-brand-green-500 to-brand-green-600 text-white py-12 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <Calendar className="h-12 w-12 text-white" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
              Začíname pracovať v sobotu!
            </h2>
            <p className="text-lg md:text-xl mb-2 text-white/95">
              Každá pobočka má svoje vlastné termíny pre tieto soboty.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-white/90">
              <Info className="h-5 w-5" />
              <p className="text-base md:text-lg">
                Rezervácie termínov budú čoskoro dostupné.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
