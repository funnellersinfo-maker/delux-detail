'use client';

import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const message = encodeURIComponent(
    'Hola DeluxDetail, me gustaría agendar una cita para detailing. ¿Qué horarios tienen disponibles esta semana?'
  );

  return (
    <a
      href={`https://wa.me/528121567890?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/20 transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/30"
    >
      <MessageCircle size={26} className="text-white" fill="white" />
    </a>
  );
}
