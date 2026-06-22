'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

type Direction = 'left' | 'right' | 'bottom' | 'top' | 'scale' | 'flip';

interface DopamineRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  /** Random delay jitter for stagger effect (0-1) */
  jitter?: number;
}

const directionVariants: Record<Direction, Variants> = {
  left: {
    hidden: { x: -120, opacity: 0, rotate: -3 },
    visible: { x: 0, opacity: 1, rotate: 0 },
  },
  right: {
    hidden: { x: 120, opacity: 0, rotate: 3 },
    visible: { x: 0, opacity: 1, rotate: 0 },
  },
  bottom: {
    hidden: { y: 80, opacity: 0, scale: 0.9 },
    visible: { y: 0, opacity: 1, scale: 1 },
  },
  top: {
    hidden: { y: -80, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  scale: {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
  flip: {
    hidden: { rotateX: 90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  },
};

/**
 * Dopamine-releasing reveal animation component.
 * Elements fly in from random directions with spring physics
 * creating an addictive, dynamic scroll experience.
 */
export default function DopamineReveal({
  children,
  direction = 'bottom',
  delay = 0,
  duration = 0.7,
  className = '',
  jitter = 0,
}: DopamineRevealProps) {
  const actualDelay = delay + Math.random() * jitter;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={directionVariants[direction]}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: actualDelay,
        duration,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Get a random direction for dopamine effect
 */
export function randomDirection(): Direction {
  const directions: Direction[] = ['left', 'right', 'bottom', 'scale', 'flip'];
  return directions[Math.floor(Math.random() * directions.length)];
}

/**
 * Pre-assigned directions for a set of items (avoiding consecutive same direction)
 */
export function getDisruptiveDirections(count: number): Direction[] {
  const pool: Direction[] = ['left', 'right', 'bottom', 'scale', 'flip'];
  const result: Direction[] = [];
  let lastDir: Direction | null = null;

  for (let i = 0; i < count; i++) {
    let available = pool.filter(d => d !== lastDir);
    // Every 3rd item, force a different direction for maximum disruption
    if (i % 3 === 0) {
      available = pool.filter(d => d !== lastDir && d !== result[i - 2]);
    }
    const dir = available[Math.floor(Math.random() * available.length)];
    result.push(dir);
    lastDir = dir;
  }

  return result;
}
