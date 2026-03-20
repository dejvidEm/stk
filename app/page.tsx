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
  UtensilsCrossed,
  Calendar
} from 'lucide-react';
import { Kavivanar } from 'next/font/google';
import CarwashBanner from '@/components/CarwashBanner';
import SaturdayInfoBanner from '@/components/SaturdayInfoBanner';
import STKReminderLeadMagnet from '@/components/STKReminderLeadMagnet';
import STKPriceCalculator from '@/components/STKPriceCalculator';
import MainFAQ from '@/components/MainFAQ';
import LocationFAQ from '@/components/LocationFAQ';
import ReviewsSlider from '@/components/ReviewsSlider';
import { format } from 'date-fns';
import { sk } from 'date-fns/locale/sk';

/** Show email with [at] instead of @ (mailto still uses the real address). */
function emailDisplay(email: string): string {
  return email.replace(/@/g, '[at]');
}

export default function HomePage() {
  // Helper function to get next few Saturdays
  const getNextSaturdays = (count: number = 3): Date[] => {
    const saturdays: Date[] = [];
    const today = new Date();
    const currentDay = today.getDay();
    const daysUntilSaturday = (6 - currentDay + 7) % 7 || 7;
    
    let nextSaturday = new Date(today);
    nextSaturday.setDate(today.getDate() + daysUntilSaturday);
    
    for (let i = 0; i < count; i++) {
      const saturday = new Date(nextSaturday);
      saturday.setDate(nextSaturday.getDate() + (i * 7));
      saturdays.push(saturday);
    }
    
    return saturdays;
  };

  const upcomingSaturdays = getNextSaturdays(3);
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
      image: '/images/tvrdosin.png',
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {centers.map((center) => (
              <div 
                key={center.id} 
                role="link"
                tabIndex={0}
                aria-label={`Navštíviť stránku ${center.name}`}
                onClick={() => {
                  if (center.isDemo) {
                    window.location.href = center.url;
                  } else {
                    window.open(center.url, '_blank', 'noopener,noreferrer');
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (center.isDemo) {
                      window.location.href = center.url;
                    } else {
                      window.open(center.url, '_blank', 'noopener,noreferrer');
                    }
                  }
                }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105 flex flex-col h-full cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
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
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    ) : (
                      <a 
                        href={center.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 hover:bg-white text-brand-red-600 p-2 rounded-full transition-colors shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  
                </div>

                {/* Content */}
                <div className="p-5 text-brand-gray-900 flex flex-col flex-grow">

                  {/* Contact Info */}
                  <div className="space-y-2 mb-3 text-sm flex-grow">
                    <div className="flex items-start text-brand-gray-600">
                      <MapPin className="h-4 w-4 text-brand-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="flex-1">{center.address}</span>
                    </div>
                    <div className="flex items-center text-brand-gray-600">
                      <Phone className="h-4 w-4 text-brand-red-500 mr-2 flex-shrink-0" />
                      <a 
                        href={`tel:${center.phone}`}
                        className="hover:text-brand-red-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {center.phone}
                      </a>
                    </div>
                    <div className="flex items-center text-brand-gray-600">
                      <Clock className="h-4 w-4 text-brand-green-500 mr-2 flex-shrink-0" />
                      {center.hours}
                    </div>
                    <div className="flex items-center text-brand-gray-600">
                      <Mail className="h-4 w-4 text-brand-green-500 mr-2 flex-shrink-0" />
                      <a 
                        href={`mailto:${center.email}`}
                        className="hover:text-brand-green-600 transition-colors break-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {emailDisplay(center.email)}
                      </a>
                    </div>

                  </div>

                  {/* Rezervácia button */}
                  <a 
                    href={`${center.url}/rezervacia`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-11 !mt-5 bg-brand-green-600 hover:bg-brand-green-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center group text-sm shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Rezervácia termínu
                    <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* One line of badges */}
                  <div className="flex flex-wrap gap-1.5 justify-center py-3">
                    {(center.id === 'namestovo'
                      ? center.features.slice(-3)
                      : center.id === 'tvrdosin'
                        ? center.features.slice(2)
                        : center.features
                    ).map((feature, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Navštíviť stránku button */}
                  <div className="mt-auto">
                    {center.isDemo ? (
                      <Link 
                        href={center.url}
                        className="w-full h-11 bg-brand-red-600 hover:bg-brand-red-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center group text-sm shrink-0"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Navštíviť stránku
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      <a 
                        href={center.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-11 bg-brand-red-600 hover:bg-brand-red-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center group text-sm shrink-0"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Navštíviť stránku
                        <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saturday Info Banner */}
      <SaturdayInfoBanner />

      {/* Reviews Slider */}
      <ReviewsSlider />

      {/* Carwash Banner */}
      <CarwashBanner />

      {/* Coffee Section */}
      <section className="py-16 bg-gray-900">
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
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    efCafé Kaviareň
                  </h2>
                </div>
                <p className="text-lg text-gray-300 mb-6">
                  Počas čakania na technickú kontrolu si môžete vychutnať kvalitnú kávu a občerstvenie 
                  v našej útulnej kaviarni. Moderné prostredie s bezplatným Wi-Fi pripojením.
                </p>
              </div>

              {/* Opening Hours */}
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-brand-red-600" />
                  <h3 className="text-xl font-bold text-white">Otváracie hodiny</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center gap-4 p-3 bg-gray-800 rounded-lg">
                    <span className="font-medium text-white">Pondelok - Piatok</span>
                    <span className="font-semibold text-gray-300 shrink-0">07:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between items-center gap-4 p-3 bg-gray-800 rounded-lg">
                    <span className="font-medium text-white">Víkendy a sviatky</span>
                    <span className="font-semibold text-gray-300 shrink-0">08:00 - 21:00</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 flex items-center gap-3">
                  <UtensilsCrossed className="h-5 w-5 text-amber-600" />
                  <span className="text-sm font-medium text-white">Občerstvenie</span>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 flex items-center gap-3">
                  <Coffee className="h-5 w-5 text-amber-600" />
                  <span className="text-sm font-medium text-white">Kvalitná káva</span>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green-600" />
                  <span className="text-sm font-medium text-white">Wi-Fi zdarma</span>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 flex items-center gap-3">
                  <Star className="h-5 w-5 text-amber-500" />
                  <span className="text-sm font-medium text-white">Príjemné prostredie</span>
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

      {/* Price Calculator Section */}
      <section className="py-16 bg-gradient-to-br from-brand-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <STKPriceCalculator />
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
            <p className="text-lg text-brand-gray-600 mb-8 leading-relaxed">
              Fungujeme od roku 2002 — čiže takmer 25 rokov. Poskytujeme technické kontroly,
              emisné kontroly a kontrolu originality.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-brand-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-brand-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">Certifikované centrá</h3>
                <p className="text-brand-gray-600 leading-relaxed">
                  Spoľahlivá kontrola podľa platnej legislatívy.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-brand-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">Rýchle vybavenie</h3>
                <p className="text-brand-gray-600 leading-relaxed">
                  Možnosť objednania na presný dátum a čas — bez čakania v rade.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-brand-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">Online rezervácia</h3>
                <p className="text-brand-gray-600 leading-relaxed">
                  U nás presne viete, kedy prídete — a kedy odídete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STK Reminder Lead Magnet */}
      <STKReminderLeadMagnet />

      {/* Main FAQ Section */}
      <MainFAQ
        faqs={[
          {
            question: 'Ako často musím absolvovať technickú kontrolu?',
            answer: 'Frekvencia technickej kontroly závisí od typu vozidla: Osobné vozidlá (M1) - každé 2 roky, prvá kontrola po 4 rokoch od prvej registrácie. Nákladné vozidlá (N2, N3) - každý rok, prvá kontrola po 1 roku. Motocykle (L) - každé 2 roky, prvá kontrola po 4 rokoch.'
          },
          {
            question: 'Môžem si rezervovať termín online?',
            answer: 'Áno, online rezervácia je dostupná 24/7 na našej webstránke. Vyberte si typ vozidla, službu, dátum a čas. Potvrdenie rezervácie dostanete na e-mail a SMS. Rezerváciu môžete zrušiť alebo zmeniť najneskôr 24 hodín pred termínom.'
          },
          {
            question: 'Aké doklady si mám priniesť na STK?',
            answer: 'Pre technickú kontrolu potrebujete: Malý technický preukaz vozidla, doklad o poistení zodpovednosti, platný vodičský preukaz, predchádzajúci protokol STK (ak máte). Pre firemné vozidlá navyše výpis z obchodného registra.'
          },
          {
            question: 'Koľko stojí technická kontrola?',
            answer: 'Ceny sa líšia podľa kategórie vozidla a typu paliva. Osobné vozidlá (M1, N1, L5e, L7e): STK 50,90 €, EK od 46,90 €. Nákladné motorové vozidlá (N2, N3, M2, M3, PS): STK 77,90 €, EK od 57,90 €. Motocykle (L3, L4, L6): STK 39,90 €, EK sa nevykonáva. Opakovaná kontrola (STK): osobné 25,90 €, nákladné 41,90 €, motocykle 20,90 €.'
          },
          {
            question: 'Čo ak môj vozidlo neprejde kontrolou?',
            answer: 'Pri neúspešnej kontrole dostanete protokol s uvedenými závadami. Závady rozdelujeme na malé (1 mesiac na opravu) a veľké (ihneď zakázanie prevádzky). Po oprave môžete absolvovať opakovanú kontrolu za zľavnenú cenu do 30 dní.'
          },
          {
            question: 'Ako dlho trvá technická kontrola?',
            answer: 'Doba kontroly závisí od typu: STK osobné vozidlo: 30-45 minút, EK: 15-20 minút, STK+EK: 45-60 minút. Nákladné vozidlá trvajú o 15-20 minút dlhšie. Expresné vybavenie je možné za príplatok 10€ (do 20 minút).'
          },
          {
            question: 'Kedy netreba STK a EK?',
            answer: 'V týchto prípadoch sa STK ani EK nevykonáva: O1 – prípojné vozidlo do 750 kg (nebrzdené); R1 – prípojné vozidlo za traktor do 1500 kg; L1e – motorky so zdvihovým objemom do 50 cm³ a s konštrukčnou rýchlosťou do 45 km/hod; L2e – trojkolesový moped so zdvihovým objemom do 50 cm³ a s konštrukčnou rýchlosťou do 45 km/hod.'
          }
        ]}
      />

      {/* Location-specific FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-3">
              FAQ pre jednotlivé pobočky
            </h2>
            <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
              Špecifické otázky a odpovede pre každú z našich prevádzok
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* STK Námestovo FAQ */}
            <LocationFAQ
              locationName="STK Námestovo"
              locationAddress="Za vodou 1068, 029 01 Námestovo"
              faqs={[
                {
                  question: 'Máte v Námestove kaviareň?',
                  answer: 'Áno, v našej prevádzke v Námestove máme kaviareň efCafé, kde si môžete počas čakania vychutnať kvalitnú kávu a občerstvenie. Kaviareň je otvorená Po-Pia: 07:00-21:00 a víkendy a sviatky: 08:00-21:00.'
                },
                {
                  question: 'Je v Námestove dostupné parkovanie?',
                  answer: 'Áno, máme vlastné parkovisko s dostatočnou kapacitou. Parkovanie je pre našich zákazníkov bezplatné počas doby kontroly.'
                },
                {
                  question: 'Máte v Námestove autoumyváreň?',
                  answer: 'Áno, v areáli STK Námestovo máme modernú autoumyváreň s automatickým portálom, ktorý je dostupný 24/7. Okrem toho ponúkame aj ecoČistiareň a práčovňu.'
                },
                {
                  question: 'Ako dlho trvá cesta z centra Námestova?',
                  answer: 'Naša prevádzka sa nachádza len 5 minút autom od centra Námestova. Je ľahko dostupná aj pešo alebo na bicykli.'
                }
              ]}
            />

            {/* STK Tvrdošín FAQ */}
            <LocationFAQ
              locationName="STK Tvrdošín"
              locationAddress="Vojtaššákova 908, 027 44 Tvrdošín"
              faqs={[
                {
                  question: 'Aké sú otváracie hodiny v Tvrdošíne?',
                  answer: 'Naša prevádzka v Tvrdošíne je otvorená Po-Pia: 07:00-15:30. V sobotu pracujeme podľa dohody. Odporúčame rezerváciu vopred, najmä v dopoludňajších hodinách.'
                },
                {
                  question: 'Je v Tvrdošíne možné expresné vybavenie?',
                  answer: 'Áno, ponúkame expresné vybavenie do 20 minút za príplatok 10€. Táto služba je ideálna pre zaneprázdnených zákazníkov. Rezerváciu je potrebné urobiť vopred.'
                },
                {
                  question: 'Máte v Tvrdošíne autoumyváreň?',
                  answer: 'Áno, v areáli máme autoumyváreň s automatickým portálom. Okrem toho máme aj kaviareň, kde si môžete počkať počas kontroly.'
                },
                {
                  question: 'Ako sa dostanem k STK Tvrdošín?',
                  answer: 'Naša prevádzka sa nachádza na Vojtaššákovej ulici v Tvrdošíne, ľahko dostupná z hlavnej cesty. Máme vlastné parkovisko pre zákazníkov.'
                }
              ]}
            />

            {/* STK Lokca FAQ */}
            <LocationFAQ
              locationName="STK Lokca"
              locationAddress="Polianka 753, 029 51 Lokca"
              faqs={[
                {
                  question: 'Aké služby poskytujete v Lokci?',
                  answer: 'V našej prevádzke v Lokci poskytujeme technické kontroly (STK) a emisné kontroly (EK) pre všetky typy vozidiel. Máme moderné vybavenie a skúsený personál.'
                },
                {
                  question: 'Je v Lokci možné rezervovať termín?',
                  answer: 'Áno, rezerváciu môžete urobiť online cez našu webstránku alebo telefonicky na čísle 0948 422333. Odporúčame rezerváciu vopred, najmä v dopoludňajších hodinách.'
                },
                {
                  question: 'Aké sú otváracie hodiny v Lokci?',
                  answer: 'Naša prevádzka v Lokci je otvorená Po-Pia: 06:00-15:30. V sobotu a nedeľu máme zatvorené. Pre sobotné služby kontaktujte našu prevádzku v Námestove.'
                },
                {
                  question: 'Máte v Lokci parkovanie?',
                  answer: 'Áno, máme vlastné parkovisko s dostatočnou kapacitou. Parkovanie je pre našich zákazníkov bezplatné počas doby kontroly.'
                }
              ]}
            />
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
                        info[at]emade.sk
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-brand-green-400 flex-shrink-0" />
                      <span className="text-brand-gray-300 text-sm">Po-Pia: 06:00-16:30</span>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-brand-gray-800">
                      <div className="flex items-start space-x-3 mb-2">
                        <Calendar className="h-4 w-4 text-brand-green-400 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <span className="text-brand-gray-300 text-xs italic block mb-2">Sobotné rezervácie čoskoro dostupné</span>
                          <div className="flex flex-wrap gap-1.5">
                            {upcomingSaturdays.map((date, idx) => (
                              <span 
                                key={idx}
                                className="inline-flex items-center px-2 py-0.5 rounded bg-brand-green-500/20 text-brand-green-300 text-[10px] font-medium"
                              >
                                {format(date, 'd.M.', { locale: sk })}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
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
                        info[at]stktvrdosin.sk
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-brand-green-400 flex-shrink-0" />
                      <span className="text-brand-gray-300 text-sm">Po-Pia: 07:00-15:30</span>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-brand-gray-800">
                      <div className="flex items-start space-x-3 mb-2">
                        <Calendar className="h-4 w-4 text-brand-green-400 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <span className="text-brand-gray-300 text-xs italic block mb-2">Sobotné rezervácie čoskoro dostupné</span>
                          <div className="flex flex-wrap gap-1.5">
                            {upcomingSaturdays.map((date, idx) => (
                              <span 
                                key={idx}
                                className="inline-flex items-center px-2 py-0.5 rounded bg-brand-green-500/20 text-brand-green-300 text-[10px] font-medium"
                              >
                                {format(date, 'd.M.', { locale: sk })}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
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
                        info[at]stklokca.sk
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-brand-green-400 flex-shrink-0" />
                      <span className="text-brand-gray-300 text-sm">Po-Pia: 06:00-15:30</span>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-brand-gray-800">
                      <div className="flex items-start space-x-3 mb-2">
                        <Calendar className="h-4 w-4 text-brand-green-400 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <span className="text-brand-gray-300 text-xs italic block mb-2">Sobotné rezervácie čoskoro dostupné</span>
                          <div className="flex flex-wrap gap-1.5">
                            {upcomingSaturdays.map((date, idx) => (
                              <span 
                                key={idx}
                                className="inline-flex items-center px-2 py-0.5 rounded bg-brand-green-500/20 text-brand-green-300 text-[10px] font-medium"
                              >
                                {format(date, 'd.M.', { locale: sk })}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
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
    </div>
  );
}
