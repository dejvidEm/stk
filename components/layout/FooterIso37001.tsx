'use client';

import { FileText } from 'lucide-react';

export const ISO_37001_BY_LOCATION = {
  namestovo: {
    href: '/certificates/iso-37001-namestovo.pdf',
    label: 'STK Námestovo',
  },
  lokca: {
    href: '/certificates/iso-37001-lokca.pdf',
    label: 'STK Lokca',
  },
  tvrdosin: {
    href: '/certificates/iso-37001-tvrdosin.pdf',
    label: 'STK Tvrdošín',
  },
} as const;

export type Iso37001LocationId = keyof typeof ISO_37001_BY_LOCATION;

const linkClass =
  'inline-flex items-center gap-2 text-brand-green-400 hover:text-brand-green-300 transition-colors text-sm';

const pdfAttrs = {
  target: '_blank' as const,
  rel: 'noopener noreferrer' as const,
  download: true,
};

/** Jedna prevádzka – odkaz na jej certifikát ISO 37001 (PDF). */
export function Iso37001CenterLink({ locationId }: { locationId: Iso37001LocationId }) {
  const { href, label } = ISO_37001_BY_LOCATION[locationId];
  return (
    <div className="pt-3 mt-1 border-t border-brand-gray-800">
      <a href={href} className={linkClass} {...pdfAttrs} aria-label={`Stiahnuť certifikát ISO 37001 – ${label}`}>
        <FileText className="h-4 w-4 flex-shrink-0" aria-hidden />
        <span>Certifikát ISO 37001 (PDF)</span>
      </a>
    </div>
  );
}

/** Spodný pás – všetky tri lokality (spoločný footer). */
export function Iso37001AllLocationsBar() {
  return (
    <div className="w-full max-w-3xl mx-auto text-center">
      <p className="text-xs text-brand-gray-500 uppercase tracking-wide mb-3">Certifikáty ISO 37001</p>
      <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
        {(Object.keys(ISO_37001_BY_LOCATION) as Iso37001LocationId[]).map((id) => {
          const { href, label } = ISO_37001_BY_LOCATION[id];
          return (
            <li key={id}>
              <a
                href={href}
                className="text-brand-green-400 hover:text-brand-green-300 transition-colors underline-offset-2 hover:underline"
                {...pdfAttrs}
                aria-label={`Stiahnuť certifikát ISO 37001 – ${label}`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
