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
  Accessibility,
  Wrench
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Správa bola úspešne odoslaná!');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-red-600 to-brand-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kontakt
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Sme tu pre vás. Kontaktujte nás kedykoľvek potrebujete pomoc.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Telefón</h3>
            <div className="space-y-2">
              <div>
                <p className="text-2xl font-bold text-blue-600">043 5323499<br/>0948 032189</p>
                <p className="text-sm text-gray-600">Hlavná linka</p>
              </div>
            </div>
            <p className="text-gray-600 mt-4">
              Dostupní sme počas prevádzkových hodín
            </p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">E-mail</h3>
            <div className="space-y-2">
              <div>
                <p className="text-xl font-bold text-green-600">info@stktvrdosin.sk</p>
                <p className="text-sm text-gray-600">Všeobecné otázky</p>
              </div>
            </div>
            <p className="text-gray-600 mt-4">
              Odpovedáme do 24 hodín
            </p>
          </div>

          {/* Address */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Adresa</h3>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-gray-900">STK Tvrdošín</p>
              <p className="text-gray-700">Vojtaššákova 908</p>
              <p className="text-gray-700">027 44 Tvrdošín</p>
              <p className="text-gray-700">Slovenská republika</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kde nás nájdete</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="h-80 relative">
                <iframe
                  src="https://www.google.com/maps?q=Vojtaššákova+908,+027+44+Tvrdošín,+Slovensko&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="STK Tvrdošín - Vojtaššákova 908, 027 44 Tvrdošín"
                  className="rounded-t-2xl"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">STK Tvrdošín, Vojtaššákova 908, 027 44 Tvrdošín, Slovensko</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    <SquareParking className="h-4 w-4 mr-1 inline-block" /> Parkovanie zdarma
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    <Accessibility className="h-4 w-4 mr-1 inline-block" /> Bezbariérový prístup
                  </span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    <Wrench className="h-4 w-4 mr-1 inline-block" /> Servis na mieste
                  </span>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Otváracie hodiny</h3>
              </div>
              
              <div className="space-y-3">
                {[
                  { day: 'Pondelok - Piatok', time: '07:00 - 15:30', isToday: true },
                ].map((schedule, index) => (
                  <div key={index} className={`flex justify-between items-center p-3 rounded-lg ${
                    schedule.isToday ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
                  }`}>
                    <span className={`font-medium ${schedule.closed ? 'text-gray-500' : 'text-gray-900'}`}>
                      {schedule.day}
                      {schedule.isToday && (
                        <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                          Dnes
                        </span>
                      )}
                    </span>
                    <span className={`font-semibold ${
                      schedule.closed ? 'text-red-600' : schedule.isToday ? 'text-green-600' : 'text-gray-700'
                    }`}>
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Napíšte nám</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-gray-600 mb-6">
                Máte otázku alebo potrebujete poradiť? Napíšte nám a my vám odpovieme do 24 hodín.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Meno a priezvisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Vaše meno"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefón
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+421 xxx xxx xxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="vas.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Správa *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Opíšte váš dotaz alebo požiadavku..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-semibold transition-colors ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Odosielam...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Odoslať správu</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Social Media & Chat */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ďalšie spôsoby kontaktu</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="#"
                  className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100 hover:border-blue-300"
                >
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Facebook className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Facebook</p>
                    <p className="text-sm text-gray-600">Sledujte novinky</p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-pink-100 hover:border-pink-300"
                >
                  <div className="bg-pink-100 p-2 rounded-lg">
                    <Instagram className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Instagram</p>
                    <p className="text-sm text-gray-600">Fotky a tipy</p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-green-100 hover:border-green-300"
                >
                  <div className="bg-green-100 p-2 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <p className="text-sm text-gray-600">Rýchla komunikácia</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
