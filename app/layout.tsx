import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import ConditionalNavbar from '../components/layout/ConditionalNavbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'STK Centrum - Technická kontrola vozidiel | Rýchlo a spoľahlivo',
  description: 'Profesionálna technická kontrola vozidiel (STK) a emisné kontroly (EK). Online rezervácia termínov. Rýchle a spoľahlivé služby v Bratislave.',
  keywords: 'STK, technická kontrola, emisná kontrola, EK, vozidlá, Bratislava, rezervácia online',
  authors: [{ name: 'STK Centrum' }],
  robots: 'index, follow',
  openGraph: {
    title: 'STK Centrum - Technická kontrola vozidiel',
    description: 'Profesionálna technická kontrola vozidiel a emisné kontroly. Online rezervácia termínov.',
    type: 'website',
    locale: 'sk_SK',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body className={inter.className}>
        <ConditionalNavbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}