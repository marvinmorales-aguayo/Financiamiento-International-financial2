/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { FileText, Award, Layers, Sparkles, Check } from 'lucide-react';
import { FinancialSolution, VehicleType } from '../types';

interface FinancialSolutionsProps {
  onNavigateToForm: (vehicleType?: VehicleType) => void;
}

export default function FinancialSolutions({ onNavigateToForm }: FinancialSolutionsProps) {
  const solutions = [
    {
      id: 'credito',
      title: 'Crédito',
      icon: FileText,
      description: 'Financia la compra de tu unidad con un crédito a tu medida. Nuestros planes no tienen límite de kilometraje ni de uso y ofrecen grandes beneficios para tu negocio.',
      features: ['Pagos flexibles', 'Sin restricciones de uso', 'Opción de tasa variable'],
      btnText: 'Conocer Crédito',
      mappedVehicle: 'Tractocamiones LT' as VehicleType,
      imageUrl: 'https://www.camionesinternational.com/documents/157231/173705/card_financiamiento-credito.jpg'
    },
    {
      id: 'arrendamiento-puro',
      title: 'Arrendamiento Puro',
      icon: Layers,
      description: 'Obtén unidades nuevas con una menor inversión inicial y pagos mensuales fijos. Nuestros esquemas de arrendamiento te ofrecen flexibilidad fiscal y operativa al final del plazo.',
      features: ['Pagos mensuales menores', 'Sin inversión inicial alta', 'Opción de adquisición final'],
      btnText: 'Conocer Arrendamiento Puro',
      mappedVehicle: 'Camiones Medianos MV' as VehicleType,
      imageUrl: 'https://www.camionesinternational.com/documents/157231/173705/card_financiamiento-arrendamiento.jpg'
    },
    {
      id: 'arrendamiento-financiero',
      title: 'Arrendamiento Financiero',
      icon: Award,
      description: 'Ser dueños del equipo al final del plazo a un valor específico predeterminado. Excelente combinación de los beneficios del crédito y el arrendamiento.',
      features: ['Ser dueño al final', 'Pagos predecibles', 'Valor residual garantizado'],
      btnText: 'Conocer Arrendamiento Financiero',
      mappedVehicle: 'Camiones Severos HV' as VehicleType
    },
    {
      id: 'seminuevos',
      title: 'Seminuevos Certificados',
      icon: Sparkles,
      description: 'Ofrecemos una amplia gama de modelos de camiones y autobuses usados certificados que garantizan la óptima operación de tu negocio a un costo inteligente.',
      features: ['Precio más accesible', 'Certificados de calidad', 'Garantía incluida'],
      btnText: 'Conocer Seminuevos',
      mappedVehicle: 'Camiones Ligeros CT' as VehicleType,
      isSubsection: true
    }
  ];

  return (
    <section
      id="soluciones"
      className="bg-white py-16 md:py-24"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
        
        {/* Sticky Left Column (30% width) */}
        <div id="soluciones-left-col" className="w-full lg:w-[30%] lg:sticky lg:top-[110px] lg:self-start">
          <span className="text-[13px] font-semibold text-gray-400 tracking-widest uppercase mb-2 block">
            Nuestra Oferta
          </span>
          <h2 className="text-3xl lg:text-[36px] font-extrabold text-[#272623] tracking-tight leading-snug uppercase">
            Soluciones Financieras
          </h2>
          <div className="w-16 h-[2.5px] bg-[#272623] mt-5 mb-6" />
          <p className="text-gray-500 text-sm leading-relaxed hidden lg:block">
            Haz scroll para explorar nuestros programas de financiamiento especializados para vehículos comerciales de la marca International®. Haz clic en "Conocer Más" para iniciar tu estimación.
          </p>
        </div>

        {/* Scrollable Right Column (65% width) containing product grid */}
        <div id="soluciones-right-col" className="w-full lg:w-[65%] flex flex-col gap-6">
          {solutions.map((sol, index) => (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 md:p-8 rounded-lg border transition-all hover:shadow-lg ${
                sol.isSubsection 
                  ? 'bg-neutral-50/70 border-dashed border-gray-300' 
                  : 'bg-white border-neutral-200'
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-6 items-stretch">
                
                {/* Product Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="p-2.5 bg-[#272623]/5 rounded-[4px] text-[#272623]">
                        <sol.icon size={22} className="stroke-[1.75]" />
                      </span>
                      {sol.isSubsection && (
                        <span className="bg-amber-500/10 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-[4px] uppercase tracking-wider">
                          Recomendado
                        </span>
                      )}
                      <h3 className="text-xl md:text-2xl font-bold text-[#272623] uppercase tracking-wide">
                        {sol.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                      {sol.description}
                    </p>

                    {/* Highlights Checklist */}
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                      {sol.features.map((feature, fIndex) => (
                        <span key={fIndex} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                          <Check size={14} className="text-emerald-600 stroke-[3]" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Call To Action Block Specific and Outline style */}
                  <div className="mt-2 self-start">
                    <button
                      id={`btn-conocer-${sol.id}`}
                      onClick={() => onNavigateToForm(sol.mappedVehicle)}
                      className="bg-white hover:bg-neutral-50 border-2 border-[#444444] text-[#000000] font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-[4px] transition-colors inline-flex items-center justify-center cursor-pointer"
                    >
                      Conocer Más
                    </button>
                  </div>
                </div>

                {/* Optional visual card asset image */}
                {sol.imageUrl && (
                  <div className="w-full lg:w-[200px] h-[150px] lg:h-auto rounded-md overflow-hidden relative shrink-0 group/img bg-neutral-100 border border-neutral-200">
                    <img
                      src={sol.imageUrl}
                      alt={sol.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

              </div>
            </motion.div>
          ))}

          {/* Section-wide Major CTA Button */}
          <div className="mt-8 flex flex-col items-center border-t border-gray-100 pt-8">
            <p className="text-sm text-gray-500 mb-4 text-center font-medium">
              ¿Listo para armar un plan para tu flota empresarial?
            </p>
            <button
              id="soluciones-cta-global"
              onClick={() => onNavigateToForm()}
              className="bg-[#272623] hover:bg-[#1a1a1a] text-white text-xs md:text-sm font-bold px-8 py-4 rounded-[4px] tracking-wide uppercase transition-all shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer"
            >
              Solicitar Cotización General
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
