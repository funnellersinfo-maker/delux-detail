'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle2, MessageCircle, ArrowRight, Zap } from 'lucide-react';
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
  
  // WhatsApp message structured like a SYSTEM, not a form
  const whatsappMessage = encodeURIComponent(
    `🔔 *NUEVA RESERVA — DeluxDetail*\n\n` +
    `📋 *Sistema de Reservas Online*\n` +
    `━━━━━━━━━━━━━━━━━━\n\n` +
    `👤 *Cliente:* ${booking.name}\n` +
    `📱 *Teléfono:* ${booking.phone}\n\n` +
    `🚗 *Vehículo:*\n` +
    `   Marca: ${booking.carBrand}\n` +
    `   Modelo: ${booking.carModel}\n` +
    `   Año: ${booking.carYear}\n\n` +
    `✨ *Servicio:* ${service?.name || booking.serviceId}\n` +
    `💰 *Precio:* $${service?.price || '—'} ${service?.currency || 'MXN'}\n\n` +
    `📅 *Fecha:* ${format(new Date(booking.date + 'T12:00:00'), "d 'de' MMMM, yyyy", { locale: es })}\n` +
    `🕐 *Hora:* ${booking.time}\n\n` +
    `━━━━━━━━━━━━━━━━━━\n` +
    `✅ Reserva confirmada automáticamente\n` +
    `📍 Blvd. Díaz Ordaz 140, San Pedro Garza García\n\n` +
    `_Enviado desde deluxdetail.mx_`
  );

  const whatsappUrl = `https://wa.me/528121567890?text=${whatsappMessage}`;

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
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 sm:p-8 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-[#C9A227] rounded-full" />
            <span className="text-xs tracking-[0.2em] text-[#C9A227] uppercase font-medium">
              Detalles de tu cita
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center py-2.5 border-b border-[#2A2A2A]">
              <span className="text-[#888] text-sm">Servicio</span>
              <span className="text-white font-semibold">{service?.name}</span>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-[#2A2A2A]">
              <span className="text-[#888] text-sm">Precio</span>
              <span className="text-[#C9A227] font-bold">${service?.price} {service?.currency}</span>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-[#2A2A2A]">
              <span className="text-[#888] text-sm">Fecha</span>
              <span className="text-white font-semibold">
                {format(new Date(booking.date + 'T12:00:00'), "d 'de' MMMM, yyyy", { locale: es })}
              </span>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-[#2A2A2A]">
              <span className="text-[#888] text-sm">Hora</span>
              <span className="text-white font-semibold">{booking.time}</span>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-[#2A2A2A]">
              <span className="text-[#888] text-sm">Vehículo</span>
              <span className="text-white font-semibold">{booking.carBrand} {booking.carModel} {booking.carYear}</span>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-[#2A2A2A]">
              <span className="text-[#888] text-sm">Cliente</span>
              <span className="text-white font-semibold">{booking.name}</span>
            </div>
            <div className="flex justify-between items-center py-2.5">
              <span className="text-[#888] text-sm">Teléfono</span>
              <span className="text-white font-semibold">{booking.phone}</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Preview Card — THIS IS THE SYSTEM MOMENT */}
        <div className="bg-[#141414] border border-[#2A2A2A] p-5 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Zap size={14} className="text-[#25D366]" />
            <span className="text-xs tracking-[0.15em] text-[#25D366] uppercase font-medium">
              Mensaje automático generado
            </span>
          </div>
          <p className="text-[#888] text-xs leading-relaxed">
            Al continuar por WhatsApp, se enviará automáticamente un mensaje con todos los datos de tu reserva. 
            Nuestro equipo lo recibe al instante y confirma tu cita en minutos.
          </p>
          <div className="mt-3 p-3 bg-[#0B0B0B] border border-[#2A2A2A] text-xs text-[#666] font-mono leading-relaxed max-h-28 overflow-y-auto">
            <span className="text-[#25D366]">🔔</span> NUEVA RESERVA — DeluxDetail<br />
            👤 {booking.name} · 📱 {booking.phone}<br />
            🚗 {booking.carBrand} {booking.carModel} {booking.carYear}<br />
            ✨ {service?.name} · 💰 ${service?.price} {service?.currency}<br />
            📅 {format(new Date(booking.date + 'T12:00:00'), "d/MM/yyyy")} · 🕐 {booking.time}
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="space-y-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold tracking-wider py-4 px-8 transition-all text-base rounded-none"
            aria-label="Continuar conversación por WhatsApp"
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
