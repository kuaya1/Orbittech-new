"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, MapPin, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  service: string;
  rating: number;
  className?: string;
  delay?: number;
}

export function TestimonialCard({ 
  quote, 
  author, 
  location, 
  service, 
  rating,
  className,
  delay = 0
}: TestimonialCardProps) {
  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.3, 
          delay: delay + 0.3 + (index * 0.1),
          type: "spring",
          stiffness: 200
        }}
      >
        <Star 
          className={cn(
            "w-5 h-5",
            index < rating 
              ? "text-accent-amber fill-accent-amber" 
              : "text-border-medium"
          )}
        />
      </motion.div>
    ));
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      transition={{ 
        duration: 0.6,
        delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className={cn(
        "relative bg-white rounded-2xl p-8 shadow-lg border border-border-light h-full flex flex-col",
        "hover:shadow-xl hover:border-accent-blue/30 transition-all duration-300 group",
        className
      )}
    >
      {/* Quote Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="absolute top-6 right-6 text-brand-sky/30 group-hover:text-accent-blue/30 transition-colors duration-300"
      >
        <Quote className="w-8 h-8" />
      </motion.div>

      {/* Rating */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.1 }}
        className="flex items-center gap-1 mb-6"
      >
        {renderStars(rating)}
      </motion.div>

      {/* Quote */}
      <motion.blockquote
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
        className="text-text-primary text-lg leading-relaxed italic flex-1 mb-6 relative"
      >
        <span className="text-accent-blue text-2xl absolute -left-2 -top-2">"</span>
        {quote}
        <span className="text-accent-blue text-2xl">"</span>
      </motion.blockquote>

      {/* Author Info */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: delay + 0.5 }}
        className="space-y-2"
      >
        {/* Author Name */}
        <div className="font-headline text-base font-semibold text-brand-navy">
          {author}
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span>{location}</span>
        </div>

        {/* Service */}
        <div className="flex items-center gap-2 text-sm text-accent-blue font-medium">
          <Wrench className="w-4 h-4 flex-shrink-0" />
          <span>{service}</span>
        </div>
      </motion.div>

      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-brand-navy/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}
