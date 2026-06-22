'use client';

import { faqs } from '@/lib/services';
import DopamineReveal from './DopamineReveal';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#0B0B0B]" aria-label="Preguntas frecuentes">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <DopamineReveal direction="scale" delay={0}>
            <span className="text-xs tracking-[0.25em] text-[#C9A227] uppercase font-medium">
              Preguntas Frecuentes
            </span>
          </DopamineReveal>
          <DopamineReveal direction="bottom" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-6">
              Todo lo que necesitás saber
            </h2>
          </DopamineReveal>
          <div className="line-gold w-20 mx-auto" />
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <DopamineReveal
              key={i}
              direction={i % 2 === 0 ? 'left' : 'right'}
              delay={i * 0.05}
            >
              <div
                className={`border transition-colors ${
                  openIndex === i ? 'border-[#C9A227]/40 bg-[#1A1A1A]' : 'border-[#2A2A2A] bg-[#141414] hover:border-[#2A2A2A]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className={`font-medium pr-4 transition-colors ${
                    openIndex === i ? 'text-[#C9A227]' : 'text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180 text-[#C9A227]' : 'text-[#555]'
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-[#888] text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </DopamineReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
