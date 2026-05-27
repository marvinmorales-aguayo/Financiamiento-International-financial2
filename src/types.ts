/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Testimonial {
  id: number;
  author: string;
  position: string;
  company: string;
  quote: string;
}

export type VehicleType =
  | 'Tractocamiones LT'
  | 'Camiones Severos HV'
  | 'Camiones Medianos MV'
  | 'Camiones Ligeros CT'
  | 'Autobuses';

export interface FormData {
  nombre: string;
  email: string;
  whatsapp: string;
  tipoVehiculo: VehicleType | '';
  estado: string;
  autorizaContacto: boolean;
}

export interface FormErrors {
  nombre?: string;
  email?: string;
  whatsapp?: string;
  tipoVehiculo?: string;
  estado?: string;
  autorizaContacto?: string;
}

export interface FinancialSolution {
  title: string;
  description: string;
  features: string[];
}

export interface AdvantageCard {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}
