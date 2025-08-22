"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'navy' | 'sky';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

const backgroundVariants = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  navy: 'bg-brand-navy',
  sky: 'bg-brand-sky',
};

const paddingVariants = {
  sm: 'py-12',
  md: 'py-16',
  lg: 'py-20',
  xl: 'py-24',
};

export function Section({ 
  children, 
  className,
  background = 'white',
  padding = 'lg',
  id
}: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      id={id}
      className={cn(
        backgroundVariants[background],
        paddingVariants[padding],
        className
      )}
    >
      {children}
    </motion.section>
  );
}

