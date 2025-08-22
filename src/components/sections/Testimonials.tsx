"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote,
  ChevronLeft,
  ChevronRight,
  MapPin,
  CheckCircle,
  Users,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

interface TestimonialsProps {
  className?: string;
}

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Reston, VA',
    service: 'Starlink Installation',
    rating: 5,
    text: 'Orbit Tech transformed our rural internet experience. We went from struggling with 5 Mbps to enjoying 150+ Mbps with Starlink. The installation was professional and the team explained everything clearly.',
    image: '/PXL_20250621_153112500~2.jpg',
    date: '2 weeks ago'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Bethesda, MD',
    service: 'Mesh WiFi Setup',
    rating: 5,
    text: 'Amazing service! They set up a complete mesh network in our 4-story townhouse. Now we have perfect WiFi coverage everywhere, even in the basement and attic. Highly recommend!',
    image: '/PXL_20250629_142412601~2.jpg',
    date: '1 month ago'
  },
  {
    id: 3,
    name: 'David Rodriguez',
    location: 'Washington, DC',
    service: 'Business Solutions',
    rating: 5,
    text: 'Our office needed reliable internet for 50+ employees. Orbit Tech installed a redundant Starlink system with backup connectivity. Zero downtime since installation 6 months ago.',
    image: '/PXL_20250705_164749333~3.jpg',
    date: '6 months ago'
  },
  {
    id: 4,
    name: 'Jennifer Davis',
    location: 'Arlington, VA',
    service: 'Starlink Installation',
    rating: 5,
    text: 'Working from home became so much better after getting Starlink installed by Orbit Tech. Video calls are crystal clear and file uploads that used to take hours now take minutes.',
    image: '/PXL_20250715_170502892~2.jpg',
    date: '3 weeks ago'
  },
  {
    id: 5,
    name: 'Robert Kim',
    location: 'Silver Spring, MD',
    service: 'Mesh WiFi Setup',
    rating: 5,
    text: 'The team was punctual, professional, and thorough. They not only installed our mesh network but also optimized our existing Starlink connection. Speed improved by 40%!',
    image: '/PXL_20250720_180554537~3.jpg',
    date: '1 week ago'
  }
];

const stats = [
  {
    number: '500+',
    label: 'Happy Customers',
    icon: Users,
    description: 'Satisfied clients across DMV'
  },
  {
    number: '4.9/5',
    label: 'Average Rating',
    icon: Star,
    description: 'Based on 200+ reviews'
  },
  {
    number: '99%',
    label: 'Success Rate',
    icon: CheckCircle,
    description: 'First-time installations'
  },
  {
    number: '150%',
    label: 'Speed Increase',
    icon: TrendingUp,
    description: 'Average improvement'
  }
];

export function Testimonials({ className }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      className={cn(
        "py-20 lg:py-28 bg-gradient-to-b from-[hsl(var(--secondary))] to-[hsl(var(--background))]",
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
            <span>Customer Reviews</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-[hsl(var(--foreground))]">
              What Our{' '}
            </span>
            <span className="text-[hsl(var(--primary))]">
              Customers Say
            </span>
          </h2>
          
          <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
            Don't just take our word for it. Here's what real customers across 
            the DMV area say about their Orbit Tech experience.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-[hsl(var(--background))] rounded-[var(--radius-lg)] border border-[hsl(var(--border))] shadow-sm"
              >
                <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-[var(--radius)] flex items-center justify-center mx-auto mb-3">
                  <IconComponent className="w-6 h-6 text-[hsl(var(--primary))]" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-[hsl(var(--primary))] mb-1">
                  {stat.number}
                </div>
                <div className="font-semibold text-[hsl(var(--foreground))] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[hsl(var(--muted-foreground))]">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-[400px] lg:h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex flex-col lg:flex-row"
                  >
                    {/* Image Side */}
                    <div className="lg:w-1/2 h-48 lg:h-full relative">
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ 
                          backgroundImage: `url(${testimonials[currentIndex].image})` 
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/50 to-transparent" />
                      
                      {/* Service Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-3 py-1 rounded-full text-xs font-medium">
                          {testimonials[currentIndex].service}
                        </span>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      {/* Quote Icon */}
                      <Quote className="w-12 h-12 text-[hsl(var(--primary))]/30 mb-6" />
                      
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-5 h-5 text-yellow-400 fill-current" 
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-lg lg:text-xl text-[hsl(var(--foreground))] leading-relaxed mb-6">
                        "{testimonials[currentIndex].text}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="space-y-2">
                        <div className="font-semibold text-[hsl(var(--foreground))] text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="flex items-center gap-2 text-[hsl(var(--muted-foreground))]">
                          <MapPin className="w-4 h-4" />
                          <span>{testimonials[currentIndex].location}</span>
                          <span>•</span>
                          <span>{testimonials[currentIndex].date}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="absolute inset-y-0 left-4 flex items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-[hsl(var(--background))]/80 backdrop-blur-sm border border-[hsl(var(--border))] hover:bg-[hsl(var(--background))]"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="absolute inset-y-0 right-4 flex items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-[hsl(var(--background))]/80 backdrop-blur-sm border border-[hsl(var(--border))] hover:bg-[hsl(var(--background))]"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-200",
                  index === currentIndex 
                    ? "bg-[hsl(var(--primary))] scale-125" 
                    : "bg-[hsl(var(--muted-foreground))]/30 hover:bg-[hsl(var(--muted-foreground))]/60"
                )}
              />
            ))}
          </div>
        </div>

        {/* Bottom Grid - Other Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {testimonials
            .filter((_, index) => index !== currentIndex)
            .slice(0, 3)
            .map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-200 bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-[var(--radius-lg)] p-6"
                  onClick={() => goToTestimonial(testimonials.indexOf(testimonial))}
                >
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 text-yellow-400 fill-current" 
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-[hsl(var(--foreground))] mb-4 line-clamp-3">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="space-y-1">
                    <div className="font-semibold text-[hsl(var(--foreground))]">
                      {testimonial.name}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}

