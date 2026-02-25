'use client';

import { MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';
import { getSuggestedSaturdayLocation } from '@/lib/booking';

interface SaturdayAlternativeBannerProps {
  /** Current location id (e.g. 'lokca', 'namestovo', 'tvrdosin') */
  currentLocationId: string;
  /**
   * Available date strings (YYYY-MM-DD). If none is a Saturday, another location is suggested.
   * When you have real availability from API, pass only the bookable dates.
   */
  availableDateStrings?: string[];
  /**
   * Force showing the suggestion (e.g. when API says no Saturday free at current location).
   */
  noSaturdayFree?: boolean;
}

/**
 * Renders a banner when the user is in weekend/Saturday booking and no Saturday is free
 * at the current location, suggesting Saturday at another company location.
 * Use on the date selection step of the reservation page.
 */
export default function SaturdayAlternativeBanner({
  currentLocationId,
  availableDateStrings = [],
  noSaturdayFree = false,
}: SaturdayAlternativeBannerProps) {
  const { suggested, hasSaturdayAtCurrent } = getSuggestedSaturdayLocation(
    currentLocationId,
    noSaturdayFree ? { noSaturdayFree: true } : { availableDateStrings }
  );

  if (hasSaturdayAtCurrent || !suggested) return null;

  return (
    <div className="mb-6 rounded-xl border-2 border-amber-200 bg-amber-50 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100">
            <Calendar className="h-5 w-5 text-amber-700" />
          </div>
          <div>
            <h3 className="font-semibold text-amber-900">
              Na tejto pobočke nemáme voľnú sobotu
            </h3>
            <p className="mt-1 text-sm text-amber-800">
              Skúste rezervovať sobotný termín v inej pobočke.
            </p>
          </div>
        </div>
        <Link
          href={suggested.rezervaciaPath}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-amber-700"
        >
          <MapPin className="h-4 w-4" />
          Sobota – {suggested.name}
        </Link>
      </div>
    </div>
  );
}
