'use client';

import { services } from '@/lib/services';
import { Clock, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  onBookNow: () => void;
}

export default function ServicesSection({ onSelectService, onBookNow }: ServicesSectionProps) {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.25em] text-[#C9A227] uppercase font-medium">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Excelencia en cada detalle
          </h2>
          <div className="line-gold w-20 mx-auto mb-6" />
          <p className="text-[#888] max-w-xl mx-auto text-base sm:text-lg">
            Cada servicio está diseñado para entregar resultados que superan las expectativas. 
            Elige la experiencia que tu vehículo merece.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-[#1A1A1A] border border-[#2A2A2A] overflow-hidden transition-all duration-500 hover:border-[#C9A227]/50 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
                
                {/* Price badge */}
                <div className="absolute top-4 right-4 bg-[#0B0B0B]/80 backdrop-blur-sm border border-[#C9A227]/30 px-3 py-1">
                  <span className="text-[#C9A227] text-sm font-semibold">Desde ${service.priceFrom}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C9A227] transition-colors">
                  {service.name}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Duration & Main Benefit */}
                <div className="flex items-center gap-4 mb-5 text-sm">
                  <div className="flex items-center gap-1.5 text-[#888]">
                    <Clock size={14} className="text-[#C9A227]" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#888]">
                    <Star size={14} className="text-[#C9A227]" />
                    <span>{service.mainBenefit}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Button
                    onClick={() => onBookNow()}
                    className="bg-[#C9A227] hover:bg-[#D4B13A] text-[#0B0B0B] font-semibold text-sm tracking-wider px-5 py-2.5 rounded-none transition-all flex-1"
                  >
                    RESERVAR
                  </Button>
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="flex items-center gap-1.5 text-[#888] hover:text-[#C9A227] transition-colors text-sm"
                  >
                    Ver más
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
