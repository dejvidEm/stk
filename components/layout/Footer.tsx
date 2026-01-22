import Link from 'next/link';
import { Car, Phone, Mail, MapPin, Clock, Facebook, Instagram, ExternalLink, Globe } from 'lucide-react';

export default function Footer() {
  const centers = [
    {
      name: 'STK Námestovo',
      address: 'Za vodou 1068, 029 01 Námestovo',
      phone: '043 5520390, 0904 386146',
      email: 'info@emade.sk',
      hours: 'Po-Pia: 06:00-16:30',
      url: 'https://www.stknamestovo.sk',
      isExternal: true
    },
    {
      name: 'STK Tvrdošín',
      address: 'Vojtaššákova 908, 027 44 Tvrdošín',
      phone: '043 5323499, 0948 032189',
      email: 'info@stktvrdosin.sk',
      hours: 'Po-Pia: 07:00-15:30',
      url: '/tvrdosin',
      isExternal: false
    },
    {
      name: 'STK Lokca',
      address: 'Polianka 753, 029 51 Lokca',
      phone: '0948 422333',
      email: 'info@stklokca.sk',
      hours: 'Po-Pia: 06:00-15:30',
      url: 'https://www.stklokca.sk',
      isExternal: true
    }
  ];

  return (
    <footer className="bg-brand-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Information - 3 columns for centers */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-2xl mb-8 text-brand-green-400">Naše STK centrá</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {centers.map((center, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-lg text-white">{center.name}</h4>
                    {center.isExternal ? (
                      <a 
                        href={center.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-green-400 hover:text-brand-green-300 transition-colors"
                        aria-label={`Navštíviť ${center.name}`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    ) : (
                      <Link 
                        href={center.url}
                        className="text-brand-green-400 hover:text-brand-green-300 transition-colors"
                        aria-label={`Navštíviť ${center.name}`}
                      >
                        <Globe className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-brand-green-400 mt-0.5 flex-shrink-0" />
                      <div className="text-brand-gray-300 text-sm leading-relaxed">
                        <p>{center.address.split(',')[0]}</p>
                        <p>{center.address.split(',')[1]}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-brand-green-400 flex-shrink-0" />
                      <a 
                        href={`tel:${center.phone.replace(/\s/g, '')}`}
                        className="text-brand-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {center.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-brand-green-400 flex-shrink-0" />
                      <a 
                        href={`mailto:${center.email}`}
                        className="text-brand-gray-300 hover:text-white transition-colors text-sm break-all"
                      >
                        {center.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-brand-green-400 flex-shrink-0" />
                      <span className="text-brand-gray-300 text-sm">{center.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
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
  );
}