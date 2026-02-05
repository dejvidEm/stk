'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MapPin } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface LocationFAQProps {
  locationName: string;
  locationAddress: string;
  faqs: FAQItem[];
}

export default function LocationFAQ({ locationName, locationAddress, faqs }: LocationFAQProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-start gap-3 mb-6">
        <div className="bg-brand-green-100 p-2 rounded-lg">
          <MapPin className="h-5 w-5 text-brand-green-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-brand-gray-900 mb-1">{locationName}</h3>
          <p className="text-sm text-brand-gray-600">{locationAddress}</p>
        </div>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-brand-gray-900 pr-4 text-sm">
                {faq.question}
              </span>
              {openFAQ === index ? (
                <ChevronUp className="h-4 w-4 text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-500 flex-shrink-0" />
              )}
            </button>

            {openFAQ === index && (
              <div className="px-4 pb-3 border-t border-gray-100">
                <p className="text-sm text-brand-gray-700 leading-relaxed pt-3">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
