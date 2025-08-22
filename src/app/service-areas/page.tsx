"use client";

import React from 'react';
import { Button } from "@/components";

export default function ServiceAreasPage() {
  // Styles
  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 var(--space-lg)',
  };

  const sectionStyles: React.CSSProperties = {
    padding: 'var(--space-4xl) 0',
  };

  // Service areas data
  const serviceAreas = [
    {
      region: 'Northern Virginia',
      description: 'Serving Loudoun, Fairfax, Prince William, and Arlington counties with expert internet solutions for rural properties and urban businesses.',
      highlights: [
        'Rural Starlink installations in Loudoun County',
        'Business solutions in Tysons and Reston',
        'Mesh WiFi for large homes in Great Falls',
        'Fiber alternatives in Leesburg and Purcellville'
      ],
      href: '/service-areas/northern-virginia',
      icon: '🏔️',
      stats: {
        installations: '300+',
        cities: '25+',
        businesses: '50+'
      }
    },
    {
      region: 'Maryland',
      description: 'Professional internet services throughout Montgomery and Prince George\'s counties, from Bethesda offices to rural Poolesville properties.',
      highlights: [
        'Enterprise solutions in Bethesda and Rockville',
        'Rural connectivity in Montgomery County',
        'Mesh WiFi installations in Potomac',
        'Starlink setups in Poolesville and Clarksburg'
      ],
      href: '/service-areas/maryland',
      icon: '🦀',
      stats: {
        installations: '150+',
        cities: '15+',
        businesses: '30+'
      }
    },
    {
      region: 'Washington D.C.',
      description: 'Reliable internet solutions for D.C. businesses, government contractors, and residents requiring high-performance connectivity.',
      highlights: [
        'Government contractor network solutions',
        'Business internet for downtown offices',
        'Residential mesh WiFi in Georgetown',
        'Backup connectivity solutions citywide'
      ],
      href: '/service-areas/washington-dc',
      icon: '🏛️',
      stats: {
        installations: '75+',
        cities: '8+',
        businesses: '25+'
      }
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
            Proudly Serving the DMV
          </h1>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '800px',
            margin: '0 auto var(--space-2xl) auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            Local internet experts providing professional Starlink installations, mesh WiFi systems, 
            and business connectivity solutions throughout Virginia, Maryland, and Washington D.C.
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
              variant="tertiary" 
              size="lg"
              onClick={() => window.location.href = 'tel:7035550742'}
            >
              Call (571) 999-6915
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
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
              Our Service Areas
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Deep local expertise across the DMV region. We understand the unique connectivity 
              challenges of each area and provide tailored solutions.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: 'var(--space-2xl)',
          }}>
            {serviceAreas.map((area, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: 'var(--brand-white)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-2xl)',
                  padding: 'var(--space-2xl)',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'all 0.3s ease-in-out',
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onClick={() => window.location.href = area.href}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                  e.currentTarget.style.borderColor = 'var(--accent-blue)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                }}
              >
                {/* Region Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-md)',
                  marginBottom: 'var(--space-lg)',
                }}>
                  <div style={{
                    fontSize: '3rem',
                    lineHeight: 1,
                  }}>
                    {area.icon}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--brand-navy)',
                    lineHeight: 'var(--leading-tight)',
                    margin: 0,
                  }}>
                    {area.region}
                  </h3>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--leading-relaxed)',
                  marginBottom: 'var(--space-lg)',
                }}>
                  {area.description}
                </p>

                {/* Highlights */}
                <div style={{ marginBottom: 'var(--space-xl)', flex: 1 }}>
                  <h4 style={{
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--brand-navy)',
                    marginBottom: 'var(--space-md)',
                  }}>
                    Our Expertise:
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }}>
                    {area.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--space-sm)',
                        marginBottom: 'var(--space-sm)',
                      }}>
                        <span style={{
                          color: 'var(--accent-green)',
                          fontWeight: 'bold',
                          flexShrink: 0,
                        }}>✓</span>
                        <span style={{
                          fontSize: 'var(--text-sm)',
                          color: 'var(--text-primary)',
                          lineHeight: 'var(--leading-relaxed)',
                        }}>
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 'var(--space-md)',
                  marginBottom: 'var(--space-lg)',
                  padding: 'var(--space-lg)',
                  backgroundColor: 'var(--brand-sky)',
                  borderRadius: 'var(--radius-lg)',
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      fontFamily: 'var(--font-headline)',
                      fontSize: 'var(--text-lg)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--accent-blue)',
                      marginBottom: 'var(--space-xs)',
                    }}>
                      {area.stats.installations}
                    </div>
                    <div style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--text-secondary)',
                    }}>
                      Installations
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      fontFamily: 'var(--font-headline)',
                      fontSize: 'var(--text-lg)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--accent-blue)',
                      marginBottom: 'var(--space-xs)',
                    }}>
                      {area.stats.cities}
                    </div>
                    <div style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--text-secondary)',
                    }}>
                      Cities Served
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      fontFamily: 'var(--font-headline)',
                      fontSize: 'var(--text-lg)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--accent-blue)',
                      marginBottom: 'var(--space-xs)',
                    }}>
                      {area.stats.businesses}
                    </div>
                    <div style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--text-secondary)',
                    }}>
                      Businesses
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: 'var(--space-md)',
                  borderTop: '1px solid var(--border-light)',
                }}>
                  <span style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-muted)',
                  }}>
                    Local Expertise
                  </span>
                  <span style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--accent-blue)',
                    fontWeight: 'var(--font-weight-medium)',
                  }}>
                    Learn More →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
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
              Why Local Expertise Matters
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-2xl)',
          }}>
            <div style={{
              backgroundColor: 'var(--brand-white)',
              padding: 'var(--space-2xl)',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-md)',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-lg)' }}>🗺️</div>
              <h3 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'var(--text-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--brand-navy)',
                marginBottom: 'var(--space-md)',
              }}>
                Regional Knowledge
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
              }}>
                We understand the unique terrain, building codes, and connectivity challenges 
                specific to each DMV locality.
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--brand-white)',
              padding: 'var(--space-2xl)',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-md)',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-lg)' }}>⚡</div>
              <h3 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'var(--text-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--brand-navy)',
                marginBottom: 'var(--space-md)',
              }}>
                Fast Response Times
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
              }}>
                Local presence means faster site assessments, quicker installations, 
                and immediate support when you need it.
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--brand-white)',
              padding: 'var(--space-2xl)',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-md)',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-lg)' }}>🤝</div>
              <h3 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'var(--text-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--brand-navy)',
                marginBottom: 'var(--space-md)',
              }}>
                Community Commitment
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
              }}>
                We're invested in our community's success and build lasting relationships 
                with our neighbors and local businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map Placeholder */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--brand-navy)',
              marginBottom: 'var(--space-lg)',
            }}>
              Our Coverage Area
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Comprehensive coverage across the DMV region with local expertise in every area we serve.
            </p>
          </div>

          <div style={{
            backgroundColor: 'var(--brand-white)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'var(--space-2xl)',
            boxShadow: 'var(--shadow-lg)',
            textAlign: 'center',
          }}>
            <div style={{
              height: '400px',
              backgroundColor: 'var(--border-light)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 'var(--space-lg)',
            }}>
              <div style={{
                textAlign: 'center',
                color: 'var(--text-muted)',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>🗺️</div>
                <p style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-medium)' }}>
                  Interactive DMV Coverage Map
                </p>
                <p style={{ fontSize: 'var(--text-base)' }}>
                  Coming Soon - Detailed service area mapping
                </p>
              </div>
            </div>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: 'var(--text-base)',
            }}>
              Serving Virginia, Maryland, and Washington D.C. with professional internet solutions.
            </p>
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
            Ready to Connect with Your Local Experts?
          </h2>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '600px',
            margin: '0 auto var(--space-2xl) auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            Get a free site assessment from technicians who know your area. 
            Local expertise, professional service, guaranteed results.
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
              Schedule Free Assessment
            </Button>
            <Button 
              variant="tertiary" 
              size="lg"
              onClick={() => window.location.href = 'tel:7035550742'}
            >
              Call (571) 999-6915
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
