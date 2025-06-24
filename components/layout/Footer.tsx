import Link from 'next/link';
import { Car, Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl">STK Centrum</span>
            </div>
            <p className="text-gray-300 mb-4">
              Profesionálna technická kontrola vozidiel s 15-ročnými skúsenosťami. 
              Rýchlo, spoľahlivo a za najlepšie ceny.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Rýchle odkazy</h3>
            <ul className="space-y-2">
              <li><Link href="/sluzby" className="text-gray-300 hover:text-white transition-colors">Naše služby</Link></li>
              <li><Link href="/cennik" className="text-gray-300 hover:text-white transition-colors">Cenník</Link></li>
              <li><Link href="/rezervacia" className="text-gray-300 hover:text-white transition-colors">Online rezervácia</Link></li>
              <li><Link href="/caste-otazky" className="text-gray-300 hover:text-white transition-colors">Často kladené otázky</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+421 2 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@stkcentrum.sk</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <p>Technická 15</p>
                  <p>821 04 Bratislava</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Otváracie hodiny</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400" />
                <div className="text-gray-300">
                  <p className="font-medium">Po - Pia: 7:00 - 18:00</p>
                  <p>So: 8:00 - 14:00</p>
                  <p>Ne: Zatvorené</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 STK Centrum. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
}