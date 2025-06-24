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

  const navItems = [
    { href: '/', label: 'Domov' },
    { href: '/sluzby', label: 'Služby' },
    { href: '/cennik', label: 'Cenník' },
    { href: '/rezervacia', label: 'Rezervácia' },
    { href: '/kontakt', label: 'Kontakt' },
    { href: '/caste-otazky', label: 'FAQ' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">STK Centrum</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  pathname === item.href ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-2 text-blue-600 font-semibold">
              <Phone className="h-4 w-4" />
              <span>+421 2 1234 5678</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium py-2 transition-colors hover:text-blue-600 ${
                    pathname === item.href ? 'text-blue-600' : 'text-gray-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-2 text-blue-600 font-semibold pt-2">
                <Phone className="h-4 w-4" />
                <span>+421 2 1234 5678</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}