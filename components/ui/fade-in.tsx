"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  inView?: boolean;
  className?: string;
  inViewMargin?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  inView = true,
  className,
  inViewMargin = "-50px",
}: FadeInProps) {
  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initial = {
    opacity: 0,
    ...directions[direction],
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration,
      delay,
      ease: "easeOut",
    },
  };

  if (inView) {
    return (
      <motion.div
        initial={initial}
        whileInView={animate}
        viewport={{ once: true, margin: inViewMargin as any }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={initial}
      animate={animate}
      className={className}
    >
      {children}
    </motion.div>
  );
}
