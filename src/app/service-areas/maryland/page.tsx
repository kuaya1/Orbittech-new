"use client";

import React from 'react';
import { Button, TestimonialCard } from "@/components";

export default function MarylandPage() {
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
      challenge: 'Solving Internet Issues in Montgomery County\'s Rural Areas',
      description: 'Rural Montgomery County faces unique connectivity challenges with limited fiber infrastructure and unreliable cable service.',
      solutions: [
        'Professional Starlink installations with optimal dish placement',
        'Site surveys accounting for Maryland\'s varied terrain and tree coverage',
        'Weatherproof mounting systems for Maryland\'s humid climate',
        'Integration with existing home networks and mesh systems'
      ],
      icon: '🌾'
    },
    {
      challenge: 'Upgrading Connectivity for Prince George\'s Businesses',
      description: 'Prince George\'s County businesses need reliable, scalable internet solutions to compete in the digital economy.',
      solutions: [
        'Redundant internet connections for maximum uptime',
        'Enterprise-grade mesh WiFi for large office spaces',
        'Dedicated business support with guaranteed response times',
        'Custom network design for multi-location businesses'
      ],
      icon: '🏢'
    },
    {
      challenge: 'Mesh WiFi for Large Homes in Bethesda',
      description: 'Bethesda\'s large properties and unique architecture create WiFi coverage challenges that require professional solutions.',
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
      location: 'Bethesda, MD',
      service: 'Starlink Installation',
      description: 'Professional rooftop installation for remote work family',
      image: '/installations/bethesda-starlink.jpg'
    },
    {
      location: 'Rockville, MD',
      service: 'Business Mesh WiFi',
      description: 'Enterprise mesh system for 12,000 sq ft office building',
      image: '/installations/rockville-business.jpg'
    },
    {
      location: 'Silver Spring, MD',
      service: 'Urban Connectivity',
      description: 'Starlink + mesh WiFi combo for townhouse complex',
      image: '/installations/silver-spring-urban.jpg'
    },
    {
      location: 'Potomac, MD',
      service: 'Whole-Home WiFi',
      description: '10-node mesh system for 9,000 sq ft home',
      image: '/installations/potomac-mesh.jpg'
    },
    {
      location: 'Gaithersburg, MD',
      service: 'Business Solutions',
      description: 'Redundant internet for tech company headquarters',
      image: '/installations/gaithersburg-tech.jpg'
    },
    {
      location: 'Germantown, MD',
      service: 'Starlink Installation',
      description: 'Ground mount system for suburban property',
      image: '/installations/germantown-suburban.jpg'
    }
  ];

  // Regional testimonials
  const regionalTestimonials = [
    {
      quote: 'Living in rural Montgomery County, we struggled with terrible internet for years. Orbit Tech\'s Starlink installation changed everything - we now have faster internet than our friends in Bethesda!',
      author: 'David Thompson',
      location: 'Germantown, MD',
      service: 'Starlink Installation',
      rating: 5
    },
    {
      quote: 'Our Prince George\'s office needed reliable internet for 40+ employees. Orbit Tech designed a redundant system that hasn\'t had a single outage in over a year. Outstanding service.',
      author: 'Lisa Rodriguez',
      location: 'College Park, MD',
      service: 'Business Solutions',
      rating: 5
    },
    {
      quote: 'Our Potomac home is 7,000 sq ft and we had dead zones everywhere. The mesh system Orbit Tech installed gives us perfect WiFi coverage in every room, including the outdoor patio.',
      author: 'Robert Kim',
      location: 'Potomac, MD',
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
            Your Local Starlink & Internet Experts in Maryland
          </h1>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '800px',
            margin: '0 auto var(--space-2xl) auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            Serving Montgomery, Prince George's, Anne Arundel, and Howard counties with professional 
            internet solutions tailored to Maryland's unique landscape and needs.
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
              Maryland Connectivity Expertise
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              We understand the unique challenges of Maryland's diverse landscape, 
              from rural Montgomery farms to urban Prince George's offices.
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
              See our recent work across Maryland communities. 
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
              What Maryland Customers Say
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Real feedback from your neighbors across Maryland.
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
              Maryland Coverage Areas
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Comprehensive coverage across all Maryland counties and cities.
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
                  Maryland Service Map
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
                  Montgomery County
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                }}>
                  Bethesda, Rockville, Silver Spring, Germantown, Gaithersburg
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
                  Prince George's County
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                }}>
                  College Park, Bowie, Hyattsville, Greenbelt, Laurel
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
                  Anne Arundel County
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                }}>
                  Annapolis, Glen Burnie, Severna Park, Crofton
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
                  Howard County
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                }}>
                  Columbia, Ellicott City, Clarksville, Fulton
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
            Ready to Upgrade Your Maryland Internet?
          </h2>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '700px',
            margin: '0 auto var(--space-2xl) auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            Join hundreds of satisfied Maryland customers who trust Orbit Tech 
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
            Serving Montgomery, Prince George's, Anne Arundel, and Howard counties with professional internet solutions.
          </p>
        </div>
      </section>
    </>
  );
}
