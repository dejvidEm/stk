'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home } from 'lucide-react';

export default function BackToHomeButton() {
  const pathname = usePathname();
  
  // Don't show on homepage
  if (pathname === '/') {
    return null;
  }

  return (
    <div className="fixed top-20 right-4 z-40">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-md shadow-sm hover:shadow-md hover:bg-white transition-all text-xs text-gray-500 hover:text-gray-700 group"
        aria-label="Späť na hlavnú stránku"
      >
        <Home className="h-3.5 w-3.5 group-hover:text-brand-green-600 transition-colors" />
        <span className="hidden sm:inline">Domov</span>
      </Link>
    </div>
  );
}
