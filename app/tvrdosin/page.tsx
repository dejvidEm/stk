'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  CheckCircle, 
  Clock, 
  Shield, 
  Users, 
  Calendar,
  ArrowRight,
  Star,
  Award
} from 'lucide-react';

export default function DemoPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Ján Novák",
      rating: 5,
      text: "Vynikajúce služby, rýchle vybavenie a profesionálny prístup. Určite odporúčam!",
    },
    {
      name: "Mária Svobodová",
      rating: 5,
      text: "Online rezervácia je veľmi pohodlná a personál je vždy ochotný pomôcť.",
    },
    {
      name: "Peter Horváth",
      rating: 5,
      text: "Najlepšie ceny v regióne a kvalitné služby. Chodím sem už roky.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-red-600 to-brand-red-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("/images/namestovo_2.webp")',
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 -mt-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              STK Tvrdošín
              <span className="block text-brand-green-400">rýchlo a spoľahlivo</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Profesionálne služby STK a EK v Tvrdošíne s 15-ročnými skúsenosťami. 
              Rezervujte si termín online a ušetrite čas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/tvrdosin/rezervacia"
                className="bg-brand-green-500 hover:bg-brand-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center group"
              >
                Rezervovať termín
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/tvrdosin/cennik"
                className="border-2 border-white hover:bg-white hover:text-brand-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                Zobraziť cenník
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-brand-red-100 p-4 rounded-full mb-4">
                <Award className="h-8 w-8 text-brand-red-600" />
              </div>
              <div className="text-3xl font-bold text-brand-gray-900 mb-2">15+</div>
              <div className="text-brand-gray-600">rokov skúseností</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-brand-green-100 p-4 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-brand-green-600" />
              </div>
              <div className="text-3xl font-bold text-brand-gray-900 mb-2">50,000+</div>
              <div className="text-brand-gray-600">úspešných kontrol</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-brand-gray-100 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-brand-gray-600" />
              </div>
              <div className="text-3xl font-bold text-brand-gray-900 mb-2">30 min</div>
              <div className="text-brand-gray-600">priemerný čas</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-brand-green-100 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-brand-green-600" />
              </div>
              <div className="text-3xl font-bold text-brand-gray-900 mb-2">98%</div>
              <div className="text-brand-gray-600">spokojnosť zákazníkov</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Naše služby
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Poskytujeme kompletnú paletu služieb pre technickú kontrolu vozidiel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* STK Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-brand-gray-100">
              <div className="bg-brand-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-brand-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-brand-gray-900 mb-4">Technická kontrola (STK)</h3>
              <p className="text-brand-gray-600 mb-6">
                Komplexná technická prehliadka vozidla podľa platných predpisov SR.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-brand-gray-600">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-2" />
                  Kontrola brzd a podvozku
                </li>
                <li className="flex items-center text-brand-gray-600">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-2" />
                  Svetlá a signalizácia
                </li>
                <li className="flex items-center text-brand-gray-600">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-2" />
                  Riadenie a pneumatiky
                </li>
              </ul>
              <Link 
                href="/tvrdosin/sluzby"
                className="text-brand-red-600 font-semibold hover:text-brand-red-700 inline-flex items-center"
              >
                Viac informácií
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* EK Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-brand-gray-100">
              <div className="bg-brand-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-brand-green-600 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-brand-gray-900 mb-4">Emisná kontrola (EK)</h3>
              <p className="text-brand-gray-600 mb-6">
                Meranie emisií pre benzínové a dieselové vozidlá.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-brand-gray-600">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-2" />
                  Benzínové motory
                </li>
                <li className="flex items-center text-brand-gray-600">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-2" />
                  Dieselové motory
                </li>
                <li className="flex items-center text-brand-gray-600">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-2" />
                  LPG a CNG vozidlá
                </li>
              </ul>
              <Link 
                href="/tvrdosin/sluzby"
                className="text-brand-red-600 font-semibold hover:text-brand-red-700 inline-flex items-center"
              >
                Viac informácií
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Recheck Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-brand-gray-100">
              <div className="bg-brand-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-brand-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-brand-gray-900 mb-4">Opakovaná kontrola</h3>
              <p className="text-brand-gray-600 mb-6">
                Kontrola odstránenia závad do 30 dní od prvej kontroly.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-brand-gray-600">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-2" />
                  Bez čakania v rade
                </li>
                <li className="flex items-center text-brand-gray-600">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-2" />
                  Zľavnená cena
                </li>
                <li className="flex items-center text-brand-gray-600">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-2" />
                  Rýchle vybavenie
                </li>
              </ul>
              <Link 
                href="/tvrdosin/sluzby"
                className="text-brand-red-600 font-semibold hover:text-brand-red-700 inline-flex items-center"
              >
                Viac informácií
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Čo hovoria naši zákazníci
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-brand-gray-700 mb-6 italic">
                "{testimonials[currentSlide].text}"
              </blockquote>
              <div className="font-semibold text-brand-gray-900">
                {testimonials[currentSlide].name}
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-brand-red-600' : 'bg-brand-gray-300'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pripravený na technickú kontrolu v Tvrdošíne?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Rezervujte si termín v STK Tvrdošín online a ušetrite čas. Naši experti sa postarajú o váš vozidlo.
          </p>
          <Link 
            href="/tvrdosin/rezervacia"
            className="bg-brand-green-500 hover:bg-brand-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center group"
          >
            Rezervovať termín
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
