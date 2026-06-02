/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FinalCTAProps {
  onNavigateToForm: () => void;
}

export default function FinalCTA({ onNavigateToForm }: FinalCTAProps) {
  return (
    <section
      id="final-cta"
      className="relative py-20 md:py-28 overflow-hidden bg-cover bg-center text-white bg-neutral-950"
      style={{
        backgroundImage: `url("https://www.camionesinternational.com/documents/157231/173643/banner_21-9_Financiamiento_CTA.jpg")`,
      }}
    >
      {/* Dark overlay for perfect contrast */}
      <div id="final-cta-overlay" className="absolute inset-0 bg-black/60 z-1" />

      {/* Decorative ambient background shape */}
      <div className="absolute right-[-10%] top-[-10%] w-[450px] h-[450px] rounded-full bg-white/5 blur-3xl pointer-events-none select-none z-2" />
      <div className="absolute left-[-5%] bottom-[-15%] w-[350px] h-[350px] rounded-full bg-amber-500/5 blur-3xl pointer-events-none select-none z-2" />

      <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
        
        {/* Headline */}
        <h2 className="text-3xl md:text-[40px] font-extrabold text-white tracking-tight uppercase mb-6 leading-tight">
          Confía en lo que todos dicen.
        </h2>

        {/* Supporting subheadline description */}
        <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-light font-sans">
          Toma el primer paso decisivo para adquirir o renovar una nueva unidad o flota comercial entera en México. Cuéntanos un poco sobre tus rutas y negocio para diseñar una oferta financiera personalizada a tu tasa óptima.
        </p>

        {/* Large Format White Button */}
        <div className="inline-block">
          <button
            id="final-cta-btn"
            onClick={onNavigateToForm}
            className="inline-flex items-center gap-3 bg-white hover:bg-neutral-100 text-[#272623] text-base font-bold py-4 px-10 rounded-sm tracking-wider uppercase transition-colors shadow-md cursor-pointer border border-transparent"
          >
            <span>Solicitar Cotización Ahora</span>
            <ArrowUpRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
