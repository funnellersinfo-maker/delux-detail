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
  delay?: number;
}

/**
 * Turbo counter — odometer/mileage effect.
 * SSR renders the final value (no "0" flash).
 * On client mount, animates from start → end.
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
  // Initialize with end value so SSR never shows 0
  const [value, setValue] = useState(end);
  const hasAnimatedRef = useRef(false);
  const animationRef = useRef<number>(0);
  const delayTimerRef = useRef<ReturnType<typeof setTimeout>>(0);
  const spanRef = useRef<HTMLSpanElement>(null);

  const runAnimation = useCallback(() => {
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    // Reset to start before animating
    setValue(start);

    const startTime = performance.now();
    const diff = end - start;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

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

    if (delay > 0) {
      // Show start value during delay
      setValue(start);
      delayTimerRef.current = setTimeout(() => {
        animationRef.current = requestAnimationFrame(animate);
      }, delay);
    } else {
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [end, start, duration, delay]);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    // Check if already visible
    const rect = el.getBoundingClientRect();
    const isInViewport = (
      rect.top >= -100 &&
      rect.bottom <= (window.innerHeight + 100)
    );

    if (isInViewport) {
      // Defer to avoid lint rule about setState in effect
      requestAnimationFrame(() => runAnimation());
    } else {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            runAnimation();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      return () => { observer.disconnect(); };
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (delayTimerRef.current) clearTimeout(delayTimerRef.current);
    };
  }, [runAnimation]);

  return (
    <span ref={spanRef} className={`tabular-nums ${className}`}>
      {prefix}{value.toFixed(decimals)}{suffix}
    </span>
  );
}
