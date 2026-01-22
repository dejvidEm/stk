'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Car, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine which center we're on based on pathname
  const getCenterInfo = () => {
    if (pathname?.startsWith('/namestovo')) {
      return {
        name: 'STK Námestovo',
        basePath: '/namestovo'
      };
    } else if (pathname?.startsWith('/lokca')) {
      return {
        name: 'STK Lokca',
        basePath: '/lokca'
      };
    } else {
      return {
        name: 'STK Tvrdošín',
        basePath: '/tvrdosin'
      };
    }
  };

  const centerInfo = getCenterInfo();

  const navItems = [
    { href: centerInfo.basePath, label: centerInfo.name },
    { href: `${centerInfo.basePath}/sluzby`, label: 'Služby' },
    { href: `${centerInfo.basePath}/autoumyvaren`, label: 'Autoumyváreň' },
    { href: `${centerInfo.basePath}/galeria`, label: 'Galéria' },
    { href: `${centerInfo.basePath}/cennik`, label: 'Cenník' },
    { href: `${centerInfo.basePath}/rezervacia`, label: 'Rezervácia' },
    { href: `${centerInfo.basePath}/kontakt`, label: 'Kontakt' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg py-2' 
        : 'bg-white shadow-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href={centerInfo.basePath} className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-brand-gray-900 hover:text-brand-red-600 transition-colors">
              {centerInfo.name}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  pathname === item.href 
                    ? 'text-brand-red-600 hover:text-brand-red-700' 
                    : 'text-brand-gray-700 hover:text-brand-red-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-brand-gray-700 hover:text-brand-red-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3 pt-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium py-2 transition-colors ${
                    pathname === item.href 
                      ? 'text-brand-red-600 hover:text-brand-red-700' 
                      : 'text-brand-gray-700 hover:text-brand-red-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}