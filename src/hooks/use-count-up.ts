'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface UseCountUpOptions {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  enabled?: boolean;
}

/**
 * Hook that animates a number counting up like a car odometer/mileage counter.
 * Accelerates at the start, maintains speed, then decelerates near the end.
 * The effect triggers when the element enters the viewport.
 */
export function useCountUp({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
  enabled = true,
}: UseCountUpOptions) {
  const [value, setValue] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  const startAnimation = useCallback(() => {
    if (!enabled || hasStarted) return;
    setHasStarted(true);

    const startTime = performance.now();
    const diff = end - start;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing: cubic bezier that mimics a speedometer — fast ramp, slight deceleration
      // This creates the "accelerating" feeling at the start
      const eased = 1 - Math.pow(1 - progress, 3);

      const current = start + diff * eased;
      setValue(current);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [end, start, duration, enabled, hasStarted]);

  // IntersectionObserver to trigger on scroll into view
  useEffect(() => {
    if (!enabled || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [enabled, startAnimation]);

  const formatted = `${prefix}${value.toFixed(decimals)}${suffix}`;

  return { ref, value, formatted, hasStarted };
}

/**
 * Fast counter that accelerates dramatically — like a turbo odometer.
 * Starts slow, then RAPIDLY accelerates, creating a dopamine rush effect.
 */
export function useTurboCountUp({
  end,
  start = 0,
  duration = 1800,
  decimals = 0,
  prefix = '',
  suffix = '',
  enabled = true,
}: UseCountUpOptions) {
  const [value, setValue] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  const startAnimation = useCallback(() => {
    if (!enabled || hasStarted) return;
    setHasStarted(true);

    const startTime = performance.now();
    const diff = end - start;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Custom easing: starts slow, then ACCELERATES hard, then snaps to final
      // This creates the "dopamine rush" feeling
      let eased: number;
      if (progress < 0.3) {
        // Slow start — building anticipation
        eased = progress * progress * 3.7;
      } else if (progress < 0.7) {
        // TURBO acceleration — numbers flying
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

    animationRef.current = requestAnimationFrame(animate);
  }, [end, start, duration, enabled, hasStarted]);

  useEffect(() => {
    if (!enabled || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [enabled, startAnimation]);

  const formatted = `${prefix}${value.toFixed(decimals)}${suffix}`;

  return { ref, value, formatted, hasStarted };
}
