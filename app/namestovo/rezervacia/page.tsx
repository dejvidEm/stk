'use client';

import { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Car, 
  Truck, 
  Bike,
  User, 
  Phone, 
  Mail, 
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Shield,
  Leaf,
  RotateCcw
} from 'lucide-react';
import SaturdayAlternativeBanner from '@/components/SaturdayAlternativeBanner';

interface BookingData {
  vehicleType: string;
  serviceType: string;
  date: string;
  time: string;
  vehicleInfo: {
    brand: string;
    model: string;
    year: string;
    licensePlate: string;
    vin: string;
  };
  customerInfo: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  };
}

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    vehicleType: '',
    serviceType: '',
    date: '',
    time: '',
    vehicleInfo: {
      brand: '',
      model: '',
      year: '',
      licensePlate: '',
      vin: ''
    },
    customerInfo: {
      firstName: '',
      lastName: '',
      phone: '',
      email: ''
    }
  });

  const vehicleTypes = [
    { id: 'personal', name: 'Osobné vozidlo', description: 'Kategória M1 do 3,5t', icon: Car },
    { id: 'truck', name: 'Nákladné vozidlo', description: 'Kategória N nad 3,5t', icon: Truck },
    { id: 'motorcycle', name: 'Motocykel', description: 'Kategória L', icon: Bike }
  ];

  const serviceTypes = [
    { 
      id: 'stk', 
      name: 'Technická kontrola (STK)', 
      description: 'Komplexná technická prehliadka',
      icon: Shield,
      duration: '30-45 min',
      price: 'od 25€'
    },
    { 
      id: 'ek', 
      name: 'Emisná kontrola (EK)', 
      description: 'Meranie emisií exhalátu',
      icon: Leaf,
      duration: '15-20 min',
      price: 'od 15€'
    },
    { 
      id: 'stk-ek', 
      name: 'STK + EK', 
      description: 'Kombinovaná kontrola',
      icon: CheckCircle,
      duration: '45-60 min',
      price: 'od 35€'
    },
    { 
      id: 'recheck', 
      name: 'Opakovaná kontrola', 
      description: 'Kontrola odstránenia závad',
      icon: RotateCcw,
      duration: '15-30 min',
      price: 'od 10€'
    }
  ];

  const timeSlots = [
    '07:00', '07:30', '08:00', '08:30', '09:00', '09:30',
    '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30'
  ];

  // Generate available dates (next 30 days, excluding Sundays)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip Sundays (0 = Sunday)
      if (date.getDay() !== 0) {
        dates.push({
          date: date.toISOString().split('T')[0],
          day: date.toLocaleDateString('sk-SK', { weekday: 'short' }),
          dayNum: date.getDate(),
          month: date.toLocaleDateString('sk-SK', { month: 'short' })
        });
      }
    }
    
    return dates;
  };

  const availableDates = generateAvailableDates();

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', bookingData);
    setCurrentStep(5); // Show confirmation
  };

  const updateBookingData = (section: string, data: any) => {
    setBookingData(prev => ({
      ...prev,
      [section]: typeof prev[section as keyof BookingData] === 'object' && prev[section as keyof BookingData] !== null
        ? { ...(prev[section as keyof BookingData] as object), ...data }
        : data
    }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return bookingData.vehicleType && bookingData.serviceType;
      case 2:
        return bookingData.date && bookingData.time;
      case 3:
        return Object.values(bookingData.vehicleInfo).every(value => value.trim() !== '');
      case 4:
        return Object.values(bookingData.customerInfo).every(value => value.trim() !== '');
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-red-600 to-brand-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Online rezervácia
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Rezervujte si termín jednoducho a rýchlo
            </p>
          </div>
        </div>
      </section>


      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[
              { num: 1, title: 'Služba' },
              { num: 2, title: 'Termín' },
              { num: 3, title: 'Vozidlo' },
              { num: 4, title: 'Kontakt' }
            ].map((step, index) => (
              <div key={step.num} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= step.num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > step.num ? <CheckCircle className="h-5 w-5" /> : step.num}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= step.num ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
                {index < 3 && (
                  <div className={`hidden sm:block w-12 h-px mx-4 ${
                    currentStep > step.num ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Vyberte typ vozidla a službu</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Typ vozidla</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {vehicleTypes.map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <button
                        key={type.id}
                        onClick={() => updateBookingData('vehicleType', type.id)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          bookingData.vehicleType === type.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <IconComponent className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                        <h4 className="font-semibold text-gray-900">{type.name}</h4>
                        <p className="text-sm text-gray-600">{type.description}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Typ služby</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceTypes.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <button
                        key={service.id}
                        onClick={() => updateBookingData('serviceType', service.id)}
                        className={`p-6 rounded-xl border-2 transition-all text-left ${
                          bookingData.serviceType === service.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <IconComponent className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-1">{service.name}</h4>
                            <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                            <div className="flex justify-between text-sm">
                              <span className="text-blue-600 font-medium">{service.duration}</span>
                              <span className="text-green-600 font-medium">{service.price}</span>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Date & Time Selection */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Vyberte dátum a čas</h2>

              <SaturdayAlternativeBanner
                currentLocationId="namestovo"
                availableDateStrings={availableDates.map((d) => d.date)}
              />
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Dostupné dátumy</h3>
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-3">
                  {availableDates.slice(0, 14).map((dateObj) => (
                    <button
                      key={dateObj.date}
                      onClick={() => updateBookingData('date', dateObj.date)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        bookingData.date === dateObj.date
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="text-xs text-gray-600 mb-1">{dateObj.day}</div>
                      <div className="font-semibold text-gray-900">{dateObj.dayNum}</div>
                      <div className="text-xs text-gray-600">{dateObj.month}</div>
                    </button>
                  ))}
                </div>
              </div>

              {bookingData.date && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Dostupné časy</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => updateBookingData('time', time)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          bookingData.time === time
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <Clock className="h-4 w-4 mx-auto mb-1 text-blue-600" />
                        <div className="text-sm font-medium">{time}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Vehicle Information */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informácie o vozidle</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Značka vozidla *
                  </label>
                  <input
                    type="text"
                    value={bookingData.vehicleInfo.brand}
                    onChange={(e) => updateBookingData('vehicleInfo', { brand: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="napr. Škoda"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Model vozidla *
                  </label>
                  <input
                    type="text"
                    value={bookingData.vehicleInfo.model}
                    onChange={(e) => updateBookingData('vehicleInfo', { model: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="napr. Octavia"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rok výroby *
                  </label>
                  <input
                    type="number"
                    value={bookingData.vehicleInfo.year}
                    onChange={(e) => updateBookingData('vehicleInfo', { year: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="napr. 2018"
                    min="1980"
                    max="2024"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Evidenčné číslo (EČV) *
                  </label>
                  <input
                    type="text"
                    value={bookingData.vehicleInfo.licensePlate}
                    onChange={(e) => updateBookingData('vehicleInfo', { licensePlate: e.target.value.toUpperCase() })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="napr. BA123AB"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    VIN číslo *
                  </label>
                  <input
                    type="text"
                    value={bookingData.vehicleInfo.vin}
                    onChange={(e) => updateBookingData('vehicleInfo', { vin: e.target.value.toUpperCase() })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="17-miestne VIN číslo"
                    maxLength={17}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Customer Information */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontaktné údaje</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meno *
                  </label>
                  <input
                    type="text"
                    value={bookingData.customerInfo.firstName}
                    onChange={(e) => updateBookingData('customerInfo', { firstName: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Vaše meno"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priezvisko *
                  </label>
                  <input
                    type="text"
                    value={bookingData.customerInfo.lastName}
                    onChange={(e) => updateBookingData('customerInfo', { lastName: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Vaše priezvisko"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefónne číslo *
                  </label>
                  <input
                    type="tel"
                    value={bookingData.customerInfo.phone}
                    onChange={(e) => updateBookingData('customerInfo', { phone: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+421 xxx xxx xxx"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    value={bookingData.customerInfo.email}
                    onChange={(e) => updateBookingData('customerInfo', { email: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="vas.email@example.com"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Súhrn rezervácie</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Služba:</strong> {serviceTypes.find(s => s.id === bookingData.serviceType)?.name}
                  </div>
                  <div>
                    <strong>Dátum:</strong> {new Date(bookingData.date).toLocaleDateString('sk-SK')}
                  </div>
                  <div>
                    <strong>Čas:</strong> {bookingData.time}
                  </div>
                  <div>
                    <strong>Vozidlo:</strong> {bookingData.vehicleInfo.brand} {bookingData.vehicleInfo.model} ({bookingData.vehicleInfo.year})
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {currentStep === 5 && (
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Rezervácia potvrdená!</h2>
              <p className="text-gray-600 mb-6">
                Vaša rezervácia bola úspešne odoslaná. Potvrdenie rezervácie Vám bude zaslané na e-mail.
              </p>
              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Číslo rezervácie: #{Math.random().toString(36).substr(2, 9).toUpperCase()}</h3>
                <p className="text-sm text-gray-600">
                  Toto číslo si poznačte a majte ho pri sebe pri návšteve našej stanice.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        {currentStep < 5 && (
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Späť</span>
            </button>

            <button
              onClick={currentStep === 4 ? handleSubmit : handleNext}
              disabled={!isStepValid()}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
                isStepValid()
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <span>{currentStep === 4 ? 'Potvrdiť rezerváciu' : 'Pokračovať'}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
