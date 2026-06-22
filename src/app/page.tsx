'use client';

import { useState, useCallback } from 'react';
import Navbar from '@/components/delux/Navbar';
import HeroSection from '@/components/delux/HeroSection';
import ServicesSection from '@/components/delux/ServicesSection';
import ServiceDetail from '@/components/delux/ServiceDetail';
import GallerySection from '@/components/delux/GallerySection';
import TestimonialsSection from '@/components/delux/TestimonialsSection';
import FAQSection from '@/components/delux/FAQSection';
import FounderSection from '@/components/delux/FounderSection';
import AvailabilitySection from '@/components/delux/AvailabilitySection';
import VehicleFinder from '@/components/delux/VehicleFinder';
import BookingSystem from '@/components/delux/BookingSystem';
import BookingConfirmation from '@/components/delux/BookingConfirmation';
import AdminPanel from '@/components/delux/AdminPanel';
import Footer from '@/components/delux/Footer';
import WhatsAppFloat from '@/components/delux/WhatsAppFloat';
import type { BookingData } from '@/components/delux/BookingSystem';

type View = 'main' | 'service-detail' | 'booking' | 'confirmation' | 'admin';

export default function Home() {
  const [view, setView] = useState<View>('main');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [bookingData, setBookingData] = useState<BookingData | null>(null);

  const handleBookNow = useCallback((serviceId?: string) => {
    if (serviceId) setSelectedServiceId(serviceId);
    setView('booking');
  }, []);

  const handleViewServices = useCallback(() => {
    const element = document.getElementById('servicios');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleSelectService = useCallback((serviceId: string) => {
    setSelectedServiceId(serviceId);
    setView('service-detail');
  }, []);

  const handleBookingComplete = useCallback((data: BookingData) => {
    setBookingData(data);
    setView('confirmation');
  }, []);

  const handleCloseOverlay = useCallback(() => {
    setView('main');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0B]">
      {/* Main Site */}
      {view === 'main' && (
        <>
          <Navbar onBookNow={() => handleBookNow()} />
          <HeroSection onBookNow={() => handleBookNow()} onViewServices={handleViewServices} />
          <ServicesSection onSelectService={handleSelectService} onBookNow={() => handleBookNow()} />
          <VehicleFinder onBookNow={handleBookNow} />
          <GallerySection />
          <TestimonialsSection />
          <FounderSection />
          <AvailabilitySection />
          <FAQSection />
          <Footer onBookNow={() => handleBookNow()} onOpenAdmin={() => setView('admin')} />
          <WhatsAppFloat />
        </>
      )}

      {/* Service Detail Overlay */}
      {view === 'service-detail' && (
        <ServiceDetail
          serviceId={selectedServiceId}
          onClose={handleCloseOverlay}
          onBookNow={(serviceId) => handleBookNow(serviceId)}
        />
      )}

      {/* Booking System */}
      {view === 'booking' && (
        <BookingSystem
          isOpen={true}
          onClose={handleCloseOverlay}
          initialServiceId={selectedServiceId}
          onComplete={handleBookingComplete}
        />
      )}

      {/* Booking Confirmation */}
      {view === 'confirmation' && bookingData && (
        <BookingConfirmation
          booking={bookingData}
          onClose={handleCloseOverlay}
        />
      )}

      {/* Admin Panel */}
      {view === 'admin' && (
        <AdminPanel
          isOpen={true}
          onClose={handleCloseOverlay}
        />
      )}
    </div>
  );
}
