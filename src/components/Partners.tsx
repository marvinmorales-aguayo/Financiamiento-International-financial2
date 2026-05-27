/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Gauge, ShieldAlert, MapPin } from 'lucide-react';
import { AdvantageCard, VehicleType } from '../types';

interface PartnersProps {
  onNavigateToForm: (vehicleType?: VehicleType) => void;
}

export default function Partners({ onNavigateToForm }: PartnersProps) {
  const cards = [
    {
      id: 1,
      title: 'MEJORA TU RENDIMIENTO',
      subtitle: 'lt con tren motriz s13',
      description: 'Recorre más kilómetros con menos combustible con el tractocamión más avanzado y eficiente que hemos creado en México. Mejora tu rendimiento hasta un 8%.',
      buttonText: 'Conocer Más',
      icon: Gauge,
      bgColor: 'bg-white border-neutral-200',
      mappedVehicle: 'Tractocamiones LT' as VehicleType
    },
    {
      id: 2,
      title: 'POTENCIA TU OPERACIÓN',
      subtitle: 'programa integral de servicios',
      description: 'Asegura la óptima disponibilidad de tus camiones con el soporte experto oficial de International. Mantenimiento predictivo, garantía extendida y telemetría avanzada.',
      buttonText: 'Conocer Más',
      icon: ShieldAlert,
      bgColor: 'bg-[#F8F8F8] border-neutral-300',
      mappedVehicle: 'Camiones Severos HV' as VehicleType
    },
    {
      id: 3,
      title: 'DISPONIBILIDAD',
      subtitle: 'red de distribuidores',
      description: 'Recibe asistencia técnica calificada 24/7 con la mayor cobertura de soporte nacional en la industria automotriz: 97 puntos de atención certificados en México.',
      buttonText: 'Encuentra tu Distribuidor',
      icon: MapPin,
      bgColor: 'bg-white border-neutral-200',
      mappedVehicle: 'Autobuses' as VehicleType
    }
  ];

  return (
    <section
      id="aliados"
      className="bg-white py-16 md:py-24 border-b border-[#DDDDDD]"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Title Group */}
        <div className="text-center mb-14 md:mb-18">
          <span className="text-[13px] font-semibold text-gray-400 tracking-widest uppercase mb-2 block">
            Por qué elegirnos
          </span>
          <h2 className="text-3xl lg:text-[34px] font-extrabold text-[#272623] tracking-tight uppercase leading-snug">
            Somos el mejor aliado para tu negocio
          </h2>
          <div className="w-16 h-[2.5px] bg-[#272623] mx-auto mt-4" />
        </div>

        {/* 3-Column Advantage Cards Grid */}
        <div id="aliados-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-8 rounded-lg border flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-md ${card.bgColor}`}
            >
              <div>
                {/* Header visual icon inside cards */}
                <div className="w-12 h-12 rounded-[4px] bg-[#272623]/5 flex items-center justify-center text-[#272623] mb-6">
                  <card.icon size={24} className="stroke-[1.75]" />
                </div>

                <span className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-1 block">
                  {card.subtitle}
                </span>
                
                <h3 className="text-lg font-extrabold text-[#272623] tracking-tight mb-4 uppercase leading-snug">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {card.description}
                </p>
              </div>

              {/* Action Button styled as Outline */}
              <div>
                <button
                  id={`btn-aliado-${card.id}`}
                  onClick={() => onNavigateToForm(card.mappedVehicle)}
                  className="w-full text-center bg-white hover:bg-neutral-50 border-2 border-[#444444] text-[#000000] font-bold text-xs tracking-wider uppercase py-3 px-6 rounded-[4px] transition-colors leading-[44px] sm:leading-normal cursor-pointer text-ellipsis overflow-hidden"
                >
                  {card.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Section-wide CTA Button */}
        <div className="mt-14 md:mt-16 flex flex-col items-center">
          <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide text-center">
            Impulsa el desempeño técnico y operativo financiero de tu empresa.
          </p>
          <button
            id="aliados-cta-global"
            onClick={() => onNavigateToForm()}
            className="bg-[#272623] hover:bg-[#1a1a1a] text-white text-xs md:text-sm font-bold px-10 py-4 rounded-[4px] tracking-wide uppercase transition-all shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer"
          >
            Solicitar Cotización General
          </button>
        </div>

      </div>
    </section>
  );
}
