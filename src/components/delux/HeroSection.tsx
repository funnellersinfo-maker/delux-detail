'use client';

import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import DopamineReveal from './DopamineReveal';
import TurboCounter from './TurboCounter';

interface HeroSectionProps {
  onBookNow: () => void;
  onViewServices: () => void;
}

export default function HeroSection({ onBookNow, onViewServices }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Sección principal">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-car.jpg')" }}
        role="img"
        aria-label="Vehículo premium siendo detallado"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/70 via-[#0B0B0B]/60 to-[#0B0B0B]" />
      
      {/* Subtle gold line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 py-2 border border-[#C9A227]/30 rounded-full"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse" />
          <span className="text-xs sm:text-sm tracking-[0.2em] text-[#C9A227] uppercase font-medium">
            Polanco, CDMX
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.3 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
        >
          Devuélvele a tu vehículo{' '}
          <motion.span 
            className="text-gradient-gold inline-block"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.7, duration: 0.8 }}
          >
            el acabado que merece.
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-[#888] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Detallado profesional en Polanco. Resultados de concesionario con productos importados y garantía escrita.
        </motion.p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <DopamineReveal direction="left" delay={0.7}>
            <Button
              onClick={onBookNow}
              aria-label="Reservar cita ahora"
              className="bg-[#C9A227] hover:bg-[#D4B13A] text-[#0B0B0B] font-semibold tracking-wider px-10 py-6 rounded-none text-base transition-all glow-gold"
            >
              RESERVAR CITA
            </Button>
          </DopamineReveal>
          <DopamineReveal direction="right" delay={0.8}>
            <Button
              onClick={onViewServices}
              variant="outline"
              aria-label="Ver servicios disponibles"
              className="border-[#2A2A2A] hover:border-[#C9A227] text-white hover:text-[#C9A227] font-medium tracking-wider px-10 py-6 rounded-none text-base transition-all bg-transparent"
            >
              VER SERVICIOS
            </Button>
          </DopamineReveal>
        </div>

        {/* Trust Indicators — specific real numbers */}
        <div className="mt-14 sm:mt-20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[#555]">
          <DopamineReveal direction="scale" delay={1.0}>
            <div className="text-center cursor-default">
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                <TurboCounter end={487} suffix="+" duration={2200} delay={1200} />
              </div>
              <div className="text-xs tracking-wider uppercase mt-1">Vehículos Detallados</div>
            </div>
          </DopamineReveal>
          <div className="w-[1px] h-10 bg-[#2A2A2A] hidden sm:block" />
          <DopamineReveal direction="scale" delay={1.15}>
            <div className="text-center cursor-default">
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                <TurboCounter end={4.9} decimals={1} duration={1600} delay={1400} />
              </div>
              <div className="text-xs tracking-wider uppercase mt-1">127 reseñas Google</div>
            </div>
          </DopamineReveal>
          <div className="w-[1px] h-10 bg-[#2A2A2A] hidden sm:block" />
          <DopamineReveal direction="scale" delay={1.3}>
            <div className="text-center cursor-default">
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                <TurboCounter end={3} suffix=" años" duration={1200} delay={1600} />
              </div>
              <div className="text-xs tracking-wider uppercase mt-1">Garantía Ceramic</div>
            </div>
          </DopamineReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-[#C9A227]/50" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
