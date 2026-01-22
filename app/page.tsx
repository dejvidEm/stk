'use client';

import Link from 'next/link';
import { 
  MapPin, 
  ExternalLink, 
  Shield,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Car,
  Facebook,
  Instagram,
  Coffee,
  UtensilsCrossed
} from 'lucide-react';
import { Kavivanar } from 'next/font/google';
import CarwashBanner from '@/components/CarwashBanner';

export default function HomePage() {
  const centers = [
    {
      id: 'namestovo',
      name: 'STK Námestovo',
      url: '/namestovo',
      address: 'Za vodou 1068, 029 01 Námestovo',
      phone: '043 5520390, 0904 386146',
      email: 'info@emade.sk',
      hours: 'Po-Pia: 06:00-16:30',
      image: '/images/namestovo.webp',
      description: 'Moderné STK centrum v srdci Oravy s najnovším vybavením.',
      features: ['Technické kontroly', 'Emisné kontroly', 'Kontrola originality', 'Autoumyváreň', 'Automat portál 24/7', 'Kaviareň efCafé', 'ecoČistiareň a práčovňa']
    },
    {
      id: 'tvrdosin',
      name: 'STK Tvrdošín',
      url: '/tvrdosin', // Link na STK Tvrdošín stránku
      address: 'Vojtaššákova 908, 027 44 Tvrdošín',
      phone: '043 5323499, 0948 032189',
      email: 'info@stktvrdosin.sk',
      hours: 'Po-Pia: 07:00-15:30',
      image: '/images/namestovo_2.webp',
      description: 'Spoľahlivé služby STK a EK v Tvrdošíne s 15-ročnými skúsenosťami.',
      features: ['Technické kontroly', 'Emisné kontroly', 'Autoumyváreň', 'Kaviareň'],
      isDemo: true
    },
    {
      id: 'lokca',
      name: 'STK Lokca',
      url: '/lokca',
      address: 'Polianka 753, 029 51 Lokca',
      phone: '0948 422333',
      email: 'info@stklokca.sk',
      hours: 'Po-Pia: 06:00-15:30',
      image: '/images/lokca.webp',
      description: 'Profesionálne centrum pre technické kontroly v Lokci.',
      features: ['Technické kontroly', 'Emisné kontroly']
    }
  ];

  return (
    <div>
      {/* Hero Section with Centers Selection */}
      <section className="relative bg-gradient-to-br from-green-500 to-green-700 text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url("/images/bg.jpg")'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 pt-10">
          {/* Hero Text */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold my-6 leading-tight">
              STK CENTRUM ORAVA
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Profesionálne služby technickej kontroly vozidiel.
              <span className="block mt-2 text-lg">Vyberte si centrum najbližšie k vám:</span>
            </p>
          </div>

          {/* Centers Cards in Hero */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {centers.map((center) => (
              <div 
                key={center.id} 
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={center.image} 
                    alt={center.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.8)' }}>
                      {center.name}
                    </h3>
                  </div>
                  
                  {/* Link icon overlay */}
                  <div className="absolute top-2 right-2 z-10">
                    {center.isDemo ? (
                      <Link 
                        href={center.url}
                        className="bg-white/90 hover:bg-white text-brand-red-600 p-2 rounded-full transition-colors shadow-lg"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    ) : (
                      <a 
                        href={center.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 hover:bg-white text-brand-red-600 p-2 rounded-full transition-colors shadow-lg"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  
                  {center.isDemo && (
                    <div className="absolute top-2 left-2 bg-brand-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
                      STK
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 text-brand-gray-900 flex flex-col flex-grow">

                  {/* Contact Info */}
                  <div className="space-y-1 mb-3 text-sm flex-grow">
                    <div className="flex items-center text-brand-gray-600">
                      <MapPin className="h-3 w-3 text-brand-red-500 mr-1 flex-shrink-0" />
                      {center.address}
                    </div>
                    <div className="flex items-center text-brand-gray-600">
                      <Phone className="h-3 w-3 text-brand-red-500 mr-1 flex-shrink-0" />
                      <a 
                        href={`tel:${center.phone}`}
                        className="hover:text-brand-red-600 transition-colors"
                      >
                        {center.phone}
                      </a>
                    </div>
                    <div className="flex items-center text-brand-gray-600">
                      <Clock className="h-3 w-3 text-brand-green-500 mr-1 flex-shrink-0" />
                      {center.hours}
                    </div>
                    <div className="flex items-center text-brand-gray-600">
                      <Mail className="h-3 w-3 text-brand-green-500 mr-1 flex-shrink-0" />
                      <a 
                        href={`mailto:${center.email}`}
                        className="hover:text-brand-green-600 transition-colors"
                      >
                        {center.email}
                      </a>
                    </div>

                    <a 
                      href={`${center.url}/rezervacia`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-brand-green-600 !mt-5 hover:bg-brand-green-700 text-white py-2 px-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center group text-sm"
                    >
                      Rezervácia termínu
                      <ExternalLink className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </a>

                      {/* Features */}
                        <div className="flex flex-wrap gap-1 pb-3 pt-5">
                        {center.features.map((feature, index) => (
                        <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                        {feature}
                        </span>
                        ))}
                        </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-2 mt-auto">
                    {center.isDemo ? (
                      <>
                        <Link 
                          href={center.url}
                          className="w-full bg-brand-red-600 hover:bg-brand-red-700 text-white py-2 px-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center group text-sm"
                        >
                          Navštíviť stránku
                          <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </>
                    ) : (
                      <>
                        <a 
                          href={center.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-brand-red-600 hover:bg-brand-red-700 text-white py-2 px-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center group text-sm"
                        >
                          Navštíviť stránku
                          <ExternalLink className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carwash Banner */}
      <CarwashBanner />

      {/* Coffee Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image Side */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/namestovo_2.webp" 
                alt="efCafé kaviareň"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-2xl font-bold text-brand-gray-900 mb-1">efCafé</h3>
                  <p className="text-brand-gray-600">Kaviareň v STK Námestovo</p>
                </div>
              </div>
            </div>

            {/* Info Side */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Coffee className="h-8 w-8 text-amber-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900">
                    efCafé Kaviareň
                  </h2>
                </div>
                <p className="text-lg text-brand-gray-600 mb-6">
                  Počas čakania na technickú kontrolu si môžete vychutnať kvalitnú kávu a občerstvenie 
                  v našej útulnej kaviarni. Moderné prostredie s bezplatným Wi-Fi pripojením.
                </p>
              </div>

              {/* Opening Hours */}
              <div className="bg-brand-gray-50 rounded-xl p-6 border border-brand-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-brand-red-600" />
                  <h3 className="text-xl font-bold text-brand-gray-900">Otváracie hodiny</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-medium text-brand-gray-900">Pondelok - Piatok</span>
                    <span className="font-semibold text-brand-gray-700">06:00 - 16:30</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-medium text-brand-gray-900">Sobota</span>
                    <span className="font-semibold text-brand-gray-700">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-medium text-brand-gray-500">Nedeľa</span>
                    <span className="font-semibold text-red-600">Zatvorené</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-brand-gray-200 flex items-center gap-3">
                  <UtensilsCrossed className="h-5 w-5 text-amber-600" />
                  <span className="text-sm font-medium text-brand-gray-700">Občerstvenie</span>
                </div>
                <div className="bg-white rounded-lg p-4 border border-brand-gray-200 flex items-center gap-3">
                  <Coffee className="h-5 w-5 text-amber-600" />
                  <span className="text-sm font-medium text-brand-gray-700">Kvalitná káva</span>
                </div>
                <div className="bg-white rounded-lg p-4 border border-brand-gray-200 flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green-600" />
                  <span className="text-sm font-medium text-brand-gray-700">Wi-Fi zdarma</span>
                </div>
                <div className="bg-white rounded-lg p-4 border border-brand-gray-200 flex items-center gap-3">
                  <Star className="h-5 w-5 text-amber-500" />
                  <span className="text-sm font-medium text-brand-gray-700">Príjemné prostredie</span>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <a
                  href="https://efcafe.sk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full lg:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  Navštíviť webovú stránku efCafé
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-brand-red-100 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-brand-red-600" />
              </div>
              <div className="text-3xl font-bold text-brand-gray-900 mb-2">3</div>
              <div className="text-brand-gray-600">STK centrá</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-brand-green-100 p-4 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-brand-green-600" />
              </div>
              <div className="text-3xl font-bold text-brand-gray-900 mb-2">14+</div>
              <div className="text-brand-gray-600">rokov skúseností</div>
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
                <Star className="h-8 w-8 text-brand-green-600" />
              </div>
              <div className="text-3xl font-bold text-brand-gray-900 mb-2">98%</div>
              <div className="text-brand-gray-600">spokojnosť</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6">
              Prečo si vybrať naše STK centrá?
            </h2>
            <p className="text-lg text-brand-gray-600 mb-8">
              S viac ako 15-ročnými skúsenosťami poskytujeme profesionálne služby 
              technickej kontroly vozidiel na severe Slovenska. Naše centrá sú 
              vybavené najmodernejšou technikou a personálom s odbornými certifikátmi.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-brand-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-brand-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">Certifikované centrá</h3>
                <p className="text-brand-gray-600">Všetky naše centrá majú platné certifikáty a spĺňajú najvyššie štandardy.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-brand-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">Rýchle vybavenie</h3>
                <p className="text-brand-gray-600">Priemerný čas kontroly je iba 30 minút. Expresné vybavenie do 20 minút.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-brand-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">Online rezervácia</h3>
                <p className="text-brand-gray-600">Rezervujte si termín online 24/7 a ušetrite čas čakania.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Footer for Homepage */}
      <footer className="bg-brand-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
            {/* Company Information - 3 columns for centers */}
            <div className="lg:col-span-3">
              <h3 className="font-bold text-2xl mb-8 text-brand-green-400">Naše STK centrá</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* STK Námestovo */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-lg text-white">STK Námestovo</h4>
                    <a 
                      href="https://www.stknamestovo.sk" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-green-400 hover:text-brand-green-300 transition-colors"
                      aria-label="Navštíviť STK Námestovo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-brand-green-400 mt-0.5 flex-shrink-0" />
                      <div className="text-brand-gray-300 text-sm leading-relaxed">
                        <p>Za vodou 1068</p>
                        <p>029 01 Námestovo</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-brand-green-400 flex-shrink-0" />
                      <a 
                        href="tel:0435520390"
                        className="text-brand-gray-300 hover:text-white transition-colors text-sm"
                      >
                        043 5520390, 0904 386146
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-brand-green-400 flex-shrink-0" />
                      <a 
                        href="mailto:info@emade.sk"
                        className="text-brand-gray-300 hover:text-white transition-colors text-sm break-all"
                      >
                        info@emade.sk
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-brand-green-400 flex-shrink-0" />
                      <span className="text-brand-gray-300 text-sm">Po-Pia: 06:00-16:30</span>
                    </div>
                  </div>
                </div>

                {/* STK Tvrdošín */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-lg text-white">STK Tvrdošín</h4>
                    <Link 
                      href="/tvrdosin"
                      className="text-brand-green-400 hover:text-brand-green-300 transition-colors"
                      aria-label="Navštíviť STK Tvrdošín"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-brand-green-400 mt-0.5 flex-shrink-0" />
                      <div className="text-brand-gray-300 text-sm leading-relaxed">
                        <p>Vojtaššákova 908</p>
                        <p>027 44 Tvrdošín</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-brand-green-400 flex-shrink-0" />
                      <a 
                        href="tel:0435323499"
                        className="text-brand-gray-300 hover:text-white transition-colors text-sm"
                      >
                        043 5323499, 0948 032189
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-brand-green-400 flex-shrink-0" />
                      <a 
                        href="mailto:info@stktvrdosin.sk"
                        className="text-brand-gray-300 hover:text-white transition-colors text-sm break-all"
                      >
                        info@stktvrdosin.sk
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-brand-green-400 flex-shrink-0" />
                      <span className="text-brand-gray-300 text-sm">Po-Pia: 07:00-15:30</span>
                    </div>
                  </div>
                </div>

                {/* STK Lokca */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-lg text-white">STK Lokca</h4>
                    <a 
                      href="https://www.stklokca.sk" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-green-400 hover:text-brand-green-300 transition-colors"
                      aria-label="Navštíviť STK Lokca"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-brand-green-400 mt-0.5 flex-shrink-0" />
                      <div className="text-brand-gray-300 text-sm leading-relaxed">
                        <p>Polianka 753</p>
                        <p>029 51 Lokca</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-brand-green-400 flex-shrink-0" />
                      <a 
                        href="tel:0948422333"
                        className="text-brand-gray-300 hover:text-white transition-colors text-sm"
                      >
                        0948 422333
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-brand-green-400 flex-shrink-0" />
                      <a 
                        href="mailto:info@stklokca.sk"
                        className="text-brand-gray-300 hover:text-white transition-colors text-sm break-all"
                      >
                        info@stklokca.sk
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-brand-green-400 flex-shrink-0" />
                      <span className="text-brand-gray-300 text-sm">Po-Pia: 06:00-15:30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="font-bold text-2xl mb-6 text-brand-green-400">Rýchle odkazy</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-white">Služby</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/sluzby" className="text-brand-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                        <span>Naše služby</span>
                        <Car className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/tvrdosin/autoumyvaren" className="text-brand-gray-300 hover:text-white transition-colors text-sm">
                        Autoumyváreň
                      </Link>
                    </li>
                    <li>
                      <Link href="/tvrdosin/galeria" className="text-brand-gray-300 hover:text-white transition-colors text-sm">
                        Galéria
                      </Link>
                    </li>
                    <li>
                      <Link href="/cennik" className="text-brand-gray-300 hover:text-white transition-colors text-sm">
                        Cenník
                      </Link>
                    </li>
                    <li>
                      <Link href="/rezervacia" className="text-brand-gray-300 hover:text-white transition-colors text-sm">
                        Online rezervácia
                      </Link>
                    </li>
                    <li>
                      <Link href="/tvrdosin/certifikaty" className="text-brand-gray-300 hover:text-white transition-colors text-sm">
                        Certifikáty
                      </Link>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-white">Informácie</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/" className="text-brand-gray-300 hover:text-white transition-colors text-sm">
                        Domov
                      </Link>
                    </li>
                    <li>
                      <Link href="/kontakt" className="text-brand-gray-300 hover:text-white transition-colors text-sm">
                        Kontakt
                      </Link>
                    </li>
                    <li>
                      <Link href="/caste-otazky" className="text-brand-gray-300 hover:text-white transition-colors text-sm">
                        Časté otázky
                      </Link>
                    </li>
                    <li>
                      <Link href="/tvrdosin" className="text-brand-gray-300 hover:text-white transition-colors text-sm">
                        STK Tvrdošín
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-4 text-white">Sledujte nás</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-gray-800 hover:bg-brand-gray-700 p-3 rounded-lg transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5 text-brand-green-400" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-gray-800 hover:bg-brand-gray-700 p-3 rounded-lg transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 text-brand-green-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-brand-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-brand-gray-400 text-sm text-center md:text-left">
                <p>&copy; 2025 EMADE, spol. s r.o. Všetky práva vyhradené.</p>
                <p className="mt-1">STK Centrum Orava - Profesionálne služby technickej kontroly vozidiel</p>
              </div>
              <div className="flex space-x-6 text-sm">
                <Link href="#" className="text-brand-gray-400 hover:text-white transition-colors">
                  Ochrana súkromia
                </Link>
                <Link href="#" className="text-brand-gray-400 hover:text-white transition-colors">
                  Obchodné podmienky
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
