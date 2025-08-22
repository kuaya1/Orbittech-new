"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  variant?: 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight';
  delay?: number;
  duration?: number;
}

const variants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  },
  slideDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 }
  },
  slideLeft: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 }
  },
  slideRight: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 }
  }
};

export function AnimatedText({
  children,
  className,
  as: Tag = 'div',
  variant = 'fade',
  delay = 0,
  duration = 0.6
}: AnimatedTextProps) {
  return (
    <motion.div
      initial={variants[variant].initial}
      whileInView={variants[variant].animate}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay }}
      className={className}
    >
      <Tag className={cn("w-full", className)}>
        {children}
      </Tag>
    </motion.div>
  );
}
