'use client';

import { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

export interface Review {
  firstName: string;
  lastName: string;
  stars: number;
  text: string;
  serviceBadge: string;
  location: string;
}

const REVIEWS: Review[] = [
  {
    firstName: 'Peter',
    lastName: 'Kováč',
    stars: 5,
    text: 'Rýchle a profesionálne vybavenie. Prišiel som bez rezervácie a do 20 minút bolo hotovo. Odporúčam.',
    serviceBadge: 'STK + EK',
    location: 'STK Námestovo',
  },
  {
    firstName: 'Mária',
    lastName: 'Novaková',
    stars: 5,
    text: 'Príjemný personál, čisté prostredie. Po kontrole som si dala kávu v kaviarni. Skvelá služba.',
    serviceBadge: 'STK',
    location: 'STK Námestovo',
  },
  {
    firstName: 'Ján',
    lastName: 'Varga',
    stars: 4,
    text: 'Spokojnosť. Jediné čo by som zmenil – dlhšie otváracie hodiny v sobotu. Inak všetko v poriadku.',
    serviceBadge: 'EK',
    location: 'STK Tvrdošín',
  },
  {
    firstName: 'Anna',
    lastName: 'Horváthová',
    stars: 5,
    text: 'Prvýkrát som bola v Tvrdošíne. Všetko prebehlo hladko, žiadne čakanie. Určite prídem znova.',
    serviceBadge: 'STK + EK',
    location: 'STK Tvrdošín',
  },
  {
    firstName: 'Martin',
    lastName: 'Tóth',
    stars: 5,
    text: 'Lokca je k nám najbližšie. Kontrola bola rýchla, cena úplne v pohode. Som spokojný.',
    serviceBadge: 'STK',
    location: 'STK Lokca',
  },
  {
    firstName: 'Eva',
    lastName: 'Szabová',
    stars: 4,
    text: 'Opakovaná kontrola po oprave – vybavili ma hneď. Žiadne zbytočné čakanie. Ďakujem.',
    serviceBadge: 'Opakovaná kontrola',
    location: 'STK Námestovo',
  },
  {
    firstName: 'Michal',
    lastName: 'Baláž',
    stars: 5,
    text: 'Sobotný termín – super, nemusel som brať voľno. Všetko trvalo menej ako pol hodiny.',
    serviceBadge: 'STK + EK',
    location: 'STK Tvrdošín',
  },
  {
    firstName: 'Zuzana',
    lastName: 'Molnárová',
    stars: 5,
    text: 'Profesionálny prístup, všetko vysvetlili. V Lokci majú poriadok a príjemnú atmosféru.',
    serviceBadge: 'EK',
    location: 'STK Lokca',
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < review.stars ? 'fill-amber-400 text-amber-400' : 'text-gray-200'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 flex-grow mb-4 leading-relaxed">„{review.text}"</p>
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-brand-red-50 text-brand-red-700">
          {review.serviceBadge}
        </span>
        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
          {review.location}
        </span>
      </div>
      <p className="text-sm font-semibold text-gray-900">
        {review.firstName} {review.lastName}
      </p>
    </div>
  );
}

export default function ReviewsSlider() {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-16 bg-gradient-to-br from-brand-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-3">
            Čo o nás hovoria zákazníci
          </h2>
          <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
            Presvedčte sa o spokojnosti našich zákazníkov vo všetkých troch prevádzkach.
          </p>
        </div>

        <div className="flex items-stretch gap-3 md:gap-4">
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            className="flex-shrink-0 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 text-gray-700 shadow-md transition-all self-center"
            aria-label="Predchádzajúca recenzia"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex-1 min-w-0">
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
                align: 'start',
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {REVIEWS.map((review, index) => (
                  <CarouselItem key={index} className="pl-4 basis-full">
                    <ReviewCard review={review} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            className="flex-shrink-0 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 text-gray-700 shadow-md transition-all self-center"
            aria-label="Ďalšia recenzia"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
