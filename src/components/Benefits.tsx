/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

interface BenefitsProps {
  onNavigateToForm: () => void;
}

export default function Benefits({ onNavigateToForm }: BenefitsProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [showTerms, setShowTerms] = useState(false);

  if (!isVisible) return null;

  return (
    <div
      id="cintilla-plan-tasas"
      className="w-full bg-[#12110f] border-y border-neutral-800 text-white relative z-20 shadow-lg"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 py-4 md:py-3.5 sm:px-6 md:px-8">
        
        {/* Main Container: Flex on block level */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-6">
          
          {/* Header / Intro: Left block and info */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="flex h-2.5 w-2.5 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EE7624] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#EE7624]"></span>
            </span>
            <div>
              <span className="text-[#EE7624] text-[10px] font-black uppercase tracking-widest block">
                Planes de Arrendamiento Financiero
              </span>
              <h3 className="text-white text-xs font-bold uppercase tracking-wider mt-0.5">
                Tasas Actualizadas Traton Financial
              </h3>
            </div>
          </div>

          {/* Plans List: Custom layout that adjusts perfectly on mobile to avoid breaking */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-6 flex-1 max-w-3xl">
            
            {/* Plan A block */}
            <div className="bg-[#1A1916] rounded border border-neutral-800/80 p-2.5 sm:p-3 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="bg-[#EE7624] text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm uppercase tracking-wider shrink-0">
                    Plan A
                  </span>
                  <span className="text-neutral-300 font-bold text-[10px] uppercase tracking-wider truncate">
                    Gracia en Capital
                  </span>
                </div>
                <p className="text-white font-extrabold text-xs tracking-tight">
                  Hasta 60 Meses: <span className="text-[#EE7624] font-black">9.80%</span>
                </p>
                <p className="text-[10px] text-neutral-400 font-medium font-sans">
                  (3 meses de gracia en capital al inicio)
                </p>
              </div>
            </div>

            {/* Plan B block */}
            <div className="bg-[#1A1916] rounded border border-neutral-800/80 p-2.5 sm:p-3 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="bg-[#EE7624] text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm uppercase tracking-wider shrink-0">
                    Plan B
                  </span>
                  <span className="text-neutral-300 font-bold text-[10px] uppercase tracking-wider truncate">
                    Gracia en Total
                  </span>
                </div>
                <p className="text-white font-extrabold text-xs tracking-tight">
                  Hasta 60 Meses: <span className="text-[#EE7624] font-black">10.75%</span>
                </p>
                <p className="text-[10px] text-neutral-400 font-medium font-sans">
                  (3 meses de gracia total al inicio)
                </p>
              </div>
            </div>

          </div>

          {/* CTAs & Close Button Column */}
          <div className="flex flex-row items-center justify-between sm:justify-end gap-3 md:gap-4 border-t border-neutral-800 pt-3 lg:border-t-0 lg:pt-0 shrink-0">
            
            <button
              onClick={() => setShowTerms(!showTerms)}
              className="text-[10px] text-neutral-400 hover:text-white uppercase tracking-wider font-extrabold underline cursor-pointer transition-colors py-1 shrink-0"
            >
              Términos (*)
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={onNavigateToForm}
                className="bg-[#EE7624] hover:bg-[#d66216] text-white font-extrabold text-[10px] uppercase tracking-wider px-4 py-2 rounded-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
              >
                <span>Cotizar Plan</span>
                <ArrowRight size={11} className="stroke-[2.5]" />
              </button>

              {/* Dismiss banner icon button */}
              <button
                onClick={() => setIsVisible(false)}
                className="text-neutral-500 hover:text-neutral-300 transition-colors p-1.5 cursor-pointer shrink-0"
                aria-label="Cerrar aviso"
              >
                <X size={15} />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Dropped micro details for Terms and conditions */}
      {showTerms && (
        <div className="bg-[#0e0d0c] border-t border-neutral-800/80">
          <div className="max-w-[1400px] mx-auto px-4 py-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-[9px] text-neutral-400 leading-relaxed font-normal">
            <div className="bg-[#12110f] p-3 rounded border border-white/5">
              <h4 className="font-extrabold text-white uppercase tracking-widest mb-1 text-[#EE7624]">
                Plan A (Gracia de Capital)
              </h4>
              <p className="mb-1 text-neutral-300 font-semibold">Tasa 36m: 7.80% | 48m: 8.80% | 60m: 9.80%</p>
              <p>3 meses de gracia en capital al inicio. Vigencia al 30 de Junio del 2026. Promoción válida en contratos de 36, 48 y 60 meses. Sujeta a aprobación de crédito por Traton Financial Services México, S.A. de C.V., SOFOM E.R.</p>
            </div>
            <div className="bg-[#12110f] p-3 rounded border border-white/5">
              <h4 className="font-extrabold text-white uppercase tracking-widest mb-1 text-[#EE7624]">
                Plan B (Gracia Total)
              </h4>
              <p className="mb-1 text-neutral-300 font-semibold">Tasa 36m: 9.75% | 48m: 10.25% | 60m: 10.75%</p>
              <p>3 meses de gracia total al inicio del arrendamiento. Vigencia al 30 de Junio del 2026. Promoción válida en contratos de 36, 48 y 60 meses. Sujeta a aprobación de crédito por Traton Financial Services México.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
