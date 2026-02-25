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
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105 flex flex-col h-full"
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
                      >
                        {center.email}
                      </a>
                    </div>

                  </div>

                  {/* Rezervácia button */}
                  <a 
                    href={`${center.url}/rezervacia`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-11 !mt-5 bg-brand-green-600 hover:bg-brand-green-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center group text-sm shrink-0"
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
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                    <span className="font-medium text-white">Pondelok - Piatok</span>
                    <span className="font-semibold text-gray-300">06:00 - 16:30</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                    <span className="font-medium text-white">Sobota</span>
                    <span className="font-semibold text-gray-300">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                    <span className="font-medium text-gray-400">Nedeľa</span>
                    <span className="font-semibold text-red-600">Zatvorené</span>
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
            answer: 'Ceny sa líšia podľa typu vozidla: Osobné vozidlá: STK 25€, EK 15€, STK+EK 35€. Nákladné vozidlá: STK 45€, EK 25€, STK+EK 60€. Motocykle: STK 20€, EK 12€, STK+EK 28€. Opakovaná kontrola má zľavnené ceny.'
          },
          {
            question: 'Čo ak môj vozidlo neprejde kontrolou?',
            answer: 'Pri neúspešnej kontrole dostanete protokol s uvedenými závadami. Závady rozdelujeme na malé (1 mesiac na opravu) a veľké (ihneď zakázanie prevádzky). Po oprave môžete absolvovať opakovanú kontrolu za zľavnenú cenu do 30 dní.'
          },
          {
            question: 'Ako dlho trvá technická kontrola?',
            answer: 'Doba kontroly závisí od typu: STK osobné vozidlo: 30-45 minút, EK: 15-20 minút, STK+EK: 45-60 minút. Nákladné vozidlá trvajú o 15-20 minút dlhšie. Expresné vybavenie je možné za príplatok 10€ (do 20 minút).'
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
                  answer: 'Áno, v našej prevádzke v Námestove máme kaviareň efCafé, kde si môžete počas čakania vychutnať kvalitnú kávu a občerstvenie. Kaviareň je otvorená Po-Pia: 06:00-16:30 a So: 08:00-12:00.'
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
                        info@emade.sk
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
                        info@stktvrdosin.sk
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
                        info@stklokca.sk
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
