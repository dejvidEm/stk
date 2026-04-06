'use client';

import { useState } from 'react';
import { 
  Droplets, 
  Car, 
  Sparkles, 
  Shield, 
  Clock, 
  CheckCircle,
  Check,
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

  const carwashProgramsCard = [
    {
      name: 'Platinum',
      price: '14,00 €',
      color: 'bg-yellow-500',
      description:
        'vysokotlakové predumytie, aktívna pena, šampón, umytie kolies, vysokotlakové umytie podvozku, penový vosk + zaleštenie, sušenie, 10–12 minút',
    },
    {
      name: 'Exclusive',
      price: '12,00 €',
      color: 'bg-orange-500',
      description:
        'vysokotlakové predumytie, aktívna pena, šampón, umytie kolies, vysokotlakové umytie podvozku, sušenie, 9–11 minút',
    },
    {
      name: 'Wax',
      price: '9,00 €',
      color: 'bg-purple-500',
      description:
        'vysokotlakové predumytie, šampón, umytie kolies, vysokotlakové umytie podvozku, vosk, sušenie, 9–11 minút',
    },
    {
      name: 'Standard',
      price: '7,00 €',
      color: 'bg-green-500',
      description:
        'vysokotlakové predumytie, šampón, umytie kolies, vysokotlakové umytie podvozku, sušenie, 8–10 minút',
    },
    {
      name: 'Basic',
      price: '6,00 €',
      color: 'bg-blue-500',
      description:
        'vysokotlakové predumytie, šampón, umytie kolies, sušenie, 7–9 minút',
    },
  ] as const;

  const umyvacBoxSteps = [
    {
      title: 'Čistič diskov-špeciál',
      lines: [
        'Špeciálny čistič diskov na čistenie odolných nečistôt v oblasti diskov. Doba pôsobenia max. 30 sek.',
        'Použite postrekovaciu trubicu s modrou hadicou.',
      ],
    },
    {
      title: 'Odstraňovač mušiek-špeciál',
      lines: [
        'Predbežný čistič na rozpúšťanie hmyzu a peľu na vozidle. Doba pôsobenia max. 30 sek.',
        'Použite postrekovaciu trubicu s modrou hadicou.',
      ],
    },
    {
      title: 'XXL-Pena',
      lines: [
        'Účinná pena na rozpustenie nečistôt na diskoch a vozidle. Doba pôsobenia max. 30 sek.',
        'Použite penovú trubicu so zelenou hadicou.',
      ],
    },
    {
      title: 'Vysokotlakové umývanie',
      lines: [
        'Odstraňovanie hrubých nečistôt pomocou silného vysokotlakového lúča (pracovný tlak cca 85 bar).',
        'Použite postrekovaciu trubicu s modrou hadicou.',
        'Minimálny odstup 30 cm!',
      ],
    },
    {
      title: 'Mäkká umývacia kefa',
      lines: [
        'Umývanie rozpustených nečistôt s mäkkou šampónovacou umývacou kefou.',
        'Použite umývaciu kefu s červenou hadicou.',
      ],
    },
    {
      title: 'Opláchnutie čistou vodou',
      lines: [
        'Opláchnutie zvyškov šampónu a špinavej vody z vozidla.',
        'Použite postrekovaciu trubicu s modrou hadicou.',
        'Minimálny odstup 30 cm!',
      ],
    },
    {
      title: 'Horúci vosk',
      lines: [
        'Vysoko kvalitný konzervačný prostriedok s leskom s formulou na ochranu laku.',
        'Na zachovanie hodnoty osobného automobilu.',
        'Použite penovú trubicu so zelenou hadicou.',
      ],
    },
    {
      title: 'Oplachovanie s leskom bez škvŕn',
      lines: [
        'Dodatočné oplachovanie s demineralizovanou vodou pre výsledok bez škvŕn.',
        'Použite postrekovaciu trubicu s modrou hadicou.',
        'Minimálny odstup 30 cm!',
      ],
    },
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("/images/namestovo_2.webp")',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-red-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-10">
            <div className="text-center lg:text-left flex-1 min-w-0">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <Droplets className="h-12 w-12 shrink-0" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Autoumyváreň
                </h1>
              </div>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto lg:mx-0">
                <span className="block">Automatický umývací portál 24/7</span>
                <span className="block mt-2">Umývacie boxy 24/7</span>
                <span className="block mt-2">Vysávač</span>
                <span className="block mt-2">Automatický čistič rohoží</span>
              </p>
            </div>
            <aside
              className="w-full lg:w-auto lg:max-w-xs xl:max-w-sm shrink-0 flex lg:items-center lg:justify-end"
              aria-label="Obmedzenie rozmerov vozidla"
            >
              <div className="flex items-start gap-3 rounded-xl border-2 border-amber-400/90 bg-amber-950/45 backdrop-blur-md p-4 md:p-5 text-left shadow-lg w-full">
                <AlertTriangle
                  className="h-7 w-7 md:h-8 md:w-8 text-amber-400 shrink-0 mt-0.5"
                  aria-hidden
                />
                <div>
                  <p className="text-xs font-bold text-amber-200 uppercase tracking-wide mb-1.5">
                    Upozornenie
                  </p>
                  <p className="text-sm md:text-base text-white/95 font-medium leading-snug">
                    Max. výška vozidla 2,30 m, max. šírka vozidla 2,50 m
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>


      {/* Prepaid Card Promotion Banner */}
      <section className="bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 text-white py-8 shadow-xl relative overflow-visible">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 flex-1">
              <div className="bg-white/30 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <Star className="h-10 w-10 fill-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                  Predplatená karta - Bonus 10-25%
                </h2>
                <p className="text-lg text-white/95">
                  Ušetrite pri pravidelnom umývaní vozidla s predplatenou kartou
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white text-yellow-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors cursor-pointer shadow-lg">
                Zistiť viac
              </div>
            </div>
            <div className="flex-shrink-0 relative">
              <img 
                src="/Karta1.jpg" 
                alt="Predplatená karta" 
                className="h-48 md:h-64 lg:h-80 w-auto rounded-xl shadow-2xl object-contain border-2 border-white/30 -my-8 md:-my-12 lg:-my-16"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Umývací box — odporúčaný postup */}
      <section
        id="umyvaci-box"
        className="py-10 md:py-12 bg-white border-t border-gray-200"
        aria-labelledby="umyvaci-box-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-8">
            <h2
              id="umyvaci-box-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
            >
              Umývací box
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Postup a správne použitie trubíc v samoobslužnom umývacom boxe v areáli STK Námestovo
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl border border-slate-200/80 shadow-sm p-4 sm:p-6 md:p-7 max-w-4xl mx-auto">
            <div className="text-center mb-4 md:mb-5 pb-3 border-b border-slate-200/80">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                Odporúčanie programu
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-blue-700 leading-snug">
                Prémiové umývanie | Intenzívne umývanie | Rýchle umývanie
              </p>
            </div>

            <ol className="space-y-5 md:space-y-6 list-none pl-0 m-0">
              {umyvacBoxSteps.map((item, index) => (
                <li
                  key={item.title}
                  className="relative pl-0 md:pl-12 border-b border-slate-200/90 pb-5 last:border-b-0 last:pb-0"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-3">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm md:absolute md:left-0 md:top-0"
                      aria-hidden
                    >
                      {index + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1.5">
                        {item.title}
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700 leading-snug list-none pl-0 m-0">
                        {item.lines.map((line, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-blue-600 font-bold shrink-0" aria-hidden>
                              •
                            </span>
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Wash Programs */}
      {/* <section className="py-16">
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
          {/* <div className="bg-white rounded-xl shadow-lg p-8">
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
      </section> */}

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

      {/* Terms and Instructions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Pokyny na obsluhu a dôležité informácie
            </h2>
            <p className="text-base md:text-lg text-gray-600 font-normal">
              Všeobecné obchodné podmienky
            </p>
          </div>

          <div
            className="mb-10 flex items-start gap-3 rounded-xl border-2 border-amber-400 bg-amber-50 p-4 md:p-5 text-left shadow-md"
            role="note"
            aria-label="Zodpovednosť za škodu na umývacom portáli"
          >
            <AlertTriangle
              className="h-7 w-7 md:h-8 md:w-8 text-amber-600 shrink-0 mt-0.5"
              aria-hidden
            />
            <p className="text-sm md:text-base text-gray-800 font-medium leading-relaxed">
              V prípade vzniku škody na umývacom portáli z dôvodu nedodržania pokynov (napr. vozidlo s otvorenou korbou, neupevnené časti, zásah do umývacieho programu a pod.) bude táto škoda vymáhaná od prevádzkovateľa vozidla.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Pokyny na obsluhu */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 flex flex-col h-full">
              <div className="flex items-start gap-4 md:gap-6 flex-1">
                <div className="bg-green-100 p-2 md:p-3 rounded-lg flex-shrink-0">
                  <Car className="h-6 w-6 md:h-7 md:w-7 text-green-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Pokyny na obsluhu</h3>
                  <ul className="text-sm md:text-base text-gray-700 space-y-3 leading-relaxed list-none pl-0 m-0">
                    {[
                      'Zakúpte si umývací program pri samoobslužnom stojane.',
                      'Na poskytovanie služby sa vzťahuje výnimka podľa §3 ods. 2 písm. b bod 4 zákona č. 289/2008 o používaní elektronickej registračnej pokladnice (predaj služieb prostredníctvom predajných automatov).',
                      'V prípade, že potrebujete pokladničný doklad, umývací program si zakúpte na recepcii STK počas pracovnej doby.',
                      'Pre otvorenie vstupnej brány zadajte čiarový kód na termináli.',
                      'Autom zájdite do stredu umývacej linky, kým ukazovateľ neukáže „STOP“. Vypnite motor, zatiahnite ručnú brzdu, na automatickej prevodovke zvoľte „P“.',
                      'Sklopte spätné zrkadlá, zasuňte alebo odmontujte anténu, ťažné zariadenie, prípadne inú nesériovú výbavu (spojler). Zatvorte bočné a strešné okná.',
                      'Opustite automobil – umývací program prebieha automaticky.',
                      'Program sa spustí stlačením tlačidla „ŠTART“ na ovládacom paneli.',
                      'Počas umývania nevstupujte do pracovného priestoru umývacej linky. V prípade nebezpečenstva stlačte núdzové tlačidlo „STOP“.',
                      'Po rozsvietení šípky je program ukončený. Po otvorení brán opustite s vozidlom umývaciu linku.',
                    ].map((text, i) => (
                      <li key={i} className="flex gap-3">
                        <Check
                          className="h-5 w-5 text-green-600 shrink-0 mt-0.5"
                          strokeWidth={2.5}
                          aria-hidden
                        />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Programy — pod sebou, ako na hlavnej stránke */}
            <div
              id="programy"
              className="flex flex-col h-full min-w-0"
              aria-labelledby="carwash-programs-heading"
            >
              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/50 shadow-xl flex flex-col h-full">
                <div className="space-y-6 flex flex-col flex-1">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100/80 backdrop-blur-sm rounded-full mb-4">
                      <Droplets className="h-10 w-10 text-blue-600" aria-hidden />
                    </div>
                    <p className="text-sm font-semibold text-blue-700 mb-1">Automatický portál</p>
                    <h3 id="carwash-programs-heading" className="text-2xl font-bold mb-2 text-gray-900">
                      5 umývacích programov
                    </h3>
                    <p className="text-sm text-gray-600">
                      Platí na umývacích boxoch a na automatickom umývacom portáli v areáli STK Námestovo
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3 flex-1">
                    {carwashProgramsCard.map((program, index) => (
                      <div
                        key={index}
                        className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50 hover:bg-white transition-colors shadow-sm"
                      >
                        <div className="flex gap-3 items-start justify-between">
                          <div className={`mt-1.5 w-3 h-3 rounded-full shrink-0 ${program.color}`} />
                          <div className="min-w-0 flex-1">
                            <span className="font-semibold text-gray-900">{program.name}</span>
                            <p className="text-[11px] sm:text-xs text-gray-600 mt-1 leading-snug">
                              {program.description}
                            </p>
                          </div>
                          <div className="text-right shrink-0 pt-0.5">
                            <div className="font-bold text-gray-900 whitespace-nowrap">{program.price}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-200/50 mt-auto">
                    <div className="flex items-center justify-center gap-6 text-sm flex-wrap">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden />
                        <span className="text-gray-700">Karta</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" aria-hidden />
                        <span className="text-gray-700">Hotovosť</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" aria-hidden />
                        <span className="text-gray-700">Google/Apple Pay</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                    <div className="text-sm text-gray-700 space-y-3 leading-relaxed">
                      <p>
                        Prosím dodržiavajte všeobecné bezpečnostné pokyny v hale. Pri nedodržaní podmienok a pokynov prevádzkovateľ nepreberá zodpovednosť za prípadné škody.
                      </p>
                      <p>
                        Umývanie špecifických vozidiel ako pickup, dodávka s otvorenou ložnou plochou, traktor, obytný automobil, príves a old-timer, prosím prekonzultujte vopred s personálom umývacej linky.
                      </p>
                      <p className="font-semibold text-gray-900">
                        Vozidlá s otvorenou úložnou plochou, zadným rezervným kolesom, navijakom a strešným boxom je zakázané umývať!
                      </p>
                    </div>
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
                    <p className="text-sm text-gray-700 leading-relaxed">
                      V prípade vzniku škody na umývacom portáli z dôvodu nedodržania pokynov (napr. vozidlo s otvorenou korbou, neupevnené časti, zásah do umývacieho programu a pod.) bude táto škoda vymáhaná od prevádzkovateľa vozidla.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Instructions */}
            <div className="space-y-6">
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
                      <li>• <strong>Platba:</strong> Hotovosť, karta, Apple Pay, Google Pay, predplatená karta</li>
                      <li>• <strong>Predplatená karta:</strong> Bonus 10-25% pri kúpe - spropagujte!</li>
                      <li>• Maximálne prípustné rozmery: výška 2,0m, šírka 2,3m</li>
                      <li>• Vonkajší rozchod kolies minimálne 2,0m</li>
                      <li>• NON-STOP prevádzka - dostupné 24/7</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </div>

          {/* Payment Methods */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Platobné možnosti</h3>
            <div className="flex justify-center items-center gap-6 flex-wrap mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
                <span className="text-gray-700 font-medium">Karta</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-500 rounded"></div>
                <span className="text-gray-700 font-medium">Hotovosť</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded"></div>
                <span className="text-gray-700 font-medium">Google Pay</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded"></div>
                <span className="text-gray-700 font-medium">Apple Pay</span>
              </div>
            </div>
            
            {/* Prepaid Card Promotion */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Predplatená karta</h4>
              </div>
              <p className="text-lg font-semibold text-red-600 mb-2">
                Bonus 10 - 25% pri kúpe predplatenej karty!
              </p>
              <p className="text-gray-700">
                Ušetrite pri pravidelnom umývaní vozidla. Predplatená karta vám poskytne výhodnejšie ceny a bonus pri každom umytí.
              </p>
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
            Navštívte našu autoumyváreň priamo v areáli STK Námestovo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/namestovo/kontakt"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-white text-blue-600 hover:bg-gray-50 transition-colors"
            >
              Ako sa k nám dostať
            </a>
            <a
              href="/namestovo/sluzby"
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