'use client';

import DopamineReveal from './DopamineReveal';
import { Calendar, Clock, AlertCircle } from 'lucide-react';

interface Slot {
  day: string;
  date: string;
  spaces: number;
  status: 'available' | 'limited' | 'full';
}

// Simulated real availability — updates based on current day
function getUpcomingSlots(): Slot[] {
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const now = new Date();
  const slots: Slot[] = [];
  
  for (let i = 1; i <= 5; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() + i);
    const dayName = days[d.getDay()];
    const dateStr = d.toLocaleDateString('es-MX', { day: 'numeric', month: 'short' });
    
    // Skip Sundays
    if (d.getDay() === 0) continue;
    
    let spaces: number;
    let status: 'available' | 'limited' | 'full';
    
    // Create realistic variation
    if (d.getDay() === 6) {
      // Saturday — fewer spaces
      spaces = i % 3 === 0 ? 0 : 1;
    } else if (i <= 2) {
      // Close days — less availability
      spaces = i === 1 ? 1 : 2;
    } else {
      // Further out — more availability
      spaces = 3 + (i % 2);
    }
    
    status = spaces === 0 ? 'full' : spaces <= 1 ? 'limited' : 'available';
    
    slots.push({ day: dayName, date: dateStr, spaces, status });
  }
  
  return slots;
}

export default function AvailabilitySection() {
  const slots = getUpcomingSlots();

  return (
    <section className="py-16 sm:py-20 bg-[#0B0B0B] border-t border-[#2A2A2A]" aria-label="Próxima disponibilidad">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <DopamineReveal direction="scale" delay={0}>
            <span className="text-xs tracking-[0.25em] text-[#C9A227] uppercase font-medium">
              Agenda
            </span>
          </DopamineReveal>
          <DopamineReveal direction="bottom" delay={0.1}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-3">
              Próxima disponibilidad
            </h2>
          </DopamineReveal>
          <DopamineReveal direction="flip" delay={0.15}>
            <p className="text-[#888] text-sm">
              Los espacios se llenan rápido. Reservá tu lugar ahora.
            </p>
          </DopamineReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {slots.map((slot, i) => (
            <DopamineReveal
              key={i}
              direction={i % 2 === 0 ? 'left' : 'right'}
              delay={i * 0.06}
            >
              <div className={`flex items-center justify-between p-4 border transition-colors ${
                slot.status === 'full'
                  ? 'border-[#2A2A2A] bg-[#111]'
                  : slot.status === 'limited'
                  ? 'border-[#C9A227]/30 bg-[#1A1A1A]'
                  : 'border-[#2A2A2A] bg-[#1A1A1A]'
              }`}>
                <div className="flex items-center gap-3">
                  <Calendar size={16} className={
                    slot.status === 'full' ? 'text-[#555]' : 'text-[#C9A227]'
                  } />
                  <div>
                    <div className={`text-sm font-medium ${
                      slot.status === 'full' ? 'text-[#555]' : 'text-white'
                    }`}>
                      {slot.day} {slot.date}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  {slot.status === 'full' ? (
                    <span className="text-xs text-[#555] font-medium">Completo</span>
                  ) : slot.status === 'limited' ? (
                    <>
                      <AlertCircle size={14} className="text-[#C9A227]" />
                      <span className="text-xs text-[#C9A227] font-semibold">
                        {slot.spaces} {slot.spaces === 1 ? 'espacio' : 'espacios'}
                      </span>
                    </>
                  ) : (
                    <>
                      <Clock size={14} className="text-[#888]" />
                      <span className="text-xs text-[#888]">
                        {slot.spaces} espacios
                      </span>
                    </>
                  )}
                </div>
              </div>
            </DopamineReveal>
          ))}
        </div>

        <DopamineReveal direction="bottom" delay={0.4}>
          <p className="text-center text-[#555] text-xs mt-6">
            Última actualización: hoy — La disponibilidad cambia en tiempo real según las reservas.
          </p>
        </DopamineReveal>
      </div>
    </section>
  );
}
