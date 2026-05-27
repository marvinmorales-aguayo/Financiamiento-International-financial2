/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingWidgetProps {
  onNavigateToForm?: () => void;
}

export default function FloatingWidget({ onNavigateToForm }: FloatingWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [errorNombre, setErrorNombre] = useState('');
  const [errorTelefono, setErrorTelefono] = useState('');

  const handleOpen = () => {
    setIsOpen(true);
    setNombre('');
    setTelefono('');
    setErrorNombre('');
    setErrorTelefono('');
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    if (!nombre.trim()) {
      setErrorNombre('Por favor ingresa tu nombre completo.');
      hasError = true;
    } else {
      setErrorNombre('');
    }

    const digitsOnly = telefono.replace(/\D/g, '');
    if (!telefono.trim()) {
      setErrorTelefono('El teléfono es obligatorio.');
      hasError = true;
    } else if (digitsOnly.length !== 10) {
      setErrorTelefono('Ingresa un teléfono válido a 10 dígitos.');
      hasError = true;
    } else {
      setErrorTelefono('');
    }

    if (hasError) return;

    // Standard Mexican phone calling number or International service desk
    const phoneNumber = '8004683762'; // 800-468-3762 (800-INTER)
    
    // Smooth redirect to telephone dialer
    window.location.href = `tel:${phoneNumber}`;
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Pill Button */}
      <div
        id="floating-widget-wrapper"
        className="fixed bottom-6 right-6 z-40 select-none flex flex-col items-end"
      >
        <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 z-50">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
        </span>

        <motion.button
          id="floating-widget-btn"
          onClick={handleOpen}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2.5 bg-[#EE7624] hover:bg-[#d66216] text-white px-5 py-3.5 rounded-full shadow-[0_4px_20px_rgba(238,118,36,0.35)] hover:shadow-[0_8px_30px_rgba(238,118,36,0.5)] transition-all duration-300 border border-white/20 font-bold uppercase text-xs tracking-wider cursor-pointer"
          aria-label="Hablar con un asesor"
        >
          <Phone size={16} className="text-white animate-pulse" />
          <span>Hablar con un Asesor</span>
        </motion.button>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <div
            id="advisor-modal-overlay"
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <motion.div
              id="advisor-modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="bg-white rounded-[4px] shadow-2xl border border-neutral-100 max-w-sm w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header brand accent strip */}
              <div className="h-1.5 w-full bg-[#EE7624]" />

              {/* Close Button */}
              <button
                id="close-modal-btn"
                onClick={handleClose}
                className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer p-1"
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>

              <div className="p-6 md:p-8">
                {/* Title */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-[#EE7624]/10 text-[#EE7624] rounded-full">
                    <Phone size={18} />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#272623] uppercase tracking-wide">
                    Hablar con un Asesor
                  </h3>
                </div>

                <p className="text-gray-600 text-xs leading-relaxed mb-6">
                  Déjanos tu nombre y teléfono para comunicarte de inmediato con un asesor financiero experto en unidades International®.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div className="flex flex-col">
                    <label htmlFor="modal-nombre" className="text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-1.5">
                      Nombre Completo *
                    </label>
                    <input
                      id="modal-nombre"
                      type="text"
                      className={`px-3 py-2 border rounded-sm text-xs bg-white text-gray-900 focus:outline-hidden focus:ring-1 ${
                        errorNombre
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50/10'
                          : 'border-gray-300 focus:border-black focus:ring-black'
                      }`}
                      placeholder="Ej. Juan Pérez García"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                    {errorNombre && (
                      <span className="text-red-500 text-[10px] mt-1 font-semibold">{errorNombre}</span>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col">
                    <label htmlFor="modal-telefono" className="text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-1.5">
                      Teléfono (10 dígitos) *
                    </label>
                    <input
                      id="modal-telefono"
                      type="tel"
                      className={`px-3 py-2 border rounded-sm text-xs bg-white text-gray-900 focus:outline-hidden focus:ring-1 ${
                        errorTelefono
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50/10'
                          : 'border-gray-300 focus:border-black focus:ring-black'
                      }`}
                      placeholder="Ej. 5512345678"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    />
                    {errorTelefono && (
                      <span className="text-red-500 text-[10px] mt-1 font-semibold">{errorTelefono}</span>
                    )}
                  </div>

                  {/* Subtle authorization label */}
                  <p className="text-[10px] text-gray-500 leading-normal pt-1 bg-neutral-50 p-2 rounded-sm border border-neutral-100">
                    * Al hacer clic autorizas el envío de estos datos para establecer contacto directo vía telefónica.
                  </p>

                  {/* Direct Call Button */}
                  <button
                    id="submit-advising-btn"
                    type="submit"
                    className="w-full mt-4 bg-[#272623] hover:bg-neutral-800 text-white font-extrabold text-xs uppercase tracking-wider py-3 px-4 rounded-[4px] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Phone size={14} className="stroke-[2.5]" />
                    <span>Hablar con un Asesor</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
