/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  onNavigateToForm: () => void;
}

export default function Testimonials({ onNavigateToForm }: TestimonialsProps) {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      author: 'Gerardo Jiménez',
      position: 'Director General',
      company: 'Autotransportes Pilot',
      quote: 'El International S13 nos ha dado resultados excepcionales en rendimiento de combustible y disponibilidad de equipo en carretera. El soporte financiero de International Financial ha sido clave para nuestra adquisición rápida de flota.',
    },
    {
      id: 2,
      author: 'Alexis Vega Pérez',
      position: 'Director de Operaciones',
      company: 'Fletes Nueva Galicia',
      quote: 'International ha sido parte esencial del crecimiento acelerado de nuestro negocio. Sus planes de Arrendamiento Puro son altamente deducibles, muy competitivos y con una velocidad de aprobación que superó nuestras expectativas.',
    },
    {
      id: 3,
      author: 'Daniel Ortiz Mercado',
      position: 'Gerente de Logística',
      company: 'Transportes Das Segel',
      quote: 'Lo que nos llevó a elegir el nuevo LT con motor S13 fue la promesa de eficiencia, pero lo que facilitó el proyecto fue la flexibilidad de pago que International Financial estructuró a la medida de nuestros contratos de servicio.',
    },
    {
      id: 4,
      author: 'Sonia Sánchez Orozco',
      position: 'Director de Finanzas',
      company: 'En-trega',
      quote: 'Los camiones International y sus esquemas de Crédito con opción de tasa variable nos han permitido optimizar nuestro flujo de efectivo nacional. Realmente entienden el negocio del transporte mexicano.',
    },
  ];

  return (
    <section
      id="testimonios"
      className="relative py-16 md:py-24 border-y border-[#DDDDDD] overflow-hidden bg-neutral-900 bg-cover bg-center"
      style={{
        backgroundImage: `url("https://www.camionesinternational.com/documents/157231/157566/banner_21-9_SolucionesdeServicio.jpg")`,
      }}
    >
      {/* Dark overlay for contrast */}
      <div id="testimonios-overlay" className="absolute inset-0 bg-black/60 z-1" />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center relative z-10">
        
        {/* Centered Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[13px] font-bold text-[#EE7624] tracking-widest uppercase mb-2 block">
            Casos de Éxito
          </span>
          <h2 className="text-3xl lg:text-[32px] font-extrabold text-white tracking-tight uppercase">
            Respaldados por nuestros clientes
          </h2>
          <div className="w-16 h-[2.5px] bg-[#EE7624] mx-auto mt-4" />
        </div>

        {/* Liferay-Safe Static Columns Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mb-12">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="relative bg-white rounded-md border border-neutral-200 shadow-sm p-6 sm:p-8 border-l-[6px] border-l-[#272623]"
            >
              {/* Decorative quote icon inside each card */}
              <div className="absolute right-4 top-4 text-neutral-100 pointer-events-none select-none">
                <Quote size={50} className="stroke-[1]" />
              </div>

              <div className="relative z-10 flex flex-col justify-between h-full">
                {/* Quote Text */}
                <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed mb-5">
                  "{test.quote}"
                </p>

                {/* Author Block */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900 tracking-wide">
                    {test.author}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {test.position}
                  </p>
                  <p className="text-xs font-bold text-[#EE7624] uppercase tracking-wider mt-1">
                    {test.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button Section CTA */}
        <div className="flex flex-col items-center">
          <button
            id="testimonios-cta-btn"
            onClick={onNavigateToForm}
            className="bg-[#EE7624] hover:bg-[#d66216] text-white text-xs md:text-sm font-bold px-8 py-4 rounded-sm tracking-wide uppercase transition-colors cursor-pointer"
          >
            Solicitar Cotización
          </button>
        </div>

      </div>
    </section>
  );
}
