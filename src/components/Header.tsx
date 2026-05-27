/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigateToForm: () => void;
}

export default function Header({ onNavigateToForm }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Por qué nosotros', href: '#aliados' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className="sticky top-0 z-40 bg-white border-b border-[#DDDDDD] h-[70px] flex items-center transition-all duration-300"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="header-logo"
          href="#"
          onClick={(e) => handleLinkClick(e, '#')}
          className="flex items-center select-none group"
        >
          {/* Logo Icon Styling - Real Official International Motors Logo */}
          <div className="h-7 md:h-8 w-auto shrink-0 transition-transform group-hover:scale-105">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/dc/International_Motors_Logo%2C_October_2024.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
              alt="International Motors"
              className="h-full w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-gray-700 hover:text-[#272623] transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#272623] after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            id="header-cta-btn"
            onClick={onNavigateToForm}
            className="bg-[#272623] hover:bg-[#1a1a1a] text-white text-xs font-semibold px-6 py-3 rounded-[4px] tracking-wide uppercase transition-all shadow-xs active:scale-98 cursor-pointer"
          >
            Solicitar Cotización
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 text-[#272623] rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
          aria-expanded={mobileMenuOpen}
          aria-label="Abrir menú de navegación"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="absolute top-[70px] left-0 w-full bg-white border-b border-[#DDDDDD] shadow-lg md:hidden animate-fade-in z-30"
        >
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-semibold text-gray-800 hover:text-black py-2.5 border-b border-gray-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              id="mobile-drawer-cta-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToForm();
              }}
              className="w-full bg-[#272623] hover:bg-[#1a1a1a] text-white text-sm font-bold py-3.5 px-6 rounded-md tracking-wide uppercase text-center mt-2 cursor-pointer transition-all active:scale-98"
            >
              Solicitar Cotización
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
