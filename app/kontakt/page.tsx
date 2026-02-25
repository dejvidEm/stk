'use client';

import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Navigation,
  Send,
  Facebook,
  Instagram,
  MessageCircle,
  Lightbulb,
  Bus,
  SquareParking,
  Building2,
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SaturdayCalendarBanner from '@/components/SaturdayCalendarBanner';

const LOCATIONS = [
  {
    id: 'namestovo',
    name: 'STK Námestovo',
    shortName: 'Námestovo',
    address: 'Za vodou 1068',
    city: '029 01 Námestovo',
    phone: '043 5520390, 0904 386146',
    emailUser: 'info',
    emailDomain: 'emade.sk',
    hours: 'Po-Pia: 06:00-16:30',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Za+vodou+1068+029+01+Námestovo',
    mapEmbedUrl: 'https://www.google.com/maps?q=Za+vodou+1068,+029+01+Námestovo,+Slovensko&output=embed',
    features: ['Parkovanie zdarma', 'Bezbariérový prístup', 'Kaviareň', 'Autoumyváreň'],
  },
  {
    id: 'tvrdosin',
    name: 'STK Tvrdošín',
    shortName: 'Tvrdošín',
    address: 'Vojtaššákova 908',
    city: '027 44 Tvrdošín',
    phone: '043 5323499, 0948 032189',
    emailUser: 'info',
    emailDomain: 'stktvrdosin.sk',
    hours: 'Po-Pia: 07:00-15:30',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Vojtaššákova+908+027+44+Tvrdošín',
    mapEmbedUrl: 'https://www.google.com/maps?q=Vojtaššákova+908,+027+44+Tvrdošín,+Slovensko&output=embed',
    features: ['Parkovanie zdarma', 'Kaviareň', 'Autoumyváreň'],
  },
  {
    id: 'lokca',
    name: 'STK Lokca',
    shortName: 'Lokca',
    address: 'Polianka 753',
    city: '029 51 Lokca',
    phone: '0948 422333',
    emailUser: 'info',
    emailDomain: 'stklokca.sk',
    hours: 'Po-Pia: 06:00-15:30',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Polianka+753+029+51+Lokca',
    mapEmbedUrl: 'https://www.google.com/maps?q=Polianka+753,+029+51+Lokca,+Slovensko&output=embed',
    features: ['Parkovanie zdarma'],
  },
] as const;

type LocationId = (typeof LOCATIONS)[number]['id'];

function ObfuscatedEmail({ user, domain }: { user: string; domain: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${user}@${domain}`;
  };
  return (
    <a
      href="#"
      onClick={handleClick}
      className="text-brand-red-600 hover:text-brand-red-700 transition-colors text-sm break-all font-medium"
      aria-label={`E-mail: ${user} (at) ${domain}`}
    >
      {user}
      <span aria-hidden="true"> (at) </span>
      {domain}
    </a>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [selectedLocationId, setSelectedLocationId] = useState<LocationId>('tvrdosin');
  const [calendarLocationId, setCalendarLocationId] = useState<LocationId>('tvrdosin');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedLocation = LOCATIONS.find((l) => l.id === selectedLocationId) ?? LOCATIONS[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    const mailto = `${selectedLocation.emailUser}@${selectedLocation.emailDomain}`;
    window.location.href = `mailto:${mailto}?subject=Kontakt z webu - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      formData.message + '\n\n---\n' + formData.name + '\n' + formData.email + (formData.phone ? '\n' + formData.phone : '')
    )}`;

    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-[20px]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-red-600 to-brand-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontakt</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Sme tu pre vás. Vyberte pobočku alebo nám napíšte.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Locations section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <Building2 className="h-8 w-8 text-brand-red-600" />
            Naše pobočky
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Každá pobočka má vlastné telefónne číslo a e-mail. Otváracie hodiny sa môžu líšiť.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{loc.name}</h3>
                    <span className="shrink-0 w-2 h-2 rounded-full bg-brand-green-500" title="Otvorené" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-brand-red-600 mt-0.5 shrink-0" />
                      <div className="text-sm text-gray-700">
                        <p>{loc.address}</p>
                        <p>{loc.city}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-brand-red-600 shrink-0" />
                      <a
                        href={`tel:${loc.phone.replace(/\s/g, '').replace(/,/g, '')}`}
                        className="text-sm text-gray-700 hover:text-brand-red-600 transition-colors"
                      >
                        {loc.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-brand-red-600 shrink-0" />
                      <ObfuscatedEmail user={loc.emailUser} domain={loc.emailDomain} />
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-brand-red-600 shrink-0" />
                      <span className="text-sm text-gray-700">{loc.hours}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {loc.features.slice(0, 2).map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-brand-red-600 font-semibold text-sm hover:text-brand-red-700 transition-colors"
                  >
                    <Navigation className="h-4 w-4" />
                    Navigovať
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Map + Form row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map – selected location */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kde nás nájdete</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-3 border-b border-gray-100 flex flex-wrap gap-2">
                {LOCATIONS.map((loc) => (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => setSelectedLocationId(loc.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      selectedLocation.id === loc.id
                        ? 'bg-brand-red-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {loc.shortName}
                  </button>
                ))}
              </div>
              <div className="h-72 w-full">
                <iframe
                  title={`Mapa – ${selectedLocation.name}`}
                  src={selectedLocation.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900">{selectedLocation.name}</p>
                <p className="text-sm text-gray-600 mt-0.5">
                  {selectedLocation.address}, {selectedLocation.city}
                </p>
                <a
                  href={selectedLocation.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-brand-red-600 font-medium text-sm hover:underline"
                >
                  Otvoriť v Google Maps
                  <Navigation className="h-4 w-4" />
                </a>
              </div>
              <div className="p-4 border-t border-gray-100 flex flex-wrap gap-2">
                {selectedLocation.features.map((f) => (
                  <span
                    key={f}
                    className="inline-flex items-center gap-1 text-xs bg-brand-red-50 text-brand-red-800 px-2.5 py-1 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Opening hours tip */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-xl">
              <p className="text-sm text-blue-800 flex items-start gap-2">
                <Lightbulb className="h-5 w-5 shrink-0 mt-0.5" />
                <span>
                  <strong>Tip:</strong> V sobotu je väčšinou menší počet zákazníkov. Rezervujte si termín pre
                  rýchlejšie vybavenie!
                </span>
              </p>
            </div>

            {/* Sobotné termíny – výber prevádzky + kalendár */}
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-700 mb-3">Vyberte prevádzku pre zobrazenie sobotných termínov:</p>
              <Tabs value={calendarLocationId} onValueChange={(v) => setCalendarLocationId(v as LocationId)} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4 h-auto p-1 gap-1 bg-gray-100">
                  {LOCATIONS.map((loc) => (
                    <TabsTrigger
                      key={loc.id}
                      value={loc.id}
                      className="data-[state=active]:bg-white data-[state=active]:shadow-sm py-2.5 text-sm font-medium"
                    >
                      {loc.shortName}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <SaturdayCalendarBanner
                  locationName={LOCATIONS.find((l) => l.id === calendarLocationId)?.name}
                />
              </Tabs>
            </div>
          </div>

          {/* Contact form with location tabs */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Napíšte nám</h2>
            <p className="text-gray-600 mb-6">
              Vyberte pobočku, ktorej chcete napísať. Správa bude odoslaná na vybranú pobočku.
            </p>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
              <Tabs
                value={selectedLocationId}
                onValueChange={(v) => setSelectedLocationId(v as LocationId)}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3 mb-6 h-auto p-1 gap-1 bg-gray-100">
                  {LOCATIONS.map((loc) => (
                    <TabsTrigger
                      key={loc.id}
                      value={loc.id}
                      className="data-[state=active]:bg-white data-[state=active]:shadow-sm py-2.5 text-sm font-medium"
                    >
                      {loc.shortName}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <p className="text-sm text-gray-600 mb-6">
                  Správa bude odoslaná na: <strong className="text-gray-900">{selectedLocation.name}</strong>
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Meno a priezvisko *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red-500 focus:border-brand-red-500"
                        placeholder="Vaše meno"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Telefón
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red-500 focus:border-brand-red-500"
                        placeholder="+421 xxx xxx xxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red-500 focus:border-brand-red-500"
                      placeholder="vas.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Správa *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red-500 focus:border-brand-red-500"
                      placeholder="Opíšte váš dotaz alebo požiadavku..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg font-semibold transition-colors ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed text-white'
                        : 'bg-brand-red-600 hover:bg-brand-red-700 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                        <span>Pripravujem...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Odoslať na {selectedLocation.shortName}</span>
                      </>
                    )}
                  </button>
                </form>
              </Tabs>
            </div>

            {/* Social */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Ďalšie spôsoby kontaktu</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href="#"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow border border-gray-100 hover:border-blue-200 transition-colors"
                >
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Facebook className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Facebook</p>
                    <p className="text-xs text-gray-600">Sledujte novinky</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow border border-gray-100 hover:border-pink-200 transition-colors"
                >
                  <div className="bg-pink-100 p-2 rounded-lg">
                    <Instagram className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Instagram</p>
                    <p className="text-xs text-gray-600">Fotky a tipy</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow border border-gray-100 hover:border-green-200 transition-colors"
                >
                  <div className="bg-green-100 p-2 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <p className="text-xs text-gray-600">Rýchla komunikácia</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Directions */}
        <section className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ako sa k nám dostanete</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Autom</h3>
              <p className="text-gray-600 text-sm">
                Pri všetkých pobočkách je parkovanie pre zákazníkov. Ľahko dostupné z hlavných ciest.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bus className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Autobus</h3>
              <p className="text-gray-600 text-sm">
                MHD a regionálne linky zastavujú v blízkosti našich centier. Skontrolujte spojenie podľa pobočky.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <SquareParking className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Parkovanie</h3>
              <p className="text-gray-600 text-sm">
                Parkovanie zdarma pri všetkých STK centrách pre našich zákazníkov.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
