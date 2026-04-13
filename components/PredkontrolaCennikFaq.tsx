'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function PredkontrolaCennikFaq() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">
          Prečo sa rozhodnúť pre Predkontrolu?
        </h3>
        {open ? (
          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
        )}
      </button>

      {open && (
        <div className="px-6 pb-5">
          <div className="border-t border-gray-100 pt-4 space-y-4 text-gray-700 leading-relaxed">
            <p className="font-semibold text-gray-900">Prečo sa rozhodnúť pre predkontrolu?</p>
            <p>
              Zverte svoje vozidlo do rúk odborníkov ešte pred termínom pravidelnej technickej a emisnej
              kontroly. Zbavíte sa tak zbytočného stresu z výsledku a neistoty, či bude vaše auto vyhodnotené
              ako spôsobilé. Náš skúsený personál vám presne poradí, čo je potrebné opraviť, aby vozidlo prešlo
              oficiálnou STK bez komplikácií.
            </p>
            <p>
              Veľkou výhodou je plynulosť procesu: ak je vaše vozidlo v poriadku, môže ihneď postúpiť na riadnu
              technickú a emisnú kontrolu priamo na našom pracovisku.
            </p>

            <div>
              <p className="font-semibold text-gray-900 mb-2">Rozsah a možnosti predkontroly</p>
              <p className="mb-2">
                Predkontrola prebieha v približnom rozsahu ako technická či emisná kontrola. Podľa vašej potreby
                ju môžeme vykonať:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>kompletne (technická aj emisná časť),</li>
                <li>samostatne (iba technická alebo iba emisná časť).</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2 italic">
                (Poznámka: Pri určitých kategóriách vozidiel môže byť predkontrola realizovaná v čiastočnom
                rozsahu.)
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-2">Čo všetko preverujeme?</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Brzdová sústava:</strong> funkčnosť a súmernosť účinku bŕzd.
                </li>
                <li>
                  <strong>Osvetlenie:</strong> preverenie funkčnosti a nastavenie všetkých svetiel.
                </li>
                <li>
                  <strong>Podvozok a pneumatiky:</strong> kontrola vôle v nápravách, stavu komponentov podvozku a
                  hĺbky dezénu pneumatík.
                </li>
                <li>
                  <strong>Emisie:</strong> meranie úrovne produkovaných emisií.
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-2">Hlavné benefity predkontroly</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <strong>Úspora času a peňazí:</strong> vyhnete sa poplatkom za opakované kontroly a zbytočným
                  servisným úkonom navyše.
                </li>
                <li>
                  <strong>Čistá história vozidla:</strong> predídete záznamom o „dočasnej spôsobilosti“ alebo
                  „nespôsobilosti“ v systéme, čo priaznivo ovplyvňuje hodnotu vášho vozidla pri budúcom predaji.
                </li>
                <li>
                  <strong>Okamžitý prechod na STK:</strong> ak je vozidlo v stopercentnom stave, vybavíte
                  oficiálnu kontrolu ihneď na mieste.
                </li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
