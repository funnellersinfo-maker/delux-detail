'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, MapPin, Instagram, Clock } from 'lucide-react';
import DopamineReveal from './DopamineReveal';
import TurboCounter from './TurboCounter';

interface FooterProps {
  onBookNow: () => void;
  onOpenAdmin: () => void;
}

export default function Footer({ onBookNow, onOpenAdmin }: FooterProps) {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#2A2A2A] mt-auto">
      {/* CTA Banner */}
      <div className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <DopamineReveal direction="scale" delay={0}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Tu vehículo merece lo mejor.
            </h2>
          </DopamineReveal>
          <DopamineReveal direction="bottom" delay={0.1}>
            <p className="text-[#888] mb-8 max-w-md mx-auto">
              Reserva tu cita hoy. Resultados de concesionario con garantía escrita.
            </p>
          </DopamineReveal>
          <DopamineReveal direction="flip" delay={0.2}>
            <Button
              onClick={onBookNow}
              aria-label="Reservar cita ahora"
              className="bg-[#C9A227] hover:bg-[#D4B13A] text-[#0B0B0B] font-semibold tracking-wider px-10 py-6 rounded-none text-base transition-all glow-gold"
            >
              RESERVAR CITA
            </Button>
          </DopamineReveal>

          {/* Stats bar */}
          <div className="mt-10 flex items-center justify-center gap-8 text-[#555]">
            <div className="text-center">
              <div className="text-xl font-bold text-white">
                <TurboCounter end={487} suffix="+" duration={2000} />
              </div>
              <div className="text-xs tracking-wider uppercase mt-0.5">Vehículos</div>
            </div>
            <div className="w-[1px] h-8 bg-[#2A2A2A]" />
            <div className="text-center">
              <div className="text-xl font-bold text-white">
                <TurboCounter end={4.9} decimals={1} duration={1600} />
              </div>
              <div className="text-xs tracking-wider uppercase mt-0.5">Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="line-gold w-full" />

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <DopamineReveal direction="left" delay={0}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold tracking-wider text-white">DELUX</span>
                <span className="text-xl font-bold tracking-wider text-[#C9A227]">DETAIL</span>
              </div>
              <p className="text-[#888] text-sm leading-relaxed mb-3">
                Taller de detallado profesional en Polanco, CDMX. Productos importados, equipo certificado y garantía escrita.
              </p>
              <p className="text-[#555] text-xs">
                Fundado en 2021 por Alejandro Vega, detailer certificado IGL Coatings.
              </p>
            </div>
          </DopamineReveal>

          {/* Services */}
          <DopamineReveal direction="bottom" delay={0.05}>
            <div>
              <h4 className="text-xs tracking-[0.2em] text-[#C9A227] uppercase font-medium mb-4">
                Servicios
              </h4>
              <ul className="space-y-2 text-sm text-[#888]" role="list">
                <li>Rapid Detail — $899 MXN</li>
                <li>Premium Detail — $2,499 MXN</li>
                <li>Interior Deep Clean — $1,899 MXN</li>
                <li>Paint Correction — $3,999 MXN</li>
                <li>Ceramic Coating — $7,999 MXN</li>
              </ul>
            </div>
          </DopamineReveal>

          {/* Contact */}
          <DopamineReveal direction="right" delay={0.1}>
            <div>
              <h4 className="text-xs tracking-[0.2em] text-[#C9A227] uppercase font-medium mb-4">
                Contacto
              </h4>
              <ul className="space-y-3 text-sm text-[#888]" role="list">
                <li className="flex items-start gap-2">
                  <MapPin size={14} className="text-[#C9A227] mt-0.5 shrink-0" aria-hidden="true" />
                  <span>Av. Presidente Masaryk 460, Polanco V sección, Miguel Hidalgo, 11560 CDMX</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={14} className="text-[#C9A227]" aria-hidden="true" />
                  <a href="tel:+525514923180" className="hover:text-[#C9A227] transition-colors">55 1492 3180</a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle size={14} className="text-[#C9A227]" aria-hidden="true" />
                  <a
                    href="https://wa.me/525514923180?text=Hola%20DeluxDetail%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20para%20detailing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C9A227] transition-colors"
                  >
                    WhatsApp 55 1492 3180
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={14} className="text-[#C9A227]" aria-hidden="true" />
                  <span>Lun a Vie: 8:00–18:00 / Sáb: 9:00–15:00</span>
                </li>
              </ul>
            </div>
          </DopamineReveal>

          {/* Social */}
          <DopamineReveal direction="flip" delay={0.15}>
            <div>
              <h4 className="text-xs tracking-[0.2em] text-[#C9A227] uppercase font-medium mb-4">
                Síguenos
              </h4>
              <ul className="space-y-3 text-sm text-[#888]" role="list">
                <li className="flex items-center gap-2">
                  <Instagram size={14} className="text-[#C9A227]" aria-hidden="true" />
                  <a
                    href="https://instagram.com/deluxdetail.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C9A227] transition-colors"
                  >
                    @deluxdetail.mx
                  </a>
                </li>
              </ul>
              <div className="mt-4">
                <span className="text-xs text-[#555]">Email</span>
                <div className="mt-1">
                  <a
                    href="mailto:hola@deluxdetail.mx"
                    className="text-sm text-[#888] hover:text-[#C9A227] transition-colors break-all"
                  >
                    hola@deluxdetail.mx
                  </a>
                </div>
              </div>
            </div>
          </DopamineReveal>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#2A2A2A] mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#555] text-xs">
            © 2024 DeluxDetail. Todos los derechos reservados.
          </p>
          <button
            onClick={onOpenAdmin}
            className="text-[#333] hover:text-[#555] text-xs tracking-wider transition-colors"
            aria-label="Acceder al panel interno"
          >
            Panel Interno
          </button>
        </div>
      </div>
    </footer>
  );
}
