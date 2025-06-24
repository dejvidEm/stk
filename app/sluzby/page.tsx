'use client';

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
        'Technický preukaz vozidla',
        'Doklad o poistení',
        'Platný vodičský preukaz',
        'Predchádzajúci protokol STK (ak existuje)'
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
        'Meranie nepriesvitnosti pre dieselové motory',
        'Kontrola funkčnosti katalyzátora',
        'Kontrola tesnosti výfukového systému',
        'Vizuálna kontrola emisného systému'
      ],
      requirements: [
        'Technický preukaz vozidla',
        'Doklad o poistení',
        'Platný vodičský preukaz',
        'Predchádzajúci protokol EK (ak existuje)'
      ]
    },
    recheck: {
      title: 'Opakovaná kontrola',
      icon: RotateCcw,
      description: 'Kontrola odstránenia závad zistených pri prvej kontrole',
      duration: '15-30 minút',
      validity: 'Podľa typu závady',
      checks: [
        'Kontrola odstránenia zistených závad',
        'Overenie správnosti opráv',
        'Čiastočná kontrola súvisiacich systémov',
        'Vydanie nálepky pri úspešnom absolvovaní'
      ],
      requirements: [
        'Protokol z prvej kontroly',
        'Technický preukaz vozidla',
        'Doklad o vykonaných opravách',
        'Doklad o poistení'
      ]
    }
  };

  const vehicleTypes = [
    {
      type: 'Osobné vozidlá',
      icon: Car,
      description: 'Vozidlá kategórie M1 do 3,5t',
      frequency: 'Každé 2 roky',
      note: 'Prvá STK po 4 rokoch od výroby'
    },
    {
      type: 'Nákladné vozidlá',
      icon: Truck,
      description: 'Vozidlá kategórie N nad 3,5t',
      frequency: 'Každý rok',
      note: 'Prvá STK po 1 roku od výroby'
    },
    {
      type: 'Motocykle',
      icon: Bike,
      description: 'Vozidlá kategórie L',
      frequency: 'Každé 2 roky',
      note: 'Prvá STK po 4 rokoch od výroby'
    }
  ];

  const currentService = services[activeTab as keyof typeof services];
  const IconComponent = currentService.icon;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
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
                  <span className="sm:hidden">{key.toUpperCase()}</span>
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
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center space-x-2 mb-3">
                      <Shield className="h-5 w-5 text-green-600" />
                      <h3 className="font-semibold text-gray-900">Platnosť</h3>
                    </div>
                    <p className="text-gray-700">{currentService.validity}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Čo kontrolujeme</h3>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicleTypes.map((vehicle, index) => {
              const VehicleIcon = vehicle.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <VehicleIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{vehicle.type}</h3>
                  <p className="text-gray-600 mb-4">{vehicle.description}</p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="font-semibold text-gray-900">{vehicle.frequency}</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Info className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
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