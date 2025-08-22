"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

const buttonVariants = {
  primary: "bg-accent-blue hover:bg-brand-navy text-text-inverse shadow-md hover:shadow-lg",
  secondary: "bg-brand-slate hover:bg-brand-navy text-text-inverse shadow-md hover:shadow-lg",
  tertiary: "bg-transparent border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-text-inverse",
  ghost: "bg-transparent text-text-primary hover:bg-brand-sky hover:text-brand-navy",
  outline: "bg-transparent border border-border-medium text-text-primary hover:bg-brand-sky hover:border-brand-navy",
};

const sizeVariants = {
  sm: "px-3 py-2 text-sm font-medium",
  md: "px-4 py-2.5 text-base font-semibold",
  lg: "px-6 py-3 text-lg font-semibold",
  xl: "px-8 py-4 text-xl font-bold",
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  className,
  ...props
}: ButtonProps) {
  const baseClasses = [
    "inline-flex items-center justify-center",
    "font-headline rounded-lg",
    "transition-all duration-200 ease-in-out",
    "focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
    "relative overflow-hidden",
  ];

  const classes = cn(
    baseClasses,
    buttonVariants[variant],
    sizeVariants[size],
    className
  );

  const motionProps = {
    whileHover: disabled || isLoading ? {} : { scale: 1.02, y: -1 },
    whileTap: disabled || isLoading ? {} : { scale: 0.98 },
  };

  return (
    <motion.button
      className={classes}
      disabled={disabled || isLoading}
      {...motionProps}
      {...props}
    >
      {/* Loading spinner */}
      {isLoading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-inherit"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}
      
      {/* Content */}
      <div className={cn("flex items-center gap-2", isLoading && "opacity-0")}>
        {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </div>
    </motion.button>
  );
}

