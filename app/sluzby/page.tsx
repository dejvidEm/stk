'use client';

import Link from 'next/link';
import { useState } from 'react';
import { 
  Shield, 
  Leaf, 
  RotateCcw, 
  CheckCircle, 
  Clock, 
  FileText,
  Car,
  Truck,
  Bike,
  Tractor,
  Bus,
  Container,
  Zap,
  Award,
  Fuel,
  AlertTriangle,
  Info
} from 'lucide-react';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('stk');

  const services = {
    stk: {
      title: 'Technická kontrola (STK)',
      icon: Shield,
      description: 'Komplexná technická prehliadka vozidla podľa platných predpisov Slovenskej republiky',
      duration: '30-45 minút',
      validity: '2 roky (osobné vozidlá), 1 rok (nákladné vozidlá)',
      checks: [
        'Brzdový systém a brzdy',
        'Riadenie a geometria kolies',
        'Svetlomety a svetelná signalizácia',
        'Pneumatiky a disky',
        'Podvozok a zavesenie',
        'Karoséria a nástavby',
        'Motor a prevodovka',
        'Bezpečnostné prvky',
        'Exhaláty a hlučnosť'
      ],
      requirements: [
        'Osvedčenie o technickom preukaze, časť I alebo časť II (papierový alebo kartička)',
      ]
    },
    ek: {
      title: 'Emisná kontrola (EK)',
      icon: Leaf,
      description: 'Meranie množstva škodlivých látok v exhaláte vozidla',
      duration: '15-20 minút',
      validity: '2 roky (benzínové motory), 1 rok (dieselové motory)',
      checks: [
        'Meranie CO pre benzínové motory',
        'Kontrola funkčnosti katalyzátora',
        'Kontrola tesnosti výfukového systému',
        'Vizuálna kontrola emisného systému'
      ],
      requirements: [
        'Osvedčenie o technickom preukaze, časť I alebo časť II (papierový alebo kartička)',
        'Pri opakovanej emisnej kontrole prípadne protokol alebo oznámenie z predchádzajúcej EK podľa situácie',
      ]
    },
    recheck: {
      title: 'Ostatné kontroly',
      icon: RotateCcw,
      description: 'Opakovaná kontrola závad, administratívna kontrola a predkontrola pred riadnou STK alebo EK.',
      duration: 'Podľa typu kontroly (spravidla 15–45 minút)',
      validity: 'Podľa typu kontroly',
      checks: [
        'Opakovaná kontrola',
        'Administratívna kontrola',
        'Predkontrola'
      ],
      requirements: [
        'Osvedčenie o technickom preukaze, časť I alebo časť II (papierový alebo kartička)',
        'Pri opakovanej kontrole prípadne protokol alebo oznámenie z predchádzajúcej STK podľa situácie',
        'Pri administratívnej kontrole a predkontrole odporúčame dohodnúť rozsah vopred (telefonicky alebo na mieste)',
      ]
    }
  };

  const vehicleTypes = [
    {
      type: 'Osobné vozidlá',
      icon: Car,
      frequency: 'Každé 2 roky',
      note: 'Prvá STK po 4 rokoch od výroby'
    },
    {
      type: 'Nákladné vozidlá',
      icon: Truck,
      frequency: 'Každý rok',
      note: 'Prvá STK po 1 roku od výroby'
    },
    {
      type: 'Motocykle',
      icon: Bike,
      frequency: 'Každé 4 roky',
      note: 'Prvá STK po 4 rokoch od výroby'
    },
    {
      type: 'Traktor',
      icon: Tractor,
      frequency: 'Každé 4 roky',
      note: 'Platí pre traktory zaradené do premávky na pozemných komunikáciách.'
    },
    {
      type: 'Autobus',
      icon: Bus,
      frequency: 'Každý rok',
      note: 'Prvá STK po 1 roku od výroby'
    },
    {
      type: 'Príves/Náves',
      icon: Container,
      frequency: 'Každé 2 roky (bežné prívesy)',
      note: 'Interval podľa celkovej hmotnostnej kategórie prívesu alebo návesu.'
    }
  ];

  const lehotyKontrolHref = '/#nase-sluzby';

  const vehiclesWithoutEk = [
    {
      type: 'Plne elektrické vozidlá',
      icon: Zap,
      description: 'Vozidlá výhradne s elektrickým pohonom (bez spaľovacieho motora).',
      note: 'Emisná kontrola (EK) sa nevyžaduje — technická kontrola (STK) podľa kategórie vozidla áno.'
    },
    {
      type: 'Veterány',
      icon: Award,
      description: 'Historické a zberateľské vozidlá podľa zákona.',
      note: 'Emisná kontrola sa u nich nevyžaduje v bežnom režime ako pri štandardných vozidlách.'
    },
    {
      type: 'Benzínové vozidlá s r. v. pred 1971',
      icon: Fuel,
      description: 'Vozidlá so zážihovým motorom s rokom výroby pred rokom 1971.',
      note: 'Z rozsahu povinnej emisnej kontroly vylúčené — STK podľa pravidiel pre danú kategóriu.'
    }
  ];

  const currentService = services[activeTab as keyof typeof services];
  const IconComponent = currentService.icon;

  return (
    <div className="pt-[20px]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-red-600 to-brand-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Naše služby
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Kompletné služby technickej kontroly vozidiel s najmodernejším vybavením
            </p>
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 bg-gray-100 p-2 rounded-xl">
            {Object.entries(services).map(([key, service]) => {
              const IconComp = service.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === key
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <IconComp className="h-5 w-5" />
                  <span className="hidden sm:inline">{service.title}</span>
                  <span className="sm:hidden">{key === 'recheck' ? 'Ostatné' : key.toUpperCase()}</span>
                </button>
              );
            })}
          </div>

          {/* Active Service Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-100 p-4 rounded-xl">
                <IconComponent className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{currentService.title}</h2>
                <p className="text-gray-600">{currentService.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Service Details */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center space-x-2 mb-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <h3 className="font-semibold text-gray-900">Trvanie</h3>
                    </div>
                    <p className="text-gray-700">{currentService.duration}</p>
                  </div>
                  {activeTab !== 'recheck' && (
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <div className="flex items-center space-x-2 mb-3">
                        <Shield className="h-5 w-5 text-green-600" />
                        <h3 className="font-semibold text-gray-900">Platnosť</h3>
                      </div>
                      <p className="text-gray-700">{currentService.validity}</p>
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {activeTab === 'recheck' ? 'Typy kontrol' : 'Čo kontrolujeme'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentService.checks.map((check, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{check}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div>
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <FileText className="h-5 w-5 text-orange-600" />
                    <h3 className="font-semibold text-gray-900">Potrebné doklady</h3>
                  </div>
                  <ul className="space-y-2">
                    {currentService.requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {activeTab === 'recheck' && (
              <div className="mt-8 space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                    <h4 className="mb-2 font-semibold text-blue-900">Opakovaná kontrola</h4>
                    <p className="text-sm leading-relaxed text-blue-900">
                      Overenie odstránenia závad zistených pri predchádzajúcej STK. Pri určitých závadách ju treba stihnúť do{' '}
                      <strong>60 kalendárnych dní</strong> podľa oznámenia.
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <h4 className="mb-2 font-semibold text-gray-900">Administratívna kontrola</h4>
                    <p className="text-sm leading-relaxed text-gray-700">
                      Kontrola podľa dohodnutého administratívneho alebo technického rozsahu — vhodná pri zmene údajov, dovezených vozidlách alebo podľa pokynov orgánov.
                    </p>
                  </div>
                  <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                    <h4 className="mb-2 font-semibold text-green-900">Predkontrola</h4>
                    <p className="text-sm leading-relaxed text-green-900">
                      Prípravná kontrola pred riadnou STK a/alebo EK v dohodnutom rozsahu (technická časť, emisná časť alebo oboje). Ceny nájdete v cenníku príslušnej prevádzky.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kategórie vozidiel
            </h2>
            <p className="text-xl text-gray-600">
              Rôzne kategórie vozidiel majú rozdielne požiadavky na kontrolu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicleTypes.map((vehicle, index) => {
              const VehicleIcon = vehicle.icon;
              return (
                <Link
                  key={index}
                  href={lehotyKontrolHref}
                  className="group flex flex-col rounded-xl bg-white p-8 text-center shadow-lg transition-shadow hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red-600"
                >
                  <div className="flex flex-1 flex-col">
                    <div className="bg-blue-100 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                      <VehicleIcon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{vehicle.type}</h3>
                    <div className="mb-4 rounded-lg bg-gray-50 p-4">
                      <p className="font-semibold text-gray-900">{vehicle.frequency}</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Info className="mt-1 h-4 w-4 flex-shrink-0 text-blue-500" />
                      <p className="text-left text-sm text-gray-600">{vehicle.note}</p>
                    </div>
                  </div>
                  <div className="mt-0 max-h-0 overflow-hidden opacity-0 transition-[max-height,margin-top,opacity] duration-200 group-hover:mt-4 group-hover:max-h-16 group-hover:opacity-100 group-focus-visible:mt-4 group-focus-visible:max-h-16 group-focus-visible:opacity-100">
                    <span className="block border-t border-gray-100 pt-3 text-sm font-semibold text-blue-600 underline decoration-2 underline-offset-4">
                      Všetky kategórie
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Vozidlá bez povinnej emisnej kontroly (EK)
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pri týchto vozidlách sa emisná kontrola nevykonáva — technická kontrola (STK) môže byť stále povinná podľa kategórie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehiclesWithoutEk.map((vehicle, index) => {
              const VehicleIcon = vehicle.icon;
              return (
                <div key={`no-ek-${index}`} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-green-100">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <VehicleIcon className="h-8 w-8 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{vehicle.type}</h3>
                  <p className="text-gray-600 mb-4">{vehicle.description}</p>
                  <div className="bg-green-50 rounded-lg p-4 mb-4">
                    <p className="font-semibold text-green-900">EK sa nevyžaduje</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Leaf className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-600 text-left">{vehicle.note}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ako prebieha kontrola
            </h2>
            <p className="text-xl text-gray-600">
              Jednoduchý proces v niekoľkých krokoch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Rezervácia',
                description: 'Rezervujte si termín online alebo telefonicky',
                color: 'bg-blue-500'
              },
              {
                step: '2',
                title: 'Príchod',
                description: 'Príďte s potrebnými dokladmi a vozidlom',
                color: 'bg-green-500'
              },
              {
                step: '3',
                title: 'Kontrola',
                description: 'Vykonáme odbornú kontrolu vozidla',
                color: 'bg-orange-500'
              },
              {
                step: '4',
                title: 'Výsledok',
                description: 'Získate protokol a nálepku (pri úspešnom absolvovaní)',
                color: 'bg-purple-500'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className={`${step.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold`}>
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-12 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dôležité upozornenie</h3>
                <p className="text-gray-700 mb-4">
                  Jazda s vozidlom bez platnej STK/EK je porušením zákona a môže viesť k pokute až do výšky 
                  <strong> 1500 EUR</strong>. Okrem toho poisťovne môžu odmietnuť plnenie v prípade nehody.
                </p>
                <div className="bg-red-100 p-4 rounded-lg">
                  <p className="text-red-800 font-semibold">
                    Nezabudnite si včas rezervovať termín kontroly pred vypršaním platnosti!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}