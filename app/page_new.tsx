'use client';

import Link from 'next/link';
import { 
  MapPin, 
  ExternalLink, 
  Shield,
  CheckCircle,
  Clock,
  Star,
  ArrowRight
} from 'lucide-react';

export default function HomePage() {
  const centers = [
    {
      id: 'namestovo',
      name: 'STK Námestovo',
      url: 'https://www.stknamestovo.sk',
      address: 'Hlavná 25, 029 01 Námestovo',
      phone: '+421 43 123 4567',
      email: 'info@stknamestovo.sk',
      hours: 'Po-Pia: 7:00-18:00, So: 8:00-14:00',
      image: 'https://images.pexels.com/photos/3807752/pexels-photo-3807752.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Moderné STK centrum v srdci Oravy s najnovším vybavením.',
      features: ['Online rezervácia', 'Expresné vybavenie', 'Parkovanie zdarma']
    },
    {
      id: 'tvrdosin',
      name: 'STK Tvrdošín',
      url: '/demo', // Link na demo stránku
      address: 'Hlavná 42, 027 44 Tvrdošín',
      phone: '+421 43 765 4321',
      email: 'info@stktvrdosin.sk',
      hours: 'Po-Pia: 7:00-18:00, So: 8:00-14:00',
      image: 'https://images.pexels.com/photos/3808904/pexels-photo-3808904.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Spoľahlivé služby STK a EK v Tvrdošíne s 15-ročnými skúsenosťami.',
      features: ['Víkendové termíny', 'Všetky typy vozidiel', 'Opakované kontroly'],
      isDemo: true
    },
    {
      id: 'lokca',
      name: 'STK Lokca',
      url: 'https://www.stklokca.sk',
      address: 'Železničná 18, 029 42 Lokca',
      phone: '+421 43 987 6543',
      email: 'info@stklokca.sk',
      hours: 'Po-Pia: 7:00-18:00, So: 8:00-14:00',
      image: 'https://images.pexels.com/photos/3808871/pexels-photo-3808871.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Profesionálne centrum pre technické kontroly v Lokci.',
      features: ['Motocykle a skútre', 'Nákladné vozidlá', 'Rýchle vybavenie']
    }
  ];

  return (
    <div className="pt-[20px]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-red-600 to-brand-red-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3808904/pexels-photo-3808904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              STK Centrá
              <span className="block text-brand-green-400">na severe Slovenska</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Profesionálne služby technickej kontroly vozidiel na troch miestach.
              Vyberte si centrum najbližšie k vám.
            </p>
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
              <div className="text-3xl font-bold text-brand-gray-900 mb-2">15+</div>
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

      {/* Centers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Naše STK centrá
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Vyberte si centrum najbližšie k vašej lokalite
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {centers.map((center) => (
              <div key={center.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={center.image} 
                    alt={center.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {center.isDemo && (
                    <div className="absolute top-4 right-4 bg-brand-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      DEMO
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-brand-gray-900">{center.name}</h3>
                    {center.isDemo ? (
                      <Link 
                        href={center.url}
                        className="text-brand-red-600 hover:text-brand-red-700 transition-colors"
                      >
                        <ArrowRight className="h-6 w-6" />
                      </Link>
                    ) : (
                      <a 
                        href={center.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-red-600 hover:text-brand-red-700 transition-colors"
                      >
                        <ExternalLink className="h-6 w-6" />
                      </a>
                    )}
                  </div>

                  <p className="text-brand-gray-600 mb-4">{center.description}</p>

                  {/* Contact Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-brand-gray-600">
                      <MapPin className="h-4 w-4 text-brand-red-500 mr-2 flex-shrink-0" />
                      {center.address}
                    </div>
                    <div className="flex items-center text-sm text-brand-gray-600">
                      <Clock className="h-4 w-4 text-brand-green-500 mr-2 flex-shrink-0" />
                      {center.hours}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {center.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="bg-brand-gray-100 text-brand-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  {center.isDemo ? (
                    <Link 
                      href={center.url}
                      className="w-full bg-brand-red-600 hover:bg-brand-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center group"
                    >
                      Pozrieť demo stránku
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <a 
                      href={center.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-brand-red-600 hover:bg-brand-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center group"
                    >
                      Navštíviť stránku
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            ))}
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
    </div>
  );
}
