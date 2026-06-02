/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { FormData, FormErrors, VehicleType } from '../types';

interface HeroProps {
  selectedVehicle: VehicleType | '';
  setSelectedVehicle: (vehicle: VehicleType | '') => void;
}

const ESTADOS_MEXICO = [
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Campeche",
  "Chiapas",
  "Chihuahua",
  "Ciudad de México",
  "Coahuila",
  "Colima",
  "Durango",
  "Estado de México",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "Michoacán",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz",
  "Yucatán",
  "Zacatecas"
];

export default function Hero({ selectedVehicle, setSelectedVehicle }: HeroProps) {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    whatsapp: '',
    tipoVehiculo: '',
    estado: '',
    autorizaContacto: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync selected vehicle when triggered from another page button
  useEffect(() => {
    if (selectedVehicle) {
      setFormData((prev) => ({
        ...prev,
        tipoVehiculo: selectedVehicle,
      }));
    }
  }, [selectedVehicle]);

  const validateField = (name: keyof FormData, value: any): string => {
    switch (name) {
      case 'nombre':
        if (!value || typeof value !== 'string') return 'El nombre es obligatorio.';
        if (value.trim().length < 3) return 'El nombre debe tener al menos 3 caracteres.';
        return '';
      case 'email':
        if (!value) return 'El correo electrónico es obligatorio.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Ingresa un correo electrónico válido.';
        return '';
      case 'whatsapp':
        if (!value) return 'El WhatsApp es obligatorio.';
        const digitsOnly = value.replace(/\D/g, '');
        if (digitsOnly.length !== 10) return 'El WhatsApp debe ser a 10 dígitos (ej. 5512345678).';
        return '';
      case 'tipoVehiculo':
        if (!value) return 'Selecciona un tipo de vehículo.';
        return '';
      case 'estado':
        if (!value) return 'Selecciona el estado donde se ubica tu empresa.';
        return '';
      case 'autorizaContacto':
        if (!value) return 'Debes autorizar el contacto para continuar.';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    let finalValue: any = value;

    if (type === 'checkbox') {
      finalValue = (e.target as HTMLInputElement).checked;
    } else if (name === 'whatsapp') {
      // Keep only digits
      finalValue = value.replace(/\D/g, '').substring(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));

    // Clear error inline
    const errorMsg = validateField(name as keyof FormData, finalValue);
    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));

    if (name === 'tipoVehiculo') {
      setSelectedVehicle(finalValue as VehicleType);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      const errorMsg = validateField(key, formData[key]);
      if (errorMsg) {
        newErrors[key] = errorMsg;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Persist to LocalStorage
      try {
        const storedSubmissions = localStorage.getItem('if_leads') || '[]';
        const parsed = JSON.parse(storedSubmissions);
        parsed.push({
          ...formData,
          id: Date.now(),
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem('if_leads', JSON.stringify(parsed));
      } catch (err) {
        console.error('Error saving lead:', err);
      }
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      email: '',
      whatsapp: '',
      tipoVehiculo: '',
      estado: '',
      autorizaContacto: false,
    });
    setErrors({});
    setIsSubmitted(false);
    setSelectedVehicle('');
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen lg:min-h-[calc(100vh-70px)] bg-cover bg-center overflow-hidden flex items-center py-12 lg:py-0 bg-neutral-900"
      style={{
        backgroundImage: `url("https://www.camionesinternational.com/documents/157231/173643/banner_21-9_Financiamiento_IF.jpg/9be4e3cb-cbe4-4cb4-75de-5961aab3e771?version=1.0&t=1768956015363")`,
      }}
    >
      {/* Dark overlay for perfect contrast */}
      <div
        id="hero-overlay"
        className="absolute inset-0 bg-black/60 z-1"
      />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative z-2">
        
        {/* Left Column (50% Width) - Brand Copy */}
        <div id="hero-left-col" className="w-full lg:w-[48%] text-left text-white">
          {/* Accent decoration line resembling brand mark */}
          <div className="w-16 h-1 bg-[#EE7624] mb-6 rounded-xs" />
          
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] leading-tight font-extrabold tracking-tight mb-6 uppercase text-white">
            Financiamiento para mover tu negocio
          </h1>

          <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light">
            Soluciones financieras para camiones, tractocamiones y autobuses International con atención ágil y servicios diseñados para impulsar tu operación.
          </p>
        </div>

        {/* Right Column (45% Width) - Embedded Form */}
        <div id="hero-right-col" className="w-full lg:w-[44%]">
          <div
            id="lead-form-container"
            className="w-full bg-white rounded-lg p-6 sm:p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-neutral-100"
          >
              {!isSubmitted ? (
                <div id="lead-form-content">
                  <h3 className="text-xl font-extrabold text-[#272623] tracking-tight uppercase mb-1">
                    Solicitar Cotización
                  </h3>
                  <p className="text-gray-500 text-xs mb-6">
                    Completa tus datos para recibir asesoría personalizada.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Nombre */}
                    <div className="flex flex-col">
                      <label htmlFor="nombre" className="text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Nombre Completo *
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. Juan Pérez"
                        className={`px-3.5 py-2.5 border rounded-sm text-xs transition-all focus:outline-hidden focus:ring-1 ${
                          errors.nombre
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50/10'
                            : 'border-gray-300 focus:border-black focus:ring-black'
                        }`}
                      />
                      {errors.nombre && (
                        <span className="text-red-500 text-[11px] mt-1 font-medium">{errors.nombre}</span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Correo Electrónico *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="juan.perez@empresa.com"
                        className={`px-3.5 py-2.5 border rounded-sm text-xs transition-all focus:outline-hidden focus:ring-1 ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50/10'
                            : 'border-gray-300 focus:border-black focus:ring-black'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-red-500 text-[11px] mt-1 font-medium">{errors.email}</span>
                      )}
                    </div>

                    {/* WhatsApp */}
                    <div className="flex flex-col">
                      <label htmlFor="whatsapp" className="text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        WhatsApp (10 dígitos) *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-semibold">
                          +52
                        </span>
                        <input
                          id="whatsapp"
                          type="tel"
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={handleChange}
                          placeholder="5512345678"
                          className={`w-full pl-11 pr-3.5 py-2.5 border rounded-sm text-xs transition-all focus:outline-hidden focus:ring-1 ${
                            errors.whatsapp
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50/10'
                              : 'border-gray-300 focus:border-black focus:ring-black'
                          }`}
                        />
                      </div>
                      {errors.whatsapp && (
                        <span className="text-red-500 text-[11px] mt-1 font-medium">{errors.whatsapp}</span>
                      )}
                    </div>

                    {/* Tipo de Vehículo */}
                    <div className="flex flex-col">
                      <label htmlFor="tipoVehiculo" className="text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Tipo de Vehículo *
                      </label>
                      <select
                        id="tipoVehiculo"
                        name="tipoVehiculo"
                        value={formData.tipoVehiculo}
                        onChange={handleChange}
                        className={`px-3.5 py-2.5 border rounded-sm bg-white text-xs transition-all focus:outline-hidden focus:ring-1 ${
                          errors.tipoVehiculo
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50/10'
                            : 'border-gray-300 focus:border-black focus:ring-black'
                        }`}
                      >
                        <option value="">Selecciona un tipo de vehículo</option>
                        <option value="Tractocamiones LT">Tractocamiones LT</option>
                        <option value="Camiones Severos HV">Camiones Severos HV</option>
                        <option value="Camiones Medianos MV">Camiones Medianos MV</option>
                        <option value="Camiones Ligeros CT">Camiones Ligeros CT</option>
                        <option value="Autobuses">Autobuses</option>
                      </select>
                      {errors.tipoVehiculo && (
                        <span className="text-red-500 text-[11px] mt-1 font-medium">{errors.tipoVehiculo}</span>
                      )}
                    </div>

                    {/* Estado de México */}
                    <div className="flex flex-col">
                      <label htmlFor="estado" className="text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        ¿En qué estado se ubica tu empresa o negocio? *
                      </label>
                      <select
                        id="estado"
                        name="estado"
                        value={formData.estado || ''}
                        onChange={handleChange}
                        className={`px-3.5 py-2.5 border rounded-sm bg-white text-xs transition-all focus:outline-hidden focus:ring-1 ${
                          errors.estado
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50/10'
                            : 'border-gray-300 focus:border-black focus:ring-black'
                        }`}
                      >
                        <option value="">Selecciona tu estado</option>
                        {ESTADOS_MEXICO.map((est) => (
                          <option key={est} value={est}>
                            {est}
                          </option>
                        ))}
                      </select>
                      {errors.estado && (
                        <span className="text-red-500 text-[11px] mt-1 font-medium">{errors.estado}</span>
                      )}
                    </div>

                    {/* Autoriza Contacto Checkbox */}
                    <div className="flex flex-col pt-1">
                      <label className="flex items-start cursor-pointer select-none">
                        <input
                          id="autorizaContacto"
                          type="checkbox"
                          name="autorizaContacto"
                          checked={formData.autorizaContacto}
                          onChange={handleChange}
                          className="mt-0.5 mr-2.5 h-4 w-4 rounded-xs text-black border-gray-300 focus:ring-black accent-black shrink-0"
                        />
                        <span className="text-[11px] text-gray-500 leading-normal">
                          Autorizo recibir llamadas y mensajes de International Financial para fines de asesoría y cotización comercial.
                        </span>
                      </label>
                      {errors.autorizaContacto && (
                        <span className="text-red-500 text-[11px] mt-1 font-medium">{errors.autorizaContacto}</span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      id="hero-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#272623] hover:bg-[#1a1a1a] text-white py-3 px-6 rounded-sm font-bold text-xs tracking-wider uppercase transition-all disabled:opacity-75 disabled:cursor-not-allowed mt-4 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        'Enviar Información'
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                <div
                  id="success-message"
                  className="flex flex-col items-center justify-center py-6 text-center"
                >
                  <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-5">
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="text-lg font-extrabold text-gray-900 tracking-tight leading-snug mb-2">
                    ¡Gracias {formData.nombre}!
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed max-w-xs mb-8">
                    Pronto nos pondremos en contacto contigo. Tu solicitud para <span className="font-semibold text-gray-800">{formData.tipoVehiculo}</span> ha sido registrada de forma segura.
                  </p>
                  <button
                    id="success-new-request-btn"
                    onClick={handleReset}
                    className="bg-[#272623] hover:bg-[#1a1a1a] text-white py-2.5 px-6 rounded-sm font-semibold text-[11px] tracking-wide uppercase transition-colors cursor-pointer"
                  >
                    Nueva Solicitud
                  </button>
                </div>
              )}
          </div>
        </div>

      </div>
    </section>
  );
}
