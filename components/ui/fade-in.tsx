"use client";

import { motion, Variants } from "framer-motion";
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
  const directions: Record<string, { x?: number; y?: number }> = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {},
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView={inView ? "show" : undefined}
      animate={!inView ? "show" : undefined}
      viewport={inView ? { once: true, margin: inViewMargin } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}