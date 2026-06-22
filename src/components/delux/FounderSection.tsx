'use client';

import DopamineReveal from './DopamineReveal';

export default function FounderSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#0B0B0B] border-t border-[#2A2A2A]" aria-label="Conoce al fundador">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 sm:gap-14 items-center">
          {/* Photo */}
          <DopamineReveal direction="left" delay={0}>
            <div className="relative mx-auto md:mx-0">
              <div className="w-56 h-56 sm:w-64 sm:h-64 bg-[#1A1A1A] border border-[#2A2A2A] overflow-hidden">
                <img
                  src="/images/founder.jpg"
                  alt="Alejandro Vega — Fundador de DeluxDetail"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Gold accent line */}
              <div className="absolute -bottom-2 -right-2 w-56 h-56 sm:w-64 sm:h-64 border border-[#C9A227]/30 -z-10" />
            </div>
          </DopamineReveal>

          {/* Content */}
          <div>
            <DopamineReveal direction="right" delay={0.1}>
              <span className="text-xs tracking-[0.25em] text-[#C9A227] uppercase font-medium">
                Conoce al Fundador
              </span>
            </DopamineReveal>
            
            <DopamineReveal direction="right" delay={0.15}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-5">
                Alejandro Vega
              </h2>
            </DopamineReveal>

            <DopamineReveal direction="right" delay={0.2}>
              <div className="space-y-4 text-[#999] text-sm sm:text-base leading-relaxed">
                <p>
                  Comencé detallando vehículos de familiares y amigos hace más de 5 años en el garaje de mi casa. 
                  Lo que empezó como un hobby se convirtió en obsesión por la perfección.
                </p>
                <p>
                  Hoy, DeluxDetail es un taller profesional en San Pedro Garza García con equipo Rupes, 
                  certificación IGL Coatings y más de 487 vehículos detallados. Cada auto que entra sale 
                  como si hubiera salido del concesionario — o mejor.
                </p>
                <p className="text-[#C9A227] font-medium">
                  "Si no estoy 100% satisfecho con el resultado, no te cobro. Así de simple."
                </p>
              </div>
            </DopamineReveal>

            <DopamineReveal direction="bottom" delay={0.3}>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A]">
                  <div className="text-[#C9A227] text-sm font-semibold">IGL Certified</div>
                  <div className="text-[#555] text-xs">Coating Specialist</div>
                </div>
                <div className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A]">
                  <div className="text-[#C9A227] text-sm font-semibold">Rupes BigFoot</div>
                  <div className="text-[#555] text-xs">Correction Pro</div>
                </div>
                <div className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A]">
                  <div className="text-[#C9A227] text-sm font-semibold">5+ Años</div>
                  <div className="text-[#555] text-xs">De Experiencia</div>
                </div>
              </div>
            </DopamineReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
