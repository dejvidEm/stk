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
  Mail
} from 'lucide-react';
import { Kavivanar } from 'next/font/google';

export default function HomePage() {
  const centers = [
    {
      id: 'namestovo',
      name: 'STK Námestovo',
      url: '/tvrdosin',
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
      url: '/tvrdosin',
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
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
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
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={center.image} 
                    alt={center.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {center.isDemo && (
                    <div className="absolute top-2 right-2 bg-brand-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      STK
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 text-brand-gray-900 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold">{center.name}</h3>
                    {center.isDemo ? (
                      <Link 
                        href={center.url}
                        className="text-brand-red-600 hover:text-brand-red-700 transition-colors"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    ) : (
                      <a 
                        href={center.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-red-600 hover:text-brand-red-700 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>

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
      <footer className="bg-brand-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
          {/* Bottom Section */}
          <div className="text-center">
            <div className="text-center space-y-4 md:space-y-0">
              <div className="text-brand-gray-400 text-sm">
                © 2025 EMADE, spol. s r.o. Všetky práva vyhradené.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
