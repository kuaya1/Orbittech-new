"use client";

import React from 'react';
import { Satellite, Wifi, Building2, Shield, Star, Target } from 'lucide-react';
import { 
  Container, 
  Section, 
  ServiceCard, 
  TestimonialCard,
  AnimatedText,
  Button
} from "@/components";
import { Hero } from "@/components/Hero";

export default function ModernHomePage() {
  // Services data with proper Lucide icons
  const services = [
    {
      title: "Starlink Installation",
      description: "Professional Starlink satellite internet installation with optimal positioning for maximum speed and reliability.",
      icon: Satellite,
      features: [
        "Site survey and optimal placement",
        "Professional mounting and weatherproofing", 
        "Network configuration and testing",
        "1-year installation warranty"
      ],
      href: "/services/starlink-installation",
      price: "$499",
      variant: "featured" as const
    },
    {
      title: "Mesh WiFi Systems",
      description: "Eliminate dead zones with enterprise-grade mesh WiFi systems that provide seamless coverage throughout your property.",
      icon: Wifi,
      features: [
        "Whole-home WiFi coverage",
        "Seamless device handoff",
        "Advanced security features", 
        "Remote monitoring and support"
      ],
      href: "/services/mesh-wifi-setup",
      price: "$199"
    },
    {
      title: "Business Solutions", 
      description: "Scalable internet and networking solutions designed for businesses that demand reliability and performance.",
      icon: Building2,
      features: [
        "Redundant internet connections",
        "Enterprise-grade security",
        "24/7 monitoring and support",
        "Custom network design"
      ],
      href: "/services/business-solutions",
      price: "Custom"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "We called Orbit to ask about getting connectivity - they were out the next day... Eric is an expert! Goes the extra mile - and at a very reasonable price. Highly recommended!",
      author: "Peter Baughan",
      location: "Reston, VA", 
      service: "Starlink Installation",
      rating: 5,
      delay: 0
    },
    {
      quote: "Fantastic job with a very challenging roof and receiver location. Eric provided options and worked with us to get the receiver and hiding associated wires and router in the perfect place for us.",
      author: "Dave Wiseman",
      location: "Northern Virginia",
      service: "Starlink Installation", 
      rating: 5,
      delay: 0.2
    },
    {
      quote: "Eric went above and beyond to provide a great installation on my (difficult) roof in Annapolis. Exceeded my expectations and was very professional through the whole process.",
      author: "Courtney G",
      location: "Annapolis, MD",
      service: "Starlink Installation",
      rating: 5, 
      delay: 0.4
    }
  ];

  const whyChooseUsPoints = [
    {
      icon: Target,
      title: "Local Expertise",
      description: "We understand the unique challenges of internet connectivity in the DMV area and provide solutions that work."
    },
    {
      icon: Star,
      title: "Fast & Reliable", 
      description: "Professional installations with enterprise-grade equipment ensure maximum performance and reliability."
    },
    {
      icon: Shield,
      title: "Ongoing Support",
      description: "24/7 monitoring and support ensure your connection stays strong when you need it most."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Professional Internet Solutions"
        title={
          <>
            Reliable Internet for the{' '}
            <span className="text-accent-blue">DMV Area</span>
          </>
        }
        description="From Starlink installations to mesh WiFi systems, we're your trusted local experts for reliable, high-speed internet solutions in Virginia, Maryland, and Washington DC."
        primaryCta={{
          text: "Get Free Quote",
          href: "/contact"
        }}
        secondaryCta={{
          text: "View Services", 
          href: "/services"
        }}
        rating={{
          value: 5,
          count: 150,
          text: "Trusted by local customers"
        }}
        features={[
          "Licensed & Insured",
          "Same-Day Service Available", 
          "5-Year Warranty",
          "Local DMV Experts"
        ]}
      />

      {/* Trust Bar */}
      <Section background="sky" padding="md">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimatedText variant="slideUp" delay={0.1}>
              <div className="font-headline text-3xl font-bold text-brand-navy mb-2">500+</div>
              <div className="text-text-secondary">Installations</div>
            </AnimatedText>
            <AnimatedText variant="slideUp" delay={0.2}>
              <div className="font-headline text-3xl font-bold text-brand-navy mb-2">Licensed</div>
              <div className="text-text-secondary">& Insured</div>
            </AnimatedText>
            <AnimatedText variant="slideUp" delay={0.3}>
              <div className="font-headline text-3xl font-bold text-brand-navy mb-2">24/7</div>
              <div className="text-text-secondary">Support</div>
            </AnimatedText>
            <AnimatedText variant="slideUp" delay={0.4}>
              <div className="font-headline text-3xl font-bold text-brand-navy mb-2">5-Year</div>
              <div className="text-text-secondary">Warranty</div>
            </AnimatedText>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section padding="xl">
        <Container>
          <div className="text-center mb-16">
            <AnimatedText as="h2" variant="slideUp" className="font-headline text-5xl font-semibold text-brand-navy mb-6">
              Our Services
            </AnimatedText>
            <AnimatedText variant="slideUp" delay={0.2} className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Professional internet solutions tailored to your needs, backed by local expertise and ongoing support.
            </AnimatedText>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard 
                key={service.href} 
                {...service}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Local Proof Section */}
      <Section background="sky" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <AnimatedText as="h2" variant="slideUp" className="font-headline text-5xl font-semibold text-brand-navy mb-6">
              Proudly Serving the DMV Area
            </AnimatedText>
            <AnimatedText variant="slideUp" delay={0.2} className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Local expertise you can trust. We know the unique challenges of internet connectivity 
              in Virginia, Maryland, and Washington DC.
            </AnimatedText>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/PXL_20250621_153112500~2.jpg",
                title: "Residential Installation",
                description: "Professional roof mount installation in Northern Virginia"
              },
              {
                image: "/PXL_20250629_142412601~2.jpg", 
                title: "Professional Setup",
                description: "Clean cable management and optimal positioning"
              },
              {
                image: "/PXL_20250705_164749333~3.jpg",
                title: "Quality Results", 
                description: "Every installation backed by our 90-day warranty"
              }
            ].map((item, index) => (
              <AnimatedText key={index} variant="slideUp" delay={index * 0.2}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={item.image}
                    alt={item.description}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-headline text-lg font-semibold text-brand-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section padding="xl">
        <Container>
          <div className="text-center mb-16">
            <AnimatedText as="h2" variant="slideUp" className="font-headline text-5xl font-semibold text-brand-navy mb-6">
              Why Choose Orbit Tech?
            </AnimatedText>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUsPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <AnimatedText key={index} variant="slideUp" delay={index * 0.2}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-accent-blue" />
                    </div>
                    <h3 className="font-headline text-2xl font-semibold text-brand-navy mb-4">
                      {point.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </AnimatedText>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section background="sky" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <AnimatedText as="h2" variant="slideUp" className="font-headline text-5xl font-semibold text-brand-navy mb-6">
              What Our Customers Say
            </AnimatedText>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                {...testimonial}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section background="navy" padding="xl" className="text-center">
        <Container>
          <AnimatedText as="h2" variant="slideUp" className="font-headline text-5xl font-semibold text-white mb-6">
            Ready to Upgrade Your Internet?
          </AnimatedText>
          <AnimatedText variant="slideUp" delay={0.2} className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-12">
            Get a free consultation and quote for your internet solution. 
            Our local experts are ready to help you stay connected.
          </AnimatedText>
          <AnimatedText variant="slideUp" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary"
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                Get Free Quote
              </Button>
              <Button 
                variant="ghost"
                size="lg"
                onClick={() => window.location.href = 'tel:5719996915'}
                className="text-white border-white hover:bg-white hover:text-brand-navy"
              >
                Call (571) 999-6915
              </Button>
            </div>
          </AnimatedText>
        </Container>
      </Section>
    </>
  );
}

