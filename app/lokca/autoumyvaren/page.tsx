import Link from 'next/link';
import { Droplets, ArrowRight } from 'lucide-react';

export default function LokcaCarWashPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-slate-600 to-slate-800 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Droplets className="h-14 w-14 opacity-90" aria-hidden />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Autoumyváreň</h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            V prevádzke <strong>STK Lokca</strong> autoumyváreň <strong>neprevádzkujeme</strong>.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Autoumyváreň nájdete v areáli <strong>STK Námestovo</strong> (portál, boxy, vysávač, čistič rohoží) alebo{' '}
            <strong>STK Tvrdošín</strong> (umývacie boxy, vysávač).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/namestovo/autoumyvaren"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Autoumyváreň Námestovo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/tvrdosin/autoumyvaren"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-700 font-semibold hover:bg-blue-50 transition-colors"
            >
              Autoumyváreň Tvrdošín
            </Link>
          </div>
          <p className="mt-10">
            <Link href="/lokca" className="text-brand-red-600 font-semibold hover:text-brand-red-700">
              ← Späť na STK Lokca
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
