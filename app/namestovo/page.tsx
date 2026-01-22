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
  Award,
  AlertTriangle,
  Heart,
  Highlighter,
  Wrench,
  Flame,
  Info,
  Search,
  FileCheck,
  Fingerprint
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
            backgroundImage: 'url("/images/namestovo.webp")',
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 -mt-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              STK Námestovo
              <span className="block text-brand-green-400">rýchlo a spoľahlivo</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Profesionálne služby STK a EK v Námestove fungujúce od roku 2002. 
              Rezervujte si termín online a ušetrite čas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/namestovo/rezervacia"
                className="bg-brand-green-500 hover:bg-brand-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center group"
              >
                Rezervovať termín
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/namestovo/cennik"
                className="border-2 border-white hover:bg-white hover:text-brand-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                Zobraziť cenník
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Prepaid Card Promotion Banner */}
      <section className="bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 text-white py-8 shadow-xl relative overflow-visible">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 flex-1">
              <div className="bg-white/30 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <Star className="h-10 w-10 fill-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                  Predplatená karta - Bonus 10-25%
                </h2>
                <p className="text-lg text-white/95">
                  Ušetrite pri pravidelnom umývaní vozidla s predplatenou kartou v našej autoumyvárni
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/namestovo/autoumyvaren"
                className="bg-white text-yellow-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors cursor-pointer shadow-lg"
              >
                Zistiť viac
              </Link>
            </div>
            <div className="flex-shrink-0 relative">
              <img 
                src="/Karta1.jpg" 
                alt="Predplatená karta" 
                className="h-48 md:h-64 lg:h-80 w-auto rounded-xl shadow-2xl object-contain border-2 border-white/30 -my-8 md:-my-12 lg:-my-16"
              />
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
              <div className="text-3xl font-bold text-brand-gray-900 mb-2">2002</div>
              <div className="text-brand-gray-600">funguje od roku</div>
              <div className="text-sm text-brand-gray-500 mt-1">(Tvrdošín 2011, Lokca 2024)</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-brand-green-100 p-4 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-brand-green-600" />
              </div>
              <div className="text-3xl font-bold text-brand-gray-900 mb-2">500 000+</div>
              <div className="text-brand-gray-600">úspešných kontrol</div>
              <div className="text-sm text-brand-gray-500 mt-1">za všetky prevádzky</div>
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
                href="/namestovo/sluzby"
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
                href="/namestovo/sluzby"
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
                href="/namestovo/sluzby"
                className="text-brand-red-600 font-semibold hover:text-brand-red-700 inline-flex items-center"
              >
                Viac informácií
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory Equipment Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-100/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Povinná výbava vozidla
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Podľa platných predpisov SR musí mať každé vozidlo povinnú výbavu. 
              Skontrolujte, či máte všetko potrebné pred technickou kontrolou.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* First Aid Kit */}
            <div className="bg-brand-gray-50 rounded-xl p-6 border border-brand-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Lekárnička</h3>
              <p className="text-brand-gray-600 text-sm mb-3">
                Povinná pre všetky vozidlá. Musí obsahovať základné obväzové materiály a dezinfekciu.
              </p>
              <div className="flex items-center text-sm text-brand-gray-500">
                <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2" />
                <span>Povinné pre všetky vozidlá</span>
              </div>
            </div>

            {/* Warning Triangle */}
            <div className="bg-brand-gray-50 rounded-xl p-6 border border-brand-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Výstražný trojuholník</h3>
              <p className="text-brand-gray-600 text-sm mb-3">
                Povinný pre všetky vozidlá. Musí byť umiestnený pri havárii minimálne 50 m za vozidlom.
              </p>
              <div className="flex items-center text-sm text-brand-gray-500">
                <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2" />
                <span>Povinné pre všetky vozidlá</span>
              </div>
            </div>

            {/* Reflective Vest */}
            <div className="bg-brand-gray-50 rounded-xl p-6 border border-brand-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-yellow-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Highlighter className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Reflexná vesta</h3>
              <p className="text-brand-gray-600 text-sm mb-3">
                Povinná pre všetky vozidlá. Musí byť ľahko dostupná (nie v kufri).
              </p>
              <div className="flex items-center text-sm text-brand-gray-500">
                <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2" />
                <span>Povinné pre všetky vozidlá</span>
              </div>
            </div>

            {/* Spare Tire */}
            <div className="bg-brand-gray-50 rounded-xl p-6 border border-brand-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Náhradné koleso</h3>
              <p className="text-brand-gray-600 text-sm mb-3">
                Odporúčané pre všetky vozidlá. Alternatívou môže byť opravná sada alebo kompresor.
              </p>
              <div className="flex items-center text-sm text-brand-gray-500">
                <Info className="h-4 w-4 text-blue-500 mr-2" />
                <span>Odporúčané</span>
              </div>
            </div>

            {/* Fire Extinguisher */}
            <div className="bg-brand-gray-50 rounded-xl p-6 border border-brand-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Flame className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Hasící prístroj</h3>
              <p className="text-brand-gray-600 text-sm mb-3">
                Povinný pre nákladné vozidlá a autobusy. Odporúčaný pre všetky vozidlá.
              </p>
              <div className="flex items-center text-sm text-brand-gray-500">
                <AlertTriangle className="h-4 w-4 text-orange-500 mr-2" />
                <span>Povinné pre nákladné vozidlá</span>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-brand-green-50 rounded-xl p-6 border-2 border-brand-green-200 hover:shadow-lg transition-shadow">
              <div className="bg-brand-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-brand-green-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Dodatočné informácie</h3>
              <p className="text-brand-gray-600 text-sm mb-3">
                Pri technickej kontrole sa kontroluje aj prítomnosť povinnej výbavy. 
                Uistite sa, že máte všetko potrebné pred príchodom.
              </p>
              <div className="flex items-center text-sm text-brand-green-700 font-medium">
                <CheckCircle className="h-4 w-4 text-brand-green-600 mr-2" />
                <span>Kontroluje sa pri STK</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">
            <div className="flex items-start gap-4">
              <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-brand-gray-900 mb-2">Dôležité upozornenie</h4>
                <p className="text-brand-gray-700 text-sm">
                  Chýbajúca povinná výbava môže byť dôvodom neúspešnej technickej kontroly. 
                  Pred príchodom na STK skontrolujte, či máte všetky povinné predmety v vozidle. 
                  Výbava musí byť funkčná a v dobrom stave.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Originality Check Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Kontrola originality vozidla
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Overenie originality a autenticity vozidla podľa platných predpisov SR
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Main Info Card */}
            <div className="bg-gradient-to-br from-brand-red-50 to-brand-red-100 rounded-xl p-8 border-2 border-brand-red-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-red-600 w-16 h-16 rounded-lg flex items-center justify-center">
                  <Fingerprint className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-gray-900">Čo je kontrola originality?</h3>
                  <p className="text-brand-gray-600">Overenie autenticity vozidla</p>
                </div>
              </div>
              <p className="text-brand-gray-700 mb-6">
                Kontrola originality je povinná kontrola, ktorá overuje, či vozidlo nie je kradnuté, 
                či všetky identifikačné čísla (VIN, čísla motoru, karosérie) zodpovedajú údajom v technickom preukaze 
                a či vozidlo nebolo pozmenené alebo upravené neoprávnene.
              </p>
              <div className="bg-white rounded-lg p-4 border border-brand-red-200">
                <p className="text-sm font-semibold text-brand-gray-900 mb-2">Kedy je potrebná:</p>
                <ul className="space-y-1 text-sm text-brand-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-brand-green-600 mr-2 flex-shrink-0" />
                    Pri prvej registrácii vozidla v SR
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-brand-green-600 mr-2 flex-shrink-0" />
                    Pri zmene majiteľa vozidla
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-brand-green-600 mr-2 flex-shrink-0" />
                    Pri pochybnostiach o originality vozidla
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-brand-green-600 mr-2 flex-shrink-0" />
                    Pri obnove technického preukazu
                  </li>
                </ul>
              </div>
            </div>

            {/* Process Card */}
            <div className="bg-white rounded-xl p-8 border-2 border-brand-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-green-100 w-16 h-16 rounded-lg flex items-center justify-center">
                  <FileCheck className="h-8 w-8 text-brand-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-gray-900">Ako prebieha kontrola?</h3>
                  <p className="text-brand-gray-600">Jednoduchý a rýchly proces</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-red-100 text-brand-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-gray-900 mb-1">Kontrola VIN čísla</h4>
                    <p className="text-brand-gray-600 text-sm">
                      Overenie identifikačného čísla vozidla na karosérii a porovnanie s technickým preukazom
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-red-100 text-brand-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-gray-900 mb-1">Kontrola čísla motoru</h4>
                    <p className="text-brand-gray-600 text-sm">
                      Overenie čísla motoru a jeho zhody s údajmi v technickom preukaze
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-red-100 text-brand-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-gray-900 mb-1">Vizuálna kontrola</h4>
                    <p className="text-brand-gray-600 text-sm">
                      Kontrola známok manipulácie, poškodenia alebo neoprávnených úprav vozidla
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-red-100 text-brand-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-gray-900 mb-1">Vydanie protokolu</h4>
                    <p className="text-brand-gray-600 text-sm">
                      Vydanie oficiálneho protokolu o kontrole originality s platnosťou 3 mesiace
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Requirements and Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-brand-gray-50 rounded-xl p-6 border border-brand-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Search className="h-6 w-6 text-brand-blue-600" />
                <h3 className="text-xl font-bold text-brand-gray-900">Potrebné doklady</h3>
              </div>
              <ul className="space-y-2 text-brand-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Technický preukaz vozidla (časť I a časť II)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Občiansky preukaz majiteľa vozidla</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Vozidlo musí byť prítomné</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Doklad o poistení (ak je požadovaný)</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Info className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-bold text-brand-gray-900">Dôležité informácie</h3>
              </div>
              <ul className="space-y-2 text-brand-gray-700">
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Doba kontroly: 15-20 minút</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Platnosť protokolu: 3 mesiace</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Vykonáva certifikovaný technik</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Povinné pre určité prípady registrácie</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <Link 
              href="/namestovo/kontakt"
              className="inline-flex items-center px-8 py-4 bg-brand-red-600 hover:bg-brand-red-700 text-white font-semibold rounded-lg transition-colors"
            >
              Kontaktovať nás pre kontrolu originality
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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
            Pripravený na technickú kontrolu v Námestove?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Rezervujte si termín v STK Námestovo online a ušetrite čas. Naši experti sa postarajú o váš vozidlo.
          </p>
          <Link 
            href="/namestovo/rezervacia"
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
