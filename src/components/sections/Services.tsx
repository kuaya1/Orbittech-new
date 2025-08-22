"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Satellite, 
  Wifi, 
  Building2,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

interface ServicesProps {
  className?: string;
}

const services = [
  {
    id: 'starlink-installation',
    title: 'Starlink Installation',
    description: 'Professional installation of Starlink satellite internet systems for residential and commercial properties.',
    icon: Satellite,
    features: [
      'Professional dish mounting',
      'Cable routing & management',
      'Network optimization',
      'Speed testing & verification'
    ],
    pricing: 'Starting at $299',
    href: '/services/starlink-installation',
    image: '/Starlink_Rural_Location_02a-scaled.jpg',
    badge: 'Most Popular',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'mesh-wifi-setup',
    title: 'Mesh WiFi Setup',
    description: 'Complete mesh network installation for seamless coverage throughout your entire property.',
    icon: Wifi,
    features: [
      'Whole-home coverage',
      'Multiple access points',
      'Network security setup',
      'Device optimization'
    ],
    pricing: 'Starting at $199',
    href: '/services/mesh-wifi-setup',
    image: '/untitled-design-16.png',
    badge: 'Best Value',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    id: 'business-solutions',
    title: 'Business Solutions',
    description: 'Enterprise-grade internet solutions designed for businesses of all sizes.',
    icon: Building2,
    features: [
      'Redundant connections',
      'Priority support',
      'Custom configurations',
      'SLA guarantees'
    ],
    pricing: 'Custom Quote',
    href: '/services/business-solutions',
    image: '/Starlink Dmv (28).png',
    badge: 'Enterprise',
    gradient: 'from-purple-500 to-violet-600'
  }
];

const serviceFeatures = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Up to 1 Gbps download speeds'
  },
  {
    icon: Shield,
    title: 'Reliable',
    description: '99.9% uptime with redundancy'
  },
  {
    icon: Clock,
    title: 'Quick Setup',
    description: 'Most installs completed same day'
  }
];

export function Services({ className }: ServicesProps) {
  return (
    <section 
      className={cn(
        "py-20 lg:py-28 bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--secondary))]",
        className
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>Professional Services</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-[hsl(var(--foreground))]">
              Complete Internet{' '}
            </span>
            <span className="text-[hsl(var(--primary))]">
              Solutions
            </span>
          </h2>
          
          <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
            From residential Starlink installations to enterprise mesh networks, 
            we provide comprehensive internet solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Service Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {serviceFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-[hsl(var(--background))] rounded-[var(--radius-lg)] border border-[hsl(var(--border))] shadow-sm"
              >
                <div className="w-16 h-16 bg-[hsl(var(--primary))]/10 rounded-[var(--radius)] flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-[hsl(var(--primary))]" />
                </div>
                <h3 className="font-semibold text-[hsl(var(--foreground))] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card 
                  variant="elevated" 
                  className="h-full group cursor-pointer overflow-hidden"
                >
                  {/* Service Image with Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-80",
                      service.gradient
                    )} />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-medium">
                        {service.badge}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 right-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-[var(--radius)] flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl group-hover:text-[hsl(var(--primary))] transition-colors duration-200">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-[hsl(var(--muted-foreground))]">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pb-4">
                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.3, 
                            delay: (index * 0.2) + (featureIndex * 0.1) 
                          }}
                          className="flex items-center gap-3 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0" />
                          <span className="text-[hsl(var(--foreground))]">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Pricing */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-[hsl(var(--primary))]">
                          {service.pricing}
                        </span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Button
                      asChild
                      size="lg"
                      className="w-full group/button"
                    >
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-[hsl(var(--secondary))] rounded-[var(--radius-lg)] p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-[hsl(var(--foreground))] mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 max-w-2xl mx-auto">
              Every property is unique. Contact us for a personalized assessment 
              and custom quote tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="group"
              >
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
              >
                <Link href="/resources/faq">
                  View FAQ
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

