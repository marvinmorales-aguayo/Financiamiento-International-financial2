/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

interface BenefitsProps {
  onNavigateToForm: () => void;
}

export default function Benefits({ onNavigateToForm }: BenefitsProps) {
  const checklistItems = [
    'Posibilidad de pagos flexibles/diferentes',
    'Sin restricciones de kilometraje',
    'Ser dueños del equipo al final del plazo a un valor específico',
    'Pagos mensuales menores',
    'Opción de tasa de Interés Variable',
    'Agregar Servicios de Valor Agregado',
    'Sustituir camiones en cortos plazos',
  ];

  return (
    <section
      id="beneficios"
      className="bg-[#F8F8F8] py-16 md:py-24 border-y border-[#DDDDDD]"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col md:flex-row items-start justify-between gap-12 md:gap-8">
        
        {/* Left Column (40%) */}
        <div id="benefits-left-col" className="w-full md:w-[40%] flex flex-col">
          <span className="text-[13px] font-semibold text-gray-500 tracking-widest uppercase mb-2">
            Soluciones Financieras
          </span>
          <h2 className="text-4xl lg:text-[42px] leading-tight font-extrabold text-[#000000] tracking-tight uppercase">
            Flexibles
          </h2>
          <div className="w-16 h-[2px] bg-[#272623] mt-5 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Nuestros esquemas de financiamiento están diseñados para adaptarse a los ciclos de ingresos de tu flota. Entendemos el sector de autotransporte de carga y pasajeros en México como ningún otro intermediario financiero.
          </p>
        </div>

        {/* Right Column (60%) */}
        <div id="benefits-right-col" className="w-full md:w-[55%] flex flex-col">
          <ul id="benefits-checklist" className="space-y-4">
            {checklistItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start gap-4 p-3 bg-white hover:bg-neutral-50 rounded-[4px] border border-gray-100 transition-colors shadow-xs"
              >
                {/* Custom check marker style matching brand colors */}
                <span className="w-6 h-6 rounded-full bg-[#272623] flex items-center justify-center text-white shrink-0 mt-0.5">
                  <Check size={14} className="stroke-[3]" />
                </span>
                <span className="text-sm md:text-base font-medium text-gray-800 leading-normal">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10">
            <button
              id="benefits-cta-btn"
              onClick={onNavigateToForm}
              className="bg-[#272623] hover:bg-[#1a1a1a] text-white text-xs md:text-sm font-bold px-8 py-4 rounded-[4px] tracking-wide uppercase transition-all shadow-md active:scale-[0.99] inline-block text-center cursor-pointer"
            >
              Solicitar Cotización
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
