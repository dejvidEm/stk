/**
 * Company locations and Saturday reservation helpers.
 * When no Saturday is free at the current location, suggest Saturday at another location.
 */

export const COMPANY_LOCATIONS = [
  { id: 'namestovo', name: 'STK Námestovo', rezervaciaPath: '/namestovo/rezervacia' },
  { id: 'tvrdosin', name: 'STK Tvrdošín', rezervaciaPath: '/tvrdosin/rezervacia' },
  { id: 'lokca', name: 'STK Lokca', rezervaciaPath: '/lokca/rezervacia' },
] as const;

export type LocationId = (typeof COMPANY_LOCATIONS)[number]['id'];

/** Check if a date string (YYYY-MM-DD) is a Saturday */
function isSaturday(dateStr: string): boolean {
  const d = new Date(dateStr + 'T12:00:00');
  return d.getDay() === 6;
}

export interface SaturdaySuggestionResult {
  suggested: {
    id: LocationId;
    name: string;
    rezervaciaPath: string;
  } | null;
  /** True if current location has at least one Saturday in the given available dates */
  hasSaturdayAtCurrent: boolean;
}

/**
 * When user is at a location's weekend/Saturday booking and no Saturday is free there,
 * returns another company location to suggest (e.g. for Saturday reservation).
 *
 * @param currentLocationId - Current location (e.g. 'lokca', 'namestovo', 'tvrdosin')
 * @param options.availableDateStrings - List of available date strings (YYYY-MM-DD). If none is Saturday, suggestion is returned.
 * @param options.noSaturdayFree - If true, always suggest another location (e.g. from API). Overrides availableDateStrings check.
 */
export function getSuggestedSaturdayLocation(
  currentLocationId: string,
  options?: {
    availableDateStrings?: string[];
    noSaturdayFree?: boolean;
  }
): SaturdaySuggestionResult {
  const current = COMPANY_LOCATIONS.find((loc) => loc.id === currentLocationId);
  if (!current) {
    return { suggested: null, hasSaturdayAtCurrent: true };
  }

  if (options?.noSaturdayFree === true) {
    const other = COMPANY_LOCATIONS.find((loc) => loc.id !== currentLocationId);
    return {
      suggested: other ? { id: other.id, name: other.name, rezervaciaPath: other.rezervaciaPath } : null,
      hasSaturdayAtCurrent: false,
    };
  }

  const dates = options?.availableDateStrings ?? [];
  const hasSaturday = dates.some(isSaturday);

  if (hasSaturday) {
    return { suggested: null, hasSaturdayAtCurrent: true };
  }

  // No Saturday at current location – suggest first other location
  const suggested = COMPANY_LOCATIONS.find((loc) => loc.id !== currentLocationId) ?? null;
  return {
    suggested: suggested
      ? { id: suggested.id, name: suggested.name, rezervaciaPath: suggested.rezervaciaPath }
      : null,
    hasSaturdayAtCurrent: false,
  };
}
