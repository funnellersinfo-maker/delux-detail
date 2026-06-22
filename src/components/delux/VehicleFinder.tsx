'use client';

import { useState } from 'react';
import DopamineReveal from './DopamineReveal';
import { services } from '@/lib/services';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const vehicleTypes = [
  {
    id: 'sedan',
    label: 'Sedán',
    emoji: '🚗',
    description: 'Sedán ejecutivo o compacto',
    recommended: ['rapid-detail', 'premium-detail'],
  },
  {
    id: 'suv',
    label: 'SUV',
    emoji: '🚙',
    description: 'SUV o Crossover',
    recommended: ['premium-detail', 'interior-deep-cleaning', 'ceramic-coating'],
  },
  {
    id: 'pickup',
    label: 'Pickup',
    emoji: '🛻',
    description: 'Pickup o Camioneta',
    recommended: ['premium-detail', 'interior-deep-cleaning'],
  },
  {
    id: 'deportivo',
    label: 'Deportivo',
    emoji: '🏎️',
    description: 'Deportivo o Coupé',
    recommended: ['paint-correction', 'ceramic-coating', 'premium-detail'],
  },
];

interface VehicleFinderProps {
  onBookNow: (serviceId?: string) => void;
}

export default function VehicleFinder({ onBookNow }: VehicleFinderProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const selectedType = vehicleTypes.find(v => v.id === selected);
  const recommendedServices = selectedType
    ? services.filter(s => selectedType.recommended.includes(s.id))
    : [];

  return (
    <section className="py-20 sm:py-28 bg-[#0B0B0B] border-t border-[#2A2A2A]" aria-label="Recomendador de servicios por vehículo">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <DopamineReveal direction="scale" delay={0}>
            <span className="text-xs tracking-[0.25em] text-[#C9A227] uppercase font-medium">
              Personaliza tu experiencia
            </span>
          </DopamineReveal>
          <DopamineReveal direction="bottom" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
              ¿Qué vehículo tienes?
            </h2>
          </DopamineReveal>
          <DopamineReveal direction="flip" delay={0.15}>
            <p className="text-[#888] text-sm sm:text-base max-w-md mx-auto">
              Te recomendamos los servicios ideales según tu tipo de vehículo.
            </p>
          </DopamineReveal>
        </div>

        {/* Vehicle type selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {vehicleTypes.map((type, i) => (
            <DopamineReveal
              key={type.id}
              direction={i % 2 === 0 ? 'left' : 'right'}
              delay={i * 0.05}
            >
              <button
                onClick={() => setSelected(selected === type.id ? null : type.id)}
                className={`w-full p-5 border text-center transition-all ${
                  selected === type.id
                    ? 'border-[#C9A227] bg-[#C9A227]/5'
                    : 'border-[#2A2A2A] bg-[#1A1A1A] hover:border-[#C9A227]/30'
                }`}
              >
                <div className="text-3xl mb-2">{type.emoji}</div>
                <div className={`text-sm font-semibold ${
                  selected === type.id ? 'text-[#C9A227]' : 'text-white'
                }`}>
                  {type.label}
                </div>
                <div className="text-[#555] text-xs mt-1">{type.description}</div>
              </button>
            </DopamineReveal>
          ))}
        </div>

        {/* Recommended services */}
        {selectedType && recommendedServices.length > 0 && (
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-[#C9A227] rounded-full" />
              <span className="text-sm text-[#C9A227] font-medium tracking-wider uppercase">
                Recomendado para {selectedType.label}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recommendedServices.map((service, i) => (
                <div
                  key={service.id}
                  className="flex items-center gap-4 p-4 bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#C9A227]/30 transition-colors"
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-16 h-16 object-cover shrink-0"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm">{service.name}</h4>
                    <p className="text-[#888] text-xs mt-0.5">{service.duration} · ${service.price} {service.currency}</p>
                  </div>
                  <Button
                    onClick={() => onBookNow(service.id)}
                    className="bg-[#C9A227] hover:bg-[#D4B13A] text-[#0B0B0B] font-semibold text-xs tracking-wider px-4 py-2 rounded-none shrink-0"
                  >
                    RESERVAR
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                onClick={() => onBookNow()}
                variant="outline"
                className="border-[#2A2A2A] hover:border-[#C9A227] text-white hover:text-[#C9A227] font-medium tracking-wider px-8 py-5 rounded-none bg-transparent gap-2"
              >
                Ver todos los servicios
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
