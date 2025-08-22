"use client";

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  asChild?: boolean;
}

const buttonVariants = {
  primary: "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))]/90 shadow-md",
  secondary: "bg-[hsl(var(--secondary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--secondary))]/90 shadow-md",
  ghost: "bg-transparent text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))]/10 border border-[hsl(var(--secondary))]/20",
};

const sizeVariants = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary',
    size = 'md',
    children,
    className,
    isLoading = false,
    disabled = false,
    onClick,
    type = 'button',
    asChild = false,
  }, ref) => {
    const baseClassName = cn(
      "inline-flex items-center justify-center rounded-[var(--radius)] font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
      buttonVariants[variant],
      sizeVariants[size],
      className
    );

    if (asChild) {
      return (
        <Slot className={baseClassName}>
          {children}
        </Slot>
      );
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        className={baseClassName}
        disabled={disabled || isLoading}
        onClick={onClick}
        type={type}
      >
        {isLoading && (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

