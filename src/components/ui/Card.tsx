"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  hover?: boolean;
}

const cardVariants = {
  default: "bg-[hsl(var(--background))] border border-gray-200 shadow-sm",
  elevated: "bg-[hsl(var(--background))] shadow-lg border-0",
  outlined: "bg-transparent border-2 border-[hsl(var(--secondary))]/20",
};

export function Card({ 
  children, 
  className, 
  variant = 'default',
  hover = true 
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" } : {}}
      transition={{ duration: 0.2 }}
      className={cn(
        "rounded-[var(--radius)] p-6 transition-all duration-200",
        cardVariants[variant],
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={cn("text-xl font-semibold text-[hsl(var(--foreground))] mb-2", className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-[hsl(var(--muted))] leading-relaxed", className)}>
      {children}
    </p>
  );
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mt-4 pt-4 border-t border-gray-100", className)}>
      {children}
    </div>
  );
}
