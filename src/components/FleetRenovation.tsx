/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles, Building, ShieldCheck, Landmark } from 'lucide-react';
import { VehicleType } from '../types';

interface FleetRenovationProps {
  onNavigateToForm: (vehicleType?: VehicleType, financingType?: string) => void;
}

export default function FleetRenovation({ onNavigateToForm }: FleetRenovationProps) {
  return (
    <section id="renovacion" className="bg-neutral-900 text-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background grid pattern for high tech / professional look */}
      <div className="absolute inset-0 bg-[radial-gradient(#EE7624_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
      
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-2">
        
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <span className="text-[#EE7624] text-xs font-black uppercase tracking-widest block mb-3">
            Programa Especial de Renovación de Flota
          </span>
          <h2 className="text-3xl lg:text-[40px] font-black text-white tracking-tight uppercase leading-tight">
            EL MOMENTO DE RENOVAR ES AHORA
          </h2>
          <div className="w-20 h-[3px] bg-[#EE7624] mx-auto mt-5 mb-6" />
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Con <span className="font-bold text-white">International</span> e <span className="font-bold text-[#EE7624]">IFIN</span> renueva tu flota con beneficios fiscales, financiamiento especial y soluciones diseñadas para hacer crecer tu operación.
          </p>
        </div>

        {/* Dynamic Options Bento Box Container */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Option A: Estímulo Fiscal */}
          <div className="bg-[#272623] border border-neutral-800 rounded-md p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#EE7624]/5 rounded-bl-full transition-all group-hover:bg-[#EE7624]/10" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#EE7624]/10 rounded-sm text-[#EE7624]">
                  <Landmark size={24} className="stroke-[1.75]" />
                </div>
                <span className="text-[10px] font-black tracking-widest bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-sm uppercase">
                  Beneficio Fiscal
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-300 uppercase tracking-wider mb-2">
                Opción 1
              </h3>
              <h4 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-4 uppercase">
                Estímulo Fiscal
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium">
                ESTÍMULO FISCAL DE HASTA EL <span className="text-[#EE7624] font-black text-xl sm:text-2xl inline-block px-1">86%</span> DE DEPRECIACIÓN ACELERADA EN EL 1ER AÑO.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs text-gray-400">Estrena HOY</span>
              <button
                onClick={() => onNavigateToForm('' as VehicleType, 'Programa de Renovación - Estímulo Fiscal')}
                className="bg-[#EE7624] hover:bg-[#d66216] text-white text-[10px] sm:text-xs font-bold px-5 py-3 rounded-sm uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Elegir Plan</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>

          {/* Option B: Financiamiento Especial */}
          <div className="bg-[#272623] border border-neutral-800 rounded-md p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full transition-all group-hover:bg-white/10" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 rounded-sm text-white">
                  <Building size={24} className="stroke-[1.75]" />
                </div>
                <span className="text-[10px] font-black tracking-widest bg-sky-500/10 text-sky-400 px-2.5 py-1 rounded-sm uppercase">
                  Alianza de Apoyo
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-300 uppercase tracking-wider mb-2">
                Opción 2
              </h3>
              <h4 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-4 uppercase">
                Financiamiento
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium">
                FINANCIAMIENTO CON TASAS Y PLAZOS ESPECIALES CON APOYO DE <span className="text-white font-extrabold">SICT</span> Y <span className="text-white font-extrabold">NAFIN</span>.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs text-gray-400">Estrena HOY</span>
              <button
                onClick={() => onNavigateToForm('' as VehicleType, 'Programa de Renovación - Financiamiento SICT/NAFIN')}
                className="bg-white hover:bg-neutral-100 text-[#272623] text-[10px] sm:text-xs font-bold px-5 py-3 rounded-sm uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Elegir Plan</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimers & Info */}
        <div className="max-w-3xl mx-auto text-center space-y-6 pt-4 border-t border-neutral-800">
          <p className="text-sm text-gray-300 leading-relaxed">
            Pregunta en tu distribuidor de confianza por nuestros planes especiales. <span className="text-[#EE7624] font-semibold">Permítenos contactarte</span> completando el formulario.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#EE7624]" />
              <span>APLICAN POLÍTICAS PARA LA PROTECCIÓN A LA INDUSTRIA DE VEHÍCULOS PESADOS</span>
            </div>
          </div>

          <div className="pt-4">
            <span className="block text-xs font-extrabold tracking-widest text-[#EE7624] uppercase">
              International Financial
            </span>
            <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-1 block">
              International Financial lo hace posible.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
