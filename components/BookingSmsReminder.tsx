'use client';

import { useId } from 'react';

interface BookingSmsReminderProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

/** Predvolene zaškrtnuté – zákazník môže odškrtnúť. */
export default function BookingSmsReminder({ checked, onChange }: BookingSmsReminderProps) {
  const id = useId();
  return (
    <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      <label htmlFor={id} className="cursor-pointer text-sm leading-relaxed text-gray-700">
        Chcem zadarmo pripomienkovú SMS pred termínom na uvedené telefónne číslo
      </label>
    </div>
  );
}
