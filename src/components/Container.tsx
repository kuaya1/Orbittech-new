"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  centerContent?: boolean;
}

const sizeVariants = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl', 
  lg: 'max-w-7xl',
  xl: 'max-w-[1400px]',
  full: 'max-w-full',
};

export function Container({ 
  children, 
  className,
  size = 'lg',
  centerContent = false
}: ContainerProps) {
  return (
    <div 
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        sizeVariants[size],
        centerContent && 'flex flex-col items-center justify-center',
        className
      )}
    >
      {children}
    </div>
  );
}

