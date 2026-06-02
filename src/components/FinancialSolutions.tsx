/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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
      mappedVehicle: 'Camiones Severos HV' as VehicleType,
      imageUrl: 'https://www.camionesinternational.com/documents/157231/157566/banner_21-9_SolucionesdeServicio.jpg'
    },
    {
      id: 'seminuevos',
      title: 'Seminuevos Certificados',
      icon: Sparkles,
      description: 'Ofrecemos una amplia gama de modelos de camiones y autobuses usados certificados que garantizan la óptima operación de tu negocio a un costo inteligente.',
      features: ['Precio más accesible', 'Certificados de calidad', 'Garantía incluida'],
      btnText: 'Conocer Seminuevos',
      mappedVehicle: 'Camiones Ligeros CT' as VehicleType,
      imageUrl: 'https://www.camionesinternational.com/documents/157231/173705/card_financiamiento-seminuevos.jpg',
      isSubsection: true
    }
  ];

  return (
    <section
      id="soluciones"
      className="bg-neutral-50 py-16 md:py-24 border-y border-neutral-200"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Simple Centered Header Layout for Liferay suitability */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-[36px] font-extrabold text-[#272623] tracking-tight leading-snug uppercase">
            Soluciones Financieras
          </h2>
          <div className="w-16 h-[2.5px] bg-[#EE7624] mx-auto mt-4 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Explora nuestros programas de financiamiento especializados para vehículos comerciales de la marca International. Haz clic en "Conocer Más" para iniciar tu estimación.
          </p>
        </div>

        {/* Pure Clean Responsive Grid of Cards - Works perfectly inside Liferay layout rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {solutions.map((sol) => (
            <div
              key={sol.id}
              className={`p-6 sm:p-8 rounded-md border bg-white border-neutral-200 flex flex-col justify-between`}
            >
              <div>
                {/* Card Title Bar */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2 bg-[#272623]/5 rounded-sm text-[#272623]">
                    <sol.icon size={20} className="stroke-[1.75]" />
                  </span>
                  {sol.isSubsection && (
                    <span className="bg-[#EE7624]/10 text-[#EE7624] text-[9px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wider">
                      Recomendado
                    </span>
                  )}
                  <h3 className="text-lg md:text-xl font-bold text-[#272623] uppercase tracking-wide">
                    {sol.title}
                  </h3>
                </div>

                {/* Card Image */}
                {sol.imageUrl && (
                  <div className="w-full h-[180px] rounded-sm overflow-hidden bg-neutral-100 border border-neutral-200 mb-4">
                    <img
                      src={sol.imageUrl}
                      alt={sol.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                {/* Card Text description */}
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6">
                  {sol.description}
                </p>

                {/* Features inline list */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                  {sol.features.map((feature, fIndex) => (
                    <span key={fIndex} className="flex items-center gap-1.5 text-[11px] font-medium text-gray-700">
                      <Check size={12} className="text-emerald-500 stroke-[3.5]" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Simple Bottom Action Link */}
              <div className="mt-4 pt-4 border-t border-neutral-100">
                <button
                  id={`btn-conocer-${sol.id}`}
                  onClick={() => onNavigateToForm(sol.mappedVehicle)}
                  className="w-full bg-[#EE7624] hover:bg-[#d66216] text-white font-bold text-xs tracking-wider uppercase py-3 rounded-sm transition-colors cursor-pointer text-center"
                >
                  Conocer Más
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* General simple action zone */}
        <div className="mt-12 flex flex-col items-center border-t border-gray-200 pt-8 max-w-2xl mx-auto">
          <p className="text-xs md:text-sm text-gray-500 mb-4 text-center">
            ¿Listo para armar un plan para tu flota empresarial?
          </p>
          <button
            id="soluciones-cta-global"
            onClick={() => onNavigateToForm()}
            className="bg-[#272623] hover:bg-[#1a1a1a] text-white text-xs font-bold px-8 py-3.5 rounded-sm tracking-wide uppercase transition-colors cursor-pointer"
          >
            Solicitar Cotización General
          </button>
        </div>

      </div>
    </section>
  );
}
