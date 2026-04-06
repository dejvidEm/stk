'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Car, Phone, Mail, MapPin, Clock, Facebook, Instagram, ExternalLink, Globe } from 'lucide-react';

/** Display email without @ to reduce bot harvesting; mailto is built on click. */
function ObfuscatedEmail({ user, domain }: { user: string; domain: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${user}@${domain}`;
  };
  return (
    <a
      href="#"
      onClick={handleClick}
      className="text-brand-gray-300 hover:text-white transition-colors text-sm break-all"
      aria-label={`E-mail: ${user} (at) ${domain}`}
    >
      {user}
      <span aria-hidden="true"> (at) </span>
      {domain}
    </a>
  );
}

export default function Footer() {
  const pathname = usePathname();

  const faqHref = (() => {
    if (pathname.startsWith('/namestovo')) return '/namestovo/caste-otazky';
    if (pathname.startsWith('/tvrdosin')) return '/tvrdosin/caste-otazky';
    if (pathname.startsWith('/lokca')) return '/lokca/caste-otazky';
    return '/caste-otazky';
  })();

  const handleFooterLinkClickCapture = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    if (!anchor) return;

    const href = anchor.getAttribute('href') ?? '';
    // For internal navigation links, always jump to top.
    if (href.startsWith('/')) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  };

  const centers = [
    {
      name: 'STK Námestovo',
      address: 'Za vodou 1068, 029 01 Námestovo',
      phone: '043 5520390, 0904 386146',
      emailUser: 'info',
      emailDomain: 'emade.sk',
      hours: 'Po-Pia: 06:00-16:30',
      url: 'https://www.stknamestovo.sk',
      isExternal: true
    },
    {
      name: 'STK Tvrdošín',
      address: 'Vojtaššákova 908, 027 44 Tvrdošín',
      phone: '043 5323499, 0948 032189',
      emailUser: 'info',
      emailDomain: 'stktvrdosin.sk',
      hours: 'Po-Pia: 07:00-15:30',
      url: '/tvrdosin',
      isExternal: false
    },
    {
      name: 'STK Lokca',
      address: 'Polianka 753, 029 51 Lokca',
      phone: '0948 422333',
      emailUser: 'info',
      emailDomain: 'stklokca.sk',
      hours: 'Po-Pia: 06:00-15:30',
      url: 'https://www.stklokca.sk',
      isExternal: true
    }
  ];

  return (
    <footer className="bg-brand-gray-900 text-white" onClickCapture={handleFooterLinkClickCapture}>
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
                      <ObfuscatedEmail user={center.emailUser} domain={center.emailDomain} />
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
                    <Link href="/namestovo/autoumyvaren" className="text-brand-gray-300 hover:text-white transition-colors text-sm">
                      Autoumyváreň Námestovo
                    </Link>
                  </li>
                  <li>
                    <Link href="/tvrdosin/autoumyvaren" className="text-brand-gray-300 hover:text-white transition-colors text-sm">
                      Autoumyváreň Tvrdošín
                    </Link>
                  </li>
                  <li>
                    <Link href="/lokca/autoumyvaren" className="text-brand-gray-300 hover:text-white transition-colors text-sm">
                      Autoumyváreň Lokca (neprevádzkujeme)
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
                    <Link href={faqHref} className="text-brand-gray-300 hover:text-white transition-colors text-sm">
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
          <div className="flex flex-col items-center gap-4">
            <div className="order-2 text-brand-gray-400 text-sm text-center">
              <p>&copy; 2025 EMADE, spol. s r.o. Všetky práva vyhradené.</p>
              <p className="mt-1">STK Centrum Orava - Profesionálne služby technickej kontroly vozidiel</p>
                <div className="mt-10 flex flex-col items-center">
                  <a
                    href="https://spacesolutions.sk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2 inline-block transition-opacity hover:opacity-80"
                    aria-label="Space Solutions"
                  >
                    <svg
                      className="w-[250px] transform scale-75 origin-top"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 294 27"
                    >
                      <path
                        d="M89.83,17.86v-3.27h10.48v-4.16h-10.48v-3.27h10.63l2.01-4.14h-13.8c-1.81,0-3.27,1.37-3.27,3.06v12.85c0,1.69,1.47,3.06,3.27,3.06h13.8l-2.01-4.14h-10.63ZM74.98,17.93c-1.74,0-3.11-.47-4.13-1.41-1.02-.94-1.52-2.22-1.52-3.84,0-1.76.51-3.13,1.52-4.12,1.02-.99,2.39-1.49,4.13-1.49,1.74,0,3.21.47,4.22,1.42l3.01-2.83c-1.87-1.78-4.28-2.67-7.24-2.67-3.15,0-5.61.94-7.39,2.81-1.74,1.88-2.6,4.17-2.6,6.87s.87,4.92,2.6,6.69c1.79,1.74,4.25,2.61,7.39,2.61,2.88,0,5.26-.8,7.12-2.4l-3.05-2.89c-1.07.82-2.43,1.23-4.07,1.23M57.77,5.71s-.02-.04-.03-.06c-.71-1.59-2.37-2.62-4.21-2.62-1.51,0-2.89.69-3.73,1.81-.2.27-.37.56-.5.87l-6.97,16.29h4.7l1.14-2.67h10.7l1.18,2.67h4.7l-6.98-16.29ZM49.95,15.18l2.06-4.86,1.5-3.49,1.27,2.96,2.31,5.38h-7.14ZM40.81,4.98c-1.88-1.3-4.57-1.96-8.05-1.96h-5.11c-1.62,0-2.96,1.09-3.23,2.54-.03.17-.05.35-.05.53v15.92h4.43v-4.41h.01V7.15s3.94,0,3.94,0c.32,0,.63,0,.92.02,3.33.13,5.16.99,5.48,2.57.04.17.05.35.05.53,0,.96-.45,1.7-1.34,2.23-1.07.62-2.77.94-5.11.94h-1.25l-2.68,4.14h3.93c.94,0,1.89-.05,2.82-.16,2.16-.27,3.91-.86,5.24-1.79,1.87-1.31,2.81-3.09,2.81-5.34,0-2.26-.94-4-2.82-5.3M8.23,8.59c.03-1.35,2.97-1.65,4.37-1.67.98,0,3.83.23,6.07,1.69l2.42-2.96C17.19,1.93,4.01,1.46,4.12,8.81c.08,4.15,3.96,5.34,8.02,5.72,3.48.26,4.97.84,4.97,1.75.11,1.88-7.45,2.39-10.7.12l-2.42,2.96c1.69,1.82,5.82,2.65,8.49,2.63,4.58-.01,8.58-1.32,8.71-5.87-.16-7.5-13.05-4.32-12.98-7.54"
                        fill="currentColor"
                        opacity=".49"
                      ></path>
                      <path
                        d="M120.69,16.27c0-.91-1.49-1.49-4.97-1.75-4.06-.38-7.94-1.57-8.03-5.72-.11-7.35,13.07-6.88,16.97-3.16l-2.42,2.96c-2.24-1.46-5.09-1.69-6.07-1.69-1.39.02-4.34.32-4.37,1.67-.07,3.22,12.82.04,12.97,7.54-.13,4.55-4.14,5.85-8.71,5.87-2.67.02-6.81-.81-8.49-2.63l2.42-2.96c3.24,2.27,10.81,1.76,10.7-.12M138.47,3.02c3.32,0,5.95.91,7.91,2.74,2.01,1.8,3.01,4.05,3.01,6.75s-1,4.95-3.01,6.78c-1.97,1.8-4.6,2.7-7.91,2.7-3.3,0-5.96-.9-7.93-2.7-1.99-1.86-2.99-4.12-2.99-6.78s1-4.92,2.99-6.75c1.95-1.83,4.6-2.74,7.93-2.74M133.89,16.39c1.31.98,2.84,1.47,4.58,1.47,1.74,0,3.32-.49,4.56-1.47,1.29-1.01,1.93-2.3,1.93-3.88s-.64-2.87-1.93-3.84c-1.23-1-2.75-1.51-4.56-1.51s-3.3.5-4.58,1.51c-1.27,1-1.91,2.29-1.91,3.84s.64,2.84,1.91,3.88M152.81,18.93V3.02h4.43v14.84h10.88l1.76,4.14h-13.8c-1.81,0-3.27-1.37-3.27-3.06M170.16,12.51V3.02h4.45v8.73c0,4.07,1.8,6.1,5.39,6.1,3.59,0,5.41-2.03,5.41-6.1V3.02h4.43v9.49c0,2.77-.83,5.04-2.5,6.82-1.67,1.78-4.11,2.67-7.34,2.67s-5.67-.89-7.34-2.67c-1.67-1.78-2.5-4.05-2.5-6.82h0ZM204.89,21.99h-4.43l.07-14.8c0-2.31,2.02-4.18,4.49-4.18h7.09v4.14h-7.22v14.84h0ZM198.39,7.16h-5.21V3.02h7.79l-2.58,4.14ZM219.65,21.99h-4.43V3.02h4.43v18.98ZM233.79,3.02c3.32,0,5.95.91,7.91,2.74,2.01,1.8,3.01,4.05,3.01,6.75,0,2.7-1,4.95-3.01,6.78-1.97,1.8-4.6,2.7-7.91,2.7-3.3,0-5.96-.9-7.93-2.7-1.99-1.86-2.99-4.12-2.99-6.78,0-2.66,1-4.92,2.99-6.75,1.95-1.83,4.6-2.74,7.93-2.74M229.21,16.39c1.31.98,2.84,1.47,4.58,1.47,1.74,0,3.32-.49,4.56-1.47,1.28-1.01,1.93-2.3,1.93-3.88s-.64-2.87-1.93-3.84c-1.23-1-2.75-1.51-4.56-1.51s-3.3.5-4.58,1.51c-1.27,1-1.91,2.29-1.91,3.84s.64,2.84,1.91,3.88M252.26,21.99h-4.43V5.91c0-1.32.94-2.52,2.32-2.82,1.14-.24,2.29.15,3,.96l9.9,11.36V3.02h4.42v16.17c0,1.55-1.34,2.8-3,2.8-.9,0-1.76-.38-2.33-1.03l-9.9-11.36v12.39ZM285.57,16.27c0-.91-1.88-1.49-5.64-1.75-2.92-.22-5.19-.82-6.8-1.78-1.61-.97-2.42-2.28-2.42-3.93,0-1.86.86-3.29,2.59-4.29,1.72-1,4.1-1.5,7.13-1.5,1.68,0,3.44.25,5.27.75,1.9.53,3.21,1.15,3.92,1.88l-2.62,3.2c-.52-.53-1.47-.94-2.83-1.23-1.43-.31-2.68-.46-3.74-.46-1.26,0-2.3.07-3.12.22-.82.15-1.38.33-1.69.53-.31.21-.46.43-.46.68,0,.92,1.84,1.55,5.51,1.88,6.23.49,9.34,2.38,9.34,5.66,0,1.8-.82,3.23-2.46,4.28-1.64,1.05-4.05,1.58-7.24,1.58-1.8,0-3.57-.24-5.31-.72-1.84-.5-3.13-1.14-3.88-1.91l2.62-3.2c.54.54,1.48.95,2.81,1.23,1.43.31,2.68.46,3.76.46,3.51,0,5.27-.53,5.27-1.58h0Z"
                        fill="currentColor"
                        opacity=".49"
                      ></path>
                    </svg>
                  </a>
                  <p className="text-[0.95em] text-gray-400">
                    Stránku vytvorilo{' '}
                    <a
                      href="https://spacesolutions.sk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline transition-colors hover:text-gray-400"
                    >
                      Space Solutions
                    </a>
                    .
                  </p>
                </div>
            </div>
            <div className="order-1 flex space-x-6 text-sm justify-center">
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