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
  Info,
  Settings,
  Heart,
  Highlighter,
  Wrench,
  Flame
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('stk');
  const [isEquipmentModalOpen, setIsEquipmentModalOpen] = useState(false);

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
        'Doklad o poistení (platná zelená karta)',
        'Občiansky preukaz',
        // 'Predchádzajúci protokol STK (ak existuje)'
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
        'Pôvodný protokol z pravidelnej kontroly',
        'Osvedčenie o technickom preukaze, časť I alebo časť II (papierový alebo kartička)'
      ]
    },
    additional: {
      title: 'Doplnkové služby',
      icon: Settings,
      description: 'Špeciálne služby a expresné vybavenie pre vaše potreby',
      duration: 'Podľa typu služby',
      validity: 'Rôzne',
      checks: [
        'Expresné vybavenie - prednostné vybavenie nasledujúci kalendárny deň',
        'Umiestnenie a upevnenie prideleného náhradného VIN čísla',
        'Razenie VIN čísla pre všetky kategórie vozidiel',
        'Individuálne riešenia podľa požiadaviek zákazníka'
      ],
      requirements: [
        'Emailový dopyt na emade@emade.sk pre expresné vybavenie',
        'Príplatok 30€ za expresné vybavenie',
        'Potrebné doklady podľa typu služby',
        'Dohodnutie termínu vopred'
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
    <div className="relative">
      {/* Floating Reminder Box */}
      <button
        onClick={() => setIsEquipmentModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-brand-red-600 hover:bg-brand-red-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
        aria-label="Povinná výbava vozidla"
      >
        <div className="relative">
          <Shield className="h-6 w-6" />
          <div className="absolute -top-1 -right-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            !
          </div>
        </div>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-brand-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Povinná výbava
        </span>
      </button>

      {/* Equipment Modal */}
      <Dialog open={isEquipmentModalOpen} onOpenChange={setIsEquipmentModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-bold text-brand-gray-900">
              Povinná výbava vozidla
            </DialogTitle>
            <DialogDescription className="text-base text-brand-gray-600">
              Podľa platných predpisov SR musí mať každé vozidlo povinnú výbavu. 
              Skontrolujte, či máte všetko potrebné pred technickou kontrolou.
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {/* First Aid Kit */}
            <div className="bg-brand-gray-50 rounded-xl p-5 border border-brand-gray-200">
              <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mb-3">
                <Heart className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-brand-gray-900 mb-2">Lekárnička</h3>
              <p className="text-brand-gray-600 text-sm mb-3">
                Povinná pre všetky vozidlá. Musí obsahovať základné obväzové materiály a dezinfekciu.
              </p>
              <div className="flex items-center text-sm text-brand-gray-500">
                <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2" />
                <span>Povinné pre všetky vozidlá</span>
              </div>
            </div>

            {/* Warning Triangle */}
            <div className="bg-brand-gray-50 rounded-xl p-5 border border-brand-gray-200">
              <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-3">
                <AlertTriangle className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-brand-gray-900 mb-2">Výstražný trojuholník</h3>
              <p className="text-brand-gray-600 text-sm mb-3">
                Povinný pre všetky vozidlá. Musí byť umiestnený pri havárii minimálne 50 m za vozidlom.
              </p>
              <div className="flex items-center text-sm text-brand-gray-500">
                <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2" />
                <span>Povinné pre všetky vozidlá</span>
              </div>
            </div>

            {/* Reflective Vest */}
            <div className="bg-brand-gray-50 rounded-xl p-5 border border-brand-gray-200">
              <div className="bg-yellow-100 w-14 h-14 rounded-lg flex items-center justify-center mb-3">
                <Highlighter className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-brand-gray-900 mb-2">Reflexná vesta</h3>
              <p className="text-brand-gray-600 text-sm mb-3">
                Povinná pre všetky vozidlá. Musí byť ľahko dostupná (nie v kufri).
              </p>
              <div className="flex items-center text-sm text-brand-gray-500">
                <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2" />
                <span>Povinné pre všetky vozidlá</span>
              </div>
            </div>

            {/* Spare Tire */}
            <div className="bg-brand-gray-50 rounded-xl p-5 border border-brand-gray-200">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-3">
                <Wrench className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-brand-gray-900 mb-2">Náhradné koleso</h3>
              <p className="text-brand-gray-600 text-sm mb-3">
                Odporúčané pre všetky vozidlá. Alternatívou môže byť opravná sada alebo kompresor.
              </p>
              <div className="flex items-center text-sm text-brand-gray-500">
                <Info className="h-4 w-4 text-blue-500 mr-2" />
                <span>Odporúčané</span>
              </div>
            </div>

            {/* Fire Extinguisher */}
            <div className="bg-brand-gray-50 rounded-xl p-5 border border-brand-gray-200">
              <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mb-3">
                <Flame className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-brand-gray-900 mb-2">Hasící prístroj</h3>
              <p className="text-brand-gray-600 text-sm mb-3">
                Povinný pre nákladné vozidlá a autobusy. Odporúčaný pre všetky vozidlá.
              </p>
              <div className="flex items-center text-sm text-brand-gray-500">
                <AlertTriangle className="h-4 w-4 text-orange-500 mr-2" />
                <span>Povinné pre nákladné vozidlá</span>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-brand-green-50 rounded-xl p-5 border-2 border-brand-green-200">
              <div className="bg-brand-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-3">
                <Shield className="h-7 w-7 text-brand-green-600" />
              </div>
              <h3 className="text-lg font-bold text-brand-gray-900 mb-2">Dodatočné informácie</h3>
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

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-6">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
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
        </DialogContent>
      </Dialog>

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
              {activeTab === 'additional' ? (
                <div className="lg:col-span-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Expresné vybavenie */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">Expresné vybavenie</h3>
                      <p className="text-blue-800 leading-relaxed mb-2">
                        Nenašli ste termín? Prednostné vybavenie nasledujúci kalendárny deň za príplatok 30,-€.
                      </p>
                      <p className="text-blue-800 leading-relaxed">
                        Na základe emailového dopytu na <a href="mailto:emade@emade.sk" className="text-blue-600 hover:text-blue-700 underline font-semibold">emade@emade.sk</a>
                      </p>
                    </div>

                    {/* VIN číslo */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">Umiestnenie a upevnenie VIN čísla</h3>
                      <p className="text-blue-800 leading-relaxed">
                        Tzv. razenie VIN čísla pre všetky kategórie vozidiel.
                      </p>
                    </div>

                    {/* STK Parking */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">STK Parking</h3>
                      <p className="text-blue-800 leading-relaxed mb-3">
                        Nechajte Vaše vozidlo u nás, kým budete v práci a o všetko sa postaráme.
                      </p>
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <p className="text-blue-900 font-semibold text-sm">
                          Cena služby: 15,-€ s DPH<br />
                          <span className="text-blue-700 font-normal">(nezahŕňa cenu za výkon kontroly)</span>
                        </p>
                      </div>
                    </div>

                    {/* STK Kuriér */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">STK Kuriér</h3>
                      <p className="text-blue-800 leading-relaxed mb-3">
                        Vyzdvihneme auto priamo u Vás doma alebo na firme a vykonáme technickú/emisnú kontrolu alebo kontrolu originality.
                      </p>
                      <p className="text-blue-800 text-sm mb-3">
                        Službu je možné využiť iba pre okres Námestovo a Tvrdošín (do 20 km)
                      </p>
                      <div className="bg-blue-100 p-3 rounded-lg space-y-1">
                        <p className="text-blue-900 font-semibold text-sm">
                          Osobné autá: 30,-€ s DPH
                        </p>
                        <p className="text-blue-900 font-semibold text-sm">
                          Nákladné autá: 50,-€ s DPH
                        </p>
                        <p className="text-blue-700 text-xs">
                          (nezahŕňa cenu za výkon kontroly)
                        </p>
                      </div>
                    </div>

                    {/* Umývací program Exkluzív */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">Umývací program Exkluzív</h3>
                      <p className="text-blue-800 leading-relaxed mb-3">
                        Umytie vozidla s programom Exkluzív so zľavou 20%.
                      </p>
                      <div className="bg-blue-100 p-3 rounded-lg mb-3">
                        <p className="text-blue-900 font-semibold text-sm">
                          Cena služby: 7,90€ s DPH<br />
                          <span className="text-blue-700 font-normal">(nezahŕňa cenu za výkon kontroly)</span>
                        </p>
                      </div>
                      <div className="text-blue-800 text-sm">
                        <p className="font-semibold mb-1">Program zahŕňa:</p>
                        <ul className="text-xs space-y-1">
                          <li>• Vysokotlaké predumytie</li>
                          <li>• Aktívna pena</li>
                          <li>• Umytie šampónom</li>
                          <li>• Umytie kolies</li>
                          <li>• Vysokotlaké umytie podvozku</li>
                          <li>• Horúci vosk</li>
                          <li>• Sušenie</li>
                        </ul>
                      </div>
                    </div>

                    {/* Umývací program Basic */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">Umývací program Basic</h3>
                      <p className="text-blue-800 leading-relaxed mb-3">
                        Umytie vozidla s programom Basic so zľavou 20%.
                      </p>
                      <div className="bg-blue-100 p-3 rounded-lg mb-3">
                        <p className="text-blue-900 font-semibold text-sm">
                          Cena služby: 3,90€ s DPH<br />
                          <span className="text-blue-700 font-normal">(nezahŕňa cenu za výkon kontroly)</span>
                        </p>
                      </div>
                      <div className="text-blue-800 text-sm">
                        <p className="font-semibold mb-1">Program zahŕňa:</p>
                        <ul className="text-xs space-y-1">
                          <li>• Umytie šampónom</li>
                          <li>• Umytie kolies</li>
                          <li>• Sušenie</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
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
                </>
              )}

            </div>

              {activeTab === 'stk' && (
              <div className="space-y-4">
                <div className="bg-blue-100 border border-blue-200 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">
                        Prvá STK
                      </h4>
                      <p className="text-blue-800 text-sm">
                        Prvá STK po 4 rokoch od prvej evidencie vozidla (výroby).
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-100 border border-orange-200 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">
                        STK po vážnej dopravnej nehode (od 1.1.2022)
                      </h4>
                      <p className="text-orange-800 text-sm">
                        V prípade vážnej dopravnej nehody je povinná technická kontrola, pri ktorej prišlo k poškodeniu 
                        hlavných bezpečnostných prvkov (zavesenie kolies, deformačné zóny, systémy airbagov, riadenie alebo brzdy). 
                        Aby vozidlo mohlo byť znovu používané v cestnej doprave, musí úspešne absolvovať technickú kontrolu pravidelnú na STK.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              )}

              {activeTab === 'recheck' && (
              <div className="bg-red-100 border border-red-200 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">
                      Dôležité upozornenie
                    </h4>
                    <p className="text-red-800 text-sm">
                      Treba ju vykonať do 60 kalendárnych dní.
                    </p>
                  </div>
                </div>
              </div>
              )}

              {activeTab === 'ek' && (
              <div className="bg-green-100 border border-green-200 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Leaf className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">
                      Typy kontrolovaných motorov
                    </h4>
                    <p className="text-green-800 text-sm mb-2">
                      V našej prevádzke vykonávame kontrolu emisií všetkých druhov motorových vozidiel:
                    </p>
                    <ul className="text-green-800 text-sm space-y-1">
                      <li>• vozidlá so zážihovým (benzínovým) motorom bez katalyzátora</li>
                      <li>• vozidlá s dieslovým (naftovým) motorom</li>
                      <li>• vozidlá s alternatívnym (B+LPG, B+CNG) pohonom</li>
                      <li>• vozidlá so zážihovým (benzínovým) motorom s katalyzátorom</li>
                    </ul>
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
                  <strong> 350 EUR</strong>. Okrem toho poisťovne môžu odmietnuť plnenie v prípade nehody.
                </p>
                <div className="bg-red-100 p-4 rounded-lg mb-4">
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
