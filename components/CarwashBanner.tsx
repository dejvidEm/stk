'use client';

import Link from 'next/link';
import { Droplets, Car, Sparkles, Clock, ArrowRight, Zap, CheckCircle } from 'lucide-react';

const locations = [
  {
    id: 'namestovo',
    title: 'STK Námestovo',
    items: [
      'Automatický umývací portál 24/7',
      'Umývacie boxy 24/7',
      'Vysávač',
      'Automatický čistič rohoží',
    ],
  },
  {
    id: 'tvrdosin',
    title: 'STK Tvrdošín',
    items: ['Umývacie boxy 24/7', 'Vysávač'],
  },
] as const;

export default function CarwashBanner() {
  return (
    <section className="bg-gray-50 py-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Autoumyváreň</h2>
          <p className="text-lg text-gray-600">
            Ponuka autoumývarky sa líši podľa prevádzky — nižšie nájdete presný rozpis pre Námestovo a Tvrdošín.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="rounded-2xl border shadow-lg p-6 flex flex-col h-full bg-white/90 border-gray-200/80 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{loc.title}</h3>
              <ul className="space-y-2.5 flex-1">
                {loc.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden border border-white/50 shadow-xl">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/images/namestovo.webp"
                alt="Autoumyváreň"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-lg font-bold text-white drop-shadow-lg">
                  Programy Basic až Platinum
                </p>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Samoobslužné umývacie programy sú k dispozícii na{' '}
                <strong>umývacích boxoch v Námestove a Tvrdošíne</strong> a na{' '}
                <strong>automatickom umývacom portáli v Námestove</strong>. V Tvrdošíne je k dispozícii aj vysávač.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    <span className="font-semibold text-gray-900">Nonstop</span>
                  </div>
                  <p className="text-sm text-gray-600">Tam, kde prevádzkujeme umývarku</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-green-500" />
                    <span className="font-semibold text-gray-900">Rýchle</span>
                  </div>
                  <p className="text-sm text-gray-600">8–22 minút</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-purple-500" />
                    <span className="font-semibold text-gray-900">5 programov</span>
                  </div>
                  <p className="text-sm text-gray-600">Od 6 € do 14 €</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Car className="h-5 w-5 text-blue-500" />
                    <span className="font-semibold text-gray-900">Samoobsluha</span>
                  </div>
                  <p className="text-sm text-gray-600">Boxy / portál</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/namestovo/autoumyvaren"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
                >
                  Námestovo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/tvrdosin/autoumyvaren"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
                >
                  Tvrdošín
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-white/50 shadow-xl">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100/80 backdrop-blur-sm rounded-full mb-4">
                    <Droplets className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">5 umývacích programov</h3>
                  <p className="text-sm text-gray-600">
                    Platí na umývacích boxoch Námestovo, Tvrdošín a na automatickom umývacom portáli Námestovo
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {[
                    {
                      name: 'Platinum',
                      price: '14,00 €',
                      color: 'bg-yellow-500',
                      description:
                        'vysokotlakové predumytie, aktívna pena, šampón, umytie kolies, vysokotlakové umytie podvozku, penový vosk + zaleštenie, sušenie, 10–12 minút',
                    },
                    {
                      name: 'Exclusive',
                      price: '12,00 €',
                      color: 'bg-orange-500',
                      description:
                        'vysokotlakové predumytie, aktívna pena, šampón, umytie kolies, vysokotlakové umytie podvozku, sušenie, 9–11 minút',
                    },
                    {
                      name: 'Wax',
                      price: '9,00 €',
                      color: 'bg-purple-500',
                      description:
                        'vysokotlakové predumytie, šampón, umytie kolies, vysokotlakové umytie podvozku, vosk, sušenie, 9–11 minút',
                    },
                    {
                      name: 'Standard',
                      price: '7,00 €',
                      color: 'bg-green-500',
                      description:
                        'vysokotlakové predumytie, šampón, umytie kolies, vysokotlakové umytie podvozku, sušenie, 8–10 minút',
                    },
                    {
                      name: 'Basic',
                      price: '6,00 €',
                      color: 'bg-blue-500',
                      description:
                        'vysokotlakové predumytie, šampón, umytie kolies, sušenie, 7–9 minút',
                    },
                  ].map((program, index) => (
                    <div
                      key={index}
                      className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50 hover:bg-white transition-colors shadow-sm"
                    >
                      <div className="flex gap-3 items-start justify-between">
                        <div className={`mt-1.5 w-3 h-3 rounded-full shrink-0 ${program.color}`} />
                        <div className="min-w-0 flex-1">
                          <span className="font-semibold text-gray-900">{program.name}</span>
                          <p className="text-[11px] sm:text-xs text-gray-600 mt-1 leading-snug">
                            {program.description}
                          </p>
                        </div>
                        <div className="text-right shrink-0 pt-0.5">
                          <div className="font-bold text-gray-900 whitespace-nowrap">{program.price}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-200/50">
                  <div className="flex items-center justify-center gap-6 text-sm flex-wrap">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Karta</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-700">Hotovosť</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Google/Apple Pay</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-10 border-t border-gray-200/80 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8">
          <p className="text-sm font-medium text-gray-500">Autoumyváreň — prevádzky:</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/namestovo/autoumyvaren"
              className="inline-flex items-center gap-2 text-base font-semibold text-blue-700 hover:text-blue-800 underline-offset-4 hover:underline"
            >
              Námestovo
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <span className="hidden sm:inline text-gray-300" aria-hidden>
              |
            </span>
            <Link
              href="/tvrdosin/autoumyvaren"
              className="inline-flex items-center gap-2 text-base font-semibold text-blue-700 hover:text-blue-800 underline-offset-4 hover:underline"
            >
              Tvrdošín
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
