"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from './Button';
import { Container } from './Container';
import { AnimatedText } from './AnimatedText';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string | React.ReactNode;
  subtitle?: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
    onClick?: () => void;
  };
  secondaryCta?: {
    text: string;
    href: string;
    onClick?: () => void;
  };
  backgroundImage?: string;
  rating?: {
    value: number;
    count: number;
    text?: string;
  };
  features?: string[];
  className?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  rating,
  features,
  className
}: HeroProps) {
  return (
    <section className={cn(
      "relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden",
      className
    )}>
      {/* Background */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/60" />
        </div>
      )}
      
      {/* Content */}
      <Container size="xl" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {subtitle && (
              <AnimatedText 
                variant="slideUp" 
                delay={0.1}
                className="text-accent-blue font-semibold text-sm uppercase tracking-wider mb-4"
              >
                {subtitle}
              </AnimatedText>
            )}
            
            <AnimatedText 
              as="h1" 
              variant="slideUp" 
              delay={0.2}
              className={cn(
                "font-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6",
                backgroundImage ? "text-white" : "text-brand-navy"
              )}
            >
              {title}
            </AnimatedText>
            
            <AnimatedText 
              as="p" 
              variant="slideUp" 
              delay={0.3}
              className={cn(
                "text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0",
                backgroundImage ? "text-white/90" : "text-text-secondary"
              )}
            >
              {description}
            </AnimatedText>

            {/* Rating */}
            {rating && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center justify-center lg:justify-start gap-2 mb-8"
              >
                <div className="flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star 
                      key={i}
                      className={cn(
                        "w-5 h-5",
                        i < rating.value 
                          ? "text-accent-amber fill-accent-amber" 
                          : "text-gray-300"
                      )}
                    />
                  ))}
                </div>
                <span className={cn(
                  "text-sm font-medium",
                  backgroundImage ? "text-white/90" : "text-text-secondary"
                )}>
                  {rating.value}/5 from {rating.count}+ customers
                  {rating.text && ` • ${rating.text}`}
                </span>
              </motion.div>
            )}

            {/* Features */}
            {features && (
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
              >
                {features.map((feature, index) => (
                  <li 
                    key={index}
                    className={cn(
                      "flex items-center gap-2 text-sm",
                      backgroundImage ? "text-white/90" : "text-text-secondary"
                    )}
                  >
                    <div className="w-2 h-2 bg-accent-blue rounded-full" />
                    {feature}
                  </li>
                ))}
              </motion.ul>
            )}

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="xl"
                variant="primary"
                onClick={primaryCta.onClick || (() => window.location.href = primaryCta.href)}
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                {primaryCta.text}
              </Button>
              
              {secondaryCta && (
                <Button
                  size="xl"
                  variant={backgroundImage ? "ghost" : "outline"}
                  onClick={secondaryCta.onClick || (() => window.location.href = secondaryCta.href)}
                  className={backgroundImage ? "text-white border-white hover:bg-white hover:text-brand-navy" : ""}
                >
                  {secondaryCta.text}
                </Button>
              )}
            </motion.div>
          </div>

          {/* Image/Visual Content */}
          {!backgroundImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative z-10">
                <img 
                  src="/hero desktop image.png"
                  alt="Orbit Tech Solutions - Professional Starlink Installation"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-accent-blue rounded-full flex items-center justify-center shadow-lg"
              >
                <Star className="w-12 h-12 text-white fill-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-green rounded-full flex items-center justify-center shadow-lg"
              >
                <ArrowRight className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}
