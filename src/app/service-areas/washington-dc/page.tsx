"use client";

import React from 'react';
import { Button, TestimonialCard } from "@/components";
import { Check } from 'lucide-react';

export default function WashingtonDCServiceAreaPage() {
  // Styles
  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 var(--space-lg)',
  };

  const sectionStyles: React.CSSProperties = {
    padding: 'var(--space-4xl) 0',
  };

  // Local expertise challenges and solutions
  const localChallenges = [
    {
      challenge: 'Business Connectivity in Downtown & Capitol Hill',
      description: 'Dense urban environments create unique challenges for reliable business internet with building interference and high-demand networks.',
      solutions: [
        'Enterprise-grade redundant connections for maximum uptime',
        'Professional site surveys for optimal signal placement',
        'Building-specific installation strategies for urban environments',
        'Integration with existing corporate network infrastructure'
      ],
      icon: '🏛️'
    },
    {
      challenge: 'Residential Solutions in Historic Neighborhoods',
      description: 'Historic D.C. neighborhoods have unique architectural constraints that require specialized internet solutions.',
      solutions: [
        'Discreet installations that preserve historic aesthetics',
        'Custom mounting solutions for row houses and condos',
        'Mesh WiFi systems optimized for narrow, multi-story homes',
        'Coordination with historic preservation requirements'
      ],
      icon: '🏘️'
    },
    {
      challenge: 'High-Density Living Connectivity',
      description: 'Apartment buildings and condos in D.C. face network congestion and coverage challenges in dense living environments.',
      solutions: [
        'Building-wide mesh network design and implementation',
        'Interference mitigation in high-density environments',
        'Scalable solutions for multi-unit residential buildings',
        'Dedicated bandwidth management for shared connections'
      ],
      icon: '🏢'
    }
  ];

  // Recent installations with specific locations
  const recentInstallations = [
    {
      location: 'Capitol Hill, DC',
      service: 'Business Solutions',
      description: 'Redundant internet for government consulting firm',
      image: '/installations/capitol-hill-business.jpg'
    },
    {
      location: 'Dupont Circle, DC',
      service: 'Residential Mesh WiFi',
      description: 'Whole-home coverage for historic row house',
      image: '/installations/dupont-circle-mesh.jpg'
    },
    {
      location: 'Georgetown, DC',
      service: 'Starlink Installation',
      description: 'Discreet rooftop installation for historic townhouse',
      image: '/installations/georgetown-starlink.jpg'
    },
    {
      location: 'Adams Morgan, DC',
      service: 'Multi-Unit Solutions',
      description: 'Building-wide WiFi for 20-unit apartment complex',
      image: '/installations/adams-morgan-building.jpg'
    },
    {
      location: 'Penn Quarter, DC',
      service: 'Business Connectivity',
      description: 'High-speed internet for downtown law firm',
      image: '/installations/penn-quarter-law.jpg'
    },
    {
      location: 'Foggy Bottom, DC',
      service: 'Residential Solutions',
      description: 'Mesh system for university area apartment',
      image: '/installations/foggy-bottom-residential.jpg'
    }
  ];

  // Regional testimonials
  const regionalTestimonials = [
    {
      quote: 'Our Capitol Hill consulting firm needed bulletproof internet for client meetings. Orbit Tech\'s redundant system has kept us connected through every important presentation. Absolutely reliable.',
      author: 'Amanda Foster',
      location: 'Capitol Hill, DC',
      service: 'Business Solutions',
      rating: 5
    },
    {
      quote: 'Living in a historic Georgetown row house, we thought good WiFi was impossible. Orbit Tech\'s mesh system gives us perfect coverage on all four floors without compromising the historic character.',
      author: 'James Wilson',
      location: 'Georgetown, DC',
      service: 'Mesh WiFi Setup',
      rating: 5
    },
    {
      quote: 'Our Adams Morgan apartment building had terrible internet for all residents. Orbit Tech designed a building-wide solution that gave everyone fast, reliable connectivity. Game changer.',
      author: 'Maria Gonzalez',
      location: 'Adams Morgan, DC',
      service: 'Multi-Unit Solutions',
      rating: 5
    }
  ];

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
            Your Local Starlink & Internet Experts in Washington D.C.
          </h1>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '800px',
            margin: '0 auto var(--space-2xl) auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            Serving all four quadrants of Washington D.C. with professional internet solutions 
            tailored to the unique challenges of our nation's capital.
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
              Get Free Site Assessment
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              onClick={() => window.location.href = 'tel:5719996915'}
            >
              Call (571) 999-6915
            </Button>
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--brand-navy)',
              marginBottom: 'var(--space-lg)',
            }}>
              Washington D.C. Urban Connectivity Expertise
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              We understand the unique challenges of D.C.'s dense urban environment, 
              from historic preservation requirements to high-rise connectivity needs.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: 'var(--space-2xl)',
          }}>
            {localChallenges.map((item, index) => (
              <div key={index} style={{
                backgroundColor: 'var(--brand-white)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-2xl)',
                boxShadow: 'var(--shadow-md)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-md)',
                  marginBottom: 'var(--space-lg)',
                }}>
                  <div style={{ fontSize: '3rem' }}>{item.icon}</div>
                  <h3 style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--brand-navy)',
                    lineHeight: 'var(--leading-tight)',
                    margin: 0,
                  }}>
                    {item.challenge}
                  </h3>
                </div>

                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--leading-relaxed)',
                  marginBottom: 'var(--space-lg)',
                }}>
                  {item.description}
                </p>

                <div style={{ flex: 1 }}>
                  <h4 style={{
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--brand-navy)',
                    marginBottom: 'var(--space-md)',
                  }}>
                    Our Solutions:
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }}>
                    {item.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--space-sm)',
                        marginBottom: 'var(--space-sm)',
                      }}>
                        <span style={{
                          color: 'var(--accent-green)',
                          fontWeight: 'bold',
                          flexShrink: 0,
                        }}><Check className="w-4 h-4" /></span>
                        <span style={{
                          fontSize: 'var(--text-sm)',
                          color: 'var(--text-primary)',
                          lineHeight: 'var(--leading-relaxed)',
                        }}>
                          {solution}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      {
/* Local Proof Gallery */}
      <section style={{
        ...sectionStyles,
        backgroundColor: 'var(--brand-sky)',
      }}>
        <div style={containerStyles}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--brand-navy)',
              marginBottom: 'var(--space-lg)',
            }}>
              Recent Installations in Your Area
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              See our recent work across Washington D.C. neighborhoods. 
              Professional installations with urban expertise.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-xl)',
          }}>
            {recentInstallations.map((installation, index) => (
              <div key={index} style={{
                backgroundColor: 'var(--brand-white)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}>
                {/* Installation Image Placeholder */}
                <div style={{
                  height: '200px',
                  backgroundColor: 'var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  fontSize: 'var(--text-lg)',
                }}>
                  📷 Installation Photo
                </div>

                <div style={{ padding: 'var(--space-xl)' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: 'var(--space-md)',
                  }}>
                    <h3 style={{
                      fontFamily: 'var(--font-headline)',
                      fontSize: 'var(--text-lg)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--brand-navy)',
                      margin: 0,
                    }}>
                      {installation.location}
                    </h3>
                    <span style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--accent-blue)',
                      fontWeight: 'var(--font-weight-medium)',
                      backgroundColor: 'var(--brand-sky)',
                      padding: 'var(--space-xs) var(--space-sm)',
                      borderRadius: 'var(--radius-md)',
                    }}>
                      {installation.service}
                    </span>
                  </div>

                  <p style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-secondary)',
                    lineHeight: 'var(--leading-relaxed)',
                    margin: 0,
                  }}>
                    {installation.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Testimonials */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--brand-navy)',
              marginBottom: 'var(--space-lg)',
            }}>
              What Washington D.C. Customers Say
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Real feedback from your neighbors across the District.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: 'var(--space-2xl)',
          }}>
            {regionalTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Map */}
      <section style={{
        ...sectionStyles,
        backgroundColor: 'var(--brand-sky)',
      }}>
        <div style={containerStyles}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--brand-navy)',
              marginBottom: 'var(--space-lg)',
            }}>
              Washington D.C. Coverage Areas
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Comprehensive coverage across all four quadrants of Washington D.C.
            </p>
          </div>

          <div style={{
            backgroundColor: 'var(--brand-white)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'var(--space-2xl)',
            boxShadow: 'var(--shadow-lg)',
          }}>
            {/* Map Placeholder */}
            <div style={{
              height: '300px',
              backgroundColor: 'var(--border-light)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 'var(--space-xl)',
            }}>
              <div style={{
                textAlign: 'center',
                color: 'var(--text-muted)',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>🗺️</div>
                <p style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-medium)' }}>
                  Washington D.C. Service Map
                </p>
                <p style={{ fontSize: 'var(--text-base)' }}>
                  Interactive coverage area mapping
                </p>
              </div>
            </div>

            {/* Coverage Areas List */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--space-lg)',
              textAlign: 'center',
            }}>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--brand-navy)',
                  marginBottom: 'var(--space-sm)',
                }}>
                  Northwest (NW)
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                }}>
                  Georgetown, Dupont Circle, Adams Morgan, Foggy Bottom, Tenleytown
                </p>
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--brand-navy)',
                  marginBottom: 'var(--space-sm)',
                }}>
                  Northeast (NE)
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                }}>
                  Capitol Hill, H Street Corridor, Brookland, Trinidad
                </p>
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--brand-navy)',
                  marginBottom: 'var(--space-sm)',
                }}>
                  Southwest (SW)
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                }}>
                  The Wharf, Navy Yard, Southwest Waterfront
                </p>
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--brand-navy)',
                  marginBottom: 'var(--space-sm)',
                }}>
                  Southeast (SE)
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                }}>
                  Anacostia, Congress Heights, Barry Farm, Historic Anacostia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        ...sectionStyles,
        background: 'linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-slate) 100%)',
        color: 'var(--text-inverse)',
        textAlign: 'center',
      }}>
        <div style={containerStyles}>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'var(--text-4xl)',
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: 'var(--space-lg)',
            lineHeight: 'var(--leading-tight)',
          }}>
            Ready to Upgrade Your Washington D.C. Internet?
          </h2>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '700px',
            margin: '0 auto var(--space-2xl) auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            Join hundreds of satisfied D.C. customers who trust Orbit Tech 
            for their internet connectivity needs. Urban expertise, professional service, guaranteed results.
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
              Schedule Free Site Assessment
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              onClick={() => window.location.href = 'tel:5719996915'}
            >
              Call (571) 999-6915
            </Button>
          </div>
          <p style={{
            fontSize: 'var(--text-sm)',
            marginTop: 'var(--space-lg)',
            opacity: 0.8,
          }}>
            Serving all four quadrants of Washington D.C. with professional internet solutions.
          </p>
        </div>
      </section>
    </>
  );
}

