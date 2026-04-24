'use client';

import { useState } from 'react';
import { 
  Shield, 
  Leaf, 
  RotateCcw, 
  Car, 
  Truck, 
  Bike,
  CheckCircle,
  Info,
  Calculator,
  BadgePercent
} from 'lucide-react';
import STKPriceCalculator from '@/components/STKPriceCalculator';

export default function PricingPage() {
  const [selectedVehicleType, setSelectedVehicleType] = useState('personal');

  const vehicleTypes = [
    { id: 'personal', name: 'Osobné vozidlá', icon: Car, category: 'M1' },
    { id: 'truck', name: 'Nákladné vozidlá', icon: Truck, category: 'N2/N3' },
    { id: 'motorcycle', name: 'Motocykle', icon: Bike, category: 'L' }
  ];

  const pricing = {
    personal: {
      stk: { price: 25, oldPrice: 30, description: 'Technická kontrola osobných vozidiel' },
      ek: { price: 15, oldPrice: 18, description: 'Emisná kontrola benzín/diesel' },
      'stk-ek': { price: 35, oldPrice: 45, description: 'Kombinovaná kontrola STK + EK', savings: 10 },
      recheck: { price: 10, oldPrice: 15, description: 'Opakovaná kontrola závad' },
      'extra-services': [
        { name: 'Vyrážanie VIN čísla', price: 140, description: 'Len pri KO v STK Námestovo. Vyrážame pridelené náhradné identifikačné čísla vozidiel (VIN čísla) pre všetky kategórie vozidiel' },
        { name: 'Kontrola v sobotu', price: 5, description: 'Príplatok za víkendovú službu' },
        { name: 'Expresné vybavenie', price: 10, description: 'Prednostné vybavenie do 20 minút' },
        { name: 'Výjazd k zákazníkovi', price: 30, description: 'V rámci Tvrdošína a okolia' }
      ]
    },
    truck: {
      stk: { price: 45, oldPrice: 55, description: 'Technická kontrola nákladných vozidiel' },
      ek: { price: 25, oldPrice: 30, description: 'Emisná kontrola diesel motory' },
      'stk-ek': { price: 60, oldPrice: 80, description: 'Kombinovaná kontrola STK + EK', savings: 20 },
      recheck: { price: 20, oldPrice: 25, description: 'Opakovaná kontrola závad' },
      'extra-services': [
        { name: 'Vyrážanie VIN čísla', price: 140, description: 'Len pri KO v STK Námestovo. Vyrážame pridelené náhradné identifikačné čísla vozidiel (VIN čísla) pre všetky kategórie vozidiel' },
        { name: 'Kontrola v sobotu', price: 10, description: 'Príplatok za víkendovú službu' },
        { name: 'Kontrola návesov', price: 25, description: 'STK pre návesy a prívesy' },
        { name: 'Tahometrická kontrola', price: 35, description: 'Kontrola tachografu' }
      ]
    },
    motorcycle: {
      stk: { price: 20, oldPrice: 25, description: 'Technická kontrola motocyklov' },
      ek: { price: 12, oldPrice: 15, description: 'Emisná kontrola 2T/4T motory' },
      'stk-ek': { price: 28, oldPrice: 35, description: 'Kombinovaná kontrola STK + EK', savings: 7 },
      recheck: { price: 8, oldPrice: 12, description: 'Opakovaná kontrola závad' },
      'extra-services': [
        { name: 'Vyrážanie VIN čísla', price: 140, description: 'Len pri KO v STK Námestovo. Vyrážame pridelené náhradné identifikačné čísla vozidiel (VIN čísla) pre všetky kategórie vozidiel' },
        { name: 'Kontrola v sobotu', price: 3, description: 'Príplatok za víkendovú službu' },
        { name: 'Kontrola skútra', price: 15, description: 'STK pre skútre do 50ccm' },
        { name: 'Historické vozidlá', price: 25, description: 'Špeciálna kontrola veteránov' }
      ]
    }
  };

  const currentPricing = pricing[selectedVehicleType as keyof typeof pricing];

  const mainServices = [
    {
      id: 'stk',
      name: 'Technická kontrola (STK)',
      icon: Shield,
      color: 'blue',
      includes: [
        'Kontrola brzdového systému',
        'Kontrola riadenia a podvozku',
        'Kontrola svetiel a signalizácie',
        'Kontrola pneumatík a diskov',
        'Protokol o kontrole',
        'Nálepka pri úspešnom absolvovaní'
      ]
    },
    {
      id: 'ek',
      name: 'Emisná kontrola (EK)',
      icon: Leaf,
      color: 'green',
      includes: [
        'Meranie emisií CO/HC',
        'Kontrola lambda sondy',
        'Meranie nepriesvitnosti (diesel)',
        'Kontrola katalyzátora',
        'Protokol o meraniach',
        'Nálepka pri úspešnom absolvovaní'
      ]
    },
    {
      id: 'stk-ek',
      name: 'STK + EK Balík',
      icon: CheckCircle,
      color: 'orange',
      includes: [
        'Všetky kontroly STK',
        'Všetky merania EK',
        'Ušetrený čas',
        'Zľavnená cena',
        'Dva protokoly',
        'Dve nálepky'
      ],
      popular: true
    },
    {
      id: 'recheck',
      name: 'Opakovaná kontrola',
      icon: RotateCcw,
      color: 'purple',
      includes: [
        'Kontrola odstránenia závad',
        'Kontrola chýb z predchádzajúcej kontroly',
        'Do 30 dní od prvej kontroly',
        'Zľavnená cena',
        'Nový protokol',
        'Nálepka pri úspešnom absolvovaní'
      ]
    }
  ];

  return (
    <div className="pt-[20px]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-red-600 to-brand-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cenník služieb
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Transparentné ceny bez skrytých poplatkov. Najlepšie ceny v regióne!
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Vehicle Type Selector */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Vyberte kategóriu vozidla
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {vehicleTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedVehicleType(type.id)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl border-2 transition-all ${
                    selectedVehicleType === type.id
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-blue-300 text-gray-700'
                  }`}
                >
                  <IconComponent className="h-6 w-6" />
                  <div className="text-left">
                    <div className="font-semibold">{type.name}</div>
                    <div className="text-sm opacity-75">Kategória {type.category}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Services Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Hlavné služby
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainServices.map((service) => {
              const IconComponent = service.icon;
              const servicePrice = currentPricing[service.id as keyof typeof currentPricing];
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600 border-blue-200',
                green: 'bg-green-100 text-green-600 border-green-200',
                orange: 'bg-orange-100 text-orange-600 border-orange-200',
                purple: 'bg-purple-100 text-purple-600 border-purple-200'
              };

              return (
                <div
                  key={service.id}
                  className={`relative bg-white rounded-2xl shadow-lg border-2 p-6 hover:shadow-xl transition-shadow ${
                    service.popular ? 'ring-2 ring-orange-500' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Najobľúbenejšie
                      </span>
                    </div>
                  )}
                  
                  <div className={`inline-flex p-3 rounded-xl mb-4 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold text-gray-900">
                        {typeof servicePrice === 'object' && !Array.isArray(servicePrice) ? servicePrice.price : 0}€
                      </span>
                      {typeof servicePrice === 'object' && !Array.isArray(servicePrice) && servicePrice.oldPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          {servicePrice.oldPrice}€
                        </span>
                      )}
                    </div>
                    {typeof servicePrice === 'object' && 'savings' in servicePrice && servicePrice.savings && (
                      <div className="text-sm text-green-600 font-medium">
                        Ušetríte {servicePrice.savings}€
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {typeof servicePrice === 'object' && !Array.isArray(servicePrice) ? servicePrice.description : ''}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Služba zahŕňa:</h4>
                    {service.includes.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Extra Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Doplnkové služby
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentPricing['extra-services'].map((service, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Calculator className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{service.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                    <div className="text-xl font-bold text-blue-600">+{service.price}€</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Price Calculator */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <STKPriceCalculator />
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
          <div className="flex items-start space-x-4">
            <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dôležité informácie</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Platobné možnosti</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Hotovosť</li>
                    <li>• Platobná karta</li>
                    <li>• Bankový prevod</li>
                    <li>• QR platba</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Zľavy a akcie</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 🎂 Narodeniny: 10% zľava</li>
                    <li>• 👥 Rodinný balík: 15% zľava od 3. vozidla</li>
                    <li>• 🏢 Firemné vozidlá: 20% zľava od 5 vozidiel</li>
                    <li>• 🎓 Študenti: 5% zľava s preukazom</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Pozor:</strong> Ceny sú platné do 31.12.2025. V prípade neúspešnej kontroly 
                  sa účtuje plná cena za vykonanú kontrolu. Opakovaná kontrola sa hradí samostatne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}