"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, LucideIcon } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  href: string;
  price?: string;
  badge?: string;
  className?: string;
  variant?: 'default' | 'featured';
}

export function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  features, 
  href, 
  price, 
  badge,
  className,
  variant = 'default'
}: ServiceCardProps) {
  const isFeatured = variant === 'featured';

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const iconVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.3, delay: 0.2 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover={{ y: -8 }}
      className={cn(
        "relative bg-white rounded-2xl p-8 shadow-lg border transition-all duration-300 group h-full flex flex-col",
        isFeatured 
          ? "border-accent-blue shadow-xl ring-2 ring-accent-blue/20" 
          : "border-border-light hover:border-accent-blue/50 hover:shadow-xl",
        className
      )}
    >
      {/* Badge */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="absolute -top-3 left-8 bg-accent-blue text-text-inverse px-4 py-1 rounded-full text-sm font-semibold"
        >
          {badge}
        </motion.div>
      )}

      {/* Icon */}
      <motion.div
        variants={iconVariants}
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={cn(
          "w-16 h-16 rounded-xl flex items-center justify-center mb-6",
          isFeatured 
            ? "bg-accent-blue text-text-inverse" 
            : "bg-brand-sky text-brand-navy"
        )}
      >
        <Icon className="w-8 h-8" />
      </motion.div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {/* Title */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="font-headline text-2xl font-semibold text-brand-navy mb-4 leading-tight"
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="text-text-secondary leading-relaxed mb-6 flex-grow"
        >
          {description}
        </motion.p>

        {/* Features List */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="space-y-3 mb-8"
        >
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
              className="flex items-start gap-3 text-sm"
            >
              <div className="flex-shrink-0 w-5 h-5 bg-accent-green/10 rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-accent-green" />
              </div>
              <span className="text-text-primary">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Price */}
        {price && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="mb-6"
          >
            <span className="font-headline text-xl font-semibold text-accent-green">
              Starting at {price}
            </span>
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <Button 
            variant={isFeatured ? "primary" : "ghost"}
            size="lg"
            onClick={() => window.location.href = href}
            rightIcon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />}
            className="w-full"
          >
            Learn More
          </Button>
        </motion.div>
      </div>

      {/* Hover Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-brand-navy/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}

