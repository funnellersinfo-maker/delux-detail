'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface TurboCounterProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/**
 * Self-contained turbo counter component.
 * Renders as a <span> with the counting animation.
 * Triggers on scroll into viewport — no external ref needed.
 */
export default function TurboCounter({
  end,
  start = 0,
  duration = 1800,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}: TurboCounterProps) {
  const [value, setValue] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number>(0);

  const startAnimation = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);

    const startTime = performance.now();
    const diff = end - start;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Turbo easing: slow start → RAPID acceleration → satisfying snap
      let eased: number;
      if (progress < 0.3) {
        eased = progress * progress * 3.7;
      } else if (progress < 0.7) {
        const t = (progress - 0.3) / 0.4;
        eased = 0.333 + t * 0.55 + Math.sin(t * Math.PI * 3) * 0.02;
      } else {
        const t = (progress - 0.7) / 0.3;
        eased = 0.883 + (1 - Math.pow(1 - t, 2)) * 0.117;
      }

      const current = start + diff * Math.max(0, Math.min(1, eased));
      setValue(current);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [end, start, duration, hasStarted]);

  useEffect(() => {
    if (!spanRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(spanRef.current);
    return () => {
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [startAnimation]);

  return (
    <span ref={spanRef} className={`tabular-nums ${className}`}>
      {prefix}{value.toFixed(decimals)}{suffix}
    </span>
  );
}
