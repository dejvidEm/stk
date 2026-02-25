'use client';

import { useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { sk } from 'date-fns/locale/sk';

interface SaturdayCalendarBannerProps {
  locationName?: string;
  saturdayDates?: Date[];
}

const SATURDAY_TIME_SLOTS = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00'
];

export default function SaturdayCalendarBanner({ 
  locationName,
  saturdayDates = []
}: SaturdayCalendarBannerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  // Get next 12 Saturdays if no dates provided
  const getNextSaturdays = (count: number = 12): Date[] => {
    const saturdays: Date[] = [];
    const today = new Date();
    const currentDay = today.getDay();
    const daysUntilSaturday = (6 - currentDay + 7) % 7 || 7;
    
    let nextSaturday = new Date(today);
    nextSaturday.setDate(today.getDate() + daysUntilSaturday);
    
    for (let i = 0; i < count; i++) {
      const saturday = new Date(nextSaturday);
      saturday.setDate(nextSaturday.getDate() + (i * 7));
      saturdays.push(saturday);
    }
    
    return saturdays;
  };

  const availableSaturdays = saturdayDates.length > 0 
    ? saturdayDates 
    : getNextSaturdays(12);

  // Filter calendar to only show Saturdays
  const isSaturday = (date: Date) => {
    return date.getDay() === 6;
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date && isSaturday(date)) {
      setSelectedDate(date);
      setSelectedTime('');
      setIsOpen(false);
    }
  };

  const handleReserve = () => {
    if (selectedDate && selectedTime) {
      // TODO: Implement reservation logic
      alert(`Rezervácia pre ${format(selectedDate, 'd. M. yyyy', { locale: sk })} o ${selectedTime} bude čoskoro dostupná.`);
    }
  };

  return (
    <section className="bg-gradient-to-r from-brand-green-600 via-brand-green-500 to-brand-green-600 text-white py-8 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Info */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Rezervácia sobotných termínov
              </h2>
            </div>
            {locationName && (
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <MapPin className="h-5 w-5 text-white/90" />
                <p className="text-lg text-white/95">{locationName}</p>
              </div>
            )}
            <p className="text-base text-white/90 mb-4">
              Vyberte si sobotný termín pre technickú kontrolu vozidla.
            </p>
          </div>

          {/* Right side - Calendar and Reservation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Vyberte dátum:
                </label>
                <Popover open={isOpen} onOpenChange={setIsOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-white hover:bg-gray-50 text-gray-900",
                        !selectedDate && "text-muted-foreground"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4 text-gray-700" />
                      {selectedDate ? (
                        format(selectedDate, 'd. M. yyyy', { locale: sk })
                      ) : (
                        <span>Vyberte sobotný termín</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={selectedDate}
                      onSelect={handleDateSelect}
                      disabled={(date) => !isSaturday(date)}
                      modifiers={{
                        available: availableSaturdays
                      }}
                      modifiersClassNames={{
                        available: "bg-brand-green-100 text-brand-green-800 font-semibold"
                      }}
                      locale={sk}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {selectedDate && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Vyberte čas:
                    </label>
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-1.5">
                      {SATURDAY_TIME_SLOTS.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={cn(
                            'py-2 rounded-md text-xs font-medium transition-colors min-w-0',
                            selectedTime === time
                              ? 'bg-white text-brand-green-600'
                              : 'bg-white/20 text-white hover:bg-white/30'
                          )}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-white">
                      <Clock className="h-4 w-4 shrink-0" />
                      <span className="text-sm">
                        Vybraný termín: {format(selectedDate, 'EEEE, d. M. yyyy', { locale: sk })}
                        {selectedTime && <span className="font-semibold"> o {selectedTime}</span>}
                      </span>
                    </div>
                  </div>
                </>
              )}

              <Button
                onClick={handleReserve}
                disabled={!selectedDate || !selectedTime}
                className="w-full bg-white text-brand-green-600 hover:bg-gray-100 font-semibold py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Rezervovať termín
              </Button>

              <p className="text-xs text-white/80 text-center">
                * Rezervácie budú čoskoro dostupné
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
