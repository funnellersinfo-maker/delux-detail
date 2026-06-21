'use client';

import { testimonials } from '@/lib/services';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 sm:py-28 bg-[#0B0B0B]" aria-label="Testimonios de clientes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.25em] text-[#C9A227] uppercase font-medium">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <div className="line-gold w-20 mx-auto mb-6" />
          <p className="text-[#888] max-w-xl mx-auto text-base sm:text-lg">
            Más de 500 vehículos detallados. Cada uno con una historia de transformación.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.article
              key={testimonial.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 sm:p-8 relative group hover:border-[#C9A227]/30 transition-colors"
            >
              {/* Quote icon */}
              <Quote size={32} className="text-[#C9A227]/20 mb-4" aria-hidden="true" />

              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} de 5 estrellas`}>
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-[#C9A227] fill-[#C9A227]" />
                ))}
              </div>

              {/* Review */}
              <p className="text-[#ccc] leading-relaxed text-sm sm:text-base mb-6">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-[#2A2A2A] pt-4">
                <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                <div className="text-[#888] text-xs mt-0.5">{testimonial.vehicle}</div>
                <div className="text-[#C9A227] text-xs mt-1">{testimonial.service}</div>
              </div>

              {/* Google icon indicator */}
              <div className="absolute top-6 right-6" aria-label="Google Review">
                <svg width="18" height="18" viewBox="0 0 24 24" className="text-[#555]" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="currentColor" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor" />
                </svg>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Google Rating CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-[#2A2A2A] hover:border-[#C9A227]/30 transition-colors">
            <div className="flex gap-0.5" aria-label="4.9 de 5 estrellas">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} className="text-[#C9A227] fill-[#C9A227]" />
              ))}
            </div>
            <span className="text-white font-semibold">4.9</span>
            <span className="text-[#888] text-sm">en Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
