/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setDirection('right');
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    resetTimer();
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    resetTimer();
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
    resetTimer();
  };

  // Animation variants
  const slideVariants = {
    initial: (dir: 'left' | 'right') => ({
      opacity: 0,
      x: dir === 'right' ? 40 : -40,
    }),
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: (dir: 'left' | 'right') => ({
      opacity: 0,
      x: dir === 'right' ? -40 : 40,
    }),
  };

  return (
    <section
      id="testimonios"
      className="relative py-16 md:py-24 border-y border-[#DDDDDD] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url("https://www.camionesinternational.com/documents/157231/157566/banner_21-9_SolucionesdeServicio.jpg")`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay for contrast */}
      <div id="testimonios-overlay" className="absolute inset-0 bg-black/15 z-1" />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center relative z-10">
        
        {/* Centered Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[13px] font-bold text-gray-300 tracking-widest uppercase mb-2 block">
            Casos de Éxito
          </span>
          <h2 className="text-3xl lg:text-[32px] font-extrabold text-white tracking-tight uppercase">
            Respaldados por nuestros clientes
          </h2>
          <div className="w-16 h-[2.5px] bg-[#EE7624] mx-auto mt-4" />
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-4xl min-h-[360px] sm:min-h-[280px] lg:min-h-[240px] flex items-center justify-center px-4 sm:px-12">
          
          {/* Inner Card Frame */}
          <div className="w-full relative overflow-hidden bg-white rounded-md border border-neutral-200 shadow-sm p-8 sm:p-12 border-l-[6px] border-l-[#272623]">
            {/* Absolute quote background icon */}
            <div className="absolute right-6 top-6 text-gray-100 pointer-events-none select-none">
              <Quote size={80} className="stroke-[1]" />
            </div>

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="relative z-10 flex flex-col justify-between h-full"
              >
                {/* Quote Text */}
                <p className="text-gray-700 italic text-base md:text-lg leading-relaxed mb-6">
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Author Block */}
                <div>
                  <h4 className="text-base font-bold text-gray-900 tracking-wide">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-xs text-gray-500 mb-1">
                    {testimonials[currentIndex].position}
                  </p>
                  <p className="text-xs font-bold text-[#272623] uppercase tracking-wider">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Previous Arrow Button */}
          <button
            id="carousel-prev"
            onClick={handlePrev}
            className="absolute left-[-15px] sm:left-[-10px] md:left-[-30px] z-10 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md text-[#272623] hover:bg-neutral-50 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft size={22} className="stroke-[2.5]" />
          </button>

          {/* Next Arrow Button */}
          <button
            id="carousel-next"
            onClick={handleNext}
            className="absolute right-[-15px] sm:right-[-10px] md:right-[-30px] z-10 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md text-[#272623] hover:bg-neutral-50 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight size={22} className="stroke-[2.5]" />
          </button>
        </div>

        {/* Carousel Indicators / DOTs */}
        <div id="carousel-dots" className="flex gap-2.5 mt-6 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-6 bg-[#EE7624]' : 'w-2.5 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>

        {/* Action Button Section CTA */}
        <div className="flex flex-col items-center">
          <button
            id="testimonios-cta-btn"
            onClick={onNavigateToForm}
            className="bg-[#EE7624] hover:bg-[#d66216] text-white text-xs md:text-sm font-bold px-8 py-4 rounded-[4px] tracking-wide uppercase transition-all shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer"
          >
            Solicitar Cotización
          </button>
        </div>

      </div>
    </section>
  );
}
