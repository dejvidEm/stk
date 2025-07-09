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
            <div className="bg-brand-red-600 p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-brand-gray-900">STK Centrum</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors hover:text-brand-red-600 ${
                  pathname === item.href ? 'text-brand-red-600' : 'text-brand-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-2 text-brand-green-600 font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 56 56"><path fill="currentColor" d="M28 51.906c13.055 0 23.906-10.851 23.906-23.906c0-13.078-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.922 4.095 28c0 13.055 10.828 23.906 23.906 23.906m-6.117-18.07c-5.813-5.79-9.516-13.172-5.133-17.555c.258-.258.539-.515.797-.773c1.336-1.266 2.625-1.195 3.773.422l3.047 4.336c1.031 1.5.773 2.343-.328 3.515l-.961 1.055c-.351.328-.21.773-.047 1.055c.446.843 1.711 2.343 3.07 3.703c1.407 1.406 2.836 2.601 3.727 3.093c.328.188.797.235 1.102-.046l1.007-.961c1.125-1.102 2.04-1.383 3.493-.352a319 319 0 0 0 4.43 3.094c1.476 1.078 1.827 2.414.327 3.773c-.257.258-.492.54-.75.797c-4.382 4.36-11.742.656-17.554-5.156"/></svg>
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
                  className={`font-medium py-2 transition-colors hover:text-brand-red-600 ${
                    pathname === item.href ? 'text-brand-red-600' : 'text-brand-gray-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-2 text-brand-green-600 font-semibold pt-2">
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