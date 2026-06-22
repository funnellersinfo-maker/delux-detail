'use client';

import BeforeAfterSlider from './BeforeAfterSlider';
import DopamineReveal, { getDisruptiveDirections } from './DopamineReveal';
import { useMemo } from 'react';

const galleryItems = [
  {
    id: 1,
    before: '/images/gallery-1-before.jpg',
    after: '/images/gallery-1-after.jpg',
    title: 'Exterior Premium',
    vehicle: 'Mercedes-Benz S-Class',
  },
  {
    id: 2,
    before: '/images/gallery-2-before.jpg',
    after: '/images/gallery-2-after.jpg',
    title: 'Interior Deep Clean',
    vehicle: 'BMW 7 Series',
  },
  {
    id: 3,
    before: '/images/gallery-3-before.jpg',
    after: '/images/gallery-3-after.jpg',
    title: 'Paint Correction',
    vehicle: 'Porsche 911',
  },
];

export default function GallerySection() {
  const directions = useMemo(() => getDisruptiveDirections(galleryItems.length), []);

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-[#0B0B0B]" aria-label="Galería de resultados antes y después">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <DopamineReveal direction="scale" delay={0}>
            <span className="text-xs tracking-[0.25em] text-[#C9A227] uppercase font-medium">
              Resultados Reales
            </span>
          </DopamineReveal>
          <DopamineReveal direction="bottom" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              La diferencia se ve
            </h2>
          </DopamineReveal>
          <div className="line-gold w-20 mx-auto mb-6" />
          <DopamineReveal direction="flip" delay={0.15}>
            <p className="text-[#888] max-w-xl mx-auto text-base sm:text-lg">
              Desliza para ver la transformación. Resultados reales, sin filtros.
            </p>
          </DopamineReveal>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <DopamineReveal
              key={item.id}
              direction={directions[i] as 'left' | 'right' | 'bottom' | 'scale' | 'flip'}
              delay={i * 0.12}
            >
              <div className="group">
                <div className="border border-[#2A2A2A] overflow-hidden group-hover:border-[#C9A227]/30 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(201,162,39,0.1)]">
                  <BeforeAfterSlider
                    beforeSrc={item.before}
                    afterSrc={item.after}
                  />
                </div>
                <div className="mt-3 px-1">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-[#888] text-sm">{item.vehicle}</p>
                </div>
              </div>
            </DopamineReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
