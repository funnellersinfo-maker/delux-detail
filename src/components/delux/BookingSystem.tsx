'use client';

import { useState, useEffect } from 'react';
import { services } from '@/lib/services';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, ChevronRight, ChevronLeft, Clock, Car, User, CheckCircle2, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { toast } from 'sonner';

interface BookingSystemProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  onComplete: (bookingData: BookingData) => void;
}

export interface BookingData {
  id: string;
  name: string;
  phone: string;
  carBrand: string;
  carModel: string;
  carYear: string;
  serviceId: string;
  date: string;
  time: string;
  status: string;
  createdAt: string;
}

const STEPS = [
  { id: 'service', label: 'Servicio', icon: Car },
  { id: 'datetime', label: 'Fecha y Hora', icon: Clock },
  { id: 'vehicle', label: 'Vehículo', icon: Car },
  { id: 'contact', label: 'Datos', icon: User },
];

const carBrands = [
  'Audi', 'BMW', 'Mercedes-Benz', 'Porsche', 'Tesla',
  'Lexus', 'Volvo', 'Land Rover', 'Jaguar', 'Range Rover',
  'Maserati', 'Alfa Romeo', 'Toyota', 'Honda', 'Volkswagen',
  'Nissan', 'Hyundai', 'Kia', 'Ford', 'Chevrolet', 'Otro'
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 20 }, (_, i) => String(currentYear - i));

const ALL_SLOTS = [
  '08:00', '09:00', '10:00', '11:00',
  '13:00', '14:00', '15:00', '16:00', '17:00'
];

function getBookedSlots(date: string): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const bookings = JSON.parse(localStorage.getItem('delux_bookings') || '[]');
    return bookings
      .filter((b: BookingData) => b.date === date)
      .map((b: BookingData) => b.time);
  } catch {
    return [];
  }
}

export default function BookingSystem({ isOpen, onClose, initialServiceId, onComplete }: BookingSystemProps) {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState(initialServiceId || '');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState('');
  const [availableSlots, setAvailableSlots] = useState<string[]>(ALL_SLOTS);
  const [carBrand, setCarBrand] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carYear, setCarYear] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Reset when initialServiceId changes
  useEffect(() => {
    if (initialServiceId) {
      setSelectedService(initialServiceId);
      setStep(0);
    }
  }, [initialServiceId]);

  // Fetch available slots when date changes (from localStorage)
  useEffect(() => {
    if (selectedDate) {
      const dateStr = format(selectedDate, 'yyyy-MM-dd');
      const bookedSlots = getBookedSlots(dateStr);
      const available = ALL_SLOTS.filter(slot => !bookedSlots.includes(slot));
      setAvailableSlots(available);
      setSelectedTime('');
    }
  }, [selectedDate]);

  const canGoNext = () => {
    switch (step) {
      case 0: return !!selectedService;
      case 1: return !!selectedDate && !!selectedTime;
      case 2: return !!carBrand && !!carModel && !!carYear;
      case 3: return name.length >= 2 && phone.length >= 8;
      default: return false;
    }
  };

  const handleSubmit = async () => {
    if (!canGoNext()) return;

    setSubmitting(true);
    try {
      const bookingData: BookingData = {
        id: crypto.randomUUID(),
        name,
        phone,
        carBrand,
        carModel,
        carYear,
        serviceId: selectedService,
        date: format(selectedDate!, 'yyyy-MM-dd'),
        time: selectedTime,
        status: 'confirmed',
        createdAt: new Date().toISOString(),
      };

      // Save to localStorage
      const existing = JSON.parse(localStorage.getItem('delux_bookings') || '[]');
      existing.push(bookingData);
      localStorage.setItem('delux_bookings', JSON.stringify(existing));

      // Small delay for UX feel
      await new Promise(r => setTimeout(r, 800));

      onComplete(bookingData);
    } catch {
      toast.error('Error al procesar la reserva. Intenta de nuevo.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleNext = () => {
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleServiceSelect = (id: string) => {
    setSelectedService(id);
    setTimeout(() => setStep(1), 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0B0B0B]/98 backdrop-blur-md overflow-y-auto">
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#0B0B0B]/95 backdrop-blur-sm border-b border-[#2A2A2A]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <div>
              <span className="text-xs tracking-[0.25em] text-[#C9A227] uppercase font-medium">
                Reservar Cita
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#C9A227] transition-colors"
              aria-label="Cerrar reservación"
            >
              <X size={20} className="text-white" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-4">
            <div className="flex items-center gap-2">
              {STEPS.map((s, i) => (
                <div key={s.id} className="flex-1 flex items-center gap-2">
                  <div
                    className={`flex items-center gap-2 flex-1 px-3 py-2 text-xs tracking-wider uppercase transition-colors ${
                      i <= step ? 'text-[#C9A227]' : 'text-[#555]'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 flex items-center justify-center text-[10px] font-bold ${
                        i < step
                          ? 'bg-[#C9A227] text-[#0B0B0B]'
                          : i === step
                          ? 'border border-[#C9A227] text-[#C9A227]'
                          : 'border border-[#2A2A2A] text-[#555]'
                      }`}
                    >
                      {i < step ? <CheckCircle2 size={14} /> : i + 1}
                    </div>
                    <span className="hidden sm:inline">{s.label}</span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`w-8 h-[1px] ${i < step ? 'bg-[#C9A227]' : 'bg-[#2A2A2A]'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-8 w-full">
          {/* Step 0: Select Service */}
          {step === 0 && (
            <div className="animate-fade-in-up">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Elige tu servicio
              </h2>
              <p className="text-[#888] mb-8">Selecciona el tratamiento que tu vehículo necesita.</p>

              <div className="space-y-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    className={`w-full flex items-center gap-4 p-4 sm:p-5 border transition-all text-left ${
                      selectedService === service.id
                        ? 'border-[#C9A227] bg-[#C9A227]/5'
                        : 'border-[#2A2A2A] bg-[#1A1A1A] hover:border-[#C9A227]/30'
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover shrink-0"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-bold text-white text-sm sm:text-base">{service.name}</h3>
                        <span className="text-[#C9A227] font-semibold text-sm whitespace-nowrap">
                          Desde ${service.priceFrom}
                        </span>
                      </div>
                      <p className="text-[#888] text-xs sm:text-sm mt-1 line-clamp-1">{service.shortDescription}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-[#666]">
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {service.duration}
                        </span>
                      </div>
                    </div>
                    <ChevronRight
                      size={20}
                      className={`shrink-0 transition-colors ${
                        selectedService === service.id ? 'text-[#C9A227]' : 'text-[#555]'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Date & Time */}
          {step === 1 && (
            <div className="animate-fade-in-up">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Fecha y hora
              </h2>
              <p className="text-[#888] mb-8">Elige el día y horario que mejor te convenga.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Calendar */}
                <div>
                  <Label className="text-white text-sm mb-3 block">Fecha</Label>
                  <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-3 calendar-dark">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={{ before: new Date() }}
                      locale={es}
                      className="bg-transparent"
                    />
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <Label className="text-white text-sm mb-3 block">Hora disponible</Label>
                  {selectedDate ? (
                    availableSlots.length > 0 ? (
                      <div className="grid grid-cols-2 gap-2">
                        {availableSlots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setSelectedTime(slot)}
                            className={`py-3 px-4 text-sm font-medium border transition-all ${
                              selectedTime === slot
                                ? 'border-[#C9A227] bg-[#C9A227] text-[#0B0B0B]'
                                : 'border-[#2A2A2A] bg-[#1A1A1A] text-white hover:border-[#C9A227]/30'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12 text-[#888]">
                        <p>No hay horarios disponibles</p>
                        <p className="text-sm mt-1">Elige otra fecha</p>
                      </div>
                    )
                  ) : (
                    <div className="text-center py-12 text-[#888]">
                      <Clock size={32} className="mx-auto mb-3 text-[#2A2A2A]" />
                      <p>Selecciona una fecha primero</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Vehicle Info */}
          {step === 2 && (
            <div className="animate-fade-in-up">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Tu vehículo
              </h2>
              <p className="text-[#888] mb-8">Cuéntanos sobre tu auto para prepararnos mejor.</p>

              <div className="space-y-5">
                <div>
                  <Label className="text-white text-sm mb-2 block">Marca</Label>
                  <Select value={carBrand} onValueChange={setCarBrand}>
                    <SelectTrigger className="bg-[#1A1A1A] border-[#2A2A2A] text-white rounded-none h-12">
                      <SelectValue placeholder="Selecciona la marca" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1A] border-[#2A2A2A] rounded-none max-h-60">
                      {carBrands.map((brand) => (
                        <SelectItem key={brand} value={brand} className="text-white focus:bg-[#2A2A2A] focus:text-[#C9A227]">
                          {brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-white text-sm mb-2 block">Modelo</Label>
                  <Input
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    placeholder="Ej: X5, Model 3, Cayenne..."
                    className="bg-[#1A1A1A] border-[#2A2A2A] text-white rounded-none h-12 placeholder:text-[#555]"
                  />
                </div>

                <div>
                  <Label className="text-white text-sm mb-2 block">Año</Label>
                  <Select value={carYear} onValueChange={setCarYear}>
                    <SelectTrigger className="bg-[#1A1A1A] border-[#2A2A2A] text-white rounded-none h-12">
                      <SelectValue placeholder="Selecciona el año" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1A] border-[#2A2A2A] rounded-none max-h-60">
                      {years.map((year) => (
                        <SelectItem key={year} value={year} className="text-white focus:bg-[#2A2A2A] focus:text-[#C9A227]">
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Contact Info */}
          {step === 3 && (
            <div className="animate-fade-in-up">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Tus datos
              </h2>
              <p className="text-[#888] mb-8">Para confirmar tu cita necesitamos tu información.</p>

              <div className="space-y-5">
                <div>
                  <Label className="text-white text-sm mb-2 block">Nombre completo</Label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="bg-[#1A1A1A] border-[#2A2A2A] text-white rounded-none h-12 placeholder:text-[#555]"
                  />
                </div>

                <div>
                  <Label className="text-white text-sm mb-2 block">Teléfono / WhatsApp</Label>
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 234 567 8900"
                    type="tel"
                    className="bg-[#1A1A1A] border-[#2A2A2A] text-white rounded-none h-12 placeholder:text-[#555]"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="mt-8 p-5 bg-[#1A1A1A] border border-[#2A2A2A]">
                <h4 className="text-xs tracking-[0.2em] text-[#C9A227] uppercase font-medium mb-4">
                  Resumen de tu reserva
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#888]">Servicio</span>
                    <span className="text-white font-medium">
                      {services.find(s => s.id === selectedService)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#888]">Fecha</span>
                    <span className="text-white font-medium">
                      {selectedDate && format(selectedDate, "d 'de' MMMM, yyyy", { locale: es })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#888]">Hora</span>
                    <span className="text-white font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#888]">Vehículo</span>
                    <span className="text-white font-medium">{carBrand} {carModel} {carYear}</span>
                  </div>
                  <div className="border-t border-[#2A2A2A] pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="text-[#888]">Desde</span>
                      <span className="text-[#C9A227] font-bold">
                        ${services.find(s => s.id === selectedService)?.priceFrom}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-[#0B0B0B]/95 backdrop-blur-sm border-t border-[#2A2A2A]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
            <Button
              onClick={handleBack}
              variant="ghost"
              disabled={step === 0}
              className="text-[#888] hover:text-white hover:bg-transparent disabled:opacity-30 gap-2"
            >
              <ChevronLeft size={18} />
              Atrás
            </Button>

            <Button
              onClick={handleNext}
              disabled={!canGoNext() || submitting}
              className="bg-[#C9A227] hover:bg-[#D4B13A] text-[#0B0B0B] font-semibold tracking-wider px-8 py-3 rounded-none transition-all disabled:opacity-40 disabled:cursor-not-allowed gap-2"
            >
              {submitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Procesando...
                </>
              ) : step === STEPS.length - 1 ? (
                'CONFIRMAR RESERVA'
              ) : (
                <>
                  Continuar
                  <ChevronRight size={18} />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
