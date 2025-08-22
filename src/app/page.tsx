"use client";

import React, { useState } from 'react';
import { Button, ServiceCard, TestimonialCard } from "@/components";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Container styles
  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 var(--space-lg)',
  };

  const sectionStyles: React.CSSProperties = {
    padding: 'var(--space-4xl) 0',
  };

  // Services data
  const services = [
    {
      title: "Starlink Installation",
      description: "Professional Starlink satellite internet installation with optimal positioning for maximum speed and reliability.",
      icon: "SATELLITE",
      features: [
        "Site survey and optimal placement",
        "Professional mounting and weatherproofing",
        "Network configuration and testing",
        "1-year installation warranty"
      ],
      href: "/services/starlink",
      price: "$499"
    },
    {
      title: "Mesh WiFi Systems",
      description: "Eliminate dead zones with enterprise-grade mesh WiFi systems that provide seamless coverage throughout your property.",
      icon: "WIFI",
      features: [
        "Whole-home WiFi coverage",
        "Seamless device handoff",
        "Advanced security features",
        "Remote monitoring and support"
      ],
      href: "/services/mesh-wifi",
      price: "$199"
    },
    {
      title: "Business Solutions",
      description: "Scalable internet and networking solutions designed for businesses that demand reliability and performance.",
      icon: "BUSINESS",
      features: [
        "Redundant internet connections",
        "Enterprise-grade security",
        "24/7 monitoring and support",
        "Custom network design"
      ],
      href: "/services/business",
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
      rating: 5
    },
    {
      quote: "Fantastic job with a very challenging roof and receiver location. Eric provided options and worked with us to get the receiver and hiding associated wires and router in the perfect place for us.",
      author: "Dave Wiseman",
      location: "Northern Virginia",
      service: "Starlink Installation",
      rating: 5
    },
    {
      quote: "Eric went above and beyond to provide a great installation on my (difficult) roof in Annapolis. Exceeded my expectations and was very professional through the whole process.",
      author: "Courtney G",
      location: "Annapolis, MD",
      service: "Starlink Installation",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section style={{
        ...sectionStyles,
        background: 'linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-slate) 100%)',
        color: 'var(--text-inverse)',
        textAlign: 'center',
      }}>
        <div style={containerStyles}>
          <h1 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'var(--text-6xl)',
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: 'var(--space-lg)',
            lineHeight: 'var(--leading-tight)',
          }}>
            Professional Internet Solutions for the DMV
          </h1>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '800px',
            margin: '0 auto var(--space-2xl) auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            From Starlink installations to mesh WiFi systems, we're your trusted local experts 
            for reliable, high-speed internet solutions in Virginia, Maryland, and Washington DC.
          </p>
          <div style={{
            display: 'flex',
            gap: 'var(--space-lg)',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Get Free Quote
            </Button>
            <Button 
              variant="tertiary" 
              size="lg"
              onClick={() => window.location.href = '/services'}
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section style={{
        padding: 'var(--space-2xl) 0',
        backgroundColor: 'var(--brand-white)',
      }}>
        <div style={containerStyles}>
          <div style={{
            borderRadius: 'var(--radius-2xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-xl)',
          }}>
            <picture>
              <source media="(max-width: 768px)" srcSet="/hero mobile image.png" />
              <img 
                src="/hero desktop image.png" 
                alt="Professional Starlink installation in the DMV area by Orbit Tech"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </picture>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{
        backgroundColor: 'var(--brand-sky)',
        padding: 'var(--space-xl) 0',
      }}>
        <div style={containerStyles}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-xl)',
            textAlign: 'center',
          }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'var(--text-3xl)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--brand-navy)',
                marginBottom: 'var(--space-xs)',
              }}>500+</div>
              <div style={{ color: 'var(--text-secondary)' }}>Installations</div>
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'var(--text-3xl)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--brand-navy)',
                marginBottom: 'var(--space-xs)',
              }}>Licensed</div>
              <div style={{ color: 'var(--text-secondary)' }}>& Insured</div>
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'var(--text-3xl)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--brand-navy)',
                marginBottom: 'var(--space-xs)',
              }}>24/7</div>
              <div style={{ color: 'var(--text-secondary)' }}>Support</div>
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'var(--text-3xl)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--brand-navy)',
                marginBottom: 'var(--space-xs)',
              }}>5-Year</div>
              <div style={{ color: 'var(--text-secondary)' }}>Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'var(--text-5xl)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--brand-navy)',
              marginBottom: 'var(--space-lg)',
            }}>
              Our Services
            </h2>
            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Professional internet solutions tailored to your needs, backed by local expertise and ongoing support.
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: 'var(--space-2xl)',
          }}>
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Local Proof Section */}
      <section style={{
        ...sectionStyles,
        backgroundColor: 'var(--brand-sky)',
      }}>
        <div style={containerStyles}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'var(--text-5xl)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--brand-navy)',
              marginBottom: 'var(--space-lg)',
            }}>
              Proudly Serving the DMV Area
            </h2>
            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto var(--space-2xl) auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Local expertise you can trust. We know the unique challenges of internet connectivity 
              in Virginia, Maryland, and Washington DC.
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-lg)',
          }}>
            <div style={{
              backgroundColor: 'var(--brand-white)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
            }}>
              <img 
                src="/PXL_20250621_153112500~2.jpg" 
                alt="Professional Starlink installation on residential roof in Northern Virginia"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                }}
              />
              <div style={{ padding: 'var(--space-lg)' }}>
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--brand-navy)',
                  marginBottom: 'var(--space-sm)',
                }}>
                  Residential Installation
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                  Professional roof mount installation in Northern Virginia
                </p>
              </div>
            </div>
            <div style={{
              backgroundColor: 'var(--brand-white)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
            }}>
              <img 
                src="/PXL_20250629_142412601~2.jpg" 
                alt="Starlink dish installation with professional cable management"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                }}
              />
              <div style={{ padding: 'var(--space-lg)' }}>
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--brand-navy)',
                  marginBottom: 'var(--space-sm)',
                }}>
                  Professional Setup
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                  Clean cable management and optimal positioning
                </p>
              </div>
            </div>
            <div style={{
              backgroundColor: 'var(--brand-white)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
            }}>
              <img 
                src="/PXL_20250705_164749333~3.jpg" 
                alt="Completed Starlink installation in DMV area"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                }}
              />
              <div style={{ padding: 'var(--space-lg)' }}>
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--brand-navy)',
                  marginBottom: 'var(--space-sm)',
                }}>
                  Quality Results
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                  Every installation backed by our 90-day warranty
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'var(--text-5xl)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--brand-navy)',
              marginBottom: 'var(--space-lg)',
            }}>
              Why Choose Orbit Tech?
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-2xl)',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-lg)' }}>🎯</div>
              <h3 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'var(--text-2xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--brand-navy)',
                marginBottom: 'var(--space-md)',
              }}>Local Expertise</h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
              }}>
                We understand the unique challenges of internet connectivity in the DMV area and provide solutions that work.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-lg)' }}>⚡</div>
              <h3 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'var(--text-2xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--brand-navy)',
                marginBottom: 'var(--space-md)',
              }}>Fast & Reliable</h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
              }}>
                Professional installations with enterprise-grade equipment ensure maximum performance and reliability.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-lg)' }}>🛡️</div>
              <h3 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'var(--text-2xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--brand-navy)',
                marginBottom: 'var(--space-md)',
              }}>Ongoing Support</h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
              }}>
                24/7 monitoring and support ensure your connection stays strong when you need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section style={{
        ...sectionStyles,
        backgroundColor: 'var(--brand-sky)',
      }}>
        <div style={containerStyles}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'var(--text-5xl)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--brand-navy)',
              marginBottom: 'var(--space-lg)',
            }}>
              What Our Customers Say
            </h2>
          </div>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
          }}>
            <TestimonialCard {...testimonials[currentTestimonial]} />
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--space-md)',
              marginTop: 'var(--space-xl)',
            }}>
              <button
                onClick={prevTestimonial}
                style={{
                  backgroundColor: 'var(--brand-white)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--brand-navy)',
                }}
              >
                ←
              </button>
              <button
                onClick={nextTestimonial}
                style={{
                  backgroundColor: 'var(--brand-white)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--brand-navy)',
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section style={{
        ...sectionStyles,
        background: 'linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-slate) 100%)',
        color: 'var(--text-inverse)',
        textAlign: 'center',
      }}>
        <div style={containerStyles}>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'var(--text-5xl)',
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: 'var(--space-lg)',
            lineHeight: 'var(--leading-tight)',
          }}>
            Ready to Upgrade Your Internet?
          </h2>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '600px',
            margin: '0 auto var(--space-2xl) auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            Get a free consultation and quote for your internet solution. 
            Our local experts are ready to help you stay connected.
          </p>
          <div style={{
            display: 'flex',
            gap: 'var(--space-lg)',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Get Free Quote
            </Button>
            <Button 
              variant="tertiary" 
              size="lg"
              onClick={() => window.location.href = 'tel:5719996915'}
            >
              Call (571) 999-6915
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
