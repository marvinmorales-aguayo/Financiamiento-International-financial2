/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RenovationTeaser from './components/RenovationTeaser';
import FinancialSolutions from './components/FinancialSolutions';
import LtTrucks from './components/LtTrucks';
import FleetRenovation from './components/FleetRenovation';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWidget from './components/FloatingWidget';
import { VehicleType } from './types';

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType | ''>('');
  const [selectedFinancing, setSelectedFinancing] = useState<string>('');

  const handleNavigateToForm = (vehicleType: VehicleType | '' = '', financingType: string = '') => {
    setSelectedVehicle(vehicleType);
    setSelectedFinancing(financingType);
    
    // Smooth scroll directly to the hero section or to the lead-form container
    const element = document.getElementById('hero');
    if (element) {
      const offset = 70; // Header height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Highlight target visual effect
      const formContainer = document.getElementById('lead-form-container');
      if (formContainer) {
        formContainer.classList.add('ring-2', 'ring-[#EE7624]', 'ring-offset-2');
        setTimeout(() => {
          formContainer.classList.remove('ring-2', 'ring-[#EE7624]', 'ring-offset-2');
        }, 1500);
      }
    }
  };

  return (
    <div id="landing-root" className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth antialiased">
      {/* Navigation Header */}
      <Header onNavigateToForm={() => handleNavigateToForm('')} />

      {/* Main Structural Layout Content */}
      <main id="main-content">
        {/* 1. Hero Section (Inlined Lead Form & Exact Brand Copy) */}
        <Hero
          selectedVehicle={selectedVehicle}
          setSelectedVehicle={setSelectedVehicle}
          selectedFinancing={selectedFinancing}
          setSelectedFinancing={setSelectedFinancing}
        />

        {/* 1.5. Subtle Fleet Renovation Hook Teaser */}
        <RenovationTeaser onNavigateToForm={(vehicle, financing) => handleNavigateToForm(vehicle || '', financing || '')} />

        {/* 3. Sticky Financial Solutions Section */}
        <FinancialSolutions onNavigateToForm={(vehicle, financing) => handleNavigateToForm(vehicle || '', financing || '')} />

        {/* 3.5. Tractocamiones LT Showcase Section */}
        <LtTrucks onNavigateToForm={(vehicle, financing) => handleNavigateToForm(vehicle || '', financing || '')} />

        {/* 3.6. Fleet Renovation Program Section */}
        <FleetRenovation onNavigateToForm={(vehicle, financing) => handleNavigateToForm(vehicle || '', financing || '')} />

        {/* 4. Automated & Controlled Testimonials Carousel */}
        <Testimonials onNavigateToForm={() => handleNavigateToForm('')} />

        {/* 5. Somos El Mejor Aliado Grid Section */}
        <Partners onNavigateToForm={(vehicle) => handleNavigateToForm(vehicle || '')} />

        {/* 6. High-Impact Closing Dark CTA Module */}
        <FinalCTA onNavigateToForm={() => handleNavigateToForm('')} />
      </main>

      {/* Structured Legal Disclaimer Footer */}
      <Footer />

      {/* Round Interaction Widget Flotante */}
      <FloatingWidget onNavigateToForm={() => handleNavigateToForm('')} />
    </div>
  );
}
