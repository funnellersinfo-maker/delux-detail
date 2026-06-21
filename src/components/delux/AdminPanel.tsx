'use client';

import { useState, useEffect } from 'react';
import { X, Calendar, Clock, Car, User, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { services } from '@/lib/services';

interface AdminBooking {
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

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  confirmed: { label: 'Confirmada', color: 'text-[#C9A227]', bg: 'bg-[#C9A227]/10 border-[#C9A227]/30' },
  in_progress: { label: 'En Proceso', color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/30' },
  completed: { label: 'Completada', color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/30' },
  cancelled: { label: 'Cancelada', color: 'text-red-400', bg: 'bg-red-400/10 border-red-400/30' },
};

export default function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const [bookings, setBookings] = useState<AdminBooking[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/bookings');
      const data = await res.json();
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchBookings();
    }
  }, [isOpen]);

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/bookings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      setBookings(prev =>
        prev.map(b => (b.id === id ? { ...b, status } : b))
      );
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  const filteredBookings = selectedStatus === 'all'
    ? bookings
    : bookings.filter(b => b.status === selectedStatus);

  // Stats
  const stats = {
    total: bookings.length,
    confirmed: bookings.filter(b => b.status === 'confirmed').length,
    inProgress: bookings.filter(b => b.status === 'in_progress').length,
    completed: bookings.filter(b => b.status === 'completed').length,
  };

  // Group by date
  const groupedBookings = filteredBookings.reduce<Record<string, AdminBooking[]>>((acc, booking) => {
    if (!acc[booking.date]) acc[booking.date] = [];
    acc[booking.date].push(booking);
    return acc;
  }, {});

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0B0B0B] overflow-y-auto">
      <div className="min-h-screen">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#0B0B0B]/95 backdrop-blur-sm border-b border-[#2A2A2A]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">Panel de Reservas</h1>
              <p className="text-xs text-[#888] mt-0.5">DeluxDetail — Gestión interna</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={fetchBookings}
                variant="outline"
                size="sm"
                className="border-[#2A2A2A] hover:border-[#C9A227] text-[#888] hover:text-[#C9A227] rounded-none bg-transparent gap-2"
                disabled={loading}
              >
                <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
                Actualizar
              </Button>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#C9A227] transition-colors"
              >
                <X size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-4">
              <div className="text-2xl font-bold text-white">{stats.total}</div>
              <div className="text-xs text-[#888] uppercase tracking-wider mt-1">Total</div>
            </div>
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-4">
              <div className="text-2xl font-bold text-[#C9A227]">{stats.confirmed}</div>
              <div className="text-xs text-[#888] uppercase tracking-wider mt-1">Confirmadas</div>
            </div>
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-4">
              <div className="text-2xl font-bold text-blue-400">{stats.inProgress}</div>
              <div className="text-xs text-[#888] uppercase tracking-wider mt-1">En Proceso</div>
            </div>
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-4">
              <div className="text-2xl font-bold text-green-400">{stats.completed}</div>
              <div className="text-xs text-[#888] uppercase tracking-wider mt-1">Completadas</div>
            </div>
          </div>

          {/* Filter */}
          <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
            {[
              { key: 'all', label: 'Todas' },
              { key: 'confirmed', label: 'Confirmadas' },
              { key: 'in_progress', label: 'En Proceso' },
              { key: 'completed', label: 'Completadas' },
              { key: 'cancelled', label: 'Canceladas' },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedStatus(filter.key)}
                className={`px-4 py-2 text-xs tracking-wider uppercase border transition-colors whitespace-nowrap ${
                  selectedStatus === filter.key
                    ? 'border-[#C9A227] text-[#C9A227] bg-[#C9A227]/5'
                    : 'border-[#2A2A2A] text-[#888] hover:border-[#C9A227]/30'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Bookings by Date */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <RefreshCw size={24} className="text-[#C9A227] animate-spin" />
            </div>
          ) : filteredBookings.length === 0 ? (
            <div className="text-center py-20 text-[#888]">
              <Calendar size={48} className="mx-auto mb-4 text-[#2A2A2A]" />
              <p>No hay reservas para mostrar</p>
            </div>
          ) : (
            <div className="space-y-8">
              {Object.entries(groupedBookings)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([date, dateBookings]) => (
                  <div key={date}>
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar size={16} className="text-[#C9A227]" />
                      <h3 className="text-white font-semibold">
                        {new Date(date + 'T12:00:00').toLocaleDateString('es', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </h3>
                      <span className="text-[#555] text-sm">
                        ({dateBookings.length} {dateBookings.length === 1 ? 'cita' : 'citas'})
                      </span>
                    </div>

                    <div className="space-y-3">
                      {dateBookings
                        .sort((a, b) => a.time.localeCompare(b.time))
                        .map((booking) => {
                          const service = services.find(s => s.id === booking.serviceId);
                          const status = statusConfig[booking.status] || statusConfig.confirmed;

                          return (
                            <div
                              key={booking.id}
                              className="bg-[#1A1A1A] border border-[#2A2A2A] p-4 sm:p-5"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <div className="flex items-center gap-1.5 text-[#C9A227]">
                                      <Clock size={14} />
                                      <span className="font-semibold">{booking.time}</span>
                                    </div>
                                    <Badge
                                      variant="outline"
                                      className={`${status.color} ${status.bg} text-[10px] tracking-wider uppercase rounded-none border`}
                                    >
                                      {status.label}
                                    </Badge>
                                  </div>

                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                                    <div className="flex items-center gap-2 text-[#888]">
                                      <User size={14} className="text-[#555]" />
                                      <span>{booking.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#888]">
                                      <Car size={14} className="text-[#555]" />
                                      <span>{booking.carBrand} {booking.carModel} {booking.carYear}</span>
                                    </div>
                                    <div className="text-white font-medium">
                                      {service?.name || booking.serviceId}
                                    </div>
                                  </div>
                                </div>

                                {/* Status Actions */}
                                <div className="flex items-center gap-2 shrink-0">
                                  {booking.status === 'confirmed' && (
                                    <Button
                                      onClick={() => updateStatus(booking.id, 'in_progress')}
                                      size="sm"
                                      className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border border-blue-400/30 rounded-none text-xs tracking-wider"
                                    >
                                      INICIAR
                                    </Button>
                                  )}
                                  {booking.status === 'in_progress' && (
                                    <Button
                                      onClick={() => updateStatus(booking.id, 'completed')}
                                      size="sm"
                                      className="bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-400/30 rounded-none text-xs tracking-wider"
                                    >
                                      COMPLETAR
                                    </Button>
                                  )}
                                  {(booking.status === 'confirmed' || booking.status === 'in_progress') && (
                                    <Button
                                      onClick={() => updateStatus(booking.id, 'cancelled')}
                                      size="sm"
                                      variant="ghost"
                                      className="text-red-400/60 hover:text-red-400 hover:bg-red-400/10 rounded-none text-xs"
                                    >
                                      Cancelar
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
