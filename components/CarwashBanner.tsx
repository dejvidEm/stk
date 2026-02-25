'use client';

import Link from 'next/link';
import { Droplets, Car, Sparkles, Clock, ArrowRight, Zap } from 'lucide-react';

export default function CarwashBanner() {
  return (
    <section className="bg-gray-50 py-16 relative overflow-hidden">
      {/* Blue Blobs Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden border border-white/50 shadow-xl">
            {/* Image Header with Overlay */}
            <div className="relative h-56 overflow-hidden">
              <img 
                src="/images/namestovo.webp" 
                alt="Autoumyváreň"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.8)' }}>
                  Autoumyváreň
                </h2>
              </div>
            </div>
            
            <div className="p-8">
            <p className="text-xl md:text-2xl mb-6 text-gray-700 leading-relaxed">
              Nonstop umývacie boxy s moderným vybavením. 
              <span className="block mt-2 text-lg text-gray-600">
                Rýchle, efektívne a šetrné umytie vášho vozidla.
              </span>
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  <span className="font-semibold text-gray-900">Nonstop</span>
                </div>
                <p className="text-sm text-gray-600">Dostupné 24/7</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-green-500" />
                  <span className="font-semibold text-gray-900">Rýchle</span>
                </div>
                <p className="text-sm text-gray-600">8-22 minút</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-purple-500" />
                  <span className="font-semibold text-gray-900">5 programov</span>
                </div>
                <p className="text-sm text-gray-600">Od 6€ do 14€</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <Car className="h-5 w-5 text-blue-500" />
                  <span className="font-semibold text-gray-900">Samoobsluha</span>
                </div>
                <p className="text-sm text-gray-600">Jednoduchá obsluha</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tvrdosin/autoumyvaren"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                Zistiť viac
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/tvrdosin/autoumyvaren#programy"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-white transition-all duration-200 shadow-md"
              >
                Programy a cenník
              </Link>
            </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-white/50 shadow-xl">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100/80 backdrop-blur-sm rounded-full mb-4">
                    <Droplets className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">5 umývacích programov</h3>
                  <p className="text-lg text-gray-600">Od základného po prémiový</p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {[
                    { name: 'Platinum', price: '14,00 €', time: '22-25 min', color: 'bg-yellow-500' },
                    { name: 'Exclusive', price: '12,00 €', time: '18-22 min', color: 'bg-orange-500' },
                    { name: 'Wax', price: '9,00 €', time: '15-18 min', color: 'bg-purple-500' },
                    { name: 'Standard', price: '7,00 €', time: '12-16 min', color: 'bg-green-500' },
                    { name: 'Basic', price: '6,00 €', time: '8-12 min', color: 'bg-blue-500' }
                  ].map((program, index) => (
                    <div 
                      key={index}
                      className="bg-white/80 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between border border-gray-200/50 hover:bg-white transition-colors shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${program.color}`}></div>
                        <span className="font-semibold text-gray-900">{program.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{program.price}</div>
                        <div className="text-xs text-gray-600">{program.time}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-200/50">
                  <div className="flex items-center justify-center gap-6 text-sm">
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
      </div>
    </section>
  );
}

