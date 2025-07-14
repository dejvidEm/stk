'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  
  // Hide footer on homepage (rozcestník) since it has its own custom footer
  if (pathname === '/') {
    return null;
  }
  
  return <Footer />;
}
