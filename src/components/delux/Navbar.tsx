'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  onBookNow: () => void;
}

export default function Navbar({ onBookNow }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Navegación principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#2A2A2A]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold tracking-wider text-white">
              DELUX
            </span>
            <span className="text-xl sm:text-2xl font-bold tracking-wider text-[#C9A227]">
              DETAIL
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo('servicios')}
              aria-label="Ir a sección de servicios"
              className="text-sm text-[#888] hover:text-[#C9A227] transition-colors tracking-wide uppercase"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollTo('galeria')}
              aria-label="Ir a galería de resultados"
              className="text-sm text-[#888] hover:text-[#C9A227] transition-colors tracking-wide uppercase"
            >
              Galería
            </button>
            <button
              onClick={() => scrollTo('testimonios')}
              aria-label="Ir a testimonios"
              className="text-sm text-[#888] hover:text-[#C9A227] transition-colors tracking-wide uppercase"
            >
              Testimonios
            </button>
            <Button
              onClick={onBookNow}
              aria-label="Reservar cita"
              className="bg-[#C9A227] hover:bg-[#D4B13A] text-[#0B0B0B] font-semibold tracking-wide px-6 rounded-none transition-all"
            >
              RESERVAR CITA
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden text-white p-2"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B0B0B]/98 backdrop-blur-md border-t border-[#2A2A2A]">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollTo('servicios')}
              className="block w-full text-left text-sm text-[#888] hover:text-[#C9A227] transition-colors tracking-wide uppercase py-2"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollTo('galeria')}
              className="block w-full text-left text-sm text-[#888] hover:text-[#C9A227] transition-colors tracking-wide uppercase py-2"
            >
              Galería
            </button>
            <button
              onClick={() => scrollTo('testimonios')}
              className="block w-full text-left text-sm text-[#888] hover:text-[#C9A227] transition-colors tracking-wide uppercase py-2"
            >
              Testimonios
            </button>
            <Button
              onClick={() => {
                setMenuOpen(false);
                onBookNow();
              }}
              className="w-full bg-[#C9A227] hover:bg-[#D4B13A] text-[#0B0B0B] font-semibold tracking-wide py-3 rounded-none"
            >
              RESERVAR CITA
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
