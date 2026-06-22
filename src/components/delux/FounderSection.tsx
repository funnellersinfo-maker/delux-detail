'use client';

import DopamineReveal from './DopamineReveal';
import { motion } from 'framer-motion';

export default function FounderSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#0B0B0B] border-t border-[#2A2A2A]" aria-label="Conoce al fundador">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <DopamineReveal direction="scale" delay={0}>
            <span className="text-xs tracking-[0.25em] text-[#C9A227] uppercase font-medium">
              Conoce al Fundador
            </span>
          </DopamineReveal>
          <DopamineReveal direction="bottom" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              Alex Vega
            </h2>
          </DopamineReveal>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 sm:gap-16 items-start">
          {/* Photo */}
          <DopamineReveal direction="left" delay={0.15}>
            <div className="relative mx-auto md:mx-0 max-w-[300px]">
              <div className="aspect-[3/4] bg-[#1A1A1A] border border-[#2A2A2A] overflow-hidden">
                <img
                  src="/images/founder.jpg"
                  alt="Alex Vega — Fundador de DeluxDetail junto a un vehículo premium"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Gold accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#C9A227]/20 -z-10" />
              
              {/* Certifications overlay */}
              <div className="absolute -bottom-4 -right-4 bg-[#0B0B0B] border border-[#C9A227]/40 px-4 py-2">
                <div className="text-[#C9A227] text-xs font-bold tracking-wider">IGL CERTIFIED</div>
                <div className="text-[#555] text-[10px]">Coating Specialist</div>
              </div>
            </div>
          </DopamineReveal>

          {/* Content */}
          <div className="pt-2">
            <DopamineReveal direction="right" delay={0.2}>
              <div className="text-[#C9A227] font-medium text-sm mb-4">
                Fundador & Detailer Principal — DeluxDetail
              </div>
            </DopamineReveal>

            <DopamineReveal direction="right" delay={0.25}>
              <div className="space-y-5 text-[#999] text-sm sm:text-base leading-relaxed">
                <p className="text-white text-base sm:text-lg font-medium">
                  Más de 5 años ayudando a propietarios exigentes a recuperar el acabado de sus vehículos.
                </p>
                <p>
                  Comencé en el garaje de mi casa en Monterrey, detallando vehículos de familiares y amigos. Lo que empezó como hobby se convirtió en obsesión — no podía dejar un auto sin que quedara perfecto.
                </p>
                <p>
                  Hoy, DeluxDetail es un taller profesional en San Pedro Garza García con equipo Rupes, certificación IGL Coatings y más de 487 vehículos detallados. Pero sigo tratando cada auto como si fuera el mío.
                </p>
              </div>
            </DopamineReveal>

            <DopamineReveal direction="bottom" delay={0.35}>
              <div className="mt-8 p-5 bg-[#1A1A1A] border-l-2 border-[#C9A227]">
                <p className="text-white italic text-sm sm:text-base leading-relaxed">
                  &ldquo;Si no estoy 100% satisfecho con el resultado, no te cobro. Así de simple. Mi nombre está en cada auto que sale de este taller.&rdquo;
                </p>
                <div className="mt-3 text-[#C9A227] text-xs font-semibold tracking-wider">
                  — Alex Vega
                </div>
              </div>
            </DopamineReveal>

            {/* Credentials */}
            <DopamineReveal direction="bottom" delay={0.4}>
              <div className="flex flex-wrap gap-3 mt-8">
                <div className="px-4 py-3 bg-[#141414] border border-[#2A2A2A]">
                  <div className="text-[#C9A227] text-sm font-semibold">IGL Certified</div>
                  <div className="text-[#555] text-xs mt-0.5">Ceramic Coating Specialist</div>
                </div>
                <div className="px-4 py-3 bg-[#141414] border border-[#2A2A2A]">
                  <div className="text-[#C9A227] text-sm font-semibold">Rupes BigFoot</div>
                  <div className="text-[#555] text-xs mt-0.5">Paint Correction Pro</div>
                </div>
                <div className="px-4 py-3 bg-[#141414] border border-[#2A2A2A]">
                  <div className="text-[#C9A227] text-sm font-semibold">487+ Vehículos</div>
                  <div className="text-[#555] text-xs mt-0.5">Desde 2021</div>
                </div>
              </div>
            </DopamineReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
