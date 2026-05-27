/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = 2024; // Explicitly requested "2024" in copyright specification

  const footerLinks = [
    { label: 'Términos y Condiciones', href: '#' },
    { label: 'Política de Privacidad', href: '#' },
    { label: 'Contacto', href: '#' },
    { label: 'Nosotros', href: '#' },
    { label: 'Blog', href: '#' },
  ];

  const handleLinkClick = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    alert(`Enlace a "${label}" - Esta sección legal o corporativa está disponible a través de nuestro sitio institucional primario.`);
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#272623] text-[#CCCCCC] text-[13px] border-t border-white/10 pt-12 pb-8"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col">
        
        {/* Top Brand & Links Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          
          {/* Brand Logo inside footer */}
          <div className="flex items-center gap-2 select-none group">
            <div className="w-12 h-12 shrink-0 flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/dc/International_Motors_Logo%2C_October_2024.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
                alt="International Motors"
                className="w-full h-full object-contain brightness-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-sm text-white tracking-tighter uppercase whitespace-nowrap">
                International
              </span>
              <span className="text-[9px] font-bold text-gray-400 tracking-wider uppercase whitespace-nowrap">
                Financial México
              </span>
            </div>
          </div>

          {/* Quick links list */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.label)}
                className="text-gray-400 hover:text-white transition-colors text-xs font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="py-8 text-justify">
          <div className="flex items-start gap-3 bg-white/5 p-5 md:p-6 rounded-md border border-white/5">
            <ShieldCheck size={20} className="text-gray-400 shrink-0 mt-0.5" />
            <p className="text-[11px] md:text-xs text-gray-400 leading-relaxed font-light">
              <strong className="text-gray-300 font-semibold block mb-1">DISCLAIMER TÉCNICO COMPLETO:</strong>
              El INTERNATIONAL LT, con el tren motriz integrado S13 ofrece una mejora en el rendimiento de combustible de hasta un 8%, comprobado mediante pruebas realizadas en México, bajo condiciones reales. Los resultados se basan en comparaciones con la misma unidad equipada con un tren motriz Euro V, bajo condiciones equivalentes de operación. Los resultados pueden variar según condiciones de operación, tales como altura, clima, configuración y mantenimiento de la unidad, así como el manejo de la misma y forzosamente utilizando el combustible Diesel Ultra Bajo en Azufre.
            </p>
          </div>
        </div>

        {/* Bottom copyright segment */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs font-light text-gray-500">
          <div>
            © {currentYear} International Financial. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-1">
            <span>Financiamiento Autorizado y Regulado en los Estados Unidos Mexicanos.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
