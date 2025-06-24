'use client';

import { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Clock,
  Shield,
  AlertCircle,
  FileText,
  CreditCard,
  Phone
} from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'Všetky otázky', icon: HelpCircle },
    { id: 'stk', name: 'Technická kontrola', icon: Shield },
    { id: 'booking', name: 'Rezervácia', icon: Clock },
    { id: 'documents', name: 'Doklady', icon: FileText },
    { id: 'payment', name: 'Platba', icon: CreditCard },
    { id: 'other', name: 'Ostatné', icon: Phone }
  ];

  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'Ako často musím absolvovať technickú kontrolu?',
      answer: 'Frekvencia technickej kontroly závisí od typu vozidla: Osobné vozidlá (M1) - každé 2 roky, prvá kontrola po 4 rokoch od prvej registrácie. Nákladné vozidlá (N2, N3) - každý rok, prvá kontrola po 1 roku. Motocykle (L) - každé 2 roky, prvá kontrola po 4 rokoch.',
      category: 'stk',
      tags: ['frekvencia', 'osobné', 'nákladné', 'motocykle']
    },
    {
      id: 2,
      question: 'Môžem si rezervovať termín online?',
      answer: 'Áno, online rezervácia je dostupná 24/7 na našej webstránke. Vyberte si typ vozidla, službu, dátum a čas. Potvrdenie rezervácie dostanete na e-mail a SMS. Rezerváciu môžete zrušiť alebo zmeniť najneskôr 24 hodín pred termínom.',
      category: 'booking',
      tags: ['online', 'rezervácia', 'termín', 'potvrdenie']
    },
    {
      id: 3,
      question: 'Aké doklady si mám priniesť na STK?',
      answer: 'Pre technickú kontrolu potrebujete: Malý technický preukaz vozidla, doklad o poistení zodpovednosti, platný vodičský preukaz, predchádzajúci protokol STK (ak máte). Pre firemné vozidlá navyše výpis z obchodného registra.',
      category: 'documents',
      tags: ['doklady', 'technický preukaz', 'poistenie', 'vodičský preukaz']
    },
    {
      id: 4,
      question: 'Koľko stojí technická kontrola?',
      answer: 'Ceny sa líšia podľa typu vozidla: Osobné vozidlá: STK 25€, EK 15€, STK+EK 35€. Nákladné vozidlá: STK 45€, EK 25€, STK+EK 60€. Motocykle: STK 20€, EK 12€, STK+EK 28€. Opakovaná kontrola má zľavnené ceny. Akceptujeme hotovosť, karty aj bezhotovostný platby.',
      category: 'payment',
      tags: ['cena', 'platba', 'osobné', 'nákladné', 'motocykle']
    },
    {
      id: 5,
      question: 'Čo ak môj vozidlo neprejde kontrolou?',
      answer: 'Pri neúspešnej kontrole dostanete protokol s uvedenými závadami. Závady rozdelujeme na malé (1 mesiac na opravu) a veľké (ihneď zakázanie prevádzky). Po oprave môžete absolvovať opakovanú kontrolu za zľavnenú cenu do 30 dní.',
      category: 'stk',
      tags: ['neúspešná', 'závady', 'opakovaná kontrola', 'oprava']
    },
    {
      id: 6,
      question: 'Ako dlho trvá technická kontrola?',
      answer: 'Doba kontroly závisí od typu: STK osobné vozidlo: 30-45 minút, EK: 15-20 minút, STK+EK: 45-60 minút. Nákladné vozidlá trvajú o 15-20 minút dlhšie. Expresné vybavenie je možné za príplatok 10€ (do 20 minút).',
      category: 'stk',
      tags: ['trvanie', 'doba', 'expresné', 'osobné', 'nákladné']
    },
    {
      id: 7,
      question: 'Môžem zrušiť alebo zmeniť rezerváciu?',
      answer: 'Rezerváciu môžete zrušiť alebo zmeniť najneskôr 24 hodím pred termínom cez náš online systém alebo telefonicky. Pri zrušení menej ako 24 hodín vopred sa účtuje storno poplatok 5€. Zmena termínu je bezplatná.',
      category: 'booking',
      tags: ['zrušenie', 'zmena', 'storno', 'poplatok']
    },
    {
      id: 8,
      question: 'Pracujete aj cez víkendy?',
      answer: 'Pracujeme v sobotu od 8:00 do 14:00. V nedeľu máme zatvorené. Sobotné termíny sú veľmi obľúbené, preto odporúčame rezerváciu vopred. Za sobotné služby sa účtuje príplatok 5€ pre osobné vozidlá.',
      category: 'other',
      tags: ['víkend', 'sobota', 'nedeľa', 'príplatok']
    },
    {
      id: 9,
      question: 'Čo je emisná kontrola a kedy ju potrebujem?',
      answer: 'Emisná kontrola (EK) meria množstvo škodlivých látok vo výfukových plynoch. Vyžaduje sa pre všetky vozidlá s motorom. Platnosť: benzínové motory 2 roky, dieselové 1 rok. Prvá EK sa vykonáva po 4 rokoch od prvej registrácie.',
      category: 'stk',
      tags: ['emisná kontrola', 'EK', 'benzín', 'diesel', 'platnosť']
    },
    {
      id: 10,
      question: 'Máte náhradné diely a servis?',
      answer: 'Neposkytujeme servisné služby ani predaj náhradných dielov. Sme špecializovaná STK stanica. Odporúčame vám overené autoservisy v okolí, ktoré dokážu rýchlo odstrániť zistené závady pred opakovanou kontrolou.',
      category: 'other',
      tags: ['servis', 'náhradné diely', 'oprava', 'autoservis']
    },
    {
      id: 11,
      question: 'Ako sa pripraviť na technickú kontrolu?',
      answer: 'Pred kontrolou skontrolujte: funkčnosť všetkých svetiel, stav pneumatík a hĺbku dezénu (min. 1,6mm), hladinu oleja a chladiacej kvapaliny, funkčnosť klaksónu a smeroviek. Vyčistite evidenčné čísla a odstráňte predmety z vozidla.',
      category: 'stk',
      tags: ['príprava', 'svetlá', 'pneumatiky', 'kontrola']
    },
    {
      id: 12,
      question: 'Môžem platiť kartou alebo len hotovosť?',
      answer: 'Akceptujeme všetky formy platby: hotovosť, platobné karty (Visa, Mastercard), QR kódy (viaceré banky), bankový prevod. Pre firemných zákazníkov vystavujeme faktúry s DPH. Platba je splatná po ukončení kontroly.',
      category: 'payment',
      tags: ['platba', 'karta', 'hotovosť', 'QR', 'faktúra']
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Často kladené otázky
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Nájdite odpovede na najčastejšie otázky o technickej kontrole vozidiel
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Hľadajte odpovede na vaše otázky..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Results Count */}
        {searchTerm && (
          <div className="mb-6 text-gray-600">
            Nájdených {filteredFAQs.length} výsledkov pre "{searchTerm}"
          </div>
        )}

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nenašli sme žiadne výsledky
              </h3>
              <p className="text-gray-600 mb-4">
                Skúste zmeniť vyhľadávací výraz alebo kategóriu
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Zobraziť všetky otázky
              </button>
            </div>
          ) : (
            filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>

                {openFAQ === faq.id && (
                  <div className="px-6 pb-5">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {faq.answer}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {faq.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 text-center">
          <AlertCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Stále máte otázky?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nenašli ste odpoveď na vašu otázku? Náš tím je pripravený vám pomôcť.
            Kontaktujte nás kedykoľvek počas prevádzkových hodín.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <a
              href="tel:+421212345678"
              className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+421 2 1234 5678</span>
            </a>
            <a
              href="mailto:info@stkcentrum.sk"
              className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              <span>📧</span>
              <span>E-mail</span>
            </a>
            <a
              href="/kontakt"
              className="flex items-center justify-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              <span>💬</span>
              <span>Kontaktný formulár</span>
            </a>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900">Tip na úspešnú STK</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Týždeň pred STK skontrolujte všetky svetlá, pneumatiky a hladiny kvapalín. 
              Väčšina neúspešných kontrol je kvôli jednoduchým závadám, ktoré sa dajú ľahko opraviť.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900">Rezervácia v sobotu</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Sobotné termíny sú ideálne pre zaneprázdnených. Menej zákazníkov znamená rýchlejšie vybavenie. 
              Nezabudnite na príplatok 5€ za víkendové služby.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}