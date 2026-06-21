'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { services } from '@/lib/services';
import type { BookingData } from './BookingSystem';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface BookingConfirmationProps {
  booking: BookingData;
  onClose: () => void;
}

export default function BookingConfirmation({ booking, onClose }: BookingConfirmationProps) {
  const service = services.find(s => s.id === booking.serviceId);
  
  const whatsappMessage = encodeURIComponent(
    `Hola DeluxDetail. Acabo de reservar:\n\n` +
    `Servicio: ${service?.name || booking.serviceId}\n` +
    `Fecha: ${format(new Date(booking.date + 'T12:00:00'), "d 'de' MMMM, yyyy", { locale: es })}\n` +
    `Hora: ${booking.time}\n` +
    `Vehículo: ${booking.carBrand} ${booking.carModel} ${booking.carYear}\n` +
    `Nombre: ${booking.name}`
  );

  const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 bg-[#0B0B0B]/98 backdrop-blur-md overflow-y-auto flex items-center justify-center p-4">
      <div className="max-w-lg w-full animate-fade-in-up">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <div className="relative">
              <CheckCircle2 size={64} className="text-[#C9A227]" />
              <div className="absolute inset-0 animate-ping opacity-20">
                <CheckCircle2 size={64} className="text-[#C9A227]" />
              </div>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Tu reserva ha sido recibida.
          </h2>
          <p className="text-[#888] text-base">
            Estamos preparando todo para tu vehículo. Recibirás confirmación pronto.
          </p>
        </div>

        {/* Booking Details Card */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-[#C9A227] rounded-full" />
            <span className="text-xs tracking-[0.2em] text-[#C9A227] uppercase font-medium">
              Detalles de tu cita
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-[#2A2A2A]">
              <span className="text-[#888] text-sm">Servicio</span>
              <span className="text-white font-semibold">{service?.name}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-[#2A2A2A]">
              <span className="text-[#888] text-sm">Fecha</span>
              <span className="text-white font-semibold">
                {format(new Date(booking.date + 'T12:00:00'), "d 'de' MMMM, yyyy", { locale: es })}
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-[#2A2A2A]">
              <span className="text-[#888] text-sm">Hora</span>
              <span className="text-white font-semibold">{booking.time}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-[#2A2A2A]">
              <span className="text-[#888] text-sm">Vehículo</span>
              <span className="text-white font-semibold">{booking.carBrand} {booking.carModel} {booking.carYear}</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-[#888] text-sm">Nombre</span>
              <span className="text-white font-semibold">{booking.name}</span>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="space-y-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold tracking-wider py-4 px-8 transition-all text-base"
          >
            <MessageCircle size={20} />
            Continuar por WhatsApp
            <ArrowRight size={18} />
          </a>

          <Button
            onClick={onClose}
            variant="outline"
            className="w-full border-[#2A2A2A] hover:border-[#C9A227] text-[#888] hover:text-white font-medium tracking-wider py-4 rounded-none bg-transparent"
          >
            Volver al inicio
          </Button>
        </div>

        {/* WhatsApp AI Note */}
        <p className="text-center text-[#555] text-xs mt-6">
          Nuestro asistente AI confirmará tu cita y te solicitará fotos si son necesarias.
        </p>
      </div>
    </div>
  );
}
