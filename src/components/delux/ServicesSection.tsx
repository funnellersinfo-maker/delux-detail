'use client';

import { services } from '@/lib/services';
import { Clock, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  onBookNow: () => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function ServicesSection({ onSelectService, onBookNow }: ServicesSectionProps) {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-[#0B0B0B]" aria-label="Catálogo de servicios">
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
            <motion.article
              key={service.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              className="group relative bg-[#1A1A1A] border border-[#2A2A2A] overflow-hidden transition-all duration-500 hover:border-[#C9A227]/50"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={`Servicio de ${service.name} - Car Detailing Premium`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
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
                    aria-label={`Reservar ${service.name}`}
                    className="bg-[#C9A227] hover:bg-[#D4B13A] text-[#0B0B0B] font-semibold text-sm tracking-wider px-5 py-2.5 rounded-none transition-all flex-1"
                  >
                    RESERVAR
                  </Button>
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="flex items-center gap-1.5 text-[#888] hover:text-[#C9A227] transition-colors text-sm"
                    aria-label={`Ver detalles de ${service.name}`}
                  >
                    Ver más
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
