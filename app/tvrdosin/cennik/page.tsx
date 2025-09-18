import { ArrowLeft, Car, Calculator } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-red-600 to-brand-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cenník služieb
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Prehľadný cenník všetkých našich služieb a typov vozidiel pre STK v Tvrdošíne
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Cenník technickej kontroly
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              Aktuálne ceny pre všetky typy vozidiel a služieb
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-brand-red-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Druh vozidla</th>
                    <th className="px-6 py-4 text-center font-semibold">Kategória</th>
                    <th className="px-6 py-4 text-center font-semibold">Pravidelná kontrola</th>
                    <th className="px-6 py-4 text-center font-semibold">Opakovaná kontrola</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Motocykel</td>
                    <td className="px-6 py-4 text-center text-gray-700">L3, L4, L6</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">39,90 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">20,90 €</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Osobné motorové vozidlo, štvorkolky</td>
                    <td className="px-6 py-4 text-center text-gray-700">M1, N1, L5e, L7e</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">50,90 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">25,90 €</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 pl-12">s pohonom plyn, hybrid, elektro</td>
                    <td className="px-6 py-4 text-center text-gray-700">M1, N1</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">61,90 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">25,90 €</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="px-6 py-4 font-medium text-gray-900 pl-12">automaticky uznávané výnimky (USA a pod.)</td>
                    <td className="px-6 py-4 text-center text-gray-700">M1, N1, L5e, L7e</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">210,00 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">129,90 €</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Nákladné motorové vozidlo</td>
                    <td className="px-6 py-4 text-center text-gray-700">N2, N3, M2, M3, PS</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">77,90 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">41,90 €</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Prípojné vozidlá nad 3500 kg</td>
                    <td className="px-6 py-4 text-center text-gray-700">O3, O4, R2, R3, R4</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">54,90 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">35,90 €</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 pl-12">do 3500 kg</td>
                    <td className="px-6 py-4 text-center text-gray-700">O2</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">34,90 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">15,90 €</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Traktor</td>
                    <td className="px-6 py-4 text-center text-gray-700">T1, T2, T3, T4, T5</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">59,90 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">35,90 €</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Vozidlá s obmedzenou prevádzkou, traktor</td>
                    <td className="px-6 py-4 text-center text-gray-700">Farmárske značky</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">85,00 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">35,90 €</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Prípojné vozidlo s obmedzenou prevádzkou</td>
                    <td className="px-6 py-4 text-center text-gray-700">Farmárske značky</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">65,00 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">-</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Administratívna kontrola zrýchlene*</td>
                    <td className="px-6 py-4 text-center text-gray-700">Všetky kategórie</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">16,00 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">-</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Administratívna kontrola</td>
                    <td className="px-6 py-4 text-center text-gray-700">Všetky kategórie</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">21,00 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">-</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Zvláštna kontrola</td>
                    <td className="px-6 py-4 text-center text-gray-700">M1, N1</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">26,90 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">-</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Zvláštna kontrola</td>
                    <td className="px-6 py-4 text-center text-gray-700">Ostatné kategórie</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">41,90 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">-</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Opis protokolu</td>
                    <td className="px-6 py-4 text-center text-gray-700">Všetky kategórie</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">10,00 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 italic">
                * Administratívna kontrola zrýchlene - do 24 hodín
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Všetky ceny sú uvedené s DPH. Ceny platné od 1.1.2024.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emission Control Pricing Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Cenník emisnej kontroly
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              Aktuálne ceny pre emisnú kontrolu všetkých typov vozidiel
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-brand-red-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Druh vozidla</th>
                    <th className="px-6 py-4 text-center font-semibold">Kategória</th>
                    <th className="px-6 py-4 text-center font-semibold">Pravidelná kontrola</th>
                    <th className="px-6 py-4 text-center font-semibold">Opakovaná kontrola</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Osobné vozidlo benzín bez katalyzátora, s RKAT, OBD, Diesel</td>
                    <td className="px-6 py-4 text-center text-gray-700">M1, N1</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">46,90 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">25,00 €</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="px-6 py-4 font-medium text-gray-900 pl-12">+ LPG, CNG, Hybrid</td>
                    <td className="px-6 py-4 text-center text-gray-700">M1, N1</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">53,90 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">30,00 €</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Nákladné motorové vozidlo</td>
                    <td className="px-6 py-4 text-center text-gray-700">N2, N3, M2, M3, PS</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">57,90 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">35,00 €</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="px-6 py-4 font-medium text-gray-900 pl-12">+ LPG, CNG</td>
                    <td className="px-6 py-4 text-center text-gray-700">N2, N3, M2, M3, PS</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">63,90 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">40,00 €</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Traktor</td>
                    <td className="px-6 py-4 text-center text-gray-700">T1, T2, T3, T4, T5</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">47,90 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">25,00 €</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Administratívna kontrola zrýchlene*</td>
                    <td className="px-6 py-4 text-center text-gray-700">Všetky kategórie</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">15,00 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">-</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Administratívna kontrola</td>
                    <td className="px-6 py-4 text-center text-gray-700">Všetky kategórie</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">20,00 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">-</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Zvláštna kontrola</td>
                    <td className="px-6 py-4 text-center text-gray-700">M1, N1</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">25,00 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">-</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Zvláštna kontrola</td>
                    <td className="px-6 py-4 text-center text-gray-700">Ostatné kategórie</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">40,00 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">-</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Opis protokolu</td>
                    <td className="px-6 py-4 text-center text-gray-700">Všetky kategórie</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">10,00 €</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-semibold">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 italic">
                * Administratívna kontrola zrýchlene - do 24 hodín
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Osvedčenie o technickej/emisnej kontrole</strong> slúži ako doklad na preukázanie platnosti TK/EK pri kontrole v cestnej premávke.
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Opakovaná technická/emisná kontrola sa musí vykonať do 60 kalendárnych dní od pravidelnej kontroly.
              </p>
              <p className="text-sm text-gray-600 mt-1">
                * Pravidelná kontrola vykonaná na našom pracovisku
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Všetky ceny sú uvedené s DPH. Ceny platné od 1.1.2024.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Doplnkové služby
            </h2>
            <p className="text-xl text-gray-600">
              Kompletné služby pre vaše pohodlie
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-brand-red-100 p-2 rounded-lg">
                  <Car className="h-6 w-6 text-brand-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Express vystavenie</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Rýchle spracovanie a vystavenie protokolu do 1 hodiny.
              </p>
              <div className="text-2xl font-bold text-brand-red-600">+ 5,00 €</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-brand-red-100 p-2 rounded-lg">
                  <Car className="h-6 w-6 text-brand-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">VIN očíslovanie</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Odborné vykonanie VIN označenia vozidla.
              </p>
              <div className="text-2xl font-bold text-brand-red-600">20,00 €</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-brand-red-100 p-2 rounded-lg">
                  <Car className="h-6 w-6 text-brand-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Zabezpečené parkovanie</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Bezpečné strážené parkovisko pre vaše vozidlo.
              </p>
              <div className="text-2xl font-bold text-brand-red-600">Zdarma</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-brand-red-100 p-2 rounded-lg">
                  <Car className="h-6 w-6 text-brand-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Kuriérska služba</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Donáška dokumentov priamo k vám domov alebo do práce.
              </p>
              <div className="text-2xl font-bold text-brand-red-600">Na vyžiadanie</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-brand-red-100 p-2 rounded-lg">
                  <Car className="h-6 w-6 text-brand-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Mycí programy</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Kompletné umytie vozidla počas kontroly.
              </p>
              <div className="text-2xl font-bold text-brand-red-600">Na vyžiadanie</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Pricing */}
      <section className="py-16 bg-brand-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Potrebujete individuálnu ponuku?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Kontaktujte nás pre špeciálne cenové podmienky pre flotily a firemných klientov.
          </p>
          <Link
            href="/tvrdosin/kontakt"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-red-600 hover:bg-brand-red-700 transition-colors"
          >
            Kontaktovať nás
          </Link>
        </div>
      </section>
    </div>
  );
}
