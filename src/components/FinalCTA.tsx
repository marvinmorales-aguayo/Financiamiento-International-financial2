/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface FinalCTAProps {
  onNavigateToForm: () => void;
}

export default function FinalCTA({ onNavigateToForm }: FinalCTAProps) {
  return (
    <section
      id="final-cta"
      className="relative py-20 md:py-28 overflow-hidden bg-cover bg-center text-white"
      style={{
        backgroundImage: `url("https://www.camionesinternational.com/documents/157231/173643/banner_21-9_Financiamiento_CTA.jpg")`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay for perfect contrast */}
      <div id="final-cta-overlay" className="absolute inset-0 bg-black/20 z-1" />

      {/* Decorative ambient background shape */}
      <div className="absolute right-[-10%] top-[-10%] w-[450px] h-[450px] rounded-full bg-white/5 blur-3xl pointer-events-none select-none z-2" />
      <div className="absolute left-[-5%] bottom-[-15%] w-[350px] h-[350px] rounded-full bg-amber-500/5 blur-3xl pointer-events-none select-none z-2" />

      <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
        
        {/* Animated Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-[40px] font-extrabold text-white tracking-tight uppercase mb-6 leading-tight"
        >
          Confía en lo que todos dicen.
        </motion.h2>

        {/* Supporting subheadline description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-light"
        >
          Toma el primer paso decisivo para adquirir o renovar una nueva unidad o flota comercial entera en México. Cuéntanos un poco sobre tus rutas y negocio para diseñar una oferta financiera personalizada a tu tasa óptima.
        </motion.p>

        {/* Large Format White Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block"
        >
          <button
            id="final-cta-btn"
            onClick={onNavigateToForm}
            className="group inline-flex items-center gap-3 bg-white hover:bg-neutral-100 text-[#272623] text-base font-bold py-4.5 px-10 rounded-[4px] tracking-wider uppercase transition-all shadow-xl active:scale-98 cursor-pointer border border-transparent"
          >
            <span>Solicitar Cotización Ahora</span>
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
