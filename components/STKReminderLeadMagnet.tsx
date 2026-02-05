'use client';

import { useState } from 'react';
import { Bell, Mail, Car, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function STKReminderLeadMagnet() {
  const [ecv, setEcv] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Validácia EČV
  const validateECV = (value: string): { isValid: boolean; error?: string } => {
    const trimmed = value.trim();
    
    if (!trimmed) {
      return { isValid: false, error: 'Prosím zadajte EČV' };
    }

    // Validácia EČV (slovenský formát: 2 písmená + 3 čísla + 2 písmená, alebo flexibilnejší formát)
    const cleanedEcv = trimmed.replace(/[\s-]/g, '').toUpperCase();
    
    if (cleanedEcv.length >= 5 && cleanedEcv.length <= 10) {
      const hasLetters = /[A-Z]/.test(cleanedEcv);
      const hasNumbers = /[0-9]/.test(cleanedEcv);
      
      if (hasLetters && hasNumbers) {
        return { isValid: true };
      }
    }

    return { isValid: false, error: 'Prosím zadajte platné EČV (napr. BA123AB)' };
  };

  // Validácia emailu
  const validateEmail = (value: string): { isValid: boolean; error?: string } => {
    const trimmed = value.trim();
    
    if (!trimmed) {
      return { isValid: false, error: 'Prosím zadajte email' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(trimmed)) {
      return { isValid: true };
    }

    return { isValid: false, error: 'Prosím zadajte platný email' };
  };

  // Validácia telefónneho čísla
  const validatePhone = (value: string): { isValid: boolean; error?: string } => {
    const trimmed = value.trim();
    
    if (!trimmed) {
      return { isValid: false, error: 'Prosím zadajte telefónne číslo' };
    }

    // Akceptujeme slovenské formáty: 09XX XXX XXX, +421 9XX XXX XXX, atď.
    const phoneRegex = /^(\+421|0)[0-9]{9}$/;
    const cleanedPhone = trimmed.replace(/[\s-]/g, '');
    
    if (phoneRegex.test(cleanedPhone) || (cleanedPhone.length >= 9 && cleanedPhone.length <= 13 && /^[0-9+\s-]+$/.test(cleanedPhone))) {
      return { isValid: true };
    }

    return { isValid: false, error: 'Prosím zadajte platné telefónne číslo' };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validácia všetkých polí
    const ecvValidation = validateECV(ecv);
    const emailValidation = validateEmail(email);
    const phoneValidation = validatePhone(phone);

    if (!ecvValidation.isValid) {
      setErrorMessage(ecvValidation.error || 'Neplatné EČV');
      setState('error');
      return;
    }

    if (!emailValidation.isValid) {
      setErrorMessage(emailValidation.error || 'Neplatný email');
      setState('error');
      return;
    }

    if (!phoneValidation.isValid) {
      setErrorMessage(phoneValidation.error || 'Neplatné telefónne číslo');
      setState('error');
      return;
    }

    setState('loading');
    setErrorMessage('');

    try {
      // Simulácia API volania
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Tu by sa volal skutočný API endpoint
      // await fetch('/api/stk-reminder', { 
      //   method: 'POST', 
      //   body: JSON.stringify({ ecv, email, phone }) 
      // });
      
      console.log('STK Reminder submitted:', { ecv, email, phone });
      
      setState('success');
      setEcv('');
      setEmail('');
      setPhone('');
      
      // Reset po 5 sekundách
      setTimeout(() => {
        setState('idle');
      }, 5000);
    } catch (error) {
      setState('error');
      setErrorMessage('Nastala chyba. Skúste to prosím znova.');
    }
  };

  const handleInputChange = (field: 'ecv' | 'email' | 'phone', value: string) => {
    if (field === 'ecv') {
      setEcv(value);
    } else if (field === 'email') {
      setEmail(value);
    } else if (field === 'phone') {
      setPhone(value);
    }
    
    // Reset error pri zmene
    if (state === 'error') {
      setState('idle');
      setErrorMessage('');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-brand-green-50 via-white to-brand-red-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-green-100 rounded-full mb-4">
              <Bell className="h-8 w-8 text-brand-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-3">
              Pripomenieme vám STK
            </h2>
            <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
              Nezabudnite na technickú kontrolu! Zadajte EČV, email a telefónne číslo a my vám pošleme pripomienku pred vypršaním platnosti.
            </p>
          </div>

          {/* Form */}
          {state === 'success' ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-green-100 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-brand-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-brand-gray-900 mb-2">
                Ďakujeme!
              </h3>
              <p className="text-brand-gray-600">
                Vaša požiadavka bola úspešne odoslaná. O pripomienku sa postaráme.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                {/* EČV Field */}
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Car className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="text"
                    value={ecv}
                    onChange={(e) => handleInputChange('ecv', e.target.value)}
                    placeholder="EČV (napr. BA123AB)"
                    className={`pl-10 h-12 text-base ${
                      state === 'error' && !ecv.trim()
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-300'
                    }`}
                    disabled={state === 'loading'}
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Emailová adresa"
                    className={`pl-10 h-12 text-base ${
                      state === 'error' && !email.trim()
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-300'
                    }`}
                    disabled={state === 'loading'}
                    required
                  />
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Telefónne číslo (napr. 0904123456)"
                    className={`pl-10 h-12 text-base ${
                      state === 'error' && !phone.trim()
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-300'
                    }`}
                    disabled={state === 'loading'}
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={state === 'loading' || !ecv.trim() || !email.trim() || !phone.trim()}
                className="w-full h-12 bg-brand-green-600 hover:bg-brand-green-700 text-white font-semibold text-base"
              >
                {state === 'loading' ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Odosielanie...
                  </>
                ) : (
                  <>
                    <Bell className="mr-2 h-5 w-5" />
                    Pripomenúť
                  </>
                )}
              </Button>

              {/* Error Message */}
              {state === 'error' && errorMessage && (
                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-200">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Info Text */}
              <p className="text-xs text-gray-500 text-center">
                Vaše údaje budú použité výlučne na odoslanie pripomienky. Môžete sa odhlásiť kedykoľvek.
              </p>
            </form>
          )}

          {/* Benefits */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-brand-green-100 p-2 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-brand-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-gray-900 mb-1">Automatická pripomienka</h4>
                  <p className="text-sm text-brand-gray-600">Dostanete email pred vypršaním platnosti STK</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-brand-red-100 p-2 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-brand-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-gray-900 mb-1">Ušetrite peniaze</h4>
                  <p className="text-sm text-brand-gray-600">Vyhnete sa pokutám za jazdu s neplatnou STK</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-brand-gray-100 p-2 rounded-lg">
                  <Bell className="h-5 w-5 text-brand-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-gray-900 mb-1">Bez starostí</h4>
                  <p className="text-sm text-brand-gray-600">My sa postaráme o pripomienku za vás</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
