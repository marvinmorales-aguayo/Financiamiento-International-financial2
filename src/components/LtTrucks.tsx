/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, FileText, ArrowRight } from 'lucide-react';
import { VehicleType } from '../types';

interface LtTrucksProps {
  onNavigateToForm: (vehicleType?: VehicleType) => void;
}

export default function LtTrucks({ onNavigateToForm }: LtTrucksProps) {
  const models = [
    {
      id: 'lt-s13',
      name: 'LT S13',
      engine: 'Motor International',
      description: 'Rendimiento excepcional combinado con la aerodinámica más avanzada. Máxima eficiencia de combustible.',
      imageUrl: 'https://www.camionesinternational.com/documents/157231/157594/Camiones_LT.jpg',
      specs: {
        potencia: '400 - 515 HP',
        torque: '1,450 - 1,850 lb-ft',
        desplazamiento: '12.74 L'
      },
      features: [
        'Transmisión T14 automatizada 14 velocidades',
        'Cabina Driver-Centric amplia y silenciosa',
        'Hasta 8% mejor rendimiento de combustible'
      ],
      pdfUrl: 'https://www.camionesinternational.com/documents/157231/157594/Ficha_Tecnica_LT_S13.pdf'
    },
    {
      id: 'lt-x15',
      name: 'LT X15',
      engine: 'Motor Cummins',
      description: 'Potencia robusta con motor de 15 litros. Diseño aerodinámico que reduce resistencia y maximiza rentabilidad.',
      imageUrl: 'https://www.camionesinternational.com/documents/157231/157592/Camiones_LT-X15.jpg/b330e19b-1e59-589d-2448-f2870586243b?version=1.0&t=1765343151124',
      specs: {
        potencia: '400 - 500 HP',
        torque: '1,550 - 1,850 lb-ft',
        desplazamiento: '15 L'
      },
      features: [
        'Transmisión Manual 18 velocidades',
        'Cabina diseñada para máximo confort',
        'Mayor potencia y torque disponible'
      ],
      pdfUrl: 'https://www.camionesinternational.com/documents/157231/157592/Ficha_Tecnica_LT_X15.pdf'
    }
  ];

  return (
    <section id="tractocamiones-lt" className="bg-white py-16 md:py-24 border-b border-neutral-200">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <span className="text-[#EE7624] text-xs font-black uppercase tracking-widest block mb-2">
            Modelos de Alto Rendimiento
          </span>
          <h2 className="text-3xl lg:text-[36px] font-extrabold text-[#272623] tracking-tight uppercase">
            TRACTOCAMIONES LT
          </h2>
          <div className="w-16 h-[2.5px] bg-[#EE7624] mx-auto mt-4 mb-4" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Rendimiento, durabilidad y eficiencia operativa. Elige el modelo que se adapta a tus necesidades.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
          {models.map((model) => (
            <div key={model.id} className="bg-neutral-50 rounded-md border border-neutral-200 overflow-hidden flex flex-col justify-between">
              
              {/* Product Image Container */}
              <div className="relative w-full h-[240px] bg-neutral-100 border-b border-neutral-200 overflow-hidden">
                <img
                  src={model.imageUrl}
                  alt={model.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#272623] text-white text-[10px] font-black px-3 py-1 uppercase tracking-wider rounded-sm">
                  {model.engine}
                </div>
              </div>

              {/* Product Details Section */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Brand & Title */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-extrabold text-[#272623] tracking-tight uppercase">
                      {model.name}
                    </h3>
                    <p className="text-[#EE7624] text-xs font-bold uppercase tracking-wider mt-0.5">
                      {model.engine}
                    </p>
                  </div>

                  {/* Short Info string */}
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6">
                    {model.description}
                  </p>

                  {/* Spec Columns Display */}
                  <div className="grid grid-cols-3 gap-2 border-y border-neutral-200 py-4 mb-6 bg-white/50 px-2 rounded-sm text-center">
                    <div>
                      <span className="block text-[9px] font-extrabold text-[#272623] uppercase tracking-wider mb-1">
                        Potencia
                      </span>
                      <span className="text-xs sm:text-sm font-black text-gray-900 font-sans">
                        {model.specs.potencia}
                      </span>
                    </div>
                    <div className="border-x border-neutral-200">
                      <span className="block text-[9px] font-extrabold text-[#272623] uppercase tracking-wider mb-1">
                        Torque
                      </span>
                      <span className="text-xs sm:text-sm font-black text-gray-900 font-sans">
                        {model.specs.torque}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[9px] font-extrabold text-[#272623] uppercase tracking-wider mb-1">
                        Desplazamiento
                      </span>
                      <span className="text-xs sm:text-sm font-black text-gray-900 font-sans">
                        {model.specs.desplazamiento}
                      </span>
                    </div>
                  </div>

                  {/* Bullets List of elements */}
                  <div className="space-y-2 mb-8">
                    <span className="block text-[9px] font-extrabold text-[#272623] uppercase tracking-wider mb-2">
                      Características destacadas
                    </span>
                    {model.features.map((feat, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2 text-xs text-gray-700">
                        <Check size={14} className="text-emerald-500 stroke-[3] mt-0.5 shrink-0" />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Download PDF Specs Sheet - High contrast visual styling */}
                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                  <a
                    href={model.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EE7624] hover:text-[#d66216] transition-colors uppercase tracking-wider cursor-pointer decoration-dotted underline"
                  >
                    <FileText size={14} />
                    <span>Descargar ficha técnica</span>
                  </a>

                  <button
                    onClick={() => onNavigateToForm('Tractocamiones LT' as VehicleType)}
                    className="bg-[#272623] hover:bg-[#1a1a1a] text-white text-[10px] font-bold px-4 py-2.5 rounded-sm uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Cotizar {model.name}
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom micro CTA box */}
        <div className="max-w-2xl mx-auto bg-neutral-50 rounded-sm border border-neutral-200 p-6 sm:p-8 text-center">
          <h4 className="text-base sm:text-lg font-bold text-[#272623] uppercase tracking-wide mb-2">
            ¿Necesitas asesoramiento personalizado?
          </h4>
          <p className="text-xs sm:text-sm text-gray-600 mb-6 max-w-md mx-auto">
            Nuestros especialistas de flota te ayudarán a elegir la mejor configuración y esquema de tasas actualizado.
          </p>
          <button
            onClick={() => onNavigateToForm('Tractocamiones LT' as VehicleType)}
            className="inline-flex items-center gap-2 bg-[#EE7624] hover:bg-[#d66216] text-white text-xs font-bold px-8 py-4 rounded-sm tracking-widest uppercase transition-colors cursor-pointer shadow-sm"
          >
            <span>Solicitar cotización</span>
            <ArrowRight size={13} className="stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
}
