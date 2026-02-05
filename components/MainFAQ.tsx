'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface MainFAQProps {
  faqs: FAQItem[];
}

export default function MainFAQ({ faqs }: MainFAQProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-brand-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-green-100 rounded-full mb-4">
            <HelpCircle className="h-8 w-8 text-brand-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-3">
            Často kladené otázky
          </h2>
          <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
            Nájdite odpovede na najčastejšie otázky o našich službách
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-brand-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-5">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/caste-otazky"
              className="inline-flex items-center text-brand-green-600 hover:text-brand-green-700 font-semibold"
            >
              Zobraziť všetky otázky
              <ChevronDown className="ml-2 h-4 w-4 rotate-[-90deg]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
