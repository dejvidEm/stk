'use client';

import { useState } from 'react';
import { 
  Droplets, 
  Car, 
  Sparkles, 
  Shield, 
  Clock, 
  CheckCircle,
  Star,
  Zap,
  Brush,
  Wind,
  Sun,
  Leaf,
  AlertTriangle
} from 'lucide-react';

export default function CarWashPage() {
  const [selectedProgram, setSelectedProgram] = useState('basic');

  const washPrograms = {
    basic: {
      title: 'Basic (Program 5)',
      price: '6,00 €',
      duration: '8-12 min',
      icon: Droplets,
      color: 'blue',
      features: [
        'Šampón, umytie kolies, sušenie',
        'Vysokotlakové predumytie'
      ],
      description: 'Základné umytie vozidla s kvalitnou aktívnou penou.'
    },
    standard: {
      title: 'Standard (Program 4)',
      price: '7,00 €',
      duration: '12-16 min',
      icon: Sparkles,
      color: 'green',
      features: [
        'Šampón, umytie kolies, sušenie',
        'Vysokotlakové predumytie',
        'Podvozok'
      ],
      description: 'Štandardné umytie s ochranou podvozku.'
    },
    wax: {
      title: 'Wax (Program 3)',
      price: '9,00 €',
      duration: '15-18 min',
      icon: Shield,
      color: 'purple',
      features: [
        'Šampón, umytie kolies, sušenie',
        'Vysokotlakové predumytie',
        'Podvozok',
        'Vosk'
      ],
      description: 'Umytie s ochranným voskom pre dlhšiu ochranu laku.'
    },
    exclusive: {
      title: 'Exclusive (Program 2)',
      price: '12,00 €',
      duration: '18-22 min',
      icon: Star,
      color: 'orange',
      features: [
        'Šampón, umytie kolies, sušenie',
        'Vysokotlakové predumytie',
        'Podvozok',
        'Vosk',
        'Aktívna pena'
      ],
      description: 'Prémiový program s aktívnou penou pre dokonalú čistotu.'
    },
    platinum: {
      title: 'Platinum (Program 1)',
      price: '14,00 €',
      duration: '20-25 min',
      icon: Star,
      color: 'yellow',
      features: [
        'Šampón, umytie kolies, sušenie',
        'Vysokotlakové predumytie',
        'Podvozok',
        'Aktívna pena',
        'Penový vosk + zaleštenie'
      ],
      description: 'Najkomplexnejší program s penový voskom a zaleštením.'
    }
  };

  const additionalServices = [
    {
      title: 'Vysávanie interiéru',
      price: '3,00 €',
      icon: Wind,
      description: 'Kompletné vysávanie sedadiel, kobercov a kufra'
    },
    {
      title: 'Čistenie okien',
      price: '2,00 €',
      icon: Sun,
      description: 'Umytie a vyčistenie všetkých okien zvnútra aj zvonka'
    },
    {
      title: 'Osvieženie interiéru',
      price: '2,50 €',
      icon: Leaf,
      description: 'Aplikácia osviežovača vzduchu do interiéru vozidla'
    },
    {
      title: 'Ručné dokončenie',
      price: '5,00 €',
      icon: Brush,
      description: 'Ručné dočistenie problematických miest'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Moderné technológie',
      description: 'Najnovšie zariadenie s automatickým dávkovaním chemie'
    },
    {
      icon: Droplets,
      title: 'Ekologické prípravky',
      description: 'Používame len biodegradabilné čistiace prostriedky'
    },
    {
      icon: Clock,
      title: 'Rýchle umytie',
      description: 'Efektívne programy šetriace váš čas'
    },
    {
      icon: Shield,
      title: 'Ochrana laku',
      description: 'Kvalitné vosky a ochranné prostriedky'
    }
  ];

  const currentProgram = washPrograms[selectedProgram as keyof typeof washPrograms];
  const IconComponent = currentProgram.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Droplets className="h-12 w-12" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Autoumyváreň
              </h1>
            </div>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Moderná samoobslužná autoumyváreň s najnovšími technológiami
            </p>
          </div>
        </div>
      </section>

      {/* Wash Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Umývacie programy
            </h2>
            <p className="text-xl text-gray-600">
              Vyberte si program podľa vašich potrieb
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {Object.entries(washPrograms).map(([key, program]) => {
              const ProgramIcon = program.icon;
              return (
                <div
                  key={key}
                  onClick={() => setSelectedProgram(key)}
                  className={`bg-white rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg border-2 ${
                    selectedProgram === key 
                      ? `border-${program.color}-500 shadow-lg` 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`bg-${program.color}-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <ProgramIcon className={`h-6 w-6 text-${program.color}-600`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{program.title}</h3>
                  <div className="space-y-1 mb-4">
                    <div className={`text-2xl font-bold text-${program.color}-600`}>{program.price}</div>
                    <div className="text-sm text-gray-500">{program.duration}</div>
                  </div>
                  <p className="text-gray-600 text-sm">{program.description}</p>
                </div>
              );
            })}
          </div>

          {/* Selected Program Details */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className={`bg-${currentProgram.color}-100 w-16 h-16 rounded-xl flex items-center justify-center`}>
                <IconComponent className={`h-8 w-8 text-${currentProgram.color}-600`} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{currentProgram.title}</h3>
                <div className="flex items-center gap-4 mt-1">
                  <span className={`text-3xl font-bold text-${currentProgram.color}-600`}>
                    {currentProgram.price}
                  </span>
                  <span className="text-gray-500">({currentProgram.duration})</span>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Čo zahŕňa:</h4>
                <ul className="space-y-2">
                  {currentProgram.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Popis:</h4>
                <p className="text-gray-700 leading-relaxed">{currentProgram.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Doplnkové služby
            </h2>
            <p className="text-xl text-gray-600">
              Kompletné služby pre dokonalú čistotu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <ServiceIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prečo si vybrať našu umyváreň
            </h2>
            <p className="text-xl text-gray-600">
              Kvalita, rýchlosť a spokojnosť zákazníkov
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FeatureIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Opening Hours & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Otváracie hodiny</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Pondelok - Piatok:</span>
                  <span className="text-gray-700">6:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Sobota:</span>
                  <span className="text-gray-700">7:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Nedeľa:</span>
                  <span className="text-gray-700">8:00 - 20:00</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Pozor:</strong> Autoumyváreň je plne automatizovaná a funguje 24/7. 
                  Uvedené hodiny sú pre technickú podporu a doplňovanie materiálov.
                </p>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Car className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Praktické informácie</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Platba mincami, kartou aj bezkontaktne</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Vhodné pre všetky typy vozidiel</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Osvetlené pre večerné hodiny</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Pokrytie kamerovým systémom</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Prístup priamo z areálu STK</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Instructions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Všeobecné obchodné podmienky
            </h2>
            <p className="text-xl text-gray-600">
              Pokyny na obsluhu a dôležité informácie
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Terms */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                    <Zap className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Povinnosti zákazníka</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Zákazník/vodič je povinný pred umývaním vozidla upozorniť na všetky skutočnosti</li>
                      <li>• Povinné časti na vozidle sa musia pred vjazdom do autoumyvárne odstrániť</li>
                      <li>• Vonkajšie spätné zrkadlá musia byť sklopené, antény zasunuté</li>
                      <li>• Okná, sklápajúce strechy a iné otvory na vozidle musia byť pevne uzavreté</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Prevádzkové pokyny</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Prevádzkovateľ neručí za škody v týchto prípadoch</li>
                      <li>• Pripevnené časti (napr. predná a zadná maska, bočné prahy, prahové lišty, zadný spojler)</li>
                      <li>• Ktoré nie sú sériovo alebo neboli riadne upevnené</li>
                      <li>• Poškodenia karosérie, škrabance alebo prelínanie</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Zodpovednosť</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Zákazník/vodič je povinný oznámiť prevádzkovateľovi nároky na náhradu škody ešte pred opustením areálu</li>
                      <li>• V prípade škody vzniknutej pri procese umývania ručí prevádzkovateľ umývacieho zariadenia za priamu škodu</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Instructions */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <Car className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Pokyny na obsluhu</h3>
                    <ol className="text-sm text-gray-700 space-y-2">
                      <li>1. Zakúpte si umývací program pri samoobslužnom stojane na ovládacom paneli</li>
                      <li>2. Po zakúpení programu sa automaticky otvorí brána umývacej haly</li>
                      <li>3. Stlačte na spustenie umývacieho programu tlačidlo "START"</li>
                      <li>4. Autom zajdite rovno do stredu umývacej linky</li>
                      <li>5. Vypnite motor, zatiahnite ručnú brzdu na automatickej prevodovke zvoľte "P"</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-lg flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Bezpečnostné pokyny</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Počas umývania nesmie byť v aute žiadne osoby</li>
                      <li>• Pokiaš umývania nevstupujte do pracovného priestoru umývacej haly</li>
                      <li>• V prípade nebezpečenstva stlačte núdzové tlačidlo "STOP" pri dverách</li>
                      <li>• Sklopte spätné zrkadlá, zasuňte alebo odmontujte antény</li>
                      <li>• Vozidlá s otvorenou úložnou plochou, zadným rezervným kolesom je zakázané umývať!</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Dodatočné informácie</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Platba: Google Pay, Apple Pay, bezkontaktne, mince</li>
                      <li>• Maximálne prípustné rozmery: výška 2,0m, šírka 2,3m</li>
                      <li>• Vonkajší rozchod kolies minimálne 2,0m</li>
                      <li>• V prípade klauzuly týchto VOP neúčinnou stane, nebude mať táto skutočnosť vplyv na platnosť ostatných</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Platobné možnosti</h3>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
                <span className="text-gray-700">Bezkontaktne</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-500 rounded"></div>
                <span className="text-gray-700">Mince</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded"></div>
                <span className="text-gray-700">Google Pay</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded"></div>
                <span className="text-gray-700">Apple Pay</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pripravení na umytie vašeho vozidla?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Navštívte našu autoumyváreň priamo v areáli STK Tvrdošín
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tvrdosin/kontakt"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-white text-blue-600 hover:bg-gray-50 transition-colors"
            >
              Ako sa k nám dostať
            </a>
            <a
              href="/tvrdosin/sluzby"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Všetky naše služby
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}