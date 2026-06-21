'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, MapPin, Instagram, Clock } from 'lucide-react';

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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Tu vehículo merece lo mejor.
          </h2>
          <p className="text-[#888] mb-8 max-w-md mx-auto">
            Reserva ahora y experimenta la diferencia de un detailing profesional premium.
          </p>
          <Button
            onClick={onBookNow}
            aria-label="Reservar cita ahora"
            className="bg-[#C9A227] hover:bg-[#D4B13A] text-[#0B0B0B] font-semibold tracking-wider px-10 py-6 rounded-none text-base transition-all glow-gold"
          >
            RESERVAR CITA
          </Button>
        </div>
      </div>

      <div className="line-gold w-full" />

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold tracking-wider text-white">DELUX</span>
              <span className="text-xl font-bold tracking-wider text-[#C9A227]">DETAIL</span>
            </div>
            <p className="text-[#888] text-sm leading-relaxed">
              Premium car detailing profesional. Cada vehículo tratado con obsesión por la perfección.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-[#C9A227] uppercase font-medium mb-4">
              Servicios
            </h4>
            <ul className="space-y-2 text-sm text-[#888]" role="list">
              <li>Rapid Detail</li>
              <li>Premium Detail</li>
              <li>Interior Deep Cleaning</li>
              <li>Paint Correction</li>
              <li>Ceramic Coating</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-[#C9A227] uppercase font-medium mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-[#888]" role="list">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[#C9A227]" aria-hidden="true" />
                <a href="tel:+15551234567" className="hover:text-[#C9A227] transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={14} className="text-[#C9A227]" aria-hidden="true" />
                <a
                  href="https://wa.me/15551234567?text=Hola%20DeluxDetail%2C%20me%20interesa%20sus%20servicios%20de%20detailing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A227] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-[#C9A227]" aria-hidden="true" />
                <span>Ciudad de México</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-[#C9A227]" aria-hidden="true" />
                <span>Lun-Sáb: 8:00 - 18:00</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-[#C9A227] uppercase font-medium mb-4">
              Síguenos
            </h4>
            <ul className="space-y-3 text-sm text-[#888]" role="list">
              <li className="flex items-center gap-2">
                <Instagram size={14} className="text-[#C9A227]" aria-hidden="true" />
                <a
                  href="https://instagram.com/deluxdetail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A227] transition-colors"
                >
                  @deluxdetail
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <span className="text-xs text-[#555]">Email</span>
              <div className="mt-1">
                <a
                  href="mailto:info@deluxdetail.com"
                  className="text-sm text-[#888] hover:text-[#C9A227] transition-colors break-all"
                >
                  info@deluxdetail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#2A2A2A] mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#555] text-xs">
            © {new Date().getFullYear()} DeluxDetail. Todos los derechos reservados.
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
