'use client';

import { useState } from 'react';
import { Calculator, Car, Truck, Bike, Shield, Leaf, CheckCircle, MapPin, AlertTriangle, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';

interface PricingConfig {
  personal: {
    stk: number;
    ek: number;
  };
  truck: {
    stk: number;
    ek: number;
  };
  motorcycle: {
    stk: number;
    ek: number;
  };
}

/** Ceny sa pri výbere STK + EK sčítavajú (žiadny zvýhodnený balík). */
const pricing: PricingConfig = {
  personal: {
    stk: 31.6,
    ek: 46.9,
  },
  truck: {
    stk: 48.5,
    ek: 57.9,
  },
  /** Motocykel — v UI len STK; ek zostáva 0 pre typ. */
  motorcycle: {
    stk: 39.9,
    ek: 0,
  },
};

function formatSkEur(value: number): string {
  return value.toLocaleString('sk-SK', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

const locations = [
  { id: 'all', name: 'Všetky pobočky', url: '/' },
  { id: 'namestovo', name: 'STK Námestovo', url: '/namestovo' },
  { id: 'tvrdosin', name: 'STK Tvrdošín', url: '/tvrdosin' },
  { id: 'lokca', name: 'STK Lokca', url: '/lokca' },
];

export default function STKPriceCalculator() {
  const [vehicleType, setVehicleType] = useState<string>('');
  const [selectedServices, setSelectedServices] = useState<{ stk: boolean; ek: boolean }>({ stk: false, ek: false });
  const [location, setLocation] = useState<string>('all');

  const toggleService = (service: 'stk' | 'ek') => {
    setSelectedServices(prev => ({
      ...prev,
      [service]: !prev[service]
    }));
  };

  const calculatePrice = (): number | null => {
    if (!vehicleType || (!selectedServices.stk && !selectedServices.ek)) return null;

    const vehiclePricing = pricing[vehicleType as keyof PricingConfig];
    if (!vehiclePricing) return null;

    let totalPrice = 0;
    if (selectedServices.stk) {
      totalPrice += vehiclePricing.stk;
    }
    if (selectedServices.ek && vehicleType !== 'motorcycle') {
      totalPrice += vehiclePricing.ek;
    }

    return totalPrice || null;
  };

  const calculatedPrice = calculatePrice();
  const vehicleTypeLabel = vehicleType === 'personal' ? 'Osobné vozidlo' : vehicleType === 'truck' ? 'Dodávka/Nákladné' : vehicleType === 'motorcycle' ? 'Motocykel' : '';
  
  const getServiceTypeLabel = (): string => {
    const services = [];
    if (selectedServices.stk) services.push('STK');
    if (selectedServices.ek) services.push('EK');
    return services.join(' + ') || '';
  };

  const serviceTypeLabel = getServiceTypeLabel();
  const selectedLocation = locations.find(loc => loc.id === location);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-green-100 rounded-full mb-4">
          <Calculator className="h-8 w-8 text-brand-green-600" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-3">
          Kalkulačka ceny STK
        </h2>
        <p className="text-lg text-brand-gray-600">
          Získajte orientačný odhad ceny pre vaše vozidlo
        </p>
      </div>

      {/* Inputs */}
      <div className="space-y-6 mb-8">
        {/* Typ vozidla */}
        <div>
          <label className="block text-sm font-semibold text-brand-gray-900 mb-3">
            Typ vozidla
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setVehicleType('personal')}
              className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                vehicleType === 'personal'
                  ? 'border-brand-green-500 bg-brand-green-50 text-brand-green-700'
                  : 'border-gray-200 hover:border-brand-green-300 text-gray-700'
              }`}
            >
              <Car className="h-5 w-5" />
              <span className="font-medium">Osobné</span>
            </button>
            <button
              type="button"
              onClick={() => setVehicleType('truck')}
              className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                vehicleType === 'truck'
                  ? 'border-brand-green-500 bg-brand-green-50 text-brand-green-700'
                  : 'border-gray-200 hover:border-brand-green-300 text-gray-700'
              }`}
            >
              <Truck className="h-5 w-5" />
              <span className="font-medium">Dodávka</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setVehicleType('motorcycle');
                setSelectedServices((prev) => ({ ...prev, ek: false }));
              }}
              className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                vehicleType === 'motorcycle'
                  ? 'border-brand-green-500 bg-brand-green-50 text-brand-green-700'
                  : 'border-gray-200 hover:border-brand-green-300 text-gray-700'
              }`}
            >
              <Bike className="h-5 w-5" />
              <span className="font-medium">Motocykel</span>
            </button>
          </div>
        </div>

        {/* Služba */}
        <div>
          <label className="block text-sm font-semibold text-brand-gray-900 mb-3">
            Služba{' '}
            <span className="text-gray-500 font-normal">
              {vehicleType === 'motorcycle' ? '(len STK)' : '(môžete vybrať obe)'}
            </span>
          </label>
          <div
            className={`grid gap-3 ${vehicleType === 'motorcycle' ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}
          >
            <button
              type="button"
              onClick={() => toggleService('stk')}
              disabled={!vehicleType}
              className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                selectedServices.stk
                  ? 'border-brand-red-500 bg-brand-red-50 text-brand-red-700'
                  : vehicleType
                  ? 'border-gray-200 hover:border-brand-red-300 text-gray-700'
                  : 'border-gray-200 text-gray-400 cursor-not-allowed opacity-50'
              }`}
            >
              <Shield className={`h-5 w-5 ${selectedServices.stk ? 'fill-current' : ''}`} />
              <span className="font-medium text-sm">STK</span>
              {selectedServices.stk && (
                <CheckCircle className="h-4 w-4 text-brand-red-600" />
              )}
            </button>
            {vehicleType !== 'motorcycle' && (
              <button
                type="button"
                onClick={() => toggleService('ek')}
                disabled={!vehicleType}
                className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                  selectedServices.ek
                    ? 'border-brand-green-500 bg-brand-green-50 text-brand-green-700'
                    : vehicleType
                    ? 'border-gray-200 hover:border-brand-green-300 text-gray-700'
                    : 'border-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                }`}
              >
                <Leaf className={`h-5 w-5 ${selectedServices.ek ? 'fill-current' : ''}`} />
                <span className="font-medium text-sm">EK</span>
                {selectedServices.ek && (
                  <CheckCircle className="h-4 w-4 text-brand-green-600" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Pobočka (voliteľné) */}
        <div>
          <label className="block text-sm font-semibold text-brand-gray-900 mb-3">
            Pobočka <span className="text-gray-500 font-normal">(voliteľné)</span>
          </label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="w-full h-12">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <SelectValue placeholder="Vyberte pobočku" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {locations.map((loc) => (
                <SelectItem key={loc.id} value={loc.id}>
                  {loc.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Výstup ceny */}
      {calculatedPrice !== null && (
        <div className="mb-8 p-6 bg-gradient-to-br from-brand-green-50 to-brand-red-50 rounded-xl border-2 border-brand-green-200">
          <div className="text-center">
            <p className="text-sm text-brand-gray-600 mb-2">
              Orientačná cena pre {vehicleTypeLabel}
            </p>
            <div className="flex items-baseline justify-center gap-2 mb-2 flex-wrap">
              <span className="text-lg font-semibold text-brand-gray-600">od</span>
              <span className="text-5xl font-bold text-brand-gray-900">
                {formatSkEur(calculatedPrice)} €
              </span>
            </div>
            <p className="text-sm font-medium text-brand-gray-700 mb-1">
              {serviceTypeLabel}
            </p>
            {selectedLocation && selectedLocation.id !== 'all' && (
              <p className="text-xs text-brand-gray-600 mt-2">
                <MapPin className="h-3 w-3 inline mr-1" />
                {selectedLocation.name}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex items-start gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-yellow-800">
            <strong>Dôležité:</strong> Toto je len orientačný odhad ceny. Skutočná cena sa môže líšiť v závislosti od typu vozidla, 
            jeho stavu a ďalších faktorov. Pre presnú cenu nás prosím kontaktujte.
          </div>
        </div>
      </div>

      {/* Link na plný cenník */}
      <div className="mb-6 flex justify-center">
        <Link
          href="/cennik"
          className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-green-200 bg-brand-green-50 px-5 py-3 text-base font-semibold text-brand-green-700 transition-colors hover:border-brand-green-400 hover:bg-brand-green-100"
        >
          Kompletný cenník a detailné ceny
          <ArrowRight className="h-5 w-5" aria-hidden />
        </Link>
      </div>

      {/* CTA Button */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link 
          href={selectedLocation && selectedLocation.id !== 'all' ? `${selectedLocation.url}/rezervacia` : '/rezervacia'}
          className="flex-1"
        >
          <Button className="w-full h-12 bg-brand-green-600 hover:bg-brand-green-700 text-white font-semibold text-base">
            <Calendar className="mr-2 h-5 w-5" />
            Objednať sa
          </Button>
        </Link>
        <Link href="/kontakt" className="flex-1">
          <Button variant="outline" className="w-full h-12 border-2 font-semibold text-base">
            Kontaktovať nás
          </Button>
        </Link>
      </div>
    </div>
  );
}
