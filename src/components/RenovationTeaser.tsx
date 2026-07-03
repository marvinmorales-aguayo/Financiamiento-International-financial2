/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Percent, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { VehicleType } from '../types';

interface RenovationTeaserProps {
  onNavigateToForm: (vehicleType?: VehicleType, financingType?: string) => void;
}

export default function RenovationTeaser({ onNavigateToForm }: RenovationTeaserProps) {
  return (
    <div className="bg-[#fcfbf9] border-y border-neutral-200 py-8">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="bg-white border border-neutral-200 rounded-sm p-5 md:p-6 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Label & Main Hook Text */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 bg-[#EE7624]/10 text-[#EE7624] text-[10px] font-black px-2.5 py-0.5 uppercase tracking-widest rounded-sm">
                Beneficio Principal
              </span>
              <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                Alianza IFIN
              </span>
            </div>
            
            <h3 className="text-[#272623] text-lg md:text-xl font-black uppercase tracking-tight leading-tight">
              Programa Especial de Renovación de Flota
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed max-w-2xl">
              El momento de renovar es ahora. Disfruta de beneficios exclusivos diseñados para optimizar el rendimiento y la deducibilidad de tu operación.
            </p>
          </div>

          {/* Quick-Benefit Highlights (Subtle & Conversational) */}
          <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full lg:w-auto">
            
            {/* Benefit 1 */}
            <div className="flex items-start gap-3 bg-neutral-50 border border-neutral-100 rounded-sm p-3.5 flex-1 lg:w-[220px]">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-sm mt-0.5">
                <Percent size={15} className="stroke-[2.5]" />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Opción de Estímulo
                </span>
                <span className="block text-xs font-extrabold text-[#272623] uppercase mt-0.5 leading-snug">
                  Hasta 86% Depreciación
                </span>
                <span className="block text-[10px] text-gray-500 mt-0.5">
                  Acelerada en el 1er año
                </span>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start gap-3 bg-neutral-50 border border-neutral-100 rounded-sm p-3.5 flex-1 lg:w-[220px]">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-sm mt-0.5">
                <Calendar size={15} className="stroke-[2.5]" />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Opción de Apoyo
                </span>
                <span className="block text-xs font-extrabold text-[#272623] uppercase mt-0.5 leading-snug">
                  Tasas Especiales
                </span>
                <span className="block text-[10px] text-gray-500 mt-0.5">
                  Apoyo de SICT y NAFIN
                </span>
              </div>
            </div>

          </div>

          {/* Prompt / Call to Action */}
          <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row items-center gap-3 border-t lg:border-t-0 pt-4 lg:pt-0 border-neutral-100">
            <button
              onClick={() => onNavigateToForm('' as VehicleType, 'Programa Especial de Renovación de Flota')}
              className="w-full sm:w-auto bg-[#272623] hover:bg-[#1a1a1a] text-white text-xs font-bold px-6 py-4 rounded-sm uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Aplicar al Programa</span>
              <ArrowRight size={13} className="stroke-[2.5]" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
