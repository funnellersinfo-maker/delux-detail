'use client';

import { useState } from 'react';
import { services } from '@/lib/services';
import { X, Clock, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DopamineReveal, { getDisruptiveDirections } from './DopamineReveal';
import TurboCounter from './TurboCounter';
import { useMemo } from 'react';

interface ServiceDetailProps {
  serviceId: string;
  onClose: () => void;
  onBookNow: (serviceId: string) => void;
}

export default function ServiceDetail({ serviceId, onClose, onBookNow }: ServiceDetailProps) {
  const service = services.find(s => s.id === serviceId);
  const [activeTab, setActiveTab] = useState<'beneficios' | 'proceso'>('beneficios');
  const benefitDirections = useMemo(() => service ? getDisruptiveDirections(service.benefits.length) : [], [service]);
  const processDirections = useMemo(() => service ? getDisruptiveDirections(service.process.length) : [], [service]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0B0B0B]/95 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-screen">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#C9A227] transition-colors"
          aria-label="Cerrar detalle del servicio"
        >
          <X size={20} className="text-white" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-96 md:h-[500px]">
          <img
            src={service.image}
            alt={`Servicio de ${service.name} - Car Detailing Premium`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <span className="text-xs tracking-[0.25em] text-[#C9A227] uppercase font-medium">
              Servicio
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
              {service.name}
            </h1>
            <p className="text-[#888] mt-3 max-w-xl text-base sm:text-lg">
              {service.shortDescription}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          {/* Key Info Bar */}
          <DopamineReveal direction="scale" delay={0.1}>
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 mb-10 p-5 sm:p-6 bg-[#1A1A1A] border border-[#2A2A2A]">
              <div>
                <span className="text-xs text-[#888] uppercase tracking-wider">Precio</span>
                <div className="text-2xl font-bold text-[#C9A227] mt-1">
                  $<TurboCounter end={service.price} duration={1600} /> {service.currency}
                </div>
              </div>
              <div className="w-[1px] h-10 bg-[#2A2A2A] hidden sm:block" />
              <div>
                <span className="text-xs text-[#888] uppercase tracking-wider">Duración</span>
                <div className="flex items-center gap-2 mt-1">
                  <Clock size={16} className="text-[#C9A227]" />
                  <span className="text-white font-medium">{service.duration}</span>
                </div>
              </div>
              <div className="w-[1px] h-10 bg-[#2A2A2A] hidden sm:block" />
              <div>
                <span className="text-xs text-[#888] uppercase tracking-wider">Beneficio principal</span>
                <div className="text-white font-medium mt-1">{service.mainBenefit}</div>
              </div>
            </div>
          </DopamineReveal>

          {/* Description */}
          <DopamineReveal direction="bottom" delay={0.15}>
            <div className="mb-10">
              <p className="text-[#ccc] leading-relaxed text-base sm:text-lg">
                {service.fullDescription}
              </p>
            </div>
          </DopamineReveal>

          {/* Tabs */}
          <div className="mb-10">
            <div className="flex gap-0 mb-8 border-b border-[#2A2A2A]">
              <button
                onClick={() => setActiveTab('beneficios')}
                className={`px-6 py-3 text-sm tracking-wider uppercase font-medium transition-colors border-b-2 -mb-[1px] ${
                  activeTab === 'beneficios'
                    ? 'text-[#C9A227] border-[#C9A227]'
                    : 'text-[#888] border-transparent hover:text-white'
                }`}
              >
                Beneficios
              </button>
              <button
                onClick={() => setActiveTab('proceso')}
                className={`px-6 py-3 text-sm tracking-wider uppercase font-medium transition-colors border-b-2 -mb-[1px] ${
                  activeTab === 'proceso'
                    ? 'text-[#C9A227] border-[#C9A227]'
                    : 'text-[#888] border-transparent hover:text-white'
                }`}
              >
                Proceso
              </button>
            </div>

            {activeTab === 'beneficios' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, i) => (
                  <DopamineReveal
                    key={i}
                    direction={benefitDirections[i] as 'left' | 'right' | 'bottom' | 'scale' | 'flip'}
                    delay={i * 0.05}
                    jitter={0.03}
                  >
                    <div className="flex items-start gap-3 p-4 bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#C9A227]/20 transition-colors">
                      <Check size={18} className="text-[#C9A227] mt-0.5 shrink-0" />
                      <span className="text-[#ccc] text-sm">{benefit}</span>
                    </div>
                  </DopamineReveal>
                ))}
              </div>
            )}

            {activeTab === 'proceso' && (
              <div className="space-y-4">
                {service.process.map((step, i) => (
                  <DopamineReveal
                    key={i}
                    direction={processDirections[i] as 'left' | 'right' | 'bottom' | 'scale' | 'flip'}
                    delay={i * 0.08}
                  >
                    <div className="flex gap-5 p-5 bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#C9A227]/20 transition-colors">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 flex items-center justify-center bg-[#C9A227] text-[#0B0B0B] font-bold text-sm">
                          {step.step}
                        </div>
                        {i < service.process.length - 1 && (
                          <div className="w-[1px] h-full bg-[#2A2A2A] mt-2" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                        <p className="text-[#888] text-sm">{step.description}</p>
                      </div>
                    </div>
                  </DopamineReveal>
                ))}
              </div>
            )}
          </div>

          {/* Before/After Section */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-white mb-6">Antes y Después</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DopamineReveal direction="left" delay={0}>
                <div className="relative">
                  <img
                    src="/images/gallery-3-before.jpg"
                    alt="Vehículo antes del detailing"
                    className="w-full h-48 sm:h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B0B0B]/80 px-3 py-1 text-xs tracking-wider uppercase text-[#888]">
                    Antes
                  </div>
                </div>
              </DopamineReveal>
              <DopamineReveal direction="right" delay={0.1}>
                <div className="relative">
                  <img
                    src="/images/gallery-3-after.jpg"
                    alt="Vehículo después del detailing"
                    className="w-full h-48 sm:h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B0B0B]/80 px-3 py-1 text-xs tracking-wider uppercase text-[#C9A227]">
                    Después
                  </div>
                </div>
              </DopamineReveal>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-10 border-t border-[#2A2A2A]">
            <DopamineReveal direction="scale" delay={0}>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                ¿Listo para transformar tu vehículo?
              </h3>
            </DopamineReveal>
            <DopamineReveal direction="bottom" delay={0.1}>
              <p className="text-[#888] mb-8 max-w-md mx-auto">
                Reserva tu cita ahora y experimenta la diferencia DeluxDetail.
              </p>
            </DopamineReveal>
            <DopamineReveal direction="flip" delay={0.2}>
              <Button
                onClick={() => onBookNow(service.id)}
                aria-label={`Reservar ${service.name} ahora`}
                className="bg-[#C9A227] hover:bg-[#D4B13A] text-[#0B0B0B] font-semibold tracking-wider px-10 py-6 rounded-none text-base transition-all glow-gold"
              >
                RESERVAR AHORA
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </DopamineReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
