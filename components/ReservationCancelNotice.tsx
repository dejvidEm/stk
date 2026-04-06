import { CalendarClock } from 'lucide-react';

type Props = {
  className?: string;
};

export default function ReservationCancelNotice({ className = '' }: Props) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl border border-emerald-200/90 bg-gradient-to-r from-emerald-50 to-teal-50/80 px-4 py-3 shadow-sm ${className}`}
      role="note"
      aria-label="Podmienky zrušenia rezervácie"
    >
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700"
        aria-hidden
      >
        <CalendarClock className="h-4 w-4" />
      </div>
      <p className="text-sm leading-snug text-emerald-950">
        <span className="font-semibold">Rezervácia:</span> zrušenie rezervácie do{' '}
        <span className="font-semibold">12 hodín pred termínom</span> je bezplatné.
      </p>
    </div>
  );
}
