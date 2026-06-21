'use client';

import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onBookNow: () => void;
  onViewServices: () => void;
}

export default function HeroSection({ onBookNow, onViewServices }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-car.jpg')" }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/70 via-[#0B0B0B]/60 to-[#0B0B0B]" />
      
      {/* Subtle gold line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 py-2 border border-[#C9A227]/30 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
          <span className="text-xs sm:text-sm tracking-[0.2em] text-[#C9A227] uppercase font-medium">
            Premium Car Detailing
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
          Devuélvele a tu vehículo{' '}
          <span className="text-gradient-gold">el acabado que merece.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#888] max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformamos tu auto en una experiencia premium. Cada detalle, cada superficie, 
          cada rincón tratado con obsesión por la perfección.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={onBookNow}
            className="bg-[#C9A227] hover:bg-[#D4B13A] text-[#0B0B0B] font-semibold tracking-wider px-10 py-6 rounded-none text-base transition-all glow-gold"
          >
            RESERVAR CITA
          </Button>
          <Button
            onClick={onViewServices}
            variant="outline"
            className="border-[#2A2A2A] hover:border-[#C9A227] text-white hover:text-[#C9A227] font-medium tracking-wider px-10 py-6 rounded-none text-base transition-all bg-transparent"
          >
            VER SERVICIOS
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-14 sm:mt-20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[#555]">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">500+</div>
            <div className="text-xs tracking-wider uppercase mt-1">Vehículos Detallados</div>
          </div>
          <div className="w-[1px] h-10 bg-[#2A2A2A]" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">4.9</div>
            <div className="text-xs tracking-wider uppercase mt-1">Google Rating</div>
          </div>
          <div className="w-[1px] h-10 bg-[#2A2A2A]" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">3 años</div>
            <div className="text-xs tracking-wider uppercase mt-1">Garantía Ceramic</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-[#C9A227]/50" size={28} />
      </div>
    </section>
  );
}
