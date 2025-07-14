'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Hide navbar only on the homepage (rozcestník)
  if (pathname === '/') {
    return null;
  }
  
  return <Navbar />;
}
