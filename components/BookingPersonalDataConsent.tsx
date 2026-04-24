'use client';

import { useId } from 'react';

interface BookingPersonalDataConsentProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function BookingPersonalDataConsent({ checked, onChange }: BookingPersonalDataConsentProps) {
  const id = useId();
  return (
    <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        required
        aria-required="true"
      />
      <label htmlFor={id} className="cursor-pointer text-sm leading-relaxed text-gray-700">
        Súhlasím so spracovaním osobných údajov <span className="text-red-600">*</span>
      </label>
    </div>
  );
}
