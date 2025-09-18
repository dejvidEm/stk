import Link from 'next/link';
import { Car, Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* STK Centers Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Naše centrá</h3>
            <ul className="space-y-2">
              <li><a href="https://www.stknamestovo.sk" target="_blank" rel="noopener noreferrer" className="text-brand-gray-300 hover:text-white transition-colors">STK Námestovo</a></li>
              <li><Link href="/demo" className="text-brand-gray-300 hover:text-white transition-colors">STK Tvrdošín (Demo)</Link></li>
              <li><a href="https://www.stklokca.sk" target="_blank" rel="noopener noreferrer" className="text-brand-gray-300 hover:text-white transition-colors">STK Lokca</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Služby</h3>
            <ul className="space-y-2">
              <li><Link href="/tvrdosin/sluzby" className="text-brand-gray-300 hover:text-white transition-colors">Naše služby</Link></li>
              <li><Link href="/tvrdosin/cennik" className="text-brand-gray-300 hover:text-white transition-colors">Cenník</Link></li>
              <li><Link href="/tvrdosin/rezervacia" className="text-brand-gray-300 hover:text-white transition-colors">Online rezervácia</Link></li>
              <li><Link href="/tvrdosin/caste-otazky" className="text-brand-gray-300 hover:text-white transition-colors">Často kladené otázky</Link></li>
            </ul>
          </div>

          {/* Contact Info - Tvrdošín as example */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt (Tvrdošín)</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-green-400" />
                <span className="text-brand-gray-300">0948 032189, 043 5323499</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-green-400" />
                <span className="text-brand-gray-300">info@stktvrdosin.sk</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-green-400 mt-1" />
                <div className="text-brand-gray-300">
                  <p>Vojtaššákova 908</p>
                  <p>027 44 Tvrdošín</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Otváracie hodiny</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-brand-green-400" />
                <div className="text-brand-gray-300">
                  <p className="font-medium">Po - Pia: 07:00 - 15:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-gray-800 mt-8 pt-8 text-center text-brand-gray-400">
          <p>&copy; 2024 STK Centrá. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
}