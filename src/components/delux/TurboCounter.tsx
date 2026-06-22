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
  /** Delay before starting the animation (ms) */
  delay?: number;
}

/**
 * Self-contained turbo counter component — odometer/mileage effect.
 * Auto-starts on mount with an optional delay.
 * Also supports scroll-triggered start for elements below the fold.
 */
export default function TurboCounter({
  end,
  start = 0,
  duration = 1800,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
  delay = 0,
}: TurboCounterProps) {
  const [value, setValue] = useState(start);
  const hasStartedRef = useRef(false);
  const animationRef = useRef<number>(0);
  const spanRef = useRef<HTMLSpanElement>(null);

  const startAnimation = useCallback(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    const startTime = performance.now();
    const diff = end - start;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Turbo easing: slow start → RAPID acceleration → satisfying snap
      let eased: number;
      if (progress < 0.3) {
        // Slow start — building anticipation
        eased = progress * progress * 3.7;
      } else if (progress < 0.7) {
        // TURBO acceleration — numbers flying like a speedometer
        const t = (progress - 0.3) / 0.4;
        eased = 0.333 + t * 0.55 + Math.sin(t * Math.PI * 3) * 0.02;
      } else {
        // Decelerate and snap — satisfying finish
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

    // Apply delay before starting
    if (delay > 0) {
      setTimeout(() => {
        animationRef.current = requestAnimationFrame(animate);
      }, delay);
    } else {
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [end, start, duration, delay]);

  useEffect(() => {
    // Auto-start: if the element is already in the viewport on mount, start immediately
    // Otherwise, use IntersectionObserver for scroll-triggered start
    const el = spanRef.current;
    if (!el) return;

    // Check if already visible on mount
    const rect = el.getBoundingClientRect();
    const isInViewport = (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

    if (isInViewport) {
      // Already visible — start with delay
      startAnimation();
    } else {
      // Below the fold — wait for scroll
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(el);

      return () => {
        observer.disconnect();
      };
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [startAnimation]);

  return (
    <span ref={spanRef} className={`tabular-nums ${className}`}>
      {prefix}{value.toFixed(decimals)}{suffix}
    </span>
  );
}
