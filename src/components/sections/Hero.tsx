"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Satellite, 
  Wifi, 
  ArrowRight, 
  Star,
  CheckCircle,
  Zap,
  Shield,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

const heroFeatures = [
  {
    icon: Zap,
    label: 'Lightning Fast',
    description: 'Up to 1 Gbps speeds'
  },
  {
    icon: Shield,
    label: 'Reliable Service',
    description: '99.9% uptime guarantee'
  },
  {
    icon: Users,
    label: 'Expert Support',
    description: '24/7 customer service'
  }
];

const serviceAreas = [
  'Washington DC',
  'Northern Virginia', 
  'Maryland',
  'DMV Metro Area'
];

const stats = [
  { number: '500+', label: 'Installations' },
  { number: '4.9/5', label: 'Customer Rating' },
  { number: '24/7', label: 'Support' },
  { number: '5 Years', label: 'Experience' }
];

export function Hero({ className }: HeroProps) {
  return (
    <section 
      className={cn(
        "relative min-h-screen flex items-center bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--secondary))] to-[hsl(var(--accent))] overflow-hidden",
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-repeat" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 border border-[hsl(var(--primary))]/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          >
            <Satellite className="w-8 h-8 text-[hsl(var(--primary))]/30 absolute inset-4" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 fill-current" />
              <span>Trusted by 500+ DMV Area Customers</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-[hsl(var(--foreground))]">
                Ultra-Fast{' '}
              </span>
              <span className="text-[hsl(var(--primary))] relative">
                Starlink
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-[hsl(var(--primary))]/30 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>
              <br />
              <span className="text-[hsl(var(--foreground))]">
                Internet for the{' '}
              </span>
              <span className="text-[hsl(var(--accent-foreground))]">
                DMV Area
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] leading-relaxed mb-8 max-w-lg"
            >
              Professional Starlink installation and mesh WiFi solutions for 
              homes and businesses across Washington DC, Virginia, and Maryland.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            >
              {heroFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex flex-col items-center text-center p-4 bg-[hsl(var(--background))]/50 backdrop-blur-sm rounded-[var(--radius)] border border-[hsl(var(--border))]"
                  >
                    <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-[var(--radius)] flex items-center justify-center mb-3">
                      <IconComponent className="w-6 h-6 text-[hsl(var(--primary))]" />
                    </div>
                    <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">
                      {feature.label}
                    </h3>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button
                asChild
                size="lg"
                className="group"
              >
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="group"
              >
                <Link href="/services">
                  View Services
                  <Wifi className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-200" />
                </Link>
              </Button>
            </motion.div>

            {/* Service Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-wrap items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]"
            >
              <span className="font-medium">Service Areas:</span>
              {serviceAreas.map((area, index) => (
                <React.Fragment key={area}>
                  <span className="text-[hsl(var(--primary))] font-medium">
                    {area}
                  </span>
                  {index < serviceAreas.length - 1 && (
                    <span className="text-[hsl(var(--muted-foreground))]/50">•</span>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Hero Image */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="relative z-10"
              >
                <Image
                  src="/hero desktop image.png"
                  alt="Starlink Installation by Orbit Tech"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-[var(--radius-lg)] shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Floating Stats Cards */}
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    stiffness: 100 
                  }}
                  className={cn(
                    "absolute bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-[var(--radius)] p-4 shadow-lg backdrop-blur-sm",
                    index === 0 && "top-16 -left-8",
                    index === 1 && "top-32 -right-8",
                    index === 2 && "bottom-32 -left-8",
                    index === 3 && "bottom-16 -right-8"
                  )}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[hsl(var(--primary))] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-[hsl(var(--muted-foreground))] font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))]/20 to-[hsl(var(--accent))]/20 rounded-[var(--radius-lg)] blur-3xl -z-10 scale-110" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[hsl(var(--primary))]/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-[hsl(var(--primary))] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
