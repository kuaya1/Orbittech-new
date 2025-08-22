"use client";

import React from 'react';
import { Button, TestimonialCard } from "@/components";

export default function NorthernVirginiaPage() {
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
      challenge: 'Solving Internet Issues in Loudoun\'s Rural Areas',
      description: 'Rural Loudoun County faces unique connectivity challenges with limited fiber infrastructure and unreliable DSL service.',
      solutions: [
        'Professional Starlink installations with optimal dish placement',
        'Site surveys accounting for rolling terrain and tree coverage',
        'Weatherproof mounting systems for Virginia\'s climate',
        'Integration with existing home networks and mesh systems'
      ],
      icon: '🌾'
    },
    {
      challenge: 'Upgrading Connectivity for Fairfax Businesses',
      description: 'Fairfax County businesses need reliable, scalable internet solutions to compete in the digital economy.',
      solutions: [
        'Redundant internet connections for maximum uptime',
        'Enterprise-grade mesh WiFi for large office spaces',
        'Dedicated business support with guaranteed response times',
        'Custom network design for multi-location businesses'
      ],
      icon: '🏢'
    },
    {
      challenge: 'Mesh WiFi for Large Homes in Great Falls',
      description: 'Great Falls\' large properties and unique architecture create WiFi coverage challenges that require professional solutions.',
      solutions: [
        'Comprehensive WiFi analysis for multi-story homes',
        'Strategic node placement for optimal coverage',
        'Integration with smart home systems and security',
        'Outdoor coverage for pool areas and guest houses'
      ],
      icon: '🏡'
    }
  ];

  // Recent installations with specific locations
  const recentInstallations = [
    {
      location: 'Reston, VA',
      service: 'Starlink Installation',
      description: 'Professional rooftop installation for remote work family',
      image: '/installations/reston-starlink.jpg'
    },
    {
      location: 'Fairfax, VA',
      service: 'Business Mesh WiFi',
      description: 'Enterprise mesh system for 15,000 sq ft office building',
      image: '/installations/fairfax-business.jpg'
    },
    {
      location: 'Leesburg, VA',
      service: 'Rural Connectivity',
      description: 'Starlink + mesh WiFi combo for 5-acre property',
      image: '/installations/leesburg-rural.jpg'
    },
    {
      location: 'Great Falls, VA',
      service: 'Whole-Home WiFi',
      description: '8-node mesh system for 8,000 sq ft home',
      image: '/installations/great-falls-mesh.jpg'
    },
    {
      location: 'Ashburn, VA',
      service: 'Business Solutions',
      description: 'Redundant internet for data center operations',
      image: '/installations/ashburn-datacenter.jpg'
    },
    {
      location: 'Purcellville, VA',
      service: 'Starlink Installation',
      description: 'Ground mount system for rural vineyard property',
      image: '/installations/purcellville-vineyard.jpg'
    }
  ];

  // Regional testimonials
  const regionalTestimonials = [
    {
      quote: 'Living in rural Loudoun County, we struggled with terrible internet for years. Orbit Tech\'s Starlink installation changed everything - we now have faster internet than our friends in town!',
      author: 'Sarah Johnson',
      location: 'Leesburg, VA',
      service: 'Starlink Installation',
      rating: 5
    },
    {
      quote: 'Our Fairfax office needed reliable internet for 50+ employees. Orbit Tech designed a redundant system that hasn\'t had a single outage in over a year. Exceptional service.',
      author: 'Michael Chen',
      location: 'Fairfax, VA',
      service: 'Business Solutions',
      rating: 5
    },
    {
      quote: 'Our Great Falls home is 6,000 sq ft and we had dead zones everywhere. The mesh system Orbit Tech installed gives us perfect WiFi coverage in every room, including the pool house.',
      author: 'Jennifer Martinez',
      location: 'Great Falls, VA',
      service: 'Mesh WiFi Setup',
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
            Your Local Starlink & Internet Experts in Northern Virginia
          </h1>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '800px',
            margin: '0 auto var(--space-2xl) auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            Serving Loudoun, Fairfax, Prince William, and Arlington counties with professional 
            internet solutions tailored to Northern Virginia's unique landscape and needs.
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
              Northern Virginia Connectivity Expertise
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              We understand the unique challenges of Northern Virginia's diverse landscape, 
              from rural Loudoun farms to urban Fairfax offices.
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
                        }}>✓</span>
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
      </section>

      {/* Local Proof Gallery */}
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
              See our recent work across Northern Virginia communities. 
              Professional installations with local expertise.
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
              What Northern Virginia Customers Say
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Real feedback from your neighbors across Northern Virginia.
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
              Northern Virginia Coverage Areas
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Comprehensive coverage across all Northern Virginia counties and cities.
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
                  Northern Virginia Service Map
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
                  Loudoun County
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                }}>
                  Leesburg, Purcellville, Ashburn, Sterling, Herndon
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
                  Fairfax County
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                }}>
                  Reston, Fairfax, Great Falls, McLean, Vienna
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
                  Prince William
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                }}>
                  Manassas, Woodbridge, Gainesville, Haymarket
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
                  Arlington County
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                }}>
                  Arlington, Rosslyn, Ballston, Crystal City
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
            Ready to Upgrade Your Northern Virginia Internet?
          </h2>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '700px',
            margin: '0 auto var(--space-2xl) auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            Join hundreds of satisfied Northern Virginia customers who trust Orbit Tech 
            for their internet connectivity needs. Local expertise, professional service, guaranteed results.
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
              variant="tertiary" 
              size="lg"
              onClick={() => window.location.href = 'tel:7035550742'}
            >
              Call (571) 999-6915
            </Button>
          </div>
          <p style={{
            fontSize: 'var(--text-sm)',
            marginTop: 'var(--space-lg)',
            opacity: 0.8,
          }}>
            Serving Loudoun, Fairfax, Prince William, and Arlington counties with professional internet solutions.
          </p>
        </div>
      </section>
    </>
  );
}
